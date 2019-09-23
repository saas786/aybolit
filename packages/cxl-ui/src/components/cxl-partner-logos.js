import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlPartnerLogosStyles from '../styles/cxl-partner-logos-css.js';

export class CXLPartnerLogosElement extends LitElement {
  static get properties() {
    return {
      backgroundColor: {
        type: String,
        attribute: 'background-color'
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlPartnerLogosStyles];
  }

  render() {
    return html`
      <div part="logos">
        <slot></slot>
      </div>
    `;
  }

  firstUpdated() {
    if (this.backgroundColor) {
      this.shadowRoot.querySelector('[part="logos"]').style.backgroundColor = this.backgroundColor;
    }
  }
}

customElements.define('cxl-partner-logos', CXLPartnerLogosElement);
