import {Routes, Route, Link} from 'react-router-dom';
import './App.css';

// Route imports
import Create from "./components/Create";
import ListProducts from './components/ListProducts';
import Details from './components/Details';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Create Product Route */}
        <Route path="/" element={
          <div>
            <Create/>
            <ListProducts/>
          </div>
        }/>

        {/* Product Details Route */}
        <Route path="/:id" element={
          <Details/>
        }/>

        {/* Edit Product Route */}
        <Route path='/:id/edit' element={
          <Edit/>
        }/>
      </Routes>
    </div>
  );
}

export default App;