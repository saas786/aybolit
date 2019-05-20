import lumoVaadinTab from '../styles/vaadin-tab-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-tab" theme-for="vaadin-tab">
  <template>
    <style>${lumoVaadinTab}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
