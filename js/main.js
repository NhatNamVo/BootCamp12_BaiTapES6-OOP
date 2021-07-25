import ScheduleData from '../js/services/RequestData.js';
import HandleSchedule from '../js/Controller/SheduleLists.js';
import HandleEvent from '../js/Controller/HandleEvent.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const completeContentList = $('#completed');
const imcompleteContentList = $('#todo');
const dataPicker = $('#datepicker');
const newTaskValue = $('#newTask');
const addItemBtn = $('#addItem');
const noteNewTask = $('#noteNewTask');
const taskList = $('.card__todo');
const optionBtn = $('.filter-btn');
let scheduleLists;

export {optionBtn, schedule, completeContentList,imcompleteContentList, dataPicker, newTaskValue, addItemBtn,noteNewTask,scheduleLists,taskList};

const scheduleDatas = new ScheduleData;
const schedule = new HandleSchedule;
scheduleDatas.getData(start);

function start(scheduleData) {
    scheduleLists = scheduleData;
    schedule.addData(scheduleLists[0].thing,scheduleLists[0].id);
    schedule.renderSchedule();
}

HandleEvent(schedule,scheduleDatas);
