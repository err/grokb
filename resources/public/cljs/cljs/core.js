goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____2098 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____2098))
{return or__3576__auto____2098;
} else
{var or__3576__auto____2099 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____2099))
{return or__3576__auto____2099;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return goog.global['Error'].call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2100 = coll;

if(cljs.core.truth_(and__3574__auto____2100))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____2100;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____2101 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2101))
{return or__3576__auto____2101;
} else
{var or__3576__auto____2102 = (_count["_"]);

if(cljs.core.truth_(or__3576__auto____2102))
{return or__3576__auto____2102;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2103 = coll;

if(cljs.core.truth_(and__3574__auto____2103))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____2103;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____2104 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2104))
{return or__3576__auto____2104;
} else
{var or__3576__auto____2105 = (_empty["_"]);

if(cljs.core.truth_(or__3576__auto____2105))
{return or__3576__auto____2105;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____2106 = coll;

if(cljs.core.truth_(and__3574__auto____2106))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____2106;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____2107 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2107))
{return or__3576__auto____2107;
} else
{var or__3576__auto____2108 = (_conj["_"]);

if(cljs.core.truth_(or__3576__auto____2108))
{return or__3576__auto____2108;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2115 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____2109 = coll;

if(cljs.core.truth_(and__3574__auto____2109))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2109;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____2110 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2110))
{return or__3576__auto____2110;
} else
{var or__3576__auto____2111 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2111))
{return or__3576__auto____2111;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2116 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2112 = coll;

if(cljs.core.truth_(and__3574__auto____2112))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2112;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____2113 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2113))
{return or__3576__auto____2113;
} else
{var or__3576__auto____2114 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2114))
{return or__3576__auto____2114;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2115.call(this,coll,n);
case  3 :
return _nth__2116.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2118 = coll;

if(cljs.core.truth_(and__3574__auto____2118))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____2118;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____2119 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2119))
{return or__3576__auto____2119;
} else
{var or__3576__auto____2120 = (_first["_"]);

if(cljs.core.truth_(or__3576__auto____2120))
{return or__3576__auto____2120;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2121 = coll;

if(cljs.core.truth_(and__3574__auto____2121))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____2121;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____2122 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2122))
{return or__3576__auto____2122;
} else
{var or__3576__auto____2123 = (_rest["_"]);

if(cljs.core.truth_(or__3576__auto____2123))
{return or__3576__auto____2123;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2130 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____2124 = o;

if(cljs.core.truth_(and__3574__auto____2124))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2124;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____2125 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2125))
{return or__3576__auto____2125;
} else
{var or__3576__auto____2126 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2126))
{return or__3576__auto____2126;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2131 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2127 = o;

if(cljs.core.truth_(and__3574__auto____2127))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2127;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____2128 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2128))
{return or__3576__auto____2128;
} else
{var or__3576__auto____2129 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2129))
{return or__3576__auto____2129;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2130.call(this,o,k);
case  3 :
return _lookup__2131.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2133 = coll;

if(cljs.core.truth_(and__3574__auto____2133))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2133;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2134 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2134))
{return or__3576__auto____2134;
} else
{var or__3576__auto____2135 = (_contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2135))
{return or__3576__auto____2135;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2136 = coll;

if(cljs.core.truth_(and__3574__auto____2136))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2136;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2137 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2137))
{return or__3576__auto____2137;
} else
{var or__3576__auto____2138 = (_assoc["_"]);

if(cljs.core.truth_(or__3576__auto____2138))
{return or__3576__auto____2138;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2139 = coll;

if(cljs.core.truth_(and__3574__auto____2139))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2139;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2140 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2140))
{return or__3576__auto____2140;
} else
{var or__3576__auto____2141 = (_dissoc["_"]);

if(cljs.core.truth_(or__3576__auto____2141))
{return or__3576__auto____2141;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2142 = coll;

if(cljs.core.truth_(and__3574__auto____2142))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2142;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2143 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2143))
{return or__3576__auto____2143;
} else
{var or__3576__auto____2144 = (_disjoin["_"]);

if(cljs.core.truth_(or__3576__auto____2144))
{return or__3576__auto____2144;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2145 = coll;

if(cljs.core.truth_(and__3574__auto____2145))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2145;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2146 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2146))
{return or__3576__auto____2146;
} else
{var or__3576__auto____2147 = (_peek["_"]);

if(cljs.core.truth_(or__3576__auto____2147))
{return or__3576__auto____2147;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2148 = coll;

if(cljs.core.truth_(and__3574__auto____2148))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2148;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2149 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2149))
{return or__3576__auto____2149;
} else
{var or__3576__auto____2150 = (_pop["_"]);

if(cljs.core.truth_(or__3576__auto____2150))
{return or__3576__auto____2150;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2151 = coll;

if(cljs.core.truth_(and__3574__auto____2151))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2151;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2152 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2152))
{return or__3576__auto____2152;
} else
{var or__3576__auto____2153 = (_assoc_n["_"]);

if(cljs.core.truth_(or__3576__auto____2153))
{return or__3576__auto____2153;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2154 = o;

if(cljs.core.truth_(and__3574__auto____2154))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2154;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2155 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2155))
{return or__3576__auto____2155;
} else
{var or__3576__auto____2156 = (_deref["_"]);

if(cljs.core.truth_(or__3576__auto____2156))
{return or__3576__auto____2156;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2157 = o;

if(cljs.core.truth_(and__3574__auto____2157))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2157;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2158 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2158))
{return or__3576__auto____2158;
} else
{var or__3576__auto____2159 = (_deref_with_timeout["_"]);

if(cljs.core.truth_(or__3576__auto____2159))
{return or__3576__auto____2159;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2160 = o;

if(cljs.core.truth_(and__3574__auto____2160))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2160;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2161 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2161))
{return or__3576__auto____2161;
} else
{var or__3576__auto____2162 = (_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2162))
{return or__3576__auto____2162;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2163 = o;

if(cljs.core.truth_(and__3574__auto____2163))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2163;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2164 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2164))
{return or__3576__auto____2164;
} else
{var or__3576__auto____2165 = (_with_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2165))
{return or__3576__auto____2165;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2172 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2166 = coll;

if(cljs.core.truth_(and__3574__auto____2166))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2166;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2167 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2167))
{return or__3576__auto____2167;
} else
{var or__3576__auto____2168 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2168))
{return or__3576__auto____2168;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2173 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2169 = coll;

if(cljs.core.truth_(and__3574__auto____2169))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2169;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2170 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2170))
{return or__3576__auto____2170;
} else
{var or__3576__auto____2171 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2171))
{return or__3576__auto____2171;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2172.call(this,coll,f);
case  3 :
return _reduce__2173.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2175 = o;

if(cljs.core.truth_(and__3574__auto____2175))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2175;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2176 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2176))
{return or__3576__auto____2176;
} else
{var or__3576__auto____2177 = (_equiv["_"]);

if(cljs.core.truth_(or__3576__auto____2177))
{return or__3576__auto____2177;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2178 = o;

if(cljs.core.truth_(and__3574__auto____2178))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2178;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2179 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2179))
{return or__3576__auto____2179;
} else
{var or__3576__auto____2180 = (_hash["_"]);

if(cljs.core.truth_(or__3576__auto____2180))
{return or__3576__auto____2180;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2181 = o;

if(cljs.core.truth_(and__3574__auto____2181))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2181;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2182 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2182))
{return or__3576__auto____2182;
} else
{var or__3576__auto____2183 = (_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2183))
{return or__3576__auto____2183;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2184 = o;

if(cljs.core.truth_(and__3574__auto____2184))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2184;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2185 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2185))
{return or__3576__auto____2185;
} else
{var or__3576__auto____2186 = (_pr_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2186))
{return or__3576__auto____2186;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2187 = d;

if(cljs.core.truth_(and__3574__auto____2187))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2187;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2188 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2188))
{return or__3576__auto____2188;
} else
{var or__3576__auto____2189 = (_realized_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2189))
{return or__3576__auto____2189;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2190 = null;
var G__2190__2191 = (function (_,n){
return null;
});
var G__2190__2192 = (function (_,n,not_found){
return not_found;
});
G__2190 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2190__2191.call(this,_,n);
case  3 :
return G__2190__2192.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2190;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2194 = null;
var G__2194__2195 = (function (_,f){
return f.call(null);
});
var G__2194__2196 = (function (_,f,start){
return start;
});
G__2194 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2194__2195.call(this,_,f);
case  3 :
return G__2194__2196.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2194;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2198 = null;
var G__2198__2199 = (function (o,k){
return null;
});
var G__2198__2200 = (function (o,k,not_found){
return not_found;
});
G__2198 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2198__2199.call(this,o,k);
case  3 :
return G__2198__2200.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2198;
})()
);
goog.global['Date'].prototype.cljs$core$IEquiv$ = true;
goog.global['Date'].prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2208 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2202 = cljs.core._nth.call(null,cicoll,0);
var n__2203 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2203,cljs.core._count.call(null,cicoll))))
{{
var G__2212 = f.call(null,val__2202,cljs.core._nth.call(null,cicoll,n__2203));
var G__2213 = cljs.core.inc.call(null,n__2203);
val__2202 = G__2212;
n__2203 = G__2213;
continue;
}
} else
{return val__2202;
}
break;
}
}
});
var ci_reduce__2209 = (function (cicoll,f,val){
var val__2204 = val;
var n__2205 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2205,cljs.core._count.call(null,cicoll))))
{{
var G__2214 = f.call(null,val__2204,cljs.core._nth.call(null,cicoll,n__2205));
var G__2215 = cljs.core.inc.call(null,n__2205);
val__2204 = G__2214;
n__2205 = G__2215;
continue;
}
} else
{return val__2204;
}
break;
}
});
var ci_reduce__2210 = (function (cicoll,f,val,idx){
var val__2206 = val;
var n__2207 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2207,cljs.core._count.call(null,cicoll))))
{{
var G__2216 = f.call(null,val__2206,cljs.core._nth.call(null,cicoll,n__2207));
var G__2217 = cljs.core.inc.call(null,n__2207);
val__2206 = G__2216;
n__2207 = G__2217;
continue;
}
} else
{return val__2206;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2208.call(this,cicoll,f);
case  3 :
return ci_reduce__2209.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2210.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2224 = null;
var G__2224__2225 = (function (_,f){
var this__2218 = this;
return cljs.core.ci_reduce.call(null,this__2218.a,f,(this__2218.a[this__2218.i]),cljs.core.inc.call(null,this__2218.i));
});
var G__2224__2226 = (function (_,f,start){
var this__2219 = this;
return cljs.core.ci_reduce.call(null,this__2219.a,f,start,this__2219.i);
});
G__2224 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2224__2225.call(this,_,f);
case  3 :
return G__2224__2226.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2224;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2220 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2221 = this;
return (this__2221.a[this__2221.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2222 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2222.i),this__2222.a.length)))
{return (new cljs.core.IndexedSeq(this__2222.a,cljs.core.inc.call(null,this__2222.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2223 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2228 = null;
var G__2228__2229 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2228__2230 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2228 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2228__2229.call(this,array,f);
case  3 :
return G__2228__2230.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2228;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2232 = null;
var G__2232__2233 = (function (array,k){
return (array[k]);
});
var G__2232__2234 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2232 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2232__2233.call(this,array,k);
case  3 :
return G__2232__2234.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2232;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2236 = null;
var G__2236__2237 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2236__2238 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2236 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2236__2237.call(this,array,n);
case  3 :
return G__2236__2238.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2236;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____2240 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2240))
{var s__2241 = temp__3726__auto____2240;

return cljs.core._first.call(null,s__2241);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2242 = cljs.core.next.call(null,s);
s = G__2242;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2243 = cljs.core.seq.call(null,x);
var n__2244 = 0;

while(true){
if(cljs.core.truth_(s__2243))
{{
var G__2245 = cljs.core.next.call(null,s__2243);
var G__2246 = cljs.core.inc.call(null,n__2244);
s__2243 = G__2245;
n__2244 = G__2246;
continue;
}
} else
{return n__2244;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2247 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2248 = (function() { 
var G__2250__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2251 = conj.call(null,coll,x);
var G__2252 = cljs.core.first.call(null,xs);
var G__2253 = cljs.core.next.call(null,xs);
coll = G__2251;
x = G__2252;
xs = G__2253;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2250 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2250__delegate.call(this, coll, x, xs);
};
G__2250.cljs$lang$maxFixedArity = 2;
G__2250.cljs$lang$applyTo = (function (arglist__2254){
var coll = cljs.core.first(arglist__2254);
var x = cljs.core.first(cljs.core.next(arglist__2254));
var xs = cljs.core.rest(cljs.core.next(arglist__2254));
return G__2250__delegate.call(this, coll, x, xs);
});
return G__2250;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2247.call(this,coll,x);
default:
return conj__2248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2248.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2255 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2256 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2255.call(this,coll,n);
case  3 :
return nth__2256.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2258 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2259 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2258.call(this,o,k);
case  3 :
return get__2259.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2262 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2263 = (function() { 
var G__2265__delegate = function (coll,k,v,kvs){
while(true){
var ret__2261 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2266 = ret__2261;
var G__2267 = cljs.core.first.call(null,kvs);
var G__2268 = cljs.core.second.call(null,kvs);
var G__2269 = cljs.core.nnext.call(null,kvs);
coll = G__2266;
k = G__2267;
v = G__2268;
kvs = G__2269;
continue;
}
} else
{return ret__2261;
}
break;
}
};
var G__2265 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2265__delegate.call(this, coll, k, v, kvs);
};
G__2265.cljs$lang$maxFixedArity = 3;
G__2265.cljs$lang$applyTo = (function (arglist__2270){
var coll = cljs.core.first(arglist__2270);
var k = cljs.core.first(cljs.core.next(arglist__2270));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2270)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2270)));
return G__2265__delegate.call(this, coll, k, v, kvs);
});
return G__2265;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2262.call(this,coll,k,v);
default:
return assoc__2263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2263.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2272 = (function (coll){
return coll;
});
var dissoc__2273 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2274 = (function() { 
var G__2276__delegate = function (coll,k,ks){
while(true){
var ret__2271 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2277 = ret__2271;
var G__2278 = cljs.core.first.call(null,ks);
var G__2279 = cljs.core.next.call(null,ks);
coll = G__2277;
k = G__2278;
ks = G__2279;
continue;
}
} else
{return ret__2271;
}
break;
}
};
var G__2276 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2276__delegate.call(this, coll, k, ks);
};
G__2276.cljs$lang$maxFixedArity = 2;
G__2276.cljs$lang$applyTo = (function (arglist__2280){
var coll = cljs.core.first(arglist__2280);
var k = cljs.core.first(cljs.core.next(arglist__2280));
var ks = cljs.core.rest(cljs.core.next(arglist__2280));
return G__2276__delegate.call(this, coll, k, ks);
});
return G__2276;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2272.call(this,coll);
case  2 :
return dissoc__2273.call(this,coll,k);
default:
return dissoc__2274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2274.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__118__auto____2281 = o;

if(cljs.core.truth_((function (){var and__3574__auto____2282 = x__118__auto____2281;

if(cljs.core.truth_(and__3574__auto____2282))
{return x__118__auto____2281.cljs$core$IMeta$;
} else
{return and__3574__auto____2282;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__118__auto____2281);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2284 = (function (coll){
return coll;
});
var disj__2285 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2286 = (function() { 
var G__2288__delegate = function (coll,k,ks){
while(true){
var ret__2283 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2289 = ret__2283;
var G__2290 = cljs.core.first.call(null,ks);
var G__2291 = cljs.core.next.call(null,ks);
coll = G__2289;
k = G__2290;
ks = G__2291;
continue;
}
} else
{return ret__2283;
}
break;
}
};
var G__2288 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2288__delegate.call(this, coll, k, ks);
};
G__2288.cljs$lang$maxFixedArity = 2;
G__2288.cljs$lang$applyTo = (function (arglist__2292){
var coll = cljs.core.first(arglist__2292);
var k = cljs.core.first(cljs.core.next(arglist__2292));
var ks = cljs.core.rest(cljs.core.next(arglist__2292));
return G__2288__delegate.call(this, coll, k, ks);
});
return G__2288;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2284.call(this,coll);
case  2 :
return disj__2285.call(this,coll,k);
default:
return disj__2286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2286.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__118__auto____2293 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2294 = x__118__auto____2293;

if(cljs.core.truth_(and__3574__auto____2294))
{return x__118__auto____2293.cljs$core$ICollection$;
} else
{return and__3574__auto____2294;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__118__auto____2293);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__118__auto____2295 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2296 = x__118__auto____2295;

if(cljs.core.truth_(and__3574__auto____2296))
{return x__118__auto____2295.cljs$core$ISet$;
} else
{return and__3574__auto____2296;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__118__auto____2295);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__118__auto____2297 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2298 = x__118__auto____2297;

if(cljs.core.truth_(and__3574__auto____2298))
{return x__118__auto____2297.cljs$core$IAssociative$;
} else
{return and__3574__auto____2298;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__118__auto____2297);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__118__auto____2299 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2300 = x__118__auto____2299;

if(cljs.core.truth_(and__3574__auto____2300))
{return x__118__auto____2299.cljs$core$ISequential$;
} else
{return and__3574__auto____2300;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__118__auto____2299);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__118__auto____2301 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2302 = x__118__auto____2301;

if(cljs.core.truth_(and__3574__auto____2302))
{return x__118__auto____2301.cljs$core$ICounted$;
} else
{return and__3574__auto____2302;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__118__auto____2301);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__118__auto____2303 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2304 = x__118__auto____2303;

if(cljs.core.truth_(and__3574__auto____2304))
{return x__118__auto____2303.cljs$core$IMap$;
} else
{return and__3574__auto____2304;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__118__auto____2303);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__118__auto____2305 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2306 = x__118__auto____2305;

if(cljs.core.truth_(and__3574__auto____2306))
{return x__118__auto____2305.cljs$core$IVector$;
} else
{return and__3574__auto____2306;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__118__auto____2305);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2307 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2307.push(key);
}));
return keys__2307;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__118__auto____2308 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2309 = x__118__auto____2308;

if(cljs.core.truth_(and__3574__auto____2309))
{return x__118__auto____2308.cljs$core$ISeq$;
} else
{return and__3574__auto____2309;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__118__auto____2308);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____2310 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2310))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2311 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2311))
{return or__3576__auto____2311;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2310;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2312 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2312))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2312;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2313 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2313))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2313;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____2314 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2314))
{return (n == n.toFixed());
} else
{return and__3574__auto____2314;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2315 = coll;

if(cljs.core.truth_(and__3574__auto____2315))
{var and__3574__auto____2316 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2316))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2316;
}
} else
{return and__3574__auto____2315;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2321 = (function (x){
return true;
});
var distinct_QMARK___2322 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2323 = (function() { 
var G__2325__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2317 = cljs.core.set([y,x]);
var xs__2318 = more;

while(true){
var x__2319 = cljs.core.first.call(null,xs__2318);
var etc__2320 = cljs.core.next.call(null,xs__2318);

if(cljs.core.truth_(xs__2318))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2317,x__2319)))
{return false;
} else
{{
var G__2326 = cljs.core.conj.call(null,s__2317,x__2319);
var G__2327 = etc__2320;
s__2317 = G__2326;
xs__2318 = G__2327;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2325 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2325__delegate.call(this, x, y, more);
};
G__2325.cljs$lang$maxFixedArity = 2;
G__2325.cljs$lang$applyTo = (function (arglist__2328){
var x = cljs.core.first(arglist__2328);
var y = cljs.core.first(cljs.core.next(arglist__2328));
var more = cljs.core.rest(cljs.core.next(arglist__2328));
return G__2325__delegate.call(this, x, y, more);
});
return G__2325;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2321.call(this,x);
case  2 :
return distinct_QMARK___2322.call(this,x,y);
default:
return distinct_QMARK___2323.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2323.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2329 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2329)))
{return r__2329;
} else
{if(cljs.core.truth_(r__2329))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2331 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2332 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2330 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2330,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2330);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2331.call(this,comp);
case  2 :
return sort__2332.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2334 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2335 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2334.call(this,keyfn,comp);
case  3 :
return sort_by__2335.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2337 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2338 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2337.call(this,f,val);
case  3 :
return reduce__2338.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2344 = (function (f,coll){
var temp__3723__auto____2340 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2340))
{var s__2341 = temp__3723__auto____2340;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2341),cljs.core.next.call(null,s__2341));
} else
{return f.call(null);
}
});
var seq_reduce__2345 = (function (f,val,coll){
var val__2342 = val;
var coll__2343 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2343))
{{
var G__2347 = f.call(null,val__2342,cljs.core.first.call(null,coll__2343));
var G__2348 = cljs.core.next.call(null,coll__2343);
val__2342 = G__2347;
coll__2343 = G__2348;
continue;
}
} else
{return val__2342;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2344.call(this,f,val);
case  3 :
return seq_reduce__2345.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2349 = null;
var G__2349__2350 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2349__2351 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2349 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2349__2350.call(this,coll,f);
case  3 :
return G__2349__2351.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2349;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2353 = (function (){
return 0;
});
var _PLUS___2354 = (function (x){
return x;
});
var _PLUS___2355 = (function (x,y){
return (x + y);
});
var _PLUS___2356 = (function() { 
var G__2358__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2358 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2358__delegate.call(this, x, y, more);
};
G__2358.cljs$lang$maxFixedArity = 2;
G__2358.cljs$lang$applyTo = (function (arglist__2359){
var x = cljs.core.first(arglist__2359);
var y = cljs.core.first(cljs.core.next(arglist__2359));
var more = cljs.core.rest(cljs.core.next(arglist__2359));
return G__2358__delegate.call(this, x, y, more);
});
return G__2358;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2353.call(this);
case  1 :
return _PLUS___2354.call(this,x);
case  2 :
return _PLUS___2355.call(this,x,y);
default:
return _PLUS___2356.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2356.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2360 = (function (x){
return (- x);
});
var ___2361 = (function (x,y){
return (x - y);
});
var ___2362 = (function() { 
var G__2364__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2364 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2364__delegate.call(this, x, y, more);
};
G__2364.cljs$lang$maxFixedArity = 2;
G__2364.cljs$lang$applyTo = (function (arglist__2365){
var x = cljs.core.first(arglist__2365);
var y = cljs.core.first(cljs.core.next(arglist__2365));
var more = cljs.core.rest(cljs.core.next(arglist__2365));
return G__2364__delegate.call(this, x, y, more);
});
return G__2364;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2360.call(this,x);
case  2 :
return ___2361.call(this,x,y);
default:
return ___2362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2362.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2366 = (function (){
return 1;
});
var _STAR___2367 = (function (x){
return x;
});
var _STAR___2368 = (function (x,y){
return (x * y);
});
var _STAR___2369 = (function() { 
var G__2371__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2371 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2371__delegate.call(this, x, y, more);
};
G__2371.cljs$lang$maxFixedArity = 2;
G__2371.cljs$lang$applyTo = (function (arglist__2372){
var x = cljs.core.first(arglist__2372);
var y = cljs.core.first(cljs.core.next(arglist__2372));
var more = cljs.core.rest(cljs.core.next(arglist__2372));
return G__2371__delegate.call(this, x, y, more);
});
return G__2371;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2366.call(this);
case  1 :
return _STAR___2367.call(this,x);
case  2 :
return _STAR___2368.call(this,x,y);
default:
return _STAR___2369.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2369.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2373 = (function (x){
return (1 / x);
});
var _SLASH___2374 = (function (x,y){
return (x / y);
});
var _SLASH___2375 = (function() { 
var G__2377__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2377 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2377__delegate.call(this, x, y, more);
};
G__2377.cljs$lang$maxFixedArity = 2;
G__2377.cljs$lang$applyTo = (function (arglist__2378){
var x = cljs.core.first(arglist__2378);
var y = cljs.core.first(cljs.core.next(arglist__2378));
var more = cljs.core.rest(cljs.core.next(arglist__2378));
return G__2377__delegate.call(this, x, y, more);
});
return G__2377;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2373.call(this,x);
case  2 :
return _SLASH___2374.call(this,x,y);
default:
return _SLASH___2375.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2375.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2379 = (function (x){
return true;
});
var _LT___2380 = (function (x,y){
return (x < y);
});
var _LT___2381 = (function() { 
var G__2383__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2384 = y;
var G__2385 = cljs.core.first.call(null,more);
var G__2386 = cljs.core.next.call(null,more);
x = G__2384;
y = G__2385;
more = G__2386;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2383 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2383__delegate.call(this, x, y, more);
};
G__2383.cljs$lang$maxFixedArity = 2;
G__2383.cljs$lang$applyTo = (function (arglist__2387){
var x = cljs.core.first(arglist__2387);
var y = cljs.core.first(cljs.core.next(arglist__2387));
var more = cljs.core.rest(cljs.core.next(arglist__2387));
return G__2383__delegate.call(this, x, y, more);
});
return G__2383;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2379.call(this,x);
case  2 :
return _LT___2380.call(this,x,y);
default:
return _LT___2381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2381.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2388 = (function (x){
return true;
});
var _LT__EQ___2389 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2390 = (function() { 
var G__2392__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2393 = y;
var G__2394 = cljs.core.first.call(null,more);
var G__2395 = cljs.core.next.call(null,more);
x = G__2393;
y = G__2394;
more = G__2395;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2392 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2392__delegate.call(this, x, y, more);
};
G__2392.cljs$lang$maxFixedArity = 2;
G__2392.cljs$lang$applyTo = (function (arglist__2396){
var x = cljs.core.first(arglist__2396);
var y = cljs.core.first(cljs.core.next(arglist__2396));
var more = cljs.core.rest(cljs.core.next(arglist__2396));
return G__2392__delegate.call(this, x, y, more);
});
return G__2392;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2388.call(this,x);
case  2 :
return _LT__EQ___2389.call(this,x,y);
default:
return _LT__EQ___2390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2390.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2397 = (function (x){
return true;
});
var _GT___2398 = (function (x,y){
return (x > y);
});
var _GT___2399 = (function() { 
var G__2401__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2402 = y;
var G__2403 = cljs.core.first.call(null,more);
var G__2404 = cljs.core.next.call(null,more);
x = G__2402;
y = G__2403;
more = G__2404;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2401 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2401__delegate.call(this, x, y, more);
};
G__2401.cljs$lang$maxFixedArity = 2;
G__2401.cljs$lang$applyTo = (function (arglist__2405){
var x = cljs.core.first(arglist__2405);
var y = cljs.core.first(cljs.core.next(arglist__2405));
var more = cljs.core.rest(cljs.core.next(arglist__2405));
return G__2401__delegate.call(this, x, y, more);
});
return G__2401;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2397.call(this,x);
case  2 :
return _GT___2398.call(this,x,y);
default:
return _GT___2399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2399.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2406 = (function (x){
return true;
});
var _GT__EQ___2407 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2408 = (function() { 
var G__2410__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2411 = y;
var G__2412 = cljs.core.first.call(null,more);
var G__2413 = cljs.core.next.call(null,more);
x = G__2411;
y = G__2412;
more = G__2413;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2410 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2410__delegate.call(this, x, y, more);
};
G__2410.cljs$lang$maxFixedArity = 2;
G__2410.cljs$lang$applyTo = (function (arglist__2414){
var x = cljs.core.first(arglist__2414);
var y = cljs.core.first(cljs.core.next(arglist__2414));
var more = cljs.core.rest(cljs.core.next(arglist__2414));
return G__2410__delegate.call(this, x, y, more);
});
return G__2410;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2406.call(this,x);
case  2 :
return _GT__EQ___2407.call(this,x,y);
default:
return _GT__EQ___2408.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2408.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2415 = (function (x){
return x;
});
var max__2416 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2417 = (function() { 
var G__2419__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2419 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2419__delegate.call(this, x, y, more);
};
G__2419.cljs$lang$maxFixedArity = 2;
G__2419.cljs$lang$applyTo = (function (arglist__2420){
var x = cljs.core.first(arglist__2420);
var y = cljs.core.first(cljs.core.next(arglist__2420));
var more = cljs.core.rest(cljs.core.next(arglist__2420));
return G__2419__delegate.call(this, x, y, more);
});
return G__2419;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2415.call(this,x);
case  2 :
return max__2416.call(this,x,y);
default:
return max__2417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2417.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2421 = (function (x){
return x;
});
var min__2422 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2423 = (function() { 
var G__2425__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2425 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2425__delegate.call(this, x, y, more);
};
G__2425.cljs$lang$maxFixedArity = 2;
G__2425.cljs$lang$applyTo = (function (arglist__2426){
var x = cljs.core.first(arglist__2426);
var y = cljs.core.first(cljs.core.next(arglist__2426));
var more = cljs.core.rest(cljs.core.next(arglist__2426));
return G__2425__delegate.call(this, x, y, more);
});
return G__2425;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2421.call(this,x);
case  2 :
return min__2422.call(this,x,y);
default:
return min__2423.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2423.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2427 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2427) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2428 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2428));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2429 = (function (){
return Math.random.call(null);
});
var rand__2430 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2429.call(this);
case  1 :
return rand__2430.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2432 = (function (x){
return true;
});
var _EQ__EQ___2433 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2434 = (function() { 
var G__2436__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2437 = y;
var G__2438 = cljs.core.first.call(null,more);
var G__2439 = cljs.core.next.call(null,more);
x = G__2437;
y = G__2438;
more = G__2439;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2436 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2436__delegate.call(this, x, y, more);
};
G__2436.cljs$lang$maxFixedArity = 2;
G__2436.cljs$lang$applyTo = (function (arglist__2440){
var x = cljs.core.first(arglist__2440);
var y = cljs.core.first(cljs.core.next(arglist__2440));
var more = cljs.core.rest(cljs.core.next(arglist__2440));
return G__2436__delegate.call(this, x, y, more);
});
return G__2436;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2432.call(this,x);
case  2 :
return _EQ__EQ___2433.call(this,x,y);
default:
return _EQ__EQ___2434.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2434.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2441 = n;
var xs__2442 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2443 = xs__2442;

if(cljs.core.truth_(and__3574__auto____2443))
{return cljs.core.pos_QMARK_.call(null,n__2441);
} else
{return and__3574__auto____2443;
}
})()))
{{
var G__2444 = cljs.core.dec.call(null,n__2441);
var G__2445 = cljs.core.next.call(null,xs__2442);
n__2441 = G__2444;
xs__2442 = G__2445;
continue;
}
} else
{return xs__2442;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2450 = null;
var G__2450__2451 = (function (coll,n){
var temp__3723__auto____2446 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2446))
{var xs__2447 = temp__3723__auto____2446;

return cljs.core.first.call(null,xs__2447);
} else
{throw "Index out of bounds";
}
});
var G__2450__2452 = (function (coll,n,not_found){
var temp__3723__auto____2448 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2448))
{var xs__2449 = temp__3723__auto____2448;

return cljs.core.first.call(null,xs__2449);
} else
{return not_found;
}
});
G__2450 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2450__2451.call(this,coll,n);
case  3 :
return G__2450__2452.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2450;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2454 = (function (){
return "";
});
var str__2455 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2456 = (function() { 
var G__2458__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2459 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2460 = cljs.core.next.call(null,more);
sb = G__2459;
more = G__2460;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2458 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2458__delegate.call(this, x, ys);
};
G__2458.cljs$lang$maxFixedArity = 1;
G__2458.cljs$lang$applyTo = (function (arglist__2461){
var x = cljs.core.first(arglist__2461);
var ys = cljs.core.rest(arglist__2461);
return G__2458__delegate.call(this, x, ys);
});
return G__2458;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2454.call(this);
case  1 :
return str__2455.call(this,x);
default:
return str__2456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2456.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2462 = (function (s,start){
return s.substring(start);
});
var subs__2463 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2462.call(this,s,start);
case  3 :
return subs__2463.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2465 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2466 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2465.call(this,ns);
case  2 :
return symbol__2466.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2468 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2469 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2468.call(this,ns);
case  2 :
return keyword__2469.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2471 = cljs.core.seq.call(null,x);
var ys__2472 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2471)))
{return cljs.core.nil_QMARK_.call(null,ys__2472);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2472)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2471),cljs.core.first.call(null,ys__2472))))
{{
var G__2473 = cljs.core.next.call(null,xs__2471);
var G__2474 = cljs.core.next.call(null,ys__2472);
xs__2471 = G__2473;
ys__2472 = G__2474;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2475_SHARP_,p2__2476_SHARP_){
return cljs.core.hash_combine.call(null,p1__2475_SHARP_,cljs.core.hash.call(null,p2__2476_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2477 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2478 = this;
return (new cljs.core.List(this__2478.meta,o,coll,cljs.core.inc.call(null,this__2478.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2479 = this;
return this__2479.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2480 = this;
return this__2480.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2481 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2482 = this;
return this__2482.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2483 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2484 = this;
return (new cljs.core.List(meta,this__2484.first,this__2484.rest,this__2484.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2485 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2486 = this;
return this__2486.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2487 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2488 = this;
return this__2488.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2489 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2490 = this;
return (new cljs.core.List(this__2490.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2491 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2492 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2493 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2494 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2495 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2496 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2497 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2498 = this;
return this__2498.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2499 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2500 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2501){
var items = cljs.core.seq( arglist__2501 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2502 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2503 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2504 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2505 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2505.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2506 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2507 = this;
return this__2507.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2508 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2508.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2508.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2509 = this;
return this__2509.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2510 = this;
return (new cljs.core.Cons(meta,this__2510.first,this__2510.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2511 = null;
var G__2511__2512 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2511__2513 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2511 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2511__2512.call(this,string,f);
case  3 :
return G__2511__2513.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2511;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2515 = null;
var G__2515__2516 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2515__2517 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2515 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2515__2516.call(this,string,k);
case  3 :
return G__2515__2517.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2515;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2519 = null;
var G__2519__2520 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2519__2521 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2519 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2519__2520.call(this,string,n);
case  3 :
return G__2519__2521.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2519;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
goog.global['String']['prototype']['call'] = (function() {
var G__2523 = null;
var G__2523__2524 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2523__2525 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2523 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2523__2524.call(this,_,coll);
case  3 :
return G__2523__2525.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2523;
})()
;
goog.global['String']['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2527 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2527;
} else
{lazy_seq.x = x__2527.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2528 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2529 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2530 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2531 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2531.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2532 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2533 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2534 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2535 = this;
return this__2535.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2536 = this;
return (new cljs.core.LazySeq(meta,this__2536.realized,this__2536.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2537 = cljs.core.array.call(null);

var s__2538 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2538)))
{ary__2537.push(cljs.core.first.call(null,s__2538));
{
var G__2539 = cljs.core.next.call(null,s__2538);
s__2538 = G__2539;
continue;
}
} else
{return ary__2537;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2540 = s;
var i__2541 = n;
var sum__2542 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2543 = cljs.core.pos_QMARK_.call(null,i__2541);

if(cljs.core.truth_(and__3574__auto____2543))
{return cljs.core.seq.call(null,s__2540);
} else
{return and__3574__auto____2543;
}
})()))
{{
var G__2544 = cljs.core.next.call(null,s__2540);
var G__2545 = cljs.core.dec.call(null,i__2541);
var G__2546 = cljs.core.inc.call(null,sum__2542);
s__2540 = G__2544;
i__2541 = G__2545;
sum__2542 = G__2546;
continue;
}
} else
{return sum__2542;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2550 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2551 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2552 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2547 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2547))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2547),concat.call(null,cljs.core.rest.call(null,s__2547),y));
} else
{return y;
}
})));
});
var concat__2553 = (function() { 
var G__2555__delegate = function (x,y,zs){
var cat__2549 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2548 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2548))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2548),cat.call(null,cljs.core.rest.call(null,xys__2548),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2549.call(null,concat.call(null,x,y),zs);
};
var G__2555 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2555__delegate.call(this, x, y, zs);
};
G__2555.cljs$lang$maxFixedArity = 2;
G__2555.cljs$lang$applyTo = (function (arglist__2556){
var x = cljs.core.first(arglist__2556);
var y = cljs.core.first(cljs.core.next(arglist__2556));
var zs = cljs.core.rest(cljs.core.next(arglist__2556));
return G__2555__delegate.call(this, x, y, zs);
});
return G__2555;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2550.call(this);
case  1 :
return concat__2551.call(this,x);
case  2 :
return concat__2552.call(this,x,y);
default:
return concat__2553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2553.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2557 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2558 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2559 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2560 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2561 = (function() { 
var G__2563__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2563 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2563__delegate.call(this, a, b, c, d, more);
};
G__2563.cljs$lang$maxFixedArity = 4;
G__2563.cljs$lang$applyTo = (function (arglist__2564){
var a = cljs.core.first(arglist__2564);
var b = cljs.core.first(cljs.core.next(arglist__2564));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2564)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2564))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2564))));
return G__2563__delegate.call(this, a, b, c, d, more);
});
return G__2563;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2557.call(this,a);
case  2 :
return list_STAR___2558.call(this,a,b);
case  3 :
return list_STAR___2559.call(this,a,b,c);
case  4 :
return list_STAR___2560.call(this,a,b,c,d);
default:
return list_STAR___2561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2561.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2574 = (function (f,args){
var fixed_arity__2565 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2565)),fixed_arity__2565)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2575 = (function (f,x,args){
var arglist__2566 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2567 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2566,fixed_arity__2567),fixed_arity__2567)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2566));
} else
{return f.cljs$lang$applyTo(arglist__2566);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2566));
}
});
var apply__2576 = (function (f,x,y,args){
var arglist__2568 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2569 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2568,fixed_arity__2569),fixed_arity__2569)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2568));
} else
{return f.cljs$lang$applyTo(arglist__2568);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2568));
}
});
var apply__2577 = (function (f,x,y,z,args){
var arglist__2570 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2571 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2570,fixed_arity__2571),fixed_arity__2571)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2570));
} else
{return f.cljs$lang$applyTo(arglist__2570);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2570));
}
});
var apply__2578 = (function() { 
var G__2580__delegate = function (f,a,b,c,d,args){
var arglist__2572 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2573 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2572,fixed_arity__2573),fixed_arity__2573)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2572));
} else
{return f.cljs$lang$applyTo(arglist__2572);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2572));
}
};
var G__2580 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2580__delegate.call(this, f, a, b, c, d, args);
};
G__2580.cljs$lang$maxFixedArity = 5;
G__2580.cljs$lang$applyTo = (function (arglist__2581){
var f = cljs.core.first(arglist__2581);
var a = cljs.core.first(cljs.core.next(arglist__2581));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2581)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2581))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2581)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2581)))));
return G__2580__delegate.call(this, f, a, b, c, d, args);
});
return G__2580;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2574.call(this,f,a);
case  3 :
return apply__2575.call(this,f,a,b);
case  4 :
return apply__2576.call(this,f,a,b,c);
case  5 :
return apply__2577.call(this,f,a,b,c,d);
default:
return apply__2578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2578.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2582){
var obj = cljs.core.first(arglist__2582);
var f = cljs.core.first(cljs.core.next(arglist__2582));
var args = cljs.core.rest(cljs.core.next(arglist__2582));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2583 = (function (x){
return false;
});
var not_EQ___2584 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2585 = (function() { 
var G__2587__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2587 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2587__delegate.call(this, x, y, more);
};
G__2587.cljs$lang$maxFixedArity = 2;
G__2587.cljs$lang$applyTo = (function (arglist__2588){
var x = cljs.core.first(arglist__2588);
var y = cljs.core.first(cljs.core.next(arglist__2588));
var more = cljs.core.rest(cljs.core.next(arglist__2588));
return G__2587__delegate.call(this, x, y, more);
});
return G__2587;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2583.call(this,x);
case  2 :
return not_EQ___2584.call(this,x,y);
default:
return not_EQ___2585.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2585.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2589 = pred;
var G__2590 = cljs.core.next.call(null,coll);
pred = G__2589;
coll = G__2590;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____2591 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2591))
{return or__3576__auto____2591;
} else
{{
var G__2592 = pred;
var G__2593 = cljs.core.next.call(null,coll);
pred = G__2592;
coll = G__2593;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2594 = null;
var G__2594__2595 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2594__2596 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2594__2597 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2594__2598 = (function() { 
var G__2600__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2600 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2600__delegate.call(this, x, y, zs);
};
G__2600.cljs$lang$maxFixedArity = 2;
G__2600.cljs$lang$applyTo = (function (arglist__2601){
var x = cljs.core.first(arglist__2601);
var y = cljs.core.first(cljs.core.next(arglist__2601));
var zs = cljs.core.rest(cljs.core.next(arglist__2601));
return G__2600__delegate.call(this, x, y, zs);
});
return G__2600;
})()
;
G__2594 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2594__2595.call(this);
case  1 :
return G__2594__2596.call(this,x);
case  2 :
return G__2594__2597.call(this,x,y);
default:
return G__2594__2598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2594.cljs$lang$maxFixedArity = 2;
G__2594.cljs$lang$applyTo = G__2594__2598.cljs$lang$applyTo;
return G__2594;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2602__delegate = function (args){
return x;
};
var G__2602 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2602__delegate.call(this, args);
};
G__2602.cljs$lang$maxFixedArity = 0;
G__2602.cljs$lang$applyTo = (function (arglist__2603){
var args = cljs.core.seq( arglist__2603 );;
return G__2602__delegate.call(this, args);
});
return G__2602;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2607 = (function (){
return cljs.core.identity;
});
var comp__2608 = (function (f){
return f;
});
var comp__2609 = (function (f,g){
return (function() {
var G__2613 = null;
var G__2613__2614 = (function (){
return f.call(null,g.call(null));
});
var G__2613__2615 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2613__2616 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2613__2617 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2613__2618 = (function() { 
var G__2620__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2620 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2620__delegate.call(this, x, y, z, args);
};
G__2620.cljs$lang$maxFixedArity = 3;
G__2620.cljs$lang$applyTo = (function (arglist__2621){
var x = cljs.core.first(arglist__2621);
var y = cljs.core.first(cljs.core.next(arglist__2621));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2621)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2621)));
return G__2620__delegate.call(this, x, y, z, args);
});
return G__2620;
})()
;
G__2613 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2613__2614.call(this);
case  1 :
return G__2613__2615.call(this,x);
case  2 :
return G__2613__2616.call(this,x,y);
case  3 :
return G__2613__2617.call(this,x,y,z);
default:
return G__2613__2618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2613.cljs$lang$maxFixedArity = 3;
G__2613.cljs$lang$applyTo = G__2613__2618.cljs$lang$applyTo;
return G__2613;
})()
});
var comp__2610 = (function (f,g,h){
return (function() {
var G__2622 = null;
var G__2622__2623 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2622__2624 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2622__2625 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2622__2626 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2622__2627 = (function() { 
var G__2629__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2629 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2629__delegate.call(this, x, y, z, args);
};
G__2629.cljs$lang$maxFixedArity = 3;
G__2629.cljs$lang$applyTo = (function (arglist__2630){
var x = cljs.core.first(arglist__2630);
var y = cljs.core.first(cljs.core.next(arglist__2630));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2630)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2630)));
return G__2629__delegate.call(this, x, y, z, args);
});
return G__2629;
})()
;
G__2622 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2622__2623.call(this);
case  1 :
return G__2622__2624.call(this,x);
case  2 :
return G__2622__2625.call(this,x,y);
case  3 :
return G__2622__2626.call(this,x,y,z);
default:
return G__2622__2627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2622.cljs$lang$maxFixedArity = 3;
G__2622.cljs$lang$applyTo = G__2622__2627.cljs$lang$applyTo;
return G__2622;
})()
});
var comp__2611 = (function() { 
var G__2631__delegate = function (f1,f2,f3,fs){
var fs__2604 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2632__delegate = function (args){
var ret__2605 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2604),args);
var fs__2606 = cljs.core.next.call(null,fs__2604);

while(true){
if(cljs.core.truth_(fs__2606))
{{
var G__2633 = cljs.core.first.call(null,fs__2606).call(null,ret__2605);
var G__2634 = cljs.core.next.call(null,fs__2606);
ret__2605 = G__2633;
fs__2606 = G__2634;
continue;
}
} else
{return ret__2605;
}
break;
}
};
var G__2632 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2632__delegate.call(this, args);
};
G__2632.cljs$lang$maxFixedArity = 0;
G__2632.cljs$lang$applyTo = (function (arglist__2635){
var args = cljs.core.seq( arglist__2635 );;
return G__2632__delegate.call(this, args);
});
return G__2632;
})()
;
};
var G__2631 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2631__delegate.call(this, f1, f2, f3, fs);
};
G__2631.cljs$lang$maxFixedArity = 3;
G__2631.cljs$lang$applyTo = (function (arglist__2636){
var f1 = cljs.core.first(arglist__2636);
var f2 = cljs.core.first(cljs.core.next(arglist__2636));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2636)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2636)));
return G__2631__delegate.call(this, f1, f2, f3, fs);
});
return G__2631;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2607.call(this);
case  1 :
return comp__2608.call(this,f1);
case  2 :
return comp__2609.call(this,f1,f2);
case  3 :
return comp__2610.call(this,f1,f2,f3);
default:
return comp__2611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2611.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2637 = (function (f,arg1){
return (function() { 
var G__2642__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2642 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2642__delegate.call(this, args);
};
G__2642.cljs$lang$maxFixedArity = 0;
G__2642.cljs$lang$applyTo = (function (arglist__2643){
var args = cljs.core.seq( arglist__2643 );;
return G__2642__delegate.call(this, args);
});
return G__2642;
})()
;
});
var partial__2638 = (function (f,arg1,arg2){
return (function() { 
var G__2644__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2644 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2644__delegate.call(this, args);
};
G__2644.cljs$lang$maxFixedArity = 0;
G__2644.cljs$lang$applyTo = (function (arglist__2645){
var args = cljs.core.seq( arglist__2645 );;
return G__2644__delegate.call(this, args);
});
return G__2644;
})()
;
});
var partial__2639 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2646__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2646 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2646__delegate.call(this, args);
};
G__2646.cljs$lang$maxFixedArity = 0;
G__2646.cljs$lang$applyTo = (function (arglist__2647){
var args = cljs.core.seq( arglist__2647 );;
return G__2646__delegate.call(this, args);
});
return G__2646;
})()
;
});
var partial__2640 = (function() { 
var G__2648__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2649__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2649 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2649__delegate.call(this, args);
};
G__2649.cljs$lang$maxFixedArity = 0;
G__2649.cljs$lang$applyTo = (function (arglist__2650){
var args = cljs.core.seq( arglist__2650 );;
return G__2649__delegate.call(this, args);
});
return G__2649;
})()
;
};
var G__2648 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2648__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2648.cljs$lang$maxFixedArity = 4;
G__2648.cljs$lang$applyTo = (function (arglist__2651){
var f = cljs.core.first(arglist__2651);
var arg1 = cljs.core.first(cljs.core.next(arglist__2651));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2651)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2651))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2651))));
return G__2648__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2648;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2637.call(this,f,arg1);
case  3 :
return partial__2638.call(this,f,arg1,arg2);
case  4 :
return partial__2639.call(this,f,arg1,arg2,arg3);
default:
return partial__2640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2640.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2652 = (function (f,x){
return (function() {
var G__2656 = null;
var G__2656__2657 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2656__2658 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2656__2659 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2656__2660 = (function() { 
var G__2662__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2662 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2662__delegate.call(this, a, b, c, ds);
};
G__2662.cljs$lang$maxFixedArity = 3;
G__2662.cljs$lang$applyTo = (function (arglist__2663){
var a = cljs.core.first(arglist__2663);
var b = cljs.core.first(cljs.core.next(arglist__2663));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2663)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2663)));
return G__2662__delegate.call(this, a, b, c, ds);
});
return G__2662;
})()
;
G__2656 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2656__2657.call(this,a);
case  2 :
return G__2656__2658.call(this,a,b);
case  3 :
return G__2656__2659.call(this,a,b,c);
default:
return G__2656__2660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2656.cljs$lang$maxFixedArity = 3;
G__2656.cljs$lang$applyTo = G__2656__2660.cljs$lang$applyTo;
return G__2656;
})()
});
var fnil__2653 = (function (f,x,y){
return (function() {
var G__2664 = null;
var G__2664__2665 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2664__2666 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2664__2667 = (function() { 
var G__2669__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2669 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2669__delegate.call(this, a, b, c, ds);
};
G__2669.cljs$lang$maxFixedArity = 3;
G__2669.cljs$lang$applyTo = (function (arglist__2670){
var a = cljs.core.first(arglist__2670);
var b = cljs.core.first(cljs.core.next(arglist__2670));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2670)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2670)));
return G__2669__delegate.call(this, a, b, c, ds);
});
return G__2669;
})()
;
G__2664 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2664__2665.call(this,a,b);
case  3 :
return G__2664__2666.call(this,a,b,c);
default:
return G__2664__2667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2664.cljs$lang$maxFixedArity = 3;
G__2664.cljs$lang$applyTo = G__2664__2667.cljs$lang$applyTo;
return G__2664;
})()
});
var fnil__2654 = (function (f,x,y,z){
return (function() {
var G__2671 = null;
var G__2671__2672 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2671__2673 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2671__2674 = (function() { 
var G__2676__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2676 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2676__delegate.call(this, a, b, c, ds);
};
G__2676.cljs$lang$maxFixedArity = 3;
G__2676.cljs$lang$applyTo = (function (arglist__2677){
var a = cljs.core.first(arglist__2677);
var b = cljs.core.first(cljs.core.next(arglist__2677));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2677)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2677)));
return G__2676__delegate.call(this, a, b, c, ds);
});
return G__2676;
})()
;
G__2671 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2671__2672.call(this,a,b);
case  3 :
return G__2671__2673.call(this,a,b,c);
default:
return G__2671__2674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2671.cljs$lang$maxFixedArity = 3;
G__2671.cljs$lang$applyTo = G__2671__2674.cljs$lang$applyTo;
return G__2671;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2652.call(this,f,x);
case  3 :
return fnil__2653.call(this,f,x,y);
case  4 :
return fnil__2654.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__2680 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2678 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2678))
{var s__2679 = temp__3726__auto____2678;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2679)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2679)));
} else
{return null;
}
})));
});

return mapi__2680.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2681 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2681))
{var s__2682 = temp__3726__auto____2681;

var x__2683 = f.call(null,cljs.core.first.call(null,s__2682));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2683)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2682));
} else
{return cljs.core.cons.call(null,x__2683,keep.call(null,f,cljs.core.rest.call(null,s__2682)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__2693 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2690 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2690))
{var s__2691 = temp__3726__auto____2690;

var x__2692 = f.call(null,idx,cljs.core.first.call(null,s__2691));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2692)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2691));
} else
{return cljs.core.cons.call(null,x__2692,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2691)));
}
} else
{return null;
}
})));
});

return keepi__2693.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__2738 = (function (p){
return (function() {
var ep1 = null;
var ep1__2743 = (function (){
return true;
});
var ep1__2744 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2745 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2700 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2700))
{return p.call(null,y);
} else
{return and__3574__auto____2700;
}
})());
});
var ep1__2746 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2701 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2701))
{var and__3574__auto____2702 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2702))
{return p.call(null,z);
} else
{return and__3574__auto____2702;
}
} else
{return and__3574__auto____2701;
}
})());
});
var ep1__2747 = (function() { 
var G__2749__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2703 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2703))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2703;
}
})());
};
var G__2749 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2749__delegate.call(this, x, y, z, args);
};
G__2749.cljs$lang$maxFixedArity = 3;
G__2749.cljs$lang$applyTo = (function (arglist__2750){
var x = cljs.core.first(arglist__2750);
var y = cljs.core.first(cljs.core.next(arglist__2750));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2750)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2750)));
return G__2749__delegate.call(this, x, y, z, args);
});
return G__2749;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2743.call(this);
case  1 :
return ep1__2744.call(this,x);
case  2 :
return ep1__2745.call(this,x,y);
case  3 :
return ep1__2746.call(this,x,y,z);
default:
return ep1__2747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2747.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2739 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2751 = (function (){
return true;
});
var ep2__2752 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2704 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2704))
{return p2.call(null,x);
} else
{return and__3574__auto____2704;
}
})());
});
var ep2__2753 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2705 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2705))
{var and__3574__auto____2706 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2706))
{var and__3574__auto____2707 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2707))
{return p2.call(null,y);
} else
{return and__3574__auto____2707;
}
} else
{return and__3574__auto____2706;
}
} else
{return and__3574__auto____2705;
}
})());
});
var ep2__2754 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2708 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2708))
{var and__3574__auto____2709 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2709))
{var and__3574__auto____2710 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2710))
{var and__3574__auto____2711 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2711))
{var and__3574__auto____2712 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2712))
{return p2.call(null,z);
} else
{return and__3574__auto____2712;
}
} else
{return and__3574__auto____2711;
}
} else
{return and__3574__auto____2710;
}
} else
{return and__3574__auto____2709;
}
} else
{return and__3574__auto____2708;
}
})());
});
var ep2__2755 = (function() { 
var G__2757__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2713 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2713))
{return cljs.core.every_QMARK_.call(null,(function (p1__2684_SHARP_){
var and__3574__auto____2714 = p1.call(null,p1__2684_SHARP_);

if(cljs.core.truth_(and__3574__auto____2714))
{return p2.call(null,p1__2684_SHARP_);
} else
{return and__3574__auto____2714;
}
}),args);
} else
{return and__3574__auto____2713;
}
})());
};
var G__2757 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2757__delegate.call(this, x, y, z, args);
};
G__2757.cljs$lang$maxFixedArity = 3;
G__2757.cljs$lang$applyTo = (function (arglist__2758){
var x = cljs.core.first(arglist__2758);
var y = cljs.core.first(cljs.core.next(arglist__2758));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2758)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2758)));
return G__2757__delegate.call(this, x, y, z, args);
});
return G__2757;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2751.call(this);
case  1 :
return ep2__2752.call(this,x);
case  2 :
return ep2__2753.call(this,x,y);
case  3 :
return ep2__2754.call(this,x,y,z);
default:
return ep2__2755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2755.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2740 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2759 = (function (){
return true;
});
var ep3__2760 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2715 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2715))
{var and__3574__auto____2716 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2716))
{return p3.call(null,x);
} else
{return and__3574__auto____2716;
}
} else
{return and__3574__auto____2715;
}
})());
});
var ep3__2761 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2717 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2717))
{var and__3574__auto____2718 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2718))
{var and__3574__auto____2719 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2719))
{var and__3574__auto____2720 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2720))
{var and__3574__auto____2721 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2721))
{return p3.call(null,y);
} else
{return and__3574__auto____2721;
}
} else
{return and__3574__auto____2720;
}
} else
{return and__3574__auto____2719;
}
} else
{return and__3574__auto____2718;
}
} else
{return and__3574__auto____2717;
}
})());
});
var ep3__2762 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2722 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2722))
{var and__3574__auto____2723 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2723))
{var and__3574__auto____2724 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2724))
{var and__3574__auto____2725 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2725))
{var and__3574__auto____2726 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2726))
{var and__3574__auto____2727 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2727))
{var and__3574__auto____2728 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2728))
{var and__3574__auto____2729 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2729))
{return p3.call(null,z);
} else
{return and__3574__auto____2729;
}
} else
{return and__3574__auto____2728;
}
} else
{return and__3574__auto____2727;
}
} else
{return and__3574__auto____2726;
}
} else
{return and__3574__auto____2725;
}
} else
{return and__3574__auto____2724;
}
} else
{return and__3574__auto____2723;
}
} else
{return and__3574__auto____2722;
}
})());
});
var ep3__2763 = (function() { 
var G__2765__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2730 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2730))
{return cljs.core.every_QMARK_.call(null,(function (p1__2685_SHARP_){
var and__3574__auto____2731 = p1.call(null,p1__2685_SHARP_);

if(cljs.core.truth_(and__3574__auto____2731))
{var and__3574__auto____2732 = p2.call(null,p1__2685_SHARP_);

if(cljs.core.truth_(and__3574__auto____2732))
{return p3.call(null,p1__2685_SHARP_);
} else
{return and__3574__auto____2732;
}
} else
{return and__3574__auto____2731;
}
}),args);
} else
{return and__3574__auto____2730;
}
})());
};
var G__2765 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2765__delegate.call(this, x, y, z, args);
};
G__2765.cljs$lang$maxFixedArity = 3;
G__2765.cljs$lang$applyTo = (function (arglist__2766){
var x = cljs.core.first(arglist__2766);
var y = cljs.core.first(cljs.core.next(arglist__2766));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2766)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2766)));
return G__2765__delegate.call(this, x, y, z, args);
});
return G__2765;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2759.call(this);
case  1 :
return ep3__2760.call(this,x);
case  2 :
return ep3__2761.call(this,x,y);
case  3 :
return ep3__2762.call(this,x,y,z);
default:
return ep3__2763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2763.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2741 = (function() { 
var G__2767__delegate = function (p1,p2,p3,ps){
var ps__2733 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2768 = (function (){
return true;
});
var epn__2769 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2686_SHARP_){
return p1__2686_SHARP_.call(null,x);
}),ps__2733);
});
var epn__2770 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2687_SHARP_){
var and__3574__auto____2734 = p1__2687_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2734))
{return p1__2687_SHARP_.call(null,y);
} else
{return and__3574__auto____2734;
}
}),ps__2733);
});
var epn__2771 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2688_SHARP_){
var and__3574__auto____2735 = p1__2688_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2735))
{var and__3574__auto____2736 = p1__2688_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2736))
{return p1__2688_SHARP_.call(null,z);
} else
{return and__3574__auto____2736;
}
} else
{return and__3574__auto____2735;
}
}),ps__2733);
});
var epn__2772 = (function() { 
var G__2774__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2737 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2737))
{return cljs.core.every_QMARK_.call(null,(function (p1__2689_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2689_SHARP_,args);
}),ps__2733);
} else
{return and__3574__auto____2737;
}
})());
};
var G__2774 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2774__delegate.call(this, x, y, z, args);
};
G__2774.cljs$lang$maxFixedArity = 3;
G__2774.cljs$lang$applyTo = (function (arglist__2775){
var x = cljs.core.first(arglist__2775);
var y = cljs.core.first(cljs.core.next(arglist__2775));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2775)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2775)));
return G__2774__delegate.call(this, x, y, z, args);
});
return G__2774;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2768.call(this);
case  1 :
return epn__2769.call(this,x);
case  2 :
return epn__2770.call(this,x,y);
case  3 :
return epn__2771.call(this,x,y,z);
default:
return epn__2772.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2772.cljs$lang$applyTo;
return epn;
})()
};
var G__2767 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2767__delegate.call(this, p1, p2, p3, ps);
};
G__2767.cljs$lang$maxFixedArity = 3;
G__2767.cljs$lang$applyTo = (function (arglist__2776){
var p1 = cljs.core.first(arglist__2776);
var p2 = cljs.core.first(cljs.core.next(arglist__2776));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2776)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2776)));
return G__2767__delegate.call(this, p1, p2, p3, ps);
});
return G__2767;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2738.call(this,p1);
case  2 :
return every_pred__2739.call(this,p1,p2);
case  3 :
return every_pred__2740.call(this,p1,p2,p3);
default:
return every_pred__2741.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2741.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__2816 = (function (p){
return (function() {
var sp1 = null;
var sp1__2821 = (function (){
return null;
});
var sp1__2822 = (function (x){
return p.call(null,x);
});
var sp1__2823 = (function (x,y){
var or__3576__auto____2778 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2778))
{return or__3576__auto____2778;
} else
{return p.call(null,y);
}
});
var sp1__2824 = (function (x,y,z){
var or__3576__auto____2779 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2779))
{return or__3576__auto____2779;
} else
{var or__3576__auto____2780 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2780))
{return or__3576__auto____2780;
} else
{return p.call(null,z);
}
}
});
var sp1__2825 = (function() { 
var G__2827__delegate = function (x,y,z,args){
var or__3576__auto____2781 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2781))
{return or__3576__auto____2781;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2827 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2827__delegate.call(this, x, y, z, args);
};
G__2827.cljs$lang$maxFixedArity = 3;
G__2827.cljs$lang$applyTo = (function (arglist__2828){
var x = cljs.core.first(arglist__2828);
var y = cljs.core.first(cljs.core.next(arglist__2828));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2828)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2828)));
return G__2827__delegate.call(this, x, y, z, args);
});
return G__2827;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2821.call(this);
case  1 :
return sp1__2822.call(this,x);
case  2 :
return sp1__2823.call(this,x,y);
case  3 :
return sp1__2824.call(this,x,y,z);
default:
return sp1__2825.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2825.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2817 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2829 = (function (){
return null;
});
var sp2__2830 = (function (x){
var or__3576__auto____2782 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2782))
{return or__3576__auto____2782;
} else
{return p2.call(null,x);
}
});
var sp2__2831 = (function (x,y){
var or__3576__auto____2783 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2783))
{return or__3576__auto____2783;
} else
{var or__3576__auto____2784 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2784))
{return or__3576__auto____2784;
} else
{var or__3576__auto____2785 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2785))
{return or__3576__auto____2785;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2832 = (function (x,y,z){
var or__3576__auto____2786 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2786))
{return or__3576__auto____2786;
} else
{var or__3576__auto____2787 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2787))
{return or__3576__auto____2787;
} else
{var or__3576__auto____2788 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2788))
{return or__3576__auto____2788;
} else
{var or__3576__auto____2789 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2789))
{return or__3576__auto____2789;
} else
{var or__3576__auto____2790 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2790))
{return or__3576__auto____2790;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2833 = (function() { 
var G__2835__delegate = function (x,y,z,args){
var or__3576__auto____2791 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2791))
{return or__3576__auto____2791;
} else
{return cljs.core.some.call(null,(function (p1__2694_SHARP_){
var or__3576__auto____2792 = p1.call(null,p1__2694_SHARP_);

if(cljs.core.truth_(or__3576__auto____2792))
{return or__3576__auto____2792;
} else
{return p2.call(null,p1__2694_SHARP_);
}
}),args);
}
};
var G__2835 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2835__delegate.call(this, x, y, z, args);
};
G__2835.cljs$lang$maxFixedArity = 3;
G__2835.cljs$lang$applyTo = (function (arglist__2836){
var x = cljs.core.first(arglist__2836);
var y = cljs.core.first(cljs.core.next(arglist__2836));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2836)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2836)));
return G__2835__delegate.call(this, x, y, z, args);
});
return G__2835;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2829.call(this);
case  1 :
return sp2__2830.call(this,x);
case  2 :
return sp2__2831.call(this,x,y);
case  3 :
return sp2__2832.call(this,x,y,z);
default:
return sp2__2833.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2833.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2818 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2837 = (function (){
return null;
});
var sp3__2838 = (function (x){
var or__3576__auto____2793 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2793))
{return or__3576__auto____2793;
} else
{var or__3576__auto____2794 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2794))
{return or__3576__auto____2794;
} else
{return p3.call(null,x);
}
}
});
var sp3__2839 = (function (x,y){
var or__3576__auto____2795 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2795))
{return or__3576__auto____2795;
} else
{var or__3576__auto____2796 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2796))
{return or__3576__auto____2796;
} else
{var or__3576__auto____2797 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2797))
{return or__3576__auto____2797;
} else
{var or__3576__auto____2798 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2798))
{return or__3576__auto____2798;
} else
{var or__3576__auto____2799 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2799))
{return or__3576__auto____2799;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2840 = (function (x,y,z){
var or__3576__auto____2800 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2800))
{return or__3576__auto____2800;
} else
{var or__3576__auto____2801 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2801))
{return or__3576__auto____2801;
} else
{var or__3576__auto____2802 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2802))
{return or__3576__auto____2802;
} else
{var or__3576__auto____2803 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2803))
{return or__3576__auto____2803;
} else
{var or__3576__auto____2804 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2804))
{return or__3576__auto____2804;
} else
{var or__3576__auto____2805 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2805))
{return or__3576__auto____2805;
} else
{var or__3576__auto____2806 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2806))
{return or__3576__auto____2806;
} else
{var or__3576__auto____2807 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2807))
{return or__3576__auto____2807;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__2841 = (function() { 
var G__2843__delegate = function (x,y,z,args){
var or__3576__auto____2808 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2808))
{return or__3576__auto____2808;
} else
{return cljs.core.some.call(null,(function (p1__2695_SHARP_){
var or__3576__auto____2809 = p1.call(null,p1__2695_SHARP_);

if(cljs.core.truth_(or__3576__auto____2809))
{return or__3576__auto____2809;
} else
{var or__3576__auto____2810 = p2.call(null,p1__2695_SHARP_);

if(cljs.core.truth_(or__3576__auto____2810))
{return or__3576__auto____2810;
} else
{return p3.call(null,p1__2695_SHARP_);
}
}
}),args);
}
};
var G__2843 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2843__delegate.call(this, x, y, z, args);
};
G__2843.cljs$lang$maxFixedArity = 3;
G__2843.cljs$lang$applyTo = (function (arglist__2844){
var x = cljs.core.first(arglist__2844);
var y = cljs.core.first(cljs.core.next(arglist__2844));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2844)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2844)));
return G__2843__delegate.call(this, x, y, z, args);
});
return G__2843;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2837.call(this);
case  1 :
return sp3__2838.call(this,x);
case  2 :
return sp3__2839.call(this,x,y);
case  3 :
return sp3__2840.call(this,x,y,z);
default:
return sp3__2841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2841.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2819 = (function() { 
var G__2845__delegate = function (p1,p2,p3,ps){
var ps__2811 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2846 = (function (){
return null;
});
var spn__2847 = (function (x){
return cljs.core.some.call(null,(function (p1__2696_SHARP_){
return p1__2696_SHARP_.call(null,x);
}),ps__2811);
});
var spn__2848 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2697_SHARP_){
var or__3576__auto____2812 = p1__2697_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2812))
{return or__3576__auto____2812;
} else
{return p1__2697_SHARP_.call(null,y);
}
}),ps__2811);
});
var spn__2849 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2698_SHARP_){
var or__3576__auto____2813 = p1__2698_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2813))
{return or__3576__auto____2813;
} else
{var or__3576__auto____2814 = p1__2698_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2814))
{return or__3576__auto____2814;
} else
{return p1__2698_SHARP_.call(null,z);
}
}
}),ps__2811);
});
var spn__2850 = (function() { 
var G__2852__delegate = function (x,y,z,args){
var or__3576__auto____2815 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2815))
{return or__3576__auto____2815;
} else
{return cljs.core.some.call(null,(function (p1__2699_SHARP_){
return cljs.core.some.call(null,p1__2699_SHARP_,args);
}),ps__2811);
}
};
var G__2852 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2852__delegate.call(this, x, y, z, args);
};
G__2852.cljs$lang$maxFixedArity = 3;
G__2852.cljs$lang$applyTo = (function (arglist__2853){
var x = cljs.core.first(arglist__2853);
var y = cljs.core.first(cljs.core.next(arglist__2853));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2853)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2853)));
return G__2852__delegate.call(this, x, y, z, args);
});
return G__2852;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2846.call(this);
case  1 :
return spn__2847.call(this,x);
case  2 :
return spn__2848.call(this,x,y);
case  3 :
return spn__2849.call(this,x,y,z);
default:
return spn__2850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2850.cljs$lang$applyTo;
return spn;
})()
};
var G__2845 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2845__delegate.call(this, p1, p2, p3, ps);
};
G__2845.cljs$lang$maxFixedArity = 3;
G__2845.cljs$lang$applyTo = (function (arglist__2854){
var p1 = cljs.core.first(arglist__2854);
var p2 = cljs.core.first(cljs.core.next(arglist__2854));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2854)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2854)));
return G__2845__delegate.call(this, p1, p2, p3, ps);
});
return G__2845;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2816.call(this,p1);
case  2 :
return some_fn__2817.call(this,p1,p2);
case  3 :
return some_fn__2818.call(this,p1,p2,p3);
default:
return some_fn__2819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2819.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2867 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2855 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2855))
{var s__2856 = temp__3726__auto____2855;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2856)),map.call(null,f,cljs.core.rest.call(null,s__2856)));
} else
{return null;
}
})));
});
var map__2868 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2857 = cljs.core.seq.call(null,c1);
var s2__2858 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2859 = s1__2857;

if(cljs.core.truth_(and__3574__auto____2859))
{return s2__2858;
} else
{return and__3574__auto____2859;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2857),cljs.core.first.call(null,s2__2858)),map.call(null,f,cljs.core.rest.call(null,s1__2857),cljs.core.rest.call(null,s2__2858)));
} else
{return null;
}
})));
});
var map__2869 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2860 = cljs.core.seq.call(null,c1);
var s2__2861 = cljs.core.seq.call(null,c2);
var s3__2862 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2863 = s1__2860;

if(cljs.core.truth_(and__3574__auto____2863))
{var and__3574__auto____2864 = s2__2861;

if(cljs.core.truth_(and__3574__auto____2864))
{return s3__2862;
} else
{return and__3574__auto____2864;
}
} else
{return and__3574__auto____2863;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2860),cljs.core.first.call(null,s2__2861),cljs.core.first.call(null,s3__2862)),map.call(null,f,cljs.core.rest.call(null,s1__2860),cljs.core.rest.call(null,s2__2861),cljs.core.rest.call(null,s3__2862)));
} else
{return null;
}
})));
});
var map__2870 = (function() { 
var G__2872__delegate = function (f,c1,c2,c3,colls){
var step__2866 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2865 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2865)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2865),step.call(null,map.call(null,cljs.core.rest,ss__2865)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2777_SHARP_){
return cljs.core.apply.call(null,f,p1__2777_SHARP_);
}),step__2866.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2872 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2872__delegate.call(this, f, c1, c2, c3, colls);
};
G__2872.cljs$lang$maxFixedArity = 4;
G__2872.cljs$lang$applyTo = (function (arglist__2873){
var f = cljs.core.first(arglist__2873);
var c1 = cljs.core.first(cljs.core.next(arglist__2873));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2873)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2873))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2873))));
return G__2872__delegate.call(this, f, c1, c2, c3, colls);
});
return G__2872;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2867.call(this,f,c1);
case  3 :
return map__2868.call(this,f,c1,c2);
case  4 :
return map__2869.call(this,f,c1,c2,c3);
default:
return map__2870.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2870.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____2874 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2874))
{var s__2875 = temp__3726__auto____2874;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2875),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2875)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__2878 = (function (n,coll){
while(true){
var s__2876 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2877 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2877))
{return s__2876;
} else
{return and__3574__auto____2877;
}
})()))
{{
var G__2879 = cljs.core.dec.call(null,n);
var G__2880 = cljs.core.rest.call(null,s__2876);
n = G__2879;
coll = G__2880;
continue;
}
} else
{return s__2876;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2878.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2881 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2882 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2881.call(this,n);
case  2 :
return drop_last__2882.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__2884 = cljs.core.seq.call(null,coll);
var lead__2885 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2885))
{{
var G__2886 = cljs.core.next.call(null,s__2884);
var G__2887 = cljs.core.next.call(null,lead__2885);
s__2884 = G__2886;
lead__2885 = G__2887;
continue;
}
} else
{return s__2884;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2890 = (function (pred,coll){
while(true){
var s__2888 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2889 = s__2888;

if(cljs.core.truth_(and__3574__auto____2889))
{return pred.call(null,cljs.core.first.call(null,s__2888));
} else
{return and__3574__auto____2889;
}
})()))
{{
var G__2891 = pred;
var G__2892 = cljs.core.rest.call(null,s__2888);
pred = G__2891;
coll = G__2892;
continue;
}
} else
{return s__2888;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2890.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2893 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2893))
{var s__2894 = temp__3726__auto____2893;

return cljs.core.concat.call(null,s__2894,cycle.call(null,s__2894));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2895 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2896 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2895.call(this,n);
case  2 :
return repeat__2896.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__2898 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2899 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2898.call(this,n);
case  2 :
return repeatedly__2899.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2905 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2901 = cljs.core.seq.call(null,c1);
var s2__2902 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2903 = s1__2901;

if(cljs.core.truth_(and__3574__auto____2903))
{return s2__2902;
} else
{return and__3574__auto____2903;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2901),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2902),interleave.call(null,cljs.core.rest.call(null,s1__2901),cljs.core.rest.call(null,s2__2902))));
} else
{return null;
}
})));
});
var interleave__2906 = (function() { 
var G__2908__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2904 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2904)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2904),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2904)));
} else
{return null;
}
})));
};
var G__2908 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2908__delegate.call(this, c1, c2, colls);
};
G__2908.cljs$lang$maxFixedArity = 2;
G__2908.cljs$lang$applyTo = (function (arglist__2909){
var c1 = cljs.core.first(arglist__2909);
var c2 = cljs.core.first(cljs.core.next(arglist__2909));
var colls = cljs.core.rest(cljs.core.next(arglist__2909));
return G__2908__delegate.call(this, c1, c2, colls);
});
return G__2908;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2905.call(this,c1,c2);
default:
return interleave__2906.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2906.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__2912 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2910 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2910))
{var coll__2911 = temp__3723__auto____2910;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2911),cat.call(null,cljs.core.rest.call(null,coll__2911),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2912.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2913 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2914 = (function() { 
var G__2916__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2916 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2916__delegate.call(this, f, coll, colls);
};
G__2916.cljs$lang$maxFixedArity = 2;
G__2916.cljs$lang$applyTo = (function (arglist__2917){
var f = cljs.core.first(arglist__2917);
var coll = cljs.core.first(cljs.core.next(arglist__2917));
var colls = cljs.core.rest(cljs.core.next(arglist__2917));
return G__2916__delegate.call(this, f, coll, colls);
});
return G__2916;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2913.call(this,f,coll);
default:
return mapcat__2914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2914.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2918 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2918))
{var s__2919 = temp__3726__auto____2918;

var f__2920 = cljs.core.first.call(null,s__2919);
var r__2921 = cljs.core.rest.call(null,s__2919);

if(cljs.core.truth_(pred.call(null,f__2920)))
{return cljs.core.cons.call(null,f__2920,filter.call(null,pred,r__2921));
} else
{return filter.call(null,pred,r__2921);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__2923 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2923.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2922_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2922_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2930 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2931 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2924 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2924))
{var s__2925 = temp__3726__auto____2924;

var p__2926 = cljs.core.take.call(null,n,s__2925);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2926))))
{return cljs.core.cons.call(null,p__2926,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2925)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2932 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2927 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2927))
{var s__2928 = temp__3726__auto____2927;

var p__2929 = cljs.core.take.call(null,n,s__2928);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2929))))
{return cljs.core.cons.call(null,p__2929,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2928)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2929,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2930.call(this,n,step);
case  3 :
return partition__2931.call(this,n,step,pad);
case  4 :
return partition__2932.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2938 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2939 = (function (m,ks,not_found){
var sentinel__2934 = cljs.core.lookup_sentinel;
var m__2935 = m;
var ks__2936 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2936))
{var m__2937 = cljs.core.get.call(null,m__2935,cljs.core.first.call(null,ks__2936),sentinel__2934);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2934,m__2937)))
{return not_found;
} else
{{
var G__2941 = sentinel__2934;
var G__2942 = m__2937;
var G__2943 = cljs.core.next.call(null,ks__2936);
sentinel__2934 = G__2941;
m__2935 = G__2942;
ks__2936 = G__2943;
continue;
}
}
} else
{return m__2935;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2938.call(this,m,ks);
case  3 :
return get_in__2939.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__2944,v){
var vec__2945__2946 = p__2944;
var k__2947 = cljs.core.nth.call(null,vec__2945__2946,0,null);
var ks__2948 = cljs.core.nthnext.call(null,vec__2945__2946,1);

if(cljs.core.truth_(ks__2948))
{return cljs.core.assoc.call(null,m,k__2947,assoc_in.call(null,cljs.core.get.call(null,m,k__2947),ks__2948,v));
} else
{return cljs.core.assoc.call(null,m,k__2947,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__2949,f,args){
var vec__2950__2951 = p__2949;
var k__2952 = cljs.core.nth.call(null,vec__2950__2951,0,null);
var ks__2953 = cljs.core.nthnext.call(null,vec__2950__2951,1);

if(cljs.core.truth_(ks__2953))
{return cljs.core.assoc.call(null,m,k__2952,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2952),ks__2953,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2952,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2952),args));
}
};
var update_in = function (m,p__2949,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2949, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2954){
var m = cljs.core.first(arglist__2954);
var p__2949 = cljs.core.first(cljs.core.next(arglist__2954));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2954)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2954)));
return update_in__delegate.call(this, m, p__2949, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2955 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2956 = this;
var new_array__2957 = cljs.core.aclone.call(null,this__2956.array);

new_array__2957.push(o);
return (new cljs.core.Vector(this__2956.meta,new_array__2957));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2958 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2958.array.length,0)))
{var vector_seq__2959 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2958.array.length)))
{return cljs.core.cons.call(null,(this__2958.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2959.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2960 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2961 = this;
var count__2962 = this__2961.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2962,0)))
{return (this__2961.array[cljs.core.dec.call(null,count__2962)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2963 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2963.array.length,0)))
{var new_array__2964 = cljs.core.aclone.call(null,this__2963.array);

new_array__2964.pop();
return (new cljs.core.Vector(this__2963.meta,new_array__2964));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2965 = this;
return (new cljs.core.Vector(meta,this__2965.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2966 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2966.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2980 = null;
var G__2980__2981 = (function (coll,n){
var this__2967 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2968 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2968))
{return cljs.core._LT_.call(null,n,this__2967.array.length);
} else
{return and__3574__auto____2968;
}
})()))
{return (this__2967.array[n]);
} else
{return null;
}
});
var G__2980__2982 = (function (coll,n,not_found){
var this__2969 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2970 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2970))
{return cljs.core._LT_.call(null,n,this__2969.array.length);
} else
{return and__3574__auto____2970;
}
})()))
{return (this__2969.array[n]);
} else
{return not_found;
}
});
G__2980 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2980__2981.call(this,coll,n);
case  3 :
return G__2980__2982.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2980;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2971 = this;
return this__2971.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2984 = null;
var G__2984__2985 = (function (v,f){
var this__2972 = this;
return cljs.core.ci_reduce.call(null,this__2972.array,f);
});
var G__2984__2986 = (function (v,f,start){
var this__2973 = this;
return cljs.core.ci_reduce.call(null,this__2973.array,f,start);
});
G__2984 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2984__2985.call(this,v,f);
case  3 :
return G__2984__2986.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2984;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2974 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2975 = this;
return this__2975.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2976 = this;
var new_array__2977 = cljs.core.aclone.call(null,this__2976.array);

(new_array__2977[k] = v);
return (new cljs.core.Vector(this__2976.meta,new_array__2977));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2988 = null;
var G__2988__2989 = (function (coll,k){
var this__2978 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2988__2990 = (function (coll,k,not_found){
var this__2979 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2988 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2988__2989.call(this,coll,k);
case  3 :
return G__2988__2990.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2988;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2992 = null;
var G__2992__2993 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2992__2994 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2992 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2992__2993.call(this,_,k);
case  3 :
return G__2992__2994.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2992;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__2996){
var args = cljs.core.seq( arglist__2996 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__2997 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__2998 = array.length;

var i__2999 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2999,len__2998)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2999]))))
{return i__2999;
} else
{{
var G__3000 = cljs.core._PLUS_.call(null,i__2999,incr);
i__2999 = G__3000;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3002 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3003 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____3001 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____3001))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____3001;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3002.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3003.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3006 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3007 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3008 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3008.keys.length)))
{return cljs.core.map.call(null,(function (p1__3005_SHARP_){
return cljs.core.vector.call(null,p1__3005_SHARP_,(this__3008.strobj[p1__3005_SHARP_]));
}),this__3008.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3009 = this;
return (new cljs.core.ObjMap(meta,this__3009.keys,this__3009.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3010 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3011 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____3011))
{return this__3010.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____3011;
}
})()))
{var new_keys__3012 = cljs.core.aclone.call(null,this__3010.keys);
var new_strobj__3013 = goog.object.clone.call(null,this__3010.strobj);

new_keys__3012.splice(cljs.core.scan_array.call(null,1,k,new_keys__3012),1);
cljs.core.js_delete.call(null,new_strobj__3013,k);
return (new cljs.core.ObjMap(this__3010.meta,new_keys__3012,new_strobj__3013));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3014 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3014.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3015 = this;
return this__3015.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3016 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3017 = this;
return this__3017.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3018 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3019 = goog.object.clone.call(null,this__3018.strobj);
var overwrite_QMARK___3020 = new_strobj__3019.hasOwnProperty(k);

(new_strobj__3019[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3020))
{return (new cljs.core.ObjMap(this__3018.meta,this__3018.keys,new_strobj__3019));
} else
{var new_keys__3021 = cljs.core.aclone.call(null,this__3018.keys);

new_keys__3021.push(k);
return (new cljs.core.ObjMap(this__3018.meta,new_keys__3021,new_strobj__3019));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3018.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3022 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3022.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3025 = null;
var G__3025__3026 = (function (coll,k){
var this__3023 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3025__3027 = (function (coll,k,not_found){
var this__3024 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3024.strobj,(this__3024.strobj[k]),not_found);
});
G__3025 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3025__3026.call(this,coll,k);
case  3 :
return G__3025__3027.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3025;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3030 = null;
var G__3030__3031 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3030__3032 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3030 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3030__3031.call(this,_,k);
case  3 :
return G__3030__3032.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3030;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3034 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3035 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3036 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3036.count)))
{var hashes__3037 = cljs.core.js_keys.call(null,this__3036.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3029_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3036.hashobj[p1__3029_SHARP_])));
}),hashes__3037);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3038 = this;
return (new cljs.core.HashMap(meta,this__3038.count,this__3038.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3039 = this;
var h__3040 = cljs.core.hash.call(null,k);
var bucket__3041 = (this__3039.hashobj[h__3040]);
var i__3042 = (cljs.core.truth_(bucket__3041)?cljs.core.scan_array.call(null,2,k,bucket__3041):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3042)))
{return coll;
} else
{var new_hashobj__3043 = goog.object.clone.call(null,this__3039.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__3041.length)))
{cljs.core.js_delete.call(null,new_hashobj__3043,h__3040);
} else
{var new_bucket__3044 = cljs.core.aclone.call(null,bucket__3041);

new_bucket__3044.splice(i__3042,2);
(new_hashobj__3043[h__3040] = new_bucket__3044);
}
return (new cljs.core.HashMap(this__3039.meta,cljs.core.dec.call(null,this__3039.count),new_hashobj__3043));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3045 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3045.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3046 = this;
return this__3046.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3047 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3048 = this;
return this__3048.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3049 = this;
var h__3050 = cljs.core.hash.call(null,k);
var bucket__3051 = (this__3049.hashobj[h__3050]);

if(cljs.core.truth_(bucket__3051))
{var new_bucket__3052 = cljs.core.aclone.call(null,bucket__3051);
var new_hashobj__3053 = goog.object.clone.call(null,this__3049.hashobj);

(new_hashobj__3053[h__3050] = new_bucket__3052);
var temp__3723__auto____3054 = cljs.core.scan_array.call(null,2,k,new_bucket__3052);

if(cljs.core.truth_(temp__3723__auto____3054))
{var i__3055 = temp__3723__auto____3054;

(new_bucket__3052[cljs.core.inc.call(null,i__3055)] = v);
return (new cljs.core.HashMap(this__3049.meta,this__3049.count,new_hashobj__3053));
} else
{new_bucket__3052.push(k,v);
return (new cljs.core.HashMap(this__3049.meta,cljs.core.inc.call(null,this__3049.count),new_hashobj__3053));
}
} else
{var new_hashobj__3056 = goog.object.clone.call(null,this__3049.hashobj);

(new_hashobj__3056[h__3050] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3049.meta,cljs.core.inc.call(null,this__3049.count),new_hashobj__3056));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3057 = this;
var bucket__3058 = (this__3057.hashobj[cljs.core.hash.call(null,k)]);
var i__3059 = (cljs.core.truth_(bucket__3058)?cljs.core.scan_array.call(null,2,k,bucket__3058):null);

if(cljs.core.truth_(i__3059))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3064 = null;
var G__3064__3065 = (function (coll,k){
var this__3060 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3064__3066 = (function (coll,k,not_found){
var this__3061 = this;
var bucket__3062 = (this__3061.hashobj[cljs.core.hash.call(null,k)]);
var i__3063 = (cljs.core.truth_(bucket__3062)?cljs.core.scan_array.call(null,2,k,bucket__3062):null);

if(cljs.core.truth_(i__3063))
{return (bucket__3062[cljs.core.inc.call(null,i__3063)]);
} else
{return not_found;
}
});
G__3064 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3064__3065.call(this,coll,k);
case  3 :
return G__3064__3066.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3064;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3068 = ks.length;

var i__3069 = 0;
var out__3070 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3069,len__3068)))
{{
var G__3071 = cljs.core.inc.call(null,i__3069);
var G__3072 = cljs.core.assoc.call(null,out__3070,(ks[i__3069]),(vs[i__3069]));
i__3069 = G__3071;
out__3070 = G__3072;
continue;
}
} else
{return out__3070;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3073 = null;
var G__3073__3074 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3073__3075 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3073 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3073__3074.call(this,_,k);
case  3 :
return G__3073__3075.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3073;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3077 = cljs.core.seq.call(null,keyvals);
var out__3078 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3077))
{{
var G__3079 = cljs.core.nnext.call(null,in$__3077);
var G__3080 = cljs.core.assoc.call(null,out__3078,cljs.core.first.call(null,in$__3077),cljs.core.second.call(null,in$__3077));
in$__3077 = G__3079;
out__3078 = G__3080;
continue;
}
} else
{return out__3078;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3081){
var keyvals = cljs.core.seq( arglist__3081 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3082_SHARP_,p2__3083_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____3084 = p1__3082_SHARP_;

if(cljs.core.truth_(or__3576__auto____3084))
{return or__3576__auto____3084;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3083_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3085){
var maps = cljs.core.seq( arglist__3085 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3088 = (function (m,e){
var k__3086 = cljs.core.first.call(null,e);
var v__3087 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3086)))
{return cljs.core.assoc.call(null,m,k__3086,f.call(null,cljs.core.get.call(null,m,k__3086),v__3087));
} else
{return cljs.core.assoc.call(null,m,k__3086,v__3087);
}
});
var merge2__3090 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3088,(function (){var or__3576__auto____3089 = m1;

if(cljs.core.truth_(or__3576__auto____3089))
{return or__3576__auto____3089;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3090,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3091){
var f = cljs.core.first(arglist__3091);
var maps = cljs.core.rest(arglist__3091);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3093 = cljs.core.ObjMap.fromObject([],{});
var keys__3094 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3094))
{var key__3095 = cljs.core.first.call(null,keys__3094);
var entry__3096 = cljs.core.get.call(null,map,key__3095);

{
var G__3097 = (cljs.core.truth_(entry__3096)?cljs.core.assoc.call(null,ret__3093,key__3095,entry__3096):ret__3093);
var G__3098 = cljs.core.next.call(null,keys__3094);
ret__3093 = G__3097;
keys__3094 = G__3098;
continue;
}
} else
{return ret__3093;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3099 = this;
return (new cljs.core.Set(this__3099.meta,cljs.core.dissoc.call(null,this__3099.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3100 = this;
var and__3574__auto____3101 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____3101))
{var and__3574__auto____3102 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____3102))
{return cljs.core.every_QMARK_.call(null,(function (p1__3092_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3092_SHARP_);
}),other);
} else
{return and__3574__auto____3102;
}
} else
{return and__3574__auto____3101;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3103 = this;
return (new cljs.core.Set(this__3103.meta,cljs.core.assoc.call(null,this__3103.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3104 = this;
return cljs.core.keys.call(null,this__3104.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3105 = this;
return (new cljs.core.Set(meta,this__3105.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3106 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3106.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3107 = this;
return this__3107.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3108 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3109 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3112 = null;
var G__3112__3113 = (function (coll,v){
var this__3110 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3112__3114 = (function (coll,v,not_found){
var this__3111 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3111.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3112 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3112__3113.call(this,coll,v);
case  3 :
return G__3112__3114.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3112;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3116 = null;
var G__3116__3117 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3116__3118 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3116 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3116__3117.call(this,_,k);
case  3 :
return G__3116__3118.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3116;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3121 = cljs.core.seq.call(null,coll);
var out__3122 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3121))))
{{
var G__3123 = cljs.core.rest.call(null,in$__3121);
var G__3124 = cljs.core.conj.call(null,out__3122,cljs.core.first.call(null,in$__3121));
in$__3121 = G__3123;
out__3122 = G__3124;
continue;
}
} else
{return out__3122;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3125 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____3126 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____3126))
{var e__3127 = temp__3723__auto____3126;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3127));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3125,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3120_SHARP_){
var temp__3723__auto____3128 = cljs.core.find.call(null,smap,p1__3120_SHARP_);

if(cljs.core.truth_(temp__3723__auto____3128))
{var e__3129 = temp__3723__auto____3128;

return cljs.core.second.call(null,e__3129);
} else
{return p1__3120_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3137 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3130,seen){
while(true){
var vec__3131__3132 = p__3130;
var f__3133 = cljs.core.nth.call(null,vec__3131__3132,0,null);
var xs__3134 = vec__3131__3132;

var temp__3726__auto____3135 = cljs.core.seq.call(null,xs__3134);

if(cljs.core.truth_(temp__3726__auto____3135))
{var s__3136 = temp__3726__auto____3135;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3133)))
{{
var G__3138 = cljs.core.rest.call(null,s__3136);
var G__3139 = seen;
p__3130 = G__3138;
seen = G__3139;
continue;
}
} else
{return cljs.core.cons.call(null,f__3133,step.call(null,cljs.core.rest.call(null,s__3136),cljs.core.conj.call(null,seen,f__3133)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3137.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3140 = cljs.core.Vector.fromArray([]);
var s__3141 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3141)))
{{
var G__3142 = cljs.core.conj.call(null,ret__3140,cljs.core.first.call(null,s__3141));
var G__3143 = cljs.core.next.call(null,s__3141);
ret__3140 = G__3142;
s__3141 = G__3143;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3140);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____3144 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3144))
{return or__3576__auto____3144;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3145 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3145,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3145));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____3146 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3146))
{return or__3576__auto____3146;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3147 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3147,-1)))
{return cljs.core.subs.call(null,x,2,i__3147);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3150 = cljs.core.ObjMap.fromObject([],{});
var ks__3151 = cljs.core.seq.call(null,keys);
var vs__3152 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3153 = ks__3151;

if(cljs.core.truth_(and__3574__auto____3153))
{return vs__3152;
} else
{return and__3574__auto____3153;
}
})()))
{{
var G__3154 = cljs.core.assoc.call(null,map__3150,cljs.core.first.call(null,ks__3151),cljs.core.first.call(null,vs__3152));
var G__3155 = cljs.core.next.call(null,ks__3151);
var G__3156 = cljs.core.next.call(null,vs__3152);
map__3150 = G__3154;
ks__3151 = G__3155;
vs__3152 = G__3156;
continue;
}
} else
{return map__3150;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3159 = (function (k,x){
return x;
});
var max_key__3160 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3161 = (function() { 
var G__3163__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3148_SHARP_,p2__3149_SHARP_){
return max_key.call(null,k,p1__3148_SHARP_,p2__3149_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3163 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3163__delegate.call(this, k, x, y, more);
};
G__3163.cljs$lang$maxFixedArity = 3;
G__3163.cljs$lang$applyTo = (function (arglist__3164){
var k = cljs.core.first(arglist__3164);
var x = cljs.core.first(cljs.core.next(arglist__3164));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3164)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3164)));
return G__3163__delegate.call(this, k, x, y, more);
});
return G__3163;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3159.call(this,k,x);
case  3 :
return max_key__3160.call(this,k,x,y);
default:
return max_key__3161.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3161.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3165 = (function (k,x){
return x;
});
var min_key__3166 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3167 = (function() { 
var G__3169__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3157_SHARP_,p2__3158_SHARP_){
return min_key.call(null,k,p1__3157_SHARP_,p2__3158_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3169 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3169__delegate.call(this, k, x, y, more);
};
G__3169.cljs$lang$maxFixedArity = 3;
G__3169.cljs$lang$applyTo = (function (arglist__3170){
var k = cljs.core.first(arglist__3170);
var x = cljs.core.first(cljs.core.next(arglist__3170));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3170)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3170)));
return G__3169__delegate.call(this, k, x, y, more);
});
return G__3169;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3165.call(this,k,x);
case  3 :
return min_key__3166.call(this,k,x,y);
default:
return min_key__3167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3167.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3173 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3174 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3171 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3171))
{var s__3172 = temp__3726__auto____3171;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3172),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3172)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3173.call(this,n,step);
case  3 :
return partition_all__3174.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3176 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3176))
{var s__3177 = temp__3726__auto____3176;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3177))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3177),take_while.call(null,pred,cljs.core.rest.call(null,s__3177)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1, and end
* to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3178 = (function (){
return cljs.core.iterate.call(null,cljs.core.inc,0);
});
var range__3179 = (function (end){
return range.call(null,0,end,1);
});
var range__3180 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3181 = (function (start,end,step){
return cljs.core.take_while.call(null,(function (n){
return cljs.core._LT_.call(null,n,end);
}),cljs.core.iterate.call(null,(function (x){
return cljs.core._PLUS_.call(null,x,step);
}),start));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3178.call(this);
case  1 :
return range__3179.call(this,start);
case  2 :
return range__3180.call(this,start,end);
case  3 :
return range__3181.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3183 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3183))
{var s__3184 = temp__3726__auto____3183;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3184),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3184)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3186))
{var s__3187 = temp__3726__auto____3186;

var fst__3188 = cljs.core.first.call(null,s__3187);
var fv__3189 = f.call(null,fst__3188);
var run__3190 = cljs.core.cons.call(null,fst__3188,cljs.core.take_while.call(null,(function (p1__3185_SHARP_){
return cljs.core._EQ_.call(null,fv__3189,f.call(null,p1__3185_SHARP_));
}),cljs.core.next.call(null,s__3187)));

return cljs.core.cons.call(null,run__3190,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3190),s__3187))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3205 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3201 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3201))
{var s__3202 = temp__3723__auto____3201;

return reductions.call(null,f,cljs.core.first.call(null,s__3202),cljs.core.rest.call(null,s__3202));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3206 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3203 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3203))
{var s__3204 = temp__3726__auto____3203;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3204)),cljs.core.rest.call(null,s__3204));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3205.call(this,f,init);
case  3 :
return reductions__3206.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3209 = (function (f){
return (function() {
var G__3214 = null;
var G__3214__3215 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3214__3216 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3214__3217 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3214__3218 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3214__3219 = (function() { 
var G__3221__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3221 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3221__delegate.call(this, x, y, z, args);
};
G__3221.cljs$lang$maxFixedArity = 3;
G__3221.cljs$lang$applyTo = (function (arglist__3222){
var x = cljs.core.first(arglist__3222);
var y = cljs.core.first(cljs.core.next(arglist__3222));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3222)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3222)));
return G__3221__delegate.call(this, x, y, z, args);
});
return G__3221;
})()
;
G__3214 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3214__3215.call(this);
case  1 :
return G__3214__3216.call(this,x);
case  2 :
return G__3214__3217.call(this,x,y);
case  3 :
return G__3214__3218.call(this,x,y,z);
default:
return G__3214__3219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3214.cljs$lang$maxFixedArity = 3;
G__3214.cljs$lang$applyTo = G__3214__3219.cljs$lang$applyTo;
return G__3214;
})()
});
var juxt__3210 = (function (f,g){
return (function() {
var G__3223 = null;
var G__3223__3224 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3223__3225 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3223__3226 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3223__3227 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3223__3228 = (function() { 
var G__3230__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3230 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3230__delegate.call(this, x, y, z, args);
};
G__3230.cljs$lang$maxFixedArity = 3;
G__3230.cljs$lang$applyTo = (function (arglist__3231){
var x = cljs.core.first(arglist__3231);
var y = cljs.core.first(cljs.core.next(arglist__3231));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3231)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3231)));
return G__3230__delegate.call(this, x, y, z, args);
});
return G__3230;
})()
;
G__3223 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3223__3224.call(this);
case  1 :
return G__3223__3225.call(this,x);
case  2 :
return G__3223__3226.call(this,x,y);
case  3 :
return G__3223__3227.call(this,x,y,z);
default:
return G__3223__3228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3223.cljs$lang$maxFixedArity = 3;
G__3223.cljs$lang$applyTo = G__3223__3228.cljs$lang$applyTo;
return G__3223;
})()
});
var juxt__3211 = (function (f,g,h){
return (function() {
var G__3232 = null;
var G__3232__3233 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3232__3234 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3232__3235 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3232__3236 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3232__3237 = (function() { 
var G__3239__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3239 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3239__delegate.call(this, x, y, z, args);
};
G__3239.cljs$lang$maxFixedArity = 3;
G__3239.cljs$lang$applyTo = (function (arglist__3240){
var x = cljs.core.first(arglist__3240);
var y = cljs.core.first(cljs.core.next(arglist__3240));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3240)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3240)));
return G__3239__delegate.call(this, x, y, z, args);
});
return G__3239;
})()
;
G__3232 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3232__3233.call(this);
case  1 :
return G__3232__3234.call(this,x);
case  2 :
return G__3232__3235.call(this,x,y);
case  3 :
return G__3232__3236.call(this,x,y,z);
default:
return G__3232__3237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3232.cljs$lang$maxFixedArity = 3;
G__3232.cljs$lang$applyTo = G__3232__3237.cljs$lang$applyTo;
return G__3232;
})()
});
var juxt__3212 = (function() { 
var G__3241__delegate = function (f,g,h,fs){
var fs__3208 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3242 = null;
var G__3242__3243 = (function (){
return cljs.core.reduce.call(null,(function (p1__3191_SHARP_,p2__3192_SHARP_){
return cljs.core.conj.call(null,p1__3191_SHARP_,p2__3192_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3208);
});
var G__3242__3244 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3193_SHARP_,p2__3194_SHARP_){
return cljs.core.conj.call(null,p1__3193_SHARP_,p2__3194_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3208);
});
var G__3242__3245 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3195_SHARP_,p2__3196_SHARP_){
return cljs.core.conj.call(null,p1__3195_SHARP_,p2__3196_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3208);
});
var G__3242__3246 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3197_SHARP_,p2__3198_SHARP_){
return cljs.core.conj.call(null,p1__3197_SHARP_,p2__3198_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3208);
});
var G__3242__3247 = (function() { 
var G__3249__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3199_SHARP_,p2__3200_SHARP_){
return cljs.core.conj.call(null,p1__3199_SHARP_,cljs.core.apply.call(null,p2__3200_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3208);
};
var G__3249 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3249__delegate.call(this, x, y, z, args);
};
G__3249.cljs$lang$maxFixedArity = 3;
G__3249.cljs$lang$applyTo = (function (arglist__3250){
var x = cljs.core.first(arglist__3250);
var y = cljs.core.first(cljs.core.next(arglist__3250));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3250)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3250)));
return G__3249__delegate.call(this, x, y, z, args);
});
return G__3249;
})()
;
G__3242 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3242__3243.call(this);
case  1 :
return G__3242__3244.call(this,x);
case  2 :
return G__3242__3245.call(this,x,y);
case  3 :
return G__3242__3246.call(this,x,y,z);
default:
return G__3242__3247.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3242.cljs$lang$maxFixedArity = 3;
G__3242.cljs$lang$applyTo = G__3242__3247.cljs$lang$applyTo;
return G__3242;
})()
};
var G__3241 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3241__delegate.call(this, f, g, h, fs);
};
G__3241.cljs$lang$maxFixedArity = 3;
G__3241.cljs$lang$applyTo = (function (arglist__3251){
var f = cljs.core.first(arglist__3251);
var g = cljs.core.first(cljs.core.next(arglist__3251));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3251)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3251)));
return G__3241__delegate.call(this, f, g, h, fs);
});
return G__3241;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3209.call(this,f);
case  2 :
return juxt__3210.call(this,f,g);
case  3 :
return juxt__3211.call(this,f,g,h);
default:
return juxt__3212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3212.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3253 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3256 = cljs.core.next.call(null,coll);
coll = G__3256;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3254 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3252 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3252))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3252;
}
})()))
{{
var G__3257 = cljs.core.dec.call(null,n);
var G__3258 = cljs.core.next.call(null,coll);
n = G__3257;
coll = G__3258;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3253.call(this,n);
case  2 :
return dorun__3254.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3259 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3260 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3259.call(this,n);
case  2 :
return doall__3260.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3262 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3262),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3262),1)))
{return cljs.core.first.call(null,matches__3262);
} else
{return cljs.core.vec.call(null,matches__3262);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3263 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3263)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3263),1)))
{return cljs.core.first.call(null,matches__3263);
} else
{return cljs.core.vec.call(null,matches__3263);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3264 = cljs.core.re_find.call(null,re,s);
var match_idx__3265 = s.search(re);
var match_str__3266 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3264))?cljs.core.first.call(null,match_data__3264):match_data__3264);
var post_match__3267 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3265,cljs.core.count.call(null,match_str__3266)));

if(cljs.core.truth_(match_data__3264))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3264,re_seq.call(null,re,post_match__3267));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new goog.global['RegExp'](s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3268_SHARP_){
return print_one.call(null,p1__3268_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
goog.global['print'].call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3269 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3269))
{var and__3574__auto____3272 = (function (){var x__118__auto____3270 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3271 = x__118__auto____3270;

if(cljs.core.truth_(and__3574__auto____3271))
{return x__118__auto____3270.cljs$core$IMeta$;
} else
{return and__3574__auto____3271;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__118__auto____3270);
}
})();

if(cljs.core.truth_(and__3574__auto____3272))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3272;
}
} else
{return and__3574__auto____3269;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__118__auto____3273 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3274 = x__118__auto____3273;

if(cljs.core.truth_(and__3574__auto____3274))
{return x__118__auto____3273.cljs$core$IPrintable$;
} else
{return and__3574__auto____3274;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__118__auto____3273);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3275 = cljs.core.first.call(null,objs);
var sb__3276 = (new goog.string.StringBuffer());

var G__3277__3278 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3277__3278))
{var obj__3279 = cljs.core.first.call(null,G__3277__3278);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3279,first_obj__3275)))
{} else
{sb__3276.append(" ");
}
var G__3280__3281 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3279,opts));

while(true){
if(cljs.core.truth_(G__3280__3281))
{var string__3282 = cljs.core.first.call(null,G__3280__3281);

sb__3276.append(string__3282);
{
var G__3283 = cljs.core.next.call(null,G__3280__3281);
G__3280__3281 = G__3283;
continue;
}
} else
{}
break;
}
{
var G__3284 = cljs.core.next.call(null,G__3277__3278);
G__3277__3278 = G__3284;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3276);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3285 = cljs.core.first.call(null,objs);

var G__3286__3287 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3286__3287))
{var obj__3288 = cljs.core.first.call(null,G__3286__3287);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3288,first_obj__3285)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3289__3290 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3288,opts));

while(true){
if(cljs.core.truth_(G__3289__3290))
{var string__3291 = cljs.core.first.call(null,G__3289__3290);

cljs.core.string_print.call(null,string__3291);
{
var G__3292 = cljs.core.next.call(null,G__3289__3290);
G__3289__3290 = G__3292;
continue;
}
} else
{}
break;
}
{
var G__3293 = cljs.core.next.call(null,G__3286__3287);
G__3286__3287 = G__3293;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3294){
var objs = cljs.core.seq( arglist__3294 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3295){
var objs = cljs.core.seq( arglist__3295 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3296){
var objs = cljs.core.seq( arglist__3296 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3297){
var objs = cljs.core.seq( arglist__3297 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3298){
var objs = cljs.core.seq( arglist__3298 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3299 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3299,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3300 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3300))
{var nspc__3301 = temp__3726__auto____3300;

return cljs.core.str.call(null,nspc__3301,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3302 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3302))
{var nspc__3303 = temp__3726__auto____3302;

return cljs.core.str.call(null,nspc__3303,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3304 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3304,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3305 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3305.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3306 = this;
return this__3306.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3307 = this;
return this__3307.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3308 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3315 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3316 = (function() { 
var G__3318__delegate = function (x,p__3309){
var map__3310__3311 = p__3309;
var map__3310__3312 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3310__3311))?cljs.core.apply.call(null,cljs.core.hash_map,map__3310__3311):map__3310__3311);
var validator__3313 = cljs.core.get.call(null,map__3310__3312,"﷐'validator");
var meta__3314 = cljs.core.get.call(null,map__3310__3312,"﷐'meta");

return (new cljs.core.Atom(x,meta__3314,validator__3313));
};
var G__3318 = function (x,var_args){
var p__3309 = null;
if (goog.isDef(var_args)) {
  p__3309 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3318__delegate.call(this, x, p__3309);
};
G__3318.cljs$lang$maxFixedArity = 1;
G__3318.cljs$lang$applyTo = (function (arglist__3319){
var x = cljs.core.first(arglist__3319);
var p__3309 = cljs.core.rest(arglist__3319);
return G__3318__delegate.call(this, x, p__3309);
});
return G__3318;
})()
;
atom = function(x,var_args){
var p__3309 = var_args;
switch(arguments.length){
case  1 :
return atom__3315.call(this,x);
default:
return atom__3316.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3316.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3320 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3320))
{var v__3321 = temp__3726__auto____3320;

if(cljs.core.truth_(v__3321.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3322 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3323 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3324 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3325 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3326 = (function() { 
var G__3328__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3328 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3328__delegate.call(this, a, f, x, y, z, more);
};
G__3328.cljs$lang$maxFixedArity = 5;
G__3328.cljs$lang$applyTo = (function (arglist__3329){
var a = cljs.core.first(arglist__3329);
var f = cljs.core.first(cljs.core.next(arglist__3329));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3329)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3329))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3329)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3329)))));
return G__3328__delegate.call(this, a, f, x, y, z, more);
});
return G__3328;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3322.call(this,a,f);
case  3 :
return swap_BANG___3323.call(this,a,f,x);
case  4 :
return swap_BANG___3324.call(this,a,f,x,y);
case  5 :
return swap_BANG___3325.call(this,a,f,x,y,z);
default:
return swap_BANG___3326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3326.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3330){
var iref = cljs.core.first(arglist__3330);
var f = cljs.core.first(cljs.core.next(arglist__3330));
var args = cljs.core.rest(cljs.core.next(arglist__3330));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3331 = (function (){
return gensym.call(null,"G__");
});
var gensym__3332 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3331.call(this);
case  1 :
return gensym__3332.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3334 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3334.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3335 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3335.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3335.state,this__3335.f);
}
return cljs.core.deref.call(null,this__3335.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3336){
var body = cljs.core.seq( arglist__3336 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3337__3338 = options;
var map__3337__3339 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3337__3338))?cljs.core.apply.call(null,cljs.core.hash_map,map__3337__3338):map__3337__3338);
var keywordize_keys__3340 = cljs.core.get.call(null,map__3337__3339,"﷐'keywordize-keys");
var keyfn__3341 = (cljs.core.truth_(keywordize_keys__3340)?cljs.core.keyword:cljs.core.str);
var f__3347 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__172__auto____3346 = (function iter__3342(s__3343){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3343__3344 = s__3343;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3343__3344)))
{var k__3345 = cljs.core.first.call(null,s__3343__3344);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3341.call(null,k__3345),thisfn.call(null,(x[k__3345]))]),iter__3342.call(null,cljs.core.rest.call(null,s__3343__3344)));
} else
{return null;
}
break;
}
})));
});

return iter__172__auto____3346.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3347.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3348){
var x = cljs.core.first(arglist__3348);
var options = cljs.core.rest(arglist__3348);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3349 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3353__delegate = function (args){
var temp__3723__auto____3350 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3349),args);

if(cljs.core.truth_(temp__3723__auto____3350))
{var v__3351 = temp__3723__auto____3350;

return v__3351;
} else
{var ret__3352 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3349,cljs.core.assoc,args,ret__3352);
return ret__3352;
}
};
var G__3353 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3353__delegate.call(this, args);
};
G__3353.cljs$lang$maxFixedArity = 0;
G__3353.cljs$lang$applyTo = (function (arglist__3354){
var args = cljs.core.seq( arglist__3354 );;
return G__3353__delegate.call(this, args);
});
return G__3353;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3356 = (function (f){
while(true){
var ret__3355 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3355)))
{{
var G__3359 = ret__3355;
f = G__3359;
continue;
}
} else
{return ret__3355;
}
break;
}
});
var trampoline__3357 = (function() { 
var G__3360__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3360 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3360__delegate.call(this, f, args);
};
G__3360.cljs$lang$maxFixedArity = 1;
G__3360.cljs$lang$applyTo = (function (arglist__3361){
var f = cljs.core.first(arglist__3361);
var args = cljs.core.rest(arglist__3361);
return G__3360__delegate.call(this, f, args);
});
return G__3360;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3356.call(this,f);
default:
return trampoline__3357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3357.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3362 = (function (){
return rand.call(null,1);
});
var rand__3363 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3362.call(this);
case  1 :
return rand__3363.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3365 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3365,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3365,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3374 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3375 = (function (h,child,parent){
var or__3576__auto____3366 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____3366))
{return or__3576__auto____3366;
} else
{var or__3576__auto____3367 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____3367))
{return or__3576__auto____3367;
} else
{var and__3574__auto____3368 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____3368))
{var and__3574__auto____3369 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____3369))
{var and__3574__auto____3370 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____3370))
{var ret__3371 = true;
var i__3372 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3373 = cljs.core.not.call(null,ret__3371);

if(cljs.core.truth_(or__3576__auto____3373))
{return or__3576__auto____3373;
} else
{return cljs.core._EQ_.call(null,i__3372,cljs.core.count.call(null,parent));
}
})()))
{return ret__3371;
} else
{{
var G__3377 = isa_QMARK_.call(null,h,child.call(null,i__3372),parent.call(null,i__3372));
var G__3378 = cljs.core.inc.call(null,i__3372);
ret__3371 = G__3377;
i__3372 = G__3378;
continue;
}
}
break;
}
} else
{return and__3574__auto____3370;
}
} else
{return and__3574__auto____3369;
}
} else
{return and__3574__auto____3368;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3374.call(this,h,child);
case  3 :
return isa_QMARK___3375.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3379 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3380 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3379.call(this,h);
case  2 :
return parents__3380.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3382 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3383 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3382.call(this,h);
case  2 :
return ancestors__3383.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3385 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3386 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3385.call(this,h);
case  2 :
return descendants__3386.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3396 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3397 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3391 = "﷐'parents".call(null,h);
var td__3392 = "﷐'descendants".call(null,h);
var ta__3393 = "﷐'ancestors".call(null,h);
var tf__3394 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____3395 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3391.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3393.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3393.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3391,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3394.call(null,"﷐'ancestors".call(null,h),tag,td__3392,parent,ta__3393),"﷐'descendants":tf__3394.call(null,"﷐'descendants".call(null,h),parent,ta__3393,tag,td__3392)});
})());

if(cljs.core.truth_(or__3576__auto____3395))
{return or__3576__auto____3395;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3396.call(this,h,tag);
case  3 :
return derive__3397.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3403 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3404 = (function (h,tag,parent){
var parentMap__3399 = "﷐'parents".call(null,h);
var childsParents__3400 = (cljs.core.truth_(parentMap__3399.call(null,tag))?cljs.core.disj.call(null,parentMap__3399.call(null,tag),parent):cljs.core.set([]));
var newParents__3401 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3400))?cljs.core.assoc.call(null,parentMap__3399,tag,childsParents__3400):cljs.core.dissoc.call(null,parentMap__3399,tag));
var deriv_seq__3402 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3388_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3388_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3388_SHARP_),cljs.core.second.call(null,p1__3388_SHARP_)));
}),cljs.core.seq.call(null,newParents__3401)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3399.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3389_SHARP_,p2__3390_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3389_SHARP_,p2__3390_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3402));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3403.call(this,h,tag);
case  3 :
return underive__3404.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3406 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____3408 = (cljs.core.truth_((function (){var and__3574__auto____3407 = xprefs__3406;

if(cljs.core.truth_(and__3574__auto____3407))
{return xprefs__3406.call(null,y);
} else
{return and__3574__auto____3407;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____3408))
{return or__3576__auto____3408;
} else
{var or__3576__auto____3410 = (function (){var ps__3409 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3409))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3409),prefer_table)))
{} else
{}
{
var G__3413 = cljs.core.rest.call(null,ps__3409);
ps__3409 = G__3413;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3410))
{return or__3576__auto____3410;
} else
{var or__3576__auto____3412 = (function (){var ps__3411 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3411))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3411),y,prefer_table)))
{} else
{}
{
var G__3414 = cljs.core.rest.call(null,ps__3411);
ps__3411 = G__3414;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3412))
{return or__3576__auto____3412;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____3415 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____3415))
{return or__3576__auto____3415;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3424 = cljs.core.reduce.call(null,(function (be,p__3416){
var vec__3417__3418 = p__3416;
var k__3419 = cljs.core.nth.call(null,vec__3417__3418,0,null);
var ___3420 = cljs.core.nth.call(null,vec__3417__3418,1,null);
var e__3421 = vec__3417__3418;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3419)))
{var be2__3423 = (cljs.core.truth_((function (){var or__3576__auto____3422 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____3422))
{return or__3576__auto____3422;
} else
{return cljs.core.dominates.call(null,k__3419,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3421:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3423),k__3419,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3419," and ",cljs.core.first.call(null,be2__3423),", and neither is preferred");
}
return be2__3423;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3424))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3424));
return cljs.core.second.call(null,best_entry__3424);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3425 = mf;

if(cljs.core.truth_(and__3574__auto____3425))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____3425;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____3426 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3426))
{return or__3576__auto____3426;
} else
{var or__3576__auto____3427 = (_reset["_"]);

if(cljs.core.truth_(or__3576__auto____3427))
{return or__3576__auto____3427;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____3428 = mf;

if(cljs.core.truth_(and__3574__auto____3428))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____3428;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____3429 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3429))
{return or__3576__auto____3429;
} else
{var or__3576__auto____3430 = (_add_method["_"]);

if(cljs.core.truth_(or__3576__auto____3430))
{return or__3576__auto____3430;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3431 = mf;

if(cljs.core.truth_(and__3574__auto____3431))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____3431;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3432 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3432))
{return or__3576__auto____3432;
} else
{var or__3576__auto____3433 = (_remove_method["_"]);

if(cljs.core.truth_(or__3576__auto____3433))
{return or__3576__auto____3433;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____3434 = mf;

if(cljs.core.truth_(and__3574__auto____3434))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____3434;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____3435 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3435))
{return or__3576__auto____3435;
} else
{var or__3576__auto____3436 = (_prefer_method["_"]);

if(cljs.core.truth_(or__3576__auto____3436))
{return or__3576__auto____3436;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3437 = mf;

if(cljs.core.truth_(and__3574__auto____3437))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____3437;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3438 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3438))
{return or__3576__auto____3438;
} else
{var or__3576__auto____3439 = (_get_method["_"]);

if(cljs.core.truth_(or__3576__auto____3439))
{return or__3576__auto____3439;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3440 = mf;

if(cljs.core.truth_(and__3574__auto____3440))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____3440;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____3441 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3441))
{return or__3576__auto____3441;
} else
{var or__3576__auto____3442 = (_methods["_"]);

if(cljs.core.truth_(or__3576__auto____3442))
{return or__3576__auto____3442;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3443 = mf;

if(cljs.core.truth_(and__3574__auto____3443))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____3443;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____3444 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3444))
{return or__3576__auto____3444;
} else
{var or__3576__auto____3445 = (_prefers["_"]);

if(cljs.core.truth_(or__3576__auto____3445))
{return or__3576__auto____3445;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____3446 = mf;

if(cljs.core.truth_(and__3574__auto____3446))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____3446;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____3447 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3447))
{return or__3576__auto____3447;
} else
{var or__3576__auto____3448 = (_invoke["_"]);

if(cljs.core.truth_(or__3576__auto____3448))
{return or__3576__auto____3448;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3449 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3450 = cljs.core._get_method.call(null,mf,dispatch_val__3449);

if(cljs.core.truth_(target_fn__3450))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3449);
}
return cljs.core.apply.call(null,target_fn__3450,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3451 = this;
cljs.core.swap_BANG_.call(null,this__3451.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3451.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3451.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3451.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3452 = this;
cljs.core.swap_BANG_.call(null,this__3452.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3452.method_cache,this__3452.method_table,this__3452.cached_hierarchy,this__3452.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3453 = this;
cljs.core.swap_BANG_.call(null,this__3453.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3453.method_cache,this__3453.method_table,this__3453.cached_hierarchy,this__3453.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3454 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3454.cached_hierarchy),cljs.core.deref.call(null,this__3454.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3454.method_cache,this__3454.method_table,this__3454.cached_hierarchy,this__3454.hierarchy);
}
var temp__3723__auto____3455 = cljs.core.deref.call(null,this__3454.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____3455))
{var target_fn__3456 = temp__3723__auto____3455;

return target_fn__3456;
} else
{var temp__3723__auto____3457 = cljs.core.find_and_cache_best_method.call(null,this__3454.name,dispatch_val,this__3454.hierarchy,this__3454.method_table,this__3454.prefer_table,this__3454.method_cache,this__3454.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____3457))
{var target_fn__3458 = temp__3723__auto____3457;

return target_fn__3458;
} else
{return cljs.core.deref.call(null,this__3454.method_table).call(null,this__3454.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3459 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3459.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3459.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3459.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3459.method_cache,this__3459.method_table,this__3459.cached_hierarchy,this__3459.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3460 = this;
return cljs.core.deref.call(null,this__3460.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3461 = this;
return cljs.core.deref.call(null,this__3461.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3462 = this;
return cljs.core.do_invoke.call(null,mf,this__3462.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3463__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3463 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3463__delegate.call(this, _, args);
};
G__3463.cljs$lang$maxFixedArity = 1;
G__3463.cljs$lang$applyTo = (function (arglist__3464){
var _ = cljs.core.first(arglist__3464);
var args = cljs.core.rest(arglist__3464);
return G__3463__delegate.call(this, _, args);
});
return G__3463;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
