declare module 'lodash' {

  export type TransformFn<M,N> = (item: M, index: number, items: Array<M>) => N;

  export function map<T,S>(
    items: Array<T>,
    transformFn: TransformFn<T,S>,
  ): Array<S>;

}