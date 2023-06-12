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

// {
//   key: "1",
//   for: "01",
//   label: "Điều thứ nhất",
// },
// {
//   key: "2",
//   for: "02",
//   label: "Điều thứ nhất",
// },
// {
//   key: "3",
//   for: "03",
//   label: "Điều thứ nhất",
// },

const DraggableTodo = (props: Props) => {
  const [valueInput, setvalueInput] = useState<any>();
  let count = 1;
  // const handleValueChange = (value: any) => {
  //   console.log("ád");
  //   if (value === "") {
  //     return;
  //   }
  //   const newItem = {
  //     key: String(count),
  //     for: String(count).padStart(2, "0"),
  //     label: value,
  //   };
  //   count++;
  //   Todolist.push(newItem);
  // };
  const handleAdd = () => {
    console.log(valueInput);
    const test = [{key:1,for:'01',label:valueInput}]
    setvalueInput([...test])
  };

  const handleChange = (e: any) => {
    setvalueInput(e.target.value)
  };
  console.log(valueInput);
  
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
              <ListTodo listTodo={valueInput} />
            </div>

            <div className="action border-t-2 flex justify-between">
              <div className="input-wrapper mt-2">
                <button
                  className="icon hover:opacity-50"
                  onClick={handleAdd}
                >
                  <Plus />
                </button>
                <input
                  onChange={handleChange}
                  placeholder="Thêm mới.."
                  className="input"
                  name="text"
                  type="text"
                />
              </div>
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
