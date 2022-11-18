import { Component } from "../../../core";
import { debounce } from "../../../utils/debounce";

export class Input extends Component{
    constructor(){
        super();
        this.state = {
            value: '',
        }
        this.onInput = this.onInput.bind(this)
    }
   
    componentDidMount(){
        this.addEventListener('change', this.onInput)
    };
    
    static get observedAttributes(){
        return ['placeholder',  'value', 'type'];
    };

    componentWillUpdate(name, oldValue, newValue){
        if(name === 'value'){
            this.setState((state) => {
                return {
                    ...state,
                    value:newValue
                }
            })
        }
    };

    onInput(evt){
        this.dispatch('custom-input',{value:evt.target.value})
    }

 
    render(){
        const { type, placeholder, value } = this.props;
        return `
        <input type="${type}" class="form-control" placeholder="${placeholder}" value = "${this.state.value}">
        `
    }
}

customElements.define('it-input', Input)