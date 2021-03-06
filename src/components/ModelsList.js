import React from "react";
import ModelExcerpt from "./ModelExcerpt";

class ModelsList extends React.Component {
    render() {
        const modelsIds = Object.keys(this.props.models);
        const modelsCount = modelsIds.length;
        return (
            <div className="models-list">
                <h3>Models <span className="modelsCount">({modelsCount})</span> <button className="addNewModel">&#43;</button></h3>
                <ul>
                    {Object.keys(this.props.models).map(key => 
                        <ModelExcerpt 
                            key={key} 
                            index={key}
                            model={this.props.models[key]} 
                            deleteModel={this.props.deleteModel}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default ModelsList;