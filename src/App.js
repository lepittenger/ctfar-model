import logo from './logo.svg';
import './App.css';
import Model from './components/Model';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The CTFAR Model</p>
      </header>
      <div className="models-wrap">
        <div className="models-list">
          <h3>Models</h3>
          <ul>
            <li><h4><span className="date">4/12/21</span> My mother said "lorem ipsum dolor"</h4></li>
            <li><h4><span className="date">4/12/21</span> My mother said "lorem ipsum dolor"</h4></li>
            <li><h4><span className="date">4/12/21</span> My mother said "lorem ipsum dolor"</h4></li>
            <li><h4><span className="date">4/12/21</span> My mother said "lorem ipsum dolor"</h4></li>
            <li><h4><span className="date">4/12/21</span> My mother said "lorem ipsum dolor"</h4></li>
            <li><h4><span className="date">4/12/21</span> My mother said "lorem ipsum dolor"</h4></li>
            <li><h4><span className="date">4/12/21</span> My mother said "lorem ipsum dolor"</h4></li>
            <li><h4><span className="date">4/12/21</span> My mother said "lorem ipsum dolor"</h4></li>
          </ul>
        </div>
        <div class="model-form-wrap">
          <Model />
        </div>
      </div>
    </div>
  );
}

export default App;
