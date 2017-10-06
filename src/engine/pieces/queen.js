import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        let moves = [];
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                moves.push(...board.trawlUntilPiece(currentSquare, i, j));
            }
        }

        return moves;
    }
}
