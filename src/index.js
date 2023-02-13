/**
 * @typedef Todo
 * @property {string} id 
 * @property {string} content 
 * @property {boolean} isDone
 * @property {string} category 
 */

/**
 * @type {Todo[]} todos
 */

/**
 * @function createTodo
 * @param {string} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {string[]} tags 
 */
function createTodo(id,content,isDone=false,category){}

/**
 * @function readTodo
 * @param {string} id 
 * @returns {object[]} todos
 */
function readTodo(id){}

/**
 * @function readAll
 * @returns {object[]} todos
 */
function readAll(){}

/**
 * @function updateTodo 
 * @param {string} id
 * @param {string} content
 * @param {boolean} isDone
 */
function updateTodo(id, content, isDone){}

/**
 * @function deleteTodo
 * @param {string} id
 */
function deleteTodo(id){}

/**
 * @function deleteAll
 */
function deleteAll(){}
