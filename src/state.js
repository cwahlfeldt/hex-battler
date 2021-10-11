import clone from 'just-clone'
import { isInvalidAction } from "./utilities/utilities.js";

const tileMap = [
    [{}, {}, {}, {}, {}],
        [{isBlocked: true}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
]

const createTile = () => ({
    position: {x: 0, y: 0},
    isWall: false,
})
const createPlayer = () => ({
    position: {x: 0, y: 0},
})

const defaultTile = createTile()
const defaultPlayer = createPlayer()
export const newGame = (playerRow, playerCol) => {
    const game = clone({map: tileMap})
    if (typeof playerRow !== 'undefined' && typeof playerCol !== 'undefined') {
        game.map[playerRow][playerCol] = {player: {name: 'player1'}}
    }
    return game
}

export const action = (gameState, action) => {
    if (isInvalidAction(action)) {
        return gameState
    }
    return clone(gameState)
}
