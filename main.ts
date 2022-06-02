namespace SpriteKind {
    export const King = SpriteKind.create()
    export const Zbrojir = SpriteKind.create()
    export const House = SpriteKind.create()
    export const Tree = SpriteKind.create()
}
namespace StrProp {
    export const Name = StrProp.create()
    export const Text = StrProp.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    false
    )
    zmena_pozice_zbrane(0)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (currentLevel == 2) {
        game.splash("Měl bych jít po cestě...")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`wood`, function (sprite, location) {
    if (currentLevel == 2) {
        dialogSkoncen = false
    }
})
function level1 () {
    Kral = sprites.create(img`
        ................
        ................
        ................
        ................
        ................
        ...5.5.555.5.5..
        ...5f5f555f5f5..
        ...55555555555..
        ....55555555ff..
        ....fdddfbddff..
        ....fdbbf1bfff..
        ....1bbbbddff...
        ....111111bdf...
        ....111111bd....
        ....11111ddf....
        .....111fff.....
        .....8ffff8.....
        .....666666.....
        ................
        ................
        `, SpriteKind.King)
    tiles.placeOnRandomTile(Kral, assets.tile`myTile0`)
    game.splash("Přišel jsi za králem pro jeho nabídku.")
    game.splash("Stiskem A s ním promluvíš.")
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mec == true) {
        projectile = sprites.createProjectileFromSprite(assets.image`sword effect`, mySprite, 100, 0)
        pause(100)
        projectile.destroy()
        if (pozice_zbrane[0] == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`sword attack up`,
            100,
            false
            )
        }
        if (pozice_zbrane[1] == 1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                ........................
                .....ffff...............
                ...fff22fff.............
                ..fff2222fff............
                .fffeeeeeefff...........
                .ffe222222eef...........
                .fe2ffffff2ef...........
                .ffffeeeeffff...........
                ffefbf44fbfeff..........
                fee41fddf14eef..........
                .feeddddddeef...........
                ..feee444eef............
                ..e4f22222f4e...........
                ..4df22222fd4...........
                ..44f45544f44...........
                ....ffffff..............
                ....ff..ff..............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ......ffff..............
                ....fff22fff............
                ...fff2222fff...........
                ..fffeeeeeefff..........
                ..ffe222222eef..........
                ..fe2ffffff2ef..........
                ..ffffeeeeffff..........
                .ffefbf44fbfeff.........
                .fee41fddf14eef.........
                ..feeddddd4eff..........
                ...fee444edd4e..........
                ...4f2222edde...........
                ...df22cccee............
                ....f44cdc4f............
                ....fffddcff............
                .....fddcff.............
                ....cddc................
                ....cdc.................
                ....cc..................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                .......ff...............
                .....ff22ff.............
                ...fff2222fff...........
                ..fff222222fff..........
                ..fff222222fff..........
                ..feeeeeeeeeeff.........
                .ffe22222222eff.........
                .fffffeeeefffff.........
                ..fefbf44fbfeff.........
                ..fe41fddf14ef..........
                ..ffe4dddd4efe..........
                ..4ef22222f4e...........
                ..d4f44554f4e...........
                ....ffffffdde...........
                .....ffffedde...........
                ..........ee............
                .........ccc............
                ........cc1cc...........
                .........c1c............
                .........c1c............
                .........c1c............
                .........c1c............
                `,img`
                ......ffff..............
                ....fff22fff............
                ...fff2222fff...........
                ..fffeeeeeefff..........
                ..ffe222222eef..........
                ..fe2ffffff2ef..........
                ..ffffeeeeffff......ccc.
                .ffefbf44fbfeff....cddc.
                .ffefbf44fbfeff...cddc..
                .fee4dddddd4eef.ccddc...
                .ffeeddddd4eeffecddc....
                ..4fee4444ee4fddccc.....
                ..4df222222f1edde.......
                ..44f222222f44ee........
                ....f445544f............
                ....ffffffff............
                .....ff..ff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                .....ffff...............
                ...fff22fff.............
                ..fff2222fff............
                .fffeeeeeefff...........
                .ffe222222eef...........
                .fe2ffffff2ef...........
                .ffffeeeeffff...........
                ffefbf44fbfeff..........
                fee41fddf14eef..........
                .feeddddddeef...........
                ..feee444eef............
                ..e4f22222f4e...........
                ..4df22222fd4...........
                ..44f45544f44...........
                ....ffffff..............
                ....ff..ff..............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            100,
            false
            )
        }
        if (pozice_zbrane[2] == 1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                .......cc...feeeeffeeef.
                .......cdc.fe2222eeffff.
                .......cddcf2effff222ef.
                ........cddcffeeefffffff
                .........cddce44fbe44eff
                ..........cdceddf14d4eef
                ..........cccdeddd4eeef.
                ...........edd4e44eeff..
                ............ee442222f...
                .............f2e2222f...
                .............f554444f...
                ..............ffffff....
                ................fff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ..............fff.......
                .............f2fffff....
                ...........ff22eeeeeff..
                ..........ff222eeeeeeff.
                ..........feeeefffeeeef.
                .........fe2222eeefffff.
                .........f2efffff222efff
                ..cc.....fffeeefffffffff
                ..cdcc...fee44fbbe44efef
                ..ccddcc..feddfbb4d4eef.
                ....cdddceefddddd4eeef..
                .....ccdcddee2222222f...
                ......cccdd44e544444f...
                .........eeeeffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ...............ff.......
                .............ff2ffff....
                ............ff2feeeeff..
                ...........ff22feeeeeff.
                ...........feeeeffeeeef.
                ..........fe2222eefffff.
                ..........f2effff222efff
                ..........fffeeeffffffff
                ..........fee44fbe44efef
                ...........feddfb4d4eef.
                ..........c.eeddd4eeef..
                ....ccccccceddee2222f...
                .....dddddcedd44e444f...
                ......ccccc.eeeefffff...
                ..........c...ffffffff..
                ...............ff..fff..
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                ............feeeeffeeef.
                ...........fe2222eeffff.
                ...........f2effff222ef.
                ...........fffeeefffffff
                ...........fee44fbe44eff
                ............feddf14d4eef
                .............fdddd4eeef.
                .............fe444eddf..
                .............ccc22eddf..
                .............cdc22fee...
                ............cddc4444f...
                ...........cddcfffff....
                ..........cddc..fff.....
                ..........cdc...........
                ..........cc............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                ............feeeeffeeef.
                ...........fe2222eeffff.
                ...........f2effff222ef.
                ...........fffeeefffffff
                ...........fee44fbe44eff
                ............feddf14d4eef
                .............fdddd4eeef.
                .............fe444eeff..
                .............f222edd4...
                .............f222edde...
                .............f554feef...
                ..............ffffff....
                ................fff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            100,
            false
            )
        }
        if (pozice_zbrane[3] == 1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                ........................
                ....ffffff..............
                ..ffeeeef2f.............
                .ffeeeef222f............
                .feeeffeeeef...cc.......
                .ffffee2222ef.cdc.......
                .fe222ffffe2fcddc.......
                fffffffeeeffcddc........
                ffe44ebf44ecddc.........
                fee4d41fddecdc..........
                .feee4dddedccc..........
                ..ffee44e4dde...........
                ...f222244ee............
                ...f2222e2f.............
                ...f444455f.............
                ....ffffff..............
                .....fff................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                .......fff..............
                ....fffff2f.............
                ..ffeeeee22ff...........
                .ffeeeeee222ff..........
                .feeeefffeeeef..........
                .fffffeee2222ef.........
                fffe222fffffe2f.........
                fffffffffeeefff.....cc..
                fefe44ebbf44eef...ccdc..
                .fee4d4bbfddef..ccddcc..
                ..feee4dddddfeecdddc....
                ...f2222222eeddcdcc.....
                ...f444445e44ddccc......
                ...ffffffffeeee.........
                ...fff...ff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                .......ff...............
                ....ffff2ff.............
                ..ffeeeef2ff............
                .ffeeeeef22ff...........
                .feeeeffeeeef...........
                .fffffee2222ef..........
                fffe222ffffe2f..........
                ffffffffeeefff..........
                fefe44ebf44eef..........
                .fee4d4bfddef...........
                ..feee4dddee.c..........
                ...f2222eeddeccccccc....
                ...f444e44ddecddddd.....
                ...fffffeeee.ccccc......
                ..ffffffff...c..........
                ..fff..ff...............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ....ffffff..............
                ..ffeeeef2f.............
                .ffeeeef222f............
                .feeeffeeeef............
                .ffffee2222ef...........
                .fe222ffffe2f...........
                fffffffeeefff...........
                ffe44ebf44eef...........
                fee4d41fddef............
                .feee4ddddf.............
                ..fdde444ef.............
                ..fdde22ccc.............
                ...eef22cdc.............
                ...f4444cddc............
                ....fffffcddc...........
                .....fff..cddc..........
                ...........cdc..........
                ............cc..........
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ....ffffff..............
                ..ffeeeef2f.............
                .ffeeeef222f............
                .feeeffeeeef............
                .ffffee2222ef...........
                .fe222ffffe2f...........
                fffffffeeefff...........
                ffe44ebf44eef...........
                fee4d41fddef............
                .feee4ddddf.............
                ..ffee444ef.............
                ...4dde222f.............
                ...edde222f.............
                ...feef455f.............
                ....ffffff..............
                .....fff................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            100,
            false
            )
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    false
    )
    zmena_pozice_zbrane(2)
})
function level3 () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 2))
}
function startNextLevel () {
    currentLevel += 1
    if (currentLevel == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
        level1()
    } else if (currentLevel == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.King)
        tiles.setCurrentTilemap(tilemap`level2`)
        level2()
    } else if (currentLevel == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Zbrojir)
        sprites.destroyAllSpritesOfKind(SpriteKind.House)
        sprites.destroyAllSpritesOfKind(SpriteKind.Tree)
        tiles.setCurrentTilemap(tilemap`level24`)
    } else {
        game.over(true)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`hlina`, function (sprite, location) {
    if (dialogSkoncen == false) {
        game.showLongText("ZBROJÍŘ: Počkej, počkej.", DialogLayout.Bottom)
        game.showLongText("ZBROJÍŘ: Povídal mi o tobě král.", DialogLayout.Bottom)
        game.showLongText("ZBROJÍŘ: Jsem místní zbrojíř a mám ti dát todle.", DialogLayout.Bottom)
        mec = true
        game.splash("Získal jsi meč")
        game.splash("Stiskem A mečem sekáš")
        dialogSkoncen = true
    }
})
function level2 () {
    tiles.placeOnRandomTile(mySprite, assets.tile`dvere kral`)
    Zbrojar = sprites.create(assets.image`Lucistnik`, SpriteKind.Zbrojir)
    tiles.placeOnTile(Zbrojar, tiles.getTileLocation(13, 12))
    House1 = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        bcbeee22e22e22e22e22e2e22e2e22e22e22e22e22eeebcb
        4bb22e22eeee22e22eeee2e22e2eeee22e22eeee22e22bb4
        4bb22e22e22e22eeee22e2e22e2e22eeee22e22e22e22bb4
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        bcb22e22e22eeee22e22e2e22e2e22e22eeee22e22e22bcb
        4bbeee22e22e22e22e22e2e22e2e22e22e22e22e22eeebb4
        4bb22e22eeee22e22e22e2e22e2e22e22e22eeee22e22bb4
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        bcb22eeee22e22eeee22eee22eee22eeee22e22eeee22bcb
        4bb22e22e22eeee22e22e2e22e2e22e22eeee22e22e22bb4
        4bbeee22e22e22e22e22e2e22e2e22e22e22e22e22eeebb4
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        bcb22e22e22e22e22e22eee22eee22e22e22e22e22e22bcb
        4bb22eeee22e22e22eeeccbbbbcceee22e22e22eeee22bb4
        4bb22e22e22e22eeeccbbbbbbbbbbcceee22e22e22e22bb4
        4cceee22e22eeeccbbbbbccccccbbbbbcceee22e22eeecc4
        bcb22e22eeeccbbbbbccb444444bccbbbbbcceee22e22bcb
        4bb22e22ccbbbbbccb444444444444bccbbbbbcc22e22bb4
        4bb22ccbbbbcccb444444444444444444bcccbbbbcc22bb4
        4cccbbbbcccb444bccbbbbbbbbbbbbccb444bcccbbbbccc4
        ccccccccbbbbbbbcb44444444444444bcbbbbbbbcccccccc
        b444444444444bc444444444444444444cb444444444444b
        bbcb444444444cb411111111111111114bc444444444bcbb
        bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
        bbbb444444444c11beeeeeeeeeeeeeeb11c444444444bbbb
        bbbe2222222e4c1be4e44e44e44e44eeb1c4e2222222ebbb
        bbbeeeeeeeee4c1be4e44e44e44e44eeb1c4eeeeeeeeebbb
        bbbeddddddde4cbbf4e4effffffe44eebbc4edddddddebbb
        bbbedffdffde4cbbf4effffffffff4eebbc4edffdffdebbb
        bbbedccdccde4cbbf4effffffffffeeebbc4edccdccdebbb
        bbbeddddddde4cbbf4eeeeeeeeeeeeeebbc4edddddddebbb
        cbbedffdffde4cbbe4e44e44e44e44eebbc4edffdffdebbc
        cbbedccdccde4cbbe4e44e44e44e44eebbc4edccdccdebbc
        ccbbbbbbbbbb4cbbe4e44e44e44feeeebbc4bbbbbbbbbbcc
        .cbb444444444cbbe4e44e44e44ffffebbc444444444bbc.
        ..cb4eee4eee4cbbf4e44e44e44f44febbc4eee4eee4bc..
        ...c4eee4eee4cbbf4e44e44e44effeebbc4eee4eee4c...
        ....b44444444cbbf4e44e44e44e44eebbc44444444b....
        .....b4eee444cbbf4e44e44e44e44eebbc444eee4b.....
        ......bcccbbbcbbe4e44e44e44e44eebbcbbbcccb......
        `, SpriteKind.House)
    tiles.placeOnTile(House1, tiles.getTileLocation(11, 11))
    Strom = sprites.create(img`
        .............6666...............
        ..........666667766.6666........
        .........677777777767776........
        ......66667775577757777666......
        .....677666675557557776777666...
        .....6776777775555577777766776..
        ...66666777777775777777766666...
        .66667767777755757555777776776..
        6666777677775577557555777767766.
        .6667767777777775577777777767666
        .c6766777677777775777777677766..
        cc77666667777777777777777666666c
        cc76666677777777777777777766776c
        c6666776777777777777766677666776
        66667766667776777767767766766666
        ccc76677677776677766767776776ccc
        cc7766776777677677676667767766cc
        .666c676667677766667766666666cc.
        .ccc66676666776666677677666cccc.
        ...ccc77c6767666676676677666ccc.
        ...cc676c7766676677666666c666cc.
        ....c6cc676c6677677c66c666ccc...
        ....ccccc6c66667667cc6ccc6ccc...
        ......ccccc66c66c66cccccccc.....
        .......cc.cc6c6ccc6cccc.cc......
        ...........cccccccccc...........
        .............feeeeee............
        ............feeeeeefe...........
        .........eeeeefeeeffee..........
        ............ffffeef..ee.........
        ...............fee..............
        ................e...............
        `, SpriteKind.Tree)
    tiles.placeOnTile(Strom, tiles.getTileLocation(17, 17))
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    false
    )
    zmena_pozice_zbrane(3)
})
function zmena_pozice_zbrane (num: number) {
    pozice_zbrane[0] = 0
    pozice_zbrane[1] = 0
    pozice_zbrane[2] = 0
    pozice_zbrane[3] = 0
    pozice_zbrane[num] = 1
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`koberec0`, function (sprite, location) {
    if (controller.A.isPressed() && dialogSkoncen == false) {
        game.setDialogFrame(img`
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            `)
        game.showLongText("KRÁL: Zdravím, jsem rád, že si přišel.", DialogLayout.Bottom)
        game.showLongText("KRÁL: Mám pro tebe důležitý úkol.", DialogLayout.Bottom)
        game.showLongText("KRÁL: Má dcera byla unesena a nyní je na dalekém zámku.", DialogLayout.Bottom)
        game.showLongText("KRÁL: Onen zámek se nachází za černým lesem a řekou.", DialogLayout.Bottom)
        game.showLongText("KRÁL: Vězní ji tam obávaný černokněžník.", DialogLayout.Bottom)
        game.showLongText("KRÁL: Pokud ji osvobodíš, dostaneš ji za ženu", DialogLayout.Bottom)
        game.showLongText("JÁ: Dobrá, pokusím se ji najít a přivést.", DialogLayout.Bottom)
        game.showLongText("KRÁL: Přeji hodně štěstí a dávej na sebe pozor.", DialogLayout.Bottom)
        dialogSkoncen = true
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    false
    )
    zmena_pozice_zbrane(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`active`, function (sprite, location) {
    if (dialogSkoncen == true) {
        startNextLevel()
    } else {
        game.splash("Na něco jsem zapomněl...")
        if (controller.A.isPressed()) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 2))
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`dvere kral`, function (sprite, location) {
    if (currentLevel == 1) {
        if (dialogSkoncen == true) {
            startNextLevel()
        } else {
            game.splash("Král po tobě něco chce.")
            if (controller.A.isPressed()) {
                mySprite.setPosition(25, 70)
            }
        }
    }
})
let Strom: Sprite = null
let House1: Sprite = null
let Zbrojar: Sprite = null
let projectile: Sprite = null
let mec = false
let Kral: Sprite = null
let dialogSkoncen = false
let currentLevel = 0
let pozice_zbrane: number[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
pozice_zbrane = [
0,
0,
0,
0
]
currentLevel = 0
startNextLevel()
