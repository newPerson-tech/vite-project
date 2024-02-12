import "../style.scss";
import { addTask, getTask, getTaskDone } from "./to-do/http-handler";
import { API_PATH } from "./to-do/config";

import { createTask } from "./to-do/card-generate-utils";
import { createCard, createCardDone } from "./to-do/create-listen-card";

const modalInput = document.getElementById("modal-1");
const taskFormEl = document.getElementById("taskForm");
const cardWrapEl = document.getElementById("cardWrapToDo");
const cardWrapDoneEl = document.getElementById("cardWrapDone");

taskFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleInputEl = document.getElementById("taskTitle");
  const descriptionTextEl = document.getElementById("taskDescription");
  const prioritySelectEl = document.getElementById("taskPriority");
  const task = createTask(
    titleInputEl.value,
    descriptionTextEl.value,
    prioritySelectEl.value
  );
  addTask(task, API_PATH.taskList);
  createCard(task, cardWrapEl, cardWrapDoneEl);
  titleInputEl.value = "";
  descriptionTextEl.value = "";
  prioritySelectEl.value = "";
  modalInput.checked = false;
});

getTask().then((res) => {
  res.forEach((task) => {
    createCard(task, cardWrapEl, cardWrapDoneEl);
  });
});
getTaskDone().then((res) => {
  res.forEach((task) => {
    createCardDone(task, cardWrapEl, cardWrapDoneEl);
  });
});

/*
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia29uc3RhbnRpbmU4MTEiLCJhIjoiY2themphMDhpMGsyazJybWlpbDdmMGthdSJ9.m2RIe_g8m5dqbce0JrO73w";
const WEATHER_TOKEN = "ca51dc5865dbe4eba4709c18e67c224a";
mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [35.01649195064002, 48.48482494041488],
  zoom: 8,
});

map.on("click", (e) => {
  const { lng, lat } = e.lngLat;
  console.log("lng - lat", lng, lat);
  getWeatherByPoint(lat, lng);
});

function getWeatherByPoint(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_TOKEN}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });
} */
