import { Component } from "../../../core";
import '../../atoms'

export class InputGroup extends Component{
    constructor(){
        super();
    }

    render(){
        return `
        <div class="input-group mb-3">
            <it-input placeholder="Add a new task" type = "text"></it-input>
            <it-button classname="btn btn-outline-primary" type="button" id="button-addon2" content="Save" eventtype='save-task' ></it-button>
        </div>
        `
    }
}

customElements.define('it-inputgroup', InputGroup)