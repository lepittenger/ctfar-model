import './App.css';
import ModelsList from './components/ModelsList';
import AddModelForm from './components/AddModelForm';
import React from 'react';
import base from './base';

class App extends React.Component {
  state = {
    models: {}
  };
  componentDidMount() {
    this.ref = base.syncState(`${this.props.match.params.userId}/models`, {
      context: this,
      state: 'models'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  addModel = (model) => {
    // 1. take a copy of the existing state bc you don't want to reach into state and modify it directly
    const models = {...this.state.models}
    // 2. add new model to models variable
    models[`model${Date.now()}`] = model;
    // 3. set the new models object to state
    this.setState({
      models: models
    });
  };
  deleteModel = (key) => {
    // 1. take a copy of state
    const models = { ...this.state.models };
    console.log(models[key]);
    // 2. update the state
    models[key] = null;
    // 3.  update state
    this.setState({ models });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>The CTFAR Model</p>
        </header>
        <div className="models-wrap">
          <ModelsList 
            models={this.state.models}
            deleteModel={this.deleteModel}
          />
          <AddModelForm 
            addModel={this.addModel} 
          />
        </div>
      </div>
    )
  }
}

export default App;
