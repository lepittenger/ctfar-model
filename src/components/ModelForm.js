import React from "react";

class ModelForm extends React.Component {
    render() {
        return (
            <div className="model-form-wrap">
                <p className="date">Mon Apr 12 at 2:26 PM</p>
                <h3>A Title of the Model</h3>
                <form className="model-form">
                    <ul>
                        <li>
                            <label htmlFor="circumstance">C</label>
                            <textarea type="text" name="circumstance" rows="3"></textarea>
                        </li>
                        <li>
                            <label htmlFor="thought">T</label>
                            <textarea type="text" name="thought" rows="3"></textarea>
                        </li>
                        <li>
                            <label htmlFor="feeling">F</label>
                            <input type="text" name="feeling"></input>
                        </li>
                        <li>
                            <label htmlFor="action">A</label>
                            <textarea type="text" name="action" rows="3"></textarea>
                        </li>
                        <li>
                            <label htmlFor="result">R</label>
                            <textarea type="text" name="result" rows="3"></textarea>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default ModelForm;