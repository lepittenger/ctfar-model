import logo from './logo.svg';
import './App.css';
import ModelsList from './components/ModelsList';
import ModelForm from './components/ModelForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The CTFAR Model</p>
      </header>
      <div className="models-wrap">
        <ModelsList />
        <ModelForm />
      </div>
    </div>
  );
}

export default App;
