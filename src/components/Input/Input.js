import { Component } from "../../core";

export class Input extends Component{
   
    static get observedAttributes(){
        return ['content', 'classname'];
    };
    
    render(){
        const { content,classname } = this.props;
        return `
        <input type="text" class=${classname} placeholder=${content} aria-label="Recipient's username" aria-describedby="button-addon2">
        `
    }
}

customElements.define('it-input', Input)