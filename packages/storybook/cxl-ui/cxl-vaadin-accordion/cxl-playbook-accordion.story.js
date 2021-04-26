import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import playbookStepData from './cxl-playbook-accordion.data.json';

export const CXLPlaybookAccordion = () => html`
  <cxl-playbook-accordion id="playbook-3895" class="plural" opened="0">
    ${playbookStepData.map(
      (el) => html`
        <vaadin-accordion-panel
          class="playbook-step"
          theme="cxl-playbook-accordion reverse"
          data-step-id="${el.id}"
        >
          <header class="entry-header" slot="summary">
            <vaadin-checkbox value="${el.id}"></vaadin-checkbox>
            <h3 class="entry-title no-anchor" itemprop="headline">
              ${el.id}. ${unsafeHTML(el.title.rendered)}
            </h3>
          </header>
          <div class="entry-summary" itemprop="description">${unsafeHTML(el.content.rendered)}</div>
          <div class="entry-footer">
            <vaadin-button>
              <iron-icon icon="vaadin:comment" slot="prefix"></iron-icon>
              Leave Feedback
            </vaadin-button>
          </div>
        </vaadin-accordion-panel>
      `
    )}
  </cxl-playbook-accordion>
`;
