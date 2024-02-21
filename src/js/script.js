const product1 = {
  name: 'broom',
  price: 100,
};
const salePrice = (product) => ({
  ...product,
  price: product.price * 0.9,
});

console.log(salePrice(product1));

const studentsArray = [
  { name: 'Anna', grade: 85 },
  { name: 'Bob', grade: 91 },
  { name: 'Carl', grade: 75 },
  { name: 'Jenny', grade: 95 },
];
const getBestStudents = (students) =>
  students.filter((student) => student.grade > 90);

console.log(getBestStudents(studentsArray));
