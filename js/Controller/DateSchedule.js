import {scheduleDatas, dateTask, schedule, completeContentList, imcompleteContentList} from '../main.js';
export default class DateSchedule {
    constructor(){
        this.dateDatas = [];
        this.currentitemIndex;

    }
    AddItems = (data) => {
        this.dateDatas = data;
    }
    checkDateSchedule = (date) => {
        let dateIndex = this.dateDatas.findIndex((dateData)=>{
            return dateData.date == date;
        });
        if(dateIndex != -1){
            completeContentList.innerHTML = '';
            imcompleteContentList.innerHTML = '';
            this.currentitemIndex = dateIndex;
            schedule.addData(this.dateDatas[this.currentitemIndex].thing,this.dateDatas[this.currentitemIndex].id);
            schedule.renderSchedule();
        }
        else{
            completeContentList.innerHTML = '';
            imcompleteContentList.innerHTML = '';
            this.currentitemIndex = 0;
            const newDateData = {
                date: date,
                thing: [],
            }
            scheduleDatas.addNewData(console.log(newDateData),newDateData);
            scheduleDatas.getData(this.start);
        }
    }
    start = (scheduleData) => {
        this.AddItems(scheduleData);
        this.checkDateSchedule(dateTask.innerHTML);
        schedule.addData(this.dateDatas[this.currentitemIndex].thing,this.dateDatas[this.currentitemIndex].id);
        schedule.renderSchedule();
    }
}
