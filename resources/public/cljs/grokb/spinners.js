goog.provide('spinners');
goog.require('cljs.core');
goog.require('goog.dom');
/**
* Return the element with the passed id.
*/
spinners.get_element = (function get_element(id){
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
var canvas__6085 = spinners.get_element.call(null,"canvas0");

goog.global.paper.setup(canvas__6085);
var path__6086 = goog.global.paper.Path();
var begn__6087 = goog.global.paper.Point(100,100);

path__6086.strokeColor = "black";
path__6086.moveTo(begn__6087);
path__6086.lineT0(spinners.start.add(cljs.core.Vector.fromArray([200,-50])));
goog.global.paper.view.draw();
