import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import cxlIconNav from './templates/cxl-icon-nav';
import cxlVaadinAccordion from './templates/cxl-vaadin-accordion';
import cxlInstituteContentHeader from './templates/cxl-institute-content-header';
import trainingVideoContent from './templates/content/training-video';

import '@conversionxl/cxl-institute';

storiesOf('Layouts', module)
  .addDecorator(withKnobs)
  .add('cxl-institute-layout (vaadin tabs nav)', () => {
    return html`
      <cxl-institute-layout>
        <vaadin-dialog theme="cxl-search-overlay">
          <template>
            <iron-icon class="icon size-l" icon="lumo:cross"></iron-icon>
            <form
              role="search"
              method="get"
              class="search-form"
              action="https://conversionxl.com/institute/"
            >
              <label>
                <span class="screen-reader-text">Search for:</span>
                <input
                  type="search"
                  class="search-field"
                  placeholder="Search …"
                  value=""
                  name="s"
                />
              </label>
              <input type="submit" class="search-submit" value="Search" />
            </form>
          </template>
        </vaadin-dialog>
        <!-- <cxl-icon-nav> -->
        ${cxlIconNav}
        <h3 slot="sidebar-header" part="sidebar-header">Training Manager</h3>
        <div slot="sidebar-content">
          <strong class="extra-heading">Digital analytics minidegree program</strong>
          <!-- <cxl-vaadin-accordion> -->
          ${cxlVaadinAccordion}
        </div>

        <cxl-institute-content>
          <!-- <cxl-institute-content-header> -->
          ${cxlInstituteContentHeader}
          <!-- Training Video -->
          ${trainingVideoContent}
        </cxl-institute-content>
      </cxl-institute-layout>
    `;
  })
  .add('cxl-institute-layout (course progress)', () => {
    return html`
      <cxl-institute-layout>
        <!-- <cxl-icon-nav> -->
        ${cxlIconNav}
        <h3 slot="sidebar-header" part="sidebar-header">Active Training</h3>
        <div class="sidebar-content" slot="sidebar-content">
          <vaadin-details theme="cxl-sidebar-track" opened>
            <div slot="summary">8 Common Testing Mistakes and How to Avoid Them</div>
            <div>
              <cxl-institute-sidebar-items>
                <cxl-institute-sidebar-item>
                  <a href="#" class="active">Importance of correcting mistakes</a>
                </cxl-institute-sidebar-item>

                <cxl-institute-sidebar-item>
                  <a href="#">Mistake #1: not letting a test run long enough</a>
                </cxl-institute-sidebar-item>

                <cxl-institute-sidebar-item>
                  <a href="#">Mistake #2: testing too many small elements</a>
                </cxl-institute-sidebar-item>

                <cxl-institute-sidebar-item>
                  <a href="#">Mistake #3: just testing random things</a>
                </cxl-institute-sidebar-item>

                <cxl-institute-sidebar-item>
                  <a href="#">Mistake #4: false positives</a>
                </cxl-institute-sidebar-item>

                <cxl-institute-sidebar-item>
                  <a href="#">Mistake #5: not knowing when to say when</a>
                </cxl-institute-sidebar-item>

                <cxl-institute-sidebar-item>
                  <a href="#">Mistake #6: failing to optimize for each traffic source</a>
                </cxl-institute-sidebar-item>

                <cxl-institute-sidebar-item>
                  <a href="#">Mistake #7: only focusing on conversion rate</a>
                </cxl-institute-sidebar-item>

                <cxl-institute-sidebar-item>
                  <a href="#">Mistake #8: treating low traffic websites the same</a>
                </cxl-institute-sidebar-item>
              </cxl-institute-sidebar-items>
            </div>
          </vaadin-details>
        </div>

        <cxl-institute-content>
          <!-- <cxl-institute-content-header> -->
          ${cxlInstituteContentHeader}
          <!-- Training Video -->
          ${trainingVideoContent}
        </cxl-institute-content>
      </cxl-institute-layout>
    `;
  })
  .add('cxl-institute-layout (vaadin accordion)', () => {
    return html`
      <cxl-institute-layout>
        <!-- <cxl-icon-nav> -->
        ${cxlIconNav}
        <h3 slot="sidebar-header" part="sidebar-header">Training Manager</h3>
        <div slot="sidebar-content">
          <strong class="extra-heading">Digital analytics minidegree program</strong>
          <!-- <cxl-vaadin-accordion> -->
          ${cxlVaadinAccordion}
        </div>

        <cxl-institute-content>
          <!-- <cxl-institute-content-header> -->
          ${cxlInstituteContentHeader}
          <!-- Training Video -->
          ${trainingVideoContent}
        </cxl-institute-content>
      </cxl-institute-layout>
    `;
  });
