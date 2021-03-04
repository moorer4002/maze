scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    spooky.destroy()
    tiles.setTilemap(tilemap`level3`)
    info.stopCountdown()
    mySprite.setPosition(3, 7)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f 9 f f . . . . . . 
        . . . . . . f 6 9 9 f . . . . . 
        . . . . . . f 6 6 9 9 f . . . . 
        . . . . . . f 8 6 6 9 9 f f . . 
        . . . . . . f 8 8 6 6 9 9 9 f . 
        . . . . . . f f f f f f f f . . 
        . . . f . . . . . f . . . . . . 
        . f f f f . . . . f . . . . . . 
        . f e e e f . . . f . . . f f f 
        . f e e e e f . . f . . f e e f 
        . f f e e e e f f f f f e e f . 
        . f f e e e e e e e e e e e f . 
        . f e f f e e e e e e e f f . . 
        . f f f f f f f f f f f . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    tiles.placeOnTile(spooky, tiles.getTileLocation(14, 6))
    info.startCountdown(20)
    spooky.follow(mySprite, 125)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    mySprite.destroy(effects.fire, 500)
    game.reset()
})
let spooky: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . f f 9 f . . . . . . 
    . . . . . f 9 9 6 f . . . . . . 
    . . . . f 9 9 6 6 f . . . . . . 
    . . f f 9 9 6 6 8 f . . . . . . 
    . f 9 9 9 6 6 8 8 f . . . . . . 
    . . f f f f f f f f . . . . . . 
    . . . . . . f . . . . . f . . . 
    . . . . . . f . . . . f f f f . 
    f f f . . . f . . . f e e e f . 
    f e e f . . f . . f e e e e f . 
    . f e e f f f f f e e e e f f . 
    . f e e e e e e e e e e e f f . 
    . . f f e e e e e e e f f e f . 
    . . . . f f f f f f f f f f f . 
    `, SpriteKind.Player)
spooky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . f f 5 f . . . . . . 
    . . . . . f 5 5 4 f . . . . . . 
    . . . . f 5 5 4 4 f . . . . . . 
    . . f f 5 5 4 4 2 f . . . . . . 
    . f 5 5 5 4 4 2 2 f . . . . . . 
    . . f f f f f f f f . . . . . . 
    . . . . . . f . . . . . f . . . 
    . . . . . . f . . . . f f f f . 
    f f f . . . f . . . f e e e f . 
    f e e f . . f . . f e e e e f . 
    . f e e f f f f f e e e e f f . 
    . f e e e e e e e e e e e f f . 
    . . f f e e e e e e e f f e f . 
    . . . . f f f f f f f f f f f . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
tiles.placeOnTile(spooky, tiles.getTileLocation(13, 14))
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
pause(500)
spooky.follow(mySprite, 300)
info.setLife(1)
