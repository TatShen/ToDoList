import { Component } from "../../core";
import "../malecules";
import "../atoms";
import { todoList } from "../../services/ToDoList/ToDoList";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      isLoading: false,
    };
  }

  getTasks() {
    todoList.getTasks().then((data) => {
      this.setState((state) => {
        return {
          ...state,
          tasks: data,
        };
      });
    });
  }

  saveTask = (evt) => {
    todoList.creatTask({ ...evt.detail, isCompleted: false }).then(() => {
      this.getTasks();
    });
  };

  onClick(evt) {
    if (evt.target.closest(".delete")) {
      const taskId = evt.target.dataset.taskId;
      this.deleteTask(taskId);
    } 
    
  }

  deleteTask = (taskId,evt) => {
    todoList.deleteTask(taskId, evt.detail.title).then(() => {
      this.getTasks();
    });
  }

  updateTask = ({detail}) => { //деструктуризация ( из evt достаем только detail)
      todoList.updateTask(detail.id, {title: detail.title, isCompleted:false}).then(() =>{
        this.getTasks();
      });
    }
  

  componentDidMount() {
    this.getTasks();
    this.addEventListener("save-task", this.saveTask);
    this.addEventListener("click", this.onClick);
    this.addEventListener("edit-task", this.updateTask)
  }

  componentWillUnMount() {
    this.removeEventListener("save-task", this.saveTask);
    this.removeEventListener("click", this.onClick);
    this.removeEventListener("edit-task", this.updateTask)
  }

  render() {
    console.log(this.state.tasks);
    return `
        <div class='container mt-5'>
          <it-inputgroup type="save-task"  classname="collapse"></it-inputgroup>
        </div>
        <ul class="list-group mt-5">
           ${this.state.tasks
             .map(
               (item) => `
            <it-task id="${item.id}" title="${item.title}" iscompleted="${item.isCompleted}"></it-task>
        `
             )
             .join("")
            }
          
</ul>  
     `;
  }
}

customElements.define("it-app", App);
