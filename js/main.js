import ScheduleData from '../js/services/RequestData.js';
import HandleSchedule from '../js/Controller/SheduleLists.js'

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const completeContentList = $('#completed');
const imcompleteContentList = $('#todo');
const dataPicker = $('#datepicker');
let scheduleLists;

export {completeContentList,imcompleteContentList, dataPicker};

const scheduleDatas = new ScheduleData;
const schedule = new HandleSchedule;
scheduleDatas.getData(start);

function start(scheduleData) {
    scheduleLists = scheduleData;
    schedule.addData(scheduleLists[0].thing)
    schedule.renderSchedule();
}
