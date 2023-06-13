import React, { memo, useState } from "react";
import { Plus } from "../icons-svg";
import "./styleAddTodo.css";


const AddTodo = memo(({ setvalueInput, valueInput }: any) => {
  const [value, setvalue] = useState<string>('');
  const [count, setCount] = useState<number>(1);
  const handleAdd = () => {
    if (value === undefined || value ==='' ) {
      return;
    }

    const newItem = {
      key: String(count),
      for: String(count).padStart(2, "0"),
      label: value,
      isCheck: false
    };
    setCount(count + 1);
    setvalueInput([...valueInput, { ...newItem }]);
    setvalue('')
  };

  const handleChange = (e: any) => {
    if (e.target.value === undefined) {
      return null;
    }
    setvalue(e.target.value);
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }
  return (
    <>
      <div className="input-wrapper z-10 mt-2">
        <button className="icon hover:opacity-50" onClick={handleAdd}>
          <Plus />
        </button>
        <input
          onKeyDown={handleEnter}
          onChange={handleChange}
          placeholder="Thêm mới.."
          className="input"
          name="text"
          type="text"
          value={value}
        />
      </div>
    </>
  );
});
AddTodo.displayName = 'AddTodo'
export default AddTodo;
