import React, { useState } from "react";
import { Plus } from "../icons-svg";
import './styleAddTodo.css'
import ButtonCustom from "../button-custom";
import MyTooltip from "../tooltip";
type Props = {
};

const AddTodo = ({setvalueInput,valueInput }: any) => {
  // const [valueInput, setvalueInput] = useState<any>([]);
  console.log("a");
  
  const [value, setvalue] = useState<any>();
  const [count, setCount] = useState<number>(1);
    const handleAdd = () => {
      if (value === undefined) {
            return;
          }
          const newItem = {
            key: String(count),
            for: String(count).padStart(2, "0"),
            label: value,
          };
      setCount(count + 1)
      setvalueInput([...valueInput,{...newItem}])
    };
  
    const handleChange = (e: any) => {
      if (e.target.value === undefined) {
        return null
      }
      setvalue(e.target.value)
    };
    
  return (
    <>
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
    </>
  );
};

export default AddTodo;
