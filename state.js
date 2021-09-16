import clone from 'just-clone'

export const createTile = () => ({
    position: {x: 0, y: 0},
})
export const createPlayer = () => ({
    position: {x: 0, y: 0},
})

const tile = createTile()
const player = createPlayer()

export const getState = () => ({
    tile,
    player,
})

export const newGame = (
    player = player
) => {
    player
}