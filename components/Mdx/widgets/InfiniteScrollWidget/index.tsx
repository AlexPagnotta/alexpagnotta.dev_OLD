import { motion, useIsomorphicLayoutEffect } from 'framer-motion';
import React from 'react';

import SnippetPreviewContainer from '/components/SnippetPreviewContainer';
import { Writeable } from '/types/utils';

type Bounds = Writeable<Pick<DOMRect, 'top' | 'left' | 'bottom' | 'right'>>;

type Item = {
  id: string;
  rowIndex: number;
  colIndex: number;
  imageUrl: string;
  orientation: 'portrait' | 'lanscape';
  transformation: {
    x: number;
    y: number;
  };
  elementRef: React.RefObject<HTMLDivElement>;
};

// Dimension of the square space rederved for each item
const ItemCellSize = 200;

// An array containing a row and col offset for each item
// this will be used to calculate the generated item position in the grid
const NewItemsOffsets = [
  { row: -1, col: 0 },
  { row: +1, col: 0 },
  { row: 0, col: -1 },
  { row: 0, col: +1 },
  { row: -1, col: -1 },
  { row: +1, col: +1 },
  { row: -1, col: +1 },
  { row: +1, col: -1 },
];

const InfiniteScrollWidget = () => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const itemsRef = React.useRef<Item[]>([]);

  const [items, setItems] = React.useState<Item[]>([]);
  const [wrapperBounds, setWrapperBounds] = React.useState<Bounds>();

  const generateRandomItem = (rowIndex: number, colIndex: number, transformation: { x: number; y: number }): Item => {
    return {
      id: `${rowIndex}_${colIndex}`,
      rowIndex,
      colIndex,
      imageUrl: '', // TODO Get random item from initial array
      orientation: 'portrait', // TODO Get random item from initial array
      transformation,
      elementRef: React.createRef(),
    };
  };

  const isPointInsideBounds = (point: { x: number; y: number }, bounds: Bounds) =>
    point.x >= bounds.left && point.x <= bounds.right && point.y >= bounds.top && point.y <= bounds.bottom;

  const onUpdate = (dragTransformation: { x: number; y: number }) => {
    if (!wrapperBounds) return;

    const currentItems = [...itemsRef.current];

    const itemsToAdd: Item[] = [];
    const itemsToRemove: Item[] = [];

    // Define bounds of the safe area, outside this area items will be removed
    const safeAreaBounds = {
      top: wrapperBounds.top - ItemCellSize,
      left: wrapperBounds.left - ItemCellSize,
      right: wrapperBounds.right + ItemCellSize,
      bottom: wrapperBounds.bottom + ItemCellSize,
    };

    currentItems.forEach((currentItem) => {
      // Calculate the absolute item top and left bounds by summing the item transformation relative to the wrapper,
      // the wrapper distance from top and left borders of the viewport, and the drag transformation
      const itemBounds = {
        top: currentItem.transformation.y + wrapperBounds.top + dragTransformation.y,
        left: currentItem.transformation.x + wrapperBounds.left + dragTransformation.x,
      };

      // Calculate the absolute position of the item with his origin at the center
      const itemPosition = {
        x: itemBounds.left + ItemCellSize / 2,
        y: itemBounds.top + ItemCellSize / 2,
      };

      // Check if the item is inside the wrapper
      if (isPointInsideBounds(itemPosition, wrapperBounds)) {
        // DEBUG
        // currentItem.elementRef.current?.style.setProperty('border', '8px solid green');

        // For each visible point generate 8 new adjacent items
        NewItemsOffsets.forEach(({ row, col }) => {
          const generatedItem = generateRandomItem(
            // Calculate the new indexes of the item in the grid
            currentItem.rowIndex + row,
            currentItem.colIndex + col,
            // Calculate the new item transformation
            {
              x: currentItem.transformation.x + ItemCellSize * row,
              y: currentItem.transformation.y + ItemCellSize * col,
            }
          );

          itemsToAdd.push(generatedItem);
        });
      }
      // Check if the item is not inside the safe area
      else if (!isPointInsideBounds(itemPosition, safeAreaBounds)) {
        // currentItem.elementRef.current?.style.setProperty('border', '8px solid red');
        itemsToRemove.push(currentItem);
      }

      let isEdited = false;

      // Add new items if they don't exist yet
      itemsToAdd.forEach((itemToAdd) => {
        if (currentItems.findIndex((currentItem) => currentItem.id === itemToAdd.id) === -1) {
          isEdited = true;
          currentItems.push(itemToAdd);
        }
      });

      // Remove items that are not needed anymore
      const updatedItems = currentItems.filter((currentItem) => {
        const itemToRemoveFound = itemsToRemove.findIndex((itemToRemove) => itemToRemove.id === currentItem.id) !== -1;

        if (itemToRemoveFound) isEdited = true;
        return !itemToRemoveFound;
      });

      if (isEdited) {
        setItems(updatedItems);
        itemsRef.current = updatedItems;
      }
    });
  };

  useIsomorphicLayoutEffect(() => {
    if (!wrapperRef.current) return;

    // Calculate wrapper bounds and set them in state to avoid recalculation on every drag movement
    const bounds = wrapperRef.current.getBoundingClientRect();
    setWrapperBounds({
      top: bounds.top,
      left: bounds.left,
      bottom: bounds.bottom,
      right: bounds.right,
    });

    // Calculate the number of rows and cols needed to fill the "screen"
    // Add 2 additional rows and cols to have a margin of elements while dragging
    const rows = Math.ceil(bounds.width / ItemCellSize) + 2;
    const cols = Math.ceil(bounds.height / ItemCellSize) + 2;

    // Calculate the offset needed to move the elements grid to the center relative to the wrapper
    const centerOffsetX = (rows * ItemCellSize - bounds.width) / 2;
    const centerOffsetY = (cols * ItemCellSize - bounds.height) / 2;

    // Generate grid of items
    const itemsArray: Item[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const transformation = {
          x: row * ItemCellSize - centerOffsetX,
          y: col * ItemCellSize - centerOffsetY,
        };

        itemsArray.push(generateRandomItem(row, col, transformation));
      }
    }

    setItems(itemsArray);

    itemsRef.current = itemsArray;
  }, []);

  return (
    <SnippetPreviewContainer>
      <div tw='w-full h-full' ref={wrapperRef}>
        <motion.div drag tw='relative' onUpdate={onUpdate}>
          {items.map((item) => (
            <div
              key={item.id}
              tw='absolute border-2 border-pink'
              ref={item.elementRef}
              style={{
                transform: `translate(${item.transformation.x}px, ${item.transformation.y}px)`,
                width: `${ItemCellSize}px`,
                height: `${ItemCellSize}px`,
              }}
            ></div>
          ))}
        </motion.div>
      </div>
    </SnippetPreviewContainer>
  );
};

export default InfiniteScrollWidget;
