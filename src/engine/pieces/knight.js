import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        let moves = [];

        [-1, 1].forEach((rowMultiplier) => {
            [-1, 1].forEach((colMultiplier) => {
                moves.push(Square.at(currentSquare.row + 1 * rowMultiplier, currentSquare.col + 2 * colMultiplier));
                moves.push(Square.at(currentSquare.row + 2 * rowMultiplier, currentSquare.col + 1 * colMultiplier));
            });
        });

        return moves.filter((square) => board.isInBounds(square) && !board.isOccupiedByFriendlyPiece(square));
    }
}



