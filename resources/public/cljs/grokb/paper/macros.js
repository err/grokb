goog.provide('grokb.paper.macros');
goog.require('cljs.core');
grokb.paper.macros.defmacro.call(null,grokb.paper.macros.style_BANG_,"Sets the properties of a paper.js item.\n  (style! my-circle :fill-color ",grokb.paper.macros.black," :stroke-color ",grokb.paper.macros.red,")\n  => (do \n       (set! (.fillColor my-circle) ",grokb.paper.macros.black,")\n       (set! (.strokeColor my-circle) ",grokb.paper.macros.red,"))",cljs.core.Vector.fromArray([grokb.paper.macros.obj,grokb.paper.macros._AMPERSAND_,grokb.paper.macros.kvs]),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,"﷑'do"),cljs.core.map.call(null,(function (p__3853){
var vec__3854__3855 = p__3853;
var k__3856 = cljs.core.nth.call(null,vec__3854__3855,0,null);
var v__3857 = cljs.core.nth.call(null,vec__3854__3855,1,null);

return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,"﷑'set!"),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,cljs.core.symbol.call(null,cljs.core.str.call(null,".",grokb.paper.macros.kw__GT_js.call(null,k__3856)))),cljs.core.list.call(null,grokb.paper.macros.obj)))),cljs.core.list.call(null,v__3857)));
}),cljs.core.partition.call(null,2,grokb.paper.macros.kvs)))));
