// => Object in TypeScript:
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x, 'Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
//    Here is our Point Class now 
//    lets declare a variable of this type.
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
