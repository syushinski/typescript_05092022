import { Color } from "../models/colors";

export type ColorListProps = {
  colors: Color[];
  showHexcode: boolean;
  onSortAsc: () => void;
  onSortDesc: () => void;
  onToggleHexcode: () => void;
  onRemoveColor: (colorId: number) => void;
}

export const ColorList = (props: ColorListProps) => {

  return (
    <>
      <div>
        <button onClick={props.onSortAsc}>
          Sort Asc</button>
        <button onClick={props.onSortDesc}>
          Sort Desc</button>
        <button onClick={props.onToggleHexcode}>
          Toggle Hexcode</button>
      </div>
      <ul>
        {props.colors.map(color =>
          <li key={color.id}>
            {color.name} -
            {props.showHexcode && color.hexcode}
            <button type="button" onClick={() =>
              props.onRemoveColor(color.id)}>X</button>
          </li>)}
      </ul>
    </>
  );

};
