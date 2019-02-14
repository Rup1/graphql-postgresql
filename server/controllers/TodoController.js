import shortid from 'shortid';
import models from '../models'

class TodoController {
    static async createTodo (args) {
        const { id, description, detail } = args;

        const addTodo = await models.Todo.create({
            id: shortid.generate(),
            description,
            detail
        });

        return addTodo;
    }

    static async fetchTodos () {
        const todoList = await models.Todo.findAll();

        return todoList;
    }
}

export default TodoController;
