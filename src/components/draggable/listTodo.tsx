import React, { Fragment, useState } from "react";

type Props = {
  listTodo?: any;
};

const ListTodo = ({ listTodo = [], setvalueInput }: any) => {
  const handleCheckboxChange = (itemId: any) => {
    setvalueInput((prevItems: any) =>
      prevItems.map((item: any) =>
        item.key === itemId ? { ...item, isCheck: !item.isCheck } : item
      )
    );
  };

  return (
    <>
      <div id="checklist">
        {listTodo &&
          listTodo.map((item: any) => {
            return (
              <Fragment key={item.key}>
                <input
                  value={item.key}
                  type="checkbox"
                  id={item.for}
                  onChange={() => handleCheckboxChange(item.key)}
                />
                <label htmlFor={item.for}>
                  <p className="max-w-sm truncate">{item.label}</p>
                </label>
              </Fragment>
            );
          })}
      </div>
    </>
  );
};

export default ListTodo;
