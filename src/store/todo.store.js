import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: "all",
    Completed: "completed",
    Pending: "pending",
}

const state = {
    todos: [
        new Todo("Predicar"),
        new Todo("Estudio en familia"),
        new Todo("Estudio personal"),
        new Todo("Reunion"),
        new Todo("Visita de pastoreo"),
        new Todo("Informes de servicio"),
    ],
    filter: Filters.All,
}


// Inicializador de Store
const initStore = () => {
    console.log(state);
    console.log("InitStore");
}

/**
 * 
 */
const loadStore = () => {
    throw new Error('Not Implemented');

}

/**
 * 
 * @param {Object} filter 
 */
const getTodos = ( filter = Filters.All ) => {
    
    switch( filter ) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done === true);
        case Filters.Pending:
                return state.todos.filter( todo => todo.done === false);
        default:
            throw new Error(`Option ${ filter } is not valid.`);

    }

}
/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if ( !description ) throw new Error('Description is required');
    state.todos.push( new Todo(description) );

}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {

    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo;
    });
}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}

/**
 * 
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done === true );
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setSelectFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;

}

/**
 * 
 */
const getCurrentFilter = () => {
    return state.filter;
}


export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setSelectFilter,
    getCurrentFilter,
}