import lumoVaadinDialogOverlay from '../styles/vaadin-dialog-overlay-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-dialog-overlay" theme-for="vaadin-dialog-overlay">
  <template>
    <style>${lumoVaadinDialogOverlay}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
