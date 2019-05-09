import { CXLBaseCard } from '@conversionxl/cxl-core';
import { html } from 'lit-element';
import lessonCardStyles from '../styles/cxl-lesson-card-css.js';

export class CXLLessonCard extends CXLBaseCard {
  static get styles() {
    return [super.styles, lessonCardStyles];
  }

  static get properties() {
    return {
      thumbnail: {
        type: String
      }
    };
  }

  render() {
    return html`
      <header>
        <p class="lesson-thumbnail" name="lesson-thumbnail" style="background-image: url('${this.thumbnail}');"></p>
        <h2>
          <slot name="entry-title-highlighted"></slot>
          <slot name="entry-title"></slot>
        </h2>
        <p class="lesson-specs">
          <slot name="lesson-specs"></slot>
        </p>
      </header>
      <div class="content">
        <p>
          <slot></slot>
        </p>        
      </div>
    `;
  }

}

customElements.define('cxl-lesson-card', CXLLessonCard);