import { Operation } from "./ops";

export type HistoryEntry = {
  id: number;
  opName: Operation,
  opValue: number,
};

export const appendHistory = (
  history: HistoryEntry[],
  opName: Operation,
  opValue: number,
) => {

  history.push({
    id: Math.max(...history.map(h => h.id), 0) + 1,
    opName,
    opValue,
  });

}