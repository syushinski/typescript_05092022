import _ from 'lodash';

const nums = [1,2,3,4,5];

const doubleNums = _.map(nums, (x) => x * 2);

console.log(nums);
console.log(doubleNums);