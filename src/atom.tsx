import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: ICategory;
}

export type ICategory = "TO_DO" | "DOING" | "DONE";

export const categoryState = atom<ICategory>({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: selector({
    key: "toDo/default",
    get: () => {
      const savedToDos = localStorage.getItem("toDos");
      return savedToDos ? JSON.parse(savedToDos) : [];
    },
  }),
});

export const filterdTodos = selector({
  key: "filteredTodos",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

export const allTodosByCategory = selector({
  key: "allTodosByCategory",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const categories = ["TO_DO", "DOING", "DONE"];
    return categories.map((category) => ({
      category,
      todos: toDos.filter((toDo) => toDo.category === category),
    }));
  },
});
