
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoData from './Components/TodoData';

function App() {
  return (
    <>
    <h1 className='text-4xl text-center'>Todo App</h1>
    <AddTodo/>
    <TodoData/>
    </>
  );
}

export default App;
