goog.provide('raph');
goog.require('cljs.core');
raph.width = 600;
raph.height = 500;
raph.paper = (new goog.global['Raphael'](10,50,raph.width,raph.height));
raph.hexs = cljs.core.Vector.fromArray(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]);
raph.scanimate = (function scanimate(elt){
return elt.animate({scale: [2.5, 2.5]},250,"elastic");
});
raph.cs = (function (){var dx__13388 = 25;
var dy__13389 = 25;

var cseq__13403 = cljs.core.doall.call(null,(function (){var iter__1819__auto____13402 = (function iter__13390(s__13391){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13391__13394 = s__13391;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13391__13394)))
{var x__13395 = cljs.core.first.call(null,s__13391__13394);

var iterys__1817__auto____13400 = ((function (s__13391__13394){
return (function iter__13392(s__13393){
return (new cljs.core.LazySeq(null,false,((function (s__13391__13394){
return (function (){
var s__13393__13396 = s__13393;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13393__13396)))
{var y__13397 = cljs.core.first.call(null,s__13393__13396);

var obj__13398 = raph.paper.circle(x__13395,y__13397,Math.floor.call(null,cljs.core._SLASH_.call(null,dx__13388,4)),Math.floor.call(null,cljs.core._SLASH_.call(null,dy__13389,4)));
var color__13399 = cljs.core.apply.call(null,cljs.core.str,"hsb(",cljs.core._SLASH_.call(null,x__13395,raph.width),",",cljs.core._SLASH_.call(null,y__13397,raph.height),",",1,")");

return cljs.core.cons.call(null,(function (){obj__13398.attr("fill",color__13399);
obj__13398.attr("stroke",color__13399);
return obj__13398;
})(),iter__13392.call(null,cljs.core.rest.call(null,s__13393__13396)));
} else
{return null;
}
break;
}
});})(s__13391__13394))
));
});})(s__13391__13394))
;
var fs__1818__auto____13401 = cljs.core.seq.call(null,iterys__1817__auto____13400.call(null,cljs.core.range.call(null,0,raph.height,cljs.core._STAR_.call(null,0.5,dy__13389))));

if(cljs.core.truth_(fs__1818__auto____13401))
{return cljs.core.concat.call(null,fs__1818__auto____13401,iter__13390.call(null,cljs.core.rest.call(null,s__13391__13394)));
} else
{{
var G__13407 = cljs.core.rest.call(null,s__13391__13394);
s__13391__13394 = G__13407;
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

return iter__1819__auto____13402.call(null,cljs.core.range.call(null,0,raph.width,cljs.core._STAR_.call(null,0.5,dx__13388)));
})());

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (c){
var tr__13404 = c.transform();
var fi__13405 = c.attr("fill");
var st__13406 = c.attr("stroke");

return c.hover((function (){
c.toFront();
c.attr("fill","#0ee");
c.attr("stroke","#0ee");
return c.animate({transform: "s2 2"},750,">");
}),(function (){
c.attr("fill",fi__13405);
c.attr("stroke",st__13406);
c.animate({transform: "s1 1"},4000,"elastic");
return c.transform(tr__13404);
}));
}),cseq__13403));
})();
