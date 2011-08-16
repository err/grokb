//////////////////////////////////////////////////////////////////////
// Values

tool.minDistance = 10;

var values = {
    curviness: 0.5,
    distance: tool.minDistance,
    offset: 10,
    mouseOffset: true
};

//////////////////////////////////////////////////////////////////////
// Mouse handling

var path;
function onMouseDown(event) {
    path = new Path();
    path.strokeColor = '#000000';
}

var mul = 1;
function onMouseDrag(event) {
    var step = event.delta.rotate(90 * mul);
    
    if (!values.mouseOffset)
	step.length = values.offset;
    
    var segment = new Segment(event.point + step);
    segment.handleIn = -event.delta * values.curviness;
    segment.handleOut = event.delta * values.curviness;
    path.add(segment);
    mul *= -1;
}