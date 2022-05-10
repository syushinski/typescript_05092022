import { useState, ChangeEvent } from 'react';

export type AnyFormControl =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export type AnyChangeEvent = ChangeEvent<AnyFormControl>;

export enum InputTypes {
  Number = "number",
  Checkbox = "checkbox"
}

export function isInputElement(element: any): element is HTMLInputElement {
  return element instanceof HTMLInputElement;
}

export type ChangeEventHandler = (e: AnyChangeEvent) => void;

export type ResetForm = () => void;

export type UseForm = <T>(initialForm: T) => [
  T, ChangeEventHandler, ResetForm
];

export const useForm: UseForm = <T>(initialForm: T) => {

    const [ form, setForm ] = useState(initialForm);

    const change: ChangeEventHandler = e => {
        let value: string | number | boolean;
        if (isInputElement(e.target)) {
          switch (e.target.type?.toLowerCase()) {
            case InputTypes.Number:
              value = e.target.valueAsNumber;
              break;
            case InputTypes.Checkbox:
              value = e.target.checked;
              break;
            default:
              value = e.target.value;
              break;
          }
        } else {
          value = e.target.value;
        }
        const newForm = {
          ...form,
          [e.target.name]: value,
        } as T;
        setForm(newForm);
    };

    const resetForm: ResetForm = () => setForm(initialForm);

    return [ form, change, resetForm ];
};
