import clone from 'just-clone'

const tileMap = [
    [{}, {}, {}, {}, {}],
        [{isBlocked: true}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
]

export const createTile = () => ({
    position: {x: 0, y: 0},
    isWall: false,
})

export const createPlayer = () => ({
    position: {x: 0, y: 0},
})

const defaultTile = createTile()
const defaultPlayer = createPlayer()

export const getState = () => (clone({
    tile: defaultTile,
    player: defaultPlayer,
}))

export const newGame = (playerRow, playerCol) => {
    const game = clone({map: tileMap})
    if (typeof playerRow !== 'undefined' && typeof playerCol !== 'undefined') {
        game.map[playerRow][playerCol] = {player: {name: 'player1'}}
    }
    return game
}

export const action = (gameState, action) => {
    if (action === null ||
        typeof action !== 'object' ||
        typeof action.type !== 'string' ||
        !action.type.length
    ) { return gameState }

    return clone(gameState)
}
