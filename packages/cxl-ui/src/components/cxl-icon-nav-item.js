// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
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
      <a href=${ifDefined(this.href)}>
        <iron-icon class="icon size-l" icon="${this.innerHTML}"></iron-icon>
      </a>
    `;
  }
}

customElements.define('cxl-icon-nav-item', CXLIconNavItemElement);
