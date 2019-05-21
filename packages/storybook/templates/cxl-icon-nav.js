import { html } from 'lit-html';

export default html`
  <cxl-icon-nav slot="icon-nav">
    <vaadin-tab>
      <cxl-icon-nav-item>cxl:logo</span></cxl-icon-nav-item>
    </vaadin-tab>
    <vaadin-tab class="menu__item menu__item--search">
      <cxl-icon-nav-item title="Search">lumo:search</cxl-icon-nav-item>
    </vaadin-tab>
    <vaadin-tab>
      <cxl-icon-nav-item title="Training" href="#">cxl:nav-trainings</cxl-icon-nav-item>
    </vaadin-tab>
    <vaadin-tab>
      <cxl-icon-nav-item title="Roadmap" href="#">cxl:nav-roadmap</cxl-icon-nav-item>
    </vaadin-tab>
    <vaadin-tab>
      <cxl-icon-nav-item title="Discover" href="#">cxl:nav-discover</cxl-icon-nav-item>
    </vaadin-tab>
    <vaadin-tab class="menu__item menu__item--type-html">
      <cxl-icon-nav-item href="#" title="Account"><img class="avatar" src="https://randomuser.me/api/portraits/women/47.jpg" /></cxl-icon-nav-item>
    </vaadin-tab>
    <vaadin-tab theme="cxl-icon-nav-item-button">
      <vaadin-button theme="primary">
        Start course
      </vaadin-button>
    </vaadin-tab>
  </cxl-icon-nav>
`;
