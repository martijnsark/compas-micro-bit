let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45 || degrees > 315) {
        basic.showString("noorth")
    } else if (degrees < 135) {
        basic.showString("east")
    } else if (degrees < 225) {
        basic.showString("south")
    } else {
        basic.showString("west")
    }
})
