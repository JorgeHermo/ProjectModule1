const canvasApp = {
    name: 'Space Invaders',
    author: 'Jorge Hermo y Ovidiu Stanescu',
    version: '1.0.0',
    license: undefined,
    description: 'Primer proyecto juego Space Invaders',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    FPS: 60,
    framesCounter: 0,

    ctx: undefined,

    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimensions(canvasId)
    },

    setDimensions(canvasId) {
        this.canvasSize = { w: window.innerWidth, h: window.innerHeight }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },

    start() {
        this.reset()

        this.interval = setInterval(() => {

            this.frameCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearAll()
            this.drawAll()
            this.generatObstacles()


        }, 1000 / this.FPS)
    },

    reset() { },

    drawAll() { },

    clearAll() { },



}