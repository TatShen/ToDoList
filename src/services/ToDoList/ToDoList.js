import {Database} from '../database/Database'

export class TodoList{
    constructor(){
        this.database = Database.getInstance();
    };

    creatTask(body){
       return this.database.create('tasks', body)
    };


}

export const todoList = new TodoList();