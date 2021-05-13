!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,n){e.exports=n("2v48")},"2v48":function(e,t,i){"use strict";i.r(t);var o,r,a,s=i("ENSU"),l=i("kZht"),u=i("6uGs"),c=i("uryd"),v=i("P0vk"),h=i("aJOL"),m=i("FxgA"),d=i("ipXG"),p=i("1VvW"),f=i("8EXQ"),g=((a=function e(){n(this,e)}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=l.Fb({type:a,selectors:[["app-root"]],decls:32,vars:0,consts:[[1,"dashboard"],["mode","side","opened","",1,"dashboard__menu"],[1,"title"],["src","assets/img/angular.svg","alt","angular",1,"logo"],["routerLink","/",1,"logo-title"],[1,"menu"],[1,"menu__item"],["routerLink","samples/guide"],[1,"dashboard__content"]],template:function(e,t){1&e&&(l.Qb(0,"mat-drawer-container",0),l.lc(1,"\n    "),l.Qb(2,"mat-drawer",1),l.lc(3,"\n        "),l.Qb(4,"mat-toolbar",2),l.lc(5,"\n            "),l.Mb(6,"img",3),l.lc(7,"\n            "),l.Qb(8,"a",4),l.lc(9,"@angular-ru/common"),l.Pb(),l.lc(10,"\n        "),l.Pb(),l.lc(11,"\n\n        "),l.Qb(12,"mat-list",5),l.lc(13,"\n            "),l.Qb(14,"mat-list-item",6),l.lc(15,"\n                "),l.Qb(16,"a",7),l.lc(17,"- "),l.Qb(18,"strong"),l.lc(19,"Guide overview"),l.Pb(),l.Pb(),l.lc(20,"\n            "),l.Pb(),l.lc(21,"\n            "),l.Mb(22,"mat-divider"),l.lc(23,"\n        "),l.Pb(),l.lc(24,"\n    "),l.Pb(),l.lc(25,"\n\n    "),l.Qb(26,"mat-drawer-content",8),l.lc(27,"\n        "),l.Mb(28,"router-outlet"),l.lc(29,"\n    "),l.Pb(),l.lc(30,"\n"),l.Pb(),l.lc(31,"\n"))},directives:[v.b,v.a,h.a,p.a,c.a,c.b,f.a,v.c,p.c],encapsulation:2,changeDetection:0}),a),b=((r=function e(){n(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275mod=l.Jb({type:r}),r.\u0275inj=l.Ib({imports:[[p.b.forRoot([{path:"",pathMatch:"full",redirectTo:"samples"},{path:"samples",children:[{path:"",pathMatch:"full",redirectTo:"guide"},{path:"guide",loadChildren:function(){return i.e(6).then(i.bind(null,"G7lC")).then(function(e){return e.GuideModule})}}]}],{useHash:!0,scrollPositionRestoration:"enabled"})],p.b]}),r),y=((o=function e(){n(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275mod=l.Jb({type:o,bootstrap:[g]}),o.\u0275inj=l.Ib({imports:[[s.a,u.b,b,m.b,v.d,h.b,c.c,d.b.forRoot()]]}),o);Object(l.T)(),s.c().bootstrapModule(y,{ngZoneEventCoalescing:!0}).catch(function(e){return console.error(e)})},ipXG:function(e,i,o){"use strict";o.d(i,"a",function(){return g}),o.d(i,"b",function(){return b});var r=o("kZht"),a=o("3kIJ");function s(e){e&&!e.destroyed&&e.detectChanges()}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Math.pow(10,t),i=+(t?e*n:e).toFixed(8),o=Math.floor(i),r=i-o;return r>.5-1e-8&&r<.5+1e-8?(o%2==0?o:o+1)/n:Math.round(i)/n}function u(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ru-RU",o=null==e?void 0:e.toString().replace(/\s/g,""),r=new Intl.NumberFormat(i).formatToParts(12345.6),a=Array.from(new Intl.NumberFormat(i,{useGrouping:!1}).format(9876543210)).reverse(),s=new RegExp("[".concat(null===(t=r.find(function(e){return"group"===e.type}))||void 0===t?void 0:t.value,"]"),"g"),l=new RegExp("[".concat(null===(n=r.find(function(e){return"decimal"===e.type}))||void 0===n?void 0:n.value,"]")),u=new RegExp("[".concat(a.join(""),"]"),"g");return(o=null==o?void 0:o.trim().replace(s,"").replace(l,".").replace(u,function(e){var t,n;return null!==(n=null===(t=new Map(a.map(function(e,t){return[e,t]})).get(e))||void 0===t?void 0:t.toString())&&void 0!==n?n:""}))?+o:NaN}var c=o("bwdy"),v=o("KTx3"),h=o("An66");o("ZTXN"),o("YtkY"),o("kuMc");var m,d,p=new r.r("AMOUNT_FORMAT_OPTIONS"),f={lang:"ru-RU"},g=((d=function(){function e(t,i,o,r,a){n(this,e),this.el=t,this.ngControl=o,this.ngZone=r,this.cd=a,this.subscriptions=new c.a,this.previousLang=null,this.maximumFractionDigits=3,this.isInsideAngularZone=!0,this.options={},this.markedAsDirty=!0,this.cursorPointer=0,this.setFirstLocalOptionsByGlobal(i)}return t(e,[{key:"isInAngularZone",get:function(){return this.isInsideAngularZone}},{key:"amountFormatOptions",get:function(){return this.options},set:function(e){this.options=Object.assign(Object.assign({},this.options),null!=e?e:{}),this.recalculateWhenChangesOptions()}},{key:"dirty",get:function(){return this.markedAsDirty}},{key:"element",get:function(){return this.el.nativeElement}},{key:"setLang",value:function(e){this.options.lang=e,this.recalculateWhenChangesOptions()}},{key:"getCursorPosition",value:function(){return this.cursorPointer}},{key:"ngOnInit",value:function(){this.setupElementType(),this.subscribeToElementEvents()}},{key:"ngAfterViewInit",value:function(){this.format()}},{key:"ngOnDestroy",value:function(){this.unsubscribeFromElementEvents()}},{key:"subscribeToElementEvents",value:function(){var e,t=this;null===(e=this.ngZone)||void 0===e||e.runOutsideAngular(function(){t.subscriptions.add(Object(v.a)(t.element,"input").subscribe(function(){t.isInsideAngularZone=r.A.isInAngularZone(),t.format()})),t.subscriptions.add(Object(v.a)(t.element,"blur").subscribe(function(){t.isInsideAngularZone=r.A.isInAngularZone(),t.formatOnBlur()}))})}},{key:"unsubscribeFromElementEvents",value:function(){this.subscriptions.unsubscribe()}},{key:"formatOnBlur",value:function(){var e,t;this.isIncorrectPreviewAfterBlur()&&(this.element.value=null!==(e=null==(t=this.element.value)?void 0:t.slice(0,-1))&&void 0!==e?e:"")}},{key:"format",value:function(){var e,t,n=this.getFractionSeparator();this.cursorPointer=null!==(e=this.element.selectionStart)&&void 0!==e?e:0;var i=this.cursorPointer!==this.element.value.length;if(this.replaceAllInvalidSymbolsBeforeTranslation(),this.viewModelIsOnlyMinus())return this.resetModelValue(),void(this.element.value="-");var o=this.element.value,r=this.getNumberValueWithGaussRounded();this.setModelValueBy(r),this.element.value=o;var a=this.prepareConvertedToLocaleValue(r,n);this.element.value=isNaN(null===(t=this.ngControl)||void 0===t?void 0:t.value)?"":a,this.setSelectionRangeBy(i,a),this.preventExpressionChangedAfter()}},{key:"isIncorrectPreviewAfterBlur",value:function(){return this.lastSymbolIsFraction()||this.viewModelIsOnlyMinus()}},{key:"resetModelValue",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===(e=this.ngControl)||void 0===e||e.reset(t)}},{key:"replaceAllInvalidSymbolsBeforeTranslation",value:function(){var e=this.getFractionSeparator();this.element.value=this.removeNonNumericSymbols(),this.element.value=this.replaceInvalidFractionPosition(e),this.element.value=this.removeDuplicateMinusOrFractionSymbol(e)}},{key:"getMaximumFractionDigits",value:function(){var e,t;return null!==(t=null===(e=this.options.formatOptions)||void 0===e?void 0:e.maximumFractionDigits)&&void 0!==t?t:this.maximumFractionDigits}},{key:"getLastSymbolsAsZeroDot",value:function(e){var t,n,i=this.getMaximumFractionDigits(),o=0===i?"":null===(n=null===(t=this.element.value.match(new RegExp("(\\".concat(e,")(.+)?"))))||void 0===t?void 0:t[0])||void 0===n?void 0:n.replace(/,|./,"");if(o&&o.length>this.maximumFractionDigits){var r=l(u("0".concat(e).concat(o),this.options.lang),i);o=isNaN(r)?"":r.toString().replace(/0\./,"")}return o}},{key:"prepareConvertedToLocaleValue",value:function(e,t){var n=this.lastSymbolIsFraction(),i=this.getConvertedToLocaleString(e);if(n)i="".concat(i).concat(t);else{var o=this.getLastSymbolsAsZeroDot(t);if(o){var r=i.split(t),a=null==r?void 0:r[0];i=a?"".concat(a).concat(t).concat(o):"0".concat(t).concat(o)}}return i.replace(/\s/g," ")}},{key:"setModelValueBy",value:function(e){isNaN(e)?this.resetModelValue():this.resetModelValue(e)}},{key:"getConvertedToLocaleString",value:function(e){return(isNaN(e)?"":e).toLocaleString(this.options.lang,this.options.formatOptions)}},{key:"getNumberValueWithGaussRounded",value:function(){var e=this.getMaximumFractionDigits();return l(u(this.element.value,this.options.lang),e)}},{key:"lastSymbolIsFraction",value:function(){return(null==(e=this.element.value)?void 0:e.slice(-1))===this.getFractionSeparator();var e}},{key:"replaceInvalidFractionPosition",value:function(e){return this.element.value.replace(new RegExp("\\".concat(e,"+$"),"g"),e)}},{key:"removeDuplicateMinusOrFractionSymbol",value:function(e){var t=this.element.value,n=0;return 0!==(t=t.replace(new RegExp("\\".concat(e),"g"),function(){return++n>1?"":e})).indexOf("-")&&(t=t.replace(/-/g,"")),t}},{key:"viewModelIsOnlyMinus",value:function(){return"-"===this.element.value}},{key:"getFractionSeparator",value:function(){var e,t,n;return t=null!==(e=this.options.lang)&&void 0!==e?e:f.lang,(n={expectedValue:1000000.65,lastValuePositionBeforeFraction:-3}).expectedValue.toLocaleString(t).slice(n.lastValuePositionBeforeFraction).slice(0,1)}},{key:"removeNonNumericSymbols",value:function(){return this.viewModelIsOnlyMinus()?this.element.value:null!==(t=null==(e=this.element.value)?void 0:e.replace(/[^\d,.-]/g,"").replace(/^\.|^,/,""))&&void 0!==t?t:"";var e,t}},{key:"setSelectionRangeBy",value:function(e,t){try{e||(this.cursorPointer=t.length),this.element.setSelectionRange(this.cursorPointer,this.cursorPointer)}catch(n){}}},{key:"setFirstLocalOptionsByGlobal",value:function(e){var t;this.options=function(e){return null==e}(t=e)?t:JSON.parse(JSON.stringify(t)),this.previousLang=this.options.lang}},{key:"recalculateWhenChangesOptions",value:function(){var e,t=u(this.element.value,null!==(e=this.previousLang)&&void 0!==e?e:this.options.lang);this.element.value=t.toLocaleString(this.options.lang,this.options.formatOptions),this.previousLang=this.options.lang,this.format()}},{key:"preventExpressionChangedAfter",value:function(){var e;this.markedAsDirty&&((e=this.cd)&&(Array.isArray(e)?e.forEach(function(e){return s(e)}):e&&s(e)),this.markedAsDirty=!1)}},{key:"setupElementType",value:function(){this.el.nativeElement.setAttribute("type","text")}}]),e}()).\u0275fac=function(e){return new(e||d)(r.Lb(r.l),r.Lb(p),r.Lb(a.f,8),r.Lb(r.A,8),r.Lb(r.h,8))},d.\u0275dir=r.Gb({type:d,selectors:[["","amountFormat",""]],inputs:{amountFormatOptions:"amountFormatOptions"}}),d),b=((m=function(){function e(){n(this,e)}return t(e,null,[{key:"forRoot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:e,providers:[{provide:p,useValue:Object.assign(Object.assign({},f),t)}]}}}]),e}()).\u0275fac=function(e){return new(e||m)},m.\u0275mod=r.Jb({type:m}),m.\u0275inj=r.Ib({imports:[[h.b]]}),m)},zn8P:function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0,5]]])}();