import { css, html, XElement } from "../lib/x-element";

class XFormField extends XElement {
  constructor() {
    super();
  }

  style() {
    return css`
      :host {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 0;
        align-items: flex-start;
      }

      ::slotted(input) {
        width: var(--input-width);
        max-width: var(--input-max-width);
        height: var(--input-height);
        border: solid var(--btn-border-width) var(--color-gray-300);
        border-radius: var(--radius-sm);
        font-size: var(--text-font-size-sm);
        padding-left: var(--sp-12);
        font-family: var(--document-font-family);
        background-color: var(--color-white);
        color: var(--color-gray-700);
        margin: 0;
      }

      ::slotted(input:focus) {
        border-color: var(--color-primary-500);
        box-shadow: 0 0 0 2px var(--color-primary-200);
        outline: none;
      }

      ::slotted(input::placeholder) {
        color: var(--color-gray-500);
      }

      ::slotted(label) {
        font-size: var(--text-font-size-md);
        font-weight: var(--text-font-weight-medium);
        color: var(--color-gray-800);
        margin-bottom: var(--sp-4);
      }

      ::slotted(input[data-error]) {
        border-color: var(--color-danger-600);
      }

      ::slotted(input[data-error]:focus) {
        box-shadow: var(--input-box-shodow-error);
        border-color: var(--color-danger-600);
      }

      ::slotted(label[data-error]) {
        color: var(--color-danger-600);
      }

      ::slotted(p[data-helper]) {
        font-size: var(--text-font-size-sm);
        color: var(--color-danger-600);
        margin-top: var(--sp-4);
      }
    `;
  }
}

customElements.define("x-form-field", XFormField);
