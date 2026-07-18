interface Cat {
  meow(): void;
  purr(): void;
}

interface Dog {
  bark(): void;
  fetch(): void;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

function isDog(animal: Cat | Dog): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function makeSound(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.meow(); // TypeScript 知道这是 Cat
  } else {
    animal.bark(); // TypeScript 知道这是 Dog
  }
}