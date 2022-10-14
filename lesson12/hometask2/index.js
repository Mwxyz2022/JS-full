const cleanTransactionsList = arr => {
  return arr.reduce((acc, trans) => {
    const element = Number(trans);
    console.log(element);
    if (element) {
      const newString = `$${element.toFixed(2)}`;
      return [...acc, newString];
    }

    return [...acc];
  }, []);
};

console.log(cleanTransactionsList(['213.2', '542fd', 12, '34 money', '1 dollar']));
