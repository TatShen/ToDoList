import { Component } from "../../../core";
import './style.scss'

export class Spinner extends Component{
    constructor(){
        super();
        

    };

    static get observedAttributes(){
        return ['classname'];
    };

    render(){
        const {classname} = this.props
        return `
        
             <div class="back">
                <div class="spinner-border ${classname}" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </di>    
        `;
    }
}

customElements.define('it-spinner', Spinner)