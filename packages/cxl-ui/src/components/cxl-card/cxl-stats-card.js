import { LitElement, html } from 'lit-element';
import statsCardStyles from '../../styles/cxl-stats-card-css.js';

export class CXLStatsCard extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [statsCardStyles];
  }

  render() {
    return html`
      asd
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');
  }
}

customElements.define('cxl-stats-card', CXLStatsCard);
