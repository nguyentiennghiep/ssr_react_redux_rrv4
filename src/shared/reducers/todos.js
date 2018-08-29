import * as types from "../constant/index";
const ini = {

    todos: [
        {
            id: "1",
            name: "todo"
        },
        {
            id: "2",
            name: "todo_2"
        }
    ]
};

const todoRedu = (state = ini, action) => {
    switch (action.type) {
        case types.ALL :{
            return action.todos;
        }
        default: return { ...state };
    }
}

export default todoRedu;