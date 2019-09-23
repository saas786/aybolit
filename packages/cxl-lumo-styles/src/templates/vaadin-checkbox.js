import lumoVaadinCheckbox from '../styles/vaadin-checkbox-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style>${lumoVaadinCheckbox}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
