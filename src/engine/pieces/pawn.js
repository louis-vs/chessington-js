import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        let moves = [];
        const directionCoeff = this.player === Player.WHITE ? 1 : -1;
        const homeRow = this.player === Player.WHITE ? 1 : 6;

        moves.push(Square.at(currentSquare.row + directionCoeff, currentSquare.col));

        if (currentSquare.row === homeRow) {
            moves.push(Square.at(currentSquare.row + directionCoeff * 2, currentSquare.col));
        }

        return moves;
    }
}
