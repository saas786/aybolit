import { html } from 'lit-html';

export default html`
  <cxl-vaadin-accordion>
    <vaadin-accordion-panel theme="cxl-sidebar-panel">
      <vaadin-item theme="cxl-sidebar-panel-summary" slot="summary">
        <label class="label">Track #1</label>Google Analytics
      </vaadin-item>
      <vaadin-accordion-panel theme="cxl-sidebar-subpanel">
        <div slot="summary">Analytics fundamentals</div>
        <vaadin-list-box theme="cxl-sidebar-panel-links">
          <h4 class="module-header">Analytics fundamentals</h4>
          <a href="">Analytics fundamentals</a>
        </vaadin-list-box>
      </vaadin-accordion-panel>
      <vaadin-accordion-panel theme="cxl-sidebar-subpanel">
        <div slot="summary">Google Analytics for beginners</div>
        <vaadin-list-box theme="cxl-sidebar-panel-links">
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
    <vaadin-accordion-panel theme="cxl-sidebar-panel">
      <vaadin-item theme="cxl-sidebar-panel-summary" slot="summary">
        <label class="label">Track #2</label>Presenting data
      </vaadin-item>  
      <vaadin-accordion-panel theme="cxl-sidebar-subpanel">
        <div slot="summary">Data presentation &amp; visualization</div>
        <vaadin-list-box theme="cxl-sidebar-panel-links">
          <h4 class="module-header">Data presentation &amp; visualization</h4>
          <a href="">Introduction + Conceptualize</a>
          <a href="">Visualize: design like Andy Warhol</a>
          <a href="">Visualize: data design</a>
          <a href="">Analytics strategy: the process for successful digital analytics</h4>
          <a href="">Analytics strategy: socializing analytical results for enabling business decisions</a>
        </vaadin-list-box>
      </vaadin-accordion-panel>
    </vaadin-accordion-panel>

    <vaadin-accordion-panel theme="cxl-sidebar-panel">
      <vaadin-item theme="cxl-sidebar-panel-summary" slot="summary">
        <label class="label">Track #3</label>Google Tag Manager
      </vaadin-item>
      <vaadin-accordion-panel theme="cxl-sidebar-subpanel">
        <div slot="summary">Data presentation &amp; visualization</div>
        <vaadin-list-box theme="cxl-sidebar-panel-links">
          <a href="">Introduction + Conceptualize</a>
          <a href="">Visualize: design like Andy Warhol</a>
          <a href="">Visualize: data design</a>
          <a href="">Analytics strategy: the process for successful digital analytics</h4>
          <a href="">Analytics strategy: socializing analytical results for enabling business decisions</a>
        </vaadin-list-box>
      </vaadin-accordion-panel>
    </vaadin-accordion-panel>

    <vaadin-accordion-panel theme="cxl-sidebar-panel">
      <vaadin-item theme="cxl-sidebar-panel-summary" slot="summary">
        <label class="label">Track #4</label>Attribution
      </vaadin-item>  
      <vaadin-accordion-panel theme="cxl-sidebar-subpanel">
        <div slot="summary">Data presentation &amp; visualization</div>
        <vaadin-list-box theme="cxl-sidebar-panel-links">
          <a href="">Introduction + Conceptualize</a>
          <a href="">Visualize: design like Andy Warhol</a>
          <a href="">Visualize: data design</a>
          <a href="">Analytics strategy: the process for successful digital analytics</h4>
          <a href="">Analytics strategy: socializing analytical results for enabling business decisions</a>
        </vaadin-list-box>
      </vaadin-accordion-panel>
    </vaadin-accordion-panel>
  </cxl-vaadin-accordion>
`;
