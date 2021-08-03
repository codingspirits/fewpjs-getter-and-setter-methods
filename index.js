/* // Normal
class Circle{
    constructor(radius){
        this.radius = radius
    }
    diameter(){
        console.log(2*this.radius)
    } 
    circumference(){
        return 2*this.radius * Math.pi
    }
    area() {
        return this.radius ^ 2 * Math.pi
    }
}

let circle = new Circle(2)
console.log(circle.radius)
circle.diameter()
 */

const pi = Math.PI
//Getter and Setter
//However, we can't assign area a new value. To make area fully act like a real property, we create both get and set methods for it. We can now 'set' the pseudo-property, area, and modify this.sideLength based on a reverse of the calculation we used in get:
class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return 2*this.radius
    } 
    set diameter(diameter){
        this.radius = diameter / 2
    }
    get circumference(){
        return this.radius * 2 * pi
    }
    set circumference(circumference){
        this.radius = circumference / 2 / pi
    }
    get area() {
        return (this.radius)*(this.radius) * pi
    }
    set area(area) {
        this.radius = Math.sqrt(area)/2
    }

    
}
let circle = new Circle(5)
circle.diameter
circle.circumference
circle.area

