import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        let moves = [];
        [-1, 1].forEach((i) => {
            moves.push(...board.trawlUntilPiece(currentSquare, i, 0));
            //moves.pop();
            moves.push(...board.trawlUntilPiece(currentSquare, 0, i));
            //moves.pop();
        });

        return moves;
    }
}
