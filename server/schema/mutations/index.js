import {
    GraphQLObjectType,
    GraphQLString,
  } from 'graphql';
  import TodoType from '../types/todo';
import TodoController from '../../controllers/TodoController';

  const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      addTodo: {
        type: TodoType,
        args: {
          description: {
            type: GraphQLString
          },
          detail: {
              type: GraphQLString
          }
        },
        resolve(parent, args) {
           const addTodo = TodoController.createTodo(args);
           return addTodo;
        }
      },
    }
  });
  
  export default Mutation;