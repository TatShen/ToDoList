import { Component } from "../../../core";
import '../../atoms'

export class Task extends Component {
  constructor() {
    super();
    this.state = {
      isEditting: false,
    };
  }

  static get observedAttributes() {
    return ["title", "id", "iscompleted"];
  }

  onClick(evt) {
    if (evt.target.closest(".edit")) {
      const taskId = evt.target.dataset.taskId;
      this.setState((state) => {
        return {
          ...state,
          isEditting: true,
        };
      });
    }
    if (evt.target.closest(".")) {
        const taskId = evt.target.dataset.taskId;

  }}

  editTask(){

  }

  componentDidMount() {
    this.addEventListener("click", this.onClick);
    
  }

  componentWillUnMount() {
    this.removeEventListener("click", this.onClick);
  }

  render() {
    const { title, id, iscompleted } = this.props;
    return `
    
    <li class="list-group-item mt-2" id = "${id}">
              <div class="form-check d-flex justify-content-between align-items-center">
              ${this.state.isEditting ? 
                `<it-inputgroup type="save-task"></it-inputgroup>
               
              `
                  : `<div>
                        <input class="form-check-input" type="checkbox" ${JSON.parse(iscompleted) ? "ckecked" : ""} id="${id}">
                        <label class="form-check-label" for="${id}">${title}</label>
                    </div>`
              }
              <div class='d-flex'>
                <button type="button" class="btn btn-danger btn-sm delete" data-task-id="${id}" >Delete</button>
                <button type="button" class="btn btn-primary btn-sm edit"  data-task-id="${id}">Edit</button>
              </div>
              </div>
            </li>
        `;
  }
}
customElements.define("it-task", Task);
