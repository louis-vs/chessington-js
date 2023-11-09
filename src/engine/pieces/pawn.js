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

        const nextSquare = Square.at(currentSquare.row + directionCoeff, currentSquare.col);

        if (board.isInBounds(nextSquare) && board.getPiece(nextSquare) === undefined) {
            moves.push(nextSquare);

            const nextNextSquare = Square.at(nextSquare.row + directionCoeff, nextSquare.col); 

            if (currentSquare.row === homeRow && board.getPiece(nextNextSquare) === undefined) {
                moves.push(nextNextSquare);
            }
        }


        return moves;
    }
}
