goog.provide('attempt');
goog.require('cljs.core');
goog.require('pinot.html');
goog.require('pinot.html.tags');
goog.require('pinot.events');
attempt.todos = cljs.core.atom.call(null,cljs.core.HashMap.fromArrays([1,2,3],["Get milk","Pay bills","Do stuff"]));
attempt.add_todo = (function add_todo(text){
var neue_key__5412 = cljs.core.inc.call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,cljs.core.deref.call(null,attempt.todos))));

cljs.core.swap_BANG_.call(null,attempt.todos,cljs.core.assoc,neue_key__5412,text);
return cljs.core.Vector.fromArray([neue_key__5412,text]);
});
attempt.remove_todo = (function remove_todo(id){
return cljs.core.swap_BANG_.call(null,attempt.todos,cljs.core.dissoc,id);
});
attempt.todo_item = (function todo_item(p__5413){
var vec__5414__5415 = p__5413;
var id__5416 = cljs.core.nth.call(null,vec__5414__5415,0,null);
var item__5417 = cljs.core.nth.call(null,vec__5414__5415,1,null);

return pinot.html.html.call(null,cljs.core.Vector.fromArray(["﷐'li",pinot.html.tags.link_to.call(null,cljs.core.ObjMap.fromObject(["﷐'class","﷐'id"],{"﷐'class":"remove","﷐'id":id__5416}),"#",item__5417)]));
});
attempt.todo_form = (function todo_form(){
return pinot.html.html.call(null,pinot.html.tags.form_to.call(null,cljs.core.ObjMap.fromObject(["﷐'id"],{"﷐'id":"todoForm"}),cljs.core.Vector.fromArray(["﷐'post","/foo"]),pinot.html.tags.label.call(null,"todoText","Todo: "),pinot.html.tags.text_field.call(null,"todoText"),pinot.html.tags.submit_button.call(null,cljs.core.ObjMap.fromObject(["﷐'class"],{"﷐'class":"submit"}),"add todo")));
});
pinot.html.append_to.call(null,pinot.html.dom_find.call(null,"body"),pinot.html.html.call(null,cljs.core.Vector.fromArray(["﷐'div",attempt.todo_form.call(null),cljs.core.Vector.fromArray(["﷐'ul",cljs.core.map.call(null,attempt.todo_item,cljs.core.deref.call(null,attempt.todos))])])));
pinot.events.on.call(null,pinot.html.dom_find.call(null,"#todoForm"),"﷐'submit",(function (me,e){
var text__5418 = pinot.html.val.call(null,pinot.html.dom_find.call(null,"#todoText"));
var neue__5419 = attempt.add_todo.call(null,text__5418);

pinot.html.append_to.call(null,pinot.html.dom_find.call(null,"ul"),attempt.todo_item.call(null,neue__5419));
return pinot.events.prevent.call(null,e);
}));
pinot.events.on.call(null,pinot.html.dom_find.call(null,"a.remove"),"﷐'click",(function (me,e){
var id__5420 = pinot.html.attr.call(null,me,"﷐'id");

attempt.remove_todo.call(null,id__5420);
pinot.html.unappend.call(null,me);
return pinot.events.prevent.call(null,e);
}));
