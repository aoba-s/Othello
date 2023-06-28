import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turn, setTurn] = useState<number>(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const onclick = (x: number, y: number) => {
    const newBoard = [...board];
    newBoard[y][x] = turn;
    setTurn(3 - turn);
    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div
              className={styles.cell}
              key={`${x}-${y}`}
              onClick={() => {
                onclick(x, y);
              }}
            >
              <div
                className={styles.stone}
                style={{
                  backgroundColor:
                    color === 1 ? '#000000' : color === 2 ? '#FFFFFF' : 'transparent',
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
