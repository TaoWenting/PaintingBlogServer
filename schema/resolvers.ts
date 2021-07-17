import { DateTimeResolver, URLResolver } from 'graphql-scalars';
import { paintings,comments } from '../db';

const resolvers = {
  Date: DateTimeResolver,
  URL: URLResolver,

  Painting: {
    lastComment(comment: any) {
      return comments.find((m) => m.id === comment.lastComment);
    },
  },

  Query: {
    paintings() {
      return paintings;
    },
  },
};

export default resolvers;