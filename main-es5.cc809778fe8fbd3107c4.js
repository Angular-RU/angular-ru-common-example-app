!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,n,e){t.exports=e("2v48")},"2cf7":function(n,i,r){"use strict";r.d(i,"a",function(){return m});var o=r("kZht");function u(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=Math.pow(10,n),i=+(n?t*e:t).toFixed(8),r=Math.floor(i),o=i-r;return o>.5-1e-8&&o<.5+1e-8?(r%2==0?r:r+1)/e:Math.round(i)/e}var a=r("ulty");function s(t){var n,e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ru-RU",r=null==t?void 0:t.toString().replace(/\s/g,""),o=new Intl.NumberFormat(i).formatToParts(12345.6),u=Array.from(new Intl.NumberFormat(i,{useGrouping:!1}).format(9876543210)).reverse(),a=new RegExp("[".concat(null===(n=o.find(function(t){return"group"===t.type}))||void 0===n?void 0:n.value,"]"),"g"),s=new RegExp("[".concat(null===(e=o.find(function(t){return"decimal"===t.type}))||void 0===e?void 0:e.value,"]")),l=new RegExp("[".concat(u.join(""),"]"),"g");return(r=null==r?void 0:r.trim().replace(a,"").replace(s,".").replace(l,function(t){var n,e;return null!==(e=null===(n=new Map(u.map(function(t,n){return[t,n]})).get(t))||void 0===n?void 0:n.toString())&&void 0!==e?e:""}))?+r:NaN}var l,c=r("7xE1"),v=r("xr+C"),f=r("bwdy"),h=r("KTx3"),d=r("pSWu"),p=r("3kIJ"),m=((l=function(){function n(e,i,r,o,u){t(this,n),this.el=e,this.ngControl=r,this.ngZone=o,this.cd=u,this.subscriptions=new f.a,this.previousLang=null,this.maximumFractionDigits=3,this.isInsideAngularZone=!0,this.options={},this.markedAsDirty=!0,this.cursorPointer=0,this.setFirstLocalOptionsByGlobal(i)}return e(n,[{key:"isInAngularZone",get:function(){return this.isInsideAngularZone}},{key:"amountFormatOptions",get:function(){return this.options},set:function(t){this.options=Object.assign(Object.assign({},this.options),null!=t?t:{}),this.recalculateWhenChangesOptions()}},{key:"dirty",get:function(){return this.markedAsDirty}},{key:"element",get:function(){return this.el.nativeElement}},{key:"setLang",value:function(t){this.options.lang=t,this.recalculateWhenChangesOptions()}},{key:"getCursorPosition",value:function(){return this.cursorPointer}},{key:"ngOnInit",value:function(){this.setupElementType(),this.subscribeToElementEvents()}},{key:"ngAfterViewInit",value:function(){this.format()}},{key:"ngOnDestroy",value:function(){this.unsubscribeFromElementEvents()}},{key:"subscribeToElementEvents",value:function(){var t,n=this;null===(t=this.ngZone)||void 0===t||t.runOutsideAngular(function(){n.subscriptions.add(Object(h.a)(n.element,"input").subscribe(function(){n.isInsideAngularZone=o.A.isInAngularZone(),n.format()})),n.subscriptions.add(Object(h.a)(n.element,"blur").subscribe(function(){n.isInsideAngularZone=o.A.isInAngularZone(),n.formatOnBlur()}))})}},{key:"unsubscribeFromElementEvents",value:function(){this.subscriptions.unsubscribe()}},{key:"formatOnBlur",value:function(){var t;this.isIncorrectPreviewAfterBlur()&&(this.element.value=null!==(t=Object(v.b)(this.element.value))&&void 0!==t?t:"")}},{key:"format",value:function(){var t,n,e=this.getFractionSeparator();this.cursorPointer=null!==(t=this.element.selectionStart)&&void 0!==t?t:0;var i=this.cursorPointer!==this.element.value.length;if(this.replaceAllInvalidSymbolsBeforeTranslation(),this.viewModelIsOnlyMinus())return this.resetModelValue(),void(this.element.value="-");var r=this.element.value,o=this.getNumberValueWithGaussRounded();this.setModelValueBy(o),this.element.value=r;var u=this.prepareConvertedToLocaleValue(o,e);this.element.value=isNaN(null===(n=this.ngControl)||void 0===n?void 0:n.value)?"":u,this.setSelectionRangeBy(i,u),this.preventExpressionChangedAfter()}},{key:"isIncorrectPreviewAfterBlur",value:function(){return this.lastSymbolIsFraction()||this.viewModelIsOnlyMinus()}},{key:"resetModelValue",value:function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===(t=this.ngControl)||void 0===t||t.reset(n)}},{key:"replaceAllInvalidSymbolsBeforeTranslation",value:function(){var t=this.getFractionSeparator();this.element.value=this.removeNonNumericSymbols(),this.element.value=this.replaceInvalidFractionPosition(t),this.element.value=this.removeDuplicateMinusOrFractionSymbol(t)}},{key:"getMaximumFractionDigits",value:function(){var t,n;return null!==(n=null===(t=this.options.formatOptions)||void 0===t?void 0:t.maximumFractionDigits)&&void 0!==n?n:this.maximumFractionDigits}},{key:"getLastSymbolsAsZeroDot",value:function(t){var n,e,i=this.getMaximumFractionDigits(),r=0===i?"":null===(e=null===(n=this.element.value.match(new RegExp("(\\".concat(t,")(.+)?"))))||void 0===n?void 0:n[0])||void 0===e?void 0:e.replace(/,|./,"");if(r&&r.length>this.maximumFractionDigits){var o=u(s("0".concat(t).concat(r),this.options.lang),i);r=isNaN(o)?"":o.toString().replace(/0\./,"")}return r}},{key:"prepareConvertedToLocaleValue",value:function(t,n){var e=this.lastSymbolIsFraction(),i=this.getConvertedToLocaleString(t);if(e)i="".concat(i).concat(n);else{var r=this.getLastSymbolsAsZeroDot(n);if(r){var o=i.split(n),u=null==o?void 0:o[0];i=u?"".concat(u).concat(n).concat(r):"0".concat(n).concat(r)}}return i.replace(/\s/g," ")}},{key:"setModelValueBy",value:function(t){isNaN(t)?this.resetModelValue():this.resetModelValue(t)}},{key:"getConvertedToLocaleString",value:function(t){return(isNaN(t)?"":t).toLocaleString(this.options.lang,this.options.formatOptions)}},{key:"getNumberValueWithGaussRounded",value:function(){var t=this.getMaximumFractionDigits();return u(s(this.element.value,this.options.lang),t)}},{key:"lastSymbolIsFraction",value:function(){return Object(v.a)(this.element.value)===this.getFractionSeparator()}},{key:"replaceInvalidFractionPosition",value:function(t){return this.element.value.replace(new RegExp("\\".concat(t,"+$"),"g"),t)}},{key:"removeDuplicateMinusOrFractionSymbol",value:function(t){var n=this.element.value,e=0;return 0!==(n=n.replace(new RegExp("\\".concat(t),"g"),function(){return++e>1?"":t})).indexOf("-")&&(n=n.replace(/-/g,"")),n}},{key:"viewModelIsOnlyMinus",value:function(){return"-"===this.element.value}},{key:"getFractionSeparator",value:function(){var t,n,e;return n=null!==(t=this.options.lang)&&void 0!==t?t:d.b.lang,(e={expectedValue:1000000.65,lastValuePositionBeforeFraction:-3}).expectedValue.toLocaleString(n).slice(e.lastValuePositionBeforeFraction).slice(0,1)}},{key:"removeNonNumericSymbols",value:function(){return this.viewModelIsOnlyMinus()?this.element.value:Object(v.c)(this.element.value)}},{key:"setSelectionRangeBy",value:function(t,n){try{t||(this.cursorPointer=n.length),this.element.setSelectionRange(this.cursorPointer,this.cursorPointer)}catch(e){}}},{key:"setFirstLocalOptionsByGlobal",value:function(t){this.options=Object(c.a)(t),this.previousLang=this.options.lang}},{key:"recalculateWhenChangesOptions",value:function(){var t,n=s(this.element.value,null!==(t=this.previousLang)&&void 0!==t?t:this.options.lang);this.element.value=n.toLocaleString(this.options.lang,this.options.formatOptions),this.previousLang=this.options.lang,this.format()}},{key:"preventExpressionChangedAfter",value:function(){this.markedAsDirty&&(Object(a.d)(this.cd),this.markedAsDirty=!1)}},{key:"setupElementType",value:function(){this.el.nativeElement.setAttribute("type","text")}}]),n}()).\u0275fac=function(t){return new(t||l)(o.Lb(o.l),o.Lb(d.a),o.Lb(p.f,8),o.Lb(o.A,8),o.Lb(o.h,8))},l.\u0275dir=o.Gb({type:l,selectors:[["","amountFormat",""]],inputs:{amountFormatOptions:"amountFormatOptions"}}),l)},"2v48":function(n,e,i){"use strict";i.r(e);var r,o,u=i("ENSU"),a=i("kZht"),s=i("6uGs"),l=i("uryd"),c=i("P0vk"),v=i("aJOL"),f=i("FxgA"),h=i("2wKV"),d=i("1VvW"),p=i("8EXQ"),m=((o=function n(){t(this,n)}).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=a.Fb({type:o,selectors:[["app-root"]],decls:32,vars:0,consts:[[1,"dashboard"],["mode","side","opened","",1,"dashboard__menu"],[1,"title"],["src","assets/img/angular.svg","alt","angular",1,"logo"],["routerLink","/",1,"logo-title"],[1,"menu"],[1,"menu__item"],["routerLink","samples/guide"],[1,"dashboard__content"]],template:function(t,n){1&t&&(a.Qb(0,"mat-drawer-container",0),a.lc(1,"\n    "),a.Qb(2,"mat-drawer",1),a.lc(3,"\n        "),a.Qb(4,"mat-toolbar",2),a.lc(5,"\n            "),a.Mb(6,"img",3),a.lc(7,"\n            "),a.Qb(8,"a",4),a.lc(9,"@angular-ru/common"),a.Pb(),a.lc(10,"\n        "),a.Pb(),a.lc(11,"\n\n        "),a.Qb(12,"mat-list",5),a.lc(13,"\n            "),a.Qb(14,"mat-list-item",6),a.lc(15,"\n                "),a.Qb(16,"a",7),a.lc(17,"- "),a.Qb(18,"strong"),a.lc(19,"Guide overview"),a.Pb(),a.Pb(),a.lc(20,"\n            "),a.Pb(),a.lc(21,"\n            "),a.Mb(22,"mat-divider"),a.lc(23,"\n        "),a.Pb(),a.lc(24,"\n    "),a.Pb(),a.lc(25,"\n\n    "),a.Qb(26,"mat-drawer-content",8),a.lc(27,"\n        "),a.Mb(28,"router-outlet"),a.lc(29,"\n    "),a.Pb(),a.lc(30,"\n"),a.Pb(),a.lc(31,"\n"))},directives:[c.b,c.a,v.a,d.a,l.a,l.b,p.a,c.c,d.c],encapsulation:2,changeDetection:0}),o),g=((r=function n(){t(this,n)}).\u0275fac=function(t){return new(t||r)},r.\u0275mod=a.Jb({type:r}),r.\u0275inj=a.Ib({imports:[[d.b.forRoot([{path:"",pathMatch:"full",redirectTo:"samples"},{path:"samples",children:[{path:"",pathMatch:"full",redirectTo:"guide"},{path:"guide",loadChildren:function(){return i.e(6).then(i.bind(null,"G7lC")).then(function(t){return t.GuideModule})}}]}],{useHash:!0,scrollPositionRestoration:"enabled"})],d.b]}),r);i("LIsE");var b,y=((b=function n(){t(this,n)}).\u0275fac=function(t){return new(t||b)},b.\u0275mod=a.Jb({type:b,bootstrap:[m]}),b.\u0275inj=a.Ib({imports:[[u.a,s.b,g,f.b,c.d,v.b,l.c,h.a.forRoot()]]}),b);Object(a.T)(),u.c().bootstrapModule(y,{ngZoneEventCoalescing:!0}).catch(function(t){return console.error(t)})},"2wKV":function(t,n,e){"use strict";e.d(n,"a",function(){return i.a}),e("2cf7");var i=e("LIsE");e("pSWu"),e("xr+C"),e("kZht"),e("3kIJ"),e("An66"),e("p+9/"),e("7xE1"),e("ZTXN"),e("YtkY"),e("kuMc"),e("ulty")},"7xE1":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o});var i=e("ulty");function r(t){return Object(i.e)(t)?t:JSON.parse(JSON.stringify(t))}function o(t,n,e){var i;if(!n||!n.length)return t;for(var r=t,o=n.split("."),u=0;r&&u<o.length;++u){var a=null==o?void 0:o[u];r=null===(i=r)||void 0===i?void 0:i[a]}return null!=r?r:e}},LIsE:function(n,i,r){"use strict";r.d(i,"a",function(){return s});var o=r("An66"),u=r("pSWu"),a=r("kZht"),s=function(){var n=function(){function n(){t(this,n)}return e(n,null,[{key:"forRoot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:n,providers:[{provide:u.a,useValue:Object.assign(Object.assign({},u.b),t)}]}}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.Jb({type:n}),n.\u0275inj=a.Ib({imports:[[o.b]]}),n}()},"p+9/":function(t,n,e){"use strict";function i(t){return"function"==typeof t}e.d(n,"a",function(){return i})},pSWu:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r});var i=new(e("kZht").r)("AMOUNT_FORMAT_OPTIONS"),r={lang:"ru-RU"}},ulty:function(t,n,e){"use strict";function i(t){return t}function r(t){var n="string"==typeof t?t.trim():t;return[void 0,null,NaN,"","null",1/0].includes(n)}function o(t){return!r(t)}function u(t){t&&(Array.isArray(t)?t.forEach(function(t){return a(t)}):t&&a(t))}function a(t){t&&!t.destroyed&&t.detectChanges()}function s(t){return null==t}function l(t){return!s(t)}e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r}),e.d(n,"c",function(){return o}),e.d(n,"d",function(){return u}),e.d(n,"e",function(){return s}),e.d(n,"f",function(){return l})},"xr+C":function(t,n,e){"use strict";function i(t){return null==t?void 0:t.slice(-1)}function r(t){return null==t?void 0:t.slice(0,-1)}function o(t){var n;return null!==(n=null==t?void 0:t.replace(/[^\d,.-]/g,"").replace(/^\.|^,/,""))&&void 0!==n?n:""}e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r}),e.d(n,"c",function(){return o}),e.d(n,"d",function(){return a}),e.d(n,"e",function(){return s}),e("ulty");var u=e("p+9/");function a(t,n){var e,i;return Object(u.a)(n)?n(t):null!==(i=null===(e=t)||void 0===e?void 0:e.toString())&&void 0!==i?i:""}function s(t){return"string"==typeof t?null==t?void 0:t.trim():t}},zn8P:function(t,n){function e(t){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="zn8P"}},[[0,0,5]]])}();