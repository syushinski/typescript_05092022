export const Operations = {
  Add: "add",
  Subtract: "subtract",
  Multiply: "multiply",
  Divide: "divide",
  Clear: "clear",
  Exit: "exit",
  History: "history"
} as const;

type OperationNames = keyof typeof Operations;

export type Operation = typeof Operations[OperationNames];

export function isOperation(op: any): op is Operation {
  return Object.values(Operations).includes(op);
}





