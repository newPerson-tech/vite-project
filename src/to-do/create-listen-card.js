import { addElementCard, createDeleteButton } from "./create-card-element";
import { addTask, deleteTask } from "./http-handler";
import { API_PATH, TASK_ATTRIBUTE_NAME } from "./config";

export function createCard(task, cardWrapEl, cardWrapDoneEl) {
  const { cardLabelInputEl, cardEl } = addElementCard(task, false, cardWrapEl);
  cardLabelInputEl.addEventListener("input", (e) => {
    const taskId = e.target.getAttribute(TASK_ATTRIBUTE_NAME);
    if (taskId) {
      deleteTask(taskId, API_PATH.taskList).then((res) => {
        cardWrapEl.removeChild(cardEl);
        addTask(res, API_PATH.taskListDone);
        createCardDone(res, cardWrapEl, cardWrapDoneEl);
      });
    }
  });
}

export function createCardDone(task, cardWrapEl, cardWrapDoneEl) {
  const { cardLabelInputEl, cardEl, cardBodyEl } = addElementCard(
    task,
    true,
    cardWrapDoneEl
  );
  const cardDeleteBtnEl = createDeleteButton();
  cardBodyEl.prepend(cardDeleteBtnEl);
  cardLabelInputEl.addEventListener("input", (e) => {
    const taskId = e.target.getAttribute(TASK_ATTRIBUTE_NAME);
    if (taskId) {
      deleteTask(taskId, API_PATH.taskListDone).then((res) => {
        cardWrapDoneEl.removeChild(cardEl);
        addTask(res, API_PATH.taskList);
        createCard(res, cardWrapEl, cardWrapDoneEl);
      });
    }
  });
  cardDeleteBtnEl.addEventListener("click", () => {
    deleteTask(task.id, API_PATH.taskListDone);
    cardWrapDoneEl.removeChild(cardEl);
  });
}
