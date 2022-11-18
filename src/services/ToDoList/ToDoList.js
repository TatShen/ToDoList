import {Database} from '../database/Database'

export class TodoList{
    constructor(){
        this.database = Database.getInstance();
    };

    creatTask(body){
       return this.database.create('tasks', body)
    };

    getTasks(){
        return this.database.read('tasks')
    };


}

export const todoList = new TodoList();