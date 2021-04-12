import React from "react";

class ModelExcerpt extends React.Component {
    render() {
        return (
            <li>
                <h4><span className="date">4/12/21</span> {this.props.details.titleRef}</h4>
            </li>
        )
    }
}

export default ModelExcerpt;