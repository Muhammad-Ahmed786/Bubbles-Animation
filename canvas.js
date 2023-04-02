var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth - 5.5
canvas.height = window.innerHeight - 5.5

var c = canvas.getContext("2d")

// c.fillStyle = "rgb(71, 71, 245)"
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = "rgb(226, 89, 89)"
// c.fillRect(700, 200, 100, 100)
// c.fillStyle = "rgb(80, 226, 80)"
// c.fillRect(300, 400, 100, 100)

//Line
// c.beginPath();
// c.moveTo(50, 300);
// c.strokeStyle = "red"
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.stroke()

//arc

// for (var i = 0; i < 100; i++) {
//     var x = Math.random() * window.innerWidth
//     var y = Math.random() * window.innerHeight
//     c.beginPath()
//     c.strokeStyle = "blue"
//     c.arc(x, y, 30, Math.PI * 2, false)
//     c.stroke()
// }



function Circle(x, y, dx, dy, radius, fill) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius

    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false)
        c.fillStyle = fill
        c.fill()
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy

        this.draw()
    }

}

var circleArray = []

for (var i = 0; i < 250; i++) {
    var radius = 30
    var x = Math.random() * (innerWidth - radius * 2) + radius
    var y = Math.random() * (innerHeight - radius * 2) + radius
    var dx = (Math.random() - 0.5) *1.5
    var dy = (Math.random() - 0.5) *1.5
    var color = ""
    if (i < 100) { 
        color = "#ff3131"
    }
    else if(i >=100 && i<200){
        color = "#39ff14"
    }
    else{
        color = "#fff01f"
    }
    circleArray.push(new Circle(x, y, dx, dy, radius, color))
}

console.log(circleArray)

var circle = new Circle(200, 200, 3, 3, 30)




function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }

}

animate()