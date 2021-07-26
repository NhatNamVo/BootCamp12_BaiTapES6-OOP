import ScheduleData from '../js/services/RequestData.js';
import HandleSchedule from '../js/Controller/SheduleLists.js';
import HandleEvent from '../js/Controller/HandleEvent.js';
import DateSchedule from '../js/Controller/DateSchedule.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const completeContentList = $('#completed');
const imcompleteContentList = $('#todo');

const newTaskValue = $('#newTask');
const addItemBtn = $('#addItem');
const noteNewTask = $('#noteNewTask');
const taskList = $('.card__todo');
const optionBtn = $('.filter-btn');
const dateTask = $('#datepicker');
const editBtn = $('.editTimeBtn');

let scheduleLists;
export {optionBtn, monthyear, scheduleDatas, choseDateOkBtn, day, dateTask, editBtn, datePicker, schedule, completeContentList,imcompleteContentList, newTaskValue, addItemBtn,noteNewTask,scheduleLists,taskList};

const scheduleDatas = new ScheduleData;
const schedule = new HandleSchedule;
const datePicker = new SimplePicker();
const dateSchedule = new DateSchedule;
const monthyear = $('.simplepicker-month-and-year');
const day = $('.simplepicker-date');
const choseDateOkBtn = $('.simplepicker-ok-btn');

datePicker.disableTimeSection()
scheduleDatas.getData(start);

function start(scheduleData) {
    dateSchedule.AddItems(scheduleData);
    
    let dateChosen = monthyear.innerHTML;
    let dayChosen = day.innerHTML;
    dayChosen = dayChosen.replace(dayChosen.slice(-2),',');
    dateChosen = dateChosen.replace(' ',' ' + dayChosen);
    dateTask.innerHTML = dateChosen;
    dateSchedule.checkDateSchedule(dateChosen);
}

HandleEvent(schedule,scheduleDatas,dateSchedule);
