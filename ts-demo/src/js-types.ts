let j; // implicity any

console.log(typeof j);

j = 'hello';
console.log(typeof j);

j = 42;
console.log(typeof j);

const doIt1 = (msg: string) => {
  console.log(msg);
};

const nums = [1,2,3,4,5];
const newNums = [...nums, 6];
