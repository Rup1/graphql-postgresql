import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLSchema,
} from 'graphql';
import TodoType from './types/todo';
import Mutation from './mutations/index';
import TodoController from '../controllers/TodoController';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getTodos: {
            type: new GraphQLList(TodoType),
            resolve() {
                return TodoController.fetchTodos();
            }
        },
    }
});

const graphqlSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

export default graphqlSchema;