import { LitElement, html } from 'lit-element';
import lumoStyles from '@conversionxl/cxl-lumo-styles';
import catalogStyles from '../styles/cxl-catalog-css.js';

export class CXLCatalog extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [catalogStyles];
  }

  render() {
    return html`
      <header class="entry__header">
        <slot name="entry__header"></slot>
      </header>
      <div class="entry__content">
        <slot name="entry__content"></slot>
      </div>
      <footer class="entry__footer">
        <slot name="entry__footer"></slot>
      </footer>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');
  }
}

customElements.define('cxl-catalog', CXLCatalog);