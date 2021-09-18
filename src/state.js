import clone from 'just-clone'

export const createTile = () => ({
    position: {x: 0, y: 0},
})

export const createPlayer = () => ({
    position: {x: 0, y: 0},
})

const defaultTile = createTile()
const defaultPlayer = createPlayer()
export const getState = () => ({
    tile: defaultTile,
    player: defaultPlayer,
})

export const newGame = (
    player = defaultPlayer
) => {
    player
}
