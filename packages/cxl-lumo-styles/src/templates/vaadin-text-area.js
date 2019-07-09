import lumoVaadinTextArea from '../styles/vaadin-text-area-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-text-area" theme-for="vaadin-text-area">
  <template>
    <style>${lumoVaadinTextArea}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
