

type Car = {
  id: number,
  make: string,
  model: string,
  year: number,
  color: string,
  price: number,
};

type CarKeys = keyof Car;

type NewCar = Omit<Car, "id">;


const car: Car = {
  id: 1,
  make: 'Ford',
  model: 'T',
  year: 1924,
  color: 'black',
  price: 400,
};

const propName = "ma" + "ke" as CarKeys;

const somePropInCar = car[propName];

const doIt = (makePropName: Car["make"]) => {

};


console.log(car.id + car.make);


let nextId: number;

// if (car.id) {
  nextId = car.id + 1;
// }

const newCar: NewCar = {
  make: 'Ford',
  model: 'T',
  year: 1924,
  color: 'black',
  price: 400,
};


