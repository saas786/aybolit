// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import * as Ladda from 'ladda/js/ladda.js';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlIronFormStyles from '../styles/cxl-iron-form-css.js';
import '@polymer/iron-form';

// Extend the LitElement base class
class CXLIronFormElement extends LitElement {
  static get properties() {
    return {
      formMethod: {
        type: String,
        attribute: 'form-method'
      },
      formAction: {
        type: String,
        attribute: 'form-action'
      },
      formName: {
        type: String,
        attribute: 'form-name'
      },
      headersType: {
        type: String,
        attribute: 'headers-type'
      }
    };
  }

  constructor() {
    super();

    this.formMethod = 'GET';
  }

  static get styles() {
    return [cxlThemeStyles, cxlIronFormStyles];
  }

  render() {
    return html`
      <iron-form>
        <form method="${this.formMethod}" action="${this.formAction}" autocomplete="off">
          <slot></slot>
        </form>
      </iron-form>

      <div part="confirmation" hidden>
        <slot name="confirmation"></slot>
      </div>
    `;
  }

  firstUpdated() {
    this.headers = {
      'Content-type': 'application/x-www-form-urlencoded'
    };

    if (this.headersType === 'json') {
      this.headers = {
        'Content-type': 'application/json',
        Accept: 'application/json'
      };
    }
  }

  submit() {
    const ironForm = this.shadowRoot.querySelector('iron-form');
    const that = this;
    const l = Ladda.create(document.querySelector(`#${this.formName} .ladda-button`));

    if (ironForm.validate()) {
      const formData = ironForm.serializeForm();
      formData.entry_date = new Date().toISOString().slice(0, 10);
      formData.source_martech_id = 'custom';
      formData.source = window.location.href;

      // Added by iron-form or vaadin-form-layout
      delete formData.suffix;
      delete formData.prefix;

      // Convert object to query params
      const esc = encodeURIComponent;
      const query = Object.keys(formData)
        .map(k => `${esc(k)}=${esc(formData[k])}`)
        .join('&');

      const fetchURL = this.formMethod === 'GET' ? `${this.formAction}?${query}` : this.formAction;
      let fetchPayload = {
        method: this.formMethod,
        headers: this.headers,
        body: query
      };

      if (this.headersType === 'json') {
        fetchPayload.body = JSON.stringify(formData);
      }

      if (this.formMethod === 'GET') {
        fetchPayload = {};
      }

      l.start();

      fetch(fetchURL, fetchPayload)
        .then(function(response) {
          l.stop();
          if (response.ok) {
            const confirmationContent = that.shadowRoot.querySelector('[part="confirmation"]');
            confirmationContent.removeAttribute('hidden');
            ironForm.setAttribute('hidden', '');
          }
        })
        .catch(function(error) {
          console.log('Request failed', error);
        });
    }
  }
}

// Register the new element with the browser.
customElements.define('cxl-iron-form', CXLIronFormElement);
