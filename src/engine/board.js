import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);        
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }

    /**
     *  Searches the board in a given direction until you reach a piece.
     *  Returns all searched squares (including the last square but not the first)
     */
    trawlUntilPiece(fromSquare, dRow, dCol) {
        if (dRow === 0 && dCol === 0) {
            return [];
        }

        let searchedSquares = [];

        let currentSquare = Square.at(fromSquare.row + dRow, fromSquare.col + dCol); 
        while (this.isInBounds(currentSquare) && !this.isOccupiedByFriendlyPiece(currentSquare)) {
            searchedSquares.push(currentSquare);

            if (this.getPiece(currentSquare)) {
                break;
            }

            currentSquare = Square.at(currentSquare.row + dRow, currentSquare.col + dCol);
        }

        return searchedSquares;
    }

    isInBounds(square) {
        return square.row >= 0 && square.row < GameSettings.BOARD_SIZE 
            && square.col >= 0 && square.col < GameSettings.BOARD_SIZE;
    }
    
    isOccupiedByFriendlyPiece(square) {
        const pieceOnCurrentSquare = this.getPiece(square);
        
        return pieceOnCurrentSquare && (pieceOnCurrentSquare.player === this.currentPlayer);

    isOccupiedByOpposingPiece(square) {
        const pieceOnSquare = this.getPiece(square);
        const opposingPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        
        return pieceOnSquare && (pieceOnSquare.player === opposingPlayer);
    }
}
