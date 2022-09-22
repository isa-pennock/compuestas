let T = 0
input.onButtonPressed(Button.A, function () {
    T = randint(-22, 100)
    basic.showNumber(T)
    if (T >= -22 && T <= 14) {
        basic.showString("Permanece en casa, hay fuertes nevadas.")
        basic.showString("R")
    } else if (T >= 15 && T <= 23) {
        basic.showString("¡Toma tus mejores esquis y diviértete!")
        basic.showString("V")
    } else if (T >= 24 && T <= 32) {
        basic.showString("Solo podrás esquiar en las partes más altas de las montañas.")
        basic.showString("A")
    } else if (T >= 33) {
        basic.showString("Lo siento, no es temporada para esquiar.")
        basic.clearScreen()
    }
})
