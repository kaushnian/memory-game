import { useEffect, useState } from 'react';
import Cell, { CellItem } from './Cell';

const initialCells: CellItem[] = [{ value: 0 }, { value: 0 }, { value: 1 }, { value: 1 }];

export default function GameBoard() {
  const [cells, setCells] = useState<CellItem[]>(initialCells);
  const [firstOpenIndex, setFirstOpenIndex] = useState<number>(-1);
  const [clickEnabled, setClickEnabled] = useState(true);

  // Check win
  useEffect(() => {
    if (cells.every(c => c.open))
      setTimeout(() => {
        alert('Win');
        setCells([...initialCells]);
      }, 100);
  }, [cells]);

  const handleClick = (index: number) => {
    if (!clickEnabled) return;

    // Do nothing if an open cell is clicked
    if (cells[index].open) return;

    // First cell is closed
    if (firstOpenIndex === -1) {
      setFirstOpenIndex(index);
    }
    // Both cells are open and values do match
    else if (cells[index].value === cells[firstOpenIndex].value) {
      setFirstOpenIndex(-1);
    }
    // Both cells are open and values don't match
    else {
      setClickEnabled(false);

      // Close both cells after 1 second
      setTimeout(() => {
        setClickEnabled(true);
        setFirstOpenIndex(-1);

        setCells(currentCells => {
          const newCells = clone(currentCells);
          newCells[index].open = false;
          newCells[firstOpenIndex].open = false;
          return newCells;
        });
      }, 1000);
    }

    // Open the clicked cell
    setCells(currentCells => {
      const newCells = clone(currentCells);
      newCells[index].open = true;
      return newCells;
    });
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: 2,
        width: 402,
      }}
    >
      {cells.map((cell, index) => (
        <Cell key={index} cell={cell} onClick={() => void handleClick(index)} />
      ))}
    </div>
  );
}

function clone<T>(array: T[]) {
  return array.map(item => ({ ...item }));
}
