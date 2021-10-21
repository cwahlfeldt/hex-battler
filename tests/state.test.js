import test from 'ava'
import { action, newGame } from '../src/state.js'

const expectDefaultMap = [
    [{player: {name: 'player1', position: {x:0,y:0}}}, {}, {}, {}, {}],
    [{isBlocked: true}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
]

test('can create map', (t) => {
    const game = newGame()
    t.deepEqual(game.map, expectDefaultMap)
})

test('map has a player', (t) => {
    const game = newGame(0, 0)
    t.deepEqual(game.map, expectDefaultMap)
})

test('action always returns new object', (t) => {
    const initial = {}
    const newState = action(initial, {})
    t.not(initial, newState)
})

test('action returns previous state when invalid', (t) => {
    const initial = {}
    t.is(action(initial, false), initial)
    t.is(action(initial, null), initial)
    t.is(action(initial, ''), initial)
    t.is(action(initial), initial)
    t.deepEqual(action(initial, {type: ''}), initial)
})

test('player can move left', (t) => {
    const game = newGame(0, 1)
    const newState = action(game, {type: 'left'})
    t.deepEqual(expectDefaultMap, newState.map)
})

test('player can move right', (t) => {
    const expectedToMoveRight = [
        [{}, {player: {name: 'player1', position: {x:0,y:0}}}, {}, {}, {}],
        [{isBlocked: true}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
    ]
    const game = newGame(0, 0)
    const newState = action(game, {type: 'right'})
    t.deepEqual(expectedToMoveRight, newState.map)
})

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
