const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    case "DELETE_TODO":
      return;
    default:
      return state;
  }
};

export default todos;
