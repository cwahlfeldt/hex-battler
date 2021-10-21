import clone from 'just-clone'
import { isInvalidAction } from "./utilities/utilities.js";

const tileMap = [
    [{}, {}, {}, {}, {}],
        [{isBlocked: true}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
]

const createPlayer = (x = 0, y = 0) => ({
    name: 'player1',
    position: {x, y},
})

const defaultPlayer = createPlayer()

export const newGame = (playerRow = 0, playerCol = 0) => {
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
            movePlayerLeft(newState)
            break
        case 'right':
            movePlayerRight(newState)
            break
        default:
            break
    }

    return newState
}

function movePlayerLeft({player, map}) {
    const x = player.position.x
    const y = player.position.y

    map[y][x] = {}
    map[y][x - 1] = {player}
    player.position.x = 0;
}

function movePlayerRight({player, map}) {
    const x = player.position.x
    const y = player.position.y

    map[y][x] = {}
    map[y][x + 1] = {player}
    player.position.x = 0;
}
