import { customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { ProgressBarElement } from '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar';

@customElement('cxl-playbook-progress-bar')
export class CXLPlaybookProgressBar extends ProgressBarElement {
  ready() {
    super.ready();

    document.addEventListener(
      `cxl-playbook-accordion-changed-${this.getAttribute('cxl-playbook-accordion-id')}`,
      async (event) => {
        const { stateCheckboxes } = event.detail;
        const totalSteps = stateCheckboxes.length;
        const finishedSteps = stateCheckboxes.filter((checkbox) => checkbox === true).length;

        this.value = finishedSteps / totalSteps;
      }
    );
  }
}
