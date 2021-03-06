// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('om_basic.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),true,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19580__delegate = function (x){
if(cljs.core.truth_(om_basic.core.on_js_reload)){
return cljs.core.apply.call(null,om_basic.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'om_basic.core/on-js-reload' is missing");
}
};
var G__19580 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19581__i = 0, G__19581__a = new Array(arguments.length -  0);
while (G__19581__i < G__19581__a.length) {G__19581__a[G__19581__i] = arguments[G__19581__i + 0]; ++G__19581__i;}
  x = new cljs.core.IndexedSeq(G__19581__a,0);
} 
return G__19580__delegate.call(this,x);};
G__19580.cljs$lang$maxFixedArity = 0;
G__19580.cljs$lang$applyTo = (function (arglist__19582){
var x = cljs.core.seq(arglist__19582);
return G__19580__delegate(x);
});
G__19580.cljs$core$IFn$_invoke$arity$variadic = G__19580__delegate;
return G__19580;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1449089737028