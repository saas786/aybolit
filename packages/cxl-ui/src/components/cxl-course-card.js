import { html } from 'lit-element';
import { CXLBaseCard } from '@conversionxl/cxl-core';
import courseCardStyles from '../styles/cxl-course-card-css.js';

export class CXLCourseCard extends CXLBaseCard {
  static get styles() {
    return [super.styles, courseCardStyles];
  }

  render() {
    return html`
      <header class="entry__header">
        <slot name="entry__header-thumbnail"></slot>
        <h2 class="entry__title">
          <slot></slot>
        </h2>
        <slot name="entry__header-instructor"></slot>
      </header>
      <div class="entry__content">
        <slot name="entry__content"></slot>
      </div>
      <footer class="entry__footer">
        <slot name="entry__footer"></slot>
      </footer>
    `;
  }
}

customElements.define('cxl-course-card', CXLCourseCard);