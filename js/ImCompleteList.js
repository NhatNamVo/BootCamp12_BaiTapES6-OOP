import ActivityList from './ActivyLists.js';
import { imcompleteContentList } from './main.js';

export default class ImCompleteList extends ActivityList {
    constructor(title, status) {
        super(title, status);
    }
    render = () => {
        let imCompleteContent = imcompleteContentList.innerHTML.toString();
        imCompleteContent += `
            <li>
                <h4>${this.title}</h4>
                <div style = "color: gray;">
                    <i class="fa fa-trash-alt"></i>
                    <i class="fa fa-check-circle"></i>
                </div>
            </li>
            `
        imcompleteContentList.innerHTML = imCompleteContent;
    }
}
