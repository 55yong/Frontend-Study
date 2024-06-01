import React from "react";

const List = React.memo(
  ({ id, title, completed, todoData, setTodoData, provided, snapshot }) => {
    console.log("List is Rendering");

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
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
      >
        <div
          className={`${
            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
        >
          <div>
            <input
              type="checkbox"
              onChange={() => handleCompleteChange(id)}
              defaultChecked={completed}
            />
            <span
              className={
                completed ? "line-through px-2 text-lg" : "px-2 text-lg"
              }
            >
              {title}
            </span>
          </div>
          <div>
            <button
              className="px-4 py-2 float-right text-black border-black border rounded hover:text-white hover:border-red-500 hover:bg-red-500"
              onClick={() => handleClick(id)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default List;
