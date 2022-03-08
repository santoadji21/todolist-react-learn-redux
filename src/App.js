import "./App.scss";
import AddTodos from "./components/AddTodos";
import Todos from "./containers/Todos/index.js";
import FilterLink from "./containers/FilterLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <AddTodos />
          
          <div className="filter">
            <h2>Filter :</h2>
            <FilterLink />
          </div>
          <Todos />
        </div>
      </header>
    </div>
  );
}

export default App;
