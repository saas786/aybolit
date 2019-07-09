import lumoVaadinFormLayout from '../styles/vaadin-form-layout-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-form-layout" theme-for="vaadin-form-layout">
  <template>
    <style>${lumoVaadinFormLayout}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
