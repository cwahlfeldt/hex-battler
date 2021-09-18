import test from 'ava'
import { getState, newGame } from '../state.js'

test('a tile has an x position', (t) => {
    const { tile } = getState()
    t.is(tile.position.x, 0)
})

test('a tile has a y position', (t) => {
    const { tile } = getState()
    t.is(tile.position.y, 0)
})

test('player has an x position', (t) => {
    const { player } = getState()
    t.is(player.position.x, 0)
})

test('player has a y position', (t) => {
    const { player } = getState()
    t.is(player.position.y, 0)
})

test('player should be able to start at a position', (t) => {
    newGame({position: {x: 1, y: 1}})
    const { player } = getState()
    t.is(player.position.x, 1)
    t.is(player.position.y, 1)
})
//
// test('create a map of tiles', (t) => {
//     newGame()
//     const { map } = getState()
//     t.is(, 1)
// })
