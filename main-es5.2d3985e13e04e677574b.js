!function(){function e(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=n(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return u=e.done,e},e:function(e){l=!0,a=e},f:function(){try{u||null==i.return||i.return()}finally{if(l)throw a}}}}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var i,r,o=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(l){u=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return o}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,n){e.exports=n("2v48")},"2v48":function(e,t,n){"use strict";n.r(t);var i,r,o,u=n("ENSU"),l=n("kZht"),s=n("p+07"),c=n("6uGs"),h=n("uryd"),f=n("P0vk"),v=n("aJOL"),d=n("FxgA"),p=n("ipXG"),g=n("1VvW"),m=n("8EXQ"),b=((o=function e(){a(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=l.Fb({type:o,selectors:[["app-root"]],decls:32,vars:0,consts:[[1,"dashboard"],["mode","side","opened","",1,"dashboard__menu"],[1,"title"],["src","assets/img/angular.svg","alt","angular",1,"logo"],["routerLink","/",1,"logo-title"],[1,"menu"],[1,"menu__item"],["routerLink","samples/guide"],[1,"dashboard__content"]],template:function(e,t){1&e&&(l.Qb(0,"mat-drawer-container",0),l.lc(1,"\n    "),l.Qb(2,"mat-drawer",1),l.lc(3,"\n        "),l.Qb(4,"mat-toolbar",2),l.lc(5,"\n            "),l.Mb(6,"img",3),l.lc(7,"\n            "),l.Qb(8,"a",4),l.lc(9,"@angular-ru/common"),l.Pb(),l.lc(10,"\n        "),l.Pb(),l.lc(11,"\n\n        "),l.Qb(12,"mat-list",5),l.lc(13,"\n            "),l.Qb(14,"mat-list-item",6),l.lc(15,"\n                "),l.Qb(16,"a",7),l.lc(17,"- "),l.Qb(18,"strong"),l.lc(19,"Guide overview"),l.Pb(),l.Pb(),l.lc(20,"\n            "),l.Pb(),l.lc(21,"\n            "),l.Mb(22,"mat-divider"),l.lc(23,"\n        "),l.Pb(),l.lc(24,"\n    "),l.Pb(),l.lc(25,"\n\n    "),l.Qb(26,"mat-drawer-content",8),l.lc(27,"\n        "),l.Mb(28,"router-outlet"),l.lc(29,"\n    "),l.Pb(),l.lc(30,"\n"),l.Pb(),l.lc(31,"\n"))},directives:[f.b,f.a,v.a,g.a,h.a,h.b,m.a,f.c,g.c],encapsulation:2,changeDetection:0}),o),y=((r=function e(){a(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275mod=l.Jb({type:r}),r.\u0275inj=l.Ib({imports:[[g.b.forRoot([{path:"",pathMatch:"full",redirectTo:"samples"},{path:"samples",children:[{path:"",pathMatch:"full",redirectTo:"guide"},{path:"guide",loadChildren:function(){return n.e(6).then(n.bind(null,"G7lC")).then(function(e){return e.GuideModule})}}]}],{useHash:!0,scrollPositionRestoration:"enabled"})],g.b]}),r),V=((i=function e(){a(this,e)}).\u0275fac=function(e){return new(e||i)},i.\u0275mod=l.Jb({type:i,bootstrap:[b]}),i.\u0275inj=l.Ib({imports:[[u.a,c.b,y,d.b,f.d,v.b,h.c,p.b.forRoot()]]}),i);Object(s.g)(!0)&&Object(l.T)(),u.c().bootstrapModule(V,{ngZoneEventCoalescing:!0}).catch(function(e){return console.error(e)})},ipXG:function(n,i,r){"use strict";r.d(i,"a",function(){return C}),r.d(i,"b",function(){return I}),r.d(i,"c",function(){return j}),r.d(i,"d",function(){return P});var u=r("kZht"),l=r("3kIJ"),s=r("p+07");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Math.pow(10,t),i=+(t?e*n:e).toFixed(8),r=Math.floor(i),o=i-r;return o>.5-1e-8&&o<.5+1e-8?(r%2==0?r:r+1)/n:Math.round(i)/n}function h(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ru-RU",r=null==e?void 0:e.toString().replace(/\s/g,""),o=new Intl.NumberFormat(i).formatToParts(12345.6),a=Array.from(new Intl.NumberFormat(i,{useGrouping:!1}).format(9876543210)).reverse(),u=new RegExp("[".concat(null===(t=o.find(function(e){return"group"===e.type}))||void 0===t?void 0:t.value,"]"),"g"),l=new RegExp("[".concat(null===(n=o.find(function(e){return"decimal"===e.type}))||void 0===n?void 0:n.value,"]")),s=new RegExp("[".concat(a.join(""),"]"),"g");return(r=null==r?void 0:r.trim().replace(u,"").replace(l,".").replace(s,function(e){var t,n;return null!==(n=null===(t=new Map(a.map(function(e,t){return[e,t]})).get(e))||void 0===t?void 0:t.toString())&&void 0!==n?n:""}))?+r:NaN}function f(e){return"function"==typeof e}var v,d,p,g,m,b=r("bwdy"),y=r("KTx3"),V=r("An66"),w=r("ZTXN"),O=r("YtkY"),k=r("kuMc"),M=function(){function e(t){a(this,e),this.accessor=t,this.onViewValueChangedSubject=new w.a,this.onModelValueChangedSubject=new w.a,this.onViewValueChanged=this.onViewValueChangedSubject.asObservable(),this.onModelValueChanged=this.onModelValueChangedSubject.asObservable(),this.saveOriginalAccessorFunctions(),this.patchAccessorFunctions()}return o(e,[{key:"pushModelValue",value:function(e){var t;null===(t=this.onModelValueChangeFunction)||void 0===t||t.call(this,e)}},{key:"pushViewValue",value:function(e){this.writeViewValueFunction(e)}},{key:"detach",value:function(){this.accessor.registerOnChange=this.registerOnViewValueChangeFunction,this.accessor.registerOnChange(this.onModelValueChangeFunction),this.accessor.writeValue=this.writeViewValueFunction}},{key:"patchAccessorFunctions",value:function(){var e=this;this.accessor.registerOnChange=function(t){e.onModelValueChangeFunction=t,e.registerOnViewValueChangeFunction(function(t){e.onViewValueChangedSubject.next(t)})},this.accessor.writeValue=function(t){e.onModelValueChangedSubject.next(t)}}},{key:"saveOriginalAccessorFunctions",value:function(){this.writeViewValueFunction=this.accessor.writeValue.bind(this.accessor),this.registerOnViewValueChangeFunction=this.accessor.registerOnChange.bind(this.accessor)}}]),e}(),A=((v=function(){function n(e){a(this,n),this.onDestroy=new w.a,this.controlValueOperators=[];var i=t(e,1)[0];i&&(this.interceptor=new M(i)),this.makeSequencesAndPassValues()}return o(n,[{key:"ngOnDestroy",value:function(){var e;null===(e=this.interceptor)||void 0===e||e.detach(),this.onDestroy.next(),this.onDestroy.complete()}},{key:"attach",value:function(e){this.controlValueOperators=this.controlValueOperators.concat(e)}},{key:"detach",value:function(e){var t,n;this.controlValueOperators=this.controlValueOperators.filter((t=e,n=Array.isArray(t)?t:[t],function(e){return!n.includes(e)}))}},{key:"toModelValue",value:function(t){var n,i=t,r=e(this.controlValueOperators);try{for(r.s();!(n=r.n()).done;){var o=n.value;i=f(o.toModelValue)?o.toModelValue(i):i}}catch(a){r.e(a)}finally{r.f()}return i}},{key:"toViewValue",value:function(t){var n,i=t,r=e(this.controlValueOperators);try{for(r.s();!(n=r.n()).done;){var o=n.value;i=f(o.toViewValue)?o.toViewValue(i):i}}catch(a){r.e(a)}finally{r.f()}return i}},{key:"makeSequencesAndPassValues",value:function(){this.listenViewConvertToModelValue(),this.listenModelConvertToViewValue()}},{key:"listenModelConvertToViewValue",value:function(){var e,t=this;null===(e=this.interceptor)||void 0===e||e.onModelValueChanged.pipe(Object(O.a)(function(e){return t.toViewValue(e)}),Object(k.a)(this.onDestroy)).subscribe(function(e){var n;return null===(n=t.interceptor)||void 0===n?void 0:n.pushViewValue(e)})}},{key:"listenViewConvertToModelValue",value:function(){var e,t=this;null===(e=this.interceptor)||void 0===e||e.onViewValueChanged.pipe(Object(O.a)(function(e){return t.toModelValue(e)}),Object(k.a)(this.onDestroy)).subscribe(function(e){var n;return null===(n=t.interceptor)||void 0===n?void 0:n.pushModelValue(e)})}}]),n}()).\u0275fac=function(e){return new(e||v)(u.Ub(l.e,2))},v.\u0275prov=u.Hb({token:v,factory:v.\u0275fac}),v),F=new u.r("AMOUNT_FORMAT_OPTIONS"),S={lang:"ru-RU"},C=((m=function(){function e(t,n,i,r,o){a(this,e),this.el=t,this.ngControl=i,this.ngZone=r,this.cd=o,this.subscriptions=new b.a,this.previousLang=null,this.maximumFractionDigits=3,this.isInsideAngularZone=!0,this.options={},this.markedAsDirty=!0,this.cursorPointer=0,this.setFirstLocalOptionsByGlobal(n)}return o(e,[{key:"isInAngularZone",get:function(){return this.isInsideAngularZone}},{key:"amountFormatOptions",get:function(){return this.options},set:function(e){this.options=Object.assign(Object.assign({},this.options),null!=e?e:{}),this.recalculateWhenChangesOptions()}},{key:"dirty",get:function(){return this.markedAsDirty}},{key:"element",get:function(){return this.el.nativeElement}},{key:"setLang",value:function(e){this.options.lang=e,this.recalculateWhenChangesOptions()}},{key:"getCursorPosition",value:function(){return this.cursorPointer}},{key:"ngOnInit",value:function(){this.setupElementType(),this.subscribeToElementEvents()}},{key:"ngAfterViewInit",value:function(){this.format()}},{key:"ngOnDestroy",value:function(){this.unsubscribeFromElementEvents()}},{key:"subscribeToElementEvents",value:function(){var e,t=this;null===(e=this.ngZone)||void 0===e||e.runOutsideAngular(function(){t.subscriptions.add(Object(y.a)(t.element,"input").subscribe(function(){t.isInsideAngularZone=u.A.isInAngularZone(),t.format()})),t.subscriptions.add(Object(y.a)(t.element,"blur").subscribe(function(){t.isInsideAngularZone=u.A.isInAngularZone(),t.formatOnBlur()}))})}},{key:"unsubscribeFromElementEvents",value:function(){this.subscriptions.unsubscribe()}},{key:"formatOnBlur",value:function(){var e,t;this.isIncorrectPreviewAfterBlur()&&(this.element.value=null!==(e=null==(t=this.element.value)?void 0:t.slice(0,-1))&&void 0!==e?e:"")}},{key:"format",value:function(){var e,t,n=this.getFractionSeparator();this.cursorPointer=null!==(e=this.element.selectionStart)&&void 0!==e?e:0;var i=this.cursorPointer!==this.element.value.length;if(this.replaceAllInvalidSymbolsBeforeTranslation(),this.viewModelIsOnlyMinus())return this.resetModelValue(),void(this.element.value="-");var r=this.element.value,o=this.getNumberValueWithGaussRounded();this.setModelValueBy(o),this.element.value=r;var a=this.prepareConvertedToLocaleValue(o,n);this.element.value=isNaN(null===(t=this.ngControl)||void 0===t?void 0:t.value)?"":a,this.setSelectionRangeBy(i,a),this.preventExpressionChangedAfter()}},{key:"isIncorrectPreviewAfterBlur",value:function(){return this.lastSymbolIsFraction()||this.viewModelIsOnlyMinus()}},{key:"resetModelValue",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===(e=this.ngControl)||void 0===e||e.reset(t)}},{key:"replaceAllInvalidSymbolsBeforeTranslation",value:function(){var e=this.getFractionSeparator();this.element.value=this.removeNonNumericSymbols(),this.element.value=this.replaceInvalidFractionPosition(e),this.element.value=this.removeDuplicateMinusOrFractionSymbol(e)}},{key:"getMaximumFractionDigits",value:function(){var e,t;return null!==(t=null===(e=this.options.formatOptions)||void 0===e?void 0:e.maximumFractionDigits)&&void 0!==t?t:this.maximumFractionDigits}},{key:"getLastSymbolsAsZeroDot",value:function(e){var t,n,i,r=this.getMaximumFractionDigits(),o=0===r?"":null!==(i=null===(n=null===(t=this.element.value.match(new RegExp("(\\".concat(e,")(.+)?"))))||void 0===t?void 0:t[0])||void 0===n?void 0:n.replace(/,|./,""))&&void 0!==i?i:"";if(o.length>this.maximumFractionDigits){var a=c(h("0".concat(e).concat(o),this.options.lang),r);o=isNaN(a)?"":a.toString().replace(/0\./,"")}return o}},{key:"prepareConvertedToLocaleValue",value:function(e,t){var n=this.lastSymbolIsFraction(),i=this.getConvertedToLocaleString(e);if(n)i="".concat(i).concat(t);else{var r=this.getLastSymbolsAsZeroDot(t);if(Object(s.c)(r)){var o=i.split(t),a=null==o?void 0:o[0];i=Object(s.c)(a)?"".concat(a).concat(t).concat(r):"0".concat(t).concat(r)}}return i.replace(/\s/g," ")}},{key:"setModelValueBy",value:function(e){isNaN(e)?this.resetModelValue():this.resetModelValue(e)}},{key:"getConvertedToLocaleString",value:function(e){return(isNaN(e)?"":e).toLocaleString(this.options.lang,this.options.formatOptions)}},{key:"getNumberValueWithGaussRounded",value:function(){var e=this.getMaximumFractionDigits();return c(h(this.element.value,this.options.lang),e)}},{key:"lastSymbolIsFraction",value:function(){return(null==(e=this.element.value)?void 0:e.slice(-1))===this.getFractionSeparator();var e}},{key:"replaceInvalidFractionPosition",value:function(e){return this.element.value.replace(new RegExp("\\".concat(e,"+$"),"g"),e)}},{key:"removeDuplicateMinusOrFractionSymbol",value:function(e){var t=this.element.value,n=0;return 0!==(t=t.replace(new RegExp("\\".concat(e),"g"),function(){return++n>1?"":e})).indexOf("-")&&(t=t.replace(/-/g,"")),t}},{key:"viewModelIsOnlyMinus",value:function(){return"-"===this.element.value}},{key:"getFractionSeparator",value:function(){var e,t,n;return t=null!==(e=this.options.lang)&&void 0!==e?e:S.lang,(n={expectedValue:1000000.65,lastValuePositionBeforeFraction:-3}).expectedValue.toLocaleString(t).slice(n.lastValuePositionBeforeFraction).slice(0,1)}},{key:"removeNonNumericSymbols",value:function(){return this.viewModelIsOnlyMinus()?this.element.value:null!==(t=null==(e=this.element.value)?void 0:e.replace(/[^\d,.-]/g,"").replace(/^\.|^,/,""))&&void 0!==t?t:"";var e,t}},{key:"setSelectionRangeBy",value:function(e,t){try{e||(this.cursorPointer=t.length),this.element.setSelectionRange(this.cursorPointer,this.cursorPointer)}catch(n){}}},{key:"setFirstLocalOptionsByGlobal",value:function(e){var t;this.options=(t=e,Object(s.e)(t)?t:JSON.parse(JSON.stringify(t))),this.previousLang=this.options.lang}},{key:"recalculateWhenChangesOptions",value:function(){var e,t=h(this.element.value,null!==(e=this.previousLang)&&void 0!==e?e:this.options.lang);this.element.value=t.toLocaleString(this.options.lang,this.options.formatOptions),this.previousLang=this.options.lang,this.format()}},{key:"preventExpressionChangedAfter",value:function(){this.markedAsDirty&&(Object(s.d)(this.cd),this.markedAsDirty=!1)}},{key:"setupElementType",value:function(){this.el.nativeElement.setAttribute("type","text")}}]),e}()).\u0275fac=function(e){return new(e||m)(u.Lb(u.l),u.Lb(F),u.Lb(l.f,8),u.Lb(u.A,8),u.Lb(u.h,8))},m.\u0275dir=u.Gb({type:m,selectors:[["","amountFormat",""]],inputs:{amountFormatOptions:"amountFormatOptions"}}),m),I=((g=function(){function e(){a(this,e)}return o(e,null,[{key:"forRoot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:e,providers:[{provide:F,useValue:Object.assign(Object.assign({},S),t)}]}}}]),e}()).\u0275fac=function(e){return new(e||g)},g.\u0275mod=u.Jb({type:g}),g.\u0275inj=u.Ib({imports:[[V.b]]}),g),j=((p=function(){function e(t,n){var i=this;a(this,e),this.interceptor=t,this.elementRef=n,this.filter=[],this.preparedValue="",this.controlValueOperator={toModelValue:function(e){return i.preparedValue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Array.isArray(t)?function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return 0===(null!=(t=n)?t:[]).length?e:Array.from(e).filter(function(e){return n.includes(e)}).join("")}(e,t):f(t)?function(e,t){return Array.from(e).filter(t).join("")}(e,t):t instanceof RegExp?function(e,t){var n;return(null!==(n=e.match(t))&&void 0!==n?n:[]).join("")}(e,t):e}(e,i.filter),i.preparedValue}}}return o(e,[{key:"ngOnInit",value:function(){this.interceptor.attach(this.controlValueOperator)}},{key:"ngOnDestroy",value:function(){this.interceptor.detach(this.controlValueOperator)}},{key:"onInput",value:function(){this.elementRef.nativeElement.value=this.preparedValue}}]),e}()).\u0275fac=function(e){return new(e||p)(u.Lb(A),u.Lb(u.l))},p.\u0275dir=u.Gb({type:p,selectors:[["","filter",""]],hostBindings:function(e,t){1&e&&u.Xb("input",function(e){return t.onInput(e)})},inputs:{filter:"filter"},features:[u.Ab([A])]}),p),P=((d=function e(){a(this,e)}).\u0275fac=function(e){return new(e||d)},d.\u0275mod=u.Jb({type:d}),d.\u0275inj=u.Ib({imports:[[V.b]]}),d)},"p+07":function(e,t,n){"use strict";function i(e){return e}function r(e){var t="string"==typeof e?e.trim():e;return[void 0,null,NaN,"","null",1/0].includes(t)}function o(e){return!r(e)}function a(e){return!0===e}function u(e){return null==e}function l(e){return!u(e)}function s(e){u(e)||(Array.isArray(e)?e.forEach(function(e){return c(e)}):l(e)&&c(e))}function c(e){e&&!e.destroyed&&e.detectChanges()}n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return a})},zn8P:function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0,5]]])}();