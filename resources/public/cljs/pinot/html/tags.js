goog.provide('pinot.html.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
pinot.html.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__3584__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__3580__3581 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__3582 = cljs.core.nth.call(null,vec__3580__3581,0,null);
var body__3583 = cljs.core.nthnext.call(null,vec__3580__3581,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__3583))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__3582,cljs.core.merge.call(null,cljs.core.first.call(null,body__3583),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__3583));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__3582,cljs.core.first.call(null,args),body__3583);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__3584 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3584__delegate.call(this, args);
};
G__3584.cljs$lang$maxFixedArity = 0;
G__3584.cljs$lang$applyTo = (function (arglist__3585){
var args = cljs.core.seq( arglist__3585 );;
return G__3584__delegate.call(this, args);
});
return G__3584;
})()
;
});
var func__2065__auto____3591 = (function() { 
var G__3592__delegate = function (p__3586,content){
var vec__3587__3588 = p__3586;
var method__3589 = cljs.core.nth.call(null,vec__3587__3588,0,null);
var action__3590 = cljs.core.nth.call(null,vec__3587__3588,1,null);

return cljs.core.Vector.fromArray(["﷐'form",cljs.core.ObjMap.fromObject(["﷐'method","﷐'action"],{"﷐'method":cljs.core.name.call(null,method__3589),"﷐'action":action__3590}),content]);
};
var G__3592 = function (p__3586,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3592__delegate.call(this, p__3586, content);
};
G__3592.cljs$lang$maxFixedArity = 1;
G__3592.cljs$lang$applyTo = (function (arglist__3593){
var p__3586 = cljs.core.first(arglist__3593);
var content = cljs.core.rest(arglist__3593);
return G__3592__delegate.call(this, p__3586, content);
});
return G__3592;
})()
;

pinot.html.tags.form_to = pinot.html.tags.add_optional_attrs.call(null,func__2065__auto____3591);
var func__2065__auto____3597 = (function (tpe,nme,value){
return cljs.core.Vector.fromArray(["﷐'input",cljs.core.ObjMap.fromObject(["﷐'type","﷐'name","﷐'id","﷐'value"],{"﷐'type":tpe,"﷐'name":(function (){var or__3576__auto____3594 = nme;

if(cljs.core.truth_(or__3576__auto____3594))
{return or__3576__auto____3594;
} else
{return null;
}
})(),"﷐'id":(function (){var or__3576__auto____3595 = nme;

if(cljs.core.truth_(or__3576__auto____3595))
{return or__3576__auto____3595;
} else
{return null;
}
})(),"﷐'value":(function (){var or__3576__auto____3596 = value;

if(cljs.core.truth_(or__3576__auto____3596))
{return or__3576__auto____3596;
} else
{return null;
}
})()})]);
});

pinot.html.tags.input_field = pinot.html.tags.add_optional_attrs.call(null,func__2065__auto____3597);
var func__2065__auto____3598 = (function (nme,value){
return pinot.html.tags.input_field.call(null,"text",nme,value);
});

pinot.html.tags.text_field = pinot.html.tags.add_optional_attrs.call(null,func__2065__auto____3598);
var func__2065__auto____3599 = (function (nme,value){
return pinot.html.tags.input_field.call(null,"password",nme,value);
});

pinot.html.tags.password_field = pinot.html.tags.add_optional_attrs.call(null,func__2065__auto____3599);
var func__2065__auto____3600 = (function (for$,text){
return cljs.core.Vector.fromArray(["﷐'label",cljs.core.ObjMap.fromObject(["﷐'for"],{"﷐'for":for$}),text]);
});

pinot.html.tags.label = pinot.html.tags.add_optional_attrs.call(null,func__2065__auto____3600);
var func__2065__auto____3601 = (function (val){
return pinot.html.tags.input_field.call(null,"submit",null,val);
});

pinot.html.tags.submit_button = pinot.html.tags.add_optional_attrs.call(null,func__2065__auto____3601);
var func__2065__auto____3602 = (function() { 
var G__3603__delegate = function (url,content){
return cljs.core.Vector.fromArray(["﷐'a",cljs.core.ObjMap.fromObject(["﷐'href"],{"﷐'href":url}),content]);
};
var G__3603 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3603__delegate.call(this, url, content);
};
G__3603.cljs$lang$maxFixedArity = 1;
G__3603.cljs$lang$applyTo = (function (arglist__3604){
var url = cljs.core.first(arglist__3604);
var content = cljs.core.rest(arglist__3604);
return G__3603__delegate.call(this, url, content);
});
return G__3603;
})()
;

pinot.html.tags.link_to = pinot.html.tags.add_optional_attrs.call(null,func__2065__auto____3602);
