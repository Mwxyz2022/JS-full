// ({ obj }, ['id', 'id']);
// output: {new obj}

//    1. "экспортируемая ф-я"
//      * Инициализируем ключ/значение для Эл. с проверкой Id
//      * Вернем новый obj
//        ** добавим ключ значение для эл.
//        ** для каждого эл вложености применим эту же фу-ю

const favorites = ['id-12', 'id-25', 'id-125', 'id-34'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-6',
          name: 'Drinks',
          nodes: [
            {
              id: 'id-25',
              name: 'Green-tea',
              nodes: [],
            },
          ],
        },
        {
          id: 'id-14',
          name: 'Fruit',
          nodes: [
            {
              id: 'id-125',
              name: 'Apple',
              nodes: [],
            },
            {
              id: 'id-215',
              name: 'Pineapple',
              nodes: [],
            },
          ],
        },
      ],
    },
    {
      id: 'id-12',
      name: 'Vehicles',
      nodes: [
        {
          id: 'id-34',
          name: 'BMW',
          nodes: [],
        },
      ],
    },
  ],
};

// code
export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};

const result = markFavorites(tree, favorites);
// dataset
console.log(result);
