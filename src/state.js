import clone from 'just-clone'
import { isInvalidAction } from "./utilities/utilities.js";

const tileMap = [
    [{},{},{},{},{}],
     [{},{},{},{},{}],
    [{},{},{},{},{}],
     [{},{},{},{},{}],
    [{},{},{},{},{}],
]

export const createPlayer = (x = 0, y = 0) => ({
    name: 'player1',
    position: {x, y},
})

const defaultPlayer = createPlayer()
export const newGame = (playerCol = 0, playerRow = 0) => {
    const game = clone({
        player: defaultPlayer,
        map: tileMap
    })

    const player = createPlayer(playerCol, playerRow)
    game.map[playerRow][playerCol] = { player }
    game.player = player

    return game
}

export const action = (gameState, action) => {
    if (isInvalidAction(action))
        return gameState

    const newState = clone(gameState)

    switch (action.type) {
        case 'left':
            movePlayer(action.type, newState)
            break
        case 'right':
            movePlayer(action.type, newState)
            break
        case 'upLeft':
            movePlayer(action.type, newState)
            break
        case 'upRight':
            movePlayer(action.type, newState)
            break
        case 'downLeft':
            movePlayer(action.type, newState)
            break
        case 'downRight':
            movePlayer(action.type, newState)
            break
        default:
            break
    }

    return newState
}

function movePlayer(direction, {player, map}) {
    const x = player.position.x
    const y = player.position.y
    map[y][x] = {}

    switch (direction) {
        case 'left':
            player.position.x = x - 1;
            map[y][x - 1] = {player}
            break
        case 'right':
            player.position.x = x + 1;
            map[y][x + 1] = {player}
            break
        case 'upLeft':
            player.position.x = x - 1;
            player.position.y = y - 1;
            map[y - 1][x - 1] = {player}
            break
        case 'upRight':
            player.position.x = x + 1;
            player.position.y = y - 1;
            map[y - 1][x + 1] = {player}
            break
        case 'downLeft':
            player.position.x = x - 1;
            player.position.y = y + 1;
            map[y + 1][x - 1] = {player}
            break
        case 'downRight':
            player.position.x = x + 1;
            player.position.y = y + 1;
            map[y + 1][x + 1] = {player}
            break
        default:
            break
    }
}