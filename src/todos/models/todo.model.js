import { v4 as uuid } from 'uuid';

export class Todo {

    /**
     * Estructura de un todo.
     * @param {String} description 
     */
    constructor( description ){
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createAt = new Date();
    }
}