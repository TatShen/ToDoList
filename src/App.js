import {Component} from './core'
import './components'
import { todoList, TodoList } from './services/ToDoList/ToDoList';


export class App extends Component {
    constructor(){
      super();
      this.state = {
        isloading: false,
        value :'',

      };
    };
    registerEvents(){
      this.addEventListener('change',(evt) => {
        if(evt.target.closest('form-control')){
          this.setState((state) => {
            return {
              ...state,
              value:evt.target.value
            }
          })
        }
      })
      window.addEventListener('save-task',()=>{
          this.setState((state) => ({ ...state, isloading:true}));
          todoList.creatTask({title: this.state.value}).finally(() => {
            this.setState((state) => ({...state, isloading:false}));
          });
      });
    };

    
    render(){
        return `
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Загрузка...</span>
        </div>
      </div>
        </div>
        <div class='container mt-5'>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Add a new task" aria-label="Recipient's username" aria-describedby="button-addon2" value = ${this.state.value}>
          <it-button classname="btn btn-outline-primary" type="button" id="button-addon2" content="Save" eventtype='save-task'></it-button>
        </div>
        <ul class="list-group">
          <li class="list-group-item">
            <div class="form-check d-flex justify-content-between align-items-center">
              <div>
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class='d-flex'>
                  <it-button type="button" classname="btn btn-danger btn-sm" content="Delete"></it-button>
                  <it-button type="button" classname="btn btn-primary btn-sm" content="Update"></it-button>
                </div>
            </div>
          </li>
        </ul>
      </div>`
    }
}

customElements.define('it-app', App)