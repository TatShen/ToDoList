import { Component } from "../../../core";



export class InputGroup extends Component {
  

  onSubmit = (evt) => {
    evt.preventDefault();
    const task = {};
    const data = new FormData(evt.target);
    if(this.props.taskid){
      data.append('id', this.props.taskid)
    };
    data.forEach((value, key) => {
        task[key] = value;
    });
   
    this.dispatch(this.props.type, task)

  };

   componentDidMount() {
    this.addEventListener("submit", this.onSubmit);
    
  };

  componentWillUnMount() {
    this.removeEventListener("submit", this.onSubmit);
    
  };

  static get observedAttributes() {
    return ["type",  'value', 'isshowcancelbutton', 'taskid'];
  };

  render() {
    const {value,isshowcancelbutton, taskid} = this.props
    return `
        <form class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Add a new tasks"  name="title" value="${value ?? ''}">
            <button class="btn btn-outline-primary " type="submit" id="button-addon2" taskid="${taskid}">Save</it-button>
            ${isshowcancelbutton ? 
            `<button class="btn btn-outline-secondary cancel" type="button" id="button-addon2" i">Cancel</it-button>`:''}
        </form>`;
  };
}

customElements.define("it-inputgroup", InputGroup);


















// this.state.isVisibility ? `<it-spinner></it-spinner>` :

// ${this.state.error ? `<p style = "background:red">${this.state.error}</p>`:``}

// onSave(){
//     if(this.state.inputValue){
//         this.setState((state)=>{
//             return{
//                 ...state,
//                 isLoading:false,
//                 isVisibility: true
//                 }

//         })
//         todoList.creatTask({
//             title: this.state.inputValue,
//             isCompleted: false
//         }).then(()=>{
//             this.setState((state) => {
//                 return {
//                     ...state,
//                     inputValue: '',
//                     isVisibility: false
//                    };
//             })

//             // throw new Error('the server is mot available')

//         })
//         .catch((error) =>{
//             this.setState((state) => {
//                 return{
//                     ...state,
//                     error: error.message

//                 }

//             })
//             console.log(this.state.eror);
//         })
//         .finally(() => {
//             this.setState((state) => {
//                 return {
//                     ...state,
//                     isLoading:false,

//                 }
//             })
//         })
//     }
// };

// onInput(evt){
//     this.setState((state) => {
//         return{
//             ...state,
//             inputValue: evt.detail.value
//         }
//     })
// };
