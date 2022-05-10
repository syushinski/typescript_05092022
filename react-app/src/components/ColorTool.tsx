import { useCallback, useState } from 'react';

import { NewColor, Color } from '../models/colors';
import { ToolHeader } from './ToolHeader';
// import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';


export function ColorTool() {

  const [ colors, setColors ] = useState<Color[]>([]);

  const appendColor = useCallback((color: NewColor) => {
    setColors([
      ...colors,
      {
        ...color,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      },
    ]);
  }, [colors]);

  return (
    <>
      <ToolHeader headerText='Color Tool' />
      {/* <ColorList colors={colors}
                showHexcode={showHexcode}
                onSortAsc={sortColorsAsc}
                onSortDesc={sortColorsDesc}
                onToggleHexcode={toggleHexcode}
                onRemoveColor={removeColor} /> */}
      <ColorForm buttonText="Add Color"
        onSubmitColor={appendColor} />
    </>
  );

}