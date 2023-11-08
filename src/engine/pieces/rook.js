import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        let moves = [];

        for (let i = 0; i < 8; i++) {
            moves.push(Square.at(currentSquare.row, i));
            moves.push(Square.at(i, currentSquare.col));
        }

        return moves.filter((square) => !square.equals(currentSquare));
    }
}
