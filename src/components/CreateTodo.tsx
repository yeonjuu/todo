import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom";
import styled from "styled-components";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category: "TO_DO" }, ...oldToDos]);
    setValue("toDo", "");
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </Container>
  );
}

export default CreateToDo;

const Container = styled.div`
  padding: 10px;
`;
