import './App.css';
import ModelsList from './components/ModelsList';
import ModelForm from './components/ModelForm';
import React from 'react';

class App extends React.Component {
  state = {
    models: {}
  };
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>The CTFAR Model</p>
        </header>
        <div className="models-wrap">
          <ModelsList models={this.state.models} />
          <ModelForm addModel={this.addModel} />
        </div>
      </div>
    )
  }
}

export default App;
