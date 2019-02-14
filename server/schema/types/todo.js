import {
    GraphQLObjectType,
    GraphQLString,
  } from 'graphql';
  
  const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
      id: {
        type: GraphQLString
      },
      description: {
        type: GraphQLString
      },
      detail: {
        type: GraphQLString
      }
    })
  });
  
  export default TodoType;