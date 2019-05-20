// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@vaadin/vaadin-item';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlIconNavItemStyles from '../styles/cxl-icon-nav-item-css.js';

class CXLIconNavItemElement extends LitElement {
  static get properties() {
    return {
      href: {
        type: String
      },
      title: {
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
        ${this.navItemContent}
        ${this.title
          ? html`
              <span>${this.title}</span>
            `
          : ''}
      </a>
    `;
  }

  get navItemContent() {
    const vaadinTab = this.parentNode;

    switch (true) {
      case vaadinTab.className.indexOf('--type-html') > 0:
        return unsafeHTML(this.innerHTML);
      default:
        return unsafeHTML(`
          <iron-icon class="icon size-l" icon="${this.innerHTML}"></iron-icon>
        `);
    }
  }
}

customElements.define('cxl-icon-nav-item', CXLIconNavItemElement);
