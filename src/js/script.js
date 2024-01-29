const composeCreateUser = function () {
  const greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };

  return function (name, age) {
    return {
      name,
      age,
      greet,
    };
  };
};

const createUser = composeCreateUser();

const user = createUser('Anna', '24');
console.log(user);
user.greet();
