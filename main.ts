controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.image == img`
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
        `) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f f f f f f c . . . . 
            . . . . . f f f f f c c . . . . 
            . . . . . f f f c c c c . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 200, 0)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (mySprite.image == img`
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
        `) {
        tiles.setTilemap(tilemap`level3`)
        info.stopCountdown()
        mySprite.setPosition(48, 57)
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
        spooky.setImage(img`
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
            f f f . . . f . . . f f f f f . 
            f f f f . . f . . f f f f f f . 
            . f f f f f f 2 2 2 f f f f f . 
            . f f f f f f f 2 2 2 f f f f . 
            . . f f f f f f f 2 2 2 f f f . 
            . . . . f f f f f f 2 2 2 f f . 
            `)
        info.setLife(3)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (mySprite.image == img`
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
        `) {
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        tiles.placeOnTile(spooky, tiles.getTileLocation(14, 6))
        info.startCountdown(20)
        spooky.follow(mySprite, 125)
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    spooky.destroy(effects.fountain, 500)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    mySprite.destroy(effects.fire, 500)
    game.reset()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite.image == img`
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
        `) {
        scene.cameraShake(4, 500)
        if (info.life() == 0) {
            mySprite.destroy(effects.fountain, 500)
            pause(100)
            game.over(false)
        }
    }
})
let spawn = 0
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let speed = 0
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
if (mySprite.image == img`
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
    `) {
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
    speed = 20
}
forever(function () {
    if (mySprite.image == img`
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
        `) {
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
            f f f . . . f . . . f f f f f . 
            f f f f . . f . . f f f f f f . 
            . f f f f f f 2 2 2 f f f f f . 
            . f f f f f f f 2 2 2 f f f f . 
            . . f f f f f f f 2 2 2 f f f . 
            . . . . f f f f f f 2 2 2 f f . 
            `, SpriteKind.Enemy)
        spooky.x = scene.screenWidth()
        mySprite.vx = 0 - speed
        mySprite.y = randint(50, scene.screenHeight() - -50)
        statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
        statusbar.attachToSprite(spooky)
        pause(spawn)
    }
})
game.onUpdateInterval(500, function () {
    if (mySprite.image == img`
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
        `) {
        speed += 5
        speed = Math.min(speed, 50)
        spawn += -200
        speed = Math.max(speed, 500)
    }
})
