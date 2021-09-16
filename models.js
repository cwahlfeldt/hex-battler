//
// Data models for the game kstr by @cwahlfeldt

export const createTileModel = (options) => ({
    position: {x: 0, y: 0},
    isTraversable: false,
    ...options,
})

export const createPlayerModel = (options) => ({
    currentPosition: {x: 0, y: 0},
    name: 'name',
    type: 'unit type',
    health: 3,
    isDead: false,
    isBadGuy: false,
    ...options,
})

export const createEnemyModel = (options) => createPlayerModel({
    isBadGuy: true,
    health: 1,
    isDead: false,
    ...options
})

export const createGameModel = (options) => ({
    player: '<playerName>',
    enemies: ['<enemyName>', '<enemyName>', '<enemyName>'],
    whosTurnIsIt: '<playerName>',
    currentPlayerPosition: {x: 1, y: 2},
    enemyPositions: [
        {x: 12, y: 4},
        {x: 6, y: 8},
        {x: 3, y: 9}
    ],
    mapModel: [
                                ['tile'],
                            ['tile'],['tile'],
                        ['tile'],['tile'],['tile'],
                    ['tile'],['tile'],['tile'],['tile'],
                ['tile'],['tile'],['tile'],['tile'],['tile'],
            ['tile'],['tile'],['tile'],['tile'],['tile'],['tile'],
        ['tile'],['tile'],['tile'],['tile'],['tile'],['tile'],['tile'],
            ['tile'],['tile'],['tile'],['tile'],['tile'],['tile'],
                ['tile'],['tile'],['tile'],['tile'],['tile'],
                    ['tile'],['tile'],['tile'],['tile'],
                        ['tile'],['tile'],['tile'],
                            ['tile'],['tile'],
                                ['tile'],
    ],
    ...options
})

export const state = (state) => ({
    TILE: createTileModel(),
    PLAYER: createPlayerModel({health: 5}),
    ENEMY: createEnemyModel(),
    GAME: createGameModel(),
    ...state
})
