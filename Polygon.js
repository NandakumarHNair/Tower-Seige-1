class Polygon{
    /*constructor(x, y, sides, radius) {
        this.body = Bodies.polygon(x, y, sides, radius);
        this.sides = sides;
        this.radius = radius;
        this.image = loadImage("images/polygon.png");
        World.add(world, this.body);*/

        constructor(x, y, width, height) {
          this.body = Bodies.rectangle(x, y, width, height);
          this.width = width;
          this.height = height;
          this.image = loadImage("images/polygon.png");
          World.add(world, this.body);
      }

      display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        //drawpolygon(pos.x, pos.y, this.radius, this.sides);
      }

      /*drawpolygon(x, y, radius, npoints) {
        let angle = TWO_PI / npoints;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius;
          let sy = y + sin(a) * radius;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }*/
}