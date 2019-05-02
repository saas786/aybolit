import '@vaadin/vaadin-lumo-styles/color.js';
import lumoColor from '../styles/color-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<custom-style>
  <style include="lumo-color"></style>
</custom-style>
<custom-style>
  <style>${lumoColor}</style>
</custom-style>`;

document.head.appendChild($template.content);
