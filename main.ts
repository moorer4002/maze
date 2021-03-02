scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    spooky.setPosition(1, 8)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 500)
    game.reset()
})
let spooky: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f 9 9 9 9 9 9 9 f f . . . 
    . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
    . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
    f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    f 6 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    f 6 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    f 6 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    f 6 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    f 6 6 9 9 9 9 9 9 9 9 9 9 9 f . 
    f 6 6 6 9 9 9 9 9 9 9 9 9 9 f . 
    . f 6 6 6 6 9 9 9 9 9 9 9 f . . 
    . f 6 6 6 6 6 6 9 9 9 9 9 f . . 
    . . f f 6 6 6 6 6 6 6 f f . . . 
    . . . . f f f f f f f . . . . . 
    `, SpriteKind.Player)
spooky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f 4 4 4 4 4 4 4 f f . . . 
    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
    f 2 4 4 4 4 4 4 4 4 4 4 4 4 f . 
    f 2 4 4 4 4 4 4 4 4 4 4 4 4 f . 
    f 2 4 4 4 4 4 4 4 4 4 4 4 4 f . 
    f 2 4 4 4 4 4 4 4 4 4 4 4 4 f . 
    f 2 2 4 4 4 4 4 4 4 4 4 4 4 f . 
    f 2 2 2 4 4 4 4 4 4 4 4 4 4 f . 
    . f 2 2 2 2 4 4 4 4 4 4 4 f . . 
    . f 2 2 2 2 2 2 4 4 4 4 4 f . . 
    . . f f 2 2 2 2 2 2 2 f f . . . 
    . . . . f f f f f f f . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
tiles.placeOnTile(spooky, tiles.getTileLocation(13, 14))
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
pause(500)
spooky.follow(mySprite, 350)
