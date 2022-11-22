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

    deleteTask(id){
        return this.database.delete('tasks', id)
    }
    updateTask(body,id){
        return this.database.update('tasks',body,id)
    }

}

export const todoList = new TodoList();