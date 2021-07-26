import CompleteList from "../CompleteList.js";
import ImCompleteList from '../ImCompleteList.js';
export default class HandleSchedule {
    constructor() {
        this.scheduleList = [];
        this.id = '';
    }
    addData = (data,id) => {
        this.scheduleList = data;
        this.id = id;
    }
    renderSchedule = () => {
        this.scheduleList.map((schedule,index)=>{
            this.renderItem(schedule,index);
        })
    }
    renderItem = (item,index) => {
        const {title,status} = item;
        if(status == 'pending'){
            const imCompletelist = new ImCompleteList(title,status);
            imCompletelist.render(index);
        }
        else if(status == 'complete'){
            const completedList = new CompleteList(title,status);
            completedList.render(index);
        }
    }
    checkDublicases = (value) => {
        return this.scheduleList.every((task)=>{
            return task.title !== value;
        })
    }
    addNewTask = (newTask) => {
        this.scheduleList = [...this.scheduleList,newTask];
    }
    removeTask = (index) => {
        this.scheduleList.splice(index,1);
    }
    findItem = (itemTitle) => {
        return this.scheduleList.findIndex((item)=>{
            return itemTitle === item.title;
        })
    }
    changeState = (index) => {
        const state = this.scheduleList[index].status;
        if(state == 'pending') {
            this.scheduleList[index].status = 'complete';
        }
        else{
            this.scheduleList[index].status = 'pending';
        }
    }
    sortTaskNameAZ = () => {
        this.scheduleList.sort((firstTitle,secondTitle)=>{
            return firstTitle.title.localeCompare(secondTitle.title);
        })
    }
    sortTaskNameZA = () => {
        this.scheduleList.sort((firstTitle,secondTitle)=>{
            return secondTitle.title.localeCompare(firstTitle.title);
        })
    }
}