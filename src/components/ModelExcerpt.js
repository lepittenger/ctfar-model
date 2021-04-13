import React from "react";

class ModelExcerpt extends React.Component {
    render() {
        return (
            <li>
                <h4><span className="date">4/12/21</span> {this.props.model.titleRef ? this.props.model.titleRef : 'Untitled'} <button className="deleteModel" onClick={() => this.props.deleteModel(this.props.index)}>&times;</button></h4>
            </li>
        )
    }
}

export default ModelExcerpt;