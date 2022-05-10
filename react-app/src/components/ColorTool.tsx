import { useCallback, useState } from 'react';

import { Color } from '../models/colors';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';
import { useSortedList, SortDir } from '../hooks/useSortedList';

export const createColorsCompareFn = (sortDir: SortDir) => {
  return (a: Color, b: Color) => {
    if (a.name < b.name) {
      return sortDir === 'asc' ? 1 : -1;
    } else if (a.name > b.name) {
      return sortDir === 'desc' ? -1 : 1;
    } else {
      return 0;
    }
  }
};


export function ColorTool() {

  const [ showHexcode, setShowHexcode ] = useState(false);
  const [
    colors,,
    appendColor,,
    removeColor,
    sortColorsAsc,
    sortColorsDesc,
  ] = useSortedList<Color>(createColorsCompareFn, []);

  const toggleHexcode = useCallback(() => {
    setShowHexcode(!showHexcode);
  }, [showHexcode])

  return (
    <>
      <ToolHeader headerText='Color Tool' />
      <ColorList colors={colors}
                showHexcode={showHexcode}
                onSortAsc={sortColorsAsc}
                onSortDesc={sortColorsDesc}
                onToggleHexcode={toggleHexcode}
                onRemoveColor={removeColor} />
      <ColorForm buttonText="Add Color"
        onSubmitColor={appendColor} />
    </>
  );

}