import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Todos from './components/Todos'
import Todo from './components/Todo'
import Edit from './components/EditTodo'
function App() {
  
  return (
    <div className="App">
      <header className='App-header'>
        <h1>
          ToDo List
        </h1>
        <Router>
          <Routes>
            <Route path='/' element={<Todos/>} />
            <Route path='/:id' element={<Todo/>} />
            <Route path='/:id/edit' element={<Edit/>} />
         </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
