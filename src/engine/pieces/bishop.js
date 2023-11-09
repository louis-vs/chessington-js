import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        let moves = [];

        [-1, 1].forEach((i) => {
            [-1, 1].forEach((j) => {
            moves.push(...board.trawlUntilPiece(currentSquare, i, j))
            });
        });

        return moves
    }
}
