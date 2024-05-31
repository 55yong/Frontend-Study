import React from "react";

export default function List({ todoData, setTodoData }) {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("newTodoData", newTodoData);
    setTodoData(newTodoData);
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div>
              <input
                type="checkbox"
                onChange={() => handleCompleteChange(data.id)}
                defaultChecked={data.completed}
              />
              <span
                className={
                  data.completed ? "line-through px-2 text-lg" : "px-2 text-lg"
                }
              >
                {data.title}
              </span>
            </div>
            <div>
              <button
                className="px-4 py-2 float-right text-black border-black border rounded hover:text-white hover:border-red-500 hover:bg-red-500"
                onClick={() => handleClick(data.id)}
              >
                x
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
