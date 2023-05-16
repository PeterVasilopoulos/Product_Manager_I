import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>

      <Routes>
        {/* Create Product Route */}
        <Route path="/" element={<p></p>}/>
      </Routes>
    </div>
  );
}

export default App;