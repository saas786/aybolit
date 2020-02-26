import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-institute-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';

import * as JWPApp from '@conversionxl/cxl-ui/src/components/cxl-jwp-playlist.js';

import { useEffect } from '@storybook/client-api';

export default {
  title: 'CXL UI'
};

export const CxlJWPPlaylist = () => {
  useEffect(() => {
    JWPApp.app.init();
    window.app = JWPApp.app;
  }, []);
  return html`
    <div class="main">
      <strong>Course web learning</strong>
      <ul id="videoList"></ul>
    </div>
    <div class="modal_view">
      <div class="close">back to list</div>
      <video controls id="preview_video"></video>
    </div>
  `;
};

CxlJWPPlaylist.story = {
  name: 'cxl-jwp-playlist'
};
