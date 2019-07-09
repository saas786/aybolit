import { html } from 'lit-html';

const topnav = html`
  <cxl-marketing-nav nav-type="topnav" slot="topnav">
    <a href="" slot="cxl-logo">
      <iron-icon class="icon size-xl" icon="cxl:logo"></iron-icon>
    </a>
    <vaadin-tabs>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="https://conversionxl.com/institute/">
          Institute
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="https://conversionxl.com/blog/">
          Blog
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet cxl-nav-dropdown">
        <vaadin-context-menu open-on="click" theme="cxl-nav-dropdown">
          <a href="" style="display: flex; align-items: center;">Agency</a>
          <template>
            <vaadin-list-box theme="cxl-nav-dropdown">
              <a href="https://conversionxl.com/agency/conversion-optimization-services/"
                >Conversion Optimization</a
              >
              <a href="https://conversionxl.com/agency/conversion-design/">Web Design That Sells</a>
              <a href="https://conversionxl.com/agency/cro-research/">CRO Research & Audits</a>
              <a href="https://conversionxl.com/agency/analytics-implementation-services/"
                >Analytics Implementation</a
              >
            </vaadin-list-box>
          </template>
        </vaadin-context-menu>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="https://conversionxl.com/institute/login/">
          Login
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <vaadin-button theme="cxl-button small contrast" role="button">
          <a href="info@conversionxl.agency">Get in touch</a>
        </vaadin-button>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-mobile-icon">
        <a href="#">
          <iron-icon class="icon size-m" icon="lumo:menu"></iron-icon>
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-mobile-nav-icon">
        <a href="#">
          <iron-icon class="icon size-l" icon="lumo:cross"></iron-icon>
        </a>
      </vaadin-tab>
    </vaadin-tabs>
  </cxl-marketing-nav>
`;

const bottomnav = html`
  <cxl-marketing-nav nav-type="bottomnav" slot="bottomnav">
    <vaadin-tabs>
      <vaadin-tab theme="cxl-marketing-nav-tab">
        <vaadin-button theme="primary cxl-button margin-right"
          ><a href="">Download case studies</a></vaadin-button
        >
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab">
        <vaadin-button theme="primary cxl-button cxl-transparent"
          ><a href="">Get in touch</a></vaadin-button
        >
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          Video testimonials
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          Case studies
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          Services
        </a>
      </vaadin-tab>
      <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
        <a href="">
          Pricing
        </a>
      </vaadin-tab>
    </vaadin-tabs>
  </cxl-marketing-nav>
`;

export { topnav, bottomnav };
