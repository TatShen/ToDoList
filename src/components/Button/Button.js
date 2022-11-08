import { Component } from "../../core";

export class Button extends Component{
    registerEvents(){
        this.addEventListener('click',() => {
            this.dispatchEvent(this.props.eventtype)
        })
    }

    static get observedAttributes(){
        return ['content', 'classname', 'eventtype'];
    };
    
    render(){
        const { content,classname } = this.props;
        return `
        <button type="button" class=" ${classname}">${content}</button>
        `
    }
}

customElements.define('it-button', Button)