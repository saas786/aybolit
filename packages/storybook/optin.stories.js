import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-marketing';

storiesOf('Optin', module)
  .addDecorator(withKnobs)
  .add('General', () => {
    return html`
      <cxl-optin-box
        backgroundimage="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/layout/optin-bubble-faces.png"
        backgroundcolor="#F9F9F9"
      >
        <h3>
          Join <strong>95,000+</strong> analysts, optimizers, digital marketers, and UX
          practitioners on the list.
        </h3>
        <p>Learn from the very best to become one.</p>

        <cxl-iron-form
          id="optinForm"
          form-action="https://hooks.zapier.com/hooks/catch/4406519/oopwah6/"
          form-method="POST"
          form-name="optinForm"
        >
          <input type="hidden" name="campaign" value="redesign homepage" />
          <input type="hidden" name="form_source" value="homepage" />
          <vaadin-text-field
            colspan="2"
            placeholder="Your work e-mail"
            name="email"
            required
            error-message="Please enter a valid e-mail"
            autocomplete="off"
            theme="block"
          ></vaadin-text-field>
          <vaadin-checkbox theme="padding" name="consent" checked
            >I consent to being contacted</vaadin-checkbox
          >
          <vaadin-button
            class="ladda-button"
            data-style="zoom-in"
            theme="primary cxl-button block"
            onclick="optinForm.submit()"
            ><span class="ladda-label">Subscribe</span></vaadin-button
          >
        </cxl-iron-form>
      </cxl-optin-box>
    `;
  });
