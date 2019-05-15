// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import '@vaadin/vaadin-item';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlIconNavItemStyles from '../styles/cxl-icon-nav-item-css.js';

class CXLIconNavItemElement extends LitElement {
  static get properties() {
    return {
      href: {
        type: String
      },
      icon: {
        type: String
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlIconNavItemStyles];
  }

  render() {
    return html`
      <a href="${this.icon}">
        <iron-icon class="icon size-l" icon="${this.icon}"></iron-icon>
      </a>
    `;
  }
}

customElements.define('cxl-icon-nav-item', CXLIconNavItemElement);
