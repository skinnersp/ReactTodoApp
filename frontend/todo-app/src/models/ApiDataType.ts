import {ITodo} from './ITodo';

export type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
}