// Global styles.
import './templates/global.js';

// Lumo.
import '@conversionxl/cxl-lumo-styles';

// Custom components.
import '@conversionxl/cxl-ui/src/components/cxl-marketing-layout';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-hero';
import '@conversionxl/cxl-ui/src/components/cxl-card';
import '@conversionxl/cxl-ui/src/components/cxl-partner-logos';
import '@conversionxl/cxl-ui/src/components/cxl-iron-form';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-optin';

// Third-party components.
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-item';
import '@vaadin/vaadin-list-box';
import '@vaadin/vaadin-context-menu';
import '@vaadin/vaadin-form-layout';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-select';
import '@vaadin/vaadin-checkbox';

import LazyLoad from 'vanilla-lazyload';
import { _initDialogButtons } from './init-functions';

const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy'
});

document.addEventListener('DOMContentLoaded', function() {
  _initDialogButtons();

  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }
});
