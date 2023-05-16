import {Routes, Route, Link} from 'react-router-dom';
import './App.css';

// Route imports
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>

      <Routes>
        {/* Create Product Route */}
        <Route path="/" element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;