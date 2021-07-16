

export const comments = [
  {
    id: '1',
    content: 'You on your way?',
    
  },
  {
    id: '2',
    content: "Hey, it's me",
    
  },
  
];

export const paintings = [
  {
    id: '1',
    name: 'Flower1',
    picture: '/imgs/1.jpg',
    lastComment: comments.find((m) => m.id === '1'),
  },
  {
    id: '2',
    name: 'Flower2',
    picture: '/imgs/2.jpg',
    lastComment: comments.find((m) => m.id === '2'),
  },
  
];