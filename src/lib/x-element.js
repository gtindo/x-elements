export class XElement extends HTMLElement {
  targets = [];

  constructor() {
    super();
    this.elements = {};
  }

  connectedCallback() {
    attachTemplate(this, this.template(), this.style());
    this.elements = getTargetElements(this.shadowRoot, this.targets);
    this.mounted();
  }

  mounted() {}

  unmounted() {}

  disconnectedCallback() {
    this.unmounted();
  }

  style() {
    return css``;
  }

  template() {
    return html`<slot></slot>`;
  }
}

/**
 * Attach template in the shadow root of custom element
 *
 * @param {HTMLElement} element
 * @param {string} element
 */
function attachTemplate(element, content, style) {
  const template = document.createElement("template");
  template.innerHTML = content;

  const sheet = new CSSStyleSheet();
  sheet.replaceSync(style);

  element.attachShadow({ mode: "open" });
  element.shadowRoot.adoptedStyleSheets = [sheet];
  element.shadowRoot.appendChild(template.content.cloneNode(true));
}

/**
 * @param {ShadowRoot} root
 * @param {Array<string>} targets
 * @returns {Record<string, HTMLElement>}
 */
function getTargetElements(root, targets) {
  const elements = {};

  targets.forEach(
    (target) =>
      (elements[target] = root.querySelector(`[data-target="${target}"]`)),
  );

  return elements;
}

/**
 * It does nothing special, just returns the string
 * It's helpfull for syntax highlighting of html strings.
 * There are IDE extensions that can highlight html tagged template strings
 *
 * @param {string} strings
 * @param  {...any} values
 * @returns
 */
export function html(strings, ...values) {
  return processString(strings, ...values);
}

export function css(strings, ...values) {
  return processString(strings, ...values);
}

function processString(strings, ...values) {
  let output = "";

  strings.forEach((string, i) => {
    output += string + (values[i] || ""); // values[i] is undefined if there is no value
  });

  return output;
}
