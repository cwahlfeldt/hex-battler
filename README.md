# wip hex grid game

a turnbased puzzle/rpg roguelike game... you battle and collect things on a randomly generated hex grid map... in space!

The game borrows alot of gameplay ideas from [Hoplite](https://www.youtube.com/watch?v=aB_oG-_pYog). Its a simple little roguelike for mobile. I love the game but I thought the gameplay and graphics could be enhanced. Ultimatly I would love to have the game use 3d graphics. I also want the game to have a space theme similar to other games that have inspired this project ([FTL](https://store.steampowered.com/app/212680/FTL_Faster_Than_Light/) and [Rymdkapsel](https://store.steampowered.com/app/253790/rymdkapsel/) to name a few but alot of the core mechanics still mimic hoplite). Im basically basing the entire game on other games but with some of my own subtle differences (who doesnt do this?).

Dorky story time: the game is about a person(alien?) thats been casted out, banished from their homeworld never to return again unless they can redeem their name and cast out the evil overlords that kicked em out in the first place. Or somthing like that...

## Rules (unit tests?)
1. Tiles are hexagons
2. The map is also in a hexagon shape, with *n* size
3. The map is filled with tiles
4. Some tiles are "walls" that cant be traversed while the others can be traversed
6. A player starts on a specific tile at the begining of a match
7. Enemies are spawned on the map outside the range of attack of the player at the start of a match
8. The game takes place in turns between the player and the enemies
9. Both enemies and players default move distance is one tile per turn.
10. The only action the player takes is moving... attacking happens as a result of moving when its your turn and you are exactly one tile away from the enemy. Read next rule!
11. When enemy moves next to player, the player can attack on their subsequent turn. (sorta similar to chess.. when in range, on your turn, you can attack)
12. If player moves next to an enemy, the enemy can attack the player
13. ... more to come

## Ideas
1. Powerups to attack from a distance
2. Blackholes that teleport you to different tiles
3. Mining planets on tiles that 
4. Enemies can merge when the move to the same tiles and become stronger
5. Endless hex grid like [Vallerys Between](https://apps.apple.com/us/app/valleys-between/id1348135354)
6. ... more to come
