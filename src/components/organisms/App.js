import {Component} from '../../core'
import '../malecules'
import { todoList, TodoList } from '../../services/ToDoList/ToDoList';


export class App extends Component {
        
    render(){
        return `
        <div class='container mt-5'>
        <it-inputgroup></it-inputgroup>
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