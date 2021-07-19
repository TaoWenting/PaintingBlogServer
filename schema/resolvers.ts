import { DateTimeResolver, URLResolver } from 'graphql-scalars';
import { paintings,comments } from '../db';

const resolvers = {
  
  URL: URLResolver,

  Painting: {

    comments(painting: any) {
      return comments.filter((m) => painting.comments.includes(m.id));
    },

    lastComment(painting: any) {

      const lastComment = painting.comments[painting.comments.length - 1];

      return comments.find((m) => m.id === lastComment);
    },
  },
  

    Query: {
      paintings() {
        return paintings;
      },
      painting(root: any, { paintingId }: any) {
        return paintings.find(c => c.id === paintingId);
      },
      

    },
};

export default resolvers;