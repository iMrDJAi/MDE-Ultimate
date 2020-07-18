/*! Split.js - v1.6.2 */
/*!
 * markdown-it-regexp
 * Copyright (c) 2014 Alex Kocharin
 * MIT Licensed
 */
var n=C(16),e=C(90),t=0;function L(H,V){var C=function(H,V){C.options=V,C.init(H)};C.__proto__=L.prototype;var n=(H.global?"g":"")+(H.multiline?"m":"")+(H.ignoreCase?"i":"");return C.regexp=RegExp("^"+H.source,n),C.replacer=V,C.id="regexp-"+t,t++,C}H.exports=L,n.inherits(L,Function),L.prototype.init=function(H){H.inline.ruler.push(this.id,this.parse.bind(this)),H.renderer.rules[this.id]=this.render.bind(this)},L.prototype.parse=function(H,V){var C=this.regexp.exec(H.src.slice(H.pos));return!!C&&(H.pos+=C[0].length,V||(H.push(this.id,"",0).meta={match:C}),!0)},L.prototype.render=function(H,V,C,n){return this.replacer(H[V].meta.match,e)}},function(H,V){var C,n,e=H.exports={};function t(){throw new Error("setTimeout has not been defined")}function L(){throw new Error("clearTimeout has not been defined")}function r(H){if(C===setTimeout)return setTimeout(H,0);if((C===t||!C)&&setTimeout)return C=setTimeout,setTimeout(H,0);try{return C(H,0)}catch(V){try{return C.call(null,H,0)}catch(V){return C.call(this,H,0)}}}!function(){try{C="function"==typeof setTimeout?setTimeout:t}catch(H){C=t}try{n="function"==typeof clearTimeout?clearTimeout:L}catch(H){n=L}}();var i,M=[],u=!1,A=-1;function o(){u&&i&&(u=!1,i.length?M=i.concat(M):A=-1,M.length&&d())}function d(){if(!u){var H=r(o);u=!0;for(var V=M.length;V;){for(i=M,M=[];++A<V;)i&&i[A].run();A=-1,V=M.length}i=null,u=!1,function(H){if(n===clearTimeout)return clearTimeout(H);if((n===L||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(H);try{n(H)}catch(V){try{return n.call(null,H)}catch(V){return n.call(this,H)}}}(H)}}function c(H,V){this.fun=H,this.array=V}function a(){}e.nextTick=function(H){var V=new Array(arguments.length-1);if(arguments.length>1)for(var C=1;C<arguments.length;C++)V[C-1]=arguments[C];M.push(new c(H,V)),1!==M.length||u||r(d)},c.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=a,e.addListener=a,e.once=a,e.off=a,e.removeListener=a,e.removeAllListeners=a,e.emit=a,e.prependListener=a,e.prependOnceListener=a,e.listeners=function(H){return[]},e.binding=function(H){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(H){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},function(H,V){H.exports=function(H){return H&&"object"==typeof H&&"function"==typeof H.copy&&"function"==typeof H.fill&&"function"==typeof H.readUInt8}},function(H,V){"function"==typeof Object.create?H.exports=function(H,V){H.super_=V,H.prototype=Object.create(V.prototype,{constructor:{value:H,enumerable:!1,writable:!0,configurable:!0}})}:H.exports=function(H,V){H.super_=V;var C=function(){};C.prototype=V.prototype,H.prototype=new C,H.prototype.constructor=H}},function(H,V,C){
/*!
 * markdown-it-regexp
 * Copyright (c) 2014 Alex Kocharin
 * MIT Licensed
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */C.r(e),C.d(e,"supportsCssVariables",(function(){return t})),C.d(e,"getNormalizedEventCoords",(function(){return L}));var r=function(H,V){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(H,V){H.__proto__=V}||function(H,V){for(var C in V)V.hasOwnProperty(C)&&(H[C]=V[C])})(H,V)};function i(H,V){function C(){this.constructor=H}r(H,V),H.prototype=null===V?Object.create(V):(C.prototype=V.prototype,new C)}var M=function(){return(M=Object.assign||function(H){for(var V,C=1,n=arguments.length;C<n;C++)for(var e in V=arguments[C])Object.prototype.hasOwnProperty.call(V,e)&&(H[e]=V[e]);return H}).apply(this,arguments)};function u(H,V){var C="function"==typeof Symbol&&H[Symbol.iterator];if(!C)return H;var n,e,t=C.call(H),L=[];try{for(;(void 0===V||V-- >0)&&!(n=t.next()).done;)L.push(n.value)}catch(H){e={error:H}}finally{try{n&&!n.done&&(C=t.return)&&C.call(t)}finally{if(e)throw e.error}}return L}function A(){for(var H=[],V=0;V<arguments.length;V++)H=H.concat(u(arguments[V]));return H}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var o=function(){function H(H){void 0===H&&(H={}),this.adapter=H}return Object.defineProperty(H,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(H,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(H,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(H,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),H.prototype.init=function(){},H.prototype.destroy=function(){},H}(),d=function(){function H(H,V){for(var C=[],n=2;n<arguments.length;n++)C[n-2]=arguments[n];this.root=H,this.initialize.apply(this,A(C)),this.foundation=void 0===V?this.getDefaultFoundation():V,this.foundation.init(),this.initialSyncWithDOM()}return H.attachTo=function(V){return new H(V,new o({}))},H.prototype.initialize=function(){for(var H=[],V=0;V<arguments.length;V++)H[V]=arguments[V]},H.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},H.prototype.initialSyncWithDOM=function(){},H.prototype.destroy=function(){this.foundation.destroy()},H.prototype.listen=function(H,V,C){this.root.addEventListener(H,V,C)},H.prototype.unlisten=function(H,V,C){this.root.removeEventListener(H,V,C)},H.prototype.emit=function(H,V,C){var n;void 0===C&&(C=!1),"function"==typeof CustomEvent?n=new CustomEvent(H,{bubbles:C,detail:V}):(n=document.createEvent("CustomEvent")).initCustomEvent(H,C,!1,V),this.root.dispatchEvent(n)},H}();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function c(H){return void 0===H&&(H=window),!!function(H){void 0===H&&(H=window);var V=!1;try{var C={get passive(){return V=!0,!1}},n=function(){};H.document.addEventListener("test",n,C),H.document.removeEventListener("test",n,C)}catch(H){V=!1}return V}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(H)&&{passive:!0}}function a(H,V){return(H.matches||H.webkitMatchesSelector||H.msMatchesSelector).call(H,V)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var l={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},s={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},f={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},m=["touchstart","pointerdown","mousedown","keydown"],Z=["touchend","pointerup","mouseup","contextmenu"],p=[],h=function(H){function V(C){var n=H.call(this,M(M({},V.defaultAdapter),C))||this;return n.activationAnimationHasEnded_=!1,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.fgScale_="0",n.frame_={width:0,height:0},n.initialSize_=0,n.layoutFrame_=0,n.maxRadius_=0,n.unboundedCoords_={left:0,top:0},n.activationState_=n.defaultActivationState_(),n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.activateHandler_=function(H){return n.activate_(H)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n}return i(V,H),Object.defineProperty(V,"cssClasses",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(V,"strings",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(V,"numbers",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(V,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),V.prototype.init=function(){var H=this,C=this.supportsPressRipple_();if(this.registerRootHandlers_(C),C){var n=V.cssClasses,e=n.ROOT,t=n.UNBOUNDED;requestAnimationFrame((function(){H.adapter.addClass(e),H.adapter.isUnbounded()&&(H.adapter.addClass(t),H.layoutInternal_())}))}},V.prototype.destroy=function(){var H=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(V.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(V.cssClasses.FG_DEACTIVATION));var C=V.cssClasses,n=C.ROOT,e=C.UNBOUNDED;requestAnimationFrame((function(){H.adapter.removeClass(n),H.adapter.removeClass(e),H.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},V.prototype.activate=function(H){this.activate_(H)},V.prototype.deactivate=function(){this.deactivate_()},V.prototype.layout=function(){var H=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){H.layoutInternal_(),H.layoutFrame_=0}))},V.prototype.setUnbounded=function(H){var C=V.cssClasses.UNBOUNDED;H?this.adapter.addClass(C):this.adapter.removeClass(C)},V.prototype.handleFocus=function(){var H=this;requestAnimationFrame((function(){return H.adapter.addClass(V.cssClasses.BG_FOCUSED)}))},V.prototype.handleBlur=function(){var H=this;requestAnimationFrame((function(){return H.adapter.removeClass(V.cssClasses.BG_FOCUSED)}))},V.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},V.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},V.prototype.registerRootHandlers_=function(H){var V=this;H&&(m.forEach((function(H){V.adapter.registerInteractionHandler(H,V.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},V.prototype.registerDeactivationHandlers_=function(H){var V=this;"keydown"===H.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):Z.forEach((function(H){V.adapter.registerDocumentInteractionHandler(H,V.deactivateHandler_)}))},V.prototype.deregisterRootHandlers_=function(){var H=this;m.forEach((function(V){H.adapter.deregisterInteractionHandler(V,H.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},V.prototype.deregisterDeactivationHandlers_=function(){var H=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),Z.forEach((function(V){H.adapter.deregisterDocumentInteractionHandler(V,H.deactivateHandler_)}))},V.prototype.removeCssVars_=function(){var H=this,C=V.strings;Object.keys(C).forEach((function(V){0===V.indexOf("VAR_")&&H.adapter.updateCssVariable(C[V],null)}))},V.prototype.activate_=function(H){var V=this;if(!this.adapter.isSurfaceDisabled()){var C=this.activationState_;if(!C.isActivated){var n=this.previousActivationEvent_;if(!(n&&void 0!==H&&n.type!==H.type))C.isActivated=!0,C.isProgrammatic=void 0===H,C.activationEvent=H,C.wasActivatedByPointer=!C.isProgrammatic&&(void 0!==H&&("mousedown"===H.type||"touchstart"===H.type||"pointerdown"===H.type)),void 0!==H&&p.length>0&&p.some((function(H){return V.adapter.containsEventTarget(H)}))?this.resetActivationState_():(void 0!==H&&(p.push(H.target),this.registerDeactivationHandlers_(H)),C.wasElementMadeActive=this.checkElementMadeActive_(H),C.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){p=[],C.wasElementMadeActive||void 0===H||" "!==H.key&&32!==H.keyCode||(C.wasElementMadeActive=V.checkElementMadeActive_(H),C.wasElementMadeActive&&V.animateActivation_()),C.wasElementMadeActive||(V.activationState_=V.defaultActivationState_())})))}}},V.prototype.checkElementMadeActive_=function(H){return void 0===H||"keydown"!==H.type||this.adapter.isSurfaceActive()},V.prototype.animateActivation_=function(){var H=this,C=V.strings,n=C.VAR_FG_TRANSLATE_START,e=C.VAR_FG_TRANSLATE_END,t=V.cssClasses,L=t.FG_DEACTIVATION,r=t.FG_ACTIVATION,i=V.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var M="",u="";if(!this.adapter.isUnbounded()){var A=this.getFgTranslationCoordinates_(),o=A.startPoint,d=A.endPoint;M=o.x+"px, "+o.y+"px",u=d.x+"px, "+d.y+"px"}this.adapter.updateCssVariable(n,M),this.adapter.updateCssVariable(e,u),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(L),this.adapter.computeBoundingRect(),this.adapter.addClass(r),this.activationTimer_=setTimeout((function(){return H.activationTimerCallback_()}),i)},V.prototype.getFgTranslationCoordinates_=function(){var H,V=this.activationState_,C=V.activationEvent;return{startPoint:H={x:(H=V.wasActivatedByPointer?L(C,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:H.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},V.prototype.runDeactivationUXLogicIfReady_=function(){var H=this,C=V.cssClasses.FG_DEACTIVATION,n=this.activationState_,e=n.hasDeactivationUXRun,t=n.isActivated;(e||!t)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(C),this.fgDeactivationRemovalTimer_=setTimeout((function(){H.adapter.removeClass(C)}),f.FG_DEACTIVATION_MS))},V.prototype.rmBoundedActivationClasses_=function(){var H=V.cssClasses.FG_ACTIVATION;this.adapter.removeClass(H),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},V.prototype.resetActivationState_=function(){var H=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return H.previousActivationEvent_=void 0}),V.numbers.TAP_DELAY_MS)},V.prototype.deactivate_=function(){var H=this,V=this.activationState_;if(V.isActivated){var C=M({},V);V.isProgrammatic?(requestAnimationFrame((function(){return H.animateDeactivation_(C)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){H.activationState_.hasDeactivationUXRun=!0,H.animateDeactivation_(C),H.resetActivationState_()})))}},V.prototype.animateDeactivation_=function(H){var V=H.wasActivatedByPointer,C=H.wasElementMadeActive;(V||C)&&this.runDeactivationUXLogicIfReady_()},V.prototype.layoutInternal_=function(){var H=this;this.frame_=this.adapter.computeBoundingRect();var C=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?C:Math.sqrt(Math.pow(H.frame_.width,2)+Math.pow(H.frame_.height,2))+V.numbers.PADDING;var n=Math.floor(C*V.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&n%2!=0?this.initialSize_=n-1:this.initialSize_=n,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},V.prototype.updateLayoutCssVars_=function(){var H=V.strings,C=H.VAR_FG_SIZE,n=H.VAR_LEFT,e=H.VAR_TOP,t=H.VAR_FG_SCALE;this.adapter.updateCssVariable(C,this.initialSize_+"px"),this.adapter.updateCssVariable(t,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(n,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(e,this.unboundedCoords_.top+"px"))},V}(o),g=function(H){function V(){var V=null!==H&&H.apply(this,arguments)||this;return V.disabled=!1,V}return i(V,H),V.attachTo=function(H,C){void 0===C&&(C={isUnbounded:void 0});var n=new V(H);return void 0!==C.isUnbounded&&(n.unbounded=C.isUnbounded),n},V.createAdapter=function(H){return{addClass:function(V){return H.root.classList.add(V)},browserSupportsCssVars:function(){return t(window)},computeBoundingRect:function(){return H.root.getBoundingClientRect()},containsEventTarget:function(V){return H.root.contains(V)},deregisterDocumentInteractionHandler:function(H,V){return document.documentElement.removeEventListener(H,V,c())},deregisterInteractionHandler:function(V,C){return H.root.removeEventListener(V,C,c())},deregisterResizeHandler:function(H){return window.removeEventListener("resize",H)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return a(H.root,":active")},isSurfaceDisabled:function(){return Boolean(H.disabled)},isUnbounded:function(){return Boolean(H.unbounded)},registerDocumentInteractionHandler:function(H,V){return document.documentElement.addEventListener(H,V,c())},registerInteractionHandler:function(V,C){return H.root.addEventListener(V,C,c())},registerResizeHandler:function(H){return window.addEventListener("resize",H)},removeClass:function(V){return H.root.classList.remove(V)},updateCssVariable:function(V,C){return H.root.style.setProperty(V,C)}}},Object.defineProperty(V.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(H){this.unbounded_=Boolean(H),this.setUnbounded_()},enumerable:!0,configurable:!0}),V.prototype.activate=function(){this.foundation.activate()},V.prototype.deactivate=function(){this.foundation.deactivate()},V.prototype.layout=function(){this.foundation.layout()},V.prototype.getDefaultFoundation=function(){return new h(V.createAdapter(this))},V.prototype.initialSyncWithDOM=function(){var H=this.root;this.unbounded="mdcRippleIsUnbounded"in H.dataset},V.prototype.setUnbounded_=function(){this.foundation.setUnbounded(Boolean(this.unbounded_))},V}(d)}]);