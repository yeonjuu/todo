import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atom";

function ToDoSaver() {
  const toDos = useRecoilValue(toDoState);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return null;
}

export default ToDoSaver;
