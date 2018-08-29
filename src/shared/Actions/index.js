import * as types from '../constant/index';
import axios from 'axios';

export const fetchData = () => {
    return (dispatch) => {
        return axios.get("http://5b84ef64db24a100142dce76.mockapi.io/todos")
            .then(res =>  dispatch(listAll(res.data)) )
            .catch(err => err)
    }
}

export const listAll = (todos) => {
    return {
        type: types.ALL,
        todos: todos
    }
}