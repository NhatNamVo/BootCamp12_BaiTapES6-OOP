import ActivityList from './ActivyLists.js';
import { imcompleteContentList } from './main.js';

export default class ImCompleteList extends ActivityList {
    constructor(title, status) {
        super(title, status);
    }
    render = (index) => {
        let imCompleteContent = imcompleteContentList.innerHTML.toString();
        imCompleteContent += `
            <li class="taskItem" data-title = ${this.title.replace(' ','_')} data-item = ${index}>
                <h4>${this.title}</h4>
                <div class="iconBtn" style = "color: gray;">
                    <div data-index = ${index} class="deleteBtn" style="width: 50%; text-align: center;">
                        <i class="fa fa-trash-alt"></i>
                    </div>
                    <div data-index = ${index} class="changeState" style="width: 50%; text-align: center;">
                        <i class="fa fa-check-circle"></i>
                    </div>
                </div>
            </li>
            `
        imcompleteContentList.innerHTML = imCompleteContent;
    }
}
