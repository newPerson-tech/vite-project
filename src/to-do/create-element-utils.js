import { ELEMENT_PROP } from "./config";

export function createElement(config) {
  const el = document.createElement(config[ELEMENT_PROP.tag]);
  for (let item in config) {
    switch (item) {
      case ELEMENT_PROP.className:
        el.className = config[item];
        break;
      case ELEMENT_PROP.type:
        el.type = config[item];
        break;
      case ELEMENT_PROP.content:
        el.innerHTML = config[item];
        break;
      case ELEMENT_PROP.attributes:
        config[item].forEach((attrI) => {
          el.setAttribute(
            attrI[ELEMENT_PROP.attributeName],
            attrI[ELEMENT_PROP.attributeValue]
          );
        });
        break;
      case ELEMENT_PROP.checked:
        el.checked = config[item];
      default:
        break;
    }
  }
  return el;
}
