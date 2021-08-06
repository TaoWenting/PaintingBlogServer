import { URLResolver } from 'graphql-scalars';
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
    Mutation: {
      addComment(root: any, { paintingId, content }: any) {
        const paintingIndex = paintings.findIndex(c => c.id === paintingId);
  
        if (paintingIndex === -1) return null;
  
        const painting = paintings[paintingIndex];
  
        const commentIds = comments.map(currentComment => Number(currentComment.id));
        const commentId = String(Math.max(...commentIds) + 1);
        const comment = {
          id: commentId,
          
          content,
        };
  
        comments.push(comment);
        painting.comments.push(commentId);
        // The chat will appear at the top of the ChatsList component
        paintings.splice(paintingIndex, 1);
        paintings.unshift(painting);
  
        return comment;
      },
    },
};

export default resolvers;