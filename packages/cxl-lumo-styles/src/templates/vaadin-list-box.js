import lumoVaadinListBox from '../styles/vaadin-list-box-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>${lumoVaadinListBox}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
