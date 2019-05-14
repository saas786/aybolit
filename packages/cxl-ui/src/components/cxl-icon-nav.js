// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlIconNavStyles from '../styles/cxl-icon-nav-css.js';

class CXLIconNavElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [cxlThemeStyles, cxlIconNavStyles];
  }

  render() {
    return html`
      <ul>
        <slot></slot>
      </ul>
    `;
  }
}

customElements.define('cxl-icon-nav', CXLIconNavElement);
