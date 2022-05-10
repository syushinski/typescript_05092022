import { useCallback, useState } from "react";
import { Item } from "../models/item";
import { useList } from "./useList";

export type SortDir = 'asc' | 'desc';

export type CompareFn<R> = (a: R, b: R) => number;

const sortItems = <S extends Item>(
  items: S[],
  compareFn: CompareFn<S>,
) => {
  return [...items].sort(compareFn);
};

export const useSortedList = <T extends Item>(
  createCompareFn: (sortDir: SortDir) => CompareFn<T>,
  initialItems: T[] = []) => {

  const [
    items, appendItem,
    replaceItem, removeItem,
  ] = useList(initialItems);

  const [sortDir, setSortDir] = useState<SortDir>('asc');


  const sortAsc = useCallback(() => setSortDir('asc'), []);

  const sortDesc = useCallback(() => setSortDir('desc'), []);

  return [
    sortItems<T>(items, createCompareFn(sortDir)),
    sortDir,
    appendItem,
    replaceItem,
    removeItem,
    sortAsc,
    sortDesc,
  ] as [
    T[], SortDir,
    typeof appendItem, typeof replaceItem, typeof removeItem,
    () => void, () => void
  ];

}