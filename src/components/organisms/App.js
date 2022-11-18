import {Component} from '../../core'
import '../malecules'
import '../atoms'
import { todoList } from '../../services/ToDoList/ToDoList';


export class App extends Component {
  
        constructor(){
          super();
          this.state = {
            tasks:[],
          }
        }

    onDelete(evt){
      let id =  evt.target.value;
      console.log(id);
    }

    componentDidMount(){      
      todoList.getTasks().then((data)=>{
        this.setState((state) => {
          return{
            ...state,
            tasks: data
          }
        })
        console.log(this.state.tasks);
      })
      this.addEventListener('delete', onDelete)
      
    }
        
    render(){
        return `
        <div class='container mt-5'>
          <it-inputgroup></it-inputgroup>
        </div>
        <ul class="list-group">
           ${this.state.tasks.map((item) => `
            <li class="list-group-item " id = "${item.id}">
              <div class="form-check d-flex justify-content-between align-items-center">
                <div>
                  <input class="form-check-input" type="checkbox" ${item.isCompleted ? "ckecked": ""} id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                      ${item.title}
                  </label>
                </div>
              <div class='d-flex'>
                <it-button type="button" classname="btn btn-danger btn-sm" content="Delete" id="${item.id}" eventtype="delete"></it-button>
                <it-button type="button" classname="btn btn-primary btn-sm" content="Update"></it-button>
              </div>
              </div>
            </li>
        `).join('')}
          
</ul>  
        
        
        
        `
    }
}

customElements.define('it-app', App)





{/* <ul class="list-group">
<li class="list-group-item ">
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
</ul>  */}