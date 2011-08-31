goog.provide('mac');
goog.require('cljs.core');
mac.defmacro.call(null,mac.style_BANG_,"Sets the properties of a paper.js item.\n  (style! my-circle :fill-color ",mac.black," :stroke-color ",mac.red,")\n  => (do \n       (set! (.fillColor my-circle) ",mac.black,")\n       (set! (.strokeColor my-circle) ",mac.red,"))",cljs.core.Vector.fromArray([mac.obj,mac._AMPERSAND_,mac.kvs]),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,"﷑'do"),cljs.core.map.call(null,(function (p__3872){
var vec__3873__3874 = p__3872;
var k__3875 = cljs.core.nth.call(null,vec__3873__3874,0,null);
var v__3876 = cljs.core.nth.call(null,vec__3873__3874,1,null);

return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,"﷑'set!"),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,cljs.core.symbol.call(null,cljs.core.str.call(null,".",mac.kw__GT_js.call(null,k__3875)))),cljs.core.list.call(null,mac.obj)))),cljs.core.list.call(null,v__3876)));
}),cljs.core.partition.call(null,2,mac.kvs)))));
