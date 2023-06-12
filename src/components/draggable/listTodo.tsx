import React, { Fragment, useState } from 'react'

type Props = {
    listTodo?: any
}

const ListTodo = ({listTodo = []}: any) => {
  // const [listTodo1, setListTodo1] = useState(listTodo);
    console.log("con" , typeof listTodo);
  return (
    <>
    <div id="checklist">
                {listTodo && listTodo.map((item:any) => {
                  return (
                    <Fragment key={item.key}>
                      <input
                        value={item.key}
                        type="checkbox"
                        id={item.for}
                      />
                      <label htmlFor={item.for}>
                        <p className="max-w-sm truncate">{item.label}</p>
                      </label>
                    </Fragment>
                  );
                })}
              </div>
    </>
  )
}

export default ListTodo