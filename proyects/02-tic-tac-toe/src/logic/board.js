import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    // revisar si hay 3 iguales
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

  export const checkEndGame = (newBoard) => {
    // revisar si hay un empate
    // si no hay mas espacios vacios en el tablero
    return newBoard.every((square) => square !== null)
  }