import React, { useState } from "react";
import "./style.css";
import ButtonCustom from "../button-custom";
import { Remove } from "../icons-svg";
import MyTooltip from "../tooltip";
import AddTodo from "./addTodo";
import ListTodo from "./listTodo";
import DragCustom from "../dragableCustom";
type Props = {};
interface Item {
  key: string;
  for: string;
  label: string;
  isCheck: boolean;
}
const DraggableTodo = (props: Props) => {
  const [valueInput, setvalueInput] = useState<Item[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const handleRemoveTodo = () => {
    setvalueInput((prevItems) => prevItems.filter((item) => !item.isCheck));
  };
  const pos = { x: 150, y: 0 };
  return (
    <>
      <DragCustom defaultPosition={pos} className="w-96">
        <h1 className="logoTodo font-extrabold border-b-2 text-center select-none">
          <b>
            <span>T</span>o<span>do</span> <span>L</span>i<span>st</span>
          </b>
        </h1>
        <div className="todo-list max-h-96 overflow-auto m-2 ">
          <ListTodo
            setIsChecked={setIsChecked}
            setvalueInput={setvalueInput}
            isChecked={isChecked}
            listTodo={valueInput}
          />
        </div>
        <div className="action border-t-2 flex justify-between">
          <AddTodo valueInput={valueInput} setvalueInput={setvalueInput} />
          {valueInput.length !== 0 ? (
            <MyTooltip text="Xóa">
              <ButtonCustom
                onClick={handleRemoveTodo}
                className="px-2 m-1 hover:opacity-50 mt-2"
              >
                <Remove />
              </ButtonCustom>
            </MyTooltip>
          ) : null}
        </div>
      </DragCustom>
    </>
  );
};

export default DraggableTodo;
