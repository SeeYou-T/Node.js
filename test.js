let data = {
  name: "",
  value: "",
  age: 12,
};
Object.keys(data).map((item) => {
  if (data[item] === "") {
    delete data[item];
  }
});

console.log(data);
