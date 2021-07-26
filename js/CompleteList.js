import ActivityList from './ActivyLists.js';
import {completeContentList} from './main.js';

export default class CompleteList extends ActivityList {
    constructor(title,status){
        super(title,status);
    }
    render = (index) => {
        let completedContent =completeContentList.innerHTML.toString();
        completedContent += `
        <li class="taskItem" data-item = ${index} data-title = ${this.title.replaceAll(' ','_')} style = "color: green;">
            <h4>${this.title}</h4>
            <div class = "iconBtn">
                <div data-index = ${index} class="deleteBtn" style="width: 50%; text-align: center;">
                    <i class="fa fa-trash-alt" style = "color: gray;"></i>
                </div>
                <div data-index = ${index} class="changeState" style="width: 50%; text-align: center;">
                    <i class="fa fa-check-circle"></i>
                </div>
            </div>
        </li>`
        completeContentList.innerHTML = completedContent;
    }
}