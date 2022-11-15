import { Component } from "../../../core";
import '../../atoms'
import { todoList } from "../../../services/ToDoList/ToDoList";

export class InputGroup extends Component{
    constructor(){
        super();
        this.state = {
            inputValue : ''
        }
    };

    onSave(){
        if(this.state.inputValue){
            todoList.creatTask({
                title: this.state.inputValue,
                isCompleted: false
            })
        }
    };

    onInput(evt){
        this.setState((state) => {
            return{
                ...state,
                inputValue: evt.detail.value
            }
        })
    };

    componentDidMount(){
        this.addEventListener('custom-input', this.onInput)
        this.addEventListener('save-task', this.onSave)
    };

    render(){
        return  `
        <div class="input-group mb-3">
            <it-input placeholder= "Add a new task" type = "text" value= "${this.state.inputValue}"></it-input>
            <it-button classname="btn btn-outline-primary" type="button" id="button-addon2" content="Save" eventtype='save-task' ></it-button>
        </div>
        `
    };
}

customElements.define('it-inputgroup', InputGroup)