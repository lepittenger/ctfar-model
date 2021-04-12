import React from "react";

class ModelForm extends React.Component {
    render() {
        return (
            <div class="model-form-wrap">
                <p class="date">Mon Apr 12 at 2:26 PM</p>
                <h3>A Title of the Model</h3>
                <form className="model-form">
                    <ul>
                        <li>
                            <label for="circumstance">C</label>
                            <textarea type="text" name="circumstance" rows="3"></textarea>
                        </li>
                        <li>
                            <label for="thought">T</label>
                            <textarea type="text" name="thought" rows="3"></textarea>
                        </li>
                        <li>
                            <label for="feeling">F</label>
                            <input type="text" name="feeling"></input>
                        </li>
                        <li>
                            <label for="action">A</label>
                            <textarea type="text" name="action" rows="3"></textarea>
                        </li>
                        <li>
                            <label for="result">R</label>
                            <textarea type="text" name="result" rows="3"></textarea>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default ModelForm;