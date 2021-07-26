// => Types in TypeScript:
var a; // this is number type
var b; // this is boolean type
var c; // this is string type
var d; // this is any type
var e = [1, 3, 4, 5, 6, 7]; // this is array type
var f = [1, 'name', true, 3.4]; // this is also a any array type;
// Enum type;
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var BackgroundColor = Color.Red;
