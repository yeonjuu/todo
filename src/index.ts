/**
 * @typedef {object} todo
 * @property {string} id 
 * @property {string} content 
 * @property {boolean} isDone
 * @property {string} category 
 */

interface todo{
    readonly id : string,
    content : string,
    isDone : boolean,
    category ?: string
}

/**
 * @type {todo[]} todos
 */
let todos :todo[] = [];

/**
 * @function createTodo
 * @param {string} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 */
function createTodo(id:string,content:string,isDone:boolean=false,category:string):void{}

/**
 * @function readTodo
 * @param {string} id 
 * @returns {object[]} todos
 */
function readTodo(id:string):todo[]{return[]}

/**
 * @function readAll
 * @returns {object[]} todos
 */
function readAll():todo[]{return []}

/**
 * @function updateTodo 
 * @param {string} id
 * @param {string} content
 * @param {boolean} isDone
 */
function updateTodo(id:string, content:string, isDone:boolean):void{}

/**
 * @function deleteTodo
 * @param {string} id
 */
function deleteTodo(id:string):void{}

/**
 * @function deleteAll
 */
function deleteAll():void{}
