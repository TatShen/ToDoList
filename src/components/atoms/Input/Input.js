import { Component } from "../../../core";

export class Input extends Component{
    constructor(){
        super();
        this.state = {
            value: '',
        }
    }
   
    componentDidMount(){
        this.addEventListener('click',() => {
            this.dispatch(this.props.eventtype)
        })
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

    onChange(){
        this.dispatch('')
    }
    
    render(){
        const { type, placeholder, value } = this.props;
        return `
        <input type="${type}" class="form-control" placeholder="${placeholder}" >
        `
    }
}

customElements.define('it-input', Input)