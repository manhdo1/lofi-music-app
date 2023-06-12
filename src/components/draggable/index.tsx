import React, { Fragment, useState } from "react";
import "./style.css";
import Draggable from "react-draggable";
import Lock from "../lock";
import ButtonCustom from "../button-custom";
import { Plus, Remove } from "../icons-svg";
import MyTooltip from "../tooltip";
import AddTodo from "./addTodo";
import ListTodo from "./listTodo";
type Props = {};
interface Item {
  key: string,
  for: string,
  label: string,
}
const DraggableTodo = (props: Props) => {
  const [valueInput, setvalueInput] = useState<Item[]>([]);
  return (
    <>
      <Draggable defaultPosition={{ x: 150, y: 0 }}>
        <div className="transparent-background  rounded-lg w-96 ">
          <div className="content">
            {/* <div>
                <Lock/>
            </div> */}
            <h1 className=" title-color font-extrabold border-b-2 text-center  text-black">
              TODO LIST
            </h1>
            <div className="todo-list  max-h-96 overflow-auto m-2 ">
              <ListTodo  listTodo={valueInput} />
            </div>
            <div className="action border-t-2 flex justify-between">
              <AddTodo valueInput={valueInput} setvalueInput= {setvalueInput}/>
              <MyTooltip text="Xóa">
                <ButtonCustom className="px-2 m-1 hover:opacity-50 mt-2">
                  <Remove />
                </ButtonCustom>
              </MyTooltip>
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
};

export default DraggableTodo;
