export type Comment = {
  id: string;
  content: string;
 
};

export type Painting = {
  id: string;
  name: string;
  picture: string;
  comments: string[];
};

export const comments: Comment[] = [];
export const paintings: Painting[] = [];

export const resetDb = () => {
  comments.splice(
    0,
    Infinity,
    ...[
      {
        id: '1',
        content: 'You on your way?',
        
      },
      {
        id: '2',
        content: "Hey, it's me",

        
      },
      {
        id: '3',
        content: 'I should buy a boat',

        
      },
      {
        id: '4',
        content: 'This is wicked good ice cream.',
 
      },
    ]
  );

  paintings.splice(
    0,
    Infinity,
    ...[
      {
        id: '1',
        name: 'Flower1',
        picture: 'https://github.com/TaoWenting/painting_picture/blob/main/1.jpg?raw=true',
        comments: ['1'],
      },
      {
        id: '2',
        name: 'Flower2',
        picture: 'https://raw.githubusercontent.com/TaoWenting/painting_picture/06bed58e246803e952ed3308e007e0fafc82e727/2.jpg',
        comments: ['2'],
      },
      {
        id: '3',
        name: 'Flower3',
        picture: 'https://github.com/TaoWenting/painting_picture/blob/main/1.jpg?raw=true',
        comments: ['3'],
      },
      {
        id: '4',
        name: 'Flower4',
        picture: 'https://raw.githubusercontent.com/TaoWenting/painting_picture/06bed58e246803e952ed3308e007e0fafc82e727/2.jpg',
        comments: ['4'],
      },
    ]
  );
};

resetDb();