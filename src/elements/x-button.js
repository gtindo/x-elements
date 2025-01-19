import { css, XElement } from "../lib/x-element";

class XButton extends XElement {
  constructor() {
    super();
  }

  mounted() {}

  style() {
    return css`
      ::slotted(button) {
        color: var(--btn-text-color);
        background-color: var(--btn-bg-color);
        border: solid var(--btn-border-width) transparent;
        border-radius: var(--radius-sm);
        padding: var(--sp-12) var(--sp-24);
        font-size: var(--text-font-size-sm);
        font-weight: var(--btn-font-weight);
        cursor: pointer;
      }

      ::slotted(button svg) {
      }

      ::slotted(button:hover) {
        background-color: var(--btn-bg-color-hover);
      }

      ::slotted(button:disabled) {
        background-color: var(--btn-bg-color-disabled);
        color: var(--color-gray-500);
        cursor: not-allowed;
        opacity: 0.6;
      }

      ::slotted(button[data-variant="outlined"]) {
        color: var(--btn-bg-color);
        background-color: var(--color-white);
        border: solid var(--btn-border-width) var(--btn-bg-color);
      }

      ::slotted(button[data-variant="outlined"]:hover) {
        color: var(--btn-bg-color-hover);
        border-color: var(--btn-bg-color-hover);
      }

      ::slotted(button[data-variant="outlined"][data-is-action]) {
        font-weight: var(--text-font-weight-bold);
      }
    `;
  }
}

customElements.define("x-btn", XButton);
