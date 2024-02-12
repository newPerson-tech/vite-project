import { API_PATH } from "./config";

const URL = "http://localhost:3000/";

export function addTask(task, apiPath) {
  fetch(`${URL}${apiPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
}

export function deleteTask(id, apiPath) {
  return fetch(`${URL}${apiPath}/${id}`, { method: "DELETE" }).then((res) => {
    return res.json();
  });
}

export function getTask() {
  return fetch(`${URL}${API_PATH.taskList}`).then((res) => res.json());
}

export function getTaskDone() {
  return fetch(`${URL}${API_PATH.taskListDone}`).then((res) => res.json());
}
