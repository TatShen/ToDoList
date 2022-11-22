import { Component } from "../../../core";

export class Button extends Component{
   componentDidMount(){
        this.addEventListener('click',() => {
            this.dispatch(this.props.eventtype)
        })
    }

    static get observedAttributes(){
        return ['content', 'classname', 'eventtype', 'type'];
    };
    
    render(){
        const { content,classname, type } = this.props;
        return `
        <button type="${type}" class=" ${classname}">${content}</button>
        `
    }
}

customElements.define('it-button', Button)