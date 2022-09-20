function Branch(start, end) {
    this.start = start;
    this.end = end;
    this.finished = false;

    this.show = function() {
        if ((this.start.x % 3) != 0) {
            stroke("blue");
        }
        else {stroke("red")}
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }

    this.branchA = function() {
        var dir = p5.Vector.sub(this.end, this.start);
        dir.rotate(PI/4); //45 degree
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);     
        var b = new Branch(this.end, newEnd);
        return b
    }

    this.branchB = function() {
        var dir = p5.Vector.sub(this.end, this.start);
        dir.rotate(-PI/4); //45 degree
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);     
        var b = new Branch(this.end, newEnd);
        return b
    }
}