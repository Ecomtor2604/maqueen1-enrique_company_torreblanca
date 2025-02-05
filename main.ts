Maqueen_V5.setRgblLed(Maqueen_V5.DirectionType.All, Maqueen_V5.CarLightColors.Red)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    music.play(music.stringPlayable("C5 A B B A G E A ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(500)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
})
