export enum Operations {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
  Clear = "clear",
  Exit = "exit",
  History = "history"
}

const operations = [
  'add',
  'subtract',
  'multiply',
  'divide',
  'clear',
  'exit',
  'history'
] as const;

export type Operation = typeof operations[number];

export function isOperation(op: any): op is Operation {
  return operations.includes(op);
}





