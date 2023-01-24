import { styled } from '@stitches/react';
import { motion, useIsomorphicLayoutEffect, useMotionValue } from 'framer-motion';
import React from 'react';
import tw from 'twin.macro';

import SnippetPreviewContainer from '/components/SnippetPreviewContainer';
import useResize from '/hooks/useResizeObserver';
import useMediaQuery from '/hooks/useMediaQuery';
import { Writeable } from '/types/utils';
import { breakpoints } from '/utils/breakpoints';

type Bounds = Writeable<Omit<DOMRect, 'toJSON' | 'x' | 'y'>>;

type Item = {
  id: string;
  rowIndex: number;
  colIndex: number;
  transformation: {
    x: number;
    y: number;
  };
  elementRef: React.RefObject<HTMLDivElement>;
};

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

const StyledItem = styled('div', {
  ...tw`relative rounded-md`,

  '.theme-dark &': tw`bg-white`,
  '.theme-light &': tw`bg-black`,

  variants: {
    orientation: {
      landscape: {
        ...tw`w-[70%]`,
        aspectRatio: '16 / 9',
      },
      portrait: {
        ...tw`h-[70%]`,
        aspectRatio: '3 / 4',
      },
    },
  },
  defaultVariants: {
    orientation: 'landscape',
  },
});

const InfiniteScrollGridWidget = () => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const itemsRef = React.useRef<Item[]>([]);
  const wrapperBoundsRef = React.useRef<Bounds>();

  // Dimension of the square space reserved for each item
  const [itemCellSize, setItemCellSize] = React.useState<number>();
  const [items, setItems] = React.useState<Item[]>([]);

  const dragYValue = useMotionValue(0);
  const dragXValue = useMotionValue(0);

  const matches = useMediaQuery(breakpoints['md']);

  const generateRandomItem = React.useCallback(
    (rowIndex: number, colIndex: number, transformation: { x: number; y: number }): Item => ({
      id: `${rowIndex}_${colIndex}`,
      rowIndex,
      colIndex,
      transformation,
      elementRef: React.createRef(),
    }),
    []
  );

  const isPointInsideBounds = React.useCallback(
    (point: { x: number; y: number }, bounds: Bounds) =>
      point.x >= bounds.left && point.x <= bounds.right && point.y >= bounds.top && point.y <= bounds.bottom,
    []
  );

  const getWrapperBounds = React.useCallback(() => {
    if (!wrapperRef.current) return;

    // Add bounds to different object to make it mutable, otherwise it would be readonly
    const { top, left, bottom, right, height, width } = wrapperRef.current.getBoundingClientRect();
    return {
      top: top,
      left: left,
      bottom: bottom,
      right: right,
      height: height,
      width: width,
    };
  }, []);

  const onUpdate = (dragTransformation: { x: number; y: number }) => {
    if (!itemCellSize) return;

    const wrapperBounds = wrapperBoundsRef.current;
    if (!wrapperBounds) return;

    const currentItems = [...itemsRef.current];

    const itemsToAdd: Item[] = [];
    const itemsToRemove: Item[] = [];

    // Define bounds of the safe area, outside this area items will be removed
    const safeAreaBounds = {
      top: wrapperBounds.top - itemCellSize,
      left: wrapperBounds.left - itemCellSize,
      right: wrapperBounds.right + itemCellSize,
      bottom: wrapperBounds.bottom + itemCellSize,
      width: wrapperBounds.width + itemCellSize,
      height: wrapperBounds.height + itemCellSize,
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
        x: itemBounds.left + itemCellSize / 2,
        y: itemBounds.top + itemCellSize / 2,
      };

      // Check if the item is inside the wrapper
      if (isPointInsideBounds(itemPosition, wrapperBounds)) {
        // For each visible point generate 8 new adjacent items
        NewItemsOffsets.forEach(({ row, col }) => {
          const generatedItem = generateRandomItem(
            // Calculate the new indexes of the item in the grid
            currentItem.rowIndex + row,
            currentItem.colIndex + col,
            // Calculate the new item transformation
            {
              x: currentItem.transformation.x + itemCellSize * row,
              y: currentItem.transformation.y + itemCellSize * col,
            }
          );

          itemsToAdd.push(generatedItem);
        });
      }
      // Check if the item is not inside the safe area
      else if (!isPointInsideBounds(itemPosition, safeAreaBounds)) {
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

  const setupGrid = React.useCallback(() => {
    // Wait for size to be defined before setting up the grid
    if (!itemCellSize) return;

    // Calculate wrapper bounds and set them in a ref to avoid recalculation on every drag movement
    const bounds = getWrapperBounds();
    wrapperBoundsRef.current = bounds;

    if (!bounds) return;

    // Calculate the number of rows and cols needed to fill the "screen"
    // Add 2 additional rows and cols to have a margin of elements while dragging
    const rows = Math.ceil(bounds.width / itemCellSize) + 2;
    const cols = Math.ceil(bounds.height / itemCellSize) + 2;

    // Calculate the offset needed to move the elements grid to the center relative to the wrapper
    const centerOffsetX = (rows * itemCellSize - bounds.width) / 2;
    const centerOffsetY = (cols * itemCellSize - bounds.height) / 2;

    // Generate grid of items
    const itemsArray: Item[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const transformation = {
          x: row * itemCellSize - centerOffsetX,
          y: col * itemCellSize - centerOffsetY,
        };

        itemsArray.push(generateRandomItem(row, col, transformation));
      }
    }

    // Stop and reset drag animation
    dragXValue.stop();
    dragYValue.stop();
    dragXValue.set(0);
    dragYValue.set(0);

    setItems(itemsArray);

    itemsRef.current = itemsArray;
  }, [dragXValue, dragYValue, generateRandomItem, getWrapperBounds, itemCellSize]);

  // Update cell size on media query changes
  React.useEffect(() => {
    if (matches === undefined) return;
    setItemCellSize(matches ? 350 : 200);
  }, [matches]);

  // Recalculate wrapper bounds on wrapper resize
  useResize(
    wrapperRef,
    () => {
      setupGrid();
    },
    [setupGrid],
    200
  );

  useIsomorphicLayoutEffect(() => {
    setupGrid();
  }, [setupGrid]);

  return (
    <SnippetPreviewContainer tw='isolate overflow-hidden'>
      <div tw='w-full h-full' ref={wrapperRef}>
        {items.length > 0 ? (
          <motion.div
            // Enter Animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            // Drag Animation
            drag
            dragTransition={{
              power: 0.05,
              timeConstant: 150,
            }}
            style={{
              x: dragXValue,
              y: dragYValue,
            }}
            onUpdate={onUpdate}
            tw='relative cursor-grab'
          >
            {items.map(({ id, colIndex, rowIndex, elementRef, transformation }) => {
              // Alternate orientation between rows and cols
              const orientation =
                (rowIndex % 2 === 0 && colIndex % 2 === 0) || (rowIndex % 2 !== 0 && colIndex % 2 !== 0)
                  ? 'landscape'
                  : 'portrait';

              return (
                <div
                  key={id}
                  tw='absolute flex justify-center items-center'
                  ref={elementRef}
                  style={{
                    transform: `translate(${transformation.x}px, ${transformation.y}px)`,
                    width: `${itemCellSize}px`,
                    height: `${itemCellSize}px`,
                  }}
                >
                  <StyledItem orientation={orientation} />
                </div>
              );
            })}
          </motion.div>
        ) : undefined}
      </div>
    </SnippetPreviewContainer>
  );
};

export default InfiniteScrollGridWidget;
