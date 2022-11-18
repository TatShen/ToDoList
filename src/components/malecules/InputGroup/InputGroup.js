import { Component } from "../../../core";
import '../../atoms'
import { todoList } from "../../../services/ToDoList/ToDoList";

export class InputGroup extends Component{
    constructor(){
        super();
        this.state = {
            inputValue : '',
            isLoading: false,
            error:'',
            isVisibility:false
            
        }
    };

    onSave(){
        if(this.state.inputValue){
            this.setState((state)=>{
                return{
                    ...state,
                    isLoading:false,
                    isVisibility: true
                    

                   
                }
                
            })
            todoList.creatTask({
                title: this.state.inputValue,
                isCompleted: false
            }).then(()=>{
                this.setState((state) => {
                    return {
                        ...state,
                        inputValue: '',
                        isVisibility: false
                       };
                })

                // throw new Error('the server is mot available')

            })
            .catch((error) =>{
                this.setState((state) => {
                    return{
                        ...state,
                        error: error.message

                    }
                    
                })
                console.log(this.state.eror);
            })
            .finally(() => {
                this.setState((state) => {
                    return {
                        ...state,
                        isLoading:false,
                        
                    }
                })
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
        return  this.state.isVisibility ? `<it-spinner></it-spinner>` : `
        <div class="input-group mb-3">
            <it-input placeholder= "Add a new task" type = "text" value= "${this.state.inputValue}"></it-input>
            <it-button classname="btn btn-outline-primary" type="button" id="button-addon2" content="Save" eventtype='save-task' ></it-button>
        </div>
        ${this.state.error ? `<p style = "background:red">${this.state.error}</p>`:``}
        ` 
    };
}

customElements.define('it-inputgroup', InputGroup)