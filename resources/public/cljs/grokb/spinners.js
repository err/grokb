goog.provide('spinners');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
spinners.kw__GT_js = (function kw__GT_js(k){
var nom__13307 = cljs.core.name.call(null,k);
var parts__13308 = clojure.string.split.call(null,cljs.core.name.call(null,k),/-/);
var caps__13309 = cljs.core.map.call(null,clojure.string.capitalize,cljs.core.next.call(null,parts__13308));

return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,parts__13308),caps__13309);
});
/**
* creates new RGBColor.
* expects all values to be between 0 and 1
*/
spinners.rgb = (function() {
var rgb = null;
var rgb__13310 = (function (r,g,b){
return rgb.call(null,r,g,b,1);
});
var rgb__13311 = (function (r,g,b,a){
return (new goog.global['paper'].RGBColor(r,g,b,a));
});
rgb = function(r,g,b,a){
switch(arguments.length){
case  3 :
return rgb__13310.call(this,r,g,b);
case  4 :
return rgb__13311.call(this,r,g,b,a);
}
throw('Invalid arity: ' + arguments.length);
};
return rgb;
})()
;
/**
* creates new HSBColor
* expects h     in range [0 360]
* s,b,a in range [0 1]
*/
spinners.hsb = (function() {
var hsb = null;
var hsb__13313 = (function (h,s,b){
return hsb.call(null,h,s,b,1);
});
var hsb__13314 = (function (h,s,b,a){
return (new goog.global['paper'].HSBColor(h,s,b,a));
});
hsb = function(h,s,b,a){
switch(arguments.length){
case  3 :
return hsb__13313.call(this,h,s,b);
case  4 :
return hsb__13314.call(this,h,s,b,a);
}
throw('Invalid arity: ' + arguments.length);
};
return hsb;
})()
;
/**
* Return the element with the passed id.
*/
spinners.get_element = (function get_element(id){
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
/**
* Smooths a path by changing its segment handles
* without adding or removing segment points.
*/
spinners.smooth = (function smooth(path){
return path.smooth();
});
/**
* Smooths a path by analyzing its path.segments array
* and replacing it with a more optimal set of segments,
* reducing memory usage and speeding up drawing.
*/
spinners.simplify = (function simplify(path){
return path.simplify();
});
spinners.fill_color = (function fill_color(obj,color){
return obj.fillColor = color;
});
var blend_modes__13316 = cljs.core.set(["add","luminosity","color","multiply","negation","normal","screen","color-dodge","exclusion","overlay","saturation","soft-light","hard-light","subtract","hue","color-burn","difference","average","pin-light","lighten","darken"]);

/**
* Sets the blend-mode for the given object.
* Accepts keyword arguments.
* Usage:  (blend-mode my-circle :average)
* 
* Available Blend Modes:
* :normal, :multiply, :screen, :overlay,
* :soft-light, :hard-light, :color-dodge,
* :color-burn, :darken, :lighten,
* :difference, :exclusion,
* :hue, :saturation, :luminosity,
* :color, :add, :subtract,
* :average, :pin-light, :negation
*/
spinners.blend_mode = (function blend_mode(obj,mode){
var mode__13317 = cljs.core.name.call(null,mode);

var and__3574__auto____13318 = cljs.core.contains_QMARK_.call(null,blend_modes__13316,mode__13317);

if(cljs.core.truth_(and__3574__auto____13318))
{return obj.blendMode = mode__13317;
} else
{return and__3574__auto____13318;
}
});
spinners.path_STAR_ = (function path_STAR_(){
return (new goog.global['paper'].Path());
});
spinners.path = (function path(attrs,points){
var ks__13319 = cljs.core.map.call(null,spinners.kw__GT_js,cljs.core.keys.call(null,attrs));
var result__13320 = spinners.path_STAR_.call(null);

var G__13321__13322 = cljs.core.seq.call(null,points);

while(true){
if(cljs.core.truth_(G__13321__13322))
{var vec__13323__13324 = cljs.core.first.call(null,G__13321__13322);
var x__13325 = cljs.core.nth.call(null,vec__13323__13324,0,null);
var y__13326 = cljs.core.nth.call(null,vec__13323__13324,1,null);

result__13320.add(spinners.point.call(null,x__13325,y__13326));
{
var G__13327 = cljs.core.next.call(null,G__13321__13322);
G__13321__13322 = G__13327;
continue;
}
} else
{}
break;
}
return result__13320;
});
spinners.close_path = (function close_path(path){
return path.closed = true;
});
spinners.point = (function point(x,y){
return (new goog.global['paper'].Point(x,y));
});
/**
* expects two vector arguments.
*/
spinners.line = (function line(from,to){
var vec__13328__13330 = from;
var x1__13331 = cljs.core.nth.call(null,vec__13328__13330,0,null);
var y1__13332 = cljs.core.nth.call(null,vec__13328__13330,1,null);
var vec__13329__13333 = to;
var x2__13334 = cljs.core.nth.call(null,vec__13329__13333,0,null);
var y2__13335 = cljs.core.nth.call(null,vec__13329__13333,1,null);

return (new goog.global['paper'].Path.Line(spinners.point.call(null,x1__13331,y1__13332),spinners.point.call(null,x2__13334,y2__13335)));
});
spinners.circle = (function circle(x,y,r){
return (new goog.global['paper'].Path.Circle(spinners.point.call(null,x,y),r));
});
spinners.point_text = (function point_text(x,y){
return (new goog.global['paper'].PointText(spinners.point.call(null,x,y)));
});
/**
* creates a new Symbol.
* http://paperjs.org/reference/symbol
*/
spinners.make_symbol = (function make_symbol(path){
return (new goog.global['paper'].Symbol(path));
});
spinners.bounds = cljs.core.atom.call(null,cljs.core.Vector.fromArray([0,0]));
spinners.do_thing = (function do_thing(){
var canvas__13336 = spinners.get_element.call(null,"canvas0");

goog.global['paper'].setup(canvas__13336);
cljs.core.reset_BANG_.call(null,spinners.bounds,cljs.core.Vector.fromArray([goog.global['paper'].view.viewSize.width,goog.global['paper'].view.viewSize.height]));
var vec__13337__13338 = cljs.core.deref.call(null,spinners.bounds);
var w__13339 = cljs.core.nth.call(null,vec__13337__13338,0,null);
var h__13340 = cljs.core.nth.call(null,vec__13337__13338,1,null);
var p2__13341 = (new goog.global['paper'].Path());
var pts__13342 = cljs.core.map.call(null,(function (a){
return cljs.core.Vector.fromArray([a,1]);
}),cljs.core.range.call(null,0,w__13339,100));
var ___13349 = (function (){var G__13343__13344 = cljs.core.seq.call(null,pts__13342);

while(true){
if(cljs.core.truth_(G__13343__13344))
{var vec__13345__13346 = cljs.core.first.call(null,G__13343__13344);
var x__13347 = cljs.core.nth.call(null,vec__13345__13346,0,null);
var y__13348 = cljs.core.nth.call(null,vec__13345__13346,1,null);

p2__13341.add(spinners.point.call(null,x__13347,y__13348));
{
var G__13382 = cljs.core.next.call(null,G__13343__13344);
G__13343__13344 = G__13382;
continue;
}
} else
{return null;
}
break;
}
})();
var p3__13350 = spinners.path.call(null,cljs.core.ObjMap.fromObject(["﷐'stroke-color","﷐'stroke-width"],{"﷐'stroke-color":"blue","﷐'stroke-width":5}),cljs.core.map.call(null,(function (a){
return cljs.core.Vector.fromArray([a,1]);
}),cljs.core.range.call(null,0,800,100)));
var ___13351 = goog.global['console'].log(p3__13350);
var colr__13352 = spinners.rgb.call(null,.15,.3,0.5);
var cir__13353 = spinners.circle.call(null,0,0,15);
var ___13354 = spinners.fill_color.call(null,cir__13353,colr__13352);
var sym__13355 = spinners.make_symbol.call(null,cir__13353);
var ___13356 = cir__13353.remove();
var c1__13369 = cljs.core.doall.call(null,(function (){var iter__1819__auto____13368 = (function iter__13357(s__13358){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13358__13361 = s__13358;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13358__13361)))
{var x__13362 = cljs.core.first.call(null,s__13358__13361);

var iterys__1817__auto____13366 = ((function (s__13358__13361){
return (function iter__13359(s__13360){
return (new cljs.core.LazySeq(null,false,((function (s__13358__13361){
return (function (){
var s__13360__13363 = s__13360;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13360__13363)))
{var y__13364 = cljs.core.first.call(null,s__13360__13363);

return cljs.core.cons.call(null,(function (){var elt__13365 = sym__13355.place(spinners.point.call(null,x__13362,y__13364));

elt__13365.fillColor = spinners.rgb.call(null,.15,cljs.core._SLASH_.call(null,y__13364,h__13340),0.5);
return elt__13365.scale(cljs.core._PLUS_.call(null,0.15,cljs.core._STAR_.call(null,0.75,goog.global['Math'].sin(cljs.core._PLUS_.call(null,x__13362,cljs.core._STAR_.call(null,3,y__13364))))));
})(),iter__13359.call(null,cljs.core.rest.call(null,s__13360__13363)));
} else
{return null;
}
break;
}
});})(s__13358__13361))
));
});})(s__13358__13361))
;
var fs__1818__auto____13367 = cljs.core.seq.call(null,iterys__1817__auto____13366.call(null,cljs.core.range.call(null,15,h__13340,30)));

if(cljs.core.truth_(fs__1818__auto____13367))
{return cljs.core.concat.call(null,fs__1818__auto____13367,iter__13357.call(null,cljs.core.rest.call(null,s__13358__13361)));
} else
{{
var G__13383 = cljs.core.rest.call(null,s__13358__13361);
s__13358__13361 = G__13383;
continue;
}
}
} else
{return null;
}
break;
}
})));
});

return iter__1819__auto____13368.call(null,cljs.core.range.call(null,15,w__13339,30));
})());

p2__13341.strokeColor = "blue";
p2__13341.strokeWidth = 9;
spinners.smooth.call(null,p2__13341);
p2__13341.visible = false;
p3__13350.strokeColor = "red";
p3__13350.strokeWidth = 9;
spinners.smooth.call(null,p3__13350);
p3__13350.visible = false;
return goog.global['paper'].view.onFrame = (function (event){
var G__13370__13371 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,(function (i,s){
return cljs.core.Vector.fromArray([goog.global['Math'].sin(cljs.core._PLUS_.call(null,i,cljs.core._STAR_.call(null,3,event.time))),s]);
}),p2__13341.segments));

while(true){
if(cljs.core.truth_(G__13370__13371))
{var vec__13372__13373 = cljs.core.first.call(null,G__13370__13371);
var h__13374 = cljs.core.nth.call(null,vec__13372__13373,0,null);
var s__13375 = cljs.core.nth.call(null,vec__13372__13373,1,null);

s__13375.point.y = cljs.core._PLUS_.call(null,100,cljs.core._STAR_.call(null,50,h__13374));
{
var G__13384 = cljs.core.next.call(null,G__13370__13371);
G__13370__13371 = G__13384;
continue;
}
} else
{}
break;
}
var G__13376__13377 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,(function (i,s){
return cljs.core.Vector.fromArray([goog.global['Math'].sin(cljs.core._PLUS_.call(null,i,cljs.core._STAR_.call(null,3,event.time))),s]);
}),p3__13350.segments));

while(true){
if(cljs.core.truth_(G__13376__13377))
{var vec__13378__13379 = cljs.core.first.call(null,G__13376__13377);
var h__13380 = cljs.core.nth.call(null,vec__13378__13379,0,null);
var s__13381 = cljs.core.nth.call(null,vec__13378__13379,1,null);

s__13381.point.y = cljs.core._PLUS_.call(null,200,cljs.core._STAR_.call(null,50,h__13380));
{
var G__13385 = cljs.core.next.call(null,G__13376__13377);
G__13376__13377 = G__13385;
continue;
}
} else
{return null;
}
break;
}
});
});
goog.global['window'].onload = spinners.do_thing;
