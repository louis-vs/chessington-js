import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        let moves = [];

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                moves.push(Square.at(currentSquare.row + i, currentSquare.col + j));
            }
        }

        return moves.filter((square) => !square.equals(currentSquare));
    }
}
