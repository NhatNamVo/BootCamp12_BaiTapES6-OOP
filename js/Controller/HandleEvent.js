import {newTaskValue, addItemBtn,noteNewTask,scheduleLists,taskList, optionBtn} from '../main.js';
export default function HandleEvent(schedule,scheduleDatas) {
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
                scheduleLists[0].thing = schedule.scheduleList;
                scheduleDatas.updateData(schedule.renderItem(newTask,scheduleList-1),schedule.id,scheduleLists[0]);
                newTaskValue.value = '';
            }
            else{
                console.log(isDublicase);
            }
        }
    }
    newTaskValue.oninput = (event) => {
        noteNewTask.innerHTML = "";
    }
    taskList.onclick = (event) => {
        const taskDelete = event.target.closest('.deleteBtn');
        const taskComplete = event.target.closest('.changeState');
        const taskItem = event.target.closest('.taskItem');
        let taskItemTitle = taskItem.dataset.title;
        let taskItemIndex = schedule.findItem(taskItemTitle.replace('_',' '));
        let scheduleList = schedule.scheduleList.length;
        if(taskDelete || taskComplete){
            if(taskDelete){
                schedule.removeTask(taskItemIndex);
                scheduleDatas.updateData(taskItem.parentNode.removeChild(taskItem),schedule.id,scheduleLists[0]);
            }
            else if(taskComplete){
                schedule.changeState(taskItemIndex);
                taskItem.parentNode.removeChild(taskItem);
                const updateTask = schedule.scheduleList[taskItemIndex];
                scheduleDatas.updateData(schedule.renderItem(updateTask,scheduleList-1),schedule.id,scheduleLists[0]);
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
                scheduleDatas.updateData(schedule.renderSchedule(),schedule.id,scheduleLists[0]);
            };
            if(sortZA){
                schedule.sortTaskNameZA();
                document.getElementById('todo').innerHTML = '';
                document.getElementById('completed').innerHTML = '';
                scheduleDatas.updateData(schedule.renderSchedule(),schedule.id,scheduleLists[0]);
            };
        }
    }


}