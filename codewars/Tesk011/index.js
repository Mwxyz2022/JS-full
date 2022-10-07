// Make a program that filters a list of strings and returns
// a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be
// sure that it has to be a friend of yours! Otherwise,
//   you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends) {
  const resArr = [];
  for (let i = 0; i < friends.length; i += 1) {
    if (friends[i].length === 4) {
      resArr.push(friends[i]);
    }
  }
  return resArr;
}
console.log(friend(['Ryan', 'Kieran', 'Mark']));

['Ryan', 'Kieran', 'Mark'];
