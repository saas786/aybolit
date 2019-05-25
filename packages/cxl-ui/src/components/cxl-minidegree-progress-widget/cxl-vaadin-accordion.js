import '@vaadin/vaadin-accordion';
import { AccordionElement } from '@vaadin/vaadin-accordion/src/vaadin-accordion';

class CXLVaadinAccordion extends AccordionElement {
  _updateOpened(e) {
    const target = this._filterItems(e.composedPath())[0];
    const idx = this.items.indexOf(target);

    if (e.detail.value) {
      if (target.disabled || idx === -1) {
        return;
      }

      this.opened = idx;
    } else if (!this.items.some(item => item.opened)) {
      this.opened = null;
    }

    this._saveAccordionState(this.items, e.detail.value, idx);
  }

  _updateItems(items) {
    if (!items) {
      return;
    }

    if (!this.hasAppliedState) {
      const accordionId = this.id;
      this._applyAccordionState(items, accordionId);
    }

    this.hasAppliedState = true;
  }

  _saveAccordionState(items) {
    const accordionId = this.id;
    const stateItems = this._getPanelsFromState();
    const newPanelState = [];

    items.forEach(function(value, key) {
      newPanelState[key] = items[key].opened;
    });

    stateItems[accordionId] = newPanelState;

    localStorage.setItem('cxl-vaadin-accordion-panels', JSON.stringify(stateItems));
  }

  _applyAccordionState(items, accordionId) {
    const stateItems = this._getPanelsFromState();

    if (!stateItems[accordionId]) {
      return;
    }

    items.forEach(function(item, key) {
      const currentItem = item;
      currentItem.opened = stateItems[accordionId][key];
    });
  }

  _getPanelsFromState() {
    return JSON.parse(localStorage.getItem('cxl-vaadin-accordion-panels')) || {};
  }
}

customElements.define('cxl-vaadin-accordion', CXLVaadinAccordion);
