import React from "react";

class AddModelForm extends React.Component {
    titleRef = React.createRef();
    cRef = React.createRef();
    tRef = React.createRef();
    fRef = React.createRef();
    aRef = React.createRef();
    rRef = React.createRef();

    createModel = (event) => {
        // stop the form from submitting
        event.preventDefault();
        const model = {
            titleRef: this.titleRef.current.value,
            cRef: this.cRef.current.value,
            tRef: this.tRef.current.value,
            fRef: this.fRef.current.value,
            aRef: this.aRef.current.value,
            rRef: this.rRef.current.value,
        };
        this.props.addModel(model);
        // refresh the form
        event.currentTarget.reset();
    };
    render() {
        return (
            <div className="model-form-wrap">
                <p className="date">Mon Apr 12 at 2:26 PM</p>
                <form className="model-form" onSubmit={this.createModel}>
                    <button className="saveModel" type="submit">Save</button>
                    <ul>
                        <li>
                            <input 
                                className="titleInput" 
                                type="text" 
                                name="title" 
                                ref={this.titleRef} 
                                placeholder="Title"
                            />
                        </li>
                        <li>
                            <label htmlFor="circumstance">C</label>
                            <textarea 
                                name="circumstance" 
                                ref={this.cRef} 
                                rows="3">
                            </textarea>
                        </li>
                        <li>
                            <label htmlFor="thought">T</label>
                            <textarea 
                                name="thought" 
                                ref={this.tRef} 
                                rows="3"
                            />
                        </li>
                        <li>
                            <label htmlFor="feeling">F</label>
                            <input 
                                type="text" 
                                name="feeling" 
                                ref={this.fRef} 
                            />
                        </li>
                        <li>
                            <label htmlFor="action">A</label>
                            <textarea 
                                name="action" 
                                ref={this.aRef} 
                                rows="3" 
                            />
                        </li>
                        <li>
                            <label htmlFor="result">R</label>
                            <textarea 
                                name="result" 
                                ref={this.rRef} 
                                rows="3"
                            />
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default AddModelForm;