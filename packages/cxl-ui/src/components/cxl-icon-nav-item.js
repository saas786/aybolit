// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlIconNavItemStyles from '../styles/cxl-icon-nav-item-css.js';

class CXLIconNavItemElement extends LitElement {
  static get properties() {
    return {
      href: {
        type: String
      },
      position: {
        type: String
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlIconNavItemStyles];
  }

  render() {
    return html`
      <li>
        <a href="${this.href}">
          <slot></slot>
        </a>
      </li>
    `;
  }
}

customElements.define('cxl-icon-nav-item', CXLIconNavItemElement);
