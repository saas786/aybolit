import { CXLBaseCard } from '@conversionxl/cxl-core';
import { html } from 'lit-element';
import lessonCardStyles from '../styles/cxl-lesson-card-css.js';

export class CXLLessonCard extends CXLBaseCard {
  static get styles() {
    return [super.styles, lessonCardStyles];
  }
}

customElements.define('cxl-lesson-card', CXLLessonCard);