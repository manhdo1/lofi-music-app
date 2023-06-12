import React, { useState } from "react";
import { Plus } from "../icons-svg";
import './styleAddTodo.css'
import ButtonCustom from "../button-custom";
import MyTooltip from "../tooltip";
type Props = {
    handleAdd:React.ReactNode
};

const AddTodo = ({handleValueChange }: any) => {
    const [valueinput, setValueinput] = useState<string>()
    const handleAdd =() => {
        handleValueChange(valueinput)
        
    }
    
    const handleChange =(e:any) => {
        console.log(e.target.value);
        setValueinput(e.target.value)
    }
    
  return (
    <>
      <div className="input-wrapper mt-2">
        <ButtonCustom className="icon hover:opacity-50" onClick={handleAdd}>
          <Plus />
        </ButtonCustom>
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
