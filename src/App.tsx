import TodoList from "./components/TodoList";
import ToDoSaver from "./components/TodoSaver";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoSaver />
      <TodoList />
    </>
  );
}

export default App;
