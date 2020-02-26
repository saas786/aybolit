import $ from 'jquery';

import videoList from '../../../storybook/cxl-ui/cxl-jwp-playlist.data';

const jwt = require('jsonwebtoken');
const md5 = require('md5');
const moment = require('moment');

const db = {
  db: null,
  allDocs: [],
  init() {
    const self = this;
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      this.db = new PouchDB('video');
      // eslint-disable-next-line func-names
      this.db.allDocs({ include_docs: true, descending: true }, function(err, doc) {
        self.allDocs = doc.rows;
        resolve();
      });
    });
  }
};

const app = {
  playerInstance: null,
  async init() {
    const self = this;
    await db.init();
    await this.loadVideoList();
    const playerElement = 'preview_video';

    // eslint-disable-next-line no-undef
    self.playerInstance = jwplayer(playerElement).setup({
      width: '720',
      height: '410',
      controlbar: 'over',
      autostart: 'false',
      file:
        'https://content.jwplatform.com/videos/S0f114Rw-fen5Ioq8.mp4?sig=b1b2ccf855d3b4a7b34c5b717141d797&exp=1582650071'
    });

    // eslint-disable-next-line func-names
    self.playerInstance.on('error', function(e) {
      // eslint-disable-next-line no-console
      console.log(e);
    });

    self.closeVideoModal();
  },
  closeVideoModal() {
    const self = this;

    // eslint-disable-next-line func-names
    const doEscape = function() {
      if ($('.modal_view').is(':visible')) {
        $('.modal_view').css('display', 'none');
        self.playerInstance.pause();
      }
    };

    // eslint-disable-next-line func-names
    document.addEventListener('keydown', function(evt) {
      // eslint-disable-next-line no-param-reassign
      evt = evt || window.event;

      // eslint-disable-next-line eqeqeq
      if (evt.keyCode == 27) {
        doEscape();
      }
    });

    // eslint-disable-next-line func-names
    $('.modal_view .close').on('click', function() {
      doEscape();
    });
  },
  loadVideoList() {
    // eslint-disable-next-line no-console
    console.log('load list');

    const videoListUl = $('#videoList');
    videoListUl.empty();
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < videoList.length; i++) {
      const item = `<li id="li_${videoList[i].id}"></li>`;
      videoListUl.append(item);
      this.getDownloadTool(videoList[i]);
    }
  },
  async getDownloadTool(item) {
    await db.init();
    let res;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < db.allDocs.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (db.allDocs[i].id == `video_${item.id}`) {
        res =
          `<button class="downloaded" onclick="app.playVideo(${item.id})">` +
          `<span> See Video ${item.title}</span>` +
          `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-play fa-w-14 fa-4x"><g class="fa-group"><path fill="currentColor" d="M424.41 214.66L72.41 6.55C43.81-10.34 0 6.05 0 47.87V464c0 37.5 40.69 60.09 72.41 41.3l352-208c31.4-18.54 31.5-64.14 0-82.64zM321.89 283.5L112.28 407.35C91 420 64 404.58 64 379.8V132c0-24.78 27-40.16 48.28-27.54l209.61 123.95a32 32 0 0 1 0 55.09z" class="fa-secondary"></path><path fill="currentColor" d="M112.28 104.48l209.61 123.93a32 32 0 0 1 0 55.09L112.28 407.35C91 420 64 404.58 64 379.8V132c0-24.76 27-40.14 48.28-27.52z" class="fa-primary"></path></g></svg>` +
          `</button>` +
          `<div class="progress-bar" id="pb_${item.id}"><div></div></div>`;

        $(`#li_${item.id}`).html('');
        $(`#li_${item.id}`).append(res);

        return;
      }
    }

    res =
      `<button onclick="app.downloadVideo(${item.id})">` +
      `<span> Download Video ${item.title}</span>` +
      `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="cloud-download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-cloud-download fa-w-20 fa-5x"><path fill="currentColor" d="M571.7 238.8c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96zM405.2 254.5c-4.7-4.7-12.3-4.7-17 0L320 322.7V172c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v150.7l-68.2-68.2c-4.7-4.7-12.3-4.7-17 0l-5.7 5.7c-4.7 4.7-4.7 12.3 0 17l98.3 98.3c4.7 4.7 12.3 4.7 17 0l98.3-98.3c4.7-4.7 4.7-12.3 0-17l-5.5-5.7z" class=""></path></svg>` +
      `</button>` +
      `<div class="progress-bar" id="pb_${item.id}"><div></div></div>`;

    $(`#li_${item.id}`).html('');
    $(`#li_${item.id}`).append(res);
  },
  signURL(video) {
    const exp = moment()
      .add(12, 'hours')
      .unix(); // 1582715818;

    let url;
    const mediaID = video.mediaid;

    const jwplayerSecret = 'lMP97PNgoqKqMbGfYtgrKCKt';
    const resource = `/v2/media/${mediaID}`;

    const tokenBody = {
      resource,
      exp
    };

    const jwtToken = jwt.sign(tokenBody, jwplayerSecret);

    url = `https://cdn.jwplayer.com${resource}?token=${jwtToken}`;

    const path = `videos/${video.file}`;
    const signature = md5(`${path}:${exp}:${jwplayerSecret}`);
    url = `https://content.jwplatform.com/${path}?sig=${signature}&exp=${exp}`;
    // url = 'https://content.jwplatform.com/videos/UeZx9tOv-dyIaq8oh.mp4?sig=71257bf8043464954b652df76d0cd56c&exp=1582714029';

    return url;
  },
  downloadVideo(id) {
    const self = this;

    let video = null;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < videoList.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (videoList[i].id == id) {
        video = videoList[i];
      }
    }

    if (!video) {
      // eslint-disable-next-line no-alert
      alert('video invalid');
      return false;
    }

    const videoFile = self.signURL(video);

    $.ajax({
      url: videoFile,
      cache: false,
      xhr() {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'arraybuffer';
        // Upload progress
        // eslint-disable-next-line func-names
        xhr.addEventListener('progress', function(e) {
          if (e.lengthComputable) {
            // eslint-disable-next-line no-console
            console.log((100 * e.loaded) / e.total);
            $(`#pb_${video.id} > div`).css('width', `${(100 * e.loaded) / e.total}%`);
          }
        });
        return xhr;
      },
      success(data) {
        const videoRow = {
          _id: `video_${video.id}`,
          title: video.title,
          _attachments: {
            'video.mp4': {
              content_type: 'video/mp4',
              data: new Blob([new Uint8Array(data)], { type: 'video/mp4' })
            }
          }
        };

        db.db
          .put(videoRow)
          // eslint-disable-next-line no-unused-vars,func-names
          .then(function(result) {
            // alert('video success download , can watch in download list')
            self.getDownloadTool(video);
          })
          // eslint-disable-next-line func-names
          .catch(function(err) {
            // eslint-disable-next-line no-console
            console.log(err);
          });
      }
    });

    return true;
  },
  async playVideo(id) {
    const doc = await db.db.getAttachment(`video_${id}`, 'video.mp4');

    const url = (global =>
      global.URL && global.URL.createObjectURL ? global.URL : global.webkitURL || global.mozURL)(
      window
    );

    const blobUrl = url.createObjectURL(doc);

    $('.modal_view').css('display', 'flex');

    let element = document.getElementById('preview_video');
    // eslint-disable-next-line no-undef
    element = jwplayer(element);

    const playlist = element.getPlaylist();
    const playlistItemID = id - 1;

    // blobUrl = 'http://dev.cxlplayer.com:8080/pwa_offline_video_download/src/video/2p16lk0w-32695784.mp4';

    const newItem = {
      file: blobUrl,
      image: videoList[playlistItemID].image,
      title: videoList[playlistItemID].title,
      type: videoList[playlistItemID].type
    };

    playlist[0] = newItem;
    element.load(playlist);

    element.playlistItem(0).play();
  }
};

export { app };
