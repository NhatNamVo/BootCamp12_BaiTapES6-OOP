import {newTaskValue, addItemBtn,noteNewTask,scheduleLists,taskList, optionBtn, editBtn, datePicker, dateTask, monthyear, choseDateOkBtn, day} from '../main.js';
export default function HandleEvent(schedule,scheduleDatas,dateSchedule) {
    addItemBtn.onclick = (event) => {
        if(!newTaskValue.value) {
            noteNewTask.innerHTML = "Task input is empty";
        }
        else{
            const isDublicase = schedule.checkDublicases(newTaskValue.value);
            if(isDublicase){
                const newTask = {
                    title: newTaskValue.value,
                    status: 'pending'
                }
                schedule.addNewTask(newTask);
                let scheduleList = schedule.scheduleList.length;
                dateSchedule.dateDatas[dateSchedule.currentitemIndex].thing = schedule.scheduleList;
                scheduleDatas.updateData(schedule.renderItem(newTask,scheduleList-1),schedule.id,dateSchedule.dateDatas[dateSchedule.currentitemIndex]);
                newTaskValue.value = '';
            }
            else{
                noteNewTask.innerHTML = "Task is same as a taskname-existing";
            }
        }
    }
    newTaskValue.oninput = (event) => {
        noteNewTask.innerHTML = "";
    }
    newTaskValue.onchange = (event) => {
        noteNewTask.innerHTML = "";
    }
    taskList.onclick = (event) => {
        const taskDelete = event.target.closest('.deleteBtn');
        const taskComplete = event.target.closest('.changeState');
        const taskItem = event.target.closest('.taskItem');
        let taskItemTitle = taskItem.dataset.title;
        let taskItemIndex = schedule.findItem(taskItemTitle.replaceAll('_',' '));
        let scheduleList = schedule.scheduleList.length;
        if(taskDelete || taskComplete){
            if(taskDelete){
                schedule.removeTask(taskItemIndex);
                scheduleDatas.updateData(taskItem.parentNode.removeChild(taskItem),schedule.id,dateSchedule.dateDatas[dateSchedule.currentitemIndex]);
            }
            else if(taskComplete){
                schedule.changeState(taskItemIndex);
                taskItem.parentNode.removeChild(taskItem);
                const updateTask = schedule.scheduleList[taskItemIndex];
                scheduleDatas.updateData(schedule.renderItem(updateTask,scheduleList-1),schedule.id,dateSchedule.dateDatas[dateSchedule.currentitemIndex]);
            }
        }
    }

    optionBtn.onclick = (event) => {
        const check = event.target.closest('#one');
        const sortAZ = event.target.closest('#two');
        const sortZA = event.target.closest('#three');
        const timer = event.target.closest('#all');
        if(sortAZ || sortZA){
            if(sortAZ){
                schedule.sortTaskNameAZ();
                document.getElementById('todo').innerHTML = '';
                document.getElementById('completed').innerHTML = '';
                scheduleDatas.updateData(schedule.renderSchedule(),schedule.id,dateSchedule.dateDatas[dateSchedule.currentitemIndex]);
            };
            if(sortZA){
                schedule.sortTaskNameZA();
                document.getElementById('todo').innerHTML = '';
                document.getElementById('completed').innerHTML = '';
                scheduleDatas.updateData(schedule.renderSchedule(),schedule.id,dateSchedule.dateDatas[dateSchedule.currentitemIndex]);
            };
        }
    }
    editBtn.onclick = (event) => {
        datePicker.open();
    }
    choseDateOkBtn.onclick = () => {
        let dateChosen = monthyear.innerHTML;
        let dayChosen = day.innerHTML;
        dayChosen = dayChosen.replace(dayChosen.slice(-2),',');
        dateChosen = dateChosen.replace(' ',' ' + dayChosen);
        dateTask.innerHTML = dateChosen;
        dateSchedule.checkDateSchedule(dateChosen);
    }
}