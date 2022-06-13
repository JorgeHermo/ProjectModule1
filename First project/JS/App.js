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
        this.setEventListeners()
        this.start()
    },

    setDimensions(canvasId) {
        this.canvasSize = { w: window.innerWidth, h: window.innerHeight }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },
    //llamada en init
    setEventListeners() {
        document.onkeydown = e => {
            const { key } = e
            switch (key) {
                case 'ArrowLeft':
                    this.player.moveLeft()
                    break;
                case 'ArrowRight':
                    this.player.moveRight()
                    break;
            }
        }
    },
    //llamada en init
    start() {
        this.reset()

        this.interval = setInterval(() => {

            this.frameCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearAll()
            this.drawAll()



        }, 1000 / this.FPS)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, 'Background.png')
        this.player = new Player(this.ctx, this.canvasSize.w/2, 500, 150, 150, this.canvasSize, 'Space Ship.png')// esta mal hay que darle valores relativos
    },

    //llamada en start
    drawAll() {
        this.background.draw()
        this.player.draw() // aqui va this.frameCounter cuando tengamos el sprite
    },
    //llamada en start
    clearAll() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },



}
