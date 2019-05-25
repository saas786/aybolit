import { html } from 'lit-html';

export default html`
  <cxl-course-progress-widget id="post-1001" class="entry entry--type-course">

    <vaadin-accordion>

      <vaadin-accordion-panel theme="cxl-course">

        <vaadin-item slot="summary">
          <h4 class="entry__title">Analytics fundamentals (w/ modules)</h4>
        </vaadin-item>

        <vaadin-tabs theme="cxl-course minimal" orientation="vertical" selected="-1">

          <vaadin-tab>
            <h6 class="entry__title"><a href="">Course introduction</a></h6>
          </vaadin-tab>
          <vaadin-tab disabled>
            <h5 class="module__title">Main module</h5>
          </vaadin-tab>
          <vaadin-tab>
            <h6 class="entry__title"><a href="">Analytics fundamentals</a></h6>
          </vaadin-tab>
          <vaadin-tab>
            <h6 class="entry__title"><a href="">Getting started with Google Analytics</a></h6>
          </vaadin-tab>
          <vaadin-tab>
            <h6 class="entry__title"><a href="">Who are my visitors?</a></h6>
          </vaadin-tab>
          <vaadin-tab>
            <h6 class="entry__title"><a href="">Where are my visitors coming from?</a></h6>
          </vaadin-tab>
          <vaadin-tab disabled>
          <h5 class="module__title">Final exam</h5>
          </vaadin-tab>
          <vaadin-tab>
            <h6 class="entry__title"><a href="">Final exam</a></h6>
          </vaadin-tab>

        </vaadin-tabs>

      </vaadin-accordion-panel>

    </vaadin-accordion>

  </cxl-course-progress-widget>
`;
