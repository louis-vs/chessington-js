import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        let moves = [];

        for (let i = 0; i < 8; i++) {
            moves.push(Square.at(currentSquare.row, i));
            moves.push(Square.at(i, currentSquare.col));
            moves.push(Square.at(currentSquare.row + i, currentSquare.col + i));
            moves.push(Square.at(currentSquare.row + i, currentSquare.col - i));
            moves.push(Square.at(currentSquare.row - i, currentSquare.col + i));
            moves.push(Square.at(currentSquare.row - i, currentSquare.col - i));
        }

        const inBounds = (square) => square.row >= 0 && square.row < 8 && square.col >= 0 && square.col < 8;

        return moves.filter((square) => !square.equals(currentSquare) && inBounds(square));
    }
}
