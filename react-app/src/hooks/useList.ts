import { useState, useCallback } from "react";

import { Item } from "../models/item";

export const useList = <T extends Item>(initialItems: T[]) => {

    const [ items, setItems ] = useState(initialItems);

    const addItem = useCallback((item: Omit<T, "id">) => {
        setItems([
            ...items,
            {
                ...item,
                id: Math.max(...items.map(c => c.id), 0) + 1,
            } as T
        ]);
    }, [items]);

    const saveItem = useCallback((item: T) => {
        const newItems = [...items];
        const itemIndex = newItems.findIndex(c => c.id === item.id);
        newItems[itemIndex] = item;
        setItems(newItems);
    }, [items]);

    const deleteItem = useCallback((itemId: number) => {
        setItems(items.filter(c => c.id !== itemId));
    }, [items]);

    return [ items, addItem, saveItem, deleteItem ] as
      [ typeof items, typeof addItem, typeof saveItem, typeof deleteItem ];
};