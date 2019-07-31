// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../../styles/cxl-theme-css.js';
import cxlOptinBoxStyles from '../../styles/cxl-marketing-optin/cxl-optin-box-css.js';

// Extend the LitElement base class
export class CXLOptinBox extends LitElement {
  static get properties() {
    return {
      backgroundImage: {
        type: String
      },
      backgroundColor: {
        type: String
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlOptinBoxStyles];
  }

  render() {
    return html`
      <div class="wrap">
        <div part="optin">
          <div part="background"></div>
          <div part="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    const containerElement = this.shadowRoot.querySelector('[part="optin"]');
    const containerBackgroundElement = this.shadowRoot.querySelector('[part="background"]');

    containerBackgroundElement.style.backgroundImage = `url(${this.backgroundImage})`;
    containerElement.style.backgroundColor = this.backgroundColor;
  }
}

// Register the new element with the browser.
customElements.define('cxl-optin-box', CXLOptinBox);
