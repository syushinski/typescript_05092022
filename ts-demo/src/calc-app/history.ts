import { Operations } from "./ops";

export type HistoryEntry = {
  id: number;
  opName: Operations,
  opValue: number,
};

export const appendHistory = (
  history: HistoryEntry[],
  opName: Operations,
  opValue: number,
) => {

  history.push({
    id: Math.max(...history.map(h => h.id), 0) + 1,
    opName,
    opValue,
  });

}