/**
 * @typedef todo
 * @property {string} id 
 * @property {string} content 
 * @property {boolean} isDone
 * @property {string} category 
 */

/**
 * @type {object[]} todos
 */

/**
 * @function create todo
 * @param {string} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {string[]} tags 
 */
function createTodo(id,content,isDone=false,category){}

/**
 * @function read todo
 * @param {string} id 
 * @returns {object[]} todos
 */
function readTodo(id){}

/**
 * @function read todos
 * @returns {object[]} todos
 */
function readAll(){}

/**
 * @function update 
 * @param {string} id
 * @param {string} content
 * @param {boolean} isDone
 */
function updateTodo(id, content, isDone){}

/**
 * @function delete todo
 * @param {string} id
 */
function deleteTodo(id){}

/**
 * @function delete todos
 */
function deleteAll(){}
