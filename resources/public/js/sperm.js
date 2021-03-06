var point = view.center;

var colors = [];
var cycles = 4;
for (var i = 0, l = 60; i < l; i++) {
    var brightness = 1 - (i / l) * 1.5;
    var hue = i / l * cycles * 360;
    var color = new HSBColor(hue, 1, brightness);
    colors.push(color);
}

var path = new Path.Rectangle(view.bounds);
var gradient = new Gradient(colors, 'radial');
var radius = Math.max(view.size.width, view.size.height) * 0.75;
var gradientColor = new GradientColor(gradient, point, point + [radius, 0]);
path.fillColor = gradientColor;

var mouseDown = false,
mousePoint = view.center;

function onMouseDown(event) {
    mouseDown = true;
    mousePoint = event.point;
}

function onMouseDrag(event) {
    mousePoint = event.point;
}

function onMouseUp(event) {
    vector.length = 10;
    mouseDown = false;
}

var grow = false;
var vector = new Point(150, 0);

function onFrame() {
    for (var i = 0, l = gradient.stops.length; i < l; i++)
	gradient.stops[i].color.hue -= 20;
    if (grow && vector.length > 300) {
	grow = false;
    } else if (!grow && vector.length < 75) {
	grow = true;
    }
    if (mouseDown) {
	point = point + (mousePoint - point) / 10;
    } else {
	vector.length += (grow ? 1 : -1);
	vector.angle += 5;
    }
    gradientColor.hilite = mouseDown ? point : point + vector;
}

function onResize(event) {
    point = view.center;
    path.bounds = view.bounds;
    var gradientColor = path.fillColor;
    gradientColor.origin = point;
    var radius = Math.max(view.size.width, view.size.height) * 0.75;
    gradientColor.destination = point + [radius, 0];
}