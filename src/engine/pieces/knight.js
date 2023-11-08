import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        let moves = [];

        [-1, 1].forEach((coeff1) => {
            [-1, 1].forEach((coeff2) => {
                moves.push(Square.at(currentSquare.row + 1 * coeff1, currentSquare.col + 2 * coeff2));
                moves.push(Square.at(currentSquare.row + 2 * coeff1, currentSquare.col + 1 * coeff2));

            });
        });

        return moves;
    }
}



