import { useRecoilValue } from "recoil";
import { allTodosByCategory } from "../atom";
import CreateToDo from "./CreateTodo";
import Todo from "./Todo";
import styled from "styled-components";

function TodoList() {
  const toDos = useRecoilValue(allTodosByCategory);
  // kanban todos

  return (
    <Container>
      <Title>To Dos</Title>
      <hr />
      <CreateToDo />
      <TodoListContainer>
        {toDos.map(({ category, todos }) => (
          <TodoListItem key={category}>
            <h2>{category}</h2>
            {todos.length === 0 ? null : todos.map((todo) => <Todo key={todo.id} {...todo} />)}
          </TodoListItem>
        ))}
      </TodoListContainer>
    </Container>
  );
}

export default TodoList;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
`;

const Title = styled.h1`
  text-align: center;
  color: #343a40;
  font-size: 2rem;
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const TodoListItem = styled.div`
    flex: 1;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0,  0.1);
    h2 {
      color: #495057;
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    li {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
      border-bottom: 1px solid #dee2e6;
      &:last-child {
       border-bottom: none;
     }
      span {
        flex: 1;
        color: #212529;
        font-size: 1rem;
      }
    }
  }
`;
