import CompleteList from "./CompleteList.js";
import ImCompleteList from './ImCompleteList.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const completeContentList = $('#completed');
const imcompleteContentList = $('#todo');

export {completeContentList,imcompleteContentList};

const completedList = new CompleteList('code homwork');
const imCompletelist = new ImCompleteList('finish project step 9');

completedList.render();
imCompletelist.render();