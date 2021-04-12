import React from "react";

class Model extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Model;