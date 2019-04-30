import { CXLBaseCard } from '@conversionxl/cxl-core';
import bannerCardStyles from '../styles/cxl-banner-card-css.js';

export class CXLBannerCard extends CXLBaseCard {
  static get styles() {
    return [super.styles, bannerCardStyles];
  }
}

customElements.define('cxl-banner-card', CXLBannerCard);
