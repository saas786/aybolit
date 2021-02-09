import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-button';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles/Icons',
};

// @see https://github.com/vaadin/vaadin-lumo-styles/blob/v1.5.0/demo/icons.html
const BaseStyles = html`
  <style>
    iron-icon {
      --iron-icon-width: 48px;
      --iron-icon-height: 48px;
      font-size: 48px;
    }
  </style>
`;

export const Logo = () => html`
  ${BaseStyles}
  <iron-icon icon="cxl:logo" style="width: var(--lumo-icon-size-xl, 48px);"></iron-icon><br />
  <iron-icon icon="cxl:live" style="color: var(--lumo-primary-color)"></iron-icon><br />
`;

export const Lumo = () => html`
  ${BaseStyles}
  <iron-icon icon="lumo:plus"></iron-icon><br />
  <iron-icon icon="lumo:user"></iron-icon><br />
  <iron-icon icon="lumo:clock"></iron-icon><br />
  <iron-icon icon="lumo:search"></iron-icon><br />
  <iron-icon icon="lumo:dropdown"></iron-icon><br />
  <iron-icon icon="lumo:angle-left" slot="prefix"></iron-icon><br />
  <iron-icon icon="lumo:angle-right" slot="suffix"></iron-icon><br />
`;

export const Vaadin = () => html`
  ${BaseStyles}
  <iron-icon icon="vaadin:play-circle-o"></iron-icon><br />
  <iron-icon icon="vaadin:check-circle"></iron-icon><br />
  <iron-icon icon="vaadin:save"></iron-icon><br />
`;
