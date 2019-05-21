import { html } from 'lit-html';

export default html`
  <cxl-minidegree-progress-widget>
    <vaadin-accordion-panel theme="cxl-track">
      <vaadin-item theme="cxl-track-summary" slot="summary">
        <label>Track #1</label>
        <h4 class="entry__title">Google Analytics</h4>
      </vaadin-item>
      <vaadin-accordion-panel theme="cxl-course">
        <div slot="summary">Analytics fundamentals</div>
        <vaadin-list-box theme="cxl-course-links">
          <h4 class="module-header">Analytics fundamentals</h4>
          <a href="">Analytics fundamentals</a>
        </vaadin-list-box>
      </vaadin-accordion-panel>
      <vaadin-accordion-panel theme="cxl-course">
        <div slot="summary">Google Analytics for beginners</div>
        <vaadin-list-box theme="cxl-course-links">
          <h4 class="module-header">Google Analytics for beginners</h4>
          <a href="">Getting started with Google Analytics</a>
          <a href="">Who are my visitors?</a>
          <a href="">Where are my visitors coming from?</a>
          <a href="">What are the results of my visitors' actions?</a>
          <h4 class="module-header">Final exam</h4>
          <a href="">Final Exam - Google Analytics for Beginners</a>
        </vaadin-list-box>
      </vaadin-accordion-panel>
    </vaadin-accordion-panel>
    <vaadin-accordion-panel theme="cxl-track">
      <vaadin-item theme="cxl-track-summary" slot="summary">
        <label>Track #2</label>
        <h4 class="entry__title">Presenting data</h4>
      </vaadin-item>  
      <vaadin-accordion-panel theme="cxl-course">
        <div slot="summary">Data presentation &amp; visualization</div>
        <vaadin-list-box theme="cxl-course-links">
          <h4 class="module-header">Data presentation &amp; visualization</h4>
          <a href="">Introduction + Conceptualize</a>
          <a href="">Visualize: design like Andy Warhol</a>
          <a href="">Visualize: data design</a>
          <a href="">Analytics strategy: the process for successful digital analytics</h4>
          <a href="">Analytics strategy: socializing analytical results for enabling business decisions</a>
        </vaadin-list-box>
      </vaadin-accordion-panel>
    </vaadin-accordion-panel>
    <vaadin-accordion-panel theme="cxl-track">
      <vaadin-item theme="cxl-track-summary" slot="summary">
        <label>Track #3</label>
        <h4 class="entry__title">Google Tag Manager</h4>
      </vaadin-item>
      <vaadin-accordion-panel theme="cxl-course">
        <div slot="summary">Data presentation &amp; visualization</div>
        <vaadin-list-box theme="cxl-course-links">
          <a href="">Introduction + Conceptualize</a>
          <a href="">Visualize: design like Andy Warhol</a>
          <a href="">Visualize: data design</a>
          <a href="">Analytics strategy: the process for successful digital analytics</h4>
          <a href="">Analytics strategy: socializing analytical results for enabling business decisions</a>
        </vaadin-list-box>
      </vaadin-accordion-panel>
    </vaadin-accordion-panel>
    <vaadin-accordion-panel theme="cxl-track">
      <vaadin-item theme="cxl-track-summary" slot="summary">
        <label>Track #4</label>
        <h4 class="entry__title">Attribution</h4>
      </vaadin-item>  
      <vaadin-accordion-panel theme="cxl-course">
        <div slot="summary">Data presentation &amp; visualization</div>
        <vaadin-list-box theme="cxl-course-links">
          <a href="">Introduction + Conceptualize</a>
          <a href="">Visualize: design like Andy Warhol</a>
          <a href="">Visualize: data design</a>
          <a href="">Analytics strategy: the process for successful digital analytics</h4>
          <a href="">Analytics strategy: socializing analytical results for enabling business decisions</a>
        </vaadin-list-box>
      </vaadin-accordion-panel>
    </vaadin-accordion-panel>
  </cxl-minidegree-progress-widget>
`;
