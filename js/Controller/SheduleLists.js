import CompleteList from "../CompleteList.js";
import ImCompleteList from '../ImCompleteList.js';
export default class HandleSchedule {
    constructor() {
        this.scheduleList = [];
    }
    addData = (data) => {
        this.scheduleList = data;
        console.log(this.scheduleList);
    }
    renderSchedule = () => {
        this.scheduleList.map((schedule,index)=>{
            const completedList = new CompleteList(schedule.title,schedule.status);
            const imCompletelist = new ImCompleteList(schedule.title,schedule.status);
            if(schedule.status == 'pending'){
                imCompletelist.render();
            }
            else if(schedule.status == 'complete'){
                completedList.render();
            }
        })
    }
}