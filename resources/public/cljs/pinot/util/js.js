goog.provide('pinot.util.js');
goog.require('cljs.core');
pinot.util.js.map__GT_js = (function map__GT_js(m){
var out__3540 = cljs.core.js_obj.call(null);

var G__3541__3542 = cljs.core.seq.call(null,m);

while(true){
if(cljs.core.truth_(G__3541__3542))
{var vec__3543__3544 = cljs.core.first.call(null,G__3541__3542);
var k__3545 = cljs.core.nth.call(null,vec__3543__3544,0,null);
var v__3546 = cljs.core.nth.call(null,vec__3543__3544,1,null);

(out__3540[cljs.core.name.call(null,k__3545)] = v__3546);
{
var G__3547 = cljs.core.next.call(null,G__3541__3542);
G__3541__3542 = G__3547;
continue;
}
} else
{}
break;
}
return out__3540;
});
pinot.util.js.log = (function log(text){
return console.log(text);
});
