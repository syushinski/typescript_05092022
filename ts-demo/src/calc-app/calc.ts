import readline from 'node:readline';
import { isOperation, Operations } from "./ops";
import { HistoryEntry, appendHistory } from './history';

let result = 0;
const history: HistoryEntry[] = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Calc > '
});

rl.prompt();

rl.on('line', (line: string) => {

  const [ opName, rawOpValue ] = line.trim().split(' ');

  const opValue = parseFloat(rawOpValue);

  if (!isOperation(opName)) {
    console.log(`The request operation ${opName} is not valid.`)
    rl.prompt();
    return;
  }

  switch (opName) {
    case Operations.Add:
      appendHistory(history, opName, opValue);
      result += opValue;
      console.log(result);
      break;
    case Operations.Subtract:
      appendHistory(history, opName, opValue);
      result -= opValue;
      console.log(result);
      break;
    case Operations.Multiply:
      appendHistory(history, opName, opValue);
      result *= opValue;
      console.log(result);
      break;
    case Operations.Divide:
      appendHistory(history, opName, opValue);
      result /= opValue;
      console.log(result);
      break;
    case Operations.Clear:
      result = 0;
      history.splice(0, history.length);
      break;
    case Operations.Exit:
      rl.close();
      return;
    case Operations.History:
      console.log(history);
      break;
    default:
      throw new Error("should never get here");
      // console.log(`The request operation ${opName} is not valid.`);
      // break;
  }

  rl.prompt();

}).on('close', () => {

  process.exit(0);

});