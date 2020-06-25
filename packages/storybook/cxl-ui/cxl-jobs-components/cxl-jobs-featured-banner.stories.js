import {html} from 'lit-html';
import {Headroom} from '@conversionxl/cxl-ui';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-button';
import '@conversionxl/cxl-ui/src/components/cxl-jobs-featured-banner.js';
import {useEffect} from '@storybook/addons';
// import contextMenuItems from "../cxl-marketing-nav.data";

export default {
  title: 'CXL UI|cxl-jobs-components'
};

export const CXlJobsFeaturedBanner = () => {
  useEffect(() => {
    // Populate `<cxl-marketing-nav>` context menus.
    const cxlMarketingNavElement = document.querySelector('cxl-marketing-nav');

    // cxlMarketingNavElement.contextMenuItems = contextMenuItems;

    // headroom.js
    const headroom = new Headroom(cxlMarketingNavElement, {
      tolerance: {
        up: 30,
        down: 0
      }
    });

    headroom.init();

    /**/
    // Populate `<cxl-jobs-featured-banner>` context menus.
    const cxlBanner = document.querySelector('cxl-jobs-featured-banner');

    console.log(cxlBanner);

    // headroom.js
    const headroom2 = new Headroom(cxlBanner, {
      offset: 300,
      tolerance: {
        up: 100,
        down: 0
      },
      classes: {
        // when scrolling up
        pinned: 'headroom--unpinned',
        // when scrolling down
        unpinned: 'headroom--pinned'
      }
    });

    headroom2.init();
    /**/
  }, []);

  return html`
    <style>
      html {
        --cxl-jobs-box-shadow-xs: -4px 4px 0 0 var(--lumo-shade-10pct);
        --cxl-jobs-box-shadow-s: -6px 6px 0 0 var(--lumo-shade-10pct);
        --cxl-jobs-box-shadow-m: -8px 8px 0 0 var(--lumo-shade-10pct);
        --cxl-jobs-box-shadow-l: -10px 10px 0 0 var(--lumo-shade-10pct);
        --cxl-jobs-box-shadow-xl: -12px 12px 0 0 var(--lumo-shade-10pct);
      }

      .shadow-xs {
        box-shadow: var(--cxl-jobs-box-shadow-xs);
      }
    </style>
    <cxl-marketing-nav class="menu menu-primary" role="navigation" id="menu-primary" aria-label="Primary Menu"
                       itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement" slot="header">

        <template id="cxl-marketing-nav-search-form-template">
            <vaadin-context-menu-item class="menu-item-search">
                <form id="search-form" role="search" method="get" class="search-form" action="https://jobs.uprecords.org/">
                    <label for="search-input">Search CXL Jobs app:</label>
                    <input id="search-input" type="search" class="search-field" placeholder="Search …" value="" name="s">
                    <vaadin-button type="submit" class="search-submit" aria-label="Search" theme="icon"
                                   onclick="document.getElementById('search-form').submit();">
                        <iron-icon icon="lumo:angle-right"></iron-icon>
                    </vaadin-button>
                </form>
            </vaadin-context-menu-item>
        </template>

        <vaadin-tabs id="menu-global-items" class="menu-items" theme="cxl-marketing-nav" selected="-1">
            <vaadin-tab theme="cxl-marketing-nav" id="menu-item-459"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-459 menu-item- menu-item-depth-0">
                <a href="https://jobs.uprecords.org/#home"><span data-post-status="publish"></span>
                    <iron-icon icon="cxl:logo" style="width: var(--lumo-icon-size-xl, 48px);"></iron-icon>
                </a></vaadin-tab>
            <vaadin-tab theme="cxl-marketing-nav" id="menu-item-461"
                        class="menu-item-split-nav menu-item menu-item-type-post_type menu-item-object-page menu-item-461 menu-item-internships menu-item-depth-0">
                <a href="https://jobs.uprecords.org/internships/"><span data-post-status="publish"></span><span
                        data-post-status="publish"></span>Internships</a></vaadin-tab>
            <vaadin-tab theme="cxl-marketing-nav" id="menu-item-382"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-382 menu-item-job-apply menu-item-depth-0">
                <a href="https://jobs.uprecords.org/job-apply/"><span data-post-status="publish"></span><span
                        data-post-status="publish"></span>Job Apply</a></vaadin-tab>
            <vaadin-tab theme="cxl-marketing-nav" id="menu-item-383"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-383 menu-item-home-02 menu-item-depth-0">
                <a href="https://jobs.uprecords.org/home-02/"><span data-post-status="publish"></span><span
                        data-post-status="publish"></span>Home 02</a></vaadin-tab>
            <vaadin-tab theme="cxl-marketing-nav" id="menu-item-384"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-384 menu-item-jobs menu-item-depth-0">
                <a href="https://jobs.uprecords.org/jobs/"><span data-post-status="publish"></span><span
                        data-post-status="publish"></span>Jobs</a></vaadin-tab>
            <vaadin-tab theme="cxl-marketing-nav" id="menu-item-385"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-385 menu-item-post-a-job menu-item-depth-0">
                <a href="https://jobs.uprecords.org/post-a-job/"><span data-post-status="publish"></span><span
                        data-post-status="publish"></span>Post a Job</a></vaadin-tab>
            <vaadin-tab theme="cxl-marketing-nav" id="menu-item-535"
                        class="logged-in-only nmr-logged-in menu-item menu-item-type-post_type menu-item-object-page menu-item-535 menu-item-job-dashboard menu-item-depth-0">
                <a href="https://jobs.uprecords.org/job-dashboard/"><span data-post-status="publish"></span><span
                        data-post-status="publish"></span>Job Dashboard</a></vaadin-tab>
            <vaadin-tab theme="cxl-marketing-nav" id="menu-item-386"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-386 menu-item-see-current-openings menu-item-depth-0">
                <a title="Current openings" href="https://jobs.uprecords.org/all-jobs/"><span
                        data-post-status="publish"></span>
                    <vaadin-button theme="outlined" tabindex="0" role="button">See current openings</vaadin-button>
                </a></vaadin-tab>
        </vaadin-tabs>
        <!--<script>
            window.CXL = window.CXL || {};
            window.CXL.contextMenuItems = window.CXL.contextMenuItems || {};
            window.CXL.contextMenuItems["global"] = [{
                "depth": 0,
                "text": "",
                "component": "a",
                "href": "https:\\/\\/jobs.uprecords.org\\/#home",
                "id": 459,
                "parent": 0
            }, {
                "depth": 0,
                "text": "Internships",
                "component": "a",
                "href": "https:\\/\\/jobs.uprecords.org\\/internships\\/",
                "id": 461,
                "parent": 0
            }, {
                "depth": 0,
                "text": "Job Apply",
                "component": "a",
                "href": "https:\\/\\/jobs.uprecords.org\\/job-apply\\/",
                "id": 382,
                "parent": 0
            }, {
                "depth": 0,
                "text": "Home 02",
                "component": "a",
                "href": "https:\\/\\/jobs.uprecords.org\\/home-02\\/",
                "id": 383,
                "parent": 0
            }, {
                "depth": 0,
                "text": "Jobs",
                "component": "a",
                "href": "https:\\/\\/jobs.uprecords.org\\/jobs\\/",
                "id": 384,
                "parent": 0
            }, {
                "depth": 0,
                "text": "Post a Job",
                "component": "a",
                "href": "https:\\/\\/jobs.uprecords.org\\/post-a-job\\/",
                "id": 385,
                "parent": 0
            }, {
                "depth": 0,
                "text": "Job Dashboard",
                "component": "a",
                "href": "https:\\/\\/jobs.uprecords.org\\/job-dashboard\\/",
                "id": 535,
                "parent": 0
            }, {
                "depth": 0,
                "text": "See current openings",
                "component": "a",
                "href": "https:\\/\\/jobs.uprecords.org\\/all-jobs\\/",
                "id": 386,
                "parent": 0
            }];
        </script>-->
    </cxl-marketing-nav><!-- #menu-primary -->

    <hr style="margin: 4rem auto;max-width: 24rem;background-color: var(--lumo-primary-color);"/>
    <h1 class="entry-title" itemprop="headline">Treasurer</h1>

    <div class="wrap-main wrap">
      <cxl-jobs-featured-banner class="_sticky-featured-banner _shadow-xs" sticky>
        <h3 class="job-title">Treasurer</h3>
        <span class="job-location">Remote</span>
        <ul class="job-types">
          <li class="job-type full-time">Full Time</li>
          <li class="job-type part-time">Part Time</li>
        </ul>
        <vaadin-button
          class="jobs-apply-now"
          theme="primary large"
          style="cursor: pointer; font-weight: normal;"
          tabindex="0"
          role="button"
        >
          Apply Now
        </vaadin-button>
      </cxl-jobs-featured-banner>

      <cxl-jobs-featured-banner class="_sticky-featured-banner shadow-xs" style="margin: 1rem -4rem 2rem;" stickyss>
        <p>
            901 S. MoPac Expy Suite 150, Barton Oaks Plaza One
        </p>

        <vaadin-button
          class="jobs-open-positions"
          onclick="window.location.href='https://jobs.uprecords.org/austin-tx/#see-opening-position'"
          theme="primary large"
          style="cursor: pointer; font-weight: normal;" tabindex="0" role="button"
          >
          See Open Positions
        </vaadin-button>
      </cxl-jobs-featured-banner>

      <!--
      <hr/>
      <style>

          .breadcrumb-trail.breadcrumbs {
              display: none;
          }

          .clx-jobs-featured-banner-wrapper {
              margin-top: var(--lumo-space-m);
              margin-bottom: var(--lumo-space-xl);
          }

          .clx-jobs-featured-banner {
              --cxl-separator-size: calc(var(--lumo-space-m) * 0.75);
          }

          .clx-jobs-featured-banner > * {
              position: relative;
              margin-left: var(--cxl-separator-size);
              padding-left: var(--cxl-separator-size);
          }

          .clx-jobs-featured-banner > :not(:first-child):not(:last-child)::before {
              width: 3px;
              height: 3px;
              content: "";
              left: 0;
              border-radius: 50%;
              background-color: var(--lumo-contrast-70pct);
              display: inline-block;
              position: absolute;
          }

          .clx-jobs-featured-banner .job-title {
              margin: 0;
              width: auto;
          }

          .clx-jobs-featured-banner .job-location {
              display: block;
          }

          .clx-jobs-featured-banner .job-types {
              margin: 0 0 0 var(--cxl-separator-size);
              padding: 0 0 0 var(--cxl-separator-size);
              display: flex;
              list-style: none;
              align-items: center;
          }

          .clx-jobs-featured-banner .job-type {
              color: inherit;
          }

          .clx-jobs-featured-banner .job-type + .job-type:before {
              content: ", ";
          }

          .clx-jobs-featured-banner.headroom--pinned {
              transform: translateY(0);
              position: fixed;
              left: 0;
              right: 0;
              top: 0;
              margin: 0;
          }

          .clx-jobs-featured-banner.headroom--unpinned {
              transform: translateY(0);
          }

          .clx-jobs-featured-banner:not(.headroom--pinned) .job-title,
          .clx-jobs-featured-banner .job-location::before {
              display: none !important;
          }

          .clx-jobs-featured-banner:not(.headroom--pinned) .job-location {
              margin-left: 0 !important;
          }
      </style>
      <script type="module">
          ((el) => {
              window.CXL = window.CXL || {};
              window.CXL.Jobs = window.CXL.Jobs || {};

              window.CXL.Jobs.getAdminBarHeight = function () {
                  var wpAdminBarEl = document.getElementById('wpadminbar');
                  if ( wpAdminBarEl ) {
                      return wpAdminBarEl.offsetHeight;
                  }

                  return 0;
              }

              window.CXL.Jobs.getNavHeight = function () {
                  var navEl = window.CXL.Jobs.navElement;
                  if ( navEl ) {
                      return navEl.offsetHeight;
                  }

                  return 0;
              }

              customElements.whenDefined(el).then(() => {
                  // store cxl-marketing-nav
                  // so can calculate its height later.
                  window.CXL.Jobs.navElement = document.querySelector(el);

                  el = document.querySelector('.clx-jobs-featured-banner.sticky-featured-banner');

                  if ( ! el ) {
                      return;
                  }

                  /**
                   * Headroom.
                   *
                   * @see https://github.com/WickyNilliams/headroom.js
                   */
                  window.CXL.headroom2 = new Headroom(el, {
                      offset: el.offsetTop + window.CXL.Jobs.getAdminBarHeight() + window.CXL.Jobs.getNavHeight(),
                      tolerance: {
                          up: 30,
                          down: 0
                      },
                      classes: {
                          // when scrolling up
                          pinned : "headroom--unpinned",
                          // when scrolling down
                          unpinned : "headroom--pinned",
                      },
                      onPin: () => {
                          el.style.top = 0;
                      },
                      onUnpin: () => {
                          el.style.top = window.CXL.Jobs.getAdminBarHeight() + \`px\`;
                      }
                  });
                  window.CXL.headroom2.init();
              });
          })('cxl-marketing-nav');
      </script>
      <div class="clx-jobs-featured-banner-wrapper">
                <div class="clx-jobs-featured-banner sticky-featured-banner shadow-xs headroom headroom--top headroom--not-bottom">
                    <h3 class="job-title">
                        Treasurer                    </h3>
                    <span class="job-location">
                        Remote                    </span>

                                                                                                <ul class="job-types">
                                                            <li class="job-type full-time">Full Time</li>
                                                        </ul>

                    <vaadin-button class="jobs-apply-now" onclick="window.location.href='https://jobs.uprecords.org/job-apply/?job_id=536'" theme="primary large" style="cursor: pointer; font-weight: normal;" tabindex="0" role="button">
    Apply Now</vaadin-button>
                </div>
            </div>
    -->
<!--
    <hr/>
    <style>
.cxl-open-positions-card {
    margin: 1rem -4rem 2rem;
}
</style>
    <p class="clx-jobs-featured-banner cxl-open-positions-card shadow-sm">901 S. MoPac Expy Suite 150, Barton Oaks Plaza One <vaadin-button class="jobs-open-positions" onclick="window.location.href='https://jobs.uprecords.org/austin-tx/#see-opening-position'" theme="primary large" style="cursor: pointer; font-weight: normal;" tabindex="0" role="button">
    See Open Positions
</vaadin-button>
</p>

            -->
      <div class="job_description">
        <p>
          We are looking to hire an experienced Treasurer to oversee the financial affairs of our
          organization. In this role, you will be responsible for managing the protection of company
          funds, anticipating the company’s borrowing needs, and preparing financial reports. You
          will also be required to advise on loans or liquidity investments and ensure the company
          has sufficient funds to cover operational costs and capital investments.
        </p>
        <p>
          To ensure success as a Treasurer, you should have in-depth knowledge of accounting
          practices, a good understanding of banking rules and regulations, and excellent
          communication skills. A top-class Treasurer can improve a company’s financial standing by
          expertly assessing risks and managing cash flow correctly.
        </p>
        <p><strong>Treasurer Responsibilities:</strong></p>
        <ul>
          <li>Managing the receipt, banking, and protection of company funds.</li>
          <li>
            Advising senior managers on risk assessments including company loans, investments, and
            liquidity.
          </li>
          <li>Anticipating the company’s borrowing needs.</li>
          <li>
            Maintaining the financial systems and policies controlling the company’s treasury
            activities.
          </li>
          <li>Maintaining third-party financial activities.</li>
          <li>Handling outsourced treasury functions.</li>
          <li>Preparing budgets and financial statements.</li>
          <li>Submitting forecasting and financial reports.</li>
          <li>Implementing legislative and financial policies.</li>
        </ul>
        <p class="job_tags">Tagged as: treasurer</p>
      </div>

      <div class="job_description">
        <p>
          We are looking to hire an experienced Treasurer to oversee the financial affairs of our
          organization. In this role, you will be responsible for managing the protection of company
          funds, anticipating the company’s borrowing needs, and preparing financial reports. You
          will also be required to advise on loans or liquidity investments and ensure the company
          has sufficient funds to cover operational costs and capital investments.
        </p>
        <p>
          To ensure success as a Treasurer, you should have in-depth knowledge of accounting
          practices, a good understanding of banking rules and regulations, and excellent
          communication skills. A top-class Treasurer can improve a company’s financial standing by
          expertly assessing risks and managing cash flow correctly.
        </p>
        <p><strong>Treasurer Responsibilities:</strong></p>
        <ul>
          <li>Managing the receipt, banking, and protection of company funds.</li>
          <li>
            Advising senior managers on risk assessments including company loans, investments, and
            liquidity.
          </li>
          <li>Anticipating the company’s borrowing needs.</li>
          <li>
            Maintaining the financial systems and policies controlling the company’s treasury
            activities.
          </li>
          <li>Maintaining third-party financial activities.</li>
          <li>Handling outsourced treasury functions.</li>
          <li>Preparing budgets and financial statements.</li>
          <li>Submitting forecasting and financial reports.</li>
          <li>Implementing legislative and financial policies.</li>
        </ul>
        <p class="job_tags">Tagged as: treasurer</p>
      </div>

      <div class="job_description">
        <p>
          We are looking to hire an experienced Treasurer to oversee the financial affairs of our
          organization. In this role, you will be responsible for managing the protection of company
          funds, anticipating the company’s borrowing needs, and preparing financial reports. You
          will also be required to advise on loans or liquidity investments and ensure the company
          has sufficient funds to cover operational costs and capital investments.
        </p>
        <p>
          To ensure success as a Treasurer, you should have in-depth knowledge of accounting
          practices, a good understanding of banking rules and regulations, and excellent
          communication skills. A top-class Treasurer can improve a company’s financial standing by
          expertly assessing risks and managing cash flow correctly.
        </p>
        <p><strong>Treasurer Responsibilities:</strong></p>
        <ul>
          <li>Managing the receipt, banking, and protection of company funds.</li>
          <li>
            Advising senior managers on risk assessments including company loans, investments, and
            liquidity.
          </li>
          <li>Anticipating the company’s borrowing needs.</li>
          <li>
            Maintaining the financial systems and policies controlling the company’s treasury
            activities.
          </li>
          <li>Maintaining third-party financial activities.</li>
          <li>Handling outsourced treasury functions.</li>
          <li>Preparing budgets and financial statements.</li>
          <li>Submitting forecasting and financial reports.</li>
          <li>Implementing legislative and financial policies.</li>
        </ul>
        <p class="job_tags">Tagged as: treasurer</p>
      </div>
    </div>
  `;
};

CXlJobsFeaturedBanner.story = {
  name: 'cxl-jobs-featured-banner'
};
