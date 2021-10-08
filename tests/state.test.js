import test from 'ava'
import { getState, action, newGame } from '../src/state.js'


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

test('can create map', (t) => {
    const expectNewGame = [
        [{}, {}, {}, {}, {}],
        [{isBlocked: true}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
    ]
    const game = newGame()
    t.deepEqual(game.map, expectNewGame)
})

test('map has a player', (t) => {
    const expectPlayerToBeOnMap = [
        [{player: {name: 'player1'}}, {}, {}, {}, {}],
            [{isBlocked: true}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
    ]
    const game = newGame(0, 0)
    t.deepEqual(game.map, expectPlayerToBeOnMap)
})

test('action always returns new object', (t) => {
    const initial = {}
    const newState = action(initial, {})
    t.not(initial, newState)
})

test('action returns previous state on invalid action', (t) => {
    const initial = {}
    t.is(action(initial, false), initial)
    t.is(action(initial, null), initial)
    t.is(action(initial, ''), initial)
    t.is(action(initial, {type: ''}), initial)
    t.is(action(initial), initial)
})

// test('player cant move left off map', (t) => {
//     const expectPlayerToBeOnMap = [
//         [{player: {name: 'player1'}}, {}, {}, {}, {}],
//             [{}, {}, {}, {}, {}],
//         [{}, {}, {}, {}, {}],
//             [{}, {}, {}, {}, {}],
//         [{}, {}, {}, {}, {}],
//     ]
//     const game = newGame(0, 0)
//
//     t.deepEqual(game.map, expectPlayerToBeOnMap)
// })

// TODO
// check bounds of map
// if anything invalid tried to happen, just return old state and bail

// TODO
// start player somewhere else
// const game = newGame()

// TODO
// can i move the player

// TODO
// assert that your new state has the player in a diferent position

// test('player should be able to start at a position', (t) => {
//     newGame({position: {x: 1, y: 1}})
//     const { player } = getState()
//     t.is(player.position.x, 1)
//     t.is(player.position.y, 1)
// })
