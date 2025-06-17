import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, categoryState } from "../atom";
import CreateToDo from "./CreateTodo";
import Todo from "./Todo";
import styled from "styled-components";

function TodoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <Container>
      <Title>To Dos</Title>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <Todo key={toDo.id} {...toDo} />
      ))}
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
