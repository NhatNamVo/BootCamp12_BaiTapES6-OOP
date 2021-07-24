import ActivityList from './ActivyLists.js';
import {completeContentList} from './main.js';

export default class CompleteList extends ActivityList {
    constructor(title,status){
        super(title,status);
    }
    render = () => {
        let completedContent =completeContentList.innerHTML.toString();
        completedContent += `
        <li style = "color: green;">
            <h4>${this.title}</h4>
            <div>
                <i class="fa fa-trash-alt" style = "color: gray;"></i>
                <i class="fa fa-check-circle"></i>
            </div>
        </li>`

        completeContentList.innerHTML = completedContent;
    }
}