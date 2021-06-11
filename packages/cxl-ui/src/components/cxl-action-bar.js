import '@conversionxl/cxl-lumo-styles';
import { css, customElement, html, LitElement } from 'lit-element';
// import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
// import cxlCardGlobalStyles from '../styles/global/cxl-card-css.js';
// import cxlActionBarStyles from '../styles/cxl-card-css.js';

@customElement('cxl-action-bar')
export class CXLActionBarElement extends LitElement {
  static get styles() {
    return [css``];
  }

  render() {
    return html`
      <vaadin-button theme="primary"
        >Complete lesson <iron-icon icon="vaadin:check-circle" slot="suffix"></iron-icon
      ></vaadin-button>
      <vaadin-button>Secondary action</vaadin-button>
      <vaadin-context-menu selector="vaadin-button" open-on="click" theme="cxl-marketing-nav">
        <template>
          <vaadin-context-menu-list-box theme="cxl-marketing-nav">
            <vaadin-context-menu-item class="vaadin-menu-item" theme="cxl-marketing-nav"
              >Next lesson <iron-icon icon="lumo:arrow-right"></iron-icon
            ></vaadin-context-menu-item>
            <vaadin-context-menu-item class="vaadin-menu-item" theme="cxl-marketing-nav"
              ><iron-icon icon="lumo:arrow-left"></iron-icon> Previous
              lesson</vaadin-context-menu-item
            >
            <hr />
            <vaadin-context-menu-item class="vaadin-menu-item" theme="cxl-marketing-nav"
              >Go to course</vaadin-context-menu-item
            >
          </vaadin-context-menu-list-box>
        </template>
        <vaadin-button theme="icon contrast" aria-label="More actions"
          ><iron-icon icon="vaadin:ellipsis-dots-v"></iron-icon
        ></vaadin-button>
      </vaadin-context-menu>
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    // registerGlobalStyles(cxlCardGlobalStyles, {
    //   moduleId: 'cxl-card-global',
    // });
  }
}
