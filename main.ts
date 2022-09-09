tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`background`)
let mySprite = sprites.create(assets.image`truck1`, SpriteKind.Player)
mySprite.ay = 500
mySprite.ax = 100
scene.cameraFollowSprite(mySprite)
