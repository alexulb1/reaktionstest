let wartezeit = 0
let x = 0
let y = 0
let zeit = 0
let start = 0
let ende = 0
basic.setLedColor(0x00ff00)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.turnRgbLedOff()
        basic.clearScreen()
        wartezeit = randint(5, 10) * 1000
        x = randint(0, 4)
        y = randint(0, 4)
        basic.pause(wartezeit)
        led.plot(x, y)
        start = input.runningTime()
    }
    if (input.buttonIsPressed(Button.B)) {
        ende = input.runningTime()
        zeit = ende - start
        while (input.buttonIsPressed(Button.B)) {
            basic.showNumber(zeit)
            basic.showString("ms")
        }
        basic.setLedColor(0x00ff00)
    }
})
