goog.provide('pinot.html');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.dom.query');
goog.require('goog.dom.forms');
goog.require('clojure.string');
goog.require('pinot.util.clj');
goog.require('pinot.util.js');
/**
* @param {...*} var_args
*/
pinot.html.css = (function() { 
var css__delegate = function (elem,k,p__3465){
var vec__3466__3467 = p__3465;
var v__3468 = cljs.core.nth.call(null,vec__3466__3467,0,null);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,k)))
{var G__3469__3470 = cljs.core.seq.call(null,k);

while(true){
if(cljs.core.truth_(G__3469__3470))
{var vec__3471__3472 = cljs.core.first.call(null,G__3469__3470);
var prop__3473 = cljs.core.nth.call(null,vec__3471__3472,0,null);
var value__3474 = cljs.core.nth.call(null,vec__3471__3472,1,null);

css.call(null,elem,prop__3473,value__3474);
{
var G__3478 = cljs.core.next.call(null,G__3469__3470);
G__3469__3470 = G__3478;
continue;
}
} else
{return null;
}
break;
}
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,v__3468)))
{return goog.style.getStyle.call(null,elem,cljs.core.name.call(null,k));
} else
{if(cljs.core.truth_("﷐'else"))
{var G__3475__3476 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__3475__3476))
{var el__3477 = cljs.core.first.call(null,G__3475__3476);

goog.style.setStyle.call(null,el__3477,cljs.core.name.call(null,k),cljs.core.name.call(null,v__3468));
{
var G__3479 = cljs.core.next.call(null,G__3475__3476);
G__3475__3476 = G__3479;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}
}
};
var css = function (elem,k,var_args){
var p__3465 = null;
if (goog.isDef(var_args)) {
  p__3465 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return css__delegate.call(this, elem, k, p__3465);
};
css.cljs$lang$maxFixedArity = 2;
css.cljs$lang$applyTo = (function (arglist__3480){
var elem = cljs.core.first(arglist__3480);
var k = cljs.core.first(cljs.core.next(arglist__3480));
var p__3465 = cljs.core.rest(cljs.core.next(arglist__3480));
return css__delegate.call(this, elem, k, p__3465);
});
return css;
})()
;
pinot.html.attr = (function attr(elem,attrs){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return (elem[cljs.core.name.call(null,attrs)]);
} else
{var G__3481__3482 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__3481__3482))
{var el__3483 = cljs.core.first.call(null,G__3481__3482);

goog.dom.setProperties.call(null,el__3483,pinot.util.js.map__GT_js.call(null,attrs));
{
var G__3484 = cljs.core.next.call(null,G__3481__3482);
G__3481__3482 = G__3484;
continue;
}
} else
{return null;
}
break;
}
}
});
/**
* @param {...*} var_args
*/
pinot.html.val = (function() { 
var val__delegate = function (elem,p__3485){
var vec__3486__3487 = p__3485;
var v__3488 = cljs.core.nth.call(null,vec__3486__3487,0,null);

var elem__3489 = (cljs.core.truth_(cljs.core.seq.call(null,elem))?cljs.core.first.call(null,elem):elem);

if(cljs.core.truth_(v__3488))
{return goog.dom.forms.setValue.call(null,elem__3489,v__3488);
} else
{return goog.dom.forms.getValue.call(null,elem__3489);
}
};
var val = function (elem,var_args){
var p__3485 = null;
if (goog.isDef(var_args)) {
  p__3485 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, elem, p__3485);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__3490){
var elem = cljs.core.first(arglist__3490);
var p__3485 = cljs.core.rest(arglist__3490);
return val__delegate.call(this, elem, p__3485);
});
return val;
})()
;
pinot.html.elem_id = cljs.core.atom.call(null,0);
pinot.html.as_content = (function as_content(parent,content){
var G__3491__3492 = cljs.core.seq.call(null,content);

while(true){
if(cljs.core.truth_(G__3491__3492))
{var c__3493 = cljs.core.first.call(null,G__3491__3492);

var child__3494 = (cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c__3493))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__3493))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__3493))?goog.dom.createTextNode.call(null,c__3493):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__3493))?pinot.html.elem_factory.call(null,c__3493):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__3493))?as_content.call(null,parent,c__3493):(cljs.core.truth_(c__3493.nodeName)?c__3493:null))))));

if(cljs.core.truth_(child__3494))
{goog.dom.appendChild.call(null,parent,child__3494);
} else
{}
{
var G__3495 = cljs.core.next.call(null,G__3491__3492);
G__3491__3492 = G__3495;
continue;
}
} else
{return null;
}
break;
}
});
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
pinot.html.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
pinot.html.normalize_element = (function normalize_element(p__3496){
var vec__3497__3498 = p__3496;
var tag__3499 = cljs.core.nth.call(null,vec__3497__3498,0,null);
var content__3500 = cljs.core.nthnext.call(null,vec__3497__3498,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3576__auto____3501 = cljs.core.keyword_QMARK_.call(null,tag__3499);

if(cljs.core.truth_(or__3576__auto____3501))
{return or__3576__auto____3501;
} else
{var or__3576__auto____3502 = cljs.core.symbol_QMARK_.call(null,tag__3499);

if(cljs.core.truth_(or__3576__auto____3502))
{return or__3576__auto____3502;
} else
{return cljs.core.string_QMARK_.call(null,tag__3499);
}
}
})())))
{throw cljs.core.str.call(null,tag__3499," is not a valid tag name.");
} else
{}
var vec__3503__3504 = cljs.core.re_matches.call(null,pinot.html.re_tag,cljs.core.name.call(null,tag__3499));
var ___3505 = cljs.core.nth.call(null,vec__3503__3504,0,null);
var tag__3506 = cljs.core.nth.call(null,vec__3503__3504,1,null);
var id__3507 = cljs.core.nth.call(null,vec__3503__3504,2,null);
var class$__3508 = cljs.core.nth.call(null,vec__3503__3504,3,null);
var tag_attrs__3510 = cljs.core.ObjMap.fromObject(["﷐'id","﷐'class"],{"﷐'id":(function (){var or__3576__auto____3509 = id__3507;

if(cljs.core.truth_(or__3576__auto____3509))
{return or__3576__auto____3509;
} else
{return null;
}
})(),"﷐'class":(cljs.core.truth_(class$__3508)?clojure.string.replace.call(null,class$__3508,/\./," "):null)});
var map_attrs__3511 = cljs.core.first.call(null,content__3500);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__3511)))
{return cljs.core.Vector.fromArray([tag__3506,cljs.core.merge.call(null,tag_attrs__3510,map_attrs__3511),cljs.core.next.call(null,content__3500)]);
} else
{return cljs.core.Vector.fromArray([tag__3506,tag_attrs__3510,content__3500]);
}
});
pinot.html.parse_content = (function parse_content(elem,content){
var attrs__3512 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__3512)))
{pinot.html.attr.call(null,elem,attrs__3512);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
pinot.html.elem_factory = (function elem_factory(tag_def){
var vec__3513__3514 = pinot.html.normalize_element.call(null,tag_def);
var tag__3515 = cljs.core.nth.call(null,vec__3513__3514,0,null);
var attrs__3516 = cljs.core.nth.call(null,vec__3513__3514,1,null);
var content__3517 = cljs.core.nth.call(null,vec__3513__3514,2,null);
var elem__3518 = goog.dom.createElement.call(null,tag__3515,pinot.util.js.map__GT_js.call(null,attrs__3516));

pinot.html.attr.call(null,elem__3518,cljs.core.ObjMap.fromObject(["﷐'pinotId"],{"﷐'pinotId":cljs.core.swap_BANG_.call(null,pinot.html.elem_id,cljs.core.inc)}));
pinot.html.as_content.call(null,elem__3518,content__3517);
return elem__3518;
});
/**
* @param {...*} var_args
*/
pinot.html.html = (function() { 
var html__delegate = function (tags){
return cljs.core.map.call(null,pinot.html.elem_factory,tags);
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__3519){
var tags = cljs.core.seq( arglist__3519 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
pinot.html.dom_clone = (function dom_clone(elem){
var neue__3520 = elem.cloneNode(true);

pinot.html.attr.call(null,neue__3520,cljs.core.ObjMap.fromObject(["﷐'pinotId"],{"﷐'pinotId":elem.pinotId}));
return neue__3520;
});
pinot.html.append_to = (function append_to(elem,html){
var G__3521__3523 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__3521__3523))
{var el__3524 = cljs.core.first.call(null,G__3521__3523);

var G__3522__3525 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,html));

while(true){
if(cljs.core.truth_(G__3522__3525))
{var tag__3526 = cljs.core.first.call(null,G__3522__3525);

goog.dom.appendChild.call(null,el__3524,pinot.html.dom_clone.call(null,tag__3526));
{
var G__3527 = cljs.core.next.call(null,G__3522__3525);
G__3522__3525 = G__3527;
continue;
}
} else
{}
break;
}
{
var G__3528 = cljs.core.next.call(null,G__3521__3523);
G__3521__3523 = G__3528;
continue;
}
} else
{return null;
}
break;
}
});
pinot.html.unappend = (function unappend(elem){
var G__3529__3530 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__3529__3530))
{var elem__3531 = cljs.core.first.call(null,G__3529__3530);

goog.dom.removeNode.call(null,elem__3531);
{
var G__3532 = cljs.core.next.call(null,G__3529__3530);
G__3529__3530 = G__3532;
continue;
}
} else
{return null;
}
break;
}
});
pinot.html.dom_find = (function dom_find(q){
var results__3533 = goog.dom.query.call(null,q);
var len__3534 = results__3533.length;

var iter__172__auto____3539 = (function iter__3535(s__3536){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3536__3537 = s__3536;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3536__3537)))
{var x__3538 = cljs.core.first.call(null,s__3536__3537);

return cljs.core.cons.call(null,(results__3533[x__3538]),iter__3535.call(null,cljs.core.rest.call(null,s__3536__3537)));
} else
{return null;
}
break;
}
})));
});

return iter__172__auto____3539.call(null,cljs.core.range.call(null,0,len__3534));
});
