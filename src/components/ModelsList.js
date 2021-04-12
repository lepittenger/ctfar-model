import React from "react";
import ModelExcerpt from "./ModelExcerpt";

class ModelsList extends React.Component {
    render() {
        return (
            <div className="models-list">
                <h3>Models</h3>
                <ul>
                    {Object.keys(this.props.models).map(key => <ModelExcerpt key={key}details={this.props.models[key]} />)}
                </ul>
            </div>
        )
    }
}

export default ModelsList;