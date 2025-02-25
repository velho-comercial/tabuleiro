import styles from './styles/Board.module.css';

export default function Home() {
  const boardSize = 8;
  const squares = [];

  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const isBlack = (row + col) % 2 === 0;
      const piece = getPiece(row, col);

      squares.push(
        <div
          key={`${row}-${col}`}
          className={`${styles.square} ${isBlack ? styles.black : styles.white}`}
        >
          {piece && <div className={`${styles.piece} ${piece.color}`} />}
        </div>
      );
    }
  }

  function getPiece(row, col) {
    if (row < 3 && (row + col) % 2 === 0) {
      return { color: styles.blackPiece };
    }
    if (row > 4 && (row + col) % 2 === 0) {
      return { color: styles.whitePiece };
    }
    return null;
  }

  return (
    <div className={styles.board}>
      {squares}
    </div>
  );
}