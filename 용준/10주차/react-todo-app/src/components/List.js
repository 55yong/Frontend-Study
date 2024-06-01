import React, { useState } from "react";

const List = React.memo(
  ({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    console.log("List is Rendering");

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleCompleteChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };

    const handleEditChange = (e) => {
      setEditedTitle(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div>
          <div
            className={
              "bg-gray-100 flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded"
            }
          >
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  value={editedTitle}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                />
              </form>
            </div>
            <div>
              <button
                className="px-4 py-2 float-right text-black border-black border rounded hover:text-white hover:border-red-500 hover:bg-red-500"
                onClick={() => setIsEditing(false)}
              >
                x
              </button>
              <button
                className="px-4 py-2 float-right text-black border-black border rounded hover:text-white hover:border-red-500 hover:bg-red-500"
                type="submit"
                onClick={handleSubmit}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      );
    } else {
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
              <button
                className="px-4 py-2 float-right text-black border-black border rounded hover:text-white hover:border-red-500 hover:bg-red-500"
                onClick={() => setIsEditing(true)}
              >
                EDIT
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
);

export default List;
