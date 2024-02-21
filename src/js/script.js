const getObjFromJson = (jsonStr) => {
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    throw new Error('Invalid JSON string');
  }
};

const jsonEx1 = '{"name": "John", "age": 30}';
const jsonEx2 = '{"name": "John", "age":';
console.log(getObjFromJson(jsonEx1));
console.log(getObjFromJson(jsonEx2));
