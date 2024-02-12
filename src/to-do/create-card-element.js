import moment from "moment";
// configs
import { ELEMENT_PROP, TASK_ATTRIBUTE_NAME } from "./config";
import { createElement } from "./create-element-utils";
import { getClassPriority } from "./create-card-class";

export function addElementCard(task, isChecked, cardWrapEl) {
  const {
    cardEl,
    cardBodyEl,
    cardTitleWrapEl,
    cardLabelWrapEl,
    cardLabelEl,
    cardLabelInputEl,
    cardTitleEl,
    cardDateEl,
  } = createCardElements(task, isChecked);
  cardLabelEl.appendChild(cardLabelInputEl);
  cardLabelWrapEl.appendChild(cardLabelEl);
  cardLabelWrapEl.appendChild(cardTitleEl);
  cardTitleWrapEl.appendChild(cardLabelWrapEl);
  cardTitleWrapEl.appendChild(cardDateEl);
  cardBodyEl.appendChild(cardTitleWrapEl);
  if (task.description) {
    const cardDescEl = createElement({
      [ELEMENT_PROP.tag]: "p",
      [ELEMENT_PROP.className]: "text-content2",
      [ELEMENT_PROP.content]: task.description,
    });
    cardBodyEl.appendChild(cardDescEl);
  }
  cardEl.appendChild(cardBodyEl);
  cardWrapEl.appendChild(cardEl);
  return { cardLabelInputEl, cardEl, cardTitleWrapEl, cardBodyEl };
}

function createCardElements(task, isChecked) {
  const cardEl = createElement({
    [ELEMENT_PROP.tag]: "div",
    [ELEMENT_PROP.className]: `card border ${getClassPriority(task.priority)}`,
  });
  const cardBodyEl = createElement({
    [ELEMENT_PROP.tag]: "div",
    [ELEMENT_PROP.className]: "card-body",
  });
  const cardTitleWrapEl = createElement({
    [ELEMENT_PROP.tag]: "div",
    [ELEMENT_PROP.className]: "flex gap-3 items-center justify-between",
  });
  const cardLabelWrapEl = createElement({
    [ELEMENT_PROP.tag]: "div",
    [ELEMENT_PROP.className]: "flex gap-3 items-center",
  });
  const cardLabelEl = createElement({
    [ELEMENT_PROP.tag]: "label",
    [ELEMENT_PROP.className]: "flex items-center cursor-pointer",
  });
  const cardLabelInputEl = createElement({
    [ELEMENT_PROP.tag]: "input",
    [ELEMENT_PROP.type]: "checkbox",
    [ELEMENT_PROP.className]: "checkbox",
    [ELEMENT_PROP.checked]: isChecked,
    [ELEMENT_PROP.attributes]: [
      {
        [ELEMENT_PROP.attributeName]: TASK_ATTRIBUTE_NAME,
        [ELEMENT_PROP.attributeValue]: task.id,
      },
    ],
  });
  const cardTitleEl = createElement({
    [ELEMENT_PROP.tag]: "h2",
    [ELEMENT_PROP.className]: "card-header",
    [ELEMENT_PROP.content]: task.title,
  });
  const cardDateEl = createElement({
    [ELEMENT_PROP.tag]: "span",
    [ELEMENT_PROP.className]: "badge badge-outline-primary badge-md",
    [ELEMENT_PROP.content]: moment(task.date).format("DD.MM.YYYY/HH:mm"),
  });
  return {
    cardEl,
    cardBodyEl,
    cardTitleWrapEl,
    cardLabelWrapEl,
    cardLabelEl,
    cardLabelInputEl,
    cardTitleEl,
    cardDateEl,
  };
}

export function createDeleteButton() {
  const iconSvg = /*html*/ `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        d="M7.5 9h9v10h-9zM5 9h14M9.364 6h5v3h-5zm1.181 5v6m3-6v6"
      />
    </svg>`;
  return createElement({
    [ELEMENT_PROP.tag]: "button",
    [ELEMENT_PROP.className]: "btn btn-circle self-end btn-solid-error",
    [ELEMENT_PROP.content]: iconSvg,
  });
}
