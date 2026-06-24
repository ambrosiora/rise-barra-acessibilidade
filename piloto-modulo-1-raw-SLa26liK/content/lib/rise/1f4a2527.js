(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_28_0__articulate_design-system-to-de783f"],{68563(nd){var Nn="Expected a function",ta=NaN,Da="[object Symbol]",Fn=/^\s+|\s+$/g,Ei=/^[-+]0x[0-9a-f]+$/i,wo=/^0b[01]+$/i,Ur=/^0o[0-7]+$/i,Hn=parseInt,pa=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,Vn=typeof self=="object"&&self&&self.Object===Object&&self,Gn=pa||Vn||Function("return this")(),ze=Object.prototype,ht=ze.toString,Un=Math.max,_i=Math.min,pt=function(){return Gn.Date.now()};function Lt(Rr,be,ga){var Oa,fr,$e,oa,Ze,Je,vt=0,Wn=!1,na=!1,ca=!0;if(typeof Rr!="function")throw new TypeError(Nn);be=So(be)||0,gt(ga)&&(Wn=!!ga.leading,na="maxWait"in ga,$e=na?Un(So(ga.maxWait)||0,be):$e,ca="trailing"in ga?!!ga.trailing:ca);function i(ae){var va=Oa,ft=fr;return Oa=fr=void 0,vt=ae,oa=Rr.apply(ft,va),oa}function s(ae){return vt=ae,Ze=setTimeout(Qa,be),Wn?i(ae):oa}function Dt(ae){var va=ae-Je,ft=ae-vt,qn=be-va;return na?_i(qn,$e-ft):qn}function Ot(ae){var va=ae-Je,ft=ae-vt;return Je===void 0||va>=be||va<0||na&&ft>=$e}function Qa(){var ae=pt();if(Ot(ae))return Co(ae);Ze=setTimeout(Qa,Dt(ae))}function Co(ae){return Ze=void 0,ca&&Oa?i(ae):(Oa=fr=void 0,oa)}function Xn(){Ze!==void 0&&clearTimeout(Ze),vt=0,Oa=Je=fr=Ze=void 0}function Ti(){return Ze===void 0?oa:Co(pt())}function d(){var ae=pt(),va=Ot(ae);if(Oa=arguments,fr=this,Je=ae,va){if(Ze===void 0)return s(Je);if(na)return Ze=setTimeout(Qa,be),i(Je)}return Ze===void 0&&(Ze=setTimeout(Qa,be)),oa}return d.cancel=Xn,d.flush=Ti,d}function gt(Rr){var be=typeof Rr;return!!Rr&&(be=="object"||be=="function")}function Kn(Rr){return!!Rr&&typeof Rr=="object"}function Pi(Rr){return typeof Rr=="symbol"||Kn(Rr)&&ht.call(Rr)==Da}function So(Rr){if(typeof Rr=="number")return Rr;if(Pi(Rr))return ta;if(gt(Rr)){var be=typeof Rr.valueOf=="function"?Rr.valueOf():Rr;Rr=gt(be)?be+"":be}if(typeof Rr!="string")return Rr===0?Rr:+Rr;Rr=Rr.replace(Fn,"");var ga=wo.test(Rr);return ga||Ur.test(Rr)?Hn(Rr.slice(2),ga?2:8):Ei.test(Rr)?ta:+Rr}nd.exports=Lt},34666(nd,Nn,ta){"use strict";ta.r(Nn),ta.d(Nn,{ARC_DROPDOWN_SUBMENU_OMIT_KEYS:()=>E0,ARC_MENU_DELAY_MS:()=>Dl,Arc:()=>Gy,ArcAbstractFlexLayouts:()=>be,ArcAbstractGapSizes:()=>Kn,ArcAbstractIconSizes:()=>gt,ArcAbstractOrientations:()=>ga,ArcAbstractPopoverActions:()=>Lt,ArcAbstractPopoverModes:()=>pt,ArcAbstractTextLayouts:()=>Rr,ArcAbstractTextOverflows:()=>So,ArcAbstractTextSizes:()=>Pi,ArcAvatar:()=>qi,ArcAvatarColors:()=>$d,ArcAvatarColorsReserved:()=>Gp,ArcAvatarOverflow:()=>mf,ArcAvatarOverflowSizes:()=>Yp,ArcAvatarPile:()=>Cg,ArcAvatarPileSizes:()=>qp,ArcAvatarSizes:()=>Up,ArcAvatarText:()=>ec,ArcAvatarTextGapSizes:()=>Kp,ArcAvatarTextOverflows:()=>Wp,ArcAvatarTextSizes:()=>Xp,ArcBadge:()=>If,ArcBadgeColors:()=>Cf,ArcBadgeContrasts:()=>_f,ArcBadgeCount:()=>Vf,ArcBadgeCountColors:()=>Af,ArcBadgeCountContrasts:()=>Nf,ArcBadgeCountShapes:()=>Ff,ArcBadgeCountSizes:()=>Of,ArcBadgeCountVariants:()=>Bf,ArcBadgeLayouts:()=>Ef,ArcBadgeSizes:()=>zf,ArcBadgeVariants:()=>Pf,ArcBanner:()=>cm,ArcBannerActionPlacements:()=>rm,ArcBannerAlignments:()=>em,ArcBannerDefaults:()=>ot,ArcBannerDensities:()=>Jf,ArcBannerLayouts:()=>Qf,ArcBannerSchemes:()=>am,ArcBannerVariants:()=>om,ArcButton:()=>Br,ArcButtonHierarchies:()=>cu,ArcButtonLayouts:()=>kv,ArcButtonPopoverActions:()=>Sv,ArcButtonSchemes:()=>vs,ArcButtonShadows:()=>wv,ArcButtonShapes:()=>yv,ArcButtonSizes:()=>xv,ArcButtonVariants:()=>nu,ArcCheckbox:()=>ku,ArcCheckboxBar:()=>ym,ArcCheckboxBarLayouts:()=>mm,ArcCheckboxBarOption:()=>ju,ArcCheckboxBarSizes:()=>bm,ArcCheckboxBarVariants:()=>$m,ArcCheckboxLayouts:()=>pm,ArcCheckboxSizes:()=>gm,ArcCheckboxVariants:()=>vm,ArcChip:()=>Mm,ArcChipDefaults:()=>Ds,ArcChipSizes:()=>Im,ArcChipVariants:()=>Tm,ArcColorAllTools:()=>Nm,ArcColorGradientTools:()=>Nc,ArcColorPalette:()=>fn,ArcColorPaletteAddFlows:()=>Bm,ArcColorPicker:()=>Wa,ArcColorPickerDefaults:()=>wa,ArcColorPickerModes:()=>Lm,ArcColorPickerPanels:()=>Dm,ArcColorSimpleTools:()=>Mu,ArcColorSolidTools:()=>Os,ArcColorSwatch:()=>vn,ArcColorSwatchKinds:()=>Om,ArcColorValueFormats:()=>rx,ArcDropdownMenu:()=>hi,ArcIcon:()=>Ar,ArcIconText:()=>ue,ArcIconTextVariants:()=>Zg,ArcInputAction:()=>T0,ArcLabel:()=>wt,ArcLabelContent:()=>St,ArcLabelLayouts:()=>sm,ArcLink:()=>A1,ArcLinkVariants:()=>C1,ArcModal:()=>W1,ArcModalAlert:()=>q1,ArcModalAlertDefaults:()=>qa,ArcModalAlertVariants:()=>P1,ArcModalBackdropColors:()=>T1,ArcModalBodyPaddings:()=>I1,ArcModalCloseReasons:()=>j1,ArcModalCommonDefaults:()=>Fe,ArcModalCommonVariants:()=>E1,ArcModalConfirm:()=>O0,ArcModalConfirmDefaults:()=>ut,ArcModalConfirmVariants:()=>_1,ArcModalSchemes:()=>z1,ArcModalSizes:()=>R1,ArcPopover:()=>ya,ArcPopoverActions:()=>Ag,ArcPopoverAnchors:()=>ac,ArcPopoverBoundaries:()=>Ji,ArcPopoverButton:()=>Go,ArcPopoverDefaults:()=>Me,ArcPopoverDensities:()=>Id,ArcPopoverModes:()=>Yi,ArcPopoverSchemes:()=>Zi,ArcPopoverVariants:()=>Td,ArcPopoverVariantsWithOutline:()=>zg,ArcRadio:()=>l0,ArcRadioBar:()=>v0,ArcRadioBarLayouts:()=>x$,ArcRadioBarOption:()=>Ml,ArcRadioBarSizes:()=>k$,ArcRadioBarVariants:()=>w$,ArcRadioLayouts:()=>b$,ArcRadioSizes:()=>$$,ArcSVGGradientDef:()=>Sd,ArcSearch:()=>W0,ArcSearchLayouts:()=>uy,ArcSearchSizes:()=>hy,ArcSearchVariants:()=>py,ArcSelect:()=>Cy,ArcSelectLayouts:()=>my,ArcSelectSizes:()=>by,ArcSelectVariants:()=>$y,ArcSlider:()=>Cl,ArcSliderLabelPlacements:()=>u$,ArcSliderLayouts:()=>s$,ArcSliderSizes:()=>l$,ArcSliderVariants:()=>d$,ArcSwitch:()=>_y,ArcSwitchLabelPositions:()=>bo,ArcSwitchSizes:()=>Ay,ArcSwitchStates:()=>me,ArcSystemAIGradients:()=>Un,ArcSystemAlignments:()=>Vn,ArcSystemColors:()=>ht,ArcSystemGradients:()=>_i,ArcSystemHierarchies:()=>Hn,ArcSystemLayouts:()=>pa,ArcSystemLineHeights:()=>Gn,ArcSystemSchemes:()=>Da,ArcSystemShadows:()=>Fn,ArcSystemShapes:()=>wo,ArcSystemSizes:()=>ze,ArcSystemSurfaces:()=>Ei,ArcSystemVariants:()=>Ur,ArcTextAlignments:()=>Oy,ArcTextBodyElements:()=>ap,ArcTextBodySizes:()=>Ly,ArcTextBodyVariants:()=>Dy,ArcTextElements:()=>tp,ArcTextHeadingElements:()=>ep,ArcTextHeadingSizes:()=>Ry,ArcTextHeadingVariants:()=>My,ArcTextInput:()=>uo,ArcTextInputLayouts:()=>o$,ArcTextInputSizes:()=>n$,ArcTextInputTypes:()=>i$,ArcTextInputVariants:()=>c$,ArcTextKinds:()=>Py,ArcTextLineHeights:()=>By,ArcTextSchemes:()=>Ty,ArcTextSubheadingSizes:()=>jy,ArcTextTitleSizes:()=>Iy,ArcToast:()=>yp,ArcToastDefaults:()=>gp,ArcToastPlacements:()=>pp,ArcToastPopoverActions:()=>Ky,ArcToastPopoverModes:()=>hp,ArcToastProgressBarVariants:()=>Wy,ArcToastSchemes:()=>sp,ArcToastSeverities:()=>lp,ArcToastSizes:()=>dp,ArcToastVariants:()=>up,ArcTooltip:()=>mc,ArcTooltipDefaults:()=>ma,COLOR_DEFAULTS:()=>qe,DEFAULT_COLOR_PICKER_LABELS:()=>Ce,DeprecatedButtonVariants:()=>fs,EPS_LOOSE:()=>tn,EPS_MID:()=>Hc,EPS_STRICT:()=>Bs,GRADIENT_DEFAULTS:()=>rr,IS_FLOATING:()=>Rd,SLIDER_TOKENS:()=>Zh,SLIDER_TOKENS_REGEX:()=>Jh,SVGLogoArticulate:()=>Ni,SVGLogoProductAI:()=>Fi,SVGLogoProductPeek:()=>Hi,SVGLogoProductReach:()=>Vi,SVGLogoProductReview:()=>Gi,SVGLogoProductRise:()=>Ui,SVGLogoProductStoryline:()=>Ki,SVGLogoProductStudio:()=>Wi,StorageType:()=>On,adoptStyles:()=>Cr,adoptThemeTokens:()=>Np,anchorNameRegistry:()=>jo,appendGradientStop:()=>uh,appendUniqueColorValue:()=>Zm,arcGradientsEqual:()=>dn,arcGradientsSemanticEqual:()=>ct,arcGradientsVisuallyEqual:()=>al,assignRef:()=>oa,bindDelegatedEvents:()=>au,buildDefaultGradientStops:()=>nh,buildStopFieldBackground:()=>gh,canonicalizeToHsv:()=>Xc,clamp:()=>Ze,clampIt:()=>Z,colorValueEquals:()=>oo,compositeRgbaOver:()=>Gc,computeEvenlyDistributedStopAt:()=>ih,computeNextStopAt:()=>tl,computeStopAtBetween:()=>un,createEmptyRect:()=>ex,css:()=>d,cssFeatures:()=>tc,decodeDeprecatedButtonVariant:()=>Ev,didElementRectChange:()=>Wn,distributeGradientStopPositions:()=>sh,encodeDeprecatedButtonVariant:()=>_v,expandHex3To6:()=>Ks,expandShortHex:()=>Us,extractTextFromReactNode:()=>Io,formatAlphaCss:()=>Kc,formatAlphaPercent:()=>ro,formatAnchorName:()=>rs,getArcColorAs:()=>eh,getArcColorData:()=>nt,getArcColorParts:()=>rh,getArcColorValue:()=>Js,getArcContrastColor:()=>no,getArcGradientData:()=>hn,getArcGradientMeridianColor:()=>qc,getColorName:()=>Wc,getCssColor:()=>Dr,getElementByIdScoped:()=>ca,getGradientName:()=>hh,getGradientStopKeyboardDelta:()=>bh,getPlainLabel:()=>J0,getPreferredAnchorForTooltipId:()=>ps,getResolvedHierarchy:()=>du,getResolvedScheme:()=>uu,getResolvedShape:()=>iu,getResolvedVariant:()=>lu,getSelectedColorMeta:()=>rl,getShadowRootOrDocument:()=>na,getSortedStopEntries:()=>ka,getSvgGradientCoords:()=>wd,handlePopover:()=>Od,handleToast:()=>vp,hasBaseSelectSupport:()=>X0,hasEmptyValueOption:()=>Z0,hasMatchingColorValue:()=>Qs,hasNativeAnchorPositioning:()=>Qi,hexAfterChannelNudge:()=>Ju,hslToRgbaData:()=>Fu,hsvDeltaOK:()=>sn,hsvToRgbaData:()=>De,interpolateGradientStopColor:()=>lh,isArcColorGradient:()=>Zr,isArcColorPickerGradientChange:()=>Fm,isArcColorPickerSolidChange:()=>Du,isArcColorSwatchGradientDetails:()=>Lu,isDeprecatedButtonVariant:()=>ms,isDifferent:()=>Je,isGroupLegendItem:()=>q0,isHexLike:()=>qu,isHsvLike:()=>Zu,isObject:()=>kd,isRgbaLike:()=>Yu,isSame:()=>vt,isSelectGroup:()=>yi,isSelectedColorMatch:()=>oh,isString:()=>Ht,joinArray:()=>Ro,logError:()=>Kg,logMessage:()=>Ug,logSkippedTopLevelItem:()=>Y0,logWarning:()=>Kd,makeHtmlId:()=>eg,makeRandomColor:()=>ln,mapDeprecated:()=>Oa,mergeRgbaFromHexDraft:()=>Xu,noTailAnchors:()=>jd,noop:()=>Ct,normalizeAnchorName:()=>Mo,normalizeByte:()=>ge,normalizeColorValue:()=>to,normalizeHexInput:()=>Va,normalizeHue:()=>Vc,normalizeUnit:()=>Nu,oklchToRgbaData:()=>Gu,parseAlphaInput:()=>Ku,parseByte:()=>on,parseCssColorToRgba:()=>Kr,parseHexStringToRgba:()=>Wu,percentsFromValue:()=>Ns,pickFromList:()=>fr,pickFromListByKeys:()=>$e,positionTryNameFor:()=>Ld,relativeLuminance:()=>Uu,renderableOption:()=>mo,resolveColorPickerLabels:()=>Fc,resolveFallbackAnchors:()=>Md,resolveGradientAngleFromPointerDrag:()=>fh,resolveGradientData:()=>ph,resolveGradientStopAtFromPointer:()=>vh,resolveInsertedGradientStop:()=>dh,resolvePointerAngleDeg:()=>ol,resolveTailMetrics:()=>Dd,rgbaBytesEqual:()=>Hs,rgbaDeltaOK:()=>Uc,rgbaEchoDeltaOK:()=>Vs,rgbaToHslData:()=>Hu,rgbaToHsvData:()=>nn,rgbaToOklchData:()=>Vu,roundGradientStopsForCommit:()=>Et,roundIt:()=>xa,shareAdoptedStyles:()=>Bp,shouldSortStopAtAdjacent:()=>rb,shouldSortStopAtNeighborPositions:()=>el,snapGradientAngle:()=>mh,snapIt:()=>Bu,snapToStep:()=>a0,sortGradientStops:()=>ch,splitString:()=>Ud,stepGradientAngleBySnap:()=>ab,stepToNextSnap:()=>t0,syncAnchorName:()=>Bd,toHEX:()=>Oe,toHSL:()=>Ys,toLinearChannel:()=>zt,toLinearGradientCss:()=>Ua,toOKLCH:()=>Zs,toOpaqueRgbHexNoHash:()=>ao,toPx:()=>Lo,toRGB:()=>Ga,unbindDelegatedEvents:()=>hv,useIsoLayoutEffect:()=>et,useShiftSnap:()=>o0,useStableId:()=>Or,useStorage:()=>Qy});const Da=["auto","light","dark","inverse"],Fn=["none","sm","md","lg","xl"],Ei=["primary","secondary","inset","raised","floating"],wo=["circle","round","pill","square","narrow"],Ur=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],Hn=["primary","secondary","tertiary","plain","link-style"],pa=["hug","fill","icon","gutter","inline"],Vn=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],Gn=["inherit","tight","standard","loose"],ze=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],ht=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],Un=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],_i=[...Un],pt=["","auto","manual"],Lt=["toggle","show","hide"],gt=["inherit","xl","lg","md","sm","xs"],Kn=["inherit","lg","md","sm"],Pi=["inherit","md","sm"],So=["inherit","wrap","truncate"],Rr=["gutter","inline"],be=["hug","fill"],ga=["horizontal","vertical"],Oa=(r,e)=>e[r]||r,fr=(r,e)=>r.filter(a=>e.includes(a)),$e=(r,e)=>e.filter(a=>r.includes(a)),oa=(r,e)=>{r&&(typeof r=="function"?r(e):r.current=e)},Ze=(r,e=0,a=100)=>Math.min(Math.max(r,e),a),Je=(r,e)=>r!==e,vt=(r,e)=>r===e,Wn=({a:r,b:e})=>Je(r?.top,e?.top)||Je(r?.left,e?.left)||Je(r?.width,e?.width)||Je(r?.height,e?.height);function na(r){if(!(r instanceof Node))return null;const e=r.getRootNode();return e instanceof ShadowRoot||e instanceof Document?e:null}function ca(r,e){if(typeof document>"u")return null;const a=e==null?document:na(e)??document,t=a.getElementById(r);return t||(a!==document?document.getElementById(r):null)}var i=ta(69838),s=ta(82920);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=globalThis,Ot=Dt.ShadowRoot&&(Dt.ShadyCSS===void 0||Dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qa=Symbol(),Co=new WeakMap;class Xn{constructor(e,a,t){if(this._$cssResult$=!0,t!==Qa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(Ot&&e===void 0){const t=a!==void 0&&a.length===1;t&&(e=Co.get(a)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&Co.set(a,e))}return e}toString(){return this.cssText}}const Ti=r=>new Xn(typeof r=="string"?r:r+"",void 0,Qa),d=(r,...e)=>{const a=r.length===1?r[0]:e.reduce(((t,o,n)=>t+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1]),r[0]);return new Xn(a,r,Qa)},ae=(r,e)=>{if(Ot)r.adoptedStyleSheets=e.map((a=>a instanceof CSSStyleSheet?a:a.styleSheet));else for(const a of e){const t=document.createElement("style"),o=Dt.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=a.cssText,r.appendChild(t)}},va=Ot?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let a="";for(const t of e.cssRules)a+=t.cssText;return Ti(a)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:qn,getOwnPropertyDescriptor:xp,getOwnPropertyNames:kp,getOwnPropertySymbols:wp,getPrototypeOf:Sp}=Object,Yn=globalThis,cd=Yn.trustedTypes,Cp=cd?cd.emptyScript:"",Ap=Yn.reactiveElementPolyfillSupport,Ao=(r,e)=>r,Ii={toAttribute(r,e){switch(e){case Boolean:r=r?Cp:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let a=r;switch(e){case Boolean:a=r!==null;break;case Number:a=r===null?null:Number(r);break;case Object:case Array:try{a=JSON.parse(r)}catch{a=null}}return a}},id=(r,e)=>!ft(r,e),sd={attribute:!0,type:String,converter:Ii,reflect:!1,useDefault:!1,hasChanged:id};Symbol.metadata??=Symbol("metadata"),Yn.litPropertyMetadata??=new WeakMap;class Bt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=sd){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(e,a),!a.noAccessor){const t=Symbol(),o=this.getPropertyDescriptor(e,t,a);o!==void 0&&qn(this.prototype,e,o)}}static getPropertyDescriptor(e,a,t){const{get:o,set:n}=xp(this.prototype,e)??{get(){return this[a]},set(c){this[a]=c}};return{get:o,set(c){const l=o?.call(this);n?.call(this,c),this.requestUpdate(e,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sd}static _$Ei(){if(this.hasOwnProperty(Ao("elementProperties")))return;const e=Sp(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ao("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ao("properties"))){const a=this.properties,t=[...kp(a),...wp(a)];for(const o of t)this.createProperty(o,a[o])}const e=this[Symbol.metadata];if(e!==null){const a=litPropertyMetadata.get(e);if(a!==void 0)for(const[t,o]of a)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[a,t]of this.elementProperties){const o=this._$Eu(a,t);o!==void 0&&this._$Eh.set(o,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const o of t)a.unshift(va(o))}else e!==void 0&&a.push(va(e));return a}static _$Eu(e,a){const t=a.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const t of a.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ae(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,a,t){this._$AK(e,t)}_$ET(e,a){const t=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,t);if(o!==void 0&&t.reflect===!0){const n=(t.converter?.toAttribute!==void 0?t.converter:Ii).toAttribute(a,t.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,a){const t=this.constructor,o=t._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const n=t.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Ii;this._$Em=o;const l=c.fromAttribute(a,n.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,a,t){if(e!==void 0){const o=this.constructor,n=this[e];if(t??=o.getPropertyOptions(e),!((t.hasChanged??id)(n,a)||t.useDefault&&t.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,t))))return;this.C(e,a,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,a,{useDefault:t,reflect:o,wrapped:n},c){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,c??a??this[e]),n!==!0||c!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(a=void 0),this._$AL.set(e,a)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[o,n]of t){const{wrapped:c}=n,l=this[o];c!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(a)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach((a=>a.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((a=>this._$ET(a,this[a]))),this._$EM()}updated(e){}firstUpdated(e){}}Bt.elementStyles=[],Bt.shadowRootOptions={mode:"open"},Bt[Ao("elementProperties")]=new Map,Bt[Ao("finalized")]=new Map,Ap?.({ReactiveElement:Bt}),(Yn.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ri=globalThis,Zn=Ri.trustedTypes,ld=Zn?Zn.createPolicy("lit-html",{createHTML:r=>r}):void 0,dd="$lit$",rt=`lit$${Math.random().toFixed(9).slice(2)}$`,ud="?"+rt,zp=`<${ud}>`,mt=document,zo=()=>mt.createComment(""),Eo=r=>r===null||typeof r!="object"&&typeof r!="function",ji=Array.isArray,Ep=r=>ji(r)||typeof r?.[Symbol.iterator]=="function",Mi=`[ 	
\f\r]`,_o=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hd=/-->/g,pd=/>/g,bt=RegExp(`>|${Mi}(?:([^\\s"'>=/]+)(${Mi}*=${Mi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gd=/'/g,vd=/"/g,fd=/^(?:script|style|textarea|title)$/i,Li=r=>(e,...a)=>({_$litType$:r,strings:e,values:a}),ax=Li(1),tx=Li(2),ox=Li(3),Nt=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),md=new WeakMap,$t=mt.createTreeWalker(mt,129);function bd(r,e){if(!ji(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ld!==void 0?ld.createHTML(e):e}const _p=(r,e)=>{const a=r.length-1,t=[];let o,n=e===2?"<svg>":e===3?"<math>":"",c=_o;for(let l=0;l<a;l++){const u=r[l];let h,p,f=-1,g=0;for(;g<u.length&&(c.lastIndex=g,p=c.exec(u),p!==null);)g=c.lastIndex,c===_o?p[1]==="!--"?c=hd:p[1]!==void 0?c=pd:p[2]!==void 0?(fd.test(p[2])&&(o=RegExp("</"+p[2],"g")),c=bt):p[3]!==void 0&&(c=bt):c===bt?p[0]===">"?(c=o??_o,f=-1):p[1]===void 0?f=-2:(f=c.lastIndex-p[2].length,h=p[1],c=p[3]===void 0?bt:p[3]==='"'?vd:gd):c===vd||c===gd?c=bt:c===hd||c===pd?c=_o:(c=bt,o=void 0);const v=c===bt&&r[l+1].startsWith("/>")?" ":"";n+=c===_o?u+zp:f>=0?(t.push(h),u.slice(0,f)+dd+u.slice(f)+rt+v):u+rt+(f===-2?l:v)}return[bd(r,n+(r[a]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]};class Po{constructor({strings:e,_$litType$:a},t){let o;this.parts=[];let n=0,c=0;const l=e.length-1,u=this.parts,[h,p]=_p(e,a);if(this.el=Po.createElement(h,t),$t.currentNode=this.el.content,a===2||a===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=$t.nextNode())!==null&&u.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(dd)){const g=p[c++],v=o.getAttribute(f).split(rt),m=/([.?@])?(.*)/.exec(g);u.push({type:1,index:n,name:m[2],strings:v,ctor:m[1]==="."?Tp:m[1]==="?"?Ip:m[1]==="@"?Rp:Jn}),o.removeAttribute(f)}else f.startsWith(rt)&&(u.push({type:6,index:n}),o.removeAttribute(f));if(fd.test(o.tagName)){const f=o.textContent.split(rt),g=f.length-1;if(g>0){o.textContent=Zn?Zn.emptyScript:"";for(let v=0;v<g;v++)o.append(f[v],zo()),$t.nextNode(),u.push({type:2,index:++n});o.append(f[g],zo())}}}else if(o.nodeType===8)if(o.data===ud)u.push({type:2,index:n});else{let f=-1;for(;(f=o.data.indexOf(rt,f+1))!==-1;)u.push({type:7,index:n}),f+=rt.length-1}n++}}static createElement(e,a){const t=mt.createElement("template");return t.innerHTML=e,t}}function Ft(r,e,a=r,t){if(e===Nt)return e;let o=t!==void 0?a._$Co?.[t]:a._$Cl;const n=Eo(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(r),o._$AT(r,a,t)),t!==void 0?(a._$Co??=[])[t]=o:a._$Cl=o),o!==void 0&&(e=Ft(r,o._$AS(r,e.values),o,t)),e}class Pp{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:t}=this._$AD,o=(e?.creationScope??mt).importNode(a,!0);$t.currentNode=o;let n=$t.nextNode(),c=0,l=0,u=t[0];for(;u!==void 0;){if(c===u.index){let h;u.type===2?h=new To(n,n.nextSibling,this,e):u.type===1?h=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(h=new jp(n,this,e)),this._$AV.push(h),u=t[++l]}c!==u?.index&&(n=$t.nextNode(),c++)}return $t.currentNode=mt,o}p(e){let a=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,a),a+=t.strings.length-2):t._$AI(e[a])),a++}}class To{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,t,o){this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&e?.nodeType===11&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=Ft(this,e,a),Eo(e)?e===le||e==null||e===""?(this._$AH!==le&&this._$AR(),this._$AH=le):e!==this._$AH&&e!==Nt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ep(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==le&&Eo(this._$AH)?this._$AA.nextSibling.data=e:this.T(mt.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:t}=e,o=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=Po.createElement(bd(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(a);else{const n=new Pp(o,this),c=n.u(this.options);n.p(a),this.T(c),this._$AH=n}}_$AC(e){let a=md.get(e.strings);return a===void 0&&md.set(e.strings,a=new Po(e)),a}k(e){ji(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let t,o=0;for(const n of e)o===a.length?a.push(t=new To(this.O(zo()),this.O(zo()),this,this.options)):t=a[o],t._$AI(n),o++;o<a.length&&(this._$AR(t&&t._$AB.nextSibling,o),a.length=o)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Jn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,t,o,n){this.type=1,this._$AH=le,this._$AN=void 0,this.element=e,this.name=a,this._$AM=o,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=le}_$AI(e,a=this,t,o){const n=this.strings;let c=!1;if(n===void 0)e=Ft(this,e,a,0),c=!Eo(e)||e!==this._$AH&&e!==Nt,c&&(this._$AH=e);else{const l=e;let u,h;for(e=n[0],u=0;u<n.length-1;u++)h=Ft(this,l[t+u],a,u),h===Nt&&(h=this._$AH[u]),c||=!Eo(h)||h!==this._$AH[u],h===le?e=le:e!==le&&(e+=(h??"")+n[u+1]),this._$AH[u]=h}c&&!o&&this.j(e)}j(e){e===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Tp extends Jn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===le?void 0:e}}class Ip extends Jn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==le)}}class Rp extends Jn{constructor(e,a,t,o,n){super(e,a,t,o,n),this.type=5}_$AI(e,a=this){if((e=Ft(this,e,a,0)??le)===Nt)return;const t=this._$AH,o=e===le&&t!==le||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,n=e!==le&&(t===le||o);o&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class jp{constructor(e,a,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){Ft(this,e)}}const nx=null,Mp=Ri.litHtmlPolyfillSupport;Mp?.(Po,To),(Ri.litHtmlVersions??=[]).push("3.3.1");const Lp=(r,e,a)=>{const t=a?.renderBefore??e;let o=t._$litPart$;if(o===void 0){const n=a?.renderBefore??null;t._$litPart$=o=new To(e.insertBefore(zo(),n),n,void 0,a??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=globalThis;class Qn extends Bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Lp(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Nt}}Qn._$litElement$=!0,Qn.finalized=!0,Di.litElementHydrateSupport?.({LitElement:Qn});const Dp=Di.litElementPolyfillSupport;Dp?.({LitElement:Qn});const cx=null;(Di.litElementVersions??=[]).push("4.2.1");const Op=`@charset "UTF-8";
@layer arc-theme, arc-components, arc-utils;
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-color-mono-black: #000000;
    --arc-color-mono-white: #ffffff;
    --arc-color-light-neutral-0: #ffffff;
    --arc-color-light-neutral-50: #f7f7f7;
    --arc-color-light-neutral-100: #ededed;
    --arc-color-light-neutral-200: #e6e6e6;
    --arc-color-light-neutral-300: #c6c6c6;
    --arc-color-light-neutral-400: #b0b0b0;
    --arc-color-light-neutral-500: #9b9b9b;
    --arc-color-light-neutral-600: #737373;
    --arc-color-light-neutral-700: #636363;
    --arc-color-light-neutral-800: #4b4b4b;
    --arc-color-light-neutral-900: #212121;
    --arc-color-light-neutral-1000: #000000;
    --arc-color-light-blue-50: #f0fbff;
    --arc-color-light-blue-100: #ddf4fd;
    --arc-color-light-blue-200: #99e4ff;
    --arc-color-light-blue-300: #53d1ff;
    --arc-color-light-blue-400: #00aff0;
    --arc-color-light-blue-500: #0098eb;
    --arc-color-light-blue-600: #0075cf;
    --arc-color-light-blue-700: #0065b2;
    --arc-color-light-blue-800: #005394;
    --arc-color-light-blue-900: #00335b;
    --arc-color-light-purple-50: #f1f0ff;
    --arc-color-light-purple-100: #e9e7fe;
    --arc-color-light-purple-200: #b2a8ff;
    --arc-color-light-purple-300: #9789fa;
    --arc-color-light-purple-400: #8676ff;
    --arc-color-light-purple-500: #7565f1;
    --arc-color-light-purple-600: #4e3bd5;
    --arc-color-light-purple-700: #3120b4;
    --arc-color-light-purple-800: #16068e;
    --arc-color-light-purple-900: #0c0064;
    --arc-color-light-mint-50: #f0fff9;
    --arc-color-light-mint-100: #d9fdef;
    --arc-color-light-mint-200: #9df1d1;
    --arc-color-light-mint-300: #6de3b6;
    --arc-color-light-mint-400: #44bf90;
    --arc-color-light-mint-500: #0f9f68;
    --arc-color-light-mint-600: #008451;
    --arc-color-light-mint-700: #006e44;
    --arc-color-light-mint-800: #005937;
    --arc-color-light-mint-900: #00442a;
    --arc-color-light-orange-50: #fff6f0;
    --arc-color-light-orange-100: #fdeadd;
    --arc-color-light-orange-200: #fac39e;
    --arc-color-light-orange-300: #fd9e5e;
    --arc-color-light-orange-400: #ff6602;
    --arc-color-light-orange-500: #e95d00;
    --arc-color-light-orange-600: #c24e00;
    --arc-color-light-orange-700: #a84300;
    --arc-color-light-orange-800: #933b00;
    --arc-color-light-orange-900: #662900;
    --arc-color-light-maroon-50: #ffeff3;
    --arc-color-light-maroon-100: #fedde5;
    --arc-color-light-maroon-200: #ffa8be;
    --arc-color-light-maroon-300: #fe8fab;
    --arc-color-light-maroon-400: #f27195;
    --arc-color-light-maroon-500: #e05580;
    --arc-color-light-maroon-600: #c73868;
    --arc-color-light-maroon-700: #aa1a53;
    --arc-color-light-maroon-800: #841a42;
    --arc-color-light-maroon-900: #5d132d;
    --arc-color-light-green-50: #f6fff0;
    --arc-color-light-green-100: #e7fdd9;
    --arc-color-light-green-200: #bfeea0;
    --arc-color-light-green-300: #8dd65c;
    --arc-color-light-green-400: #74bb44;
    --arc-color-light-green-500: #57a225;
    --arc-color-light-green-600: #358201;
    --arc-color-light-green-700: #2c6d00;
    --arc-color-light-green-800: #235800;
    --arc-color-light-green-900: #1b4300;
    --arc-color-light-yellow-50: #fffaf0;
    --arc-color-light-yellow-100: #fdf2dd;
    --arc-color-light-yellow-200: #ffdb94;
    --arc-color-light-yellow-300: #ffc960;
    --arc-color-light-yellow-400: #ffb629;
    --arc-color-light-yellow-500: #eb9b00;
    --arc-color-light-yellow-600: #9e6900;
    --arc-color-light-yellow-700: #805400;
    --arc-color-light-yellow-800: #604000;
    --arc-color-light-yellow-900: #3e2900;
    --arc-color-light-red-50: #fff0f0;
    --arc-color-light-red-100: #fde2e2;
    --arc-color-light-red-200: #ff9999;
    --arc-color-light-red-300: #ff6161;
    --arc-color-light-red-400: #ff0000;
    --arc-color-light-red-500: #eb0000;
    --arc-color-light-red-600: #b80000;
    --arc-color-light-red-700: #990000;
    --arc-color-light-red-800: #7a0000;
    --arc-color-light-red-900: #520000;
    --arc-color-dark-neutral-0: #000000;
    --arc-color-dark-neutral-50: #1c1c1c;
    --arc-color-dark-neutral-100: #2a2a2a;
    --arc-color-dark-neutral-200: #3d3d3d;
    --arc-color-dark-neutral-300: #515151;
    --arc-color-dark-neutral-400: #666666;
    --arc-color-dark-neutral-500: #7b7b7b;
    --arc-color-dark-neutral-600: #939393;
    --arc-color-dark-neutral-700: #aeaeae;
    --arc-color-dark-neutral-800: #d0d0d0;
    --arc-color-dark-neutral-900: #ededed;
    --arc-color-dark-neutral-1000: #ffffff;
    --arc-color-dark-blue-50: #002542;
    --arc-color-dark-blue-100: #093a63;
    --arc-color-dark-blue-200: #0f4d7a;
    --arc-color-dark-blue-300: #146192;
    --arc-color-dark-blue-400: #1974aa;
    --arc-color-dark-blue-500: #1e88c7;
    --arc-color-dark-blue-600: #0ca1f7;
    --arc-color-dark-blue-700: #3ab1f5;
    --arc-color-dark-blue-800: #70cbfa;
    --arc-color-dark-blue-900: #b9e6fd;
    --arc-color-dark-purple-50: #161041;
    --arc-color-dark-purple-100: #221c5a;
    --arc-color-dark-purple-200: #2d2773;
    --arc-color-dark-purple-300: #39328c;
    --arc-color-dark-purple-400: #463da6;
    --arc-color-dark-purple-500: #5449c0;
    --arc-color-dark-purple-600: #6556da;
    --arc-color-dark-purple-700: #7a6ef0;
    --arc-color-dark-purple-800: #a193f9;
    --arc-color-dark-purple-900: #d3c9ff;
    --arc-color-dark-mint-50: #04291b;
    --arc-color-dark-mint-100: #0b3425;
    --arc-color-dark-mint-200: #134434;
    --arc-color-dark-mint-300: #1b5444;
    --arc-color-dark-mint-400: #246554;
    --arc-color-dark-mint-500: #2f7766;
    --arc-color-dark-mint-600: #14b290;
    --arc-color-dark-mint-700: #52a895;
    --arc-color-dark-mint-800: #84d0bd;
    --arc-color-dark-mint-900: #d6fff2;
    --arc-color-dark-orange-50: #251104;
    --arc-color-dark-orange-100: #3a1a08;
    --arc-color-dark-orange-200: #50240d;
    --arc-color-dark-orange-300: #672f14;
    --arc-color-dark-orange-400: #7f3c1d;
    --arc-color-dark-orange-500: #984b27;
    --arc-color-dark-orange-600: #d55913;
    --arc-color-dark-orange-700: #d1764d;
    --arc-color-dark-orange-800: #eba883;
    --arc-color-dark-orange-900: #ffdcc9;
    --arc-color-dark-maroon-50: #2a0914;
    --arc-color-dark-maroon-100: #40101f;
    --arc-color-dark-maroon-200: #56162b;
    --arc-color-dark-maroon-300: #6c1e39;
    --arc-color-dark-maroon-400: #822647;
    --arc-color-dark-maroon-500: #993057;
    --arc-color-dark-maroon-600: #b13d69;
    --arc-color-dark-maroon-700: #d05886;
    --arc-color-dark-maroon-800: #e891b5;
    --arc-color-dark-maroon-900: #ffd6e7;
    --arc-color-dark-green-50: #132904;
    --arc-color-dark-green-100: #1b340a;
    --arc-color-dark-green-200: #264411;
    --arc-color-dark-green-300: #31551a;
    --arc-color-dark-green-400: #3e6625;
    --arc-color-dark-green-500: #4c7831;
    --arc-color-dark-green-600: #55a722;
    --arc-color-dark-green-700: #72a65b;
    --arc-color-dark-green-800: #a0d092;
    --arc-color-dark-green-900: #e2fcd9;
    --arc-color-dark-yellow-50: #2e2005;
    --arc-color-dark-yellow-100: #3a2907;
    --arc-color-dark-yellow-200: #51390d;
    --arc-color-dark-yellow-300: #684a14;
    --arc-color-dark-yellow-400: #7f5c1c;
    --arc-color-dark-yellow-500: #976f25;
    --arc-color-dark-yellow-600: #d99d0f;
    --arc-color-dark-yellow-700: #d1a049;
    --arc-color-dark-yellow-800: #eccc86;
    --arc-color-dark-yellow-900: #fff7d9;
    --arc-color-dark-red-50: #250404;
    --arc-color-dark-red-100: #3a0809;
    --arc-color-dark-red-200: #500d0e;
    --arc-color-dark-red-300: #671416;
    --arc-color-dark-red-400: #7e1d1f;
    --arc-color-dark-red-500: #97292b;
    --arc-color-dark-red-600: #d4423f;
    --arc-color-dark-red-700: #d86466;
    --arc-color-dark-red-800: #e88987;
    --arc-color-dark-red-900: #ffd6d6;
    --arc-color-alpha-black-0: rgb(0 0 0 / 0%);
    --arc-color-alpha-black-3: rgb(0 0 0 / 3%);
    --arc-color-alpha-black-5: rgb(0 0 0 / 5%);
    --arc-color-alpha-black-7: rgb(0 0 0 / 7%);
    --arc-color-alpha-black-10: rgb(0 0 0 / 10%);
    --arc-color-alpha-black-15: rgb(0 0 0 / 15%);
    --arc-color-alpha-black-20: rgb(0 0 0 / 20%);
    --arc-color-alpha-black-25: rgb(0 0 0 / 25%);
    --arc-color-alpha-black-30: rgb(0 0 0 / 30%);
    --arc-color-alpha-black-40: rgb(0 0 0 / 40%);
    --arc-color-alpha-black-50: rgb(0 0 0 / 50%);
    --arc-color-alpha-black-60: rgb(0 0 0 / 60%);
    --arc-color-alpha-black-70: rgb(0 0 0 / 70%);
    --arc-color-alpha-black-80: rgb(0 0 0 / 80%);
    --arc-color-alpha-black-90: rgb(0 0 0 / 90%);
    --arc-color-alpha-black-95: rgb(0 0 0 / 95%);
    --arc-color-alpha-black-100: rgb(0 0 0 / 100%);
    --arc-color-alpha-white-0: rgb(255 255 255 / 0%);
    --arc-color-alpha-white-3: rgb(255 255 255 / 3%);
    --arc-color-alpha-white-5: rgb(255 255 255 / 5%);
    --arc-color-alpha-white-7: rgb(255 255 255 / 7%);
    --arc-color-alpha-white-10: rgb(255 255 255 / 10%);
    --arc-color-alpha-white-15: rgb(255 255 255 / 15%);
    --arc-color-alpha-white-20: rgb(255 255 255 / 20%);
    --arc-color-alpha-white-25: rgb(255 255 255 / 25%);
    --arc-color-alpha-white-30: rgb(255 255 255 / 30%);
    --arc-color-alpha-white-40: rgb(255 255 255 / 40%);
    --arc-color-alpha-white-50: rgb(255 255 255 / 50%);
    --arc-color-alpha-white-60: rgb(255 255 255 / 60%);
    --arc-color-alpha-white-70: rgb(255 255 255 / 70%);
    --arc-color-alpha-white-80: rgb(255 255 255 / 80%);
    --arc-color-alpha-white-90: rgb(255 255 255 / 90%);
    --arc-color-alpha-white-95: rgb(255 255 255 / 95%);
    --arc-color-alpha-white-100: rgb(255 255 255 / 100%);
    --arc-gradient-ai-50: linear-gradient(60deg, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
    --arc-gradient-ai-100: linear-gradient(60deg, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
    --arc-gradient-ai-200: linear-gradient(60deg, light-dark(#9c15ff, #ad44cb), light-dark(#1eb4fb, #169cfe));
    --arc-gradient-ai-300: linear-gradient(60deg, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
    --arc-gradient-ai-400: linear-gradient(60deg, light-dark(#5d3668, #c778de), light-dark(#36648c, #84daff));
    --arc-gradient-ai-500: linear-gradient(60deg, light-dark(#37003f, #e3a7ff), light-dark(#004273, #b7eaff));
    --arc-gradient-ai-600: linear-gradient(60deg, light-dark(#27002c, #f9ebff), light-dark(#012a48, #c2edff));
    --arc-color-overlay-subtle: light-dark(var(--arc-color-alpha-white-70), var(--arc-color-alpha-black-70));
    --arc-color-overlay-stark: light-dark(var(--arc-color-alpha-black-50), var(--arc-color-alpha-black-50));
    --arc-color-shadow-sm: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-black-60));
    --arc-color-shadow-md: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-50));
    --arc-color-shadow-lg: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-shadow-xl: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-bg-primary: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-100));
    --arc-color-bg-secondary: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-bg-tertiary: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-300));
    --arc-color-bg-mono-inverse: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-mono: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-bg-disabled: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-hover-default: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-stark: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-bg-selected-subtle: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-selected-default: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-200));
    --arc-color-bg-selected-stark: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-400));
    --arc-color-bg-theme-muted: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-5));
    --arc-color-bg-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-bg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-bg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-bg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-success-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-success-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-success-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-warning-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-warning-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-warning-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-critical-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-critical-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-critical-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-bg-info-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-info-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-info-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-brand-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-brand-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-brand-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-neutral-muted: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-neutral-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-25));
    --arc-color-bg-neutral-mid: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-bg-neutral-stark: light-dark(var(--arc-color-light-neutral-600), var(--arc-color-dark-neutral-600));
    --arc-color-bg-neutral-heavy: light-dark(var(--arc-color-light-neutral-800), var(--arc-color-dark-neutral-800));
    --arc-color-bg-orange-muted: light-dark(var(--arc-color-light-orange-50), var(--arc-color-dark-orange-50));
    --arc-color-bg-orange-subtle: light-dark(var(--arc-color-light-orange-100), var(--arc-color-dark-orange-100));
    --arc-color-bg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-bg-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-bg-orange-heavy: light-dark(var(--arc-color-light-orange-800), var(--arc-color-dark-orange-800));
    --arc-color-bg-mint-muted: light-dark(var(--arc-color-light-mint-50), var(--arc-color-dark-mint-50));
    --arc-color-bg-mint-subtle: light-dark(var(--arc-color-light-mint-100), var(--arc-color-dark-mint-100));
    --arc-color-bg-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-bg-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-bg-mint-heavy: light-dark(var(--arc-color-light-mint-800), var(--arc-color-dark-mint-800));
    --arc-color-bg-maroon-muted: light-dark(var(--arc-color-light-maroon-50), var(--arc-color-dark-maroon-50));
    --arc-color-bg-maroon-subtle: light-dark(var(--arc-color-light-maroon-100), var(--arc-color-dark-maroon-100));
    --arc-color-bg-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-bg-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-700));
    --arc-color-bg-maroon-heavy: light-dark(var(--arc-color-light-maroon-800), var(--arc-color-dark-maroon-800));
    --arc-color-bg-blue-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-blue-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-blue-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-purple-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-purple-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-purple-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-green-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-green-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-green-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-yellow-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-yellow-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-yellow-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-red-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-red-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-red-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-fg-primary: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-secondary: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-700));
    --arc-color-fg-on-hover-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-disabled: light-dark(var(--arc-color-alpha-black-40), var(--arc-color-alpha-white-40));
    --arc-color-fg-on-selected-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-mid: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-800));
    --arc-color-fg-on-theme-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-theme-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-mid: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono-inverse: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-success-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-warning-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-warning-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-critical-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-info-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-brand-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-orange-subtle: light-dark(var(--arc-color-light-orange-300), var(--arc-color-dark-orange-400));
    --arc-color-fg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-600));
    --arc-color-fg-orange-stark: light-dark(var(--arc-color-light-orange-700), var(--arc-color-dark-orange-800));
    --arc-color-fg-mint-subtle: light-dark(var(--arc-color-light-mint-300), var(--arc-color-dark-mint-400));
    --arc-color-fg-mint-mid: light-dark(var(--arc-color-light-mint-500), var(--arc-color-dark-mint-600));
    --arc-color-fg-mint-stark: light-dark(var(--arc-color-light-mint-700), var(--arc-color-dark-mint-800));
    --arc-color-fg-maroon-subtle: light-dark(var(--arc-color-light-maroon-300), var(--arc-color-dark-maroon-400));
    --arc-color-fg-maroon-mid: light-dark(var(--arc-color-light-maroon-500), var(--arc-color-dark-maroon-600));
    --arc-color-fg-maroon-stark: light-dark(var(--arc-color-light-maroon-700), var(--arc-color-dark-maroon-800));
    --arc-color-fg-neutral-subtle: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-fg-neutral-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-fg-neutral-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-800));
    --arc-color-fg-blue-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-purple-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-green-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-yellow-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-yellow-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-red-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-theme-muted: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-10));
    --arc-color-fg-theme-subtle: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-white-25));
    --arc-color-fg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-fg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-fg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-brand-heavy: light-dark(var(--arc-color-light-blue-700), var(--arc-color-dark-blue-900));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-20));
    --arc-color-border-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-border-on-stark: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-border-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-selected: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-focus: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-success-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-warning-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-critical-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-info-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-brand-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-border-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-orange-subtle: light-dark(var(--arc-color-light-orange-200), var(--arc-color-dark-orange-200));
    --arc-color-border-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-border-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-border-mint-subtle: light-dark(var(--arc-color-light-mint-200), var(--arc-color-dark-mint-200));
    --arc-color-border-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-border-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-border-maroon-subtle: light-dark(var(--arc-color-light-maroon-200), var(--arc-color-dark-maroon-200));
    --arc-color-border-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-border-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-600));
    --arc-color-border-blue-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-border-purple-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-green-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-yellow-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-red-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-border-hover: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-alpha-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-alpha-subtle: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-alpha-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-alpha-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-60));
    --arc-color-alpha-heavy: light-dark(var(--arc-color-alpha-black-60), var(--arc-color-alpha-white-70));
  }
}
/*
  A NOTE ON USING ARC TOKENS (CSS VARIABLES) --------------------------\u2022

  Tokens with \`--arc-internal-\` prefixes are internal only
    - NOT FOR CONSUMER USE
    - These are System/Internal things and are not intended to be
      access or modified by consumers of the design system.
    - Please reach out to #design-system in Slack for guidance or help,
      or to request something new.


  OVERRIDES, BE CAUTIOUS \u2022 These are available for acute adjustments,
                           but not needed in most cases.
  ---------------------------------------------------------------------\u2022
  --arc-font-size-base          \u2022 Override if your app's \`rem\` size
                                  isn't effectively 16px. For instance,
                                  set to 1 if your \`rem\` is 10px.

  --arc-font-variation-settings \u2022 Research \`font-variation-settings\`
                                  before using this token.

  --arc-font-size-mono          \u2022 Controls size of monospace fonts.
  --arc-line-height-title       \u2022 Various text adjustment overrides...
  --arc-line-height-heading
  --arc-line-height-subheading
  --arc-line-height-body
  --arc-line-height-mono
  --arc-letter-spacing-title
  --arc-letter-spacing-heading
  ---------------------------------------------------------------------\u2022
*/
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-font-size: var(--arc-font-size-base, 0.625);
    --arc-internal-font-body: Inter, system-ui, sans-serif;
    --arc-internal-font-expressive: "GT Walsheim", system-ui, sans-serif;
    --arc-internal-font-mono: "Roboto Mono", monospace;
    --arc-internal-font-size-mono: 0.875em;
    --arc-internal-letter-spacing: -0.015em;
    --arc-internal-font-vs: "opsz" 24;
    --arc-font-family-expressive: var(--arc-internal-font-expressive);
    --arc-font-family-title: var(--arc-internal-font-expressive);
    --arc-font-family-heading: var(--arc-internal-font-expressive);
    --arc-font-family-subheading: var(--arc-internal-font-body);
    --arc-font-family-body: var(--arc-internal-font-body);
    --arc-font-family-mono: var(--arc-internal-font-mono);
    --arc-line-height-tight: 1.2;
    --arc-line-height-standard: 1.4;
    --arc-line-height-loose: 1.6;
    --arc-line-height-title: var(--arc-line-height-tight);
    --arc-line-height-heading: var(--arc-line-height-tight);
    --arc-line-height-subheading: var(--arc-line-height-tight);
    --arc-line-height-body: var(--arc-line-height-standard);
    --arc-line-height-mono: var(--arc-line-height-standard);
    --arc-letter-spacing-heading: var(--arc-internal-letter-spacing);
    --arc-letter-spacing-title: var(--arc-internal-letter-spacing);
    --arc-font-weight-400: 400;
    --arc-font-weight-500: 500;
    --arc-font-weight-600: 600;
    --arc-font-weight-title: var(--arc-font-weight-600);
    --arc-font-weight-heading: var(--arc-font-weight-600);
    --arc-font-weight-subheading: var(--arc-font-weight-600);
    --arc-font-weight-bold: var(--arc-font-weight-600);
    --arc-font-weight-body: var(--arc-font-weight-400);
    --arc-font-weight-normal: var(--arc-font-weight-400);
    --arc-font-size-08: calc(0.8rem * var(--arc-internal-font-size));
    --arc-font-size-10: calc(1rem * var(--arc-internal-font-size));
    --arc-font-size-12: calc(1.2rem * var(--arc-internal-font-size));
    --arc-font-size-14: calc(1.4rem * var(--arc-internal-font-size));
    --arc-font-size-16: calc(1.6rem * var(--arc-internal-font-size));
    --arc-font-size-18: calc(1.8rem * var(--arc-internal-font-size));
    --arc-font-size-20: calc(2rem * var(--arc-internal-font-size));
    --arc-font-size-24: calc(2.4rem * var(--arc-internal-font-size));
    --arc-font-size-28: calc(2.8rem * var(--arc-internal-font-size));
    --arc-font-size-32: calc(3.2rem * var(--arc-internal-font-size));
    --arc-font-size-40: calc(4rem * var(--arc-internal-font-size));
    --arc-font-size-title-lg: var(--arc-font-size-40);
    --arc-font-size-title-md: var(--arc-font-size-32);
    --arc-font-size-title-sm: var(--arc-font-size-28);
    --arc-font-size-heading-lg: var(--arc-font-size-24);
    --arc-font-size-heading-md: var(--arc-font-size-20);
    --arc-font-size-heading-sm: var(--arc-font-size-18);
    --arc-font-size-subheading-lg: var(--arc-font-size-16);
    --arc-font-size-subheading-md: var(--arc-font-size-14);
    --arc-font-size-subheading-sm: var(--arc-font-size-12);
    --arc-font-size-body-lg: var(--arc-font-size-16);
    --arc-font-size-body-md: var(--arc-font-size-14);
    --arc-font-size-body-sm: var(--arc-font-size-12);
    --arc-font-size-body-xs: var(--arc-font-size-10);
    --arc-font-size-mono-lg: var(--arc-font-size-14);
    --arc-font-size-mono-md: var(--arc-font-size-12);
    --arc-font-size-mono-sm: var(--arc-font-size-10);
  }
  [data-arc-theme~=font-family] {
    font-family: var(--arc-font-family-body);
    font-size: var(--arc-font-size-16);
    font-weight: var(--arc-font-weight-body);
    line-height: var(--arc-line-height-body, var(--arc-line-height-standard));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1, h2, h3) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  [data-arc-theme~=font-family] :where(h4, h5, h6) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1) {
    font-size: var(--arc-font-size-24);
  }
  [data-arc-theme~=font-family] :where(h2) {
    font-size: var(--arc-font-size-20);
  }
  [data-arc-theme~=font-family] :where(h3) {
    font-size: var(--arc-font-size-18);
  }
  [data-arc-theme~=font-family] :where(h4) {
    font-size: var(--arc-font-size-16);
  }
  [data-arc-theme~=font-family] :where(h5) {
    font-size: var(--arc-font-size-14);
  }
  [data-arc-theme~=font-family] :where(h6) {
    font-size: var(--arc-font-size-12);
  }
  [data-arc-theme~=font-family] :where(b, strong) {
    font-weight: var(--arc-font-weight-600);
  }
  [data-arc-theme~=font-family] :where(i, em) {
    font-style: italic;
  }
  [data-arc-theme~=font-family] :where(u) {
    text-decoration: underline;
  }
  [data-arc-theme~=font-family] :where(pre, code) {
    font-family: var(--arc-font-family-mono);
    font-size: var(--arc-font-size-mono, var(--arc-internal-font-size-mono));
  }
}
@layer arc-utils {
  .arc-font-title-lg {
    font-size: var(--arc-font-size-40);
  }
  .arc-font-title-md {
    font-size: var(--arc-font-size-32);
  }
  .arc-font-title-sm {
    font-size: var(--arc-font-size-28);
  }
  :is(.arc-font-title, .arc-font-title-lg, .arc-font-title-md, .arc-font-title-sm) {
    font-family: var(--arc-font-family-title);
    font-weight: var(--arc-font-weight-title);
    letter-spacing: var(--arc-letter-spacing-title);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-title));
  }
  .arc-font-heading-lg {
    font-size: var(--arc-font-size-24);
  }
  .arc-font-heading-md {
    font-size: var(--arc-font-size-20);
  }
  .arc-font-heading-sm {
    font-size: var(--arc-font-size-18);
  }
  :is(.arc-font-heading, .arc-font-heading-lg, .arc-font-heading-md, .arc-font-heading-sm) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  .arc-font-subheading-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-subheading-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-subheading-sm {
    font-size: var(--arc-font-size-12);
  }
  :is(.arc-font-subheading, .arc-font-subheading-lg, .arc-font-subheading-md, .arc-font-subheading-sm) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-body-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-body-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-body-sm {
    font-size: var(--arc-font-size-12);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body-xs) {
    font-size: var(--arc-font-size-10);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body, .arc-font-body-lg, .arc-font-body-md, .arc-font-body-sm) {
    font-family: var(--arc-font-family-body);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-body));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-mono-lg {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-mono-md {
    font-size: var(--arc-font-size-12);
  }
  .arc-font-mono-sm {
    font-size: var(--arc-font-size-10);
  }
  :is(.arc-font-mono, .arc-font-mono-lg, .arc-font-mono-md, .arc-font-mono-sm) {
    font-family: var(--arc-font-family-mono);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-mono));
  }
  .arc-line-height-loose {
    --arc-internal-line-height: var(--arc-line-height-loose);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-standard {
    --arc-internal-line-height: var(--arc-line-height-standard);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-tight {
    --arc-internal-line-height: var(--arc-line-height-tight);
    line-height: var(--arc-internal-line-height);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-space: 0.8rem * var(--arc-internal-font-size);
    --arc-internal-size: 0.8rem * var(--arc-internal-font-size);
    --arc-space-0: 0;
    --arc-space-0-25: calc(0.25 * var(--arc-internal-space));
    --arc-space-0-5: calc(0.5 * var(--arc-internal-space));
    --arc-space-0-75: calc(0.75 * var(--arc-internal-space));
    --arc-space-1: calc(var(--arc-internal-space));
    --arc-space-1-25: calc(1.25 * var(--arc-internal-space));
    --arc-space-1-5: calc(1.5 * var(--arc-internal-space));
    --arc-space-2: calc(2 * var(--arc-internal-space));
    --arc-space-2-5: calc(2.5 * var(--arc-internal-space));
    --arc-space-3: calc(3 * var(--arc-internal-space));
    --arc-space-4: calc(4 * var(--arc-internal-space));
    --arc-space-5: calc(5 * var(--arc-internal-space));
    --arc-space-6: calc(6 * var(--arc-internal-space));
    --arc-space-7: calc(7 * var(--arc-internal-space));
    --arc-space-8: calc(8 * var(--arc-internal-space));
    --arc-space-9: calc(9 * var(--arc-internal-space));
    --arc-space-10: calc(10 * var(--arc-internal-space));
    --arc-space-11: calc(11 * var(--arc-internal-space));
    --arc-space-12: calc(12 * var(--arc-internal-space));
    --arc-size-0: 0;
    --arc-size-0-25: calc(0.25 * var(--arc-internal-size));
    --arc-size-0-5: calc(0.5 * var(--arc-internal-size));
    --arc-size-0-75: calc(0.75 * var(--arc-internal-size));
    --arc-size-1: calc(var(--arc-internal-size));
    --arc-size-1-25: calc(1.25 * var(--arc-internal-size));
    --arc-size-1-5: calc(1.5 * var(--arc-internal-size));
    --arc-size-1-75: calc(1.75 * var(--arc-internal-size));
    --arc-size-2: calc(2 * var(--arc-internal-size));
    --arc-size-2-25: calc(2.25 * var(--arc-internal-size));
    --arc-size-2-5: calc(2.5 * var(--arc-internal-size));
    --arc-size-2-75: calc(2.75 * var(--arc-internal-size));
    --arc-size-3: calc(3 * var(--arc-internal-size));
    --arc-size-3-25: calc(3.25 * var(--arc-internal-size));
    --arc-size-3-5: calc(3.5 * var(--arc-internal-size));
    --arc-size-3-75: calc(3.75 * var(--arc-internal-size));
    --arc-size-4: calc(4 * var(--arc-internal-size));
    --arc-size-4-25: calc(4.25 * var(--arc-internal-size));
    --arc-size-4-5: calc(4.5 * var(--arc-internal-size));
    --arc-size-4-75: calc(4.75 * var(--arc-internal-size));
    --arc-size-5: calc(5 * var(--arc-internal-size));
    --arc-size-6: calc(6 * var(--arc-internal-size));
    --arc-size-7: calc(7 * var(--arc-internal-size));
    --arc-size-8: calc(8 * var(--arc-internal-size));
    --arc-size-9: calc(9 * var(--arc-internal-size));
    --arc-size-10: calc(10 * var(--arc-internal-size));
    --arc-size-11: calc(11 * var(--arc-internal-size));
    --arc-size-12: calc(12 * var(--arc-internal-size));
    --arc-size-13: calc(13 * var(--arc-internal-size));
    --arc-size-14: calc(14 * var(--arc-internal-size));
    --arc-size-15: calc(15 * var(--arc-internal-size));
    --arc-size-16: calc(16 * var(--arc-internal-size));
    --arc-size-17: calc(17 * var(--arc-internal-size));
    --arc-size-18: calc(18 * var(--arc-internal-size));
    --arc-size-19: calc(19 * var(--arc-internal-size));
    --arc-size-20: calc(20 * var(--arc-internal-size));
    --arc\u2022space\u202216m: min(-16px, -1rem);
    --arc\u2022space\u202214m: min(-14px, -0.875rem);
    --arc\u2022space\u202212m: min(-12px, -0.75rem);
    --arc\u2022space\u202210m: min(-10px, -0.625rem);
    --arc\u2022space\u20228m: min(-8px, -0.5rem);
    --arc\u2022space\u20226m: min(-6px, -0.375rem);
    --arc\u2022space\u20225m: min(-5px, -0.3125rem);
    --arc\u2022space\u20224m: min(-4px, -0.25rem);
    --arc\u2022space\u20223m: min(-3px, -0.1875rem);
    --arc\u2022space\u20222m: min(-2px, -0.125rem);
    --arc\u2022space\u20221m: min(-1px, -0.0625rem);
    --arc\u2022space\u20220: 0px;
    --arc\u2022space\u20221: max(1px, 0.0625rem);
    --arc\u2022space\u20222: max(2px, 0.125rem);
    --arc\u2022space\u20223: max(3px, 0.1875rem);
    --arc\u2022space\u20224: max(4px, 0.25rem);
    --arc\u2022space\u20225: max(5px, 0.3125rem);
    --arc\u2022space\u20226: max(6px, 0.375rem);
    --arc\u2022space\u20228: max(8px, 0.5rem);
    --arc\u2022space\u202210: max(10px, 0.625rem);
    --arc\u2022space\u202212: max(12px, 0.75rem);
    --arc\u2022space\u202214: max(14px, 0.875rem);
    --arc\u2022space\u202216: max(16px, 1rem);
    --arc\u2022space\u202218: max(18px, 1.125rem);
    --arc\u2022space\u202220: max(20px, 1.25rem);
    --arc\u2022space\u202224: max(24px, 1.5rem);
    --arc\u2022space\u202232: max(32px, 2rem);
    --arc\u2022space\u202240: max(40px, 2.5rem);
    --arc\u2022space\u202248: max(48px, 3rem);
    --arc\u2022space\u202256: max(56px, 3.5rem);
    --arc\u2022space\u202264: max(64px, 4rem);
    --arc\u2022space\u202272: max(72px, 4.5rem);
    --arc\u2022space\u202280: max(80px, 5rem);
    --arc\u2022space\u202288: max(88px, 5.5rem);
    --arc\u2022space\u202296: max(96px, 6rem);
    --arc\u2022size\u202216m: min(-16px, -1rem);
    --arc\u2022size\u202212m: min(-12px, -0.75rem);
    --arc\u2022size\u202210m: min(-10px, -0.625rem);
    --arc\u2022size\u20228m: min(-8px, -0.5rem);
    --arc\u2022size\u20226m: min(-6px, -0.375rem);
    --arc\u2022size\u20224m: min(-4px, -0.25rem);
    --arc\u2022size\u20223m: min(-3px, -0.1875rem);
    --arc\u2022size\u20222m: min(-2px, -0.125rem);
    --arc\u2022size\u20221m: min(-1px, -0.0625rem);
    --arc\u2022size\u20220: 0px;
    --arc\u2022size\u20221: max(1px, 0.0625rem);
    --arc\u2022size\u20222: max(2px, 0.125rem);
    --arc\u2022size\u20223: max(3px, 0.1875rem);
    --arc\u2022size\u20224: max(4px, 0.25rem);
    --arc\u2022size\u20225: max(5px, 0.3125rem);
    --arc\u2022size\u20226: max(6px, 0.375rem);
    --arc\u2022size\u20228: max(8px, 0.5rem);
    --arc\u2022size\u202210: max(10px, 0.625rem);
    --arc\u2022size\u202212: max(12px, 0.75rem);
    --arc\u2022size\u202214: max(14px, 0.875rem);
    --arc\u2022size\u202215: max(15px, 0.9375rem);
    --arc\u2022size\u202216: max(16px, 1rem);
    --arc\u2022size\u202218: max(18px, 1.125rem);
    --arc\u2022size\u202220: max(20px, 1.25rem);
    --arc\u2022size\u202222: max(22px, 1.375rem);
    --arc\u2022size\u202224: max(24px, 1.5rem);
    --arc\u2022size\u202225: max(25px, 1.5625rem);
    --arc\u2022size\u202226: max(26px, 1.625rem);
    --arc\u2022size\u202228: max(28px, 1.75rem);
    --arc\u2022size\u202230: max(30px, 1.875rem);
    --arc\u2022size\u202232: max(32px, 2rem);
    --arc\u2022size\u202234: max(34px, 2.125rem);
    --arc\u2022size\u202236: max(36px, 2.25rem);
    --arc\u2022size\u202238: max(38px, 2.375rem);
    --arc\u2022size\u202240: max(40px, 2.5rem);
    --arc\u2022size\u202242: max(42px, 2.625rem);
    --arc\u2022size\u202244: max(44px, 2.75rem);
    --arc\u2022size\u202246: max(46px, 2.875rem);
    --arc\u2022size\u202248: max(48px, 3rem);
    --arc\u2022size\u202250: max(50px, 3.125rem);
    --arc\u2022size\u202252: max(52px, 3.25rem);
    --arc\u2022size\u202254: max(54px, 3.375rem);
    --arc\u2022size\u202256: max(56px, 3.5rem);
    --arc\u2022size\u202258: max(58px, 3.625rem);
    --arc\u2022size\u202260: max(60px, 3.75rem);
    --arc\u2022size\u202264: max(64px, 4rem);
    --arc\u2022size\u202268: max(68px, 4.25rem);
    --arc\u2022size\u202272: max(72px, 4.5rem);
    --arc\u2022size\u202276: max(76px, 4.75rem);
    --arc\u2022size\u202280: max(80px, 5rem);
    --arc\u2022size\u202288: max(88px, 5.5rem);
    --arc\u2022size\u202296: max(96px, 6rem);
    --arc\u2022size\u2022104: max(104px, 6.5rem);
    --arc\u2022size\u2022112: max(112px, 7rem);
    --arc\u2022size\u2022120: max(120px, 7.5rem);
    --arc\u2022size\u2022128: max(128px, 8rem);
    --arc\u2022size\u2022136: max(136px, 8.5rem);
    --arc\u2022size\u2022144: max(144px, 9rem);
    --arc\u2022size\u2022152: max(152px, 9.5rem);
    --arc\u2022size\u2022160: max(160px, 10rem);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-alpha-0: 0%;
    --arc-alpha-3: 3%;
    --arc-alpha-5: 5%;
    --arc-alpha-10: 10%;
    --arc-alpha-20: 20%;
    --arc-alpha-25: 25%;
    --arc-alpha-30: 30%;
    --arc-alpha-40: 40%;
    --arc-alpha-50: 50%;
    --arc-alpha-60: 60%;
    --arc-alpha-70: 70%;
    --arc-alpha-80: 80%;
    --arc-alpha-90: 90%;
    --arc-alpha-95: 95%;
    --arc-alpha-100: 100%;
    --arc-border-radius-none: 0px;
    --arc-border-radius-sm: max(2px, 0.125em);
    --arc-border-radius-md: max(4px, 0.25em);
    --arc-border-radius-lg: max(8px, 0.5em);
    --arc-border-radius-xl: max(16px, 1em);
    --arc-border-radius-circle: 50%;
    --arc-border-radius-pill: 100vh;
    --arc-border-width-none: 0px;
    --arc-border-width-sm: max(1px, 0.0625em);
    --arc-border-width-md: max(2px, 0.125em);
    --arc-border-width-lg: max(3px, 0.1875em);
    --arc-border-width-xl: max(4px, 0.25em);
    /* dynamic shadow tokens */
    --arc-shadow-none: none;
    --arc-shadow-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-shadow-sm);
    --arc-shadow-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-shadow-md);
    --arc-shadow-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-shadow-lg);
    --arc-shadow-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-shadow-xl);
    /* static light shadow tokens (primitive alpha colors) */
    --arc-shadow-light-none: none;
    --arc-shadow-light-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-25);
    --arc-shadow-light-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-15);
    /* static dark shadow tokens (primitive alpha colors) */
    --arc-shadow-dark-none: none;
    --arc-shadow-dark-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-60);
    --arc-shadow-dark-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-50);
    --arc-shadow-dark-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-40);
    --arc-shadow-dark-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-40);
    /* surface shadow tokens */
    --arc-surface-raised-shadow: var(--arc-shadow-md);
    --arc-surface-floating-shadow: var(--arc-shadow-lg);
  }
}
@layer arc-utils {
  /* Gradients -----------------------------------------------------\u2022 */
  [arc-gradient] {
    background-clip: text;
    color: transparent;
    /** @note: line-height mitigation strategy for gradient icons
     * stops icon geometry clipping issues
     */
  }
  [arc-gradient][arc-icon] {
    --arc-icon-height: 1.5lh;
    --arc-icon-max-height: none;
    --arc-icon-margin-block: -0.5lh;
  }
  :is([arc-gradient], [arc-gradient=ai], [arc-gradient=ai-200]) {
    background-image: var(--arc-gradient-ai-200);
  }
  [arc-gradient=ai-50] {
    background-image: var(--arc-gradient-ai-50);
  }
  [arc-gradient=ai-100] {
    background-image: var(--arc-gradient-ai-100);
  }
  [arc-gradient=ai-300] {
    background-image: var(--arc-gradient-ai-300);
  }
  [arc-gradient=ai-400] {
    background-image: var(--arc-gradient-ai-400);
  }
  [arc-gradient=ai-500] {
    background-image: var(--arc-gradient-ai-500);
  }
  [arc-gradient=ai-600] {
    background-image: var(--arc-gradient-ai-600);
  }
  /* Shadows -------------------------------------------------------\u2022 */
  [arc-shadow=sm] {
    box-shadow: var(--arc-shadow-sm);
  }
  [arc-shadow=md] {
    box-shadow: var(--arc-shadow-md);
  }
  [arc-shadow=lg] {
    box-shadow: var(--arc-shadow-lg);
  }
  [arc-shadow=xl] {
    box-shadow: var(--arc-shadow-xl);
  }
  /* Light Shadows -------------------------------------------------\u2022 */
  [arc-shadow=light-sm] {
    box-shadow: var(--arc-shadow-light-sm);
  }
  [arc-shadow=light-md] {
    box-shadow: var(--arc-shadow-light-md);
  }
  [arc-shadow=light-lg] {
    box-shadow: var(--arc-shadow-light-lg);
  }
  [arc-shadow=light-xl] {
    box-shadow: var(--arc-shadow-light-xl);
  }
  /* Dark Shadows --------------------------------------------------\u2022 */
  [arc-shadow=dark-sm] {
    box-shadow: var(--arc-shadow-dark-sm);
  }
  [arc-shadow=dark-md] {
    box-shadow: var(--arc-shadow-dark-md);
  }
  [arc-shadow=dark-lg] {
    box-shadow: var(--arc-shadow-dark-lg);
  }
  [arc-shadow=dark-xl] {
    box-shadow: var(--arc-shadow-dark-xl);
  }
  /* Surfaces ------------------------------------------------------\u2022 */
  [arc-surface=primary] {
    color: var(--arc-surface-primary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-primary-background, var(--arc-color-bg-primary));
  }
  [arc-surface=secondary] {
    color: var(--arc-surface-secondary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-secondary-background, var(--arc-color-bg-secondary));
  }
  [arc-surface=inset] {
    color: var(--arc-surface-inset-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-inset-background, var(--arc-color-bg-tertiary));
  }
  [arc-surface=raised] {
    color: var(--arc-surface-raised-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-raised-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-raised-box-shadow, var(--arc-surface-raised-shadow));
    z-index: var(--arc-surface-raised-z-index, 1);
  }
  [arc-surface=floating] {
    color: var(--arc-surface-floating-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-floating-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-floating-box-shadow, var(--arc-surface-floating-shadow));
    z-index: var(--arc-surface-floating-z-index, 2);
  }
  /* Scheme (proximity via inheritance) ----------------------------\u2022 */
  :root:not([arc-scheme]) {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=light] {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: light;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: dark;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  [arc-scheme=inverse] [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse\u2022nested);
  }
  :root:not([arc-scheme]),
  [arc-scheme] {
    color-scheme: var(--arc\u2022color\u2022scheme, light);
  }
}
:root,
::backdrop {
  /* @deprecated background variables - please update all instances */
  --arc-color-alpha-white-03: var(--arc-color-alpha-white-3);
  --arc-color-alpha-white-05: var(--arc-color-alpha-white-5);
  --arc-color-alpha-black-03: var(--arc-color-alpha-black-3);
  --arc-color-alpha-black-05: var(--arc-color-alpha-black-5);
  --arc-color-neutral-000: var(--arc-color-light-neutral-0);
  --arc-color-neutral-050: var(--arc-color-light-neutral-50);
  --arc-color-neutral-100: var(--arc-color-light-neutral-100);
  --arc-color-neutral-200: var(--arc-color-light-neutral-200);
  --arc-color-neutral-300: var(--arc-color-light-neutral-300);
  --arc-color-neutral-400: var(--arc-color-light-neutral-400);
  --arc-color-neutral-500: var(--arc-color-light-neutral-500);
  --arc-color-neutral-600: var(--arc-color-light-neutral-600);
  --arc-color-neutral-700: var(--arc-color-light-neutral-700);
  --arc-color-neutral-800: var(--arc-color-light-neutral-800);
  --arc-color-neutral-900: var(--arc-color-light-neutral-900);
  --arc-color-blue-050: var(--arc-color-light-blue-50);
  --arc-color-blue-100: var(--arc-color-light-blue-100);
  --arc-color-blue-200: var(--arc-color-light-blue-200);
  --arc-color-blue-300: var(--arc-color-light-blue-300);
  --arc-color-blue-400: var(--arc-color-light-blue-400);
  --arc-color-blue-500: var(--arc-color-light-blue-500);
  --arc-color-blue-600: var(--arc-color-light-blue-600);
  --arc-color-blue-700: var(--arc-color-light-blue-700);
  --arc-color-blue-800: var(--arc-color-light-blue-800);
  --arc-color-blue-900: var(--arc-color-light-blue-900);
  --arc-color-purple-050: var(--arc-color-light-purple-50);
  --arc-color-purple-100: var(--arc-color-light-purple-100);
  --arc-color-purple-200: var(--arc-color-light-purple-200);
  --arc-color-purple-300: var(--arc-color-light-purple-300);
  --arc-color-purple-400: var(--arc-color-light-purple-400);
  --arc-color-purple-500: var(--arc-color-light-purple-500);
  --arc-color-purple-600: var(--arc-color-light-purple-600);
  --arc-color-purple-700: var(--arc-color-light-purple-700);
  --arc-color-purple-800: var(--arc-color-light-purple-800);
  --arc-color-purple-900: var(--arc-color-light-purple-900);
  --arc-color-maroon-050: var(--arc-color-light-maroon-50);
  --arc-color-maroon-100: var(--arc-color-light-maroon-100);
  --arc-color-maroon-200: var(--arc-color-light-maroon-200);
  --arc-color-maroon-300: var(--arc-color-light-maroon-300);
  --arc-color-maroon-400: var(--arc-color-light-maroon-400);
  --arc-color-maroon-500: var(--arc-color-light-maroon-500);
  --arc-color-maroon-600: var(--arc-color-light-maroon-600);
  --arc-color-maroon-700: var(--arc-color-light-maroon-700);
  --arc-color-maroon-800: var(--arc-color-light-maroon-800);
  --arc-color-maroon-900: var(--arc-color-light-maroon-900);
  --arc-color-red-050: var(--arc-color-light-red-50);
  --arc-color-red-100: var(--arc-color-light-red-100);
  --arc-color-red-200: var(--arc-color-light-red-200);
  --arc-color-red-300: var(--arc-color-light-red-300);
  --arc-color-red-400: var(--arc-color-light-red-400);
  --arc-color-red-500: var(--arc-color-light-red-500);
  --arc-color-red-600: var(--arc-color-light-red-600);
  --arc-color-red-700: var(--arc-color-light-red-700);
  --arc-color-red-800: var(--arc-color-light-red-800);
  --arc-color-red-900: var(--arc-color-light-red-900);
  --arc-color-orange-050: var(--arc-color-light-orange-50);
  --arc-color-orange-100: var(--arc-color-light-orange-100);
  --arc-color-orange-200: var(--arc-color-light-orange-200);
  --arc-color-orange-300: var(--arc-color-light-orange-300);
  --arc-color-orange-400: var(--arc-color-light-orange-400);
  --arc-color-orange-500: var(--arc-color-light-orange-500);
  --arc-color-orange-600: var(--arc-color-light-orange-600);
  --arc-color-orange-700: var(--arc-color-light-orange-700);
  --arc-color-orange-800: var(--arc-color-light-orange-800);
  --arc-color-orange-900: var(--arc-color-light-orange-900);
  --arc-color-yellow-050: var(--arc-color-light-yellow-50);
  --arc-color-yellow-100: var(--arc-color-light-yellow-100);
  --arc-color-yellow-200: var(--arc-color-light-yellow-200);
  --arc-color-yellow-300: var(--arc-color-light-yellow-300);
  --arc-color-yellow-400: var(--arc-color-light-yellow-400);
  --arc-color-yellow-500: var(--arc-color-light-yellow-500);
  --arc-color-yellow-600: var(--arc-color-light-yellow-600);
  --arc-color-yellow-700: var(--arc-color-light-yellow-700);
  --arc-color-yellow-800: var(--arc-color-light-yellow-800);
  --arc-color-yellow-900: var(--arc-color-light-yellow-900);
  --arc-color-green-050: var(--arc-color-light-green-50);
  --arc-color-green-100: var(--arc-color-light-green-100);
  --arc-color-green-200: var(--arc-color-light-green-200);
  --arc-color-green-300: var(--arc-color-light-green-300);
  --arc-color-green-400: var(--arc-color-light-green-400);
  --arc-color-green-500: var(--arc-color-light-green-500);
  --arc-color-green-600: var(--arc-color-light-green-600);
  --arc-color-green-700: var(--arc-color-light-green-700);
  --arc-color-green-800: var(--arc-color-light-green-800);
  --arc-color-green-900: var(--arc-color-light-green-900);
  --arc-color-mint-050: var(--arc-color-light-mint-50);
  --arc-color-mint-100: var(--arc-color-light-mint-100);
  --arc-color-mint-200: var(--arc-color-light-mint-200);
  --arc-color-mint-300: var(--arc-color-light-mint-300);
  --arc-color-mint-400: var(--arc-color-light-mint-400);
  --arc-color-mint-500: var(--arc-color-light-mint-500);
  --arc-color-mint-600: var(--arc-color-light-mint-600);
  --arc-color-mint-700: var(--arc-color-light-mint-700);
  --arc-color-mint-800: var(--arc-color-light-mint-800);
  --arc-color-mint-900: var(--arc-color-light-mint-900);
  --arc-gradient-ai-050: var(--arc-gradient-ai-50);
  --arc-color-ai-purple-050: #fbf2ff;
  --arc-color-ai-purple-100: #efccff;
  --arc-color-ai-purple-200: #9c15ff;
  --arc-color-ai-purple-300: #680278;
  --arc-color-ai-purple-400: #5d3668;
  --arc-color-ai-purple-500: #37003f;
  --arc-color-ai-purple-600: #27002c;
  --arc-color-ai-blue-050: #f4fbff;
  --arc-color-ai-blue-100: #d2f1fe;
  --arc-color-ai-blue-200: #1eb4fb;
  --arc-color-ai-blue-300: #0179d0;
  --arc-color-ai-blue-400: #36648c;
  --arc-color-ai-blue-500: #004273;
  --arc-color-ai-blue-600: #012a48;
  /* @deprecated background variables - please update all instances */
  --arc-color-background-primary: var(--arc-color-bg-primary);
  --arc-color-background-primary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-primary-selected-subtle: var(--arc-color-bg-selected-subtle);
  --arc-color-background-primary-selected: var(--arc-color-bg-selected-default);
  --arc-color-background-primary-selected-stark: var(--arc-color-bg-selected-stark);
  --arc-color-background-secondary: var(--arc-color-bg-secondary);
  --arc-color-background-secondary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-tertiary: var(--arc-color-bg-tertiary);
  --arc-color-background-inverse: var(--arc-color-light-neutral-1000);
  --arc-color-overlay-dark: var(--arc-color-overlay-stark);
  --arc-color-overlay-light: var(--arc-color-overlay-subtle);
  /* @deprecated foreground variables - please update all instances */
  --arc-color-text-primary: var(--arc-color-fg-primary);
  --arc-color-icon-primary: var(--arc-color-fg-primary);
  --arc-color-text-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-icon-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-text-disabled: var(--arc-color-fg-disabled);
  --arc-color-icon-disabled: var(--arc-color-fg-disabled);
  --arc-color-text-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-icon-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-text-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-icon-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-text-info: var(--arc-color-fg-info-stark);
  --arc-color-icon-info: var(--arc-color-fg-info-stark);
  --arc-color-text-brand: var(--arc-color-fg-brand-stark);
  --arc-color-icon-brand: var(--arc-color-fg-brand-mid);
  --arc-color-text-success: var(--arc-color-fg-success-stark);
  --arc-color-icon-success: var(--arc-color-fg-success-stark);
  --arc-color-text-warning: var(--arc-color-fg-warning-stark);
  --arc-color-icon-warning: var(--arc-color-fg-warning-stark);
  --arc-color-text-critical: var(--arc-color-fg-critical-mid);
  --arc-color-icon-critical: var(--arc-color-fg-critical-mid);
  /* @deprecated border variable - please update all instances */
  --arc-color-border-orange: var(--arc-color-border-orange-mid);
  --arc-color-border-mint: var(--arc-color-border-mint-mid);
  --arc-color-border-maroon: var(--arc-color-border-maroon-mid);
  --arc-color-border-standard: var(--arc-color-border-mid);
  --arc-color-border-full: var(--arc-color-border-heavy);
  --arc-color-border-focus-inverse: var(--arc-color-light-blue-300);
  --arc-border-width-standard: var(--arc-border-width-sm);
  /* @deprecated color variables - please update all instances */
  --arc-color-info-light: var(--arc-color-bg-info-muted);
  --arc-color-info-medium: var(--arc-color-bg-info-subtle);
  --arc-color-info-root: var(--arc-color-bg-info-mid);
  --arc-color-info-dark: var(--arc-color-bg-info-stark);
  --arc-color-info-heavy: var(--arc-color-bg-info-heavy);
  --arc-color-border-info: var(--arc-color-border-info-mid);
  --arc-color-brand-light: var(--arc-color-bg-brand-muted);
  --arc-color-brand-medium: var(--arc-color-bg-brand-subtle);
  --arc-color-brand-root: var(--arc-color-bg-brand-mid);
  --arc-color-brand-dark: var(--arc-color-bg-brand-stark);
  --arc-color-brand-heavy: var(--arc-color-bg-brand-heavy);
  --arc-color-border-brand: var(--arc-color-border-brand-mid);
  --arc-color-success-light: var(--arc-color-bg-success-muted);
  --arc-color-success-medium: var(--arc-color-bg-success-subtle);
  --arc-color-success-root: var(--arc-color-bg-success-mid);
  --arc-color-success-dark: var(--arc-color-bg-success-stark);
  --arc-color-success-heavy: var(--arc-color-bg-success-heavy);
  --arc-color-border-success: var(--arc-color-border-success-mid);
  --arc-color-warning-light: var(--arc-color-bg-warning-muted);
  --arc-color-warning-medium: var(--arc-color-bg-warning-subtle);
  --arc-color-warning-root: var(--arc-color-bg-warning-mid);
  --arc-color-warning-dark: var(--arc-color-bg-warning-stark);
  --arc-color-warning-heavy: var(--arc-color-bg-warning-heavy);
  --arc-color-border-warning: var(--arc-color-border-warning-mid);
  --arc-color-critical-light: var(--arc-color-bg-critical-muted);
  --arc-color-critical-medium: var(--arc-color-bg-critical-subtle);
  --arc-color-critical-root: var(--arc-color-bg-critical-mid);
  --arc-color-critical-dark: var(--arc-color-bg-critical-stark);
  --arc-color-critical-heavy: var(--arc-color-bg-critical-heavy);
  --arc-color-border-critical: var(--arc-color-border-critical-mid);
  /** @deprecated - old alpha leading zeros */
  --arc-alpha-03: var(--arc-alpha-3);
  --arc-alpha-05: var(--arc-alpha-5);
}

/*# sourceMappingURL=theme.css.map */
`,Oi={};function Cr(r,e){if(typeof document<"u"&&e?.styleSheet){const a=Oi[r];Oi[r]=e.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(t=>t!==a),e.styleSheet]}}function Bp(r){const e=Object.values(Oi),a=document.adoptedStyleSheets.filter(t=>e.includes(t));if(r.adoptedStyleSheets){const t=a.filter(o=>!r.adoptedStyleSheets.includes(o));r.adoptedStyleSheets=[...r.adoptedStyleSheets,...t]}}function Np(r){if(typeof CSSStyleSheet<"u"){const e=new CSSStyleSheet;e.replaceSync(Op),r.adoptedStyleSheets&&(r.adoptedStyleSheets.includes(e)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,e]))}}const Fp=r=>r?.trim().charAt(0)??void 0,Hp=(r,e)=>{let a=0;const t=Math.min(r.length,50);for(let o=0;o<t;o+=1)a=(a+r.charCodeAt(o))%(e??33);return a},Vp=(r,e,a)=>e?.length?r?.trim()===""?a||e[0]:e[Hp(r,e.length)]||a||e[0]:a,$d=fr(ht,["blue","orange","mint","red","yellow","green","maroon","purple"]),Gp=fr(ht,["neutral","white","black"]),rc=fr(ze,["lg","md","sm","xs"]),Up=[...rc,"profile-sm","profile-md","profile-lg"],Kp=Kn,Wp=So,Xp=rc,qp=rc,Yp=rc,W=d`--arc•input•mask`,b=d`--arc•size`,M=d`--arc•space`,Nr=d`--arc•avatar`,de=d`${Nr}•chars`,Bi=d`

  &[data-size=lg] {
    ${Nr}•font•size: var(${b}•16);
    ${Nr}•size: 2.5em; /* target: 40px @ 100% */
    ${de}•1: var(${b}•16);
    ${de}•2: var(${b}•14);
    ${de}•3: var(${b}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${Nr}•font•size: var(${b}•14);
    ${Nr}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${de}•1: var(${b}•14);
    ${de}•2: var(${b}•12);
    ${de}•3: var(${b}•10);
  }

  &[data-size=sm] {
    ${Nr}•font•size: var(${b}•12);
    ${Nr}•size: 2em; /* target: 24px @ 100% */
    ${de}•1: var(${b}•12);
    ${de}•2: var(${b}•10);
    ${de}•3: var(${b}•8);
  }

  &[data-size=xs] {
    ${Nr}•font•size: var(${b}•10);
    ${Nr}•size: 2em; /* target: 20px @ 100% */
    ${de}•1: var(${b}•10);
    ${de}•2: var(${b}•8);
    ${de}•3: var(${b}•6);
  }

`,Zp=d`

  &[data-size=profile-lg] {
    ${Nr}•font•size: var(${b}•40);
    ${Nr}•size: 4em;
  }

  &[data-size=profile-md] {
    ${Nr}•font•size: var(${b}•32);
    ${Nr}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${Nr}•font•size: var(${b}•28);
    ${Nr}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,yd=d`

  [arc-avatar] {
    ${Nr}•font•size: inherit;
    ${Nr}•size: inherit;
    ${de}•1: inherit;
    ${de}•2: inherit;
    ${de}•3: inherit;
  }

`,yt=d`${Nr}•fg`,We=d`${Nr}•bg`,Jp=d`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${yt}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${We}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${We}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${We}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${We}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${We}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${We}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${We}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${We}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${yt}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${We}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${yt}: var(--arc-color-fg-secondary);
      ${We}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${yt}: var(--arc-color-mono-black);
      ${We}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${Bi}
    ${Zp}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${Nr}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${Nr}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    opacity: var(--arc-alpha-100);
    transition: opacity 200ms ease-out;

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    [data-num-length] {
      --arc-button-font-size: var(${de}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${de}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${de}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${Nr}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${We}));
      --arc-button-color: var(--arc-avatar-color, var(${yt}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${Nr}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${yt}: transparent;
        ${We}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${We});
      color: var(${yt});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
    }

    [data-element] {
      flex: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      font-weight: var(--arc-font-weight-600);
      visibility: var(${Nr}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${Nr}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,Qp=({children:r,initial:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"initial","data-color":a,children:r||e}),rg=({isLoaded:r,hasError:e,onLoad:a,onError:t,...o})=>{const n=!r&&""||void 0,c=e&&""||void 0,l=!r||e||void 0;return(0,i.jsx)("img",{...o,hidden:l,"data-element":"image","data-not-loaded":n,"data-has-error":c,onLoad:a,onError:t})},Io=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(Io).join(""):(0,s.isValidElement)(r)?Io(r.props.children):"",xd={},eg=(r="id")=>{const e=(xd[r]??0)+1;return xd[r]=e,`${r}-${e}`},Or=(r,e="id")=>{const a=(0,s.useId)();return r??`${e}-${a}`},Ht=r=>typeof r=="string",kd=r=>r!==null&&typeof r=="object",ag=["#9c15ff","#1eb4fb"],wd=({angle:r=60,width:e,height:a})=>{const t=(r-90)*Math.PI/180,o=e/2,n=a/2,c=Math.sqrt(e*e+a*a)/2,l=Math.cos(t)*c,u=Math.sin(t)*c;return{x1:o-l,y1:n-u,x2:o+l,y2:n+u}},tg=(r,e)=>{const a=Ht(r)?r:r.color,t=Ht(r)?e.toString():r.offset?.toString()??e.toString();return(0,i.jsx)("stop",{offset:t,stopColor:a},`${a}-${e}`)},Sd=({id:r,angle:e=60,width:a,height:t,stops:o=ag})=>{const{x1:n,y1:c,x2:l,y2:u}=wd({angle:e,width:a,height:t});return(0,i.jsx)("defs",{children:(0,i.jsx)("linearGradient",{gradientUnits:"userSpaceOnUse",id:r,x1:n,x2:l,y1:c,y2:u,children:o.map(tg)})})},Ni=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),Fi=r=>{const e=Or(void 0,"arc-ai-gradient");return(0,i.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:`url(#${e})`}),Sd({id:e,width:640,height:640,stops:["var(--arc-color-logo-ai-purple, #9c15ff)","var(--arc-color-logo-ai-blue, #1eb4fb)"]})]})},Hi=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),Vi=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),Gi=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),Ui=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),Ki=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),Wi=r=>(0,i.jsx)("svg",{...r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var og;const ng="fa-width-auto",Cd="fa-fw",cg="arc-fw",Ad="arc-aw",ig=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,sg={"arc-svg logo-articulate":(0,i.jsx)(Ni,{}),"arc-svg product-ai":(0,i.jsx)(Fi,{}),"arc-svg product-peek":(0,i.jsx)(Hi,{}),"arc-svg product-reach":(0,i.jsx)(Vi,{}),"arc-svg product-review":(0,i.jsx)(Gi,{}),"arc-svg product-rise":(0,i.jsx)(Ui,{}),"arc-svg product-storyline":(0,i.jsx)(Ki,{}),"arc-svg product-studio":(0,i.jsx)(Wi,{})},lx=r=>r&&r.length>0&&r?.includes("arc-svg")?sg[r]:og("span",{className:r}),zd=r=>{const e=r.includes(ng),a=r.includes(Cd),t=r.includes(cg),o=r.includes(Ad);return{hasFaAutoWidth:e,hasFaFixedWidth:a,hasArcFixedWidth:t,hasArcAutoWidth:o}},Ed=r=>((0,s.isValidElement)(r)&&r.type===Ar?r.props.icon:r)??void 0,Xi=r=>{const e=Ed(r);if(typeof e!="string")return e;const{hasFaFixedWidth:a,hasArcFixedWidth:t,hasArcAutoWidth:o}=zd(e);return!a&&!t&&!o?`${e} ${Ad}`:e},lg=r=>{const e=Ed(r);if(typeof e!="string")return e;let a=e;const{hasArcFixedWidth:t,hasFaFixedWidth:o}=zd(a);return t&&!o&&(a=`${a} ${Cd}`),a},dg=d`--arc•icon`,Ba=d`${dg}•fg`,ug=d`
@layer arc-components {

[arc-icon] {
  ${Ba}: currentcolor;

  color: var(--arc-icon-color, var(${Ba}));
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, auto);
    max-height: var(--arc-icon-max-height, none);
    margin-block: var(--arc-icon-margin-block, unset);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, var(${Ba}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand],
  &[arc-icon-status=announcement] {
    ${Ba}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${Ba}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${Ba}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${Ba}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error],
  &[arc-icon-status=critical] {
    ${Ba}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${Ba}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,hg=r=>(0,i.jsx)(Ar,{...r,icon:"fa-kit fa-articulate arc-aw",color:r?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":r?.["aria-label"]||"Articulate Logo"}),pg=r=>(0,i.jsx)(Ar,{...r,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":r?.["aria-label"]||"Articulate AI Logo",gradient:r?.gradient||"ai"}),gg=r=>(0,i.jsx)(Ar,{...r,icon:"fa-kit fa-product-badge-peek arc-aw",color:r?.color||"var(--arc-color-logo-peek, #497add)","aria-label":r?.["aria-label"]||"Articulate Peek Logo"}),vg=r=>(0,i.jsx)(Ar,{...r,icon:"fa-kit fa-product-badge-reach arc-aw",color:r?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":r?.["aria-label"]||"Articulate Reach Logo"}),fg=r=>(0,i.jsx)(Ar,{...r,icon:"fa-kit fa-product-badge-review arc-aw",color:r?.color||"var(--arc-color-logo-review, #35b062)","aria-label":r?.["aria-label"]||"Articulate Review Logo"}),mg=r=>(0,i.jsx)(Ar,{...r,icon:"fa-kit fa-product-badge-rise arc-aw",color:r?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":r?.["aria-label"]||"Articulate Rise Logo"}),bg=r=>(0,i.jsx)(Ar,{...r,icon:"fa-kit fa-product-badge-storyline arc-aw",color:r?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":r?.["aria-label"]||"Articulate Storyline Logo"}),$g=r=>(0,i.jsx)(Ar,{...r,icon:"fa-kit fa-product-badge-studio arc-aw",color:r?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":r?.["aria-label"]||"Articulate Studio Logo"}),Ar=({children:r,icon:e="fa-regular fa-circle-dashed",color:a,size:t,style:o,gradient:n,...c})=>{const l={...o,"--arc-icon-size":ig(t),"--arc-icon-color":a},u=!!(c["aria-label"]||c["aria-labelledby"]),h=lg(e),p=typeof h=="string"&&h.length>0?(0,i.jsx)("span",{className:h}):h;return(0,i.jsx)("span",{"aria-hidden":!u||void 0,...c,"arc-icon":"",style:l,"arc-gradient":n,children:r||p})};Cr("ArcIcon",ug),Ar.Articulate=hg,Ar.AI=pg,Ar.Peek=gg,Ar.Reach=vg,Ar.Review=fg,Ar.Rise=mg,Ar.Storyline=bg,Ar.Studio=$g,Ar.SVGArticulate=Ni,Ar.SVGAI=Fi,Ar.SVGPeek=Hi,Ar.SVGReach=Vi,Ar.SVGReview=Gi,Ar.SVGRise=Ui,Ar.SVGStoryline=Ki,Ar.SVGStudio=Wi;const yg=({children:r,icon:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"anonymous","data-color":"neutral",children:r||(0,i.jsx)(Ar,{icon:e})}),_d="blue",Pd="neutral",xg="fa-solid fa-user arc-aw",qi=(0,s.forwardRef)(({children:r,size:e,color:a,isActive:t=!0,isAnonymous:o,alt:n,src:c,name:l,email:u,...h},p)=>{const[f,g]=(0,s.useState)(!1),[v,m]=(0,s.useState)(!1),y=R=>{g(!0),m(!1),h.onLoad?.(R)},S=R=>{g(!1),m(!0),h.onError?.(R)},k=Fp(l||u),w=!!k,z=o||(!f||v)&&!w,x=!z&&!!c&&!v||void 0,_=(z&&Pd||void 0)??(a||void 0)??Vp(String(u||l||void 0),$d,_d)??_d,P={src:c,alt:n,isLoaded:f,hasError:v,onLoad:y,onError:S};return(0,s.useEffect)(()=>{z&&g(!1)},[z]),(0,i.jsx)("span",{...h,ref:p,"arc-avatar":"","data-is-inactive":!t||void 0,"data-size":e,"aria-label":(h.title??l??u)||void 0,children:r||(z?(0,i.jsx)(yg,{icon:xg,color:Pd}):(0,i.jsxs)(i.Fragment,{children:[x&&(0,i.jsx)(rg,{...P}),w&&(0,i.jsx)(Qp,{initial:k,color:_})]}))})});Cr("ArcAvatar",Jp);const Ee=d`${Nr}•text`,xt=d`${Nr}•subtext`,Vt=d`${Nr}•gap`,kg=d`
@layer arc-components {

  [arc-avatar-text] {
    ${Ee}•font•size: var(${b}•14);
    ${xt}•font•size: var(${b}•12);
    ${Vt}: var(${b}•8);

    ${Ee}•overflow: unset;
    ${Ee}•text•overflow: unset;
    ${Ee}•white•space: unset;

    &[data-overflow=truncate] {
      ${Ee}•overflow: hidden;
      ${Ee}•text•overflow: ellipsis;
      ${Ee}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${Ee}•font•size: 1em;
      ${xt}•font•size: 0.875em;
      ${Vt}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${Ee}•font•size: var(--arc-font-size-14);
      ${xt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${Ee}•font•size: var(--arc-font-size-14);
      ${xt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${Ee}•font•size: var(--arc-font-size-14);
      ${xt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${Ee}•font•size: var(--arc-font-size-12);
      ${xt}•font•size: var(--arc-font-size-12);
      ${Vt}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${Vt}: var(${b}•12); }
    &[data-gap=sm] { ${Vt}: var(${b}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${Ee}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(--arc-avatar-text-gap, var(${Vt}));
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${xt}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${Ee}•overflow);
      text-overflow: var(${Ee}•text•overflow);
      white-space: var(${Ee}•white•space);
    }
  }

}
`,wg="Anonymous",ec=({children:r,avatar:e={},subtext:a,size:t,gapSize:o,overflow:n,isStrong:c,...l})=>{const u=e.anonymousName||wg,h=e.name||e.email||e.src,p=e.name||e.email,f=e.isAnonymous||!h,g=r||(f?u:p),v=o!=="inherit"?o:void 0,m=n!=="inherit"?n:void 0;return(0,i.jsxs)("span",{...l,"arc-avatar-text":"","data-gap":v,"data-overflow":m,"is-strong":c?"":void 0,children:[(0,i.jsx)(qi,{...e,isAnonymous:f,size:t}),(0,i.jsxs)("span",{"data-element":"text",children:[g,a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:a})]})]})]})};Cr("ArcAvatarText",kg);const Sg=d`
@layer arc-components {

  [arc-avatar-pile] {
    --arc-button-inline-spacing: 0;

    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${Bi}
    ${yd}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,Cg=({size:r="md",...e})=>(0,i.jsx)("div",{...e,"arc-avatar-pile":"","data-size":r});Cr("ArcAvatarPile",Sg);const et=typeof window>"u"?s.useEffect:s.useLayoutEffect,Yi=[...pt],Zi=[...Da],Ag=[...Lt],Td=fr(Ur,["common"]),zg=fr(Ur,["ai","brand"]),ac=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],Ji=["ignore","flip"],Id=["compact","comfortable"],Ro=(r,e=1/0,a=" ")=>[...r].flat(e)?.filter(Boolean)?.join(a),Me={popover:Yi[0],anchorAt:ac[13],boundary:Ji[0],tryFallbacks:!1,fallbackAnchors:[],variant:Td[0],scheme:Zi[0],density:Id[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},Qi=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored"),Eg=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),tc={canAnchor:Qi(),canAnchoredContainers:Eg()},Rd=!tc.canAnchor,jd=["center","nw-corner","ne-corner","se-corner","sw-corner"],Md=r=>{if(!Array.isArray(r)||r.length===0)return[];const e=new Set;return r.filter(a=>!ac.includes(a)||e.has(a)?!1:(e.add(a),!0))},Ld=r=>`--js\u2022try-${r}`,Dd=({canHaveTail:r,tailSize:e})=>{if(!r)return{cssTailVar:"",floatingTailPx:0};const a=Math.abs(Number(e||Me.tailSize)),t=a>0?a:Me.tailSize;return{cssTailVar:t===Me.tailSize?"":`${t}px`,floatingTailPx:t}},Od=(r,e="toggle",a=document)=>{const t=a.getElementById(r);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[e]()},jo=new WeakMap,rs=r=>{const e=String(r??"").trim();if(e==="none")return"none";let a=e.replace(/[^\w-]/g,"-");for(;a.startsWith("-");)a=a.slice(1);for(;a.endsWith("-");)a=a.slice(0,-1);return a?`--${a}`:"--"},Mo=r=>{const e=rs(r);return e==="none"?null:e},Bd=(r,e)=>{const a=Mo(e);if(!a)return()=>{};let t=jo.get(r);return t||(t=new Set,jo.set(r,t)),t.has(a)?()=>{}:(t.add(a),r.style.setProperty("anchor-name",Ro([...t],1/0,", ")),()=>{const o=jo.get(r);if(o){if(o.delete(a),o.size===0){jo.delete(r),r.style.removeProperty("anchor-name");return}r.style.setProperty("anchor-name",Ro([...o],1/0,", "))}})},Lo=r=>`${Math.round(r*100)/100}px`,_g=[{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("top"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("bottom"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("bottom")&&a.includes("top"),value:1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("left"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("right"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("right")&&a.includes("left"),value:1}],es=(r,e,a)=>_g.find(t=>t.test(r,e,a))?.value||0;let as;const Pg=()=>typeof window<"u"&&typeof CSS<"u"&&typeof CSS.supports=="function"&&!(CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored")),ts=()=>(as||(as=Promise.all([ta.e("defaultVendors-node_modules_pnpm_floating-ui_core_1_7_5_node_modules_floating-ui_core_dist_fl-ff10bd"),ta.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176")]).then(ta.bind(ta,60618))),as);Pg()&&ts().catch(()=>{});const Nd=r=>r==="start"||r==="end"?r:"center",Tg=r=>{const e=r.split("-")[0];return e==="top"||e==="right"||e==="bottom"||e==="left"?e:null},Fd=r=>{const e=Tg(r),a=Nd(r.split("-")[1]);switch(e){case"top":return{block:"start",inline:a};case"bottom":return{block:"end",inline:a};case"left":return{block:a,inline:"start"};case"right":return{block:a,inline:"end"};default:return{block:"center",inline:"center"}}},Hd=(r,e)=>r!=="center"&&e!=="center"&&r!==e,Vd=(r,e)=>{const a=Fd(r),t=Fd(e),o=Hd(a.block,t.block),n=Hd(a.inline,t.inline);return o&&n?"flip-block-inline":o?"flip-block":n?"flip-inline":""},os={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},ns=r=>r.split("-")[0],Ig=r=>r.split("-")[1],Rg=r=>r==="x"?"y":"x",jg=r=>r==="y"?"height":"width",cs=r=>["top","bottom"].includes(ns(r))?"y":"x",Mg=r=>Rg(cs(r)),Lg=(r,e,a,t)=>{const o=cs(a),n=Mg(a),c=jg(n),l=ns(a),u=o==="y",h=r.x+r.width/2-e.width/2,p=r.y+r.height/2-e.height/2,f=r[c]/2-e[c]/2;let g;switch(l){case"top":g={x:h,y:r.y-e.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-e.width,y:p};break;default:g={x:r.x,y:r.y}}switch(Ig(a)){case"start":g[n]-=f*(t&&u?-1:1);break;case"end":g[n]+=f*(t&&u?-1:1);break;default:break}return g},Dg=(r,e,a,t)=>{const o=ns(r),n=cs(r)==="y",c=o==="left"||o==="top"?-1:1,l=a&&n?-1:1,u=e,h=0;return n?{x:t.x+h*l,y:t.y+u*c}:{x:t.x+u*c,y:t.y+h*l}},Gd=r=>({x:r.x,y:r.y,width:r.width,height:r.height}),Og=({anchorEl:r,popoverEl:e,placement:a,offsetPx:t,tailOffset:o,getTailModifier:n})=>{const c=getComputedStyle(e).direction==="rtl",l=Gd(r.getBoundingClientRect()),u=Gd(e.getBoundingClientRect());let h=Lg(l,u,a,c);h=Dg(a,t,c,h);const p=h.x+o*n("x",a,a),f=h.y+o*n("y",a,a);e.style.setProperty("left",Lo(p)),e.style.setProperty("top",Lo(f))},Bg=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,fallbackAnchors:o,offsetPx:n,tailSizePx:c,hasTail:l,isOpen:u})=>{const h=o.join("|");et(()=>{if(!(u&&!Qi()&&!!r&&!!e))return;const f=r,g=e,v=os[a];let m=!0,y;const S=l?Math.max(0,c)*Math.SQRT1_2:0;return Og({anchorEl:f,popoverEl:g,placement:v,offsetPx:n,tailOffset:S,getTailModifier:es}),(async()=>{try{const{autoUpdate:z,computePosition:x,flip:_,offset:P,shift:R,limitShift:U}=await ts();if(!m)return;const T=[P(n)];t&&(o.length?T.push(_({fallbackPlacements:o.map(G=>os[G]),fallbackStrategy:"initialPlacement"})):T.push(_({fallbackStrategy:"bestFit"}))),T.push(R({crossAxis:!t,limiter:U()}));const L=async()=>{try{const G=await x(f,g,{placement:v,strategy:"fixed",middleware:T});if(!m||!f.isConnected||!g.isConnected)return;const I=G.x+S*es("x",G.placement,v),H=G.y+S*es("y",G.placement,v);if(g.style.setProperty("left",Lo(I)),g.style.setProperty("top",Lo(H)),!l||!t){delete g.dataset.fallbacks,delete g.dataset.resolvedAt;return}if(o.length){const er=[a,...o].find(O=>os[O]===G.placement);delete g.dataset.fallbacks,er&&er!==a?g.dataset.resolvedAt=er:delete g.dataset.resolvedAt;return}delete g.dataset.resolvedAt;const V=Vd(v,G.placement);V?g.dataset.fallbacks=V:delete g.dataset.fallbacks}catch{}};await L(),y=z(f,g,L)}catch{}})(),()=>{m=!1,y?.()}},[a,r,h,l,u,n,e,c,t])},oc=1,Gt=2,Ng=[{test:(r,e)=>e.top>=r.bottom+oc,value:"bottom"},{test:(r,e)=>e.bottom<=r.top-oc,value:"top"},{test:(r,e)=>e.left>=r.right+oc,value:"right"},{test:(r,e)=>e.right<=r.left-oc,value:"left"}],Do=r=>{delete r.dataset.fallbacks,delete r.dataset.resolvedAt},nc=r=>({x:r.left+r.width/2,y:r.top+r.height/2}),Fg=(r,e,a,t)=>{const o=nc(e),n=nc(a);if(r==="top"||r==="bottom"){const h=Math.abs(t==="rtl"?a.right-e.right:a.left-e.left),p=Math.abs(t==="rtl"?a.left-e.left:a.right-e.right),f=Math.abs(n.x-o.x);return Math.abs(h-p)<=Gt&&f<=Gt||f+Gt<Math.min(h,p)?"center":h<=p?"start":"end"}const c=Math.abs(a.top-e.top),l=Math.abs(a.bottom-e.bottom),u=Math.abs(n.y-o.y);return Math.abs(c-l)<=Gt&&u<=Gt||u+Gt<Math.min(c,l)?"center":c<=l?"start":"end"},Hg=(r,e,a,t)=>{const o=Ng.find(u=>u.test(e,a));let n;if(o)n=o.value;else{const u=nc(e),h=nc(a),p=h.y-u.y,f=h.x-u.x,g=Math.min(e.height,a.height)*.1;Math.abs(p)>g?n=p>=0?"bottom":"top":n=f>=0?"right":"left"}if(Nd(r.split("-")[1])==="center")return n;const l=Fg(n,e,a,t);return`${n}-${l}`},Vg=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,fallbackAnchors:o,isOpen:n,hasTail:c})=>{const l=o.join("|");et(()=>{if(!e||!tc.canAnchor)return;if(!c||!t||!n||tc.canAnchoredContainers||!r){Do(e);return}const u=a;if(u==="center"||u.includes("corner")){Do(e);return}const h=r,p=e;let f=!0,g;const v=()=>{const y=h.getBoundingClientRect(),S=p.getBoundingClientRect(),k=getComputedStyle(h).direction==="rtl"?"rtl":"ltr",w=Hg(u,y,S,k);if(o.length){const _=w.split("-")[0],P=[u,...o],R=P.find(U=>U===w)??P.find(U=>U.split("-")[0]===_);delete p.dataset.fallbacks,R&&R!==u?p.dataset.resolvedAt=R:delete p.dataset.resolvedAt;return}delete p.dataset.resolvedAt;const z=Vd(u,w);u===w?Do(p):z?p.dataset.fallbacks=z:Do(p)};return(async()=>{try{const{autoUpdate:S}=await ts();if(!f)return;g=S(h,p,v),v()}catch{}})(),()=>{f=!1,g?.(),Do(p)}},[a,r,l,c,n,e,t])},Ud=(r,e=" ")=>r.split(e).map(a=>a.trim()).filter(Boolean),Gg=d`
@layer arc-components {

  [arc-spinner] {
    flex: none;
    display: flex;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, 3em);

    border-radius: var(--arc-border-radius-circle);
    aspect-ratio: 1 / 1;
    pointer-events: none;

    [arc-spinner-circle] {
      fill: none;
      stroke: var(--arc-spinner-circle-color, currentcolor);
      opacity: var(--arc-spinner-circle-opacity, var(--arc-alpha-30));
    }

    [arc-spinner-progress] {
      fill: none;
      stroke: var(--arc-spinner-progress-color, var(--arc-color-fg-brand-mid));
      stroke-dasharray: var(--arc-spinner-progress, 0.3334) 1;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      opacity: var(--arc-spinner-progress-opacity, var(--arc-alpha-100));
      animation: var(--arc-spinner-animation-duration, 743ms) arc-spinner-rotate linear infinite;
      transform-origin: 50% 50%;
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
}
`,is=(0,s.forwardRef)(({progress:r,...e},a)=>(0,i.jsxs)("svg",{...e,ref:a,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":r??""},children:[(0,i.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,i.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));is.displayName="ArcSpinner",Cr("ArcSpinner",Gg);const Ug=(...r)=>console.log(...r),Kd=(...r)=>console.warn(...r),Kg=(...r)=>console.error(...r),Ut=d`--arc•icon•text`,Oo=d`${Ut}•font•size`,Wd=d`${Ut}•icon`,ss=d`${Ut}•text`,Xd=d`${Ut}•subtext`,fa=d`${Ut}•fg`,Na=d`${Ut}•gap`,at=d`${Wd}•size`,qd=d`${Wd}•vertical•align`,Bo=d`${ss}•overflow`,cc=d`${ss}•text•overflow`,ic=d`${ss}•white•space`,sc=d`${Xd}•font•size`,Yd=d`${Xd}•fg`,Wg=d`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${fa}: currentcolor;
  }

  &[data-variant=primary] {
    ${fa}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${fa}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${fa}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${fa}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${fa}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${fa}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${fa}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${fa}: var(--arc-color-fg-critical-mid);
  }

`,Xg=d`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Oo}: 1em;
    ${sc}: 0.75em;
    ${at}: 1em;
    ${Na}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Oo}: var(--arc-font-size-14);
    ${sc}: var(--arc-font-size-12);
    ${Na}: var(${M}•3);
  }

  &[data-size=sm] {
    ${Oo}: var(--arc-font-size-12);
    ${sc}: var(--arc-font-size-12);
    ${Na}: var(${M}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${Na}: var(${M}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${Na}: var(${M}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${Na}: var(${M}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${at}: var(${b}•24); }
  &[icon-size=lg] { ${at}: var(${b}•20); }
  &[icon-size=md] { ${at}: var(${b}•16); }
  &[icon-size=sm] { ${at}: var(${b}•14); }
  &[icon-size=xs] { ${at}: var(${b}•12); }
`,qg=d`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${Yd}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${fa}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${at}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: baseline;

  &[data-layout=inline] {
    ${Bo}: unset;
    ${cc}: unset;
    ${ic}: unset;

    ${qd}: calc((var(${at}) - var(${Oo})) / -2);

    &:has(svg) { ${qd}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${Bo}: visible;
    ${cc}: unset;
    ${ic}: normal;

    &[data-overflow=truncate] {
      ${Bo}: hidden;
      ${cc}: ellipsis;
      ${ic}: nowrap;
    }
  }

`,Yg=d`
@layer arc-components {

  [arc-icon-text] {
    ${Wg}
    ${Xg}
    ${qg}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Oo}));
    color: var(--arc-icon-text-text-color, var(${fa}));
    line-height: var(--arc-icon-text-line-height, inherit);

    [data-element=icon] {
      display: contents;
    }

    [data-element] {
      /* @note: SVG alignment mitigation strategy; presents in multiple components
       * Badges, CheckboxBars, RadioBars, supporting IconText cases like Links, etc. when using SVG icons.
       */
      :where(svg) {
        flex: none;
        align-self: var(--arc-icon-text-svg-align-self, normal);
        display: var(--arc-icon-text-svg-display, inline-block) !important;
        width: var(--arc-icon-text-svg-width, 1.25em) !important;
        height: var(--arc-icon-text-svg-height, auto) !important;
        max-height: var(--arc-icon-text-svg-max-height, 1lh);
        fill: var(--arc-icon-text-svg-fill, currentColor);
        vertical-align: var(--arc-icon-text-svg-vertical-align, text-bottom) !important;
        overflow: var(--arc-icon-text-svg-overflow, visible) !important;
      }
    }

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(${Na}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${Bo}));

      &[is-flipped] { flex-direction: row-reverse; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${sc}));
        color: var(--arc-icon-text-subtext-color, var(${Yd}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${Bo}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${cc}));
        white-space: var(--arc-icon-text-white-space, var(${ic}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${Na})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${Na})); }
      [data-element=subtext] { display: contents; }
    }
  }
}

`,Zg=fr(Ur,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),ue=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="span",icon:n,iconTooltip:c,text:l,subtext:u,gradient:h,overflow:p,iconSize:f,gapSize:g,isFlipped:v=!1,isStrong:m=!1,...y})=>{const S=r||l,k=!!n,w=!!S,z=e==="gutter",x=e==="inline",_=k&&(!v||z),P=k&&w&&v&&x,R=!!f&&f!=="inherit",U=R&&gt.includes(f)?f:void 0,T=R&&!gt.includes(f)?f:void 0,L=g!=="inherit"?g:void 0,G=p!=="inherit"?p:void 0,I=Xi(n),H=typeof I=="string"?(0,i.jsx)(Ar,{icon:I,size:T,gradient:h}):I,V=c?(0,i.jsx)(mc,{text:c,children:H}):H;return(0,i.jsxs)(o,{...y,"arc-icon-text":"","data-variant":t,"data-layout":e,"data-overflow":G,"data-size":a,"data-gap":L,"icon-size":U,"is-flipped":v?"":void 0,"is-strong":m?"":void 0,children:[_&&(0,i.jsx)("span",{"data-element":"icon",children:V}),w&&(0,i.jsxs)("span",{"data-element":"text",children:[S,!!u&&(z?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:u})]}):(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("span",{"data-element":"subtext",children:u})]}))]}),P&&(0,i.jsx)("span",{"data-element":"icon",children:V})]})};Cr("ArcIconText",Yg);const ma={...Me,popover:Yi[2],anchorAt:ac[2],boundary:Ji[1],tryFallbacks:!0,scheme:Zi[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},lc=new WeakSet,Jg=100,Qg=100;let ls=!0,ds=null;const rv=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),ev=r=>r instanceof Element?rv?r.matches(":focus-visible")===!0:ls:!1,us=new WeakMap,hs=new WeakMap,No=new Set,dc=(r,e)=>{const a=r.get(e);a!=null&&(clearTimeout(a),r.delete(e))},Zd=(r,e,a,t)=>{const o=window.setTimeout(()=>{t(),r.delete(e)},a);r.set(e,o)},Jd="[aria-describedby]",av=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,Qd=r=>r instanceof HTMLElement&&r.getAttribute("role")==="tooltip"&&av(r),tv=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),ov=r=>r?.match(/\S+/g)??[],ps=(r,e)=>{const a=na(e??document.documentElement);if(!a)return null;const t=a.querySelector(`[aria-describedby~="${r}"]`);return t?t.closest("label,[arc-label]")??t:null},nv=r=>{if(!(r instanceof Element))return null;const e=r.closest?.(Jd);if(e){const t=e.getAttribute("aria-describedby")??"";if(t)return{anchor:e.closest?.("label,[arc-label]")??e,tooltipId:t}}let a=r;for(;a;){if(tv(a)){const t=a.querySelector?.(Jd),o=t?.getAttribute?.("aria-describedby")??"";if(t&&o)return{anchor:a,tooltipId:o}}a=a.parentElement}return null},cv=r=>{if(!(r instanceof Element))return null;const e=r.closest?.('[role="tooltip"][popover]')??null;return e instanceof HTMLElement?e:null},iv=r=>r?.id?ps(r.id,r):null,sv=r=>{const e=cv(r),a=nv(r);if(!a&&e){const u=iv(e);return!u||!e.id?null:{anchor:u,tooltip:e}}if(!a)return null;const{anchor:t,tooltipId:o}=a;if(!o)return null;const n=na(r);if(!n)return null;const c=ov(o),l=e??c.map(u=>n.getElementById(u)).find(u=>Qd(u))??null;return Qd(l)?{anchor:t,tooltip:l}:null},lv=(r,e,a)=>{const t=a instanceof Element?a:null;if(!t)return!1;const o=r===t||r.contains(t),n=e===t||e.contains(t);return o||n},ru=r=>{r.isConnected&&(r.showPopover?.(),No.add(r))},eu=r=>{r.isConnected&&(r.hidePopover?.(),No.delete(r))},dv=(r,e)=>{if(dc(hs,r),dc(us,r),!e){ru(r);return}Zd(us,r,Jg,()=>ru(r))},gs=(r,e)=>{if(dc(us,r),dc(hs,r),!e){eu(r);return}Zd(hs,r,Qg,()=>eu(r))},uv=()=>{No.forEach(r=>{gs(r,!1)})},Fo=(r,e,a,t)=>{const o=sv(e);if(!o)return;const{anchor:n,tooltip:c}=o;if(r){dv(c,t);return}lv(n,c,a)||gs(c,t)};let uc=null,hc=null,pc=null,gc=null,vc=null,fc=null,Kt=null,Ho=null;const au=r=>{if(!r&&typeof document>"u")return;const e=r?na(r):document;if(!e||lc.has(e))return;fc=t=>{ls=!1,ds=t.target},Kt=()=>{ds=null},uc=t=>Fo(!0,t.target,void 0,!0),pc=t=>Fo(!1,t.target,t.relatedTarget,!0),hc=t=>{ev(t.target)&&Fo(!0,t.target,void 0,!1)},gc=t=>{const o=t.relatedTarget??ds;Fo(!1,t.target,o,!1)},vc=t=>{t.key==="Tab"&&(ls=!0),t.key==="Escape"&&(No.size>0&&t.preventDefault(),Fo(!1,t.target,void 0,!1),No.forEach(o=>gs(o,!1)))},Ho=t=>{if(t.newState!=="open")return;const{target:o}=t;if(o instanceof HTMLElement&&o.getAttribute("role")!=="tooltip"&&o.getAttribute("popover")!=="manual"){try{if(!o.matches("[popover]:popover-open"))return}catch{return}uv()}},[["pointerdown",fc],["pointerup",Kt],["pointercancel",Kt],["pointerover",uc],["focusin",hc],["pointerout",pc],["focusout",gc],["keydown",vc]].forEach(([t,o])=>{e.addEventListener(t,o)}),e.addEventListener("toggle",Ho,!0),lc.add(e)},hv=()=>{if(!lc.has(document)||typeof document>"u")return;[["pointerdown",fc],["pointerup",Kt],["pointercancel",Kt],["pointerover",uc],["focusin",hc],["pointerout",pc],["focusout",gc],["keydown",vc]].forEach(([e,a])=>{a&&document.removeEventListener(e,a)}),Ho&&document.removeEventListener("toggle",Ho,!0),uc=null,hc=null,pc=null,gc=null,vc=null,fc=null,Kt=null,Ho=null,lc.delete(document)},ba=d`--arc•tooltip`,tu=d`${ba}•subtext`,ou=d`${ba}•slot`,pv=d`
@layer arc-components {
  [arc-tooltip] {
    ${ba}•width: max-content;
    ${ba}•max•width: 20em;
    ${ba}•font•size: var(${b}•12);
    ${ba}•padding: var(${M}•10);
    ${tu}•spacing: var(${M}•6);
    ${ou}•margin•top: var(${M}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-overflow: var(--arc-tooltip-overflow, clip);
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: var(--arc-tooltip-min-width, auto); /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${ba}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${ba}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${ba}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${ba}•padding));
    --arc-popover-tail-x: var(--arc-tooltip-tail-x, 1.125em);
    --arc-popover-tail-y: var(--arc-tooltip-tail-y, 1.125em);
    --arc-popover-line-height: var(--arc-line-height-tight);

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${ba}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${tu}•spacing));

    [arc-tooltip-content] {
      text-align: var(--arc-tooltip-text-align, unset);
    }

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${ou}•margin•top));
    }
  }
}
`,mc=(0,s.forwardRef)(({id:r,children:e,slot:a,isEnabled:t=ma.isEnabled,popover:o=ma.popover,variant:n=ma.variant,anchorAt:c=ma.anchorAt,alternateAnchor:l,boundary:u=ma.boundary,tryFallbacks:h=ma.tryFallbacks,hasTail:p=ma.hasTail,offset:f=ma.offset,scheme:g=ma.scheme,isStrong:v=ma.isStrong,text:m,subtext:y,icon:S,isFlipped:k,...w},z)=>{const x=Or(r,"arc-tooltip"),_=(0,s.useRef)(null);(0,s.useImperativeHandle)(z,()=>_.current);const P=I=>typeof I=="object"&&I!==null&&"tabIndex"in I,R=e,U=!!l;let T=null;(0,s.isValidElement)(R)?T=t?(0,s.cloneElement)(R,{"aria-describedby":x,...P(R.props)&&R.props.tabIndex!=null?{}:{tabIndex:0}}):R:!U&&typeof console<"u"&&Kd("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const L=(0,s.useMemo)(()=>()=>ps(x,_.current),[x]),G=g==="auto"?void 0:g;return(0,s.useEffect)(()=>{if(t)try{au(_.current)}catch{}},[t]),(0,i.jsxs)(i.Fragment,{children:[T,t&&(0,i.jsxs)(ya,{...w,"arc-tooltip":"",scheme:w?.isInverse?"inverse":G,role:"tooltip",id:x,ref:_,popover:o,anchorAt:c,tryFallbacks:h??u==="flip",variant:n,hasTail:p,offset:f,hidePopoverButton:!0,alternateAnchor:l??L,tag:w?.tag??"span",contentTag:w?.contentTag??"span",children:[m&&(0,i.jsx)(ue,{"arc-tooltip-content":"",text:m,subtext:y,icon:S,isFlipped:k,isStrong:v,size:"inherit",variant:"inherit"}),a&&(0,i.jsx)("span",{"arc-tooltip-slot-content":"",children:a})]})]})});Cr("ArcTooltip",pv);const gv=({isFloating:r,isOnMedia:e,shadow:a})=>[{condition:!r&&e,value:"light-md"},{condition:r&&!e,value:"lg"},{condition:r&&e,value:"light-lg"},{condition:r||a===!0,value:"lg"}],vv=({isFloating:r,isOnMedia:e,shadow:a})=>gv({isFloating:r,isOnMedia:e,shadow:a}).find(t=>t.condition)?.value??a,fv=({layout:r,isFloating:e})=>[{condition:r==="icon",value:"icon"},{condition:e||r==="hug",value:"hug"},{condition:!e&&r==="fill",value:"fill"}],mv=({layout:r,isFloating:e})=>fv({layout:r,isFloating:e}).find(a=>a.condition)?.value??r,bv=({scheme:r,isInverse:e})=>[{condition:e,value:"inverse"},{condition:r==="auto",value:void 0},{condition:!0,value:r}],$v=({scheme:r,isInverse:e})=>{const a=bv({scheme:r,isInverse:e}).find(t=>t.condition)?.value??r;return a==="auto"?void 0:a},yv=fr(wo,["round","square","narrow"]),xv=fr(ze,["xxl","xl","lg","md","sm"]),kv=fr(pa,["hug","fill","icon"]),nu=fr(Ur,["common","neutral","ai","critical","alpha"]),vs=[...Da],wv=[...Fn],cu=fr(Hn,["primary","secondary","tertiary","plain","link-style"]),Sv=[...Lt],Cv={circle:"round"},iu=({shape:r})=>Oa(r,Cv),fs=fr(Ur,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),su={primary:{variant:"common",hierarchy:"primary"},secondary:{variant:"common",hierarchy:"secondary"},tertiary:{variant:"common",hierarchy:"tertiary"},"critical-primary":{variant:"critical",hierarchy:"primary"},"critical-secondary":{variant:"critical",hierarchy:"secondary"},"ai-primary":{variant:"ai",hierarchy:"primary"},"ai-secondary":{variant:"ai",hierarchy:"secondary"},"primary-inverse":{variant:"common",hierarchy:"primary",scheme:"inverse"},"secondary-inverse":{variant:"common",hierarchy:"secondary",scheme:"inverse"},"tertiary-inverse":{variant:"common",hierarchy:"tertiary",scheme:"inverse"}},Av=(()=>{const r=new Map;return fs.forEach(e=>{const a=su[e],t=a.scheme==="inverse"?"inverse":"";r.set(`${a.variant}|${a.hierarchy}|${t}`,e)}),r})(),ms=r=>!!(r&&fs.includes(r)),bc=r=>r!==void 0&&ms(r)?su[r]:void 0,lu=({variant:r})=>bc(r)?.variant??r,du=({variant:r,hierarchy:e})=>bc(r)?.hierarchy??e,uu=({variant:r,isInverse:e,scheme:a})=>bc(r)?.scheme??$v({scheme:a,isInverse:e}),zv={variant:nu[0],hierarchy:cu[0],scheme:vs[0]},Ev=({variant:r})=>{const e=bc(r);return e?{variant:e.variant,hierarchy:e.hierarchy,scheme:e.scheme??vs[0]}:zv},_v=({variant:r,hierarchy:e,scheme:a})=>Av.get(`${r}|${e}|${a==="inverse"?"inverse":""}`),Qe=d`60deg`,Gr={purple:{50:d`light-dark(#fbf2ff, #210125)`,100:d`light-dark(#efccff, #540160)`,200:d`light-dark(#9c15ff, #ad44cb)`,300:d`light-dark(#680278, #ad44cb)`,400:d`light-dark(#5d3668, #c778de)`,500:d`light-dark(#37003f, #e3a7ff)`,600:d`light-dark(#27002c, #f9ebff)`},blue:{50:d`light-dark(#f4fbff, #00223b)`,100:d`light-dark(#d2f1fe, #02497d)`,200:d`light-dark(#1eb4fb, #169cfe)`,300:d`light-dark(#0179d0, #71bdfe)`,400:d`light-dark(#36648c, #84daff)`,500:d`light-dark(#004273, #b7eaff)`,600:d`light-dark(#012a48, #c2edff)`}},Vo=d`var(--arc-color-overlay-subtle)`,Pv=d`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* * + secondary floating button */
  --arc-button-floating-bg: ${Vo};
  --arc-button-floating-bg-processing: ${Vo};
  --arc-button-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-floating-bg-focus: ${Vo};
  --arc-button-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));

  /* critical + floating button */
  --arc-button-critical-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-floating-bg-active: var(--arc-color-bg-critical-muted);

  /* ai + secondary floating button */
  --arc-button-ai-floating-bg: ${Vo} linear-gradient(${Qe}, transparent, ${Vo});

  /*
  ai variant gradients that can be slightly transitioned: 'bg-color + gradient(transparent -> color)'
  bg-color can be transitioned, gradient not so much. Result: subtle transition of the bg-color through the transparent parts of the gradient.
  */
  --arc-button-gradient-ai-transparent: transparent linear-gradient(${Qe}, transparent, transparent);
  --arc-button-gradient-ai-50: ${Gr.purple[50]} linear-gradient(${Qe}, transparent, ${Gr.blue[50]});
  --arc-button-gradient-ai-100: ${Gr.purple[100]} linear-gradient(${Qe}, transparent, ${Gr.blue[100]});
  --arc-button-gradient-ai-200: ${Gr.purple[200]} linear-gradient(${Qe}, transparent, ${Gr.blue[200]});
  --arc-button-gradient-ai-300: ${Gr.purple[300]} linear-gradient(${Qe}, transparent, ${Gr.blue[300]});
  --arc-button-gradient-ai-400: ${Gr.purple[400]} linear-gradient(${Qe}, transparent, ${Gr.blue[400]});
  --arc-button-gradient-ai-500: ${Gr.purple[500]} linear-gradient(${Qe}, transparent, ${Gr.blue[500]});
  --arc-button-gradient-ai-600: ${Gr.purple[600]} linear-gradient(${Qe}, transparent, ${Gr.blue[600]});
}
`,Tv=d`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-light-blue-600));
}
`,Iv=d`
:root {
  /* Tail edge colors for 'variant=ai' popovers */
  --arc-popover-ai-purple-50: ${Gr.purple[50]};
  --arc-popover-ai-purple-200: ${Gr.purple[200]};
  --arc-popover-ai-blue-50: ${Gr.blue[50]};
  --arc-popover-ai-blue-200: ${Gr.blue[200]};
}
`,Rv=d`
:root {
  --arc-progress-bar-gradient-ai-200: linear-gradient(${Qe}, ${Gr.purple[200]} -0.5em, ${Gr.blue[200]});
}
`,jv=d`
:root {
  --arc-banner-gradient-ai-50: linear-gradient(${Qe}, ${Gr.purple[50]}, ${Gr.blue[50]});
  --arc-banner-gradient-ai-100: linear-gradient(${Qe}, ${Gr.purple[100]}, ${Gr.blue[100]});
  --arc-banner-gradient-ai-300: linear-gradient(${Qe}, ${Gr.purple[300]}, ${Gr.blue[300]});
}
`,j=d`--arc•button`,B=d`${j}•fg`,A=d`${j}•bg`,gr=d`${j}•edge`,jr=d`${j}•border`,Wt=d`${j}•outline`,Xe=d`${j}•label`,_e=d`${j}•mask`,zr=d`${j}•spinner`,te=d`${j}•icon`,ye=d`${te}•svg`,Mv=d`
  &[data-size=xxl] {
    ${j}•font•size: var(${b}•16);
    ${j}•height: var(${b}•56);
    ${zr}•size: var(${b}•32);
    ${te}•size: var(${b}•20);
    ${te}•size•large: var(${b}•24);
    ${ye}•size: var(${b}•25);
    ${ye}•size•large: var(${b}•24);
    ${Xe}•spacing: var(${b}•12);
    ${j}•spacing: var(${b}•16);
    ${j}•spacing•square: var(${b}•16);
    ${jr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=xl] {
    ${j}•font•size: var(${b}•14);
    ${j}•height: var(${b}•48);
    ${zr}•size: var(${b}•16);
    ${te}•size: var(${b}•16);
    ${te}•size•large: var(${b}•20);
    ${ye}•size: var(${b}•20);
    ${ye}•size•large: var(${b}•25);
    ${Xe}•spacing: var(${b}•10);
    ${j}•spacing: var(${b}•14);
    ${j}•spacing•square: var(${b}•14);
    ${jr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=lg] { /** @default */
    ${j}•font•size: var(${b}•14);
    ${j}•height: var(${b}•40);
    ${zr}•size: var(${b}•16);
    ${te}•size: var(${b}•16);
    ${te}•size•large: var(${b}•20);
    ${ye}•size: var(${b}•20);
    ${ye}•size•large: var(${b}•25);
    ${Xe}•spacing: var(${b}•8);
    ${j}•spacing: var(${b}•12);
    ${j}•spacing•square: var(${b}•10);
    ${jr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=inherit] { /* scalable • mimics default size */
    ${j}•font•size: 1em;
    ${j}•height: 2.5em;
    ${Xe}•font•size: 0.875em;
    ${zr}•size: 1.125em;
    ${te}•size: 1.125em;
    ${te}•size•large: 1.25em;
    ${ye}•size: 1.25em;
    ${ye}•size•large: 1.375em;
    ${Xe}•spacing: max(8px, 0.5em);
    ${j}•spacing: 0.75em;
    ${j}•spacing•square: 0.625em;
    ${jr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=md] {
    ${j}•font•size: var(${b}•14);
    ${j}•height: var(${b}•32);
    ${zr}•size: var(${b}•16);
    ${te}•size: var(${b}•14);
    ${te}•size•large: var(${b}•20);
    ${ye}•size: var(${b}•18);
    ${ye}•size•large: var(${b}•25);
    ${Xe}•spacing: var(${b}•6);
    ${j}•spacing: var(${b}•10);
    ${j}•spacing•square: var(${b}•8);
    ${jr}•radius•square: var(--arc-border-radius-md);
  }

  &[data-size=sm] {
    ${j}•font•size: var(${b}•12);
    ${j}•height: var(${b}•24);
    ${zr}•size: var(${b}•14);
    ${te}•size: var(${b}•12);
    ${te}•size•large: var(${b}•14);
    ${ye}•size: var(${b}•15);
    ${ye}•size•large: var(${b}•18);
    ${Xe}•spacing: var(${b}•4);
    ${j}•spacing: var(${b}•8);
    ${j}•spacing•square: var(${b}•6);
    ${jr}•radius•square: var(--arc-border-radius-md);
  }

  /* Custom button overrides • metrics based on size: 'inherit' */
  &[arc-button=custom] {
    ${j}•font•weight: normal;
    ${jr}•radius: 0.25em;
    ${j}•height: auto;
  }
`,Lv=d`
  &[data-layout=hug] {
    ${j}•width: auto;
    ${j}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${j}•display: flex;
    ${j}•width: 100%;
    ${j}•content•width: 0;
  }

  &:not([data-layout=icon]) {
    ${te}•width: auto;
  }

  &[data-layout=icon] {
    ${j}•aspect•ratio: 1 / 1;
    ${j}•min•width: min-content;
    ${j}•max•width: none;
    ${j}•spacing: var(${b}•0);

    ${te}•width: 1.25em;

    &[data-shape=narrow] {
      ${j}•aspect•ratio: auto;
      ${j}•spacing: var(${b}•2);
      ${te}•width: auto;
    }
  }

  &[data-shape=square] {
    ${j}•spacing: var(${j}•spacing•square);
  }

  &:is(
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${jr}•radius: var(${jr}•radius•square);
  }

`,Dv=d`
  /** @mitigation • when no variant is set (i.e.: 'custom' buttons) */
  &:not([data-variant]) {
    ${B}: inherit;
    ${A}: transparent;
    ${gr}: transparent;
    ${B}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &[data-variant=common] {
    ${jr}•width: var(${b}•1);
    ${zr}•progress•color: var(--arc-color-border-brand-mid);
    ${zr}•base•color: var(--arc-color-alpha-mid);

    /** @default */
    &:where([data-hierarchy=primary]) {
      ${B}: var(--arc-color-fg-on-theme-heavy);
      ${A}: var(--arc-color-bg-theme-heavy);
      ${gr}: transparent;

      ${B}•active: var(--arc-color-fg-on-theme-mid);
      ${B}•processing: var(--arc-color-fg-on-theme-stark);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-color-bg-theme-stark);
      ${A}•active: var(--arc-color-bg-theme-mid);
      ${A}•processing: var(--arc-color-bg-theme-stark);
      ${A}•disabled: var(--arc-color-bg-disabled);

      ${zr}•progress•color: var(--arc-color-mono-white);
      ${zr}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${B}: var(--arc-color-fg-primary);
      ${A}: transparent;
      ${gr}: var(--arc-color-border-theme-heavy);

      ${B}•active: var(--arc-color-fg-secondary);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${gr}•active: var(--arc-color-border-theme-mid);
      ${gr}•processing: var(--arc-color-border-theme-subtle);
      ${gr}•disabled: var(--arc-color-border-disabled);

      ${A}•hover: var(--arc-color-bg-neutral-muted);
      ${A}•active: var(--arc-color-bg-neutral-subtle);
      ${A}•processing: transparent;
      ${A}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${gr}: var(--arc-color-border-mid);
        ${gr}•hover: var(--arc-color-border-stark);
        ${gr}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${A}: var(--arc-button-floating-bg);
        ${A}•processing: var(--arc-button-floating-bg-processing);
        ${A}•disabled: var(--arc-button-floating-bg-disabled);
        ${A}•focus: var(--arc-button-floating-bg-focus);
        ${A}•hover: var(--arc-button-floating-bg-hover);
        ${A}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${B}: var(--arc-color-fg-primary);
      ${A}: transparent;
      ${gr}: transparent;

      ${B}•active: var(--arc-color-fg-secondary);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-color-bg-neutral-muted);
      ${A}•active: var(--arc-color-bg-neutral-muted);
      ${A}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${B}: var(--arc-color-fg-primary);
      ${A}: transparent;
      ${gr}: transparent;

      ${B}•hover: var(--arc-color-alpha-heavy);
      ${B}•active: var(--arc-color-alpha-heavy);
      ${B}•processing: var(--arc-color-alpha-heavy);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: transparent;
      ${A}•active: transparent;
      ${A}•processing: transparent;
    }
  }

`,Ov=d`
  &[data-variant=neutral] {
    ${jr}•width: var(${b}•1);
    ${zr}•progress•color: var(--arc-color-border-brand-mid);
    ${zr}•base•color: var(--arc-color-alpha-mid);

    &:where([data-hierarchy=primary]) {
      ${B}: var(--arc-color-fg-primary);
      ${A}: transparent;
      ${gr}: var(--arc-color-border-mid);

      ${B}•active: var(--arc-color-fg-secondary);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-color-bg-neutral-muted);
      ${A}•active: var(--arc-color-bg-neutral-subtle);
      ${A}•processing: transparent;
      ${A}•disabled: transparent;

      &:where([is-floating]) {
        ${A}: var(--arc-button-floating-bg);
        ${A}•processing: var(--arc-button-floating-bg-processing);
        ${A}•disabled: var(--arc-button-floating-bg-disabled);
        ${A}•focus: var(--arc-button-floating-bg-focus);
        ${A}•hover: var(--arc-button-floating-bg-hover);
        ${A}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=secondary]) {
      ${B}: var(--arc-color-fg-neutral-stark);
      ${A}: transparent;
      ${gr}: var(--arc-color-border-mid);

      ${B}•hover: var(--arc-color-fg-primary);
      ${B}•active: var(--arc-color-fg-secondary);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${gr}•disabled: var(--arc-color-border-disabled);

      ${A}•hover: var(--arc-color-bg-neutral-muted);
      ${A}•active: var(--arc-color-bg-neutral-subtle);
      ${A}•processing: transparent;
      ${A}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${gr}: var(--arc-color-border-mid);
        ${gr}•hover: var(--arc-color-border-stark);
        ${gr}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${A}: var(--arc-button-floating-bg);
        ${A}•processing: var(--arc-button-floating-bg-processing);
        ${A}•disabled: var(--arc-button-floating-bg-disabled);
        ${A}•focus: var(--arc-button-floating-bg-focus);
        ${A}•hover: var(--arc-button-floating-bg-hover);
        ${A}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${B}: var(--arc-color-fg-neutral-stark);
      ${A}: transparent;
      ${gr}: transparent;

      ${B}•active: var(--arc-color-fg-secondary);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-color-bg-neutral-muted);
      ${A}•active: var(--arc-color-bg-neutral-subtle);
      ${A}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${B}: var(--arc-color-fg-neutral-stark);
      ${A}: transparent;
      ${gr}: transparent;

      ${B}•hover: var(--arc-color-fg-primary);
      ${B}•active: var(--arc-color-fg-neutral-mid);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: transparent;
      ${A}•active: transparent;
      ${A}•processing: transparent;
    }
  }

`,Bv=d`
  &[data-variant=ai] {
    ${B}•disabled: var(--arc-color-fg-disabled);
    ${gr}•disabled: var(--arc-color-border-disabled);
    ${jr}•width: var(${b}•2);

    ${_e}•bg: var(--arc-gradient-ai-200);
    ${_e}•disabled: var(--arc-color-border-disabled);
    ${_e}•processing: var(--arc-gradient-ai-100);

    &:where([data-hierarchy=primary]) {
      ${B}: var(--arc-color-fg-on-theme-stark);
      ${A}: var(--arc-button-gradient-ai-500) padding-box;
      ${gr}: transparent;

      ${B}•active: var(--arc-color-fg-neutral-mid);
      ${B}•processing: var(--arc-color-fg-on-theme-heavy);
      ${B}•hover: var(--arc-color-fg-on-theme-heavy);

      ${A}•hover: var(--arc-button-gradient-ai-400) padding-box;
      ${A}•active: var(--arc-button-gradient-ai-600) padding-box;
      ${A}•processing: var(--arc-button-gradient-ai-400) padding-box;
      ${A}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${zr}•progress•color: var(--arc-color-mono-white);
      ${zr}•base•color: var(--arc-color-alpha-white-30);

      ${_e}•hover: var(--arc-gradient-ai-200);
      ${_e}•active: var(--arc-gradient-ai-200);
    }

    &:where([data-hierarchy=secondary]) {
      ${B}: var(--arc-color-fg-primary);
      ${A}: var(--arc-button-gradient-ai-transparent) padding-box; /* allows subtle transition of bg-color through the transparent parts of the gradient */
      ${gr}: transparent;

      ${B}•active: var(--arc-color-fg-neutral-stark);
      ${B}•processing: var(--arc-color-fg-primary);

      ${A}•hover: var(--arc-button-gradient-ai-50) padding-box;
      ${A}•focus: var(--arc-button-gradient-ai-50) padding-box;
      ${A}•active: var(--arc-button-gradient-ai-50) padding-box;
      ${A}•processing: var(--arc-button-gradient-ai-50) padding-box;
      ${A}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${zr}•progress•color: var(--arc-color-border-brand-mid);

      ${_e}•hover: var(--arc-gradient-ai-300);
      ${_e}•active: var(--arc-gradient-ai-100);

      &:where([is-floating]) {
        ${A}: var(--arc-button-ai-floating-bg) padding-box;
      }
    }
  }

`,Nv=d`
  &[data-variant=alpha] {
    ${jr}•width: var(${b}•1);
    ${zr}•base•color: var(--arc-color-alpha-white-30);

    &:where([data-hierarchy=primary]) {
      ${B}: var(--arc-color-mono-black);
      ${A}: var(--arc-color-mono-white);
      ${gr}: transparent;

      ${B}•focus: var(--arc-color-mono-black);
      ${B}•active: var(--arc-color-alpha-black-60);
      ${B}•processing: var(--arc-color-mono-black);
      ${B}•disabled: var(--arc-color-alpha-black-60);

      ${A}•hover: var(--arc-color-alpha-white-70);
      ${A}•active: var(--arc-color-alpha-white-40);
      ${A}•processing: var(--arc-color-alpha-white-40);
      ${A}•disabled: var(--arc-color-alpha-white-15);
    }

    &:where([data-hierarchy=secondary]) {
      ${B}: var(--arc-color-alpha-white-95);
      ${A}: transparent;
      ${gr}: var(--arc-color-alpha-white-80);

      ${B}•active: var(--arc-color-alpha-white-80);
      ${B}•processing: var(--arc-color-alpha-white-95);
      ${B}•disabled: var(--arc-color-alpha-white-50);

      ${A}•hover: var(--arc-color-alpha-white-20);
      ${A}•active: var(--arc-color-alpha-white-40);
      ${A}•processing: var(--arc-color-alpha-white-25);
      ${A}•disabled: transparent;

      ${gr}•hover: var(--arc-color-alpha-white-100);
      ${gr}•focus: var(--arc-color-alpha-white-80);
      ${gr}•active: var(--arc-color-alpha-white-50);
      ${gr}•processing: transparent;
      ${gr}•disabled: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=tertiary]) {
      ${B}: var(--arc-color-alpha-white-95);
      ${A}: transparent;
      ${gr}: transparent;

      ${B}•active: var(--arc-color-alpha-black-60);
      ${B}•processing: var(--arc-color-alpha-white-95);
      ${B}•disabled: var(--arc-color-alpha-white-50);

      ${A}•hover: var(--arc-color-alpha-white-20);
      ${A}•active: var(--arc-color-alpha-white-40);
      ${A}•processing: var(--arc-color-alpha-white-20);
      ${A}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${B}: var(--arc-color-alpha-white-95);
      ${A}: transparent;
      ${gr}: transparent;

      ${B}•hover: var(--arc-color-alpha-white-60);
      ${B}•active: var(--arc-color-alpha-white-40);
      ${B}•processing: var(--arc-color-alpha-white-95);
      ${B}•disabled: var(--arc-color-alpha-white-30);
    }
  }
`,Fv=d`
  &[data-variant=critical] {
    ${jr}•width: var(${b}•1);
    ${zr}•progress•color: var(--arc-color-border-brand-mid);

    &:where([data-hierarchy=primary]) {
      ${B}: var(--arc-color-fg-on-stark);
      ${A}: var(--arc-color-bg-critical-stark);
      ${gr}: transparent;

      ${B}•active: var(--arc-color-fg-critical-subtle);
      ${B}•processing: var(--arc-color-fg-on-heavy);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-color-bg-critical-heavy);
      ${A}•active: var(--arc-color-bg-critical-heavy);
      ${A}•processing: var(--arc-color-bg-critical-heavy);
      ${A}•disabled: var(--arc-color-bg-disabled);

      ${zr}•progress•color: var(--arc-color-mono-white);
      ${zr}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${B}: var(--arc-color-fg-critical-stark);
      ${A}: transparent;
      ${gr}: var(--arc-color-border-critical-stark);

      ${B}•active: var(--arc-color-fg-critical-subtle);
      ${B}•processing: var(--arc-color-fg-critical-stark);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-button-critical-bg-hover);
      ${A}•active: var(--arc-color-bg-critical-muted);
      ${A}•disabled: transparent;

      ${gr}•active: var(--arc-color-border-critical-subtle);
      ${gr}•processing: var(--arc-color-border-critical-stark);
      ${gr}•disabled: var(--arc-color-border-disabled);

      /* "floating" button mitigation */
      &:where([is-floating]) {
        ${A}: var(--arc-button-floating-bg);
        ${A}•processing: var(--arc-button-floating-bg-processing);
        ${A}•disabled: var(--arc-button-floating-bg-disabled);
        ${A}•focus: var(--arc-button-floating-bg-focus);

        ${A}•hover: var(--arc-button-critical-floating-bg-hover);
        ${A}•active: var(--arc-button-critical-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${B}: var(--arc-color-fg-critical-stark);
      ${A}: transparent;
      ${gr}: transparent;

      ${B}•active: var(--arc-color-fg-critical-subtle);
      ${B}•processing: var(--arc-color-fg-critical-stark);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-button-critical-bg-hover);
      ${A}•active: var(--arc-color-bg-critical-subtle);
      ${A}•processing: var(--arc-color-bg-critical-muted);
      ${A}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${B}: var(--arc-color-fg-critical-stark);
      ${A}: transparent;
      ${gr}: transparent;

      ${B}•hover: var(--arc-color-fg-critical-mid);
      ${B}•active: var(--arc-color-fg-critical-subtle);
      ${B}•processing: var(--arc-color-fg-critical-stark);
      ${B}•disabled: var(--arc-color-fg-disabled);
    }
  }
`,Hv=d`
  /**
   * @deprecated • restores solid bg for legacy \`variant="secondary"\` / \`variant="secondary-inverse"\` usage,
   * which now map to \`data-variant=common data-hierarchy=secondary\` (transparent by default).
   */
  &[is-deprecated=secondary]:not([is-floating]) {
    ${A}: var(--arc-color-mono-white);
    ${A}•hover: var(--arc-color-bg-neutral-muted);
    ${A}•active: var(--arc-color-bg-neutral-subtle);
    ${A}•processing: var(--arc-color-mono-white);
    ${A}•disabled: var(--arc-color-mono-white);
    ${A}•focus: var(--arc-color-alpha-white-3);
  }

  &[is-deprecated=secondary-inverse]:not([is-floating]) {
    ${A}: transparent;
    ${A}•hover: var(--arc-color-bg-neutral-muted);
    ${A}•active: var(--arc-color-bg-neutral-subtle);
    ${A}•processing: transparent;
    ${A}•disabled: transparent;
    ${A}•focus: var(--arc-color-alpha-white-3);
  }
`,Vv=d`
  /** @overrides all variants when is onMedia (allows 'ai' gradient border) */
  &[is-on-media] {
    ${zr}•progress•color: var(--arc-color-mono-white);
    ${zr}•base•color: var(--arc-color-alpha-white-30);

    ${B}: var(--arc-color-mono-black);
    ${A}: var(--arc-color-alpha-white-70);
    ${gr}: var(--arc-color-alpha-black-15);

    ${B}•active: var(--arc-color-alpha-black-50);
    ${B}•processing: var(--arc-color-alpha-black-50);
    ${B}•disabled: var(--arc-color-alpha-black-40);

    ${A}•hover: var(--arc-color-alpha-white-90);
    ${A}•focus: var(--arc-color-alpha-white-70);
    ${A}•active: var(--arc-color-alpha-white-70);
    ${A}•disabled: var(--arc-color-alpha-white-60);
    ${A}•processing: var(--arc-color-alpha-white-60);

    ${gr}•active: var(--arc-color-alpha-black-10);
    ${gr}•disabled: var(--arc-color-alpha-black-10);
  }
`,Gv=d`
  ${j}•color: var(${B});
  ${j}•background: var(${A});
  ${j}•font•weight: var(--arc-font-weight-600);
  ${j}•cursor: var(--arc-button-cursor, pointer);
  ${j}•padding: 0 var(${j}•spacing);
  ${j}•content•opacity: 1;

  /**
   * @note: new spacing between label and icon
   * '--arc-button-gap' is @deprecated • this was the 'gap' at the [arc-button-content] level
   * '--arc-button-inline-spacing' is @preferred over '--arc-button-gap'
   */
  ${Xe}•padding: var(--arc-button-inline-spacing, var(--arc-button-gap, var(${Xe}•spacing)));

  /**
   * @note: default is 'inherit' so it can inherit from button's size.
   * The 'size="inherit"' sets the button's font-size to 1em,
   * and sets the label font-size to 0.875em (or 14px at 100%) to
   * match the default button's text size. This allows the label
   * to still remain scalable by the parent container's font-size.
   */
  ${Xe}•font•size: inherit;

  /**
   * @note: Transforms variant-dependent '${jr}•width' into '${jr}•size'
   * which is also used for inset/padding on the AI Button's [arc-button-mask] sizing.
   */
  ${jr}•size: var(--arc-button-border-width, var(${jr}•width));

  ${jr}•color: var(${gr});
  ${jr}: var(${jr}•size) solid var(${jr}•color, transparent);
  ${jr}•radius: var(--arc-border-radius-pill);

  ${Wt}: var(--arc-border-width-md) solid var(${Wt}•color, transparent);
  ${Wt}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${zr}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${zr}•circle•color: var(--arc-button-color, var(${zr}•base•color, var(--arc-color-alpha-mid)));
  ${zr}•circle•opacity: var(--arc-alpha-100);

  ${j}•transition:
    background 0.2s ease-out,
    color 0.2s ease-out,
    height 0.2s ease-out,
    border-color 0.2s ease-out,
    outline-color 0.2s ease-out,
    opacity 0.2s ease-out,
    box-shadow 0.2s ease-out;

  &[data-hierarchy=link-style] {
    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication • ArcIcon -----------------------• */

  --arc-icon-size: var(${te}•size);

  ${ye}•width: var(${ye}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${te}•size•large);

    [arc-button-icon]:has(svg) {
      ${ye}•width: var(${ye}•size•large);
    }
  }

  /* Inter-Component Communication • ArcSpinner --------------------• */

  --arc-spinner-size: var(${zr}•size);
  --arc-spinner-progress-color: var(${zr}•progress•color);
  --arc-spinner-circle-color: var(${zr}•circle•color);
  --arc-spinner-circle-opacity: var(${zr}•circle•opacity);
  --arc-spinner-position: var(${zr}•position, absolute);
  --arc-spinner-inset: var(${zr}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${zr}•translate, -50% -50%);

`,Uv=d`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has([arc-button-mask]),
    :has(input),
  ) {
    ${j}•position: relative;
  }

  &[is-disabled] {
    ${j}•color: var(${B}•disabled, var(${B}));
    ${j}•background: var(${A}•disabled, var(${A}));
    ${jr}•color: var(${gr}•disabled, var(${gr}));
    ${j}•opacity: var(--arc-button-disabled-opacity, unset);
    ${j}•cursor: var(--arc-button-disabled-cursor, not-allowed);
    ${_e}•bg: var(${_e}•disabled);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${j}•color: var(${B}•hover, var(${B}));
      ${j}•background: var(${A}•hover, var(${A}));
      ${jr}•color: var(${gr}•hover, var(${gr}));
      ${_e}•bg: var(${_e}•hover);
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${j}•color: var(${B}•active, var(${B}));
      ${j}•background: var(${A}•active, var(${A}));
      ${jr}•color: var(${gr}•active, var(${gr}));
      ${_e}•bg: var(${_e}•active);
    }
  }

  &[is-processing] {
    ${j}•content•visibility: hidden;
    ${j}•content•opacity: 0;

    /* spinner svg position controls */
    ${zr}•position: absolute;
    ${zr}•inset: 50% auto auto 50%;
    ${zr}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${j}•content•visibility: visible;

    /* spinner svg position controls */
    ${zr}•position: relative;
    ${zr}•inset: 0;
    ${zr}•translate: 0;
    ${zr}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${j}•opacity: var(--arc-button-processing-opacity, unset);
    ${j}•cursor: var(--arc-button-processing-cursor, default);
    ${_e}•bg: var(${_e}•processing);

    ${j}•color: var(${B}•processing, var(${B}));
    ${j}•background: var(${A}•processing, var(${A}));
    ${jr}•color: var(${gr}•processing, var(${gr}));
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${j}•color: var(${B}•focus, var(${B}));
    ${j}•background: var(${A}•focus, var(${A}));
    ${jr}•color: var(${gr}•focus, var(${gr}));
    ${Wt}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,Kv=d`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Pv}

  :where([arc-button]) {
    /* SETUP -------------------------------------------------------• */
    ${Mv}
    ${Lv}
    ${Dv}
    ${Hv}
    ${Ov}
    ${Bv}
    ${Nv}
    ${Fv}
    ${Vv}

    /* CORE VARIABLES ----------------------------------------------• */
    ${Gv}
    ${Uv}

    /* CONTEXT OVERRIDES -------------------------------------------• */
    &[is-floating] {
      ${j}•position: fixed;
      ${j}•margin: 0;
      ${j}•z-index: 1000;
    }

    /* "floating" button mitigation */
    &:where([arc-shadow], [is-floating]) {
      backdrop-filter: var(--arc-button-backdrop-filter, blur(0.375em));
    }

    /* Plain & Link-style button structural overrides */
    &:is(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${Xe}•padding: unset;
      ${j}•padding: unset;
      ${j}•height: unset;
      ${jr}•radius: var(--arc-border-radius-md);

      [arc-button-content] {
        gap: var(--arc-button-inline-spacing, var(${Xe}•spacing));
      }
    }

    &:where([data-hierarchy=link-style]) {
      ${j}•font•weight: inherit;
      ${j}•text•decoration: none;
    }

    /* Custom button structural overrides */
    &[arc-button=custom] {
      ${j}•padding: unset;

      [arc-button-content] {
        gap: 0.5em;
      }

      [arc-button-label] {
        display: contents;
      }
    }

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${j}•cursor));
    position: var(--arc-button-position, var(${j}•position, unset));
    transition: var(--arc-button-transition, var(${j}•transition));
    z-index: var(--arc-button-z-index, var(${j}•z-index, unset));
    inset: var(--arc-button-inset, var(--js•inset, unset));

    /* FOOTPRINT */
    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${j}•font•weight));
    font-size: var(--arc-button-font-size, var(${j}•font•size, inherit));
    padding: var(--arc-button-padding, var(${j}•padding));
    margin: var(--arc-button-margin, var(${j}•margin, unset));

    width: var(--arc-button-width, var(${j}•width, auto));
    min-width: var(--arc-button-min-width, var(${j}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${j}•max•width, 100%));

    height: var(--arc-button-height, var(${j}•height, auto));
    min-height: var(--arc-button-min-height, var(${j}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${j}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${j}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${j}•color));
    background: var(--arc-button-background, var(${j}•background));
    border: var(--arc-button-border, var(${jr}));
    border-radius: var(--arc-button-border-radius, var(${jr}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${Wt}));
    outline-offset: var(--arc-button-outline-offset, var(${Wt}•offset));
    overflow: var(--arc-button-overflow, unset);

    /* shadow concession for buttons not already using 'arc-shadow' util */
    &:not([arc-shadow]) {
      box-shadow: var(--arc-button-box-shadow, unset);
    }

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;

      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);

      opacity: var(--arc-button-content-opacity, var(${j}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${j}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${j}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, inherit);

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      font-size: var(--arc-button-label-font-size, var(${Xe}•font•size));
      overflow: var(--arc-button-label-overflow, clip);
      text-overflow: var(--arc-button-label-text-overflow, ellipsis);
      white-space: var(--arc-button-label-white-space, nowrap);
      max-width: var(--arc-button-label-max-width, 100%);
      opacity: var(--arc-button-label-opacity, var(${j}•opacity));
      transition: var(--arc-button-label-transition, inherit);
      padding-inline: var(${Xe}•padding);
    }

    [arc-button-icon] {
      /** @note: override to ensure auto-width is applied to button icons This protects the
       * intended "gap" (now 'padding-inline' on the label) between icon and label */
      --fa-width: var(${te}•width);

      flex: none;

      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--arc-button-icon-width, var(${te}•width));
      min-width: 1em;

      opacity: var(--arc-button-icon-opacity, var(${j}•opacity));
      transition: var(--arc-button-icon-transition, inherit);

      &:has(svg) {
        ${te}•width: var(--arc-button-svg-width, var(${ye}•width));
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    [arc-button-mask] {
      pointer-events: none;
      position: absolute;
      inset: calc(var(${jr}•size) * -1);
      padding: var(${jr}•size);
      background: var(${_e}•bg);
      mask: linear-gradient(black, black) content-box exclude, linear-gradient(black, black);
      border-radius: var(--arc-button-border-radius, var(${jr}•radius));
      transition: var(--arc-button-transition, inherit);
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${j}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,hu=(0,i.jsx)(is,{}),Wv=(0,i.jsx)("span",{"arc-button-mask":""}),Xv=!!s.version.startsWith("18"),qv=r=>r===void 0||r===!1?{isFloating:!1}:r===!0?{isFloating:!0}:{isFloating:!0,inset:r.inset},Yv=({popoverTarget:r,popoverTargetAction:e})=>Xv?{popovertarget:r??void 0,popovertargetaction:e??void 0}:{popoverTarget:r??void 0,popoverTargetAction:e??void 0},Br=(0,s.forwardRef)(({children:r,disabled:e,...a},t)=>{const o=(0,s.useRef)(null),{_isCustom:n,iconEnd:c,iconStart:l,icon:u,text:h,isActive:p,isDisabled:f,isProcessing:g,isProcessingWithText:v,hasLargeIcon:m,tag:y,href:S,type:k,title:w,layout:z,shape:x,size:_="lg",variant:P="common",hierarchy:R="primary",scheme:U="auto",shadow:T,onMedia:L,isOnMedia:G,floating:I,isInverse:H=!1,...V}=a,{isFloating:er,inset:O}=qv(I),J=G??L,nr=y??(S?"a":"button"),sr=nr==="button"?k||"button":void 0,yr=z==="icon",q=v||g||f||e,tr=V?.["aria-disabled"]||q||void 0,Mr=n?void 0:lu({variant:P}),dr=n?void 0:du({variant:P,hierarchy:R}),br=!n&&ms(P)?P:void 0,hr=n?void 0:iu({shape:x}),pr=n?"inherit":_,vr=mv({layout:z,isFloating:er}),kr=vv({isFloating:er,isOnMedia:J,shadow:T}),K=uu({variant:P,isInverse:H,scheme:U}),or=!yr&&(r||h),C=v&&hu||l||u,$=!yr&&(v&&!(l||u)?void 0:c),N=(g||v&&yr)&&hu,ar=Mr==="ai"?Wv:void 0,{tooltip:E,...F}=V,Y=Ht(E)?E:void 0,ir=a.tooltip??Y,wr=!!ir,Lr=Ht(ir)?{text:ir}:ir,re=V["aria-describedby"],He=Or(void 0,"arc-tooltip"),Ie=a.id?`${a.id}-tooltip`:He,ce=wr?Ie:void 0,Re=wr?Ro([re,ce]):re,{anchorName:Ve,style:aa,popoverTarget:ie,popoverTargetAction:je,...ee}=F,Ge=ie?Mo(String(Ve||a?.id)):void 0,Ue=wr?Mo(String(ce)):void 0,Ke=kd(aa)?aa:void 0,jt=Ke&&"anchorName"in Ke&&Ke.anchorName,wi=[...(Ht(jt)?Ud(jt,", "):[]).map(Mo),...Ge?[Ge]:[],...Ue?[Ue]:[]],Mt=Ro(wi,1/0,", "),xo=Ke!=null&&"inset"in Ke&&Ke.inset!==void 0&&Ke.inset!==null&&Ke.inset!=="",Bn={...Ke??{},...Mt?{anchorName:Mt}:{},...O!==void 0&&!xo?{"--js\u2022inset":O}:{}},La=Yv({popoverTarget:ie||void 0,popoverTargetAction:je||void 0}),Si=(0,s.useCallback)(ko=>{o.current=ko,oa(t,ko)},[t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(nr,{...ee,...La,ref:Si,"arc-button":n?"custom":"","arc-scheme":K,"arc-shadow":kr||void 0,disabled:!S&&q||void 0,href:S||void 0,title:wr?void 0:w||void 0,type:sr,"data-layout":vr,"data-shape":hr,"data-size":pr,"data-variant":Mr,"data-hierarchy":dr,"has-large-icon":m?"":void 0,"is-deprecated":br,"is-floating":er?"":void 0,"is-on-media":J?"":void 0,"is-active":p?"":void 0,"is-processing":g||v&&yr?"":void 0,"is-processing-with-text":v&&!yr?"":void 0,"is-disabled":q||tr?"":void 0,"aria-disabled":tr,"aria-describedby":Re||void 0,style:Bn,children:[(0,i.jsxs)("span",{"arc-button-content":"",children:[!!C&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof C=="string"?(0,i.jsx)(Ar,{icon:C}):C}),!!or&&(0,i.jsx)("span",{"arc-button-label":"",children:or}),!!$&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof $=="string"?(0,i.jsx)(Ar,{icon:$}):$})]}),N,ar]}),wr&&(0,i.jsx)(mc,{...Lr,id:ce,alternateAnchor:Lr?.alternateAnchor??(()=>o.current),anchorName:Ue})]})});Br.displayName="ArcButton",Cr("ArcButton",Kv);const Go=(0,s.forwardRef)((r,e)=>(0,i.jsx)(Br,{...r,ref:e,"arc-popover-button":""})),pu=({isInverse:r=!1,isOpen:e,...a})=>(0,i.jsx)(Br,{icon:"fa-regular fa-xmark",text:"Dismiss",...a,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),Zv=({isInverse:r=!1,...e})=>(0,i.jsx)(Br,{icon:"fa-regular fa-arrow-left",text:"Go Back",...e,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-go-back":""}),Jv=({children:r,isSticky:e,showDivider:a,showDismiss:t,dismissProps:o,showGoBack:n,goBackProps:c,headerSlotEnd:l,tag:u="header",...h})=>(0,i.jsx)(u,{...h,"arc-popover-header":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsxs)("div",{"arc-popover-display":"",children:[(0,i.jsxs)("div",{"arc-popover-header-slot":"start",children:[n&&(0,i.jsx)(Zv,{...c}),r]}),(0,i.jsxs)("div",{"arc-popover-header-slot":"end",children:[l,t&&(0,i.jsx)(pu,{...o})]})]})}),Qv=({children:r,tag:e="article",...a})=>(0,i.jsx)(e,{...a,"arc-popover-body":"",children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})}),rf=({children:r,isSticky:e,showDivider:a,tag:t="footer",...o})=>(0,i.jsx)(t,{...o,"arc-popover-footer":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})});Go.displayName="ArcPopoverButton";const X=d`--arc-popover`,xe=d`--arc•popover`,lr=d`--arc•trail•mix`,bs=d`${xe}•radius`,ef=d`${xe}•content`,$c=d`${xe}•outline`,xr=d`${xe}•offset`,Aa=d`${xe}•header`,af=d`${xe}•body`,$s=d`${xe}•divider`,yc=d`${xe}•footer`,$a=d`${xe}•tail`,Er=d`${$a}•top`,_r=d`${$a}•left`,Uo=d`${$a}•size`,ke=d`${$a}•x`,we=d`${$a}•y`,ys=d`${xe}•font•size`,xc=d`${xe}•padding`,Fr=d`${xe}•margin`,Xt=d`${Aa}•padding`,ia=d`${af}•padding`,za=d`${yc}•padding`,gu=d`${xe}•fg`,kc=d`${xe}•bg`,wc=d`${ef}•bg`,Sc=d`${$a}•fill•a`,Cc=d`${$a}•fill•b`,Ac=d`${$a}•edge•a`,zc=d`${$a}•edge•b`,tf=d`

  ${xe}•fallback: none;
  ${$c}: var(${X}-outline-size, var(--arc-border-width-md));
  ${bs}: var(${X}-border-radius, var(--arc-border-radius-lg));
  ${xr}: var(${X}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${xc}: 0.875em;

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${lr}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${ke}: var(${X}-tail-x, 1.75em);
  ${we}: var(${X}-tail-y, 1.125em);
  ${Uo}: 0px;

  &:where([has-tail]) {
    ${Uo}: var(${X}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${xr}: calc(var(${X}-offset, var(--js•offset, 0px)) + var(${Uo}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${xc}: 0;
    &:has([arc-popover-header]:not([has-divider])) { ${ia}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${ia}•block•end: 0; }
  }

`,of=d`

  /* default variant: common */
  &[variant] {
    ${gu}: var(--arc-color-fg-primary);
    ${kc}: var(${X}-background, var(--arc-color-bg-mono)) border-box;
    ${wc}: var(${X}-background, var(--arc-color-bg-mono)) padding-box;
    ${Sc}: var(${X}-background, var(--arc-color-bg-mono));
    ${Cc}: var(${X}-background, var(--arc-color-bg-mono));
    ${Ac}: var(${X}-background, var(--arc-color-bg-mono));
    ${zc}: var(${X}-background, var(--arc-color-bg-mono));
    ${xe}•shadow: var(--arc-shadow-lg);
    ${$s}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${kc}: var(--arc-color-border-brand-mid) border-box;
    ${wc}: var(--arc-color-bg-brand-muted) padding-box;
    ${Sc}: var(--arc-color-bg-brand-muted);
    ${Cc}: var(--arc-color-bg-brand-muted);
    ${Ac}: var(--arc-color-border-brand-mid);
    ${zc}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${kc}: var(--arc-gradient-ai-200) border-box;
    ${wc}: var(--arc-gradient-ai-50) padding-box;
    ${Sc}: var(${X}-ai-purple-50);
    ${Cc}: var(${X}-ai-blue-50);
    ${Ac}: var(${X}-ai-purple-200);
    ${zc}: var(${X}-ai-blue-200);
  }

`,nf=d`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${ys}: 0.75em;
    ${Aa}•gap: 0.75em;
    ${Xt}•block: 0.75em;
    ${Xt}•inline: 0.75em;

    ${ia}•block: 0.75em;
    ${ia}•inline: 0.75em;

    ${yc}•gap: 0.75em;
    ${za}•inline: 0.75em;
    ${za}•block•start: 0.75em;
    ${za}•block•end: 0.75em;
  }

  &[density=comfortable] {
    ${ys}: 0.875em;
    ${Aa}•gap: 1.125em;
    ${Xt}•block: 1em;
    ${Xt}•inline: 1.25em;

    ${ia}•block: 1.25em;
    ${ia}•inline: 1.25em;

    ${yc}•gap: 1.125em;
    ${za}•inline: 1.25em;
    ${za}•block•start: 1em;
    ${za}•block•end: 1.25em;

    &:not(:has([arc-popover-body])) {
      ${xc}: 1.25em;
    }
  }

`,Ko={TOP:d`
    &[anchor-at*='top-'] {
      ${Fr}: 0 0 var(${xr}) 0;
      ${Er}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${lr}: 95%;
      ${_r}: calc(0% + var(${ke}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${lr}: 75%;
      ${_r}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${lr}: 53.5%;
      ${_r}: calc(100% - var(${ke}));
    }
  `,RIGHT:d`
    &[anchor-at*='right-'] {
      ${Fr}: 0 0 0 var(${xr});
      ${_r}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${lr}: 53.5%;
      ${Er}: calc(0% + var(${we}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${lr}: 75%;
      ${Er}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${lr}: 95%;
      ${Er}: calc(100% - var(${we}));
    }
  `,BOTTOM:d`
    &[anchor-at*='bottom-'] {
      ${Fr}: var(${xr}) 0 0 0;
      ${Er}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${lr}: 5%;
      ${_r}: calc(100% - var(${ke}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${lr}: 25%;
      ${_r}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${lr}: 47.5%;
      ${_r}: calc(0% + var(${ke}));
    }
  `,LEFT:d`
    &[anchor-at*='left-'] {
      ${Fr}: 0 var(${xr}) 0 0;
      ${_r}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${lr}: 47.5%;
      ${Er}: calc(100% - var(${we}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${lr}: 25%;
      ${Er}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${lr}: 5%;
      ${Er}: calc(0% + var(${we}));
    }
  `,CENTER_AND_CORNERS:d`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${$a}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${Fr}: 0; }
    &[anchor-at*='corner'] { ${Fr}: var(${xr}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},qt={FLIP_BLOCK:d`
    &[anchor-at*='top-'] { ${Fr}: 0 0 var(${xr}) 0; }
    &[anchor-at='top-start']::before { ${lr}: 47.5%; ${Er}: 0%; }
    &[anchor-at='top-center']::before { ${lr}: 25%; ${Er}: 0%; }
    &[anchor-at='top-end']::before { ${lr}: 5%; ${Er}: 0%; }

    &[anchor-at='right-start']::before { ${lr}: 95%; ${Er}: calc(100% - var(${we})); }
    &[anchor-at='right-end']::before { ${lr}: 53.5%; ${Er}: calc(0% + var(${we})); }

    &[anchor-at*='bottom-'] { ${Fr}: var(${xr}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${lr}: 53.5%; ${Er}: 100%; }
    &[anchor-at='bottom-center']::before { ${lr}: 75%; ${Er}: 100%; }
    &[anchor-at='bottom-start']::before { ${lr}: 95%; ${Er}: 100%; }

    &[anchor-at='left-end']::before { ${lr}: 5%; ${Er}: calc(0% + var(${we})); }
    &[anchor-at='left-start']::before { ${lr}: 47.5%; ${Er}: calc(100% - var(${we})); }
  `,FLIP_INLINE:d`
    &[anchor-at='top-start']::before { ${lr}: 53.5%; ${_r}: calc(100% - var(${ke})); }
    &[anchor-at='top-end']::before { ${lr}: 95%; ${_r}: calc(0% + var(${ke})); }

    &[anchor-at*='right-'] { ${Fr}: 0 var(${xr}) 0 0; }
    &[anchor-at='right-start']::before { ${lr}: 5%; ${_r}: 100%; }
    &[anchor-at='right-center']::before { ${lr}: 25%; ${_r}: 100%; }
    &[anchor-at='right-end']::before { ${lr}: 47.5%; ${_r}: 100%; }

    &[anchor-at='bottom-end']::before { ${lr}: 47.5%; ${_r}: calc(0% + var(${ke})); }
    &[anchor-at='bottom-start']::before { ${lr}: 5%; ${_r}: calc(100% - var(${ke})); }

    &[anchor-at*='left-'] { ${Fr}: 0 0 0 var(${xr}); }
    &[anchor-at='left-end']::before { ${lr}: 95%; ${_r}: 0%; }
    &[anchor-at='left-center']::before { ${lr}: 75%; ${_r}: 0%; }
    &[anchor-at='left-start']::before { ${lr}: 53.5%; ${_r}: 0%; }
  `,FLIP_BLOCK_INLINE:d`
    &[anchor-at*='top-'] { ${Fr}: 0 0 var(${xr}) 0; }
    &[anchor-at='top-start']::before { ${lr}: 5%; ${Er}: 0%; ${_r}: calc(100% - var(${ke})); }
    &[anchor-at='top-end']::before { ${lr}: 47.5%; ${Er}: 0%; ${_r}: calc(0% + var(${ke})); }

    &[anchor-at*='right-'] { ${Fr}: 0 var(${xr}) 0 0; }
    &[anchor-at='right-start']::before { ${lr}: 47.5%; ${Er}: calc(100% - var(${we})); ${_r}: 100%; }
    &[anchor-at='right-end']::before { ${lr}: 5%; ${Er}: calc(0% + var(${we})); ${_r}: 100%; }

    &[anchor-at*='bottom-'] { ${Fr}: var(${xr}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${lr}: 95%; ${Er}: 100%; ${_r}: calc(0% + var(${ke})); }
    &[anchor-at='bottom-start']::before { ${lr}: 53.5%; ${Er}: 100%; ${_r}: calc(100% - var(${ke})); }

    &[anchor-at*='left-'] { ${Fr}: 0 0 0 var(${xr}); }
    &[anchor-at='left-end']::before { ${lr}: 53.5%; ${Er}: calc(0% + var(${we})); ${_r}: 0%; }
    &[anchor-at='left-start']::before { ${lr}: 95%; ${Er}: calc(100% - var(${we})); ${_r}: 0%; }
  `},cf=d`
  @position-try --js•try-top-start { position-area: block-start span-inline-end; margin: 0 0 var(${xr}) 0; }
  @position-try --js•try-top-center { position-area: block-start; margin: 0 0 var(${xr}) 0; }
  @position-try --js•try-top-end { position-area: block-start span-inline-start; margin: 0 0 var(${xr}) 0; }
  @position-try --js•try-right-start { position-area: inline-end span-block-end; margin: 0 0 0 var(${xr}); }
  @position-try --js•try-right-center { position-area: inline-end; margin: 0 0 0 var(${xr}); }
  @position-try --js•try-right-end { position-area: inline-end span-block-start; margin: 0 0 0 var(${xr}); }
  @position-try --js•try-bottom-start { position-area: block-end span-inline-end; margin: var(${xr}) 0 0 0; }
  @position-try --js•try-bottom-center { position-area: block-end; margin: var(${xr}) 0 0 0; }
  @position-try --js•try-bottom-end { position-area: block-end span-inline-start; margin: var(${xr}) 0 0 0; }
  @position-try --js•try-left-start { position-area: inline-start span-block-end; margin: 0 var(${xr}) 0 0; }
  @position-try --js•try-left-center { position-area: inline-start; margin: 0 var(${xr}) 0 0; }
  @position-try --js•try-left-end { position-area: inline-start span-block-start; margin: 0 var(${xr}) 0 0; }
  @position-try --js•try-center { position-area: center center; margin: 0; }
  @position-try --js•try-nw-corner { position-area: top left; margin: var(${xr}); }
  @position-try --js•try-ne-corner { position-area: top right; margin: var(${xr}); }
  @position-try --js•try-se-corner { position-area: bottom right; margin: var(${xr}); }
  @position-try --js•try-sw-corner { position-area: bottom left; margin: var(${xr}); }
`,qr={"top-start":d`
    ${Fr}: 0 0 var(${xr}) 0;
    &::before { ${lr}: 95%; ${Er}: 100%; ${_r}: calc(0% + var(${ke})); }
  `,"top-center":d`
    ${Fr}: 0 0 var(${xr}) 0;
    &::before { ${lr}: 75%; ${Er}: 100%; ${_r}: 50%; }
  `,"top-end":d`
    ${Fr}: 0 0 var(${xr}) 0;
    &::before { ${lr}: 53.5%; ${Er}: 100%; ${_r}: calc(100% - var(${ke})); }
  `,"right-start":d`
    ${Fr}: 0 0 0 var(${xr});
    &::before { ${lr}: 53.5%; ${_r}: 0%; ${Er}: calc(0% + var(${we})); }
  `,"right-center":d`
    ${Fr}: 0 0 0 var(${xr});
    &::before { ${lr}: 75%; ${_r}: 0%; ${Er}: 50%; }
  `,"right-end":d`
    ${Fr}: 0 0 0 var(${xr});
    &::before { ${lr}: 95%; ${_r}: 0%; ${Er}: calc(100% - var(${we})); }
  `,"bottom-start":d`
    ${Fr}: var(${xr}) 0 0 0;
    &::before { ${lr}: 47.5%; ${Er}: 0%; ${_r}: calc(0% + var(${ke})); }
  `,"bottom-center":d`
    ${Fr}: var(${xr}) 0 0 0;
    &::before { ${lr}: 25%; ${Er}: 0%; ${_r}: 50%; }
  `,"bottom-end":d`
    ${Fr}: var(${xr}) 0 0 0;
    &::before { ${lr}: 5%; ${Er}: 0%; ${_r}: calc(100% - var(${ke})); }
  `,"left-start":d`
    ${Fr}: 0 var(${xr}) 0 0;
    &::before { ${lr}: 5%; ${_r}: 100%; ${Er}: calc(0% + var(${we})); }
  `,"left-center":d`
    ${Fr}: 0 var(${xr}) 0 0;
    &::before { ${lr}: 25%; ${_r}: 100%; ${Er}: 50%; }
  `,"left-end":d`
    ${Fr}: 0 var(${xr}) 0 0;
    &::before { ${lr}: 47.5%; ${_r}: 100%; ${Er}: calc(100% - var(${we})); }
  `},sf=d`
  @supports (container-type: anchored) {
    @container anchored(fallback: --js•try-top-start) { [arc-popover][try-fallbacks][has-tail] { ${qr["top-start"]} } }
    @container anchored(fallback: --js•try-top-center) { [arc-popover][try-fallbacks][has-tail] { ${qr["top-center"]} } }
    @container anchored(fallback: --js•try-top-end) { [arc-popover][try-fallbacks][has-tail] { ${qr["top-end"]} } }
    @container anchored(fallback: --js•try-right-start) { [arc-popover][try-fallbacks][has-tail] { ${qr["right-start"]} } }
    @container anchored(fallback: --js•try-right-center) { [arc-popover][try-fallbacks][has-tail] { ${qr["right-center"]} } }
    @container anchored(fallback: --js•try-right-end) { [arc-popover][try-fallbacks][has-tail] { ${qr["right-end"]} } }
    @container anchored(fallback: --js•try-bottom-start) { [arc-popover][try-fallbacks][has-tail] { ${qr["bottom-start"]} } }
    @container anchored(fallback: --js•try-bottom-center) { [arc-popover][try-fallbacks][has-tail] { ${qr["bottom-center"]} } }
    @container anchored(fallback: --js•try-bottom-end) { [arc-popover][try-fallbacks][has-tail] { ${qr["bottom-end"]} } }
    @container anchored(fallback: --js•try-left-start) { [arc-popover][try-fallbacks][has-tail] { ${qr["left-start"]} } }
    @container anchored(fallback: --js•try-left-center) { [arc-popover][try-fallbacks][has-tail] { ${qr["left-center"]} } }
    @container anchored(fallback: --js•try-left-end) { [arc-popover][try-fallbacks][has-tail] { ${qr["left-end"]} } }
  }
`,lf=d`
  &[data-resolved-at='top-start'] { ${qr["top-start"]} }
  &[data-resolved-at='top-center'] { ${qr["top-center"]} }
  &[data-resolved-at='top-end'] { ${qr["top-end"]} }
  &[data-resolved-at='right-start'] { ${qr["right-start"]} }
  &[data-resolved-at='right-center'] { ${qr["right-center"]} }
  &[data-resolved-at='right-end'] { ${qr["right-end"]} }
  &[data-resolved-at='bottom-start'] { ${qr["bottom-start"]} }
  &[data-resolved-at='bottom-center'] { ${qr["bottom-center"]} }
  &[data-resolved-at='bottom-end'] { ${qr["bottom-end"]} }
  &[data-resolved-at='left-start'] { ${qr["left-start"]} }
  &[data-resolved-at='left-center'] { ${qr["left-center"]} }
  &[data-resolved-at='left-end'] { ${qr["left-end"]} }
`,df=d`
  ${cf}

  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${Fr});

    container-type: anchored;
    position-anchor: var(${X}-anchor-name, var(--js•anchor));

    ${Ko.TOP}
    ${Ko.RIGHT}
    ${Ko.BOTTOM}
    ${Ko.LEFT}
    ${Ko.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      /* '--js•fallbacks' is set by the component: automatic flip keywords by default,
         or an ordered list of managed '@position-try' idents when 'fallbackAnchors' is used. */
      position-try-fallbacks: var(--js•fallbacks, flip-block, flip-inline, flip-block flip-inline);
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${qt.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${qt.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${qt.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* Managed fallback placements ('fallbackAnchors') — native '@position-try' tail re-pointing. */
  ${sf}

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
      &[data-fallbacks='flip-block'] {
        ${qt.FLIP_BLOCK}
      }
      &[data-fallbacks='flip-inline'] {
        ${qt.FLIP_INLINE}
      }
      &[data-fallbacks='flip-block-inline'] {
        ${qt.FLIP_BLOCK_INLINE}
      }

      /* Managed fallback placements ('fallbackAnchors') — resolved-anchor tail re-pointing. */
      ${lf}
    }
  }
`,Yt={BACKDROP:d`
    [arc-popover]::backdrop {
      background: var(${X}-backdrop, transparent);
    }
  `,CONTENT:d`
    [arc-popover-content] {
      flex: var(${X}-flex, 1);
      position: relative;
      display: var(${X}-content-display, flex);
      flex-direction: var(${X}-content-flex-direction, column);
      gap: var(${X}-content-gap, 0);

      overflow: var(${X}-overflow, auto);
      overscroll-behavior: var(${X}-overscroll-behavior, contain);

      color: var(${X}-color, var(${gu}));
      padding: var(${X}-padding, var(${xc}));
      margin: var(${X}-margin, unset);
      background: var(${X}-content-background, var(${wc}));
      border-radius: calc(var(${bs}) - var(${$c}));
      border: var(${X}-border, none);

      height: var(${X}-height, auto);
      min-height: var(${X}-min-height, auto);
      max-height: var(${X}-max-height, 65vh);
      resize: var(${X}-resize, none);
    }
  `,HEADER:d`
    [arc-popover-header] {
      flex: var(${X}-header-flex, none);
      display: var(${X}-header-display, flex);
      justify-content: var(${X}-header-justify-content, space-between);
      align-items: var(${X}-header-align-items, baseline);
      gap: var(${X}-header-gap, var(${Aa}•gap));

      padding: var(${X}-header-padding,
        var(${Xt}•block)
        var(${Xt}•inline)
      );

      color: var(${X}-header-color, inherit);
      background: var(${X}-header-background, none);

      &[is-sticky] {
        position: sticky;
        z-index: var(${X}-header-z-index, 2);
        top: var(${X}-header-top, 0);
      }

      &:has([arc-popover-go-back]) {
        padding-inline-start: 0.875em;
      }

      &:has([arc-popover-dismiss]) {
        padding-inline-end: 0.875em;
      }

      &:where([has-divider]) {
        border-bottom: var(${X}-header-border-bottom, var(${$s}));
      }

      :where([arc-button]) {
        margin: var(${X}-header-button-margin, -0.5em);
      }
    }

    [arc-popover-header-slot='start'] {
      ${Aa}•slot•flex: 1;
      ${Aa}•slot•gap: 1em;
    }

    [arc-popover-header-slot='end'] {
      ${Aa}•slot•flex: none;
      ${Aa}•slot•gap: 1.5em;
    }

    [arc-popover-header-slot] {
      min-width: 0%;
      flex: var(${Aa}•slot•flex);
      display: var(${X}-header-display, flex);
      justify-content: var(${X}-header-justify-content, unset);
      align-items: var(${X}-header-align-items, baseline);
      gap: var(${X}-header-slot-gap, var(${Aa}•slot•gap));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    [arc-popover]:not([arc-popover-header]) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      --arc-button-z-index: var(${X}-dismiss-z-index, 2);
      inset: var(${X}-dismiss-inset, 0.5em 0.5em auto auto);
      margin: var(${X}-dismiss-margin, 0);
    }
  `,BODY:d`
    [arc-popover-body] {
      flex: var(${X}-body-flex, 1);
      display: var(${X}-body-display, block);
      flex-direction: var(${X}-body-flex-direction, unset);

      padding: var(${X}-body-padding,
        var(${ia}•block•start, var(${ia}•block))
        var(${ia}•inline)
        var(${ia}•block•end, var(${ia}•block))
        var(${ia}•inline)
      );
    }
  `,FOOTER:d`
    [arc-popover-footer] {
      flex: var(${X}-footer-flex, none);
      display: var(${X}-footer-display, flex);
      flex-direction: var(${X}-footer-flex-direction, row-reverse);
      justify-content: var(${X}-footer-justify-content, space-between);
      align-items: var(${X}-footer-align-items, center);
      gap: var(${X}-footer-gap, var(${yc}•gap));

      padding: var(${X}-footer-padding,
        var(${za}•block•start)
        var(${za}•inline)
        var(${za}•block•end)
        var(${za}•inline)
      );

      background: var(${X}-footer-background, none);
      color: var(${X}-footer-color, inherit);

      &[is-sticky] {
        position: sticky;
        z-index: var(${X}-footer-z-index, 2);
        bottom: var(${X}-footer-bottom, 0);
      }

      &:where([has-divider]) {
        border-top: var(${X}-footer-border-top, var(${$s}));
      }
    }
  `,TAIL:d`
    [arc-popover][has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${$a}•display, block);

      inset: auto;
      top: var(${Er}, auto);
      left: var(${_r}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${Uo});
      height: var(${Uo});
      border-radius: 0.125em;

      background: color-mix(in srgb,
        var(${Sc}) var(${lr}),
        var(${Cc}) clamp(0%, 100% - var(${lr}), 100%)
      );

      border: var(${$c}) solid color-mix(in srgb,
        var(${Ac}) var(${lr}),
        var(${zc}) clamp(0%, 100% - var(${lr}), 100%)
      );
    }
  `},uf=d`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    /* @note – this line-height magic number fixes asymmetrical outline/border issues with certain placements
    on low DPI displays. It's based on the default (--arc-line-height-standard) of 1.4 */
    line-height: var(${X}-line-height, 1.395);

    /* @note – this font-size is intended NOT to be altered; it is locked in as a reset (browser baseline)
    for various popover calculations. The effective popover font size is set on '[arc-popover-display]'. */
    font-size: initial;

    background: var(${X}-background, var(${kc}));
    border: var(${$c}) solid transparent;
    border-radius: var(${bs});
    box-shadow: var(${X}-shadow, var(${xe}•shadow));
    width: var(${X}-width, auto);
    height: var(${X}-height, auto);
    min-width: var(${X}-min-width, auto);
    min-height: var(${X}-min-height, auto);
    max-width: var(${X}-max-width, 100vw);
    max-height: var(${X}-max-height, 65vh);
  }

  /* @note – font-size control for header|footer|body padding calculations */
  [arc-popover-display] {
    display: contents;
    font-size: var(${X}-font-size, var(${ys}));
  }

  ${Yt.CONTENT}
  ${Yt.HEADER}
  ${Yt.BODY}
  ${Yt.FOOTER}
  ${Yt.TAIL}
  ${Yt.BACKDROP}
`,Wo={SETUP:tf,ANCHORS:df,VARIANTS:of,DENSITIES:nf,ELEMENT:uf},hf=d`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Iv}

  [arc-popover] {
    ${Wo.SETUP}
    ${Wo.VARIANTS}
    ${Wo.DENSITIES}
  }

  ${Wo.ANCHORS}
  ${Wo.ELEMENT}

  /* POPOVER anchoring mitigation ----------------------------------• */

  [arc-popover][is-floating] {
    position-area: none;
    position-try-fallbacks: none;
    margin: 0; /* zero out the gap on the Floating UI path to prevent doubled offsets */
  }

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    z-index: var(--arc-popover-z-index, 10000); /* default for floating-ui fallback */
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-behavior: allow-discrete;
    transition-property: display, opacity;

    @supports (overlay: auto) {
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,vu=(0,s.forwardRef)(({children:r,popover:e=Me.popover,anchorAt:a=Me.anchorAt,anchorName:t,anchorProps:o,alternateAnchorId:n,alternateAnchor:c,boundary:l=Me.boundary,tryFallbacks:u=Me.tryFallbacks,fallbackAnchors:h=Me.fallbackAnchors,density:p=Me.density,variant:f=Me.variant,scheme:g=Me.scheme,isInverse:v,hasTail:m,tailSize:y=Me.tailSize,offset:S=Me.offset,hidePopoverButton:k,headerSlot:w,showHeaderDivider:z,isHeaderSticky:x,showDismiss:_,dismissProps:P,showGoBack:R,goBackProps:U,headerSlotEnd:T,footerSlot:L,isFooterSticky:G,showFooterDivider:I,tag:H="div",contentTag:V="div",onToggle:er,...O},J)=>{const nr=(0,s.useRef)(null),sr=(0,s.useRef)(null),yr=(0,s.useRef)(null),q=(0,s.useRef)(er);(0,s.useImperativeHandle)(J,()=>sr.current);const[tr,Mr]=(0,s.useState)(!1),dr=(0,s.useMemo)(()=>g==="auto"?void 0:v?"inverse":g,[v,g]),br=(0,s.useCallback)(()=>{if(typeof document>"u")return nr.current??null;const Y=na(nr.current??sr.current)??document;return n?Y.getElementById(n):typeof c=="string"?Y.getElementById(c):c instanceof HTMLElement?c:typeof c=="function"?c():c&&typeof c=="object"&&"current"in c?c.current:nr.current??null},[c,n]),hr=u||l==="flip",pr=hr?Md(h):[],vr=pr.length?pr.map(Ld).join(", "):"flip-block, flip-inline, flip-block flip-inline",kr=!!m&&!jd.includes(a),K=Dd({canHaveTail:kr,tailSize:y}),or=(0,s.useMemo)(()=>{const Y=t||n||(typeof c=="string"?c:void 0)||o?.id||O.id||void 0;return rs(String(Y))},[t,o?.id,O.id,c,n]),C=(0,s.useMemo)(()=>({popoverTarget:O.id,"aria-haspopup":!0,"aria-controls":O.id,"aria-expanded":tr}),[O.id,tr]),$=(0,s.useMemo)(()=>({isOpen:tr,"aria-label":"Dismiss",...C,...P}),[P,tr,C]),N=(0,s.useMemo)(()=>({ref:nr,...C,...o,tooltip:tr?void 0:o?.tooltip,anchorName:or||""}),[o,C,or,tr]),ar=(0,s.useMemo)(()=>({"--js\u2022anchor":N?.anchorName||"","--js\u2022offset":Number(S)===0?"":`${S}px`,"--js\u2022tail":K.cssTailVar,"--js\u2022fallbacks":vr}),[N?.anchorName,S,K.cssTailVar,vr]);et(()=>{const Y=br();if(yr.current=Y,!!Y)return Bd(Y,N.anchorName)},[br,N.anchorName,tr]),(0,s.useEffect)(()=>{q.current=er},[er]),(0,s.useEffect)(()=>{const Y=sr.current;if(!Y)return;const cr=ir=>{const{newState:wr}=ir,Lr=wr==="open";Mr(Lr),Lr&&(yr.current=br()),q.current?.(ir)};return Y.addEventListener("toggle",cr),()=>Y.removeEventListener("toggle",cr)},[br]),Bg({anchorEl:yr.current,popoverEl:sr.current,anchorAt:a,tryFallbacks:hr,fallbackAnchors:pr,offsetPx:Number(S)||0,tailSizePx:K.floatingTailPx,hasTail:kr,isOpen:tr}),Vg({anchorEl:yr.current,popoverEl:sr.current,anchorAt:a,tryFallbacks:hr,fallbackAnchors:pr,hasTail:kr,isOpen:tr});const E=!!(w||R||T),F=!!L;return(0,i.jsxs)(i.Fragment,{children:[!((n||c)&&k)&&(0,i.jsx)(Go,{...N}),(0,i.jsxs)(H,{...O,ref:sr,"arc-popover":"","arc-scheme":dr,"anchor-at":a,"is-floating":Rd?"":void 0,"try-fallbacks":hr?"":void 0,popover:e,variant:f,density:p,"has-tail":kr?"":void 0,role:O.role??"dialog",style:{...O.style,...ar},children:[(0,i.jsxs)(V,{"arc-popover-content":"",children:[E&&(0,i.jsx)(Jv,{showDivider:z,showGoBack:R,goBackProps:U,headerSlotEnd:T,showDismiss:_,dismissProps:$,isSticky:x,children:w}),E||F?(0,i.jsx)(Qv,{children:r}):(0,i.jsx)(V,{"arc-popover-display":"",children:r}),F&&(0,i.jsx)(rf,{showDivider:I,isSticky:G,children:L})]}),_&&!E&&(0,i.jsx)(pu,{...$})]})]})});vu.displayName="ArcPopover";const xs=vu;xs.handlePopover=Od,xs.Button=Go;const ya=xs;Cr("ArcPopover",hf);const pf=d`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${b}•4) var(${b}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${b}•6);
      padding: var(${b}•4) var(${b}•8);
    }

    ${Bi}
    ${yd}
  }

}
`,gf=r=>(0,i.jsx)("ul",{...r,"data-element":"list"}),vf=r=>(0,i.jsx)("li",{...r,"data-element":"list-item"}),ff=({count:r,anchorId:e,overflowId:a,shouldShowOverflow:t,...o})=>(0,i.jsx)(qi,{title:`+${r}`,children:(0,i.jsx)(ya.Button,{...o,id:e,popoverTarget:a,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!t,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),mf=({children:r,id:e,size:a="sm",overflowCount:t=0,shouldShowOverflow:o=!1,anchorAt:n="bottom-end",tryFallbacks:c=!0,...l})=>{const u=Math.min(t,999),h=Or(e,"arc-avatar-overflow"),p=(0,s.useMemo)(()=>`${h}-anchor`,[h]),f=(0,s.useMemo)(()=>s.Children.toArray(r),[r]);return(0,i.jsxs)(i.Fragment,{children:[u>0&&(0,i.jsx)(ff,{count:u,anchorId:p,overflowId:h,shouldShowOverflow:o}),o&&u>0&&(0,i.jsx)(ya,{...l,scheme:"inverse","arc-avatar-overflow":"",id:h,anchorAt:n,tryFallbacks:c,alternateAnchorId:p,hidePopoverButton:!0,variant:"common","data-size":a,children:(0,i.jsx)(gf,{children:f.map((g,v)=>(0,i.jsx)(vf,{children:g},v))})})]})};Cr("ArcAvatarOverflow",pf);const fu=({fg:r,bg:e})=>d`
  &:has(>[data-color=mono-inverse]) {
    ${r}•high: var(--arc-color-fg-on-mono-inverse);
    ${e}•high: var(--arc-color-bg-mono-inverse);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-brand-stark);
    ${r}•low: var(--arc-color-fg-brand-stark);
    ${e}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${r}•high: var(--arc-color-fg-on-mono);
    ${e}•high: var(--arc-color-bg-mono);
    ${r}•low: var(--arc-color-fg-on-mono);
    ${e}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-blue-stark);
    ${r}•low: var(--arc-color-fg-blue-stark);
    ${e}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-color-bg-neutral-heavy);
    ${r}•low: var(--arc-color-fg-neutral-stark);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-purple-stark);
    ${r}•low: var(--arc-color-fg-purple-stark);
    ${e}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-green-stark);
    ${r}•low: var(--arc-color-fg-green-stark);
    ${e}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-yellow-stark);
    ${r}•low: var(--arc-color-fg-yellow-stark);
    ${e}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-red-stark);
    ${r}•low: var(--arc-color-fg-red-stark);
    ${e}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-maroon-stark);
    ${r}•low: var(--arc-color-fg-maroon-stark);
    ${e}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-mint-stark);
    ${r}•low: var(--arc-color-fg-mint-stark);
    ${e}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-orange-stark);
    ${r}•low: var(--arc-color-fg-orange-stark);
    ${e}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-gradient-ai-300);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${r}•high: var(--arc-color-mono-black);
    ${e}•high: var(--arc-color-alpha-white-80);
    ${r}•low: var(--arc-color-alpha-heavy);
    ${e}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${r}•high: var(--arc-color-mono-white);
    ${e}•high: var(--arc-color-alpha-black-70);
    ${r}•low: var(--arc-color-mono-white);
    ${e}•low: var(--arc-color-alpha-black-40);
  }
`,mu=({fg:r,bg:e})=>d`
  &:has(>[data-contrast=high]) {
    ${r}: var(${r}•high);
    ${e}: var(${e}•high);
  }

  &:has(>[data-contrast=low]) {
    ${r}: var(${r}•low);
    ${e}: var(${e}•low);
  }
`,mr=d`--arc•badge`,ks=d`${mr}•fg`,ws=d`${mr}•bg`,bf=fu({fg:ks,bg:ws}),$f=mu({fg:ks,bg:ws}),yf=d`
  &:has(>[data-size=lg]) {
    ${mr}•font•size: var(${b}•14);
    ${mr}•font•size•caps: var(${b}•12);
    ${mr}•size: var(${b}•24);
    ${mr}•min•size: var(${b}•30);
    ${mr}•padding•inline: var(${b}•8);
    ${mr}•border•radius: var(${b}•4);
    ${mr}•gap: var(${b}•4);
  }

  &:has(>[data-size=md]) {
    ${mr}•font•size: var(${b}•12);
    ${mr}•font•size•caps: var(${b}•10);
    ${mr}•size: var(${b}•20);
    ${mr}•min•size: var(${b}•24);
    ${mr}•padding•inline: var(${b}•6);
    ${mr}•border•radius: var(${b}•4);
    ${mr}•gap: var(${b}•4);
  }

  &:has(>[data-size=sm]) {
    ${mr}•font•size: var(${b}•10);
    ${mr}•font•size•caps: var(${b}•8);
    ${mr}•size: var(${b}•16);
    ${mr}•min•size: var(${b}•18);
    ${mr}•padding•inline: var(${b}•4);
    ${mr}•border•radius: var(${b}•4);
    ${mr}•gap: var(${b}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${mr}•font•size: 1em;
    ${mr}•font•size•text: 0.75em;
    ${mr}•font•size•caps: 0.625em;
    ${mr}•size: 1.25em;
    ${mr}•min•size: 1.5em;
    ${mr}•padding•inline: 0.375em;
    ${mr}•border•radius: 0.25em;
    ${mr}•gap: 0.25em;
  }
`,xf=d`
  &:has(>[data-layout=fill]) {
    ${mr}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${mr}•display: flex;
    ${mr}•min•width: var(${mr}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${mr}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${mr}•display: inline-flex;
    ${mr}•min•width: min-content;
  }
`,kf=d`
@layer arc-components {

  [arc-badge-wrapper] {
    ${bf}
    ${$f}
    ${yf}
    ${xf}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-height: 1lh;
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${mr}•gap);
    --arc-icon-text-svg-width: var(--arc-badge-svg-width, 1em);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${mr}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${mr}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${mr}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${mr}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${mr}•flex);
    display: var(${mr}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${mr}•size);
    padding-inline: var(${mr}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 1;

    color: var(--arc-badge-color, var(${ks}));
    background: var(--arc-badge-background, var(${ws}));
    border-radius: var(${mr}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${mr}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${mr}•font•size•caps);
    }
  }

}
`,bu=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],wf=["brand",...bu.filter(r=>r!=="brand")],Sf=["neutral",...bu.filter(r=>r!=="neutral")],Cf=$e(ht,wf),Af=$e(ht,Sf),zf=$e(ze,["inherit","lg","md","sm"]),Ef=$e(pa,["hug","fill"]),_f=["high","low"],Pf=$e(Ur,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),Tf={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},If=({children:r,icon:e,text:a,isFlipped:t,isFlexible:o,isUppercase:n,color:c,variant:l,size:u="inherit",layout:h="hug",contrast:p="high",...f})=>{const g=c??Tf[l??"brand-blue"],v=r||(0,i.jsx)(ue,{icon:e,text:a,isFlipped:t,layout:"gutter"}),m=h==="fill"&&o;return(0,i.jsx)("span",{...f,"arc-badge-wrapper":"",children:(0,i.jsx)("span",{"arc-badge":"","data-contrast":p,"data-color":g,"data-layout":h,"data-size":u,"data-is-flexible":m?"":void 0,"data-is-uppercase":n?"":void 0,children:v})})};Cr("ArcBadge",kf);const Yr=d`--arc•badge•count`,Ss=d`${Yr}•fg`,Cs=d`${Yr}•bg`,Rf=fu({fg:Ss,bg:Cs}),jf=mu({fg:Ss,bg:Cs}),Mf=d`
  &:has(>[data-size=lg]) {
    ${Yr}•font•size: var(${b}•14);
    ${Yr}•size: var(${b}•24);
    ${Yr}•padding•inline: var(${b}•4);
  }

  &:has(>[data-size=md]) {
    ${Yr}•font•size: var(${b}•12);
    ${Yr}•size: var(${b}•20);
    ${Yr}•padding•inline: var(${b}•4);
  }

  &:has(>[data-size=sm]) {
    ${Yr}•font•size: var(${b}•10);
    ${Yr}•size: var(${b}•16);
    ${Yr}•padding•inline: var(${b}•4);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${Yr}•font•size: 1em;
    ${Yr}•font•size•text: 0.75em;
    ${Yr}•size: 1.25em;
    ${Yr}•padding•inline: 0.25em;
  }
`,Lf=d`
  &:has(>[data-shape=square]) {
    ${Yr}•border•radius: var(${b}•4);
  }

  &:has(>[data-shape=circle]) {
    ${Yr}•border•radius: var(--arc-border-radius-pill);
  }
`,Df=d`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${Rf}
  ${jf}
  ${Mf}
  ${Lf}
}

/* CORE ------------------------------------------------------------• */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  font-size: var(--arc-badge-count-font-size, var(${Yr}•font•size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(${Yr}•size);
  min-width: var(${Yr}•size);
  padding-inline: var(${Yr}•padding•inline);

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(${Ss}));
  background: var(--arc-badge-count-background, var(${Cs}));
  border-radius: var(${Yr}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${Yr}•font•size•text, 1em);
  }
}

`,Of=$e(ze,["inherit","lg","md","sm"]),Bf=$e(Ur,["neutral","brand","critical","warning","success","inverse"]),Nf=["low","high"],Ff=$e(wo,["square","circle"]),Hf={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},Vf=({children:r,text:e,color:a,variant:t,contrast:o,size:n="inherit",shape:c="square",...l})=>{const u=r||(0,i.jsx)("span",{"data-element":"text",children:e}),h=a??Hf[t??"neutral"],p=t==="critical"?"high":o??"low";return(0,i.jsx)("span",{...l,"arc-badge-count-wrapper":"",children:(0,i.jsx)("span",{"arc-badge-count":"","data-color":h,"data-contrast":p,"data-shape":c,"data-size":n,children:u})})};Cr("ArcBadgeCount",Df);const sa=d`--arc•banner`,Le=d`${sa}•bg`,Pe=d`${sa}•fg`,ra=d`${sa}•columns`,Fa=d`${sa}•border`,As=d`${sa}•border•radius`,Xo=d`${sa}•padding`,kt=d`${sa}•min•height`,Ec=d`${sa}•body`,Zt=d`${Ec}•font•size`,_c=d`${Ec}•gap`,$u=d`${Ec}•flex•direction`,yu=d`${Ec}•min•width`,zs=d`${sa}•icon`,Jt=d`${zs}•font•size`,Es=d`${zs}•padding`,tt=d`${zs}•color`,xu=d`${sa}•action`,_s=d`${xu}•justify`,Ps=d`${xu}•gap`,qo=d`${sa}•column•gap`,Ts=d`${sa}•row•gap`,Gf=d`
  &:where([variant=ai]) {
    ${Pe}: var(--arc-color-fg-primary);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${Le}: var(--arc-banner-gradient-ai-50) padding-box, var(--arc-banner-gradient-ai-100) border-box;
    ${Fa}: var(--arc-border-width-sm) solid transparent;
  }

  &:where([variant=announcement]) {
    ${Pe}: var(--arc-color-fg-primary);
    ${tt}: var(--arc-color-fg-brand-mid);
    ${Le}: var(--arc-color-bg-blue-muted);
    ${Fa}: var(--arc-border-width-sm) solid var(--arc-color-border-blue-subtle);
  }

  &:where([variant=critical]) {
    ${Pe}: var(--arc-color-fg-primary);
    ${tt}: var(--arc-color-fg-critical-mid);
    ${Le}: var(--arc-color-bg-critical-muted);
    ${Fa}: var(--arc-border-width-sm) solid var(--arc-color-border-critical-subtle);
  }

  &:where([variant=info]) {
    ${Pe}: var(--arc-color-fg-primary);
    ${tt}: var(--arc-color-fg-info-mid);
    ${Le}: var(--arc-color-bg-info-muted);
    ${Fa}: var(--arc-border-width-sm) solid var(--arc-color-border-info-subtle);
  }

  &:where([variant=neutral]) {
    ${Pe}: var(--arc-color-fg-secondary);
    ${tt}: var(--arc-color-fg-secondary);
    ${Le}: var(--arc-color-alpha-muted);
    ${Fa}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &:where([variant=success]) {
    ${Pe}: var(--arc-color-fg-primary);
    ${tt}: var(--arc-color-fg-success-mid);
    ${Le}: var(--arc-color-bg-success-muted);
    ${Fa}: var(--arc-border-width-sm) solid var(--arc-color-border-success-subtle);
  }

  &:where([variant=warning]) {
    ${Pe}: var(--arc-color-fg-primary);
    ${tt}: var(--arc-color-fg-warning-mid);
    ${Le}: var(--arc-color-bg-warning-muted);
    ${Fa}: var(--arc-border-width-sm) solid var(--arc-color-border-warning-subtle);
  }
`,Uf=d`
  &:where([variant=ai]) {
    ${Pe}: var(--arc-color-fg-on-stark);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${Le}: var(--arc-banner-gradient-ai-300);
  }

  &:where([variant=announcement]) {
    ${Pe}: var(--arc-color-fg-on-stark);
    ${Le}: var(--arc-color-bg-blue-stark);
  }

  &:where([variant=critical]) {
    ${Pe}: var(--arc-color-fg-on-stark);
    ${Le}: var(--arc-color-bg-critical-mid);
  }

  &:where([variant=info]) {
    ${Pe}: var(--arc-color-fg-on-stark);
    ${Le}: var(--arc-color-bg-info-stark);
  }

  &:where([variant=neutral]) {
    ${Pe}: var(--arc-color-fg-on-stark);
    ${Le}: var(--arc-color-bg-neutral-stark);
  }

  &:where([variant=success]) {
    ${Pe}: var(--arc-color-fg-on-stark);
    ${Le}: var(--arc-color-bg-success-stark);
  }

  &:where([variant=warning]) {
    ${Pe}: var(--arc-color-fg-on-mid);
    ${Le}: var(--arc-color-bg-warning-mid);
  }
`,Kf=d`
  ${_c}: 0.375em;
  ${$u}: column;
  ${yu}: 7em;
  ${Ps}: 0.75em;
  ${qo}: 0.75em;
  ${Ts}: 0.75em;

  /* INSET SETUP ---------------------------------------------------• */

  &[layout=inset] {
    ${Gf}

    ${Xo}: 0 0.75em 0 1em;
    ${As}: var(--arc-border-radius-lg);
    ${_c}: 0.125em;
    ${Es}: 0.0625em;
    ${qo}: 0.625em;

    ${kt}: 5em;

    &:where([density=comfortable]) {
      &:not(:has([arc-banner-actions], [arc-banner-dismiss]))) {
        ${kt}: 4.75em;
      }
      &:has([arc-banner-heading]):not(:has([arc-banner-message])),
      &:has([arc-banner-message]):not(:has([arc-banner-heading])),
      &:not(:has([arc-banner-message], [arc-banner-heading])) {
        ${kt}: 3.5em;
        ${Ts}: 0.25em;

        &:has([arc-banner-actions]) {
          ${kt}: 3.75em;
        }
      }
    }

    &[action-placement=bottom] {
      ${_s}: flex-start;

      &[density=compact] {
        ${Xo}: 0 0.25em 0 0.5em;
      }
    }

    &[density=compact]:where([action-placement=inline]) {
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${Zt});
      }
    }
  }

  /* BLEED SETUP ---------------------------------------------------• */

  &[layout=bleed] {
    ${Uf}

    ${kt}: 4em;
    ${Xo}: 0 0.75em 0 1em;
    ${Fa}: none;
    ${As}: 0;
    ${_c}: 0.125em;
    ${qo}: 1em;
    ${_s}: flex-end;
    ${Es}: 0.125em;

    &[density=compact],
    &[alignment=center] {
      ${Jt}: 1.125em;
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${Zt});
      }
    }
  }

  /* DENSITIES -----------------------------------------------------• */

  &[density=comfortable] {
    ${Jt}: 1em;
    ${Zt}: 0.875em;
  }

  &[density=compact] {
    ${kt}: 2em;
    ${Xo}: 0 0.25em 0 0.5em;
    ${Zt}: 0.75em;
    ${Ps}: 0.5em;
    ${qo}: 0.5em;

    &[action-placement=inline] {
      ${Jt}: 1em;
    }

    &[action-placement=bottom] {
      ${Jt}: 0.875em;
    }

    [arc-banner-grid] {
      align-self: center;
    }
  }

  /* Inter-component communication • ArcIcon/ArcIconText/ArcLink ---• */

  &[layout=inset] {
    &[density=compact]:where([action-placement=inline]) {
      --arc-icon-text-icon-color: var(--arc-banner-icon-color, var(${tt}));
      --arc-icon-text-gap: 0.375em;
    }

    [arc-banner-icon] {
      --arc-icon-color: var(--arc-banner-icon-color, var(${tt}));
    }
  }

  &[layout=bleed] {
    &:where([density=compact], [alignment=center]) {
      --arc-icon-text-gap: 0.375em;
    }

    &[alignment=center] [arc-banner-grid] {
      --arc-icon-height: 100%;
      --arc-icon-max-height: 100%;
      --arc-icon-text-icon-size: var(${Jt});
    }
  }

  &[density=compact] [arc-banner-body] {
    --arc-icon-height: 100%;
    --arc-icon-max-height: 100%;
    --arc-icon-text-icon-size: 1.125em;
  }

`,Wf=d`
  &[layout=inset] {
    [arc-banner-grid] {
      margin-block: 0.75em;
    }

    &[density=compact] {
      &[action-placement=bottom] {
        [arc-banner-grid] {
          margin-block: 0.25em 0.625em;
        }
      }

      &:not([action-placement=bottom]) {
        [arc-banner-grid] {
          margin-block: 0.25em;
          line-height: normal;
        }

        [arc-banner-icon],
        [arc-banner-body] {
          align-self: center;
        }
      }
    }

    &[action-placement=bottom] {
      [arc-banner-actions] { grid-row: 2; }
      &:has([arc-banner-icon]) [arc-banner-actions] { grid-column: 2 / -1; }
      &:not(:has([arc-banner-icon])) [arc-banner-actions] { grid-column: 1 / -1; }
    }
  }
`,Xf=d`
  &[layout=bleed] {
    &[density=compact] {
      [arc-banner-grid] {
        margin-block: 0.25em;
      }
    }

    [arc-banner-grid] {
      margin-block: 0.5em;
      align-self: center;
      align-items: center;
    }

    &[alignment=center] {
      [arc-banner-grid] {
        font-size: var(${Zt});
        place-items: center;
        line-height: normal;
      }
    }
  }
`,qf=d`
  &:where([action-placement=inline]) {
    align-items: flex-start;

    &[density=compact] {
      ${ra}: 1fr auto auto;

      &:not(:has([arc-banner-actions])):has([arc-banner-dismiss]),
      &:not(:has([arc-banner-dismiss])):has([arc-banner-actions]) {
        ${ra}: 1fr auto;
      }
    }

    &[density=comfortable] {
      ${ra}: auto 1fr auto auto;

      &:has([arc-banner-icon]):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:has([arc-banner-icon]):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${ra}: auto 1fr auto;
      }

      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):has([arc-banner-dismiss]) {
        ${ra}: 1fr auto auto;
      }

      &:has([arc-banner-icon]):not(:has([arc-banner-actions])):not(:has([arc-banner-dismiss])) {
        ${ra}: auto 1fr;
      }
      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:not(:has([arc-banner-icon])):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${ra}: 1fr auto;
      }
    }

    &:not(:has([arc-banner-icon], [arc-banner-dismiss], [arc-banner-actions])) {
      ${ra}: 1fr;
    }
  }

  &:where([action-placement=bottom]) {
    ${ra}: auto 1fr auto;

    &:not(:has([arc-banner-icon])) {
      ${ra}: 1fr auto;
    }

    &:not(:has([arc-banner-dismiss])) {
      ${ra}: auto 1fr;
    }

    &:not(:has([arc-banner-icon])):not(:has([arc-banner-dismiss])) {
      ${ra}: 1fr;
    }
  }
`,Yf=d`
  width: var(--arc-banner-width, 100%);
  max-width: 100%;
  border: var(--arc-banner-border, var(${Fa}));
  background: var(--arc-banner-background, var(${Le}));
  border-radius: var(--arc-banner-border-radius, var(${As}));
  padding: var(--arc-banner-padding, var(${Xo}));
  min-height: var(--arc-banner-min-height, var(${kt}, auto));
  font-size: var(--arc-banner-font-size, initial);
  line-height: var(--arc-line-height-loose);
  overflow: var(--arc-banner-overflow, unset);

  &:not([hidden]) {
    display: flex;
    align-items: center;
  }

  ${qf}

  [arc-banner-grid] {
    color: var(--arc-banner-color, var(${Pe}));
    flex: 1;

    display: grid;
    align-items: baseline;
    grid-template-columns: var(${ra});
    column-gap: var(${qo});
    row-gap: var(${Ts});
  }

  [arc-banner-body] {
    color: var(--arc-banner-color, var(${Pe}));
    flex: 1;
    min-width: var(--arc-banner-body-min-width, var(${yu}));

    display: flex;
    flex-direction: var(${$u});
    gap: var(${_c});
  }

  [arc-banner-icon] {
    font-size: var(${Jt});
    padding-inline: var(${Es});
  }

  [arc-banner-heading],
  [arc-banner-message] {
    flex: none;
  }

  [arc-banner-heading],
  [arc-banner-message],
  [arc-banner-actions] {
    font-size: var(${Zt});
    margin: 0;
  }

  [arc-banner-actions] {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: var(--arc-banner-action-justify, var(${_s}));
    gap: var(--arc-banner-action-gap, var(${Ps}));
  }

`,Zf=d`
@layer arc-components {
  ${jv}

  [arc-banner] {
    /* CORE VARIABLES -----------------------------------------------• */
    ${Kf}

    /* CORE STYLES --------------------------------------------------• */
    ${Yf}

    /* INSET LAYOUT -------------------------------------------------• */
    ${Wf}

    /* BLEED LAYOUT -------------------------------------------------• */
    ${Xf}
  }

}
`,Jf=["comfortable","compact"],Qf=["inset","bleed"],rm=["inline","bottom"],em=["left","center"],am=[...Da],tm=[...Ur,"announcement"],om=$e(tm,["ai","announcement","critical","info","neutral","success","warning"]),ot={layout:"inset",variant:"neutral",density:"comfortable",actionPlacement:"inline",alignment:"left",showDismiss:!0},nm=r=>r==="critical"||r==="warning"?"alert":"status",cm=({children:r,id:e,icon:a,dismissProps:t,heading:o,density:n=ot.density,layout:c=ot.layout,actionPlacement:l=ot.actionPlacement,alignment:u=ot.alignment,actionSlot:h,showDismiss:p=ot.showDismiss,message:f,variant:g=ot.variant,onClose:v,...m})=>{const y=Or(e,"arc-banner"),S=Xi(a),k=u==="center",w=c==="bleed",z=c==="inset",x=n==="compact",_=l==="inline",P=!!S,U=z&&g==="ai"?"ai-200":void 0,T={variant:g,layout:c,density:n,alignment:u,"action-placement":l},L=()=>(0,i.jsx)(Ar,{icon:S,gradient:U}),G=()=>(0,i.jsx)(i.Fragment,{children:!!h&&(0,i.jsx)("span",{"arc-banner-actions":"",children:h})}),I=()=>(0,i.jsx)("div",{"arc-banner-dismiss":"",children:(0,i.jsx)(Br,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:z||w&&g==="warning"?"common":"alpha",hierarchy:"tertiary",shape:"square","aria-label":"Dismiss",size:x?"sm":"md",...t,onClick:er=>{t?.onClick?.(er),v?.()}})}),H=({showActions:er=!0})=>(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(ue,{icon:(0,i.jsx)(L,{}),children:[!!o&&(0,i.jsx)("strong",{children:o})," ",f," ",er&&h]})}),V=()=>(0,i.jsxs)(i.Fragment,{children:[P&&(0,i.jsx)("span",{"arc-banner-icon":"",children:(0,i.jsx)(L,{})}),(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("strong",{"arc-banner-heading":"",children:o}),f&&(0,i.jsx)("span",{"arc-banner-message":"",children:f})]})})]});return(0,i.jsx)("div",{role:nm(g??ot.variant),...m,...T,"arc-banner":"",id:y,children:(0,i.jsxs)("div",{"arc-banner-grid":"",children:[k?(0,i.jsx)(H,{}):(0,i.jsxs)(i.Fragment,{children:[x&&_?(0,i.jsx)(H,{showActions:!1}):(0,i.jsx)(V,{}),(0,i.jsx)(G,{})]}),p&&(0,i.jsx)(I,{})]})})};Cr("ArcBanner",Zf);const Ha=d`--arc•label`,Yo=d`${Ha}•cursor`,Zo=d`${Ha}•opacity`,im=d`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${Zo}: var(--arc-label-opacity, unset);
    ${Zo}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${Ha}•display: var(--arc-label-display, inline-flex);
    ${Ha}•gap: var(--arc-label-gap, var(${b}•8));
    ${Ha}•align•items: var(--arc-label-align-items, baseline);

    ${Yo}: var(--arc-label-cursor, pointer);
    ${Yo}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${Yo}: var(${Yo}•disabled);
      ${Zo}: var(${Zo}•disabled);
    }

    &[data-layout=fill] {
      ${Ha}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${Ha}•display);
    align-items: var(${Ha}•align•items);
    gap: var(${Ha}•gap);
    cursor: var(${Yo});
  }

}
`,sm=fr(pa,["hug","fill"]),wt=({layout:r,...e})=>(0,i.jsx)("label",{...e,"arc-label":"","data-layout":r});Cr("ArcLabel",im);const lm=d`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${Zo}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,St=r=>(0,i.jsx)("span",{...r,"arc-label-content":""});Cr("LabelContent",lm);const dm={checkbox:"checkbox",radio:"radio",switch:"radio"},Jo=({id:r,indeterminate:e,type:a,onChange:t,...o})=>{const n=a==="checkbox"&&!!e,c=(0,s.useRef)(null),l=Or(r,`arc-${a}`),u=h=>p=>{if(!(p?.target instanceof HTMLInputElement))return;const f={checked:p?.target.checked,indeterminate:p?.target?.indeterminate,name:p?.target?.name,value:o?.value};h?.(f,p)};return(0,s.useEffect)(()=>{c.current?.type==="checkbox"&&(c.current.indeterminate=!!e)},[e]),(0,i.jsx)("input",{...o,id:l,ref:c,type:dm[a],"arc-input-type":a,"aria-disabled":o?.disabled||void 0,"data-is-disabled":o?.disabled||void 0,"data-is-checked":o?.checked||void 0,"data-is-indeterminate":n||void 0,onChange:u(t)})},um=d`
@layer arc-components {

  [arc-input-mask] {
    ${W}•border•width: var(--arc-border-width-sm);
    ${W}•border: var(${W}•border•width) solid var(${W}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${W}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${W}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${W}•outline: var(${W}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 1lh;
  }

  [arc-input-mask] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(${W}•width);
    height: var(${W}•height);
    opacity: var(${W}•opacity, var(--arc-alpha-100));

    color: var(${W}•color, transparent);
    background: var(${W}•background);
    border: var(${W}•border);
    border-radius: var(${W}•border•radius);
    translate: var(${W}•translate, unset);

    outline: var(${W}•outline, none);
    outline-offset: var(${W}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${W}•border•width) * -1);
      cursor: var(${W}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${W}•z•index, unset);
    }
  }

}
`,Pc=({type:r,...e})=>(0,i.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,i.jsx)("span",{...e,"arc-input-mask":r})});Cr("ArcBooleanInputMask",um);const he=d`--arc•checkbox`,hm=d`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${he}•font•size: 1em;
      ${he}•icon•size: 0.625em;
      ${he}•size: 1.125em;
      ${he}•gap: 0.5em;
    }

    &[data-size=md] {
      ${he}•font•size: var(${b}•14);
      ${he}•icon•size: var(${b}•10);
      ${he}•size: var(${b}•18);
      ${he}•gap: var(${b}•8);
    }

    &[data-size=sm] {
      ${he}•font•size: var(${b}•12);
      ${he}•icon•size: var(${b}•10);
      ${he}•size: var(${b}•16);
      ${he}•gap: var(${b}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${W}•border•radius: var(${b}•4);
    ${W}•size: var(${he}•size);
    ${W}•icon•size: var(${he}•icon•size);
    ${W}•width: var(${he}•size);
    ${W}•height: var(${he}•size);
    ${W}•translate: 0 var(${b}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${he}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${he}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${W}•color: transparent;
      ${W}•border•color: var(--arc-color-border-stark);
      ${W}•background: transparent;

      &:hover {
        ${W}•border•color: var(--arc-color-border-theme-heavy);
        ${W}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${W}•border•color: var(--arc-color-border-disabled);
        ${W}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${W}•color: var(--arc-color-fg-on-theme-heavy);
        ${W}•border•color: transparent;
        ${W}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${W}•color: var(--arc-color-fg-on-theme-stark);
          ${W}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${W}•color: var(--arc-color-fg-on-theme-mid);
          ${W}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${W}•color: var(--arc-color-fg-theme-heavy);
        ${W}•border•color: var(--arc-color-border-theme-heavy);
        ${W}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${W}•color: var(--arc-color-fg-theme-stark);
          ${W}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${W}•color: var(--arc-color-fg-theme-subtle);
          ${W}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,pm=fr(pa,["hug","fill"]),gm=fr(ze,["inherit","md","sm"]),vm=fr(Ur,["primary","secondary"]),ku=({children:r,label:e,layout:a,size:t="md",variant:o="primary",useMask:n=!0,...c})=>{const{className:l,title:u,...h}=c,p={className:l,title:u},f=r??e,g=(0,i.jsx)(Jo,{...h,type:"checkbox"}),v=n&&(0,i.jsxs)(Pc,{type:"checkbox",children:[g,(0,i.jsx)(Ar,{icon:h?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),m=!!f&&(0,i.jsxs)(wt,{layout:a,children:[v||g,(0,i.jsx)(St,{children:f})]});return(0,i.jsx)("span",{...p,"arc-checkbox":"","data-size":t,"data-variant":o,children:m||v||g})};Cr("ArcCheckbox",hm);const Ct=()=>{},At=d`--arc•cb`,Se=d`${At}•o`,Is=d`${Se}•icon`,Rs=d`${Se}•text`,wu=d`${At}•fs`,Su=d`${At}•br`,js=d`${At}•di`,Cu=d`${At}•pd`,Au=d`${At}•gp`,zu=d`${At}•bg`,Qo=d`${Se}•fg`,Tc=d`${Se}•bg`,Eu=d`${Se}•bc`,Ms=d`${Se}•bw`,Ic=d`${Se}•br`,_u=d`${Se}•fw`,Pu=d`${Se}•ol`,Tu=d`${Se}•ow`,Iu=d`${Se}•oo`,Ru=d`${Se}•lh`,Rc={BAR:d`
    ${wu}: var(${b}•14);
    ${Su}: var(${b}•8);

    &:is([data-layout=hug], :not([data-layout])) { /** @default */
      ${js}: inline-flex;
    }

    &[data-layout=fill] {
      ${js}: flex;
    }
  `,OPTIONS:d`
    ${Qo}: var(--arc-color-fg-secondary);
    ${Tc}: transparent;
    ${Eu}: transparent;
    ${Ms}: var(${b}•1);
    ${Ru}: calc(var(${Se}•sz) - var(${Ms}) * 2);
    ${Tu}: var(${b}•2);
    ${Iu}: 0;
  `,SOLID:d`
    ${zu}: transparent;
    ${Cu}: 0;
    ${Au}: var(${b}•2);

    ${Ic}: var(${b}•8);

    /* Solid sizes */
    &:is([data-size=lg], :not([data-size])) {
      ${Se}•sz: var(${b}•40);
      ${Is}•pd: var(${b}•8);
      ${Rs}•pd: var(${b}•12);
    }

    &[data-size=md] {
      ${Se}•sz: var(${b}•32);
      ${Is}•pd: var(${b}•6);
      ${Rs}•pd: var(${b}•8);
    }
  `,SOLID_OPTION_STATES:d`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${Qo}: var(--arc-color-fg-on-hover-default);
        ${Tc}: var(--arc-color-bg-hover-default);
      }
    }

    &:has(:checked) {
      ${Qo}: var(--arc-color-fg-primary);
      ${Tc}: var(--arc-color-bg-secondary);
      ${_u}: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${Qo}: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${Pu}: var(${Tu}) solid var(--arc-color-border-focus);
    }
  `},fm=d`
@layer arc-components {

  [arc-checkbox-bar] {
    ${Rc.BAR}
    ${Rc.OPTIONS}

    /* Inter-Component Communication -------------------------------• */
    --arc-label-opacity-disabled: 1; /* intrinsic disabled opacity not needed here; letting tokens handle it */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    ${Rc.SOLID}

    [arc-checkbox-bar-option] {
      ${Rc.SOLID_OPTION_STATES}
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    border-radius: var(${Ic});
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${wu}));
    display: var(${js});
    gap: var(${Au});
    background: var(${zu});
    border-radius: var(${Su});
    padding: var(${Cu});
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${Ic});
      outline: var(${Pu}, none);
      outline-offset: var(${Iu});
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${Ru});
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${Se}•sz);
      min-width: var(${Se}•sz);

      border-radius: var(${Ic});
      border: var(${Ms}) solid var(${Eu});
      background: var(${Tc});
      color: var(${Qo});
      font-weight: var(${_u}, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${Rs}•pd);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${Is}•pd);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,mm=fr(pa,["hug","fill"]),bm=fr(ze,["lg","md"]),$m=fr(Ur,["solid"]),ju=({children:r,label:e,icon:a,...t})=>{const o=r||(0,i.jsx)(ue,{icon:a,text:e});return(0,i.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,i.jsx)(ku,{...t,layout:"fill",useMask:!1,label:o,onChange:t.onChange??Ct})})},ym=({children:r,size:e="lg",layout:a="hug",variant:t="solid",name:o,options:n,values:c,isDisabled:l,onChange:u,...h})=>{const p=Or(o,"arc-checkbox-bar");return(0,i.jsx)("ul",{...h,"arc-checkbox-bar":"","data-size":e,"data-layout":a,"data-variant":t,"is-disabled":l?"":void 0,role:"group",children:n?n.map(({hidden:f,onChange:g,value:v,...m})=>f||v==null||v===""?null:(0,s.createElement)(ju,{...m,key:String(v),name:p,value:v,checked:c?.includes(v)??!1,disabled:l||m.disabled,onChange:g??u??Ct})):r})};Cr("ArcCheckboxBar",fm);const pe=r=>d`max(${r}px, ${r/16}em)`,Ea=d`--arc•chip`,rn=d`${Ea}•fg`,en=d`${Ea}•bg`,an=d`${Ea}•border`,jc=d`${Ea}•height`,Mc=d`${Ea}•padding`,Lc=d`${Ea}•leading•edge`,Dc=d`${Ea}•dismiss•edge`,Ls=d`${Ea}•avatar•gap`,Oc=d`${Ea}•icon•gap`,Bc=d`${Ea}•dismiss•gap`,xm=d`:where(:hover, [data-simulate=hover], :has([data-simulate=hover]))`,km=d`:not([is-selected], [is-disabled])`,wm=d`
  ${rn}: var(--arc-chip-color, var(--arc-color-fg-primary));
  ${en}: var(--arc-chip-background, var(--arc-color-bg-primary));
  ${an}: var(--arc-chip-border-color, var(--arc-color-border-mid));
  ${Ls}: ${pe(6)};
`,Sm=d`
  &[data-size=sm] {
    ${jc}: ${pe(24)};
    ${Mc}: ${pe(8)};
    ${Lc}: ${pe(1)};
    ${Dc}: 0;
    ${Oc}: ${pe(4)};
    ${Bc}: 0;
  }

  &[data-size=md] {
    ${jc}: ${pe(32)};
    ${Mc}: ${pe(12)};
    ${Lc}: ${pe(3)};
    ${Dc}: ${pe(3)};
    ${Oc}: ${pe(8)};
    ${Bc}: ${pe(2)};
  }

  &[data-size=lg] {
    ${jc}: ${pe(40)};
    ${Mc}: ${pe(16)};
    ${Lc}: ${pe(3)};
    ${Dc}: ${pe(7)};
    ${Oc}: ${pe(8)};
    ${Bc}: ${pe(4)};

    &[has-dismiss] {
      ${Ls}: ${pe(8)};
    }
  }
`,Cm=d`
  /* WRAPPER — visible pill ----------------------------------------• */
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  gap: var(${Bc});
  height: var(${jc});
  border-radius: var(--arc-border-radius-pill);
  border: var(--arc-border-width-sm) solid var(${an});
  background: var(${en});
  color: var(${rn});
  font-family: var(--arc-font-family-body);
  font-size: var(--arc-chip-font-size, initial);
  transition:
    background-color 200ms ease-out,
    border-color 200ms ease-out,
    color 200ms ease-out;

  &:has([arc-chip-body]:focus-visible) {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: var(--arc-border-width-md);

    [arc-chip-body]:focus-visible { outline: none; }
  }
`,Am=d`
  /* BODY — content surface + inner slots --------------------------• */
  [arc-chip-body] {
    flex: 1;
    appearance: none;
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding: 0 var(${Mc});
    margin: 0;
    background: transparent;
    border: none;

    /* Asymmetric left padding when an avatar is present — matches the avatar's vertical inset. */
    &:has([arc-avatar-text]) {
      padding-inline-start: var(${Lc});
    }

    /* Inter-Component Communication • ArcAvatarText ------------• */
    --arc-avatar-text-gap: var(${Ls});

    /* Inter-Component Communication • ArcIconText --------------• */
    --arc-icon-text-gap: var(${Oc});
    --arc-icon-text-line-height: var(--arc-line-height-tight);
  }

  /* When a dismiss sibling is present, pull body flush right and reserve outer space for it. */
  &[has-dismiss] {
    padding-inline-end: var(${Dc});
    [arc-chip-body] { padding-inline-end: 0; }
  }
`,zm=d`
  /* DISMISS — sibling of body -------------------------------------• */
  [data-slot=dismiss]:where(:hover, [data-simulate=hover]) {
    background: var(--arc-color-alpha-subtle);
  }
`,Em=d`
  /* INTERACTIVE — only set on interactive wrappers ----------------• */
  &[is-interactive] {
    cursor: pointer;
    user-select: none;

    [arc-chip-body] {
      color: inherit;
      cursor: inherit;
    }

    &${xm}${km} {
      ${en}: var(--arc-color-bg-hover-default);
      ${an}: var(--arc-color-border-hover);
    }
  }

  /* SELECTED ------------------------------------------------------• */
  &[is-selected] {
    ${en}: var(--arc-color-bg-blue-muted);
    ${an}: var(--arc-color-border-selected);
    ${rn}: var(--arc-color-fg-brand-heavy);
  }

  /* DISABLED ------------------------------------------------------• */
  &[is-disabled] {
    ${en}: transparent;
    ${an}: var(--arc-color-border-disabled);
    ${rn}: var(--arc-color-fg-disabled);
    cursor: not-allowed;
  }
`,_m=d`
  &:where([data-variant=ai]) {
    background: var(--arc-gradient-ai-50);

    &[is-selected] {
      background: var(--arc-gradient-ai-100) padding-box, var(--arc-gradient-ai-200) border-box;
      border-color: transparent;
      ${rn}: var(--arc-color-fg-primary);
    }
  }
`,Pm=d`
@layer arc-components {

  [arc-chip]:not([hidden]) {
    /* SETUP --------------------------------------------------------• */
    ${wm}

    /* SIZES --------------------------------------------------------• */
    ${Sm}

    /* CORE STYLES --------------------------------------------------• */
    ${Cm}

    /* BODY ---------------------------------------------------------• */
    ${Am}

    /* DISMISS ------------------------------------------------------• */
    ${zm}

    /* STATES -------------------------------------------------------• */
    ${Em}

    /* VARIANTS -----------------------------------------------------• */
    ${_m}
  }

}
`,Tm=fr(Ur,["common","ai"]),Im=$e(ze,["sm","md","lg"]),Rm={sm:"xs",md:"sm",lg:"md"},jm={sm:"sm",md:"md",lg:"md"},Ds={variant:"common",size:"md"},Mm=({children:r,text:e,variant:a=Ds.variant,size:t=Ds.size,isSelected:o,isDisabled:n,isStrong:c,icon:l,isFlipped:u,avatar:h,onClick:p,onDismiss:f,dismissProps:g,...v})=>{const m=p!==void 0||o!==void 0,y=m?"button":"span",S=r||e,k=!!h,w=!!l;return(0,i.jsxs)("span",{...v,"arc-chip":"","data-size":t,"data-variant":a,"is-selected":o?"":void 0,"is-disabled":n?"":void 0,"is-interactive":m?"":void 0,"has-dismiss":f?"":void 0,children:[(0,i.jsx)(y,{"arc-chip-body":"",...m&&{type:"button",disabled:n,"aria-pressed":o,"aria-disabled":n||void 0,onClick:n?void 0:p},children:k?(0,i.jsx)(ec,{avatar:{...h,isActive:!n},isStrong:c,size:Rm[t],overflow:"truncate",children:S}):(w||S)&&(0,i.jsx)(ue,{icon:l,isFlipped:u,isStrong:c,size:jm[t],overflow:"truncate",children:S})}),f&&(0,i.jsx)(Br,{"aria-label":typeof e=="string"?`Remove ${e}`:"Dismiss",icon:"fa-regular fa-xmark",...g,layout:"icon",hierarchy:"tertiary",shape:"round",size:"sm","data-slot":"dismiss",disabled:n,onClick:z=>{g?.onClick?.(z),f()}})]})};Cr("ArcChip",Pm);const Lm=["normal","simple","add","edit"],Dm=["solid","gradient"],Om=["swatch","gradient-stop","gradient"],Bm=["standalone","embedded"],Nc=["gradient-field","gradient-stops","angle-slider","angle-presets"],Os=["color-field","eye-dropper","hue-slider","alpha-slider","alpha-input","hex-input","palettes"],Mu=["eye-dropper","alpha-slider","hex-input","palettes"],Nm=[...Os,...Nc],Lu=r=>r.kind==="gradient",Du=r=>r.activePanel==="solid",Fm=r=>r.activePanel==="gradient",Ce={colorPicker:"Color Picker",heading:"Color",panelSolid:"Solid",panelGradient:"Gradient",colorField:"Color Saturation and Value",saturation:"Saturation",value:"Value",colorFieldReadout:(r,e)=>`Saturation ${r}%. Value ${e}%.`,hue:"Hue",hueValue:r=>`Hue ${r}\xB0`,opacity:"Opacity",opacityValue:r=>`Opacity ${r}%`,hex:"Hex",hexInvalid:"Please enter six hex digits \u2192 A1B2C3",hexRgbOnly:"Use six hex digits (RGB only). Opacity is not available.",hexExpandHint:r=>`Please enter six hex digits \u2192 ${r}.`,hexApplyAlphaHint:(r,e)=>`Change to \u2192 #${r} at ${e}% opacity?`,applyExpandedHex:"Apply expanded six-digit hex",applyExpandedHexValue:r=>`Apply expanded hex ${r}`,applyHexWithAlpha:(r,e)=>`Apply #${r} and ${e}% opacity`,eyeDropper:"Dropper",eyeDropperTooltip:"Pick a color",colorPalette:"Color palette",addSwatch:"Add Swatch",addCurrentColor:"Add Current Color",saveColor:"Save Color",save:"Save",cancel:"Cancel",done:"Done",removeColor:"Remove color",removeGradient:"Remove gradient",gradient:"Gradient",gradientStops:"Stops",stopPosition:r=>`Stop ${r} position`,addColorStop:"Add Color Stop",editColorStop:"Edit Color Stop",insertColorStop:"Insert Color Stop",removeColorStop:"Remove Color Stop",distributeColorStops:"Distribute Color Stops",angle:"Angle",gradientAngle:"Gradient angle",gradientAngleOption:r=>`${r}\xB0`},Fc=r=>r?{...Ce,...r}:Ce,Bs=1e-10,Hc=1e-6,tn=1e-4,Ou=2,Z=(r,e,a)=>Math.min(a,Math.max(e,r)),xa=(r,e)=>{const a=10**e;return Math.round(r*a)/a},Bu=(r,e=Hc)=>Math.abs(r)<e?0:Math.abs(1-r)<e?1:r,Hm=r=>{if(!Number.isFinite(r)||r<=0)return Ou;let e=r,a=0;for(;a<12;){const t=Math.round(e);if(Math.abs(e-t)<Bs)return a;e*=10,a+=1}return Ou},Vm=(r,e,a,t)=>[{test:e<0&&a>=0,value:(r<0?Math.abs(e):a)>0?xa(r/(r<0?Math.abs(e):a)*100,t):0},{test:a<0,value:e<0?xa(r/Math.abs(e)*100,t):0},{test:e>=0,value:a>0?xa(r/a*100,t):0}].find(({test:o})=>o)?.value??0,Ns=({value:r,min:e=0,max:a=100,step:t=1,precision:o})=>{const n=Number(e),c=Number(a),l=Math.min(n,c),u=Math.max(n,c),h=Number(t),p=Number(r),f=u-l,g=Number.isFinite(h)&&h>0&&f>0?h/f*100:0,v=o??Hm(g),m=Z(p,l,u),y=f===0?0:(m-l)/f,S=xa(y*100,v),k=xa(100-S,v),w=Vm(m,l,u,v);return{toValue:S,fromValue:k,pctSigned:w}},on=r=>parseInt(r,16),ge=r=>Z(xa(r,0),0,255),Vc=r=>xa((r%360+360)%360,2),Nu=(r,e)=>Bu(xa(Z(r,0,1),e)),De=r=>{const e=(r.h%360+360)%360,a=Z(r.s,0,1),t=Z(r.v,0,1),o=Z(r.a,0,1),n=t*a,c=n*(1-Math.abs(e/60%2-1)),l=t-n;let u=0,h=0,p=0;return e<60?[u,h,p]=[n,c,0]:e<120?[u,h,p]=[c,n,0]:e<180?[u,h,p]=[0,n,c]:e<240?[u,h,p]=[0,c,n]:e<300?[u,h,p]=[c,0,n]:[u,h,p]=[n,0,c],{r:(u+l)*255,g:(h+l)*255,b:(p+l)*255,a:o}},nn=(r,e)=>{const a=Z(r.r,0,255)/255,t=Z(r.g,0,255)/255,o=Z(r.b,0,255)/255,n=Math.max(a,t,o),c=Math.min(a,t,o),l=n-c,u=n===0?0:l/n,h=n;let p=e??0;return l>Bs?(n===a?p=60*((t-o)/l%6):n===t?p=60*((o-a)/l+2):p=60*((a-t)/l+4),p<0&&(p+=360)):p=(p%360+360)%360,{h:p,s:u,v:h,a:Z(r.a,0,1)}},Fu=r=>{const e=(r.h%360+360)%360,{s:a}=r,{l:t}=r,o=(1-Math.abs(2*t-1))*a,n=o*(1-Math.abs(e/60%2-1)),c=t-o/2;let l=0,u=0,h=0;return e<60?[l,u,h]=[o,n,0]:e<120?[l,u,h]=[n,o,0]:e<180?[l,u,h]=[0,o,n]:e<240?[l,u,h]=[0,n,o]:e<300?[l,u,h]=[n,0,o]:[l,u,h]=[o,0,n],{r:(l+c)*255,g:(u+c)*255,b:(h+c)*255,a:r.a}},Hu=r=>{const e=r.r/255,a=r.g/255,t=r.b/255,o=Math.max(e,a,t),n=Math.min(e,a,t),c=o-n;let l=0;c!==0&&(o===e?l=60*((a-t)/c%6):o===a?l=60*((t-e)/c+2):l=60*((e-a)/c+4)),l<0&&(l+=360);const u=(o+n)/2,h=c===0?0:c/(1-Math.abs(2*u-1));return{h:l,s:h,l:u,a:r.a}},Vu=r=>{const e=zt(r.r),a=zt(r.g),t=zt(r.b),o=.4122214708*e+.5363325363*a+.0514459929*t,n=.2119034982*e+.6806995451*a+.1073969566*t,c=.0883024619*e+.2817188376*a+.6299787005*t,l=Math.cbrt(o),u=Math.cbrt(n),h=Math.cbrt(c),p=.2104542553*l+.793617785*u-.0040720468*h,f=1.9779984951*l-2.428592205*u+.4505937099*h,g=.0259040371*l+.7827717662*u-.808675766*h,v=Math.sqrt(f*f+g*g);let m=Math.atan2(g,f)*180/Math.PI;return m<0&&(m+=360),{L:Z(p,0,1),C:v,h:m,a:Z(r.a,0,1)}},Gu=r=>{const e=Z(r.L,0,1),a=r.h*Math.PI/180,t=r.C*Math.cos(a),o=r.C*Math.sin(a),n=e+.3963377774*t+.2158037573*o,c=e-.1055613458*t-.0638541728*o,l=e-.0894841775*t-1.291485548*o,u=n*n*n,h=c*c*c,p=l*l*l,f=4.0767416621*u-3.3077115913*h+.2309699292*p,g=-1.2684380046*u+2.6097574011*h-.3413193965*p,v=-.0041960863*u-.7034186147*h+1.707614701*p,m=y=>{const S=y<=.0031308?y*12.92:1.055*y**.4166666666666667-.055;return Math.round(Z(S,0,1)*255)};return{r:m(f),g:m(g),b:m(v),a:Z(r.a,0,1)}},zt=r=>{const e=ge(r)/255;return e<=.04045?e/12.92:((e+.055)/1.055)**2.4},Uu=r=>{const e=zt(r.r),a=zt(r.g),t=zt(r.b);return .2126*e+.7152*a+.0722*t},Gc=(r,e)=>{const a=r.a+e.a*(1-r.a);if(a<=0)return{r:0,g:0,b:0,a:0};const t=r.a/a,o=e.a*(1-r.a)/a;return{r:ge(r.r*t+e.r*o),g:ge(r.g*t+e.g*o),b:ge(r.b*t+e.b*o),a:Nu(a,2)}},cn=(r,e,a,t)=>{const o=t?t(r):r,n=t?t(e):e;return Math.abs(o-n)<=a},Qt=(r,e,a)=>cn(r,e,a,Math.round),Fs=(r,e,a)=>cn(r,e,a),Uc=(r,e)=>!e||!r?!1:Qt(r.r,e.r,1)&&Qt(r.g,e.g,1)&&Qt(r.b,e.b,1)&&Fs(r.a,e.a,1/255+Hc),Hs=(r,e)=>!r||!e?!1:ge(r.r)===ge(e.r)&&ge(r.g)===ge(e.g)&&ge(r.b)===ge(e.b)&&Math.abs(r.a-e.a)<Hc,Vs=(r,e)=>!e||!r?!1:Qt(r.r,e.r,3)&&Qt(r.g,e.g,3)&&Qt(r.b,e.b,3)&&Fs(r.a,e.a,.02),sn=(r,e)=>cn(r.h,e.h,tn)&&cn(r.s,e.s,tn)&&cn(r.v,e.v,tn)&&Fs(r.a,e.a,tn),ro=r=>String(Math.round(Z(r,0,1)*100)),Ku=r=>{const e=r.trim();if(!e)return null;if(e.endsWith("%")){const t=Number(e.slice(0,-1).trim());return Number.isFinite(t)?Z(t/100,0,1):null}if(e.startsWith(".")||e.includes(".")){const t=Number(e);return Number.isFinite(t)?Z(t,0,1):null}const a=Number(e);return Number.isFinite(a)?Z(a/100,0,1):null},Kc=r=>Z(Number(r.toFixed(2)),0,1).toString(),Gm=/^[0-9a-f]+$/i,Um=500,eo=new Map,Gs=r=>({...r}),Km=(r,e)=>{if(eo.size>=Um){const a=eo.keys().next().value;a&&eo.delete(a)}eo.set(r,e?Gs(e):null)},Us=r=>r.split("").map(e=>e+e).join(""),Ks=r=>r.length===3?Us(r):r,Va=r=>r.replace(/#/g,"").trim(),Wu=r=>{const e=r.trim().toLowerCase().replace(/^#/,"");if(![3,4,6,8].includes(e.length))return null;const a=e.length<=4?Us(e):e;if(!Gm.test(a))return null;const t=on(a.slice(0,2)),o=on(a.slice(2,4)),n=on(a.slice(4,6)),c=a.length===8?on(a.slice(6,8))/255:1;return[t,o,n,c].some(l=>Number.isNaN(l))?null:{r:t,g:o,b:n,a:Z(c,0,1)}},_a=r=>{const e=Number(r.trim());return Number.isFinite(e)?e:null},Ws=r=>{const e=r.trim();if(e.endsWith("%")){const t=_a(e.slice(0,-1));return t==null?null:Z(t/100*255,0,255)}const a=_a(e);return a==null?null:Z(a,0,255)},Xs=r=>{const e=r.trim();if(e.endsWith("%")){const t=_a(e.slice(0,-1));return t==null?null:Z(t/100,0,1)}const a=_a(e);return a==null?null:Z(a,0,1)},qs=(r,e)=>{const t=r.trim().toLowerCase().match(e);if(!t)return null;const o=t[1].trim(),[n,c]=o.split("/").map(h=>h.trim()),l=n.includes(",")?n.split(",").map(h=>h.trim()):n.split(/\s+/).filter(Boolean),u=c&&c.length?c:null;return{channels:l,alphaPart:u}},Wm=r=>{const e=qs(r,/^rgba?\((.*)\)$/);if(!e)return null;let{channels:a,alphaPart:t}=e;if(a.length===4&&t===null&&(t=a[3]??null,a=a.slice(0,3)),a.length!==3)return null;const o=Ws(a[0]),n=Ws(a[1]),c=Ws(a[2]);if(o==null||n==null||c==null)return null;let l=1;if(t){const u=Xs(t);if(u==null)return null;l=u}return{r:o,g:n,b:c,a:l}},Xm=r=>{const e=qs(r,/^hsla?\((.*)\)$/);if(!e)return null;let{channels:a,alphaPart:t}=e;if(a.length===4&&t===null&&(t=a[3]??null,a=a.slice(0,3)),a.length!==3)return null;const o=p=>Number(p.replace("deg","").trim()),n=p=>{if(!p.endsWith("%"))return null;const f=_a(p.slice(0,-1));return f==null?null:f/100},c=o(a[0]),l=n(a[1]),u=n(a[2]);if(!Number.isFinite(c)||l==null||u==null)return null;let h=1;if(t){const p=Xs(t);if(p==null)return null;h=p}return Fu({h:c,s:l,l:u,a:h})},qm=r=>{const e=qs(r,/^oklch\((.*)\)$/);if(!e)return null;const{channels:a,alphaPart:t}=e;if(a.length!==3)return null;const o=p=>{const f=p.trim();if(f.endsWith("%")){const v=_a(f.slice(0,-1));return v!=null?Z(v/100,0,1):null}const g=_a(f);return g!=null?Z(g,0,1):null},n=p=>{const f=p.trim();if(f.endsWith("%")){const v=_a(f.slice(0,-1));return v!=null&&v>=0?v/100*.4:null}const g=_a(f);return g!=null&&g>=0?g:null},c=o(a[0]),l=n(a[1]),u=_a(a[2].trim());if(c==null||l==null||u==null||!Number.isFinite(u))return null;let h=1;if(t){const p=Xs(t);if(p==null)return null;h=p}return Gu({L:c,C:l,h:u,a:h})},Kr=r=>{if(!r||typeof r!="string")return null;const e=r.toLowerCase().trim();if(eo.has(e)){const t=eo.get(e);return t?Gs(t):null}let a=null;return e.startsWith("#")?a=Wu(e):e.startsWith("rgb")?a=Wm(e):e.startsWith("hsl")?a=Xm(e):e.startsWith("oklch")&&(a=qm(e)),Km(e,a),a?Gs(a):null},Xu=(r,e,a)=>{const t=Kr(`#${r}`);return t?a?.shouldApplyParsedAlpha===!0&&(r.length===4||r.length===8)?t:{...t,a:e.a}:null},qu=r=>{if(!r||typeof r!="string")return!1;const e=r.trim().toLowerCase();return/^#?[0-9A-F-a-f]{3,4}$/.test(e)||/^#?[0-9A-F-a-f]{6}([0-9A-F-a-f]{2})?$/.test(e)},Yu=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.r=="number"&&typeof e.g=="number"&&typeof e.b=="number"&&typeof e.a=="number"},Zu=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.h=="number"&&typeof e.s=="number"&&typeof e.v=="number"&&typeof e.a=="number"},Oe=(r,e=!1)=>{const a=l=>Z(Math.round(l),0,255).toString(16).padStart(2,"0"),t=a(r.r),o=a(r.g),n=a(r.b),c=a(Z(r.a,0,1)*255);return e?`#${t}${o}${n}${c}`:`#${t}${o}${n}`},ao=r=>Oe({...r,a:1},!1).slice(1),Ju=(r,e,a,t,o)=>{const n=Kr(`#${r}`)??e,c={...n,[a]:ge(n[a]+t*o)};return ao(c)},Ys=r=>{const e=Hu(r),a=Math.round(e.h),t=Math.round(e.s*100),o=Math.round(e.l*100);return`hsl(${a} ${t}% ${o}% / ${Kc(Z(e.a,0,1))})`},Ga=r=>{const e=Z(Math.round(r.r),0,255),a=Z(Math.round(r.g),0,255),t=Z(Math.round(r.b),0,255),o=Z(r.a,0,1);return o<1?`rgb(${e} ${a} ${t} / ${Kc(o)})`:`rgb(${e} ${a} ${t})`},Zs=r=>{const e=Vu(r),a=Math.round(e.L*1e3)/10,t=Math.round(e.C/.4*1e3)/10,o=Math.round(e.h),n=Z(e.a,0,1);return n<1?`oklch(${a}% ${t}% ${o} / ${Kc(n)})`:`oklch(${a}% ${t}% ${o})`},qe={ALPHA_MIN:0,ALPHA_MAX:100,ALPHA_SNAP_STEP:10,HUE_MIN:0,HUE_MAX:360,HUE_SNAP_STEP:15,SATURATION_MIN:0,SATURATION_MAX:100,SATURATION_SNAP_STEP:10,VALUE_MIN:0,VALUE_MAX:100,VALUE_SNAP_STEP:10},Qu={auto:r=>r.a<1?Ga(r):Oe({...r,a:1},!1),hex:r=>Oe({...r,a:1},!1),hexa:r=>Oe(r,!0),rgb:r=>Ga(r),hsl:r=>Ys(r),oklch:r=>Zs(r)},Ym=(r,e)=>(Qu[r]??Qu.hex)(e),Dr=r=>typeof r=="string"?r:r.color,Wc=(r,e)=>typeof r!="string"&&r.name?r.name:e??void 0,rh=r=>{const e=Dr(r),a=Kr(e),t=!!a&&a.a<1&&a.a>.01,o=!!a&&a.a===0;return{cssColor:e,rgba:a,isTranslucent:t,isTransparent:o,opaqueHex:a?Oe({...a,a:1},!1):null}},Xc=(r,e)=>{if(Zu(r))return r;const a=(Yu(r)?r:null)??Kr(r)??Kr(e)??{r:0,g:0,b:0,a:1};return nn(a)},nt=(r,e)=>{const a=e?.fallbackHex??"#000000",t=e?.format??"hex",o=Xc(r,a),n={h:(o.h%360+360)%360,s:Z(o.s,0,1),v:Z(o.v,0,1),a:Z(o.a,0,1)},c=De(n),l={r:ge(c.r),g:ge(c.g),b:ge(c.b),a:n.a},u=Ym(t,l);let h,p,f,g,v;const m=l.a<1?"rgb":"hex",y=l.a<1?Ga(l):Oe({...l,a:1},!1),S=no(u,{contrastBias:e?.contrastBias,bgColor:e?.contrastBgColor});return{format:t,value:u,alpha:l.a,autoFormat:m,autoValue:y,contrastColor:S,hsv:n,rgba:l,get hex(){return h??=Oe({...l,a:1},!1)},get hexa(){return p??=Oe(l,!0)},get rgb(){return f??=Ga(l)},get hsl(){return g??=Ys(l)},get oklch(){return v??=Zs(l)}}},eh=(r,e)=>({...nt(r.hsv,{format:e}),name:r.name}),Js=(r,e)=>({color:Dr(r),name:Wc(r,e)}),ln=r=>({color:`#${`00${Math.floor(Math.random()*16777216).toString(16)}`.slice(-6)}`,name:r}),to=r=>Dr(r).trim().toLowerCase(),oo=(r,e)=>{if(to(r)===to(e))return!0;const a=Kr(Dr(r)),t=Kr(Dr(e));return!!a&&!!t&&Uc(a,t)},Qs=(r,e,a)=>{const t=a?.skipIndex;return r.some((o,n)=>n!==t?oo(o,e):!1)},Zm=(r,e)=>Qs(r,e)?r:[...r,e],Zr=r=>typeof r=="object"&&r!==null&&"stops"in r&&Array.isArray(r.stops),ah={r:255,g:255,b:255,a:1},th={r:42,g:42,b:42,a:1},Jm=r=>{let e=r,a=0;for(;e;){const t=e.getAttribute("arc-scheme");if(t==="light")return a%2===0?ah:th;if(t==="dark")return a%2===0?th:ah;t==="inverse"&&(a+=1),e=e.parentElement}return null},Qm=r=>{let e=null;try{e=r?document.documentElement?.querySelector?.(r):document.documentElement}catch{return null}if(e==null)return null;let a=null,t=e,o=0;for(;t&&o<12;){const n=Kr(window.getComputedStyle(t).backgroundColor);if(n&&n.a>0){if(a=a?Gc(a,n):n,n.a===1)break}else{const c=Jm(t);if(c){a=a?Gc(a,c):c;break}}t=t.parentElement,o+=1}return a},no=(r,e)=>{const a=Kr(Dr(r));if(!a||a.a===0)return e?.useScheme?"auto":"inherit";const{darkColor:t,lightColor:o,contrastBias:n,bgColor:c,bgElement:l}=e??{},u=e?.useScheme?"light":t??"#000000",h=e?.useScheme?"dark":o??"#ffffff",p=Z(n??-4,-7,7);let f=a;if(a.a<1){const y=Kr(c??""),S=y&&y.a>0?y:null,k=S?null:Qm(l);f=Gc(a,S??k??{r:255,g:255,b:255,a:1})}const g=Uu(f),v=(g+.05)/.05,m=1.05/(g+.05);return v+p>=m?u:h},rl=r=>r==null?null:{comparisonKey:to(r),selectedRgba:Kr(Dr(r))},oh=(r,e)=>{if(!e)return!1;if(to(r)===e.comparisonKey)return!0;if(!e.selectedRgba)return!1;const a=Kr(Dr(r));return!!a&&Uc(a,e.selectedRgba)},rr={ANGLE:90,ANGLE_MIN:0,ANGLE_MAX:360,ANGLE_SNAP_STEP:15,ANGLE_PRESETS:[0,180,135,225,90,270,45,315],STOPS:[],STOP_MIN:0,STOP_MAX:100},nh=r=>[{color:Dr(r??ln()),at:rr.STOP_MIN},{color:Dr(ln()),at:rr.STOP_MAX}],ka=r=>r.map((e,a)=>({stop:e,index:a})).sort((e,a)=>e.stop.at-a.stop.at||e.index-a.index),ch=r=>ka(r).map(e=>e.stop),Et=(r,e=rr.STOP_MIN,a=rr.STOP_MAX)=>r.map(t=>({...t,at:Z(Math.round(t.at),e,a)})),el=(r,e,a)=>r!=null&&a<=r+1||e!=null&&a>=e-1,rb=(r,e,a)=>el(r[e-1]?.stop.at,r[e+1]?.stop.at,a),dn=(r,e)=>{if((r.angle??rr.ANGLE)!==(e.angle??rr.ANGLE))return!1;const a=r.stops??[],t=e.stops??[];return a.length!==t.length?!1:a.every((o,n)=>o.at===t[n].at&&o.color===t[n].color)},al=(r,e)=>dn({stops:Et(r.stops??[]),angle:r.angle??rr.ANGLE},{stops:Et(e.stops??[]),angle:e.angle??rr.ANGLE}),ct=(r,e)=>r.name===e.name&&Ua(r)===Ua(e),un=(r,e)=>Z(Math.round((r+e)/2),rr.STOP_MIN,rr.STOP_MAX),ih=(r,e,a=rr.STOP_MIN,t=rr.STOP_MAX)=>e<=1?a:a+r/(e-1)*(t-a),sh=r=>{const e=ka(r);if(e.length<=1)return r;const a=[...r];return e.forEach((t,o)=>{a[t.index]={...t.stop,at:Z(Math.round(ih(o,e.length)),rr.STOP_MIN,rr.STOP_MAX)}}),a},lh=(r,e,a)=>{const t=Kr(Dr(r.color)),o=Kr(Dr(e.color));if(!t||!o)return Dr(r.color);const n=e.at-r.at,c=n===0?0:Z((a-r.at)/n,0,1),l={r:t.r+(o.r-t.r)*c,g:t.g+(o.g-t.g)*c,b:t.b+(o.b-t.b)*c,a:t.a+(o.a-t.a)*c};return Oe(l,l.a<1)},eb=r=>{const e=ka(r).map(o=>o.stop);if(e.length<2)return null;let a=0,t=0;for(let o=0;o<e.length-1;o+=1){const n=e[o+1].at-e[o].at;n>a&&(a=n,t=o)}return[e[t],e[t+1]]},dh=(r,e,a="#000000")=>{const t=ka(r);if(e.kind==="between"){const o=t[e.sortedIndex-1],n=t[e.sortedIndex];if(!o||!n)return{color:Dr(a),at:tl(r)};const c=un(o.stop.at,n.stop.at),l=lh(o.stop,n.stop,c);return{color:Dr(l),at:c}}return{color:Dr(a),at:tl(r)}},uh=(r,e)=>{if(r.length===0)return[{color:e??Dr(ln()),at:un(rr.STOP_MIN,rr.STOP_MAX)}];const a=ka(r),t=a[a.length-1],o=a[a.length-2],n=rr.STOP_MAX,c=o?.stop.at??rr.STOP_MIN,l=un(c,n),u={color:e??Dr(t.stop.color),at:n};return r.map((h,p)=>p===t.index?{...h,at:l}:h).concat(u)},tl=r=>{const e=(rr.STOP_MIN+rr.STOP_MAX)/2;if(r.length===0)return e;if(r.length===1)return Z(r[0].at>=e?rr.STOP_MIN:rr.STOP_MAX,rr.STOP_MIN,rr.STOP_MAX);const a=eb(r);return a?un(a[0].at,a[1].at):e},Ua=r=>{const{stops:e=[],angle:a=rr.ANGLE}=r,t=ka(e);if(t.length===0)return"transparent";if(t.length===1)return Dr(t[0].stop.color);const o=t.map(({stop:n})=>`${Dr(n.color)} ${n.at}%`);return`linear-gradient(${a}deg, ${o.join(", ")})`},hh=(r,e)=>r?.name??e??void 0,qc=(r,e="")=>{const a=r.stops??[];if(a.length===0)return Dr(e);const t=ka(a);if(t.length===1)return Dr(t[0].stop.color);let o=0,n=0,c=0,l=0,u=0;for(let p=0;p<t.length;p+=1){const f=t[p-1]?.stop.at??t[p].stop.at,g=t[p].stop.at,v=t[p+1]?.stop.at??g,m=(g-f)/2+(v-g)/2,y=Kr(Dr(t[p].stop.color));y&&(o+=y.r*m,n+=y.g*m,c+=y.b*m,l+=y.a*m,u+=m)}if(u===0)return Dr(e);const h={r:Math.round(o/u),g:Math.round(n/u),b:Math.round(c/u),a:l/u};return Oe(h,h.a<1)},hn=(r,e)=>{const a={stops:r.stops??[],angle:r.angle??rr.ANGLE,...r.name!=null?{name:r.name}:{}},t=qc(a,e?.fallbackColor),o=no(t,{contrastBias:e?.contrastBias,bgColor:e?.contrastBgColor});return{gradient:a,value:Ua(a),baseColor:t,contrastColor:o,...r.name!=null?{name:r.name}:{}}},ph=(r,e)=>{const a=r.stops?.length?r.stops:nh(e),t=r.angle??rr.ANGLE,o={stops:a,angle:t,...r.name!=null?{name:r.name}:{}},n=e?Dr(e):void 0,c=qc(o,n),l=no(c);return{gradient:o,value:Ua(o),baseColor:c,contrastColor:l,...r.name!=null?{name:r.name}:{}}},gh=r=>{const{stops:e=[],angle:a=rr.ANGLE}=r;return e?.length?e.length===1?String(e[0].color):Ua({stops:e,angle:a}):"transparent"},vh=(r,e,a,t,o,n,c,l,u=!0)=>{if(n<=0)return Z(c,c,l);const h=o*Math.PI/180,p=Math.cos(h),f=Math.sin(h),v=(((r-a)*p+(e-t)*f)/n+1)/2*100,m=u?Math.round(v):v;return Z(m,c,l)},ol=(r,e,a,t)=>Math.atan2(e-t,r-a)*180/Math.PI,fh=(r,e,a,t=rr.ANGLE_MIN,o=rr.ANGLE_MAX)=>{let n=a-e;for(;n>180;)n-=360;for(;n<-180;)n+=360;const c=((r+n)%360+360)%360;return Z(c,t,o)},mh=(r,e=rr.ANGLE_SNAP_STEP,a=rr.ANGLE_MIN,t=rr.ANGLE_MAX)=>Z(Math.round(r/e)*e,a,t),ab=(r,e,a=rr.ANGLE_SNAP_STEP,t=rr.ANGLE_MIN,o=rr.ANGLE_MAX)=>{const n=r%a===0;return e>0?Z(n?r+a:Math.ceil(r/a)*a,t,o):Z(n?r-a:Math.floor(r/a)*a,t,o)},tb=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]),bh=(r,e,a=1)=>{if(!tb.has(r))return null;const o=(e-90)*Math.PI/180,n=Math.cos(o),c=Math.sin(o),l={ArrowRight:[1,0],ArrowLeft:[-1,0],ArrowDown:[0,1],ArrowUp:[0,-1]},[u,h]=l[r],p=u*n+h*c;return p>0?a:p<0||r==="ArrowLeft"||r==="ArrowUp"?-a:a},ob=196.6,nl="arc-color-solid-preview",cl=new WeakMap,il=(r,e)=>{const a=r.getContext("2d",{alpha:!1});if(!a)return;const{width:t,height:o}=r;if(!t||!o)return;const n=`${t}:${o}:${e}`;if(cl.get(r)===n)return;const c=a.createImageData(t,o),l=c.data;let u=0;for(let h=0;h<o;h+=1){const p=1-(o<=1?0:h/(o-1)),f=De({h:e,s:0,v:p,a:1}),g=De({h:e,s:1,v:p,a:1}),{r:v,g:m,b:y}=f,{r:S,g:k,b:w}=g;for(let z=0;z<t;z+=1){const x=t<=1?0:z/(t-1);l[u++]=ge(v+(S-v)*x),l[u++]=ge(m+(k-m)*x),l[u++]=ge(y+(w-y)*x),l[u++]=255}}a.putImageData(c,0,0),cl.set(r,n)},nb=(0,s.memo)(function({value:e,label:a,step:t=.01,stepLarge:o=.1,isDisabled:n=!1,showLabel:c=!1,labels:l,onChange:u}){const h=l??Ce,p=a??h.colorField,f=Or(void 0,"color-field"),g=(0,s.useRef)(null),v=(0,s.useRef)(null),m=(0,s.useRef)(!1),y=(0,s.useRef)(null),S=(0,s.useRef)(null),k=(0,s.useRef)(null),w=(0,s.useRef)(null),z=(0,s.useRef)(null),x=(0,s.useRef)(null),[_,P]=(0,s.useState)(!1),[R,U]=(0,s.useState)(null),[T,L]=(0,s.useState)(null),G=Z(R?.saturation??e.saturation,0,1),I=Z(R?.value??e.value,0,1),H=Math.round(G*100),V=Math.round(I*100),er=(0,s.useMemo)(()=>{const K=e.hue;return typeof K=="number"&&Number.isFinite(K)?K:ob},[e.hue]),O=(0,s.useMemo)(()=>Vc(er),[er]),J=(0,s.useCallback)((K,or,C="commit")=>{u({hue:er,saturation:Z(K,0,1),value:Z(or,0,1)},C)},[er,u]),nr=(0,s.useCallback)(()=>{m.current&&(m.current=!1,U(null),J(G,I,"commit"))},[J,G,I]),sr=(0,s.useCallback)((K,or)=>{const C=Z(K,0,1),$=Z(or,0,1);m.current=!0,U({saturation:C,value:$}),J(C,$,"preview")},[J]),yr=(0,s.useCallback)(K=>{const or=v.current;if(!or||!m.current)return;const C=K.relatedTarget;C instanceof Node&&or.contains(C)||nr()},[nr]),q=(0,s.useCallback)((K,or,C,$="preview")=>{const N=Z((K-C.left)/C.width,0,1),ar=Z((or-C.top)/C.height,0,1),E=N,F=1-ar;$==="preview"&&U({saturation:E,value:F}),J(E,F,$)},[J]),tr=(0,s.useCallback)(K=>{if(n)return;K.preventDefault(),K.stopPropagation(),m.current=!1;const{clientX:or,clientY:C,pointerId:$,currentTarget:N}=K,ar=N.getBoundingClientRect();k.current=$,S.current=ar,w.current={clientX:or,clientY:C},z.current=null,x.current=null,N.focus(),N.setPointerCapture($),P(!0),q(or,C,ar)},[n,q]),Mr=(0,s.useCallback)(K=>{if(n)return;const{clientX:or,clientY:C,currentTarget:$,pointerId:N}=K;if(k.current!==N)return;const ar=S.current??$.getBoundingClientRect();if(K.shiftKey){const E=w.current;if(E){if(z.current===null){const ir=Math.abs(or-E.clientX),wr=Math.abs(C-E.clientY);z.current=ir>=wr?"s":"v",x.current={clientX:or,clientY:C}}const F=x.current??E,Y=z.current==="s"?or:F.clientX,cr=z.current==="v"?C:F.clientY;q(Y,cr,ar);return}}else z.current=null,x.current=null;q(or,C,ar)},[n,q]),dr=(0,s.useCallback)(()=>{const K=k.current!=null;k.current=null,S.current=null,w.current=null,z.current=null,x.current=null,P(!1),U(null),m.current=!1,K&&J(G,I,"commit")},[J,G,I]),br=(0,s.useCallback)(K=>{if(n)return;const or=K.shiftKey?o:t;let C=G,$=I;switch(K.key){case"ArrowLeft":C=G-or;break;case"ArrowRight":C=G+or;break;case"ArrowUp":$=I+or;break;case"ArrowDown":$=I-or;break;case"Home":C=0,$=1;break;case"End":C=1,$=0;break;default:return}K.preventDefault(),sr(C,$)},[n,t,o,sr,G,I]),hr=(0,s.useCallback)(K=>{if(n||!K.key.startsWith("Arrow"))return;const or=K.shiftKey?o:t,C=K.key==="ArrowLeft"||K.key==="ArrowDown"?-or:or;K.preventDefault(),sr(G+C,I)},[n,t,o,sr,G,I]),pr=(0,s.useCallback)(K=>{if(n||!K.key.startsWith("Arrow"))return;const or=K.shiftKey?o:t,C=K.key==="ArrowLeft"||K.key==="ArrowDown"?-or:or;K.preventDefault(),sr(G,I+C)},[n,t,o,sr,G,I]),vr=(0,s.useMemo)(()=>({"--js\u2022s":String(G),"--js\u2022v":String(1-I)}),[G,I]),kr=(0,s.useRef)(O);return kr.current=O,et(()=>{const K=g.current,or=y.current;if(!K||!or)return;const C=()=>{const F=K.getBoundingClientRect(),Y=Math.max(1,Math.round(F.width)),cr=Math.max(1,Math.round(F.height)),ir=typeof window>"u"?1:Math.max(window.devicePixelRatio||1,1),wr=Math.max(1,Math.round(Y*ir)),Lr=Math.max(1,Math.round(cr*ir));or.width!==wr&&(or.width=wr),or.height!==Lr&&(or.height=Lr),il(or,kr.current)};C();const $=new ResizeObserver(()=>{C()});$.observe(K);const N=()=>{cl.delete(or),C()};or.addEventListener("contextrestored",N);const ar=K.closest("[arc-color-picker]"),E=F=>{const{detail:Y}=F,cr=Y?.h;typeof cr!="number"||!Number.isFinite(cr)||il(or,Vc(cr))};return ar?.addEventListener(nl,E),()=>{$.disconnect(),or.removeEventListener("contextrestored",N),ar?.removeEventListener(nl,E)}},[]),et(()=>{const K=y.current;K&&il(K,O)},[O]),(0,i.jsxs)("div",{ref:v,"arc-color-field":"","is-disabled":n?"":void 0,"is-interacting":_?"":void 0,"sr-focus":T??void 0,onBlurCapture:yr,children:[c&&!!p&&(0,i.jsx)("label",{htmlFor:f,children:p}),(0,i.jsxs)("div",{id:f,ref:g,"arc-color-surface":"field",style:vr,tabIndex:n?-1:0,role:"application","aria-label":p,"aria-describedby":`${f}-readout`,onPointerDown:tr,onPointerMove:Mr,onPointerUp:dr,onPointerCancel:dr,onKeyDown:br,children:[(0,i.jsx)("canvas",{ref:y,"arc-color-field-canvas":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-thumb":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"saturation","has-focus":T==="saturation"?"":void 0,"aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"value","has-focus":T==="value"?"":void 0,"aria-hidden":"true"})]}),(0,i.jsxs)("div",{"arc-color-field-sr":"","aria-hidden":!1,children:[(0,i.jsx)("div",{"arc-color-field-sr-slider":"saturation",role:"slider",tabIndex:n?-1:0,"aria-label":h.saturation,"aria-orientation":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":H,onKeyDown:hr,onFocus:()=>L("saturation"),onBlur:()=>L(null)}),(0,i.jsx)("div",{"arc-color-field-sr-slider":"value",role:"slider",tabIndex:n?-1:0,"aria-label":h.value,"aria-orientation":"vertical","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":V,onKeyDown:pr,onFocus:()=>L("value"),onBlur:()=>L(null)})]}),(0,i.jsx)("div",{id:`${f}-readout`,"arc-color-field-readout":"","arc-color-field-sr":"",children:h.colorFieldReadout(H,V)})]})}),cb=d`--arc•button•bar`,pn=d`${cb}•axis`,ib=d`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${pn}: row;

    &[is-flipped] {
      ${pn}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${pn}: column;

    &[is-flipped] {
      ${pn}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${pn}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(${M}•8));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,co=({children:r,...e})=>{const{Element:a="menu",orientation:t="horizontal",isFlipped:o=!1,...n}=e;return(0,i.jsx)(a,{...n,"arc-button-bar":t,"is-flipped":o?"":void 0,role:n.role??"group",children:r})};Cr("ArcButtonBar",ib);function _t(r){const e=(0,s.useRef)(r);e.current=r;const a=(0,s.useCallback)((...t)=>e.current?.(...t),[]);return r?a:void 0}const sb=({activeColor:r})=>{const[e,a]=(0,s.useState)(r),t=r!=null,o=t?r:e;(0,s.useEffect)(()=>{a(r)},[r]);const n=(0,s.useCallback)(c=>{t||a(c)},[t]);return{isSelectionControlled:t,activeSelectedColor:o,setUncontrolledSelectedColor:a,selectColor:n}},lb=({palette:r,isSelectionControlled:e,onAddColor:a,emitColorChange:t,setLocalColors:o,setUncontrolledSelectedColor:n,initialColorValue:c,shouldOpenPopover:l=!0,notifyAddColorToggle:u,showPopover:h,hidePopover:p})=>{const f=(0,s.useCallback)(()=>c??ln(),[c]),[g,v]=(0,s.useState)(null),[m,y]=(0,s.useState)(f),S=(0,s.useCallback)(()=>{v(null),y(f())},[f]),k=(0,s.useCallback)(T=>{o(L=>Zr(T)?L.some(H=>Zr(H)&&ct(H,T))?L:[...L,T]:L.some(I=>!Zr(I)&&oo(I,T))?L:[...L,T])},[o]),w=(0,s.useCallback)((T,L)=>{a?.(r,T,L),Zr(T)||(t(T),e||n(T))},[t,e,a,r,n]),z=(0,s.useCallback)((T,L)=>{k(T),w(T,L??void 0)},[k,w]),x=(0,s.useCallback)(()=>{if(g!=null)return;const T=f();let L=-1;o(G=>(L=G.length,[...G,T])),v(L),y(T),u?.(!0),l&&h()},[g,f,u,o,l,h]),_=(0,s.useCallback)(T=>{g!=null&&y(T)},[g]),P=(0,s.useCallback)(T=>{T?.preventDefault(),T?.stopPropagation(),g!=null&&o(L=>L.filter((G,I)=>I!==g)),S(),u?.(!1),l&&p()},[g,p,u,S,o,l]),R=(0,s.useCallback)((T,L)=>{const I=(er=>typeof er?.preventDefault=="function")(T)?T:L;if(I?.preventDefault(),I?.stopPropagation(),g==null||m==null){u?.(!1),l&&p();return}const V=(r.colors??[]).map((er,O)=>O===g?m:er);o(V),w(m,I??void 0),S(),u?.(!1),l&&p()},[g,m,w,p,u,r.colors,S,o,l]),U=(0,s.useCallback)((T,L)=>{L?.preventDefault(),L?.stopPropagation(),z(T,L??void 0)},[z]);return{draftColorIndex:g,draftColorValue:m,startAddDraft:x,updateDraftColor:_,cancelDraftColor:P,saveDraftColor:R,saveCurrentColor:U}};let $h=!1;const gn=new Set,sl=r=>{$h=r,gn.forEach(e=>{e.setState(r),r||e.onRelease?.()})},yh=r=>{(r.metaKey||r.key==="Meta")&&sl(!0)},xh=r=>{sl(!!r.metaKey)},kh=()=>{sl(!1)},db=r=>{const[e,a]=(0,s.useState)($h),t=(0,s.useRef)(r);return t.current=r,(0,s.useEffect)(()=>{const o={setState:a,onRelease:()=>t.current?.()};return gn.add(o),gn.size===1&&(window.addEventListener("keydown",yh),window.addEventListener("keyup",xh),window.addEventListener("blur",kh)),a(e),()=>{gn.delete(o),gn.size===0&&(window.removeEventListener("keydown",yh),window.removeEventListener("keyup",xh),window.removeEventListener("blur",kh))}},[]),e},Be=d`--arc-popover`,io=d`--arc•color•picker`,Jr=d`${io}•thumb`,so=d`${io}•tools`,Pa=d`${io}•dropper`,wh=d`
  background-image:
    linear-gradient(
      to right,
      transparent,
      var(--js•hex, transparent)
    ),
    conic-gradient(
      var(--arc-color-alpha-subtle) 0 25%,
      var(--arc-color-alpha-muted) 0 50%,
      var(--arc-color-alpha-subtle) 0 75%,
      var(--arc-color-alpha-muted) 0 100%
    );

  background-size: 100% 100%, 1em 1em;
  background-position: 50% 50%, 50% 50%;
`,ub=d`
  background-image:
    linear-gradient(
      to right,
      #f00 0%,
      #ff0 16.66%,
      #0f0 33.33%,
      #0ff 50%,
      #00f 66.66%,
      #f0f 83.33%,
      #f00 100%
    );
`,ll=d`3.75em`,Sh={POPOVER:d`
    /* Inter-Component Communication: ArcPopover */
    ${Be}-width: 14em; /* 224px */
    ${Be}-min-width: 10.5em; /* 140px */
    ${Be}-max-width: 15.75em; /* 252px */
    ${Be}-line-height: normal; /* @note – allows elements to resolve to design-spec heights */
    ${Be}-outline-size: 0px; /* @note – default outline-size causes divider lines to not extend to the edges of the popover shell. */
    ${Be}-padding: 0;
    ${Be}-overflow: hidden auto;

    ${Be}-header-padding: 0.75em 1em;
    ${Be}-header-background: var(--arc-color-bg-mono);
    ${Be}-header-align-items: center;

    ${Be}-body-padding: 0;

    ${Be}-footer-padding: 1em;
    ${Be}-footer-background: var(--arc-color-bg-mono);

    /* Inter-Component Communication: inner ArcTooltips • UX enhancement: transition speed-up */
    [arc-popover-content] {
      ${Be}-transition-duration: 30ms;
    }

    &:has([arc-color-picker=simple]) {
      ${Be}-width: 12.25em; /* 196px */
    }

    /* Inter-Component Communication: ArcButtonBar via ArcPopoverFooter */
    [arc-popover-footer]:has([arc-button-bar]) {
      --arc-button-bar-justify-content: stretch;
      --arc-button-flex: 1;
    }
  `,PICKER:d`
    ${Jr}•shadow: 0 0 0 max(4px, 0.25em) var(--arc-color-alpha-white-95), 0 0 max(6px, 0.375em) max(3px, 0.1875em) var(--arc-color-alpha-black-30);
    ${Jr}•size: max(10px, 0.625em);
    ${Jr}•transition: 200ms ease-out;

    ${io}•padding: 1em;
    &[is-inline] { ${io}•padding: 0; }

    &[arc-color-picker=simple] {
      ${Pa}•align•self: end;
      ${so}•gap: 1em 0.5em;

      [arc-color-slider] {
        grid-column: 1 / -1;
      }
    }

    [arc-color-input=hex] {
      --arc-input-prefix-opacity: var(--arc-alpha-40);
      --arc-input-suffix-opacity: var(--arc-alpha-100);
    }

    /* This font-size is intended for various scaling calculations. */
    font-size: initial;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    -webkit-user-select: none;
    user-select: none;

    /* Inter-Component Communication: ArcInput & ArcLabel • font-size reset for input labels */
    --arc-input-padding-inline: max(6px, 0.375em);
  `},hb=d`

  [arc-color-field] {
    display: grid;
    gap: 0.5em;
  }

  [arc-color-surface=field] {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;

    -webkit-user-select: none;
    user-select: none;
    touch-action: none;
    cursor: pointer;

    border-radius: var(--arc-border-radius-md);
    background: var(--arc-color-bg-mono);

    &:focus:focus-visible {
      outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 2;
    }
  }

  [arc-color-field-canvas] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    pointer-events: none;
  }

  [arc-color-field-slice] {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    border-radius: var(--arc-border-radius-pill);
    transition: left var(${Jr}•transition), top var(${Jr}•transition);
  }

  [arc-color-field][sr-focus] [has-focus] {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: 0.25em;
  }

  /* Saturation axis at current Value */
  [arc-color-field-slice=saturation] {
    inset: calc(var(--js•v) * 100%) 0 auto 0;
    height: var(--arc-border-width-md);
  }

  /* Value axis at current Saturation */
  [arc-color-field-slice=value] {
    inset: 0 auto 0 calc(var(--js•s) * 100%);
    width: var(--arc-border-width-md);
  }

  [arc-color-field-thumb] {
    position: absolute;
    left: calc(var(--js•s) * 100%);
    top: calc(var(--js•v) * 100%);
    transform: translate(-50%, -50%);
    width: var(${Jr}•size);
    height: var(${Jr}•size);
    border: 0;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${Jr}•shadow);
    background: var(--js•rgb);
    z-index: 4;
    transition:
      left var(${Jr}•transition),
      top var(${Jr}•transition);
  }

  @media (prefers-reduced-motion: reduce) {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  [arc-color-field][is-interacting] {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  /* Visually hidden but usable (so SR users can access them) */
  [arc-color-field-sr] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  [arc-color-field-sr-slider] {
    display: block;
  }

`,pb=d`

  [arc-color-slider] {
    &:has([arc-slider-surface=hue]) { ${Jr}•bg: var(--js•hue); }
    &:has([arc-slider-surface=alpha]) { ${Jr}•bg: transparent; }

    /* Inter-Component Communication: ArcSlider --------------------• */
    --arc-slider-input-height: auto;
    --arc-slider-progress-display: none;
    --arc-slider-track-background: transparent;
    --arc-slider-progress-background: transparent;
    --arc-slider-track-height: 0.875em;
    --arc-slider-thumb-size: var(${Jr}•size);
    --arc-slider-thumb-size-hover: var(${Jr}•size);
    --arc-slider-thumb-shadow: var(${Jr}•shadow);
    --arc-slider-thumb-background: var(${Jr}•bg);
    --arc-slider-thumb-outline-offset: 0.3125em;

    display: grid;
    gap: 0.375em;

    [arc-slider-surface=hue] { ${ub} }
    [arc-slider-surface=alpha] { ${wh} }
  }

`,gb=d`

  [arc-color-inputs] {
    display: grid;
    gap: 0.5em;
    grid-template-columns: 1fr ${ll};
    align-items: end;

    &:not(:has([arc-color-input=hex])) {
      grid-template-columns: ${ll} 1fr;
    }

    &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha])) {
      grid-template-columns: 1fr;
    }
  }

  [arc-color-input=hex] {
    --arc-icon-color: var(--arc-color-fg-critical-mid);
    --arc-input-action-display: contents;
    --arc-button-min-width: none;
    --arc-button-max-width: 2.25em;
  }

  :is([arc-color-input=stop], [arc-color-input=alpha]) {
    --arc-input-text-align: end;
  }

`,vb=d`
  [arc-gradient-stops] {
    display: grid;
    gap: 0.125em;
  }

  [arc-gradient-stop-list] {
    display: grid;
    gap: 0.125em;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  [arc-gradient-field-wrapper] {
    position: relative;
    &:has([is-rotating]) {
      --angle-output-opacity: 1;
    }
  }

  [arc-gradient-field-angle-output] {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: var(--angle-output-opacity, 0.4);
    transition: opacity 200ms ease-out;
  }

  [arc-gradient-field] {
    position: relative;
    width: 100%;
    min-height: 2.5em;
    aspect-ratio: 1 / 1;
    border-radius: var(--arc-border-radius-circle);
    touch-action: none;
    user-select: none;
    cursor: grab;

    &[is-rotating] {
      cursor: grabbing;
    }

    &::before {
      box-sizing: border-box;
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--arc-border-radius-circle);
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 1;
    }
  }

  [arc-gradient-stop-thumb] {
    position: absolute;
    left: 0;
    top: 50%;
    margin-block-start: calc(var(${Jr}•size) / -2);
    margin-inline-start: calc(var(${Jr}•size) / -2);
    width: var(${Jr}•size);
    height: var(${Jr}•size);
    border-radius: var(--arc-border-radius-circle);
    background: var(${Jr}•bg);
    box-shadow: var(${Jr}•shadow);
    cursor: pointer;
    z-index: 1;
    touch-action: none;

    &:focus-visible {
      outline: 0.125em solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      content: '';
      position: absolute;
      inset: -0.375em;
      border-radius: var(--arc-border-radius-circle);
    }
  }

  [arc-gradient-stop-row] {
    position: relative;
    display: grid;
    grid-template-columns: auto ${ll} 1fr auto;
    gap: 0.5em;
    align-items: center;
    padding: 0.25em;
    margin-inline: -0.25em;
    border-radius: var(--arc-border-radius-md);

    &[is-editing-color] {
      background: var(--arc-color-bg-selected-default);
    }
  }

  [arc-gradient-stop-insert] {
    --arc-button-color: var(--arc-color-alpha-stark);
    --arc-button-width: 100%;
    --arc-button-z-index: 1;

    position: absolute;
    inset: -0.375em 0em auto 0em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--arc-border-radius-pill);
    height: 0.625em;
    opacity: var(--arc-alpha-0);
    background: transparent;
    transition: opacity 200ms ease-out, background 200ms ease-out;

    [arc-icon] {
      background: var(--arc-color-bg-mono);
      padding-inline: 0.25em;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 50% 0 auto 0;
      translate: 0 -50%;
      height: 0.0625em;
      background: transparent;
      pointer-events: none;
    }

    &:where(:has(:hover), :focus-within) {
      opacity: var(--arc-alpha-80);

      &::before {
        background: var(--arc-color-bg-neutral-subtle);
      }
    }
  }

  *:not([arc-gradient-angle-slider]) + [arc-gradient-presets] {
    margin-block-start: 0.75em;
  }

  [arc-gradient-presets] [arc-color-palette-set] {
    --arc-swatch-width: 100%;
    --arc-swatch-border-radius: var(--arc-border-radius-md);

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
    min-inline-size: 0;
    max-inline-size: none;
    padding: 0;
    margin: 0;
    border: 0;
  }
`,fb=d`

  &[arc-color-picker=simple]:has([arc-color-palettes]) [arc-color-tools] {
    padding-top: 0;
  }

  :is([arc-color-tools=simple], [arc-color-tools=solid]) {
    display: grid;
    gap: var(${so}•gap, 0.5em);
    grid-template-columns: var(${so}•columns, auto 1fr);
  }

  [arc-color-tools=gradient] {
    display: grid;
    gap: 0;
    grid-template-columns: var(${so}•columns, 1fr);
  }

  [arc-color-tools=simple] {
    &:has([arc-color-input=hex]):not(:has([arc-color-eye-dropper])) {
      ${so}•columns: 1fr 2em;
    }
  }

  :is([arc-color-field], [arc-color-inputs]) {
    grid-column: 1 / -1;
  }

  [arc-color-eye-dropper] {
    align-self: var(${Pa}•align•self, center);
    justify-self: var(${Pa}•justify•self, center);
  }

  [arc-color-sliders] {
    grid-column: 1 / -1;

    display: grid;
    gap: 0.25em;
    grid-template-columns: auto;
    align-self: center;
  }

  [arc-color-eye-dropper] + [arc-color-sliders] {
    grid-column: 2;
  }

  /* Finding a good place for the eye dropper in some cases */
  &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha], [arc-color-sliders])),
  &:has([arc-color-input=alpha]):not(:has([arc-color-input=hex], [arc-color-sliders])) {
    ${Pa}•align•self: end;
    ${Pa}•justify•self: end;

    &:has([arc-color-eye-dropper]) [arc-color-inputs] { display: contents; }

    &:not(:has([arc-color-field])) { ${Pa}•row: 1; }

    &:not(:has([arc-color-input=hex])) {
      ${Pa}•justify•self: start;
      ${so}•columns: 1fr auto;
      ${Pa}•column: 1;
    }

    [arc-color-eye-dropper] {
      grid-column:  var(${Pa}•column, 2);
      grid-row: var(${Pa}•row, 2);
    }

    [arc-color-sliders] { grid-column: 1 / -1; }
  }

  ${hb}
  ${pb}
  ${gb}
  ${vb}

`,mb=d`
@layer arc-components {

  [arc-color-picker-wrapper] {
    ${Sh.POPOVER}
  }

  [arc-color-picker] {
    ${Sh.PICKER}

    [arc-color-picker-section=control] {
      padding: 1em 1em 0 1em;
    }

    &[is-inline] [arc-color-picker-section=control] {
      padding: 0 0 1em 0;
    }

    [arc-color-picker-section]:not([arc-color-picker-section=control]) {
      padding: var(${io}•padding);

      &:has(+[arc-color-picker-section]) { padding-bottom: 1em; }
      +[arc-color-picker-section] { padding-top: 1em; }

      &[has-divider=top] { border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
      &[has-divider=bottom] { border-bottom: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
    }

    ${fb}

    [arc-color-palettes] {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    [arc-color-section-header] {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5em;
      padding: 0;
      height: 2.5em;
    }

    [arc-gradient-angle-slider] {
      position: sticky;
      bottom: 0;
      background: var(--arc-color-bg-mono);
      border-block-start: 0.0625em solid var(--arc-color-border-mid);
      padding-inline: 1em;
      margin-inline: -1em;
      margin-block-start: 0.75em;
      padding-block-end: 0.75em;
    }


    [arc-color-picker-section=footer] {
      position: sticky;
      bottom: 0;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      background: var(--arc-color-bg-mono);
      z-index: 2;
    }

    [arc-color-picker-button-bar] * {
      flex: 1;
    }
  }

}
`,Ae=d`--arc•color•chip`,bb=d`
@layer arc-components {

  [arc-color-chip=swatch] {
    ${Ae}•radius: var(--arc-border-radius-circle);
    ${Ae}•width: var(${b}•24);
    ${Ae}•height: var(${b}•24);
    ${Ae}•border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  [arc-color-chip=gradient-stop] {
    ${Ae}•radius: var(--arc-border-radius-md);
    ${Ae}•width: var(${b}•24);
    ${Ae}•height: var(${b}•24);
    ${Ae}•border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  [arc-color-chip=gradient] {
    ${Ae}•radius: var(--arc-border-radius-circle);
    ${Ae}•width: var(${b}•24);
    ${Ae}•height: var(${b}•24);
    ${Ae}•border: none;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--arc-swatch-border-radius, var(${Ae}•radius));
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      opacity: 1;
      pointer-events: none;
      z-index: 1;
    }

    &[is-selected]::before {
      opacity: 0;
    }
  }

  [arc-color-chip] {
    --arc-button-position: relative;
    --arc-button-background: var(--js•gradient, var(--js•color));
    --arc-button-color: var(--js•fg, transparent);
    --arc-button-width: var(--arc-swatch-width, var(${Ae}•width));
    --arc-button-height: var(--arc-swatch-height, var(${Ae}•height));
    --arc-button-border-radius: var(--arc-swatch-border-radius, var(${Ae}•radius));
    --arc-button-border: var(${Ae}•border);
    --arc-button-outline-offset: var(--arc-border-width-sm);
    --arc-icon-size: var(${b}•10);

    &[is-transparent] {
      --arc-button-background: unset;
      ${wh}
    }

    &[is-translucent] {
      --arc-button-background:
        var(--js•color)
        linear-gradient(
          to right,
          var(--js•hex),
          var(--js•hex) 50%,
          transparent 50%,
          transparent
        ) border-box;

      &::after {
        content: '';
        position: absolute;
        inset: 0 auto 0 50%;
        translate: -100% 0;
        width: var(--arc-border-width-sm);
        background: var(--arc-color-border-mid);
        pointer-events: none;
        z-index: 1;
      }
    }

    &:is(:hover, [is-selected]) {
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-heavy);
      --arc-button-box-shadow: 0 0 0 var(--arc-border-width-md) var(--arc-color-fg-on-mono-inverse) inset;
    }

    &[is-draft] {
      --arc-button-outline: var(--arc-border-width-md) dotted color-mix(in srgb, transparent 35%, var(--arc-color-border-focus) 65%);
    }

    &[is-control] {
      --arc-button-background: var(--arc-color-alpha-muted);
      --arc-button-color: inherit;
    }
  }

}
`,Ch=(0,s.memo)(({color:r,gradient:e,name:a,kind:t,isDraft:o,isSelected:n,contrastBias:c,contrastBgColor:l,canRemoveColor:u,icon:h,text:p,tooltip:f,labels:g,onClick:v,style:m,...y})=>{const S=(0,s.useMemo)(()=>Fc(g),[g]),{cssColor:k,isTranslucent:w,isTransparent:z,opaqueHex:x}=(0,s.useMemo)(()=>rh(r??""),[r]),_=e?hh(e,a):Wc(r??"",a),P=p??_??(e?S.gradient:k),R=qu(k)?k.toUpperCase():k,U=f??_??(e?S.gradient:R),T=(0,s.useMemo)(()=>e?qc(e,k):k,[e,k]),L=(0,s.useMemo)(()=>no(T,{contrastBias:c,bgColor:l}),[T,c,l]),[G,I]=(0,s.useState)(!1),[H,V]=(0,s.useState)(!1),[er,O]=(0,s.useState)(!1),[J,nr]=(0,s.useState)(!1),sr=db(()=>V(!1)),q=(t==="swatch"||t==="gradient")&&!!u&&(er&&sr||(sr||H)&&G),tr=q||J,Mr=tr?"fa-regular fa-xmark":h??"fa-solid fa-check",dr=t==="gradient"?S.removeGradient:S.removeColor,br=tr?dr:U;(0,s.useEffect)(()=>{q&&nr(!0)},[q]),(0,s.useEffect)(()=>{!q&&n&&!o&&nr(!1)},[o,q,n]);const hr=(0,s.useCallback)(C=>{const $=q||C.metaKey?"remove":"select",N={...nt(k,{format:"auto",fallbackHex:k,contrastBias:c,contrastBgColor:l}),contrastColor:L,name:_};if(t==="gradient"&&e!=null){v?.({kind:t,colorData:N,gradientData:hn(e,{contrastBias:c,contrastBgColor:l}),action:$,shouldClosePicker:!1},C);return}v?.({kind:t,colorData:N,action:$,shouldClosePicker:!1},C)},[q,v,k,_,t,e,c,l,L]),pr=(0,s.useCallback)(C=>{C.preventDefault(),C.stopPropagation(),hr(C)},[hr]),vr=(0,s.useCallback)(C=>{C.metaKey&&(C.preventDefault(),C.stopPropagation(),hr(C))},[hr]),kr=(0,s.useCallback)(C=>{const $=C.propertyName??"";!($==="color"||$.includes("color"))||q||nr(!1)},[q]),K=(0,s.useCallback)(C=>{C.key!=="Enter"||!q||(C.preventDefault(),C.stopPropagation(),C.currentTarget.click())},[q]),or=(0,s.useMemo)(()=>({...m??{},"--js\u2022hex":z?"transparent":w&&(x??k??T)||"","--js\u2022color":k??T,"--js\u2022gradient":e?Ua(e):"","--js\u2022fg":n&&!o||q?L:""}),[m,z,w,x,k,T,n,o,q,L,e]);return(0,i.jsx)(Br,{...y,_isCustom:!0,"arc-color-chip":t,layout:"icon",tooltip:br,text:P,icon:Mr,"is-draft":o?"":void 0,"is-selected":!o&&n?"":void 0,"is-translucent":w?"":void 0,"is-transparent":z?"":void 0,style:or,onClick:pr,onContextMenu:vr,onMouseEnter:C=>{I(!0),V(C.metaKey)},onMouseMove:C=>{V(C.metaKey)},onMouseLeave:()=>{I(!1),V(!1),nr(!1)},onFocus:()=>O(!0),onBlur:()=>{O(!1),nr(!1)},onKeyDown:K,onTransitionEnd:kr})});Ch.displayName="ArcColorSwatch";const vn=Ch;vn.getColorData=nt,Cr("ArcColorSwatch",bb);const Ah=(r,e)=>{const a=r.colors??[];return Zr(e)?a.some(n=>Zr(n)&&ct(n,e))?r:{...r,colors:[...a,e]}:a.some(o=>!Zr(o)&&oo(o,e))?r:{...r,colors:[...a,e]}},zh=(r,e)=>{const a=r.colors??[],t=Zr(e)?a.filter(o=>!(Zr(o)&&ct(o,e))):a.filter(o=>Zr(o)||!oo(o,e));return t.length===a.length?r:{...r,colors:t}},Eh=(r,e,a)=>r.map(t=>t.id===e.id?Ah(t,a):t),_h=(r,e,a)=>r.map(t=>t.id===e.id?zh(t,a):t),$b=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.addColor: pass (palettes, palette, color) when the first argument is an array.");return Eh(r,e,a)}return Ah(r,e)},yb=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.removeColor: pass (palettes, palette, color) when the first argument is an array.");return _h(r,e,a)}return zh(r,e)},xb=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?Eh(r,t,a):r},kb=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?_h(r,t,a):r},wb=d`
@layer arc-components {

  [arc-color-palette] {
    display: flex;
    flex-direction: column;
    gap: var(${M}•8);

    [arc-color-palette-header] {
      display: flex;
      flex-direction: column;
      gap: var(${M}•4);
      font-size: var(${b}•12);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      small { opacity: 0.612; }
    }

    [arc-color-palette-set] {
      display: flex;
      flex-wrap: wrap;
      gap: var(${M}•4);
      max-width: calc((var(${b}•24) + var(${M}•4)) * 7 + var(${M}•24));
      min-inline-size: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }

    [arc-color-palette-picker] {
      display: grid;
      gap: var(${M}•8);
      padding-top: var(${M}•8);
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    }

    [arc-color-palette-inputs] {
      display: grid;
      gap: var(${M}•8);
      grid-template-columns: auto auto;
      align-items: end;
    }

    [arc-color-palette-actions] {
      display: flex;
      justify-content: flex-end;
      gap: var(${M}•8);
    }

    [arc-add-color] {
      --arc-icon-size: var(${b}•10);
    }
  }

}
`,fn=({children:r,id:e,heading:a,showHeading:t=!0,setAriaLabel:o,colors:n=[],activeColor:c,activeGradient:l,format:u=wa.format,canAddColor:h=!1,canAddGradient:p=!1,canRemoveColor:f=!1,contrastBgColor:g,addColorFlow:v="standalone",sharedSwatchProps:m,onSwatchClick:y,onAddColor:S,onRemoveColor:k,onColorChange:w,onAddColorToggle:z,labels:x,..._})=>{const P=(0,s.useMemo)(()=>Fc(x),[x]),R=v==="embedded",U=Or(void 0,"add-color-anchor"),T=Or(void 0,"add-color-popover"),L=Or(void 0,"palette-heading"),G=t&&!!a,I=_t(y),H=_t(S),V=_t(k),er=_t(w),O=_t(z),[J,nr]=(0,s.useState)(n),[sr,yr]=(0,s.useState)(!1),[q,tr]=(0,s.useState)(!1),{isSelectionControlled:Mr,activeSelectedColor:dr,setUncontrolledSelectedColor:br,selectColor:hr}=sb({activeColor:c}),pr=(0,s.useMemo)(()=>rl(dr),[dr]),vr=(0,s.useMemo)(()=>J.map(Q=>Zr(Q)?{normalized:Ua(Q),rgba:null}:{normalized:to(Q),rgba:Kr(Dr(Q))}),[J]),kr=(0,s.useMemo)(()=>vr.map(Q=>pr?Q.normalized===pr.comparisonKey?!0:!!pr.selectedRgba&&!!Q.rgba&&Uc(Q.rgba,pr.selectedRgba):!1),[vr,pr]),K=(0,s.useMemo)(()=>kr.some(Boolean),[kr]),or=(0,s.useMemo)(()=>!!l&&J.some(Q=>Zr(Q)&&ct(Q,l)),[l,J]),C=!R&&K?void 0:dr;(0,s.useEffect)(()=>{nr(n)},[n]);const $=(0,s.useCallback)(Q=>{if(typeof Q=="object"&&Q!==null&&"hsv"in Q){er?.(Q);return}const Vr=Dr(Q),Ja=Wc(Q),D=nt(Vr,{format:u,contrastBgColor:g});er?.({...D,name:Ja})},[er,u,g]),N=(0,s.useRef)(!1),ar=(0,s.useCallback)(Q=>{Q&&(N.current=!0,tr(!0)),yr(Q),O?.(e,Q)},[e,O]),E=(0,s.useCallback)(()=>ya?.handlePopover?.(T,"show"),[T]),F=(0,s.useCallback)(()=>ya?.handlePopover?.(T,"hide"),[T]);(0,s.useEffect)(()=>{sr&&N.current&&(N.current=!1,E())},[sr,E]);const Y=(0,s.useMemo)(()=>({id:e,heading:a,showHeading:t,colors:J,activeColor:c,activeGradient:l,format:u,canAddColor:h,canAddGradient:p,canRemoveColor:f,contrastBgColor:g,addColorFlow:v,sharedSwatchProps:m,onSwatchClick:I,onAddColor:H,onRemoveColor:V,onColorChange:er,onAddColorToggle:O}),[e,a,t,J,c,l,u,h,p,f,g,v,m,I,H,V,er,O]),{draftColorIndex:cr,draftColorValue:ir,startAddDraft:wr,updateDraftColor:Lr,cancelDraftColor:re,saveDraftColor:He,saveCurrentColor:Ie}=lb({palette:Y,isSelectionControlled:Mr,onAddColor:H,emitColorChange:$,setLocalColors:nr,setUncontrolledSelectedColor:br,initialColorValue:C,shouldOpenPopover:!R,notifyAddColorToggle:ar,showPopover:E,hidePopover:F}),ce=(0,s.useMemo)(()=>J.map((Q,Vr)=>cr===Vr&&ir!=null?ir:Q),[cr,ir,J]),Re=(0,s.useMemo)(()=>{if(cr==null||ir==null||pr==null||cr<0||cr>=kr.length||Zr(ir))return kr;const Q=[...kr];return Q[cr]=oh(ir,pr),Q},[kr,cr,ir,pr]),Ve=(0,s.useMemo)(()=>Zr(ir)?null:rl(ir),[ir]),aa=(0,s.useMemo)(()=>cr==null||Ve==null?!1:Qs(J.filter(Q=>!Zr(Q)),ir,{skipIndex:cr}),[cr,Ve,ir,J]),ie=(0,s.useCallback)((Q,Vr)=>{if(!Q?.colorData)return;if(Q.kind==="gradient"){const{gradient:D}=Q.gradientData;if(Q.action==="remove"&&f){nr(ur=>ur.filter(Sr=>!(Zr(Sr)&&ct(Sr,D)))),V?.(Y,D,Vr);return}I?.({...Q,shouldClosePicker:!1},Vr);return}const Ja={color:Q.colorData.value,name:Q.colorData.name};if(Q.action==="remove"&&f){nr(D=>{const ur=D.filter(Sr=>Zr(Sr)||!oo(Sr,Ja));return ur.length===D.length?D:ur}),V?.(Y,Ja,Vr);return}hr(Ja),I?.({...Q,shouldClosePicker:!1},Vr),$(Q.colorData)},[f,$,V,I,Y,hr]),je=(0,s.useCallback)(Q=>cr===Q&&ir!=null,[cr,ir]);(0,s.useEffect)(()=>{if(!R||cr==null)return;const Q=(p?l:void 0)??(h?dr:void 0);Q!=null&&Lr(Q)},[l,dr,h,p,cr,R,Lr]);const ee=(0,s.useCallback)(Q=>{const Vr=Q?.newState==="open";yr(Vr),O?.(e,Vr)},[e,O]),Ge=(0,s.useCallback)(Q=>{const Vr=(p?l:void 0)??(h?dr??wa.color:wa.color);Ie(Vr,Q)},[h,p,l,dr,Ie]),Ue=(0,s.useCallback)(Q=>{Q.key!=="Escape"||!sr||re(Q)},[re,sr]),Ke=(0,s.useMemo)(()=>cr==null||!Zr(ir)?!1:J.some((Q,Vr)=>Vr!==cr&&Zr(Q)&&ct(Q,ir)),[cr,ir,J]),jt=h||p,Mt=R&&(!((p?l:void 0)??(h?dr:void 0))||!sr&&(p&&l?or:K)),xo=R?P.addCurrentColor:P.addSwatch,Bn=R&&sr?P.cancel:xo,La=R||!sr,ko=h&&p?void 0:[p?"gradient":"solid"];let Ci=Ge;return R||(Ci=sr?re:wr),(0,i.jsxs)("div",{..._,"arc-color-palette":e,"is-adding-color":sr?"":void 0,children:[G&&(0,i.jsx)("header",{"arc-color-palette-header":"",id:L,children:typeof a=="string"?(0,i.jsx)("strong",{children:a}):(0,i.jsx)(ue,{...a,layout:"inline",isStrong:!0})}),(0,i.jsxs)("fieldset",{"arc-color-palette-set":"",id:U,"aria-labelledby":G?L:void 0,"aria-label":G?void 0:o??P.colorPalette,children:[ce?.map((Q,Vr)=>{if(Zr(Q)){const Ja=`${Ua(Q)}-${Vr}`,D=!!l&&ct(l,Q);return(0,s.createElement)(vn,{...m,key:Ja,kind:"gradient",gradient:Q,name:Q.name,isDraft:je(Vr),isSelected:D,canRemoveColor:f&&!je(Vr),contrastBgColor:g,labels:x,onClick:ie})}return(0,s.createElement)(vn,{...m,key:`${Dr(Q)}-${Vr}`,color:Q,kind:"swatch",isDraft:je(Vr),isSelected:Re[Vr],canRemoveColor:f&&!(R&&je(Vr)),contrastBgColor:g,tooltip:R&&je(Vr)?P.saveColor:void 0,labels:x,onClick:R&&je(Vr)?He:ie})}),jt&&La&&(0,i.jsx)(Br,{"arc-add-color":"",popoverTarget:T,icon:"fa-regular fa-plus",layout:"icon",shape:"round",size:"sm",hierarchy:"secondary",tooltip:Bn,onClick:Ci,isDisabled:Mt})]}),jt&&!R&&q&&(0,i.jsx)(Wa,{mode:"add",heading:"",panels:ko,canTogglePanels:h&&p,color:Zr(ir)?wa.color:ir??wa.color,gradient:Zr(ir)?ir:void 0,format:u,labels:x,onChange:Q=>{Q.activePanel==="solid"?Lr(Q.color.value):Lr(Q.gradient.gradient)},onPreviewColor:Q=>Lr(Q.value),onPreviewGradient:Q=>Lr(Q.gradient),popoverProps:{id:T,popover:"manual",anchorAt:"right-center",alternateAnchorId:U,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,onToggle:ee,onKeyDown:Ue,footerSlot:(0,i.jsxs)(co,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)(Br,{"arc-color-picker-button":"cancel",text:P.cancel,hierarchy:"secondary",size:"sm",onClick:re}),(0,i.jsx)(Br,{"arc-color-picker-button":"save",text:P.save,size:"sm",onClick:He,isDisabled:aa||Ke})]})}}),r&&(0,i.jsx)("footer",{"arc-color-palette-footer":"",children:r})]})};fn.addColor=$b,fn.removeColor=yb,Cr("ArcColorPalette",wb);const Sb=(0,s.memo)(function({palette:e,canAddColor:a,canAddGradient:t,canRemoveColor:o,activePaletteColor:n,activePaletteGradient:c,contrastBgColor:l,labels:u,onSwatchClick:h,onAddColor:p,onRemoveColor:f}){const g=(0,s.useCallback)((v,m)=>{h(v,m,e.id)},[e.id,h]);return(0,i.jsx)(fn,{...e,canAddColor:a??e.canAddColor,canAddGradient:t??e.canAddGradient,canRemoveColor:o,addColorFlow:"embedded",activeColor:n,activeGradient:c,contrastBgColor:l,labels:u,onAddColor:p,onRemoveColor:f,onSwatchClick:g})}),Ph=({palettes:r=[],canAddColor:e,canAddGradient:a,canRemoveColor:t,activePaletteColor:o,activePaletteGradient:n,contrastBgColor:c,selectedNameRef:l,hsvRef:u,popoverId:h,labels:p,onAddColor:f,onRemoveColor:g,commitLocalHsv:v,...m})=>{const y=(0,s.useRef)(r);y.current=r;const S=(0,s.useCallback)((k,w,z)=>{const x=y.current.find(P=>P.id===z);if(!x)return;if(w?.preventDefault(),w?.stopPropagation(),k?.action==="remove"&&(t??x.canRemoveColor)){x.onSwatchClick?.(k,w);return}k?.kind!=="gradient"&&k?.colorData&&(l.current=k.colorData.name,v(k.colorData.hsv));try{x.onSwatchClick?.(k,w)}catch{}if((k?.shouldClosePicker??!0)&&h)try{ya.handlePopover(h,"hide")}catch{}},[t,v,h,l]);return r.length?(0,i.jsx)("div",{...m,"arc-color-palettes":"","arc-color-picker-section":"palettes",children:r.map(k=>(0,i.jsx)(Sb,{palette:k,canAddColor:e,canAddGradient:a,canRemoveColor:!!(t??k.canRemoveColor),activePaletteColor:o,activePaletteGradient:n,contrastBgColor:c,labels:p,onSwatchClick:S,onAddColor:f,onRemoveColor:g},k.id))}):null},Th=({onCommit:r})=>{const e=(0,s.useRef)(!1),a=(0,s.useCallback)((t,o)=>{const n=()=>{e.current=!1,o(),r()};return{onChange:({value:c})=>{e.current=!0,t(Number(c))},onPointerUp:n,onPointerCancel:n,onBlur:()=>{e.current&&n()}}},[r]);return{isPreviewingRef:e,createInputProps:a}},Ih=1,Cb=/^[0-9A-Fa-f]{3}$/,Ab=/^[0-9A-Fa-f]{4}$/,zb="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}",Eb="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}",Rh=r=>{if(Cb.test(r))return{kind:"three",expanded:Ks(r)};if(Ab.test(r)){const e=Kr(`#${r}`);if(e)return{kind:"four",shorthand:r,expanded:ao(e),alphaPercent:Math.round(e.a*100)}}return null},_b=(r,e,a)=>r?.kind==="three"?a.hexExpandHint(r.expanded.toUpperCase()):r?.kind==="four"?e?a.hexApplyAlphaHint(r.expanded.toUpperCase(),r.alphaPercent):a.hexExpandHint(r.expanded.toUpperCase()):a.hexInvalid,Pb=(r,e,a,t=Ce)=>{const o=Va(r),n=Rh(o),c=o.length>0&&(!a&&o.length===8||!e&&o.length!==6&&o.length!==8||Kr(`#${o}`)===null),u=!e&&o.length>0&&o.length!==6&&o.length!==8||!a&&o.length===8?_b(n,a,t):t.hexInvalid,h=!a&&o.length===8?t.hexRgbOnly:u;let p=t.applyExpandedHex;return n?.kind==="four"?p=a?t.applyHexWithAlpha(n.expanded.toUpperCase(),n.alphaPercent):t.applyExpandedHexValue(n.expanded.toUpperCase()):n?.kind==="three"&&(p=t.applyExpandedHexValue(n.expanded.toUpperCase())),{isInvalid:c,errorAid:{tooltip:h,ariaLabel:p,fix:n}}},jh=(r,e,a,t)=>{const o=Kr(`#${r}`);o&&(e(r,{applyHexAlpha:!0,...t}),a(ao(o)))},Tb=(r,e,a,t)=>{if(e){jh(r,a,t);return}const o=Kr(`#${r}`);if(o){const n=ao(o);t(n),a(n)}},Ib=(r,e,a,t)=>{if(e)jh(r,a,t);else{const o=r.slice(0,6);t(o),a(o)}},Rb=(r,e,a,t)=>{r.kind==="three"?(a(r.expanded),e(r.expanded)):t?(e(r.shorthand,{applyHexAlpha:!0}),a(r.expanded)):(a(r.expanded),e(r.expanded))},jb=(r,e=!1)=>{const a=Va(r);return!e&&a.length>6?a.slice(0,6):a},Mb=(r,e,a,t)=>{if(!a&&(r.length===8||t?.applyHexAlpha===!0))return!1;if(!e&&r.length>0){const o=r.length===6||r.length===8,n=t?.applyHexAlpha===!0&&r.length===4;if(!o&&!n)return!1}return!0},Mh=()=>typeof window<"u"&&"EyeDropper"in window&&typeof window.EyeDropper=="function",dl=Mh(),Lh=dl?window.EyeDropper:void 0,Dh=Lh?new Lh:void 0,Oh=({onColorPicked:r,labels:e,...a})=>{const t=e??Ce,[o,n]=(0,s.useState)(!1),c=async()=>{if(!(!dl||!Dh||o)){n(!0);try{const{sRGBHex:l}=await Dh.open();if(typeof r=="function"){const u=De(Xc(l,"#000000"));r(Oe({...u,a:1},!1))}else console.warn("EyeDropper: onColorPicked prop was not provided")}catch(l){l instanceof DOMException&&l.name==="AbortError"||console.error("EyeDropper failed:",l)}finally{n(!1)}}};return dl?(0,i.jsx)("div",{"arc-color-eye-dropper":"",children:(0,i.jsx)(Br,{...a,onClick:c,layout:"icon",shape:"square",size:"md",variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-eye-dropper",text:t.eyeDropper,tooltip:t.eyeDropperTooltip})}):null},lo=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),Lb=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),ul=({children:r,...e})=>(0,i.jsx)(i.Fragment,{children:!!r&&(0,i.jsx)(wt,{...e,children:(0,i.jsx)(St,{children:r})})}),Db=({children:r,layout:e,size:a,variant:t,tag:o="span",...n})=>(0,i.jsx)(o,{...n,"data-layout":e,"data-size":a,"data-variant":t,children:r}),Ob=()=>(0,i.jsx)("span",{"input-element":"spacer"}),Bb=r=>(0,i.jsx)(lo,{...r,"input-element":"header"}),Nb=r=>(0,i.jsx)(ul,{...r,"input-element":"header-label"}),Fb=r=>(0,i.jsx)(lo,{...r,"input-element":"header-slot"}),Hb=r=>(0,i.jsx)(lo,{...r,"input-element":"body"}),Vb=r=>(0,i.jsx)(ul,{...r,"input-element":"input-prefix"}),Gb=r=>(0,i.jsx)(ul,{...r,"input-element":"input-suffix"}),Ub=r=>(0,i.jsx)(Lb,{...r,"input-element":"input-action"}),Kb=r=>(0,i.jsx)(lo,{...r,"input-element":"footer"}),Wb=r=>(0,i.jsx)(lo,{...r,"input-element":"footer-caption"}),Xb=r=>(0,i.jsx)(lo,{...r,"input-element":"footer-slot"}),qb=r=>e=>{if(!(e?.target instanceof HTMLInputElement))return;const a={name:e?.target?.name,value:e?.target?.value};r?.(a,e)},Wr=d`--arc•input`,Ka=d`${Wr}•fg`,Yc=d`${Ka}•disabled`,Zc=d`${Ka}•readonly`,Jc=d`${Ka}•invalid`,la=d`${Wr}•bg`,Qc=d`${la}•hover`,ri=d`${la}•disabled`,ei=d`${la}•readonly`,ai=d`${la}•invalid`,Yb=d`${Wr}•align`,Bh=d`${Yb}•items`,Nh=d`${Wr}•header`,ti=d`${Nh}•label•color`,Fh=d`${Nh}•slot•color`,Hh=d`${Wr}•footer`,hl=d`${Hh}•caption•color`,Vh=d`${Hh}•slot•color`,pl=d`${Wr}•border`,gl=d`${pl}•radius`,Zb=d`${pl}•width`,da=d`${pl}•color`,vl=d`${Wr}•outline`,Gh=d`${vl}•size`,Uh=d`${vl}•offset`,Kh=d`${vl}•color`,mn=d`${Wr}•height`,Jb=d`${Wr}•padding`,oi=d`${Jb}•inline`,fl=d`${oi}•end`,Wh=d`${Wr}•slot`,ml=d`${Wh}•gap`,bl=d`${Wh}•font•size`,ni=d`${da}•hover`,ci=d`${da}•disabled`,$l=d`${da}•readonly`,bn=d`${da}•invalid`,yl=d`${Wr}•action•height`,Xh=d`${Wr}•gap`,xl=d`${Wr}•font•size`,Qb=d`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${mn}: var(${b}•48);
    ${fl}: var(${M}•8);
    ${yl}: var(${b}•48);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${mn}: var(${b}•40);
    ${yl}: var(${b}•40);
  }

  &[data-size=md] {
    ${mn}: var(${b}•32);
    ${gl}: var(${b}•4);
    ${yl}: var(${b}•32);
  }

  &:has(select) {
    ${oi}: 0;
    ${Bh}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${xl}: var(${b}•14);
    ${bl}: var(${b}•12);

    ${mn}: var(${b}•40); /* default size */
    ${Xh}: var(${M}•6);
    ${ml}: var(${M}•4);
    ${oi}: var(${M}•12);
    ${fl}: var(${M}•3);
    ${gl}: var(${b}•8);
    ${Zb}: var(${b}•1);
    ${Gh}: var(${b}•2);
    ${Uh}: var(${b}•2);

    &[data-size=inherit] {
      ${xl}: 0.875em; /* 14px at 100% */
      ${bl}: 0.75em; /* 12px at 100% */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${Ka}: var(--arc-color-fg-primary);
    ${ti}: inherit;
    ${Fh}: var(--arc-color-fg-secondary);
    ${hl}: var(--arc-color-fg-secondary);
    ${Vh}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${la}: var(--arc-color-bg-primary);
      ${Qc}: var(--arc-color-bg-primary);
      ${da}: var(--arc-color-border-mid);
      ${ni}: var(--arc-color-border-heavy);

      ${Yc}: var(--arc-color-fg-disabled);
      ${ri}: var(--arc-color-bg-secondary);
      ${ci}: var(--arc-color-border-mid);

      ${Zc}: var(--arc-color-fg-primary);
      ${ei}: var(--arc-color-bg-disabled);
      ${$l}: var(--arc-color-border-mid);

      ${Jc}: var(--arc-color-fg-critical-mid);
      ${ai}: var(--arc-color-bg-primary);
      ${bn}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${la}: var(--arc-color-bg-secondary);
      ${Qc}: var(--arc-color-bg-hover-default);
      ${da}: transparent;
      ${ni}: var(--arc-color-border-stark);

      ${Jc}: var(--arc-color-fg-critical-mid);
      ${ai}: var(--arc-color-bg-critical-muted);
      ${bn}: transparent;

      ${Yc}: var(--arc-color-fg-disabled);
      ${ri}: var(--arc-color-bg-disabled);
      ${ci}: transparent;

      ${Zc}: var(--arc-color-fg-primary);
      ${ei}: var(--arc-color-bg-disabled);
      ${bn}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${la}: transparent;
      ${Qc}: var(--arc-color-bg-hover-default);
      ${da}: transparent;
      ${ni}: transparent;

      ${Jc}: var(--arc-color-fg-critical-mid);
      ${ai}: transparent;
      ${bn}: var(--arc-color-fg-critical-mid);

      ${Yc}: var(--arc-color-fg-disabled);
      ${ri}: transparent;
      ${ci}: transparent;

      ${Zc}: var(--arc-color-fg-primary);
      ${ei}: var(--arc-color-bg-disabled);
      ${$l}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:where(:not(:has(
    input:where(:disabled, :read-only),
    select:where(:disabled, [data-readonly])
  ))) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${da}: var(--arc-input-border-color-hover, var(${ni}));
      ${la}: var(--arc-input-background-hover, var(${Qc}));
    }

    &:has([input-element=body]) {
      &:where(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible)
      ) {
        ${Kh}: var(--arc-color-border-focus);
      }
    }
  }

  &:where(:has(
    input[type=range]:not(:disabled),
    select:not(:disabled, [data-readonly])
  )) {
    ${Wr}•cursor: pointer;
  }

  &:where(:has(
    input:not([type=range]):read-only,
    select[data-readonly]
  )) {
    ${Wr}•cursor: default;
    ${Ka}: var(${Zc});
    ${la}: var(${ei});
    ${da}: var(${$l});
  }

  &:has(input:disabled, select:disabled) {
    ${Wr}•cursor: not-allowed;
    ${Ka}: var(${Yc});
    ${la}: var(${ri});
    ${da}: var(${ci});
    ${ti}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${la}: var(${ai});
    ${ti}: var(${Ka});
    ${da}: var(${bn});
    ${hl}: var(${Jc});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${Wr}•display: flex;
  }

  &[data-layout=hug] {
    ${Wr}•display: inline-flex;
  }

  & {
    ${Wr}•border: var(--arc-border-width-sm) solid var(${da});
    ${Wr}•outline: var(${Gh}) solid var(${Kh}, transparent);
  }
}

/* Inter-Component Communications ----------------------------------• */

[arc-input] {
  --arc-icon-text-line-height: normal;
  --arc-label-cursor: var(${Wr}•cursor, inherit); /* ArcLabel • cursor syncing */

  &[arc-text-input][data-size=md] {
    --arc-button-border-radius: var(--arc-border-radius-sm);
    --arc-button-outline-offset: 0;
    --arc-button-height: 80%; /* ArcButton • the input size 'md' needs
                                      a slightly smaller "input-action" button
                                      footprint; there's no direct access to
                                      ArcButton['size'] prop in this context */
  }
}

[arc-input]:not([hidden]) {
  display: var(${Wr}•display, flex);
  flex-direction: column;
  gap: var(${ml});
  color: var(--arc-input-color, var(${Ka}));

  :is([input-element=header], [input-element=footer]) {
    flex: none;
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${bl}));
    gap: var(${ml});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${ti}));
    opacity: var(--arc-input-header-label-opacity, unset);
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${Fh}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${hl}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${Vh}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    position: relative;
    display: flex;
    align-items: var(${Bh}, center);
    gap: var(--arc-input-gap, var(${Xh}));
    height: var(--arc-input-height, var(${mn}));
    font-size: var(${xl});

    color: var(--arc-input-color, var(${Ka}));
    background-color: var(--arc-input-background, var(${la}));
    border: var(--arc-input-border, var(${Wr}•border));
    border-radius: var(--arc-input-border-radius, var(${gl}));
    outline: var(${Wr}•outline, none);
    outline-offset: var(--arc-input-outline-offset, var(${Uh}));

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${Wr}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${oi}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${fl});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);

      &:not([type=range]) {
        border: var(--arc-border-width-sm) solid transparent;
        background: transparent;
      }

      /* @note - textfield appearance suppresses native spinners for number inputs */
      &[arc-input-type=number][is-appearance=textfield] {
        appearance: textfield;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          appearance: none;
        }
      }

      &[arc-input-type=search]::-webkit-search-cancel-button {
        appearance: none;
        display: none;
      }
    }

    /* @note - reset font-size for nested input elements */
    [input-element] { font-size: var(--arc-input-element-font-size, 1em); }
  }

  [input-element=input-prefix] {
    flex: none;
    opacity: var(--arc-input-prefix-opacity, unset);
    font-weight: var(--arc-input-prefix-font-weight, unset);
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: var(--arc-input-action-display, flex);
    align-items: center;
    justify-content: center;
  }
}

}
`,r$={onChangeHandler:qb,Wrapper:Db,Spacer:Ob,Header:Bb,HeaderLabel:Nb,HeaderSlot:Fb,InputBody:Hb,InputPrefix:Vb,InputSuffix:Gb,InputAction:Ub,Footer:Kb,FooterCaption:Wb,FooterSlot:Xb};Cr("ArcInput",Qb);const Pr=r$,e$="[input-element=body]",a$=24;function t$({inputRef:r,onChange:e,enabled:a,deltaPerStep:t=a$}){const o=(0,s.useRef)(e);o.current=e,(0,s.useEffect)(()=>{if(!a||t<=0)return;let n=0;const c=()=>r.current,l=()=>{const v=c();if(!(v instanceof Element))return null;const m=v.closest(e$);return m instanceof HTMLElement?m:null},u=(v,m)=>{const y=o.current;if(!y)return;const S={name:v.name,value:m};y(S,{target:v,currentTarget:v})},h=()=>{n=0},p=v=>{const m=c();if(!m||document.activeElement!==m||m.type!=="number"||m.disabled||m.readOnly)return;v.preventDefault(),v.stopPropagation();const y=Number(m.step)||1,S=Number(m.min),k=Number(m.max),w=Number.isFinite(S)?S:void 0,z=Number.isFinite(k)?k:void 0;let x=Number(m.value);if(!Number.isFinite(x))return;n+=v.deltaY;const _=t,P=()=>{const T=Math.max(w??-1/0,x-y);return T===x?!1:(x=T,u(m,String(T)),!0)},R=()=>{const T=Math.min(z??1/0,x+y);return T===x?!1:(x=T,u(m,String(T)),!0)};for(;n>=_;){if(!P()){n=0;break}n-=_}for(;n<=-_;){if(!R()){n=0;break}n+=_}},f=l(),g=c();if(!(!f||!g||g.type!=="number"))return g.addEventListener("blur",h),f.addEventListener("wheel",p,{passive:!1}),()=>{g.removeEventListener("blur",h),f.removeEventListener("wheel",p)}},[a,t,r])}const ii=fr(pa,["fill","hug"]),si=fr(ze,["inherit","xl","lg","md"]),kl=fr(Ur,["outline","solid","plain"]),o$=ii,n$=si,c$=fr(kl,["outline","solid"]),i$=["text","number","password","email","url"],uo=(0,s.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",inputProps:t,headerLabel:o,headerSlot:n,inputPrefix:c,inputAction:l,inputSuffix:u,footerCaption:h,footerSlot:p,...f},g)=>{const{id:v,wheelControl:m,appearance:y,onChange:S,...k}=t,w="arc-search"in f,z=w?"search":k?.type||"text",x=k?.disabled||void 0,_=k?.readOnly||void 0,P=k?.required||void 0,R=!!(o||n),U=!!(h||p),T=(0,s.useRef)(null),L=(0,s.useCallback)(H=>{T.current=H,oa(g,H)},[g]),G=typeof m=="object"?m.deltaPerStep:void 0;t$({enabled:z==="number"&&m!==!1,deltaPerStep:G,inputRef:T,onChange:S});const I=l&&(0,s.isValidElement)(l)?(0,s.cloneElement)(l,{size:"md"}):l;return(0,i.jsxs)(Pr.Wrapper,{...f,"arc-text-input":"","arc-input":z,layout:r,size:e,variant:a,children:[R&&(0,i.jsxs)(Pr.Header,{children:[(0,i.jsx)(Pr.HeaderLabel,{htmlFor:v,children:o}),!!n&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.HeaderSlot,{children:n})]}),(0,i.jsxs)(Pr.InputBody,{children:[(0,i.jsx)(Pr.InputPrefix,{htmlFor:v,children:c}),(0,i.jsx)("input",{...k,...w?{type:z}:{},ref:L,id:v,"arc-input-type":z,onChange:Pr.onChangeHandler(S),"aria-disabled":x,"aria-readonly":_,"aria-required":P,"is-appearance":y??void 0}),(0,i.jsx)(Pr.InputSuffix,{htmlFor:v,children:u}),(0,i.jsx)(Pr.InputAction,{children:I})]}),U&&(0,i.jsxs)(Pr.Footer,{children:[(0,i.jsx)(Pr.FooterCaption,{children:h}),!!p&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.FooterSlot,{children:p})]})]})}),qh=({commitDraft:r,setIsEditing:e,onRevert:a})=>{const t=(0,s.useCallback)(()=>{e(!0)},[e]),o=(0,s.useCallback)(()=>{e(!1),r()},[e,r]),n=(0,s.useCallback)(c=>{if(c.key==="Enter"){c.preventDefault(),e(!1),r(),c.currentTarget.blur();return}c.key==="Escape"&&(c.preventDefault(),e(!1),a(),c.currentTarget.blur())},[e,r,a]);return{onFocus:t,onBlur:o,onKeyDown:n}},Yh=({hsv:r,draftValue:e,label:a,showLabel:t=!0,setIsEditing:o,commitDraft:n,setDraftValue:c,expandHexShorthand:l=!1,hasAlphaTools:u=!0,labels:h})=>{const p=h??Ce,f=a??p.hex,g=Or(void 0,"hex-input"),v=(0,s.useRef)(null),m=ao(De(r)),[y,S]=(0,s.useState)(!1),{isInvalid:k,errorAid:w}=(0,s.useMemo)(()=>Pb(e,l,u,p),[e,l,u,p]),{onFocus:z,onBlur:x,onKeyDown:_}=qh({commitDraft:n,setIsEditing:o,onRevert:()=>c(m)}),P=(0,s.useCallback)(()=>{S(!0);const H=Va(e);if(H.length===8){Ib(H,u,n,c),x();return}if(l&&H.length===3){const V=Ks(H);c(V),n(V),o(!1),x();return}l&&H.length===4&&Tb(H,u,n,c),x()},[e,l,u,c,n,o,x]),R=(0,s.useCallback)(H=>{if(H.key!=="ArrowUp"&&H.key!=="ArrowDown")return;const V=H.key==="ArrowUp"?Ih:-Ih,er=H.altKey?"r":H.metaKey?"g":"b",O=H.shiftKey?16:1,J=Ju(Va(e),De(r),er,V,O);c(J),n(J,{phase:"preview"}),H.preventDefault()},[e,r,c,n]),U=(0,s.useCallback)(H=>{if(R(H),!H.defaultPrevented){if(H.key==="Enter"){H.preventDefault(),o(!1),H.currentTarget.blur();return}H.key==="Escape"&&_(H)}},[R,o,_]),T=({value:H})=>{const V=jb(H??"",u);c(V),V.length===6&&n(V,{phase:"preview"})},L=k&&y,G=L?w.tooltip:void 0,I=(0,s.useCallback)(()=>{const H=Rh(Va(e));H&&Rb(H,n,c,u),queueMicrotask(()=>{v.current?.focus()})},[e,n,c,u]);return(0,i.jsx)(uo,{ref:v,"arc-color-input":"hex",size:"md",variant:"solid",headerLabel:t?f:void 0,inputPrefix:"#",inputAction:L?(0,i.jsx)(Br,{layout:"icon",icon:"fa-solid fa-exclamation-circle",variant:"tertiary",tooltip:w.tooltip,"aria-label":w.ariaLabel,onClick:I}):void 0,inputProps:{id:g,"aria-label":f,placeholder:"...",value:e,pattern:u?zb:Eb,maxLength:u?9:6,title:G,"aria-invalid":L?!0:void 0,style:{textTransform:"uppercase",letterSpacing:"0.0625ch"},onFocus:z,onBlur:P,onKeyDown:U,onChange:T}})},Zh=["value","pct","pctSigned","min","max"],Jh=new RegExp(`\\{#(${Zh.join("|")})\\}`,"g"),s$=ii,l$=si,d$=kl,u$=["top","inline"],Qh=({text:r,value:e,toValue:a,pctSigned:t,min:o,max:n})=>{const c={value:String(e??""),pct:String(a??""),pctSigned:String(t??""),min:String(o??""),max:String(n??"")};return typeof r=="string"?r.replace(Jh,(l,u)=>c[u]):typeof r=="function"?r({...c,toValue:a,pctSigned:t}):r},h$=10,wl=r=>r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight",Sl=(r,{shiftKey:e},{step:a=1,stepLarge:t=h$}={})=>{if(!wl(r))return null;const o=e?t:a;return r==="ArrowDown"||r==="ArrowLeft"?-o:o},r0=(r,e,{min:a=-1/0,max:t=1/0}={})=>Z(r+e,a,t),p$=(r,{getValue:e,onStep:a,min:t,max:o,step:n,stepLarge:c})=>{const l=Sl(r.key,r,{step:n,stepLarge:c});if(l==null)return!1;r.preventDefault();const u=r0(e(),l,{min:t,max:o});return a(u,r),!0},e0=(...r)=>e=>{r.some(a=>(a(e),e.defaultPrevented))},a0=(r,e,a,t)=>Z(Math.round(r/e)*e,a,t),t0=(r,e,a,t,o)=>{const n=r%a===0;return e>0?Z(n?r+a:Math.ceil(r/a)*a,t,o):Z(n?r-a:Math.floor(r/a)*a,t,o)},o0=({snapStep:r,min:e,max:a,step:t=1,value:o,onChange:n,onKeyDown:c,onPointerDown:l,onPointerMove:u,onPointerUp:h,onPointerCancel:p})=>{const f=(0,s.useRef)(!1),g=(0,s.useRef)(null),v=(0,s.useCallback)(()=>{g.current?.(),g.current=null},[]),m=(0,s.useCallback)(()=>{if(g.current||typeof window>"u")return;const x=_=>{f.current=_.shiftKey};window.addEventListener("keydown",x,!0),window.addEventListener("keyup",x,!0),g.current=()=>{window.removeEventListener("keydown",x,!0),window.removeEventListener("keyup",x,!0)}},[]);(0,s.useEffect)(()=>v,[v]);const y=(0,s.useCallback)(x=>{f.current=x.shiftKey,m(),l?.(x)},[l,m]),S=(0,s.useCallback)(x=>{f.current=!1,v(),h?.(x)},[h,v]),k=(0,s.useCallback)(x=>{f.current=!1,v(),p?.(x)},[p,v]),w=(0,s.useCallback)((x,_)=>{if(!r||!f.current){n?.(x,_);return}const P=a0(Number(x.value),r,e,a);n?.({...x,value:String(P)},_)},[r,e,a,n]),z=(0,s.useCallback)(x=>{if(!r||!x.shiftKey||!wl(x.key)){c?.(x);return}const _=Sl(x.key,x,{step:t,stepLarge:r});if(_==null){c?.(x);return}x.preventDefault();const P=t0(o,_>0?1:-1,r,e,a),R={value:String(P)};n?.(R,x)},[r,t,e,a,o,n,c]);return r?{onChange:w,onKeyDown:z,onPointerDown:y,onPointerMove:u,onPointerUp:S,onPointerCancel:k}:{onChange:n,onKeyDown:c,onPointerDown:l,onPointerMove:u,onPointerUp:h,onPointerCancel:p}},Ne=d`--arc•slider`,ea=d`${Ne}•track`,Ir=d`${Ne}•thumb`,ho={BASE:d`
    ${ea}•bg: var(--arc-slider-track-background, var(--arc-color-border-mid));
    ${ea}•progress•bg: var(--arc-slider-progress-background, var(--arc-color-bg-theme-heavy));
    ${ea}•height: var(--arc-slider-track-height, max(4px, 0.25em));

    ${Ir}•size: var(--arc-slider-thumb-size, max(16px, 1em));
    ${Ir}•size•hover: var(--arc-slider-thumb-size-hover, max(16px, 1em));
    ${Ir}•size•anchor: var(--arc-slider-thumb-size-hover, var(--arc-slider-thumb-size, max(16px, 1em)));
    ${Ir}•size•rest: var(${Ir}•size•anchor);

    ${Ir}•bg: var(--arc-slider-thumb-background, var(--arc-color-bg-theme-heavy));
    ${Ir}•shadow: var(--arc-slider-thumb-shadow, var(--arc-shadow-md));

    &:has([has-small-thumb]) {
      ${Ir}•size: var(--arc-slider-thumb-size, max(8px, 0.5em));
      ${Ir}•size•rest: var(--arc-slider-thumb-size, max(8px, 0.5em));
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      ${Ir}•size: var(${Ir}•size•hover);
    }

    &:has([arc-slider-input]:disabled) {
      ${Ir}•bg: var(--arc-slider-thumb-background-disabled, var(--arc-color-bg-neutral-mid));
      ${ea}•progress•bg: var(--arc-slider-progress-background-disabled, var(--arc-color-bg-neutral-mid));
      ${ea}•bg: var(--arc-slider-track-background-disabled, var(--arc-color-bg-disabled));
      ${Ir}•shadow: var(--arc-slider-thumb-shadow-disabled, none);
    }

    ${Ir}•shift: calc((var(${ea}•height) - var(${Ir}•size)) / 2);
    ${Ir}•shift•anchor: calc((var(${ea}•height) - var(${Ir}•size•anchor)) / 2);

    ${Ne}•radius: var(--arc-border-radius-pill);
    ${Ne}•vx: calc((100% - var(${Ir}•size)) * (var(--js•v, 0) / 100));
    ${Ne}•vx•anchor: calc((100% - var(${Ir}•size•anchor)) * (var(--js•v, 0) / 100));

    ${Ir}•cx•nudge: calc(
      (var(--js•v, 0) / 100 - 0.5) * (var(${Ir}•size•anchor) - var(${Ir}•size•rest))
    );

    ${Ne}•tx: calc(var(${Ne}•vx•anchor) + var(${Ir}•cx•nudge));
    ${Ne}•ty: var(${Ir}•shift•anchor);
  `,THUMB:d`
    appearance: none;
    width: var(${Ir}•size);
    height: var(${Ir}•size);
    border: none;
    background: var(${Ir}•bg);
    translate: 0 0;
    box-sizing: border-box;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${Ir}•shadow);
    transition-property: translate, width, height, background;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
  `,THUMB_FOCUS:d`
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: var(--arc-slider-thumb-outline-offset, 0.125em);
  `,TRACK:d`
    display: flex;
    align-items: center;
    height: var(${ea}•height);
    border-radius: var(${Ne}•radius);
    background: var(${ea}•bg);
  `},g$=d`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-slider] {
    ${ho.BASE}
    font-size: initial;

    --arc-input-header-label-font-weight: var(--arc-slider-label-font-weight, unset);
    --arc-input-prefix-font-weight: var(--arc-slider-label-font-weight, var(--arc-font-weight-600));

    --arc-input-header-label-opacity: var(--arc-slider-label-opacity, unset);
    --arc-input-prefix-opacity: var(--arc-slider-label-opacity, unset);

    ::-webkit-inner-spin-button {
      appearance: none;
    }

    ::-webkit-list-button {
      appearance: none;
    }

    ::-moz-number-spin-box {
      display: none;
    }

    [arc-label-content] {
      display: contents;
    }

    > [input-element=body] {
      --arc-input-gap: var(${b}•16);
      --arc-input-padding-inline: 0;
      --arc-input-height: var(--arc-slider-input-height, unset);
      --arc-label-align-items: center;
    }

    [input-element=input-prefix] {
      --arc-input-element-font-size: max(12px, 0.75em);
    }

    [arc-slider-surface] {
      --arc-input-min-width: 3em;
      --arc-tooltip-text-align: center;
      --arc-tooltip-min-width: 2.5em;
    }

    [arc-slider-output] {
      --arc-input-text-align: center;
      --arc-input-width: var(--arc-slider-number-input-width, max(38px, 4ch));
      --arc-input-action-height: 100%;
      --arc-input-outline-offset: var(${b}•2); /* matches the Button component's outline-offset */
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-slider] {
    max-width: var(--js•max•width, var(--arc-slider-max-width, 100%));

    [arc-slider-surface] {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      min-width: 0;
      height: var(${ea}•height);
      border-radius: var(${Ne}•radius);

      -webkit-user-select: none;
      user-select: none;

      /* track progress (fill to thumb center); logical inset follows dir so RTL mirrors like native range */
      &::before {
        content: '';
        position: absolute;
        display: var(--arc-slider-progress-display, block);
        inset-block: calc(50% - var(${ea}•height) / 2);
        inset-inline-start: 0;
        inset-inline-end: auto;
        width: calc(var(${Ir}•size) / 2 + var(${Ne}•vx));
        height: var(${ea}•height);
        border-radius: var(${Ne}•radius);
        background: var(${ea}•progress•bg);
        pointer-events: none;
        transition: background 200ms ease-out;
      }

      &:has(:focus:focus-visible) {
        [arc-slider-thumb] { ${ho.THUMB_FOCUS} }
      }
    }

    [arc-slider-input] {
      ${ho.TRACK}

      &::-moz-range-track { ${ho.TRACK} }
      &::-moz-focus-outer { border: 0; }

      &::-moz-range-thumb { ${ho.THUMB} }
      &::-webkit-slider-thumb { ${ho.THUMB} }
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      [arc-slider-input]::-webkit-slider-thumb { translate: var(${Ir}•cx•nudge) 0; }
      [arc-slider-input]::-moz-range-thumb { translate: var(${Ir}•cx•nudge) 0; }

      &:dir(rtl) {
        [arc-slider-input]::-webkit-slider-thumb { translate: calc(-1 * var(${Ir}•cx•nudge)) 0; }
        [arc-slider-input]::-moz-range-thumb { translate: calc(-1 * var(${Ir}•cx•nudge)) 0; }
      }
    }

    [arc-slider-thumb] {
      position: absolute;
      width: var(${Ir}•size•anchor);
      height: var(${Ir}•size•anchor);
      inset-block-start: var(${Ne}•ty);
      inset-inline-start: var(${Ne}•tx);
      border-radius: var(${Ne}•radius);
      pointer-events: none;
    }
  }

  [arc-slider-captions] {
    position: absolute;
    inset: 0.5em 0 auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25em;
    color: var(--arc-color-fg-secondary);
  }

  [arc-slider-caption] {
    font-size: max(10px, 0.625em);
  }

  [arc-slider-output] {
    --arc-input-action-display: contents;
    --arc-button-height:  var(--arc-slider-output-button-height, 100%);

    /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
    --arc-input-suffix-opacity: var(--arc-slider-output-opacity, 61.2%);

    flex: none;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: max(6px, 0.375em);
  }
}

`,n0=(0,s.forwardRef)(({id:r,layout:e="hug",size:a="inherit",variant:t="solid",headerLabel:o,labelPlacement:n="top",displayPrecision:c=0,headerSlot:l,inputIdPrefix:u="arc-slider",inputProps:h,inputAction:p,inputSuffix:f,footerCaption:g,footerSlot:v,valueInputProps:m={},tooltipProps:y={},renderOutput:S,snapStep:k,style:w,...z},x)=>{const _=(0,s.useRef)(null),P=Or(r,u),{minLabel:R,maxLabel:U,surfaceName:T,smallThumbAtRest:L=!1,onChange:G,value:I,min:H=0,max:V=100,step:er=1,disabled:O,onKeyDown:J,onPointerDown:nr,onPointerMove:sr,onPointerUp:yr,onPointerCancel:q,...tr}=h,Mr=Number(H),dr=Number(V),br=Math.min(Mr,dr),hr=Math.max(Mr,dr),pr=(0,s.useRef)(!1),vr=(0,s.useRef)(Number(I));pr.current||(vr.current=Number(I));const kr=(0,s.useCallback)((ee,Ge)=>{if(pr.current){const Ue=Number(ee.value);Number.isFinite(Ue)&&(vr.current=Ue)}G?.(ee,Ge)},[G]),K=(0,s.useCallback)(ee=>{pr.current=!0,vr.current=Number(I),nr?.(ee)},[nr,I]),or=(0,s.useCallback)(ee=>{pr.current=!1,yr?.(ee)},[yr]),C=(0,s.useCallback)(ee=>{pr.current=!1,q?.(ee)},[q]),$=o0({snapStep:k,min:br,max:hr,step:Number(er),value:Number(I),onChange:kr,onKeyDown:J,onPointerDown:K,onPointerMove:sr,onPointerUp:or,onPointerCancel:C}),N=pr.current?vr.current:I,ar=(0,s.useMemo)(()=>({...tr,id:P,value:N,min:br,max:hr,step:er,disabled:O}),[tr,P,N,br,hr,er,O]),{showTooltip:E=!1,text:F,...Y}=y,{toValue:cr,pctSigned:ir=0}=Ns({value:Number(N),min:Number(br),max:Number(hr),step:Number(er)}),wr=(0,s.useMemo)(()=>({value:N,toValue:xa(cr,Number(c)),pctSigned:xa(ir,Number(c)),min:br,max:hr}),[c,hr,br,ir,cr,N]),Lr=(0,s.useMemo)(()=>E?Qh({text:F,...wr}):void 0,[E,F,wr]),re=(0,s.useMemo)(()=>Pr.onChangeHandler($.onChange),[$.onChange]),He=(0,s.useCallback)((ee,Ge)=>{const Ue=String(ee.value??I??br);G?.({...ee,value:Ue},Ge)},[G,I,br]),Ie=(0,s.useMemo)(()=>{const{deltaPerStep:ee,showValueInput:Ge=!1,...Ue}=m;return S&&typeof S=="function"?S(wr):(f||Ge||p)&&(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)(Pr.InputSuffix,{htmlFor:P,children:Qh({text:f,...wr})}),Ge&&(0,i.jsx)(uo,{"arc-slider-number-input":"",layout:"hug",size:a,variant:t,inputProps:{onKeyDown:$.onKeyDown,onPointerDown:$.onPointerDown,onPointerMove:$.onPointerMove,onPointerUp:$.onPointerUp,onPointerCancel:$.onPointerCancel,...Ue,...ar,id:`${P}-text`,type:"number",appearance:"textfield",wheelControl:ee?{deltaPerStep:ee}:void 0,onChange:He}}),p&&(0,i.jsx)(Pr.InputAction,{children:p})]})},[m,f,p,S,wr,P,a,t,ar,$.onKeyDown,$.onPointerDown,$.onPointerMove,$.onPointerUp,$.onPointerCancel,He]),ce=(0,s.useMemo)(()=>!!o,[o]),Re=(0,s.useMemo)(()=>ce&&n==="top",[ce,n]),Ve=(0,s.useMemo)(()=>ce&&n==="inline",[ce,n]),aa=(0,s.useMemo)(()=>!!(Re||l),[Re,l]),ie=(0,s.useMemo)(()=>!!(g||v),[g,v]),je=(0,s.useMemo)(()=>({...w,"--js\u2022v":String(cr)}),[w,cr]);return(0,i.jsxs)(Pr.Wrapper,{...z,"arc-slider":"","arc-input":"range",layout:e,size:a,style:je,children:[aa&&(0,i.jsxs)(Pr.Header,{children:[Re&&(0,i.jsx)(Pr.HeaderLabel,{htmlFor:P,children:o}),!!l&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.HeaderSlot,{children:l})]}),(0,i.jsxs)(Pr.InputBody,{children:[Ve&&(0,i.jsx)(Pr.InputPrefix,{htmlFor:P,children:o}),(0,i.jsxs)("span",{"arc-slider-surface":T??"","has-small-thumb":L?"":void 0,children:[(0,i.jsx)("label",{"arc-slider-thumb":"",ref:_,htmlFor:P,"aria-hidden":!0}),(0,i.jsx)(mc,{...Y,isEnabled:E&&!O,text:Lr||String(N),alternateAnchor:_,children:(0,i.jsx)("input",{...tr,onKeyDown:$.onKeyDown,onPointerDown:$.onPointerDown,onPointerMove:$.onPointerMove,onPointerUp:$.onPointerUp,onPointerCancel:$.onPointerCancel,ref:x,id:P,"arc-slider-input":"","arc-input-type":"range",type:"range",value:N,min:br,max:hr,step:er,disabled:O,"aria-disabled":O,onChange:re})}),(R||U)&&(0,i.jsxs)("span",{"arc-slider-captions":"",children:[R&&(0,i.jsx)("label",{"arc-slider-caption":"min",htmlFor:P,children:R}),!!U&&(0,i.jsx)(Pr.Spacer,{}),U&&(0,i.jsx)("label",{"arc-slider-caption":"max",htmlFor:P,children:U})]})]}),Ie&&(0,i.jsx)("span",{"arc-slider-output":"",children:Ie})]}),ie&&(0,i.jsxs)(Pr.Footer,{children:[(0,i.jsx)(Pr.FooterCaption,{children:g}),!!v&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.FooterSlot,{children:v})]})]})});n0.displayName="ArcSlider";const Cl=n0;Cr("ArcSlider",g$);const Al=({inputProps:r,snapStep:e,...a})=>{const{id:t,...o}=r;return(0,i.jsx)(Cl,{"arc-color-slider":r.surfaceName,...a,snapStep:e,inputIdPrefix:t,inputProps:o})},c0=({getValue:r,onStep:e,min:a,max:t,step:o,stepLarge:n})=>(0,s.useCallback)(c=>{p$(c,{getValue:r??(()=>Number(c.currentTarget.value)),onStep:e,min:a,max:t,step:o,stepLarge:n})},[r,e,a,t,o,n]),v$=({hsv:r,draftValue:e,label:a,showLabel:t=!1,setIsEditing:o,commitDraft:n,setDraftValue:c,labels:l})=>{const h=a??(l??Ce).opacity,p=Or(void 0,"alpha-input"),{onFocus:f,onBlur:g,onKeyDown:v}=qh({commitDraft:n,setIsEditing:o,onRevert:()=>c(ro(r.a))}),m=c0({min:0,max:100,getValue:()=>Number(e),onStep:k=>{const w=String(k);c(w),n(w)}}),y=e0(m,v),S=({value:k})=>{c(String(k??1))};return(0,i.jsx)(uo,{"arc-color-input":"alpha",size:"md",variant:"solid",inputSuffix:"%",headerLabel:t?h:void 0,inputProps:{id:p,"aria-label":h,placeholder:"...",value:e,type:"number",appearance:"textfield",min:0,max:100,step:1,onFocus:f,onBlur:g,onKeyDown:y,onChange:S}})},i0=r=>Oe({...r,a:1},!1).replace(/^#/,""),s0=(0,s.memo)(function({color:e,hsv:a,isSimpleMode:t,selectedNameRef:o,hsvRef:n,commitLocalHsv:c,tools:l,expandHexShorthand:u,labels:h,...p}){const f=h??Ce,g=(0,s.useRef)(!1),[v,m]=(0,s.useState)(()=>{const $=Kr(Dr(e));return $?i0($):"000000"}),[y,S]=(0,s.useState)(ro(a.a)),[k,w]=(0,s.useState)(!1),[z,x]=(0,s.useState)(null),_=(0,s.useMemo)(()=>z??a,[z,a]),P=(0,s.useCallback)(($,N,ar)=>{ar==="preview"&&!sn($,N)&&x($)},[]),R=(0,s.useCallback)($=>{if(g.current)return;const N=i0($);m(ar=>{if(ar===N)return ar;if(!u){const E=Va(ar);if(E.length===3||E.length===4||E.length===8){const F=Kr(`#${E}`);if(F){const Y={...F,a:$.a};if(Hs(Y,$))return ar}}}return N})},[u]),U=(0,s.useCallback)(($,N="commit")=>{o.current=void 0;const ar=n.current,E={...ar,...$};P(E,ar,N),N==="preview"&&R(De(E)),c(E,{phase:N})},[c,n,o,R,P]),[T,L]=(0,s.useState)(null),[G,I]=(0,s.useState)(null),H=(0,s.useCallback)(()=>{c(n.current,{phase:"commit"})},[c,n]),{createInputProps:V}=Th({onCommit:H}),er=(0,s.useCallback)(($,N)=>V(ar=>{N(ar),U($(ar),"preview")},()=>N(null)),[V,U]),O=(0,s.useCallback)(($,N="commit")=>U({s:$.saturation,v:$.value},N),[U]),J=(0,s.useCallback)($=>{m(Va($))},[]),nr=(0,s.useCallback)($=>{S($)},[]),sr=(0,s.useCallback)($=>{g.current=$},[]),yr=(0,s.useCallback)($=>{w($),$&&S(ro(n.current.a))},[n]);(0,s.useEffect)(()=>{!z||!sn(a,z)||x(null)},[a,z]),(0,s.useEffect)(()=>{R(De(a))},[a,R]);const q=(0,s.useMemo)(()=>k?y:ro(_.a),[k,y,_.a]),tr=(0,s.useMemo)(()=>({hue:_.h,saturation:_.s,value:_.v}),[_]),Mr=(0,s.useMemo)(()=>Z(Math.round(a.a*100),qe.ALPHA_MIN,qe.ALPHA_MAX),[a.a]),dr=G??Mr,br=T??a.h,hr=(0,s.useMemo)(()=>({text:f.hueValue(Math.round(br)),showTooltip:!0}),[br,f]),pr=(0,s.useMemo)(()=>({text:f.opacityValue(Math.round(dr)),showTooltip:!0}),[dr,f]),vr=(0,s.useMemo)(()=>!l||l.length===0?null:{colorField:!!l?.includes("color-field"),hueSlider:!!l?.includes("hue-slider"),alphaSlider:!!l?.includes("alpha-slider"),sliderTools:!!l?.includes("hue-slider")||!!l?.includes("alpha-slider"),hexInput:!!l?.includes("hex-input"),alphaInput:!!l?.includes("alpha-input"),inputTools:!!l?.includes("hex-input")||!!l?.includes("alpha-input"),alphaTools:!!l?.includes("alpha-slider")||!!l?.includes("alpha-input"),eyeDropper:Mh()&&!!l?.includes("eye-dropper")},[l]),kr=vr?.alphaTools??!1,K=(0,s.useCallback)(($,N)=>{o.current=void 0;const ar=Va($??v);if(!Mb(ar,u??!1,kr,N))return;const E=De(n.current),F=Xu(ar,E,{shouldApplyParsedAlpha:N?.applyHexAlpha===!0}),Y=N?.phase??"commit";if(!F||Hs(F,E)&&Y==="preview")return;const cr=n.current,ir=nn(F,cr.h);P(ir,cr,Y),c(ir,{phase:Y})},[c,u,kr,v,n,o,P]),or=(0,s.useCallback)(($,N)=>{o.current=void 0;const ar=Ku($??y);ar!=null&&(U({a:ar},N?.phase??"commit"),(N?.phase??"commit")==="commit"&&S(ro(ar)))},[y,o,U]),C=(0,s.useCallback)($=>{const N=Xc($,"#000000");c(N)},[c]);return vr?(0,i.jsx)("div",{...p,"arc-color-tools":t?"simple":"solid","arc-color-picker-section":"tools",children:t?(0,i.jsxs)(i.Fragment,{children:[vr.hexInput&&(0,i.jsx)(Yh,{hsv:a,draftValue:v,setIsEditing:sr,commitDraft:K,setDraftValue:J,expandHexShorthand:u,hasAlphaTools:vr.alphaTools,labels:h}),vr.eyeDropper&&(0,i.jsx)(Oh,{onColorPicked:C,labels:h}),vr.alphaSlider&&(0,i.jsx)(Al,{headerLabel:f.opacity,tooltipProps:pr,snapStep:qe.ALPHA_SNAP_STEP,inputProps:{id:"alpha-slider",surfaceName:"alpha",min:qe.ALPHA_MIN,value:dr,max:qe.ALPHA_MAX,step:1,"aria-label":f.opacity,...er($=>({a:Z($/100,0,1)}),I)}})]}):(0,i.jsxs)(i.Fragment,{children:[vr.colorField&&(0,i.jsx)(nb,{value:tr,onChange:O,labels:h}),vr.eyeDropper&&(0,i.jsx)(Oh,{onColorPicked:C,labels:h}),vr.sliderTools&&(0,i.jsxs)("div",{"arc-color-sliders":"",children:[vr.hueSlider&&(0,i.jsx)(Al,{tooltipProps:hr,snapStep:qe.HUE_SNAP_STEP,inputProps:{id:"hue-slider",surfaceName:"hue",min:qe.HUE_MIN,value:br,max:qe.HUE_MAX,step:1,"aria-label":f.hue,...er($=>({h:Z($,qe.HUE_MIN,qe.HUE_MAX)}),L)}}),vr.alphaSlider&&(0,i.jsx)(Al,{tooltipProps:pr,snapStep:qe.ALPHA_SNAP_STEP,inputProps:{id:"alpha-slider",surfaceName:"alpha",min:qe.ALPHA_MIN,value:dr,max:qe.ALPHA_MAX,step:1,"aria-label":f.opacity,...er($=>({a:Z($/100,0,1)}),I)}})]}),vr.inputTools&&(0,i.jsxs)("div",{"arc-color-inputs":"",children:[vr.hexInput&&(0,i.jsx)(Yh,{hsv:a,draftValue:v,setIsEditing:sr,commitDraft:K,setDraftValue:J,expandHexShorthand:u,hasAlphaTools:vr.alphaTools,labels:h}),vr.alphaInput&&(0,i.jsx)(v$,{hsv:a,showLabel:!vr.hexInput,draftValue:q,setIsEditing:yr,commitDraft:or,setDraftValue:nr,labels:h})]})]})}):null}),f$=({color:r,hsv:e,hsvRef:a,tools:t,palettes:o,activePaletteColor:n,popoverId:c,selectedNameRef:l,expandHexShorthand:u,commitLocalHsv:h,labels:p})=>{const f=o&&o.length>0,g=t&&t.length>0;return(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)(Ph,{palettes:o,activePaletteColor:n,commitLocalHsv:h,selectedNameRef:l,hsvRef:a,popoverId:c,labels:p}),g&&(0,i.jsx)(s0,{isSimpleMode:!0,color:r,hsv:e,hsvRef:a,selectedNameRef:l,commitLocalHsv:h,tools:t,expandHexShorthand:u,labels:p})]})},ve=d`--arc•radio`,m$=d`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${ve}•font•size: 1em;
      ${ve}•icon•size: 0.625em;
      ${ve}•size: 1.125em;
      ${ve}•gap: 0.5em;
    }

    &[data-size=md] {
      ${ve}•font•size: var(${b}•14);
      ${ve}•icon•size: var(${b}•10);
      ${ve}•size: var(${b}•18);
      ${ve}•gap: var(${b}•8);
    }

    &[data-size=sm] {
      ${ve}•font•size: var(${b}•12);
      ${ve}•icon•size: var(${b}•10);
      ${ve}•size: var(${b}•16);
      ${ve}•gap: var(${b}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${W}•border•radius: var(--arc-border-radius-circle);
    ${W}•size: var(${ve}•size);
    ${W}•icon•size: var(${ve}•icon•size);
    ${W}•width: var(${ve}•size);
    ${W}•height: var(${ve}•size);
    ${W}•translate: 0 var(${b}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${ve}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${ve}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${W}•color: transparent;
      ${W}•background: transparent;
      ${W}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${W}•background: var(--arc-color-bg-theme-subtle);
        ${W}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${W}•background: var(--arc-color-bg-disabled);
        ${W}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${W}•color: var(--arc-color-fg-on-theme-heavy);
      ${W}•background: var(--arc-color-bg-theme-heavy);
      ${W}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${W}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${W}•color: var(--arc-color-fg-on-theme-mid);
        ${W}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,b$=fr(pa,["hug","fill"]),$$=fr(ze,["inherit","md","sm"]),l0=({children:r,label:e,layout:a,size:t="md",useMask:o=!0,...n})=>{const{className:c,title:l,...u}=n,h={className:c,title:l},p=r??e,f=(0,i.jsx)(Jo,{...u,type:"radio"}),g=o&&(0,i.jsxs)(Pc,{type:"radio",children:[f,(0,i.jsx)(Ar,{icon:"fa-solid fa-circle-small arc-fw"})]}),v=!!p&&(0,i.jsxs)(wt,{layout:a,children:[g||f,(0,i.jsx)(St,{children:p})]});return(0,i.jsx)("span",{...h,"arc-radio":"","data-size":t,children:v||g||f})};Cr("ArcRadio",m$);const Pt=d`--arc•rb`,oe=d`${Pt}•o`,$n=d`${oe}•icon`,yn=d`${oe}•text`,d0=d`${Pt}•fs`,u0=d`${Pt}•br`,zl=d`${Pt}•di`,El=d`${Pt}•pd`,_l=d`${Pt}•gp`,Pl=d`${Pt}•bg`,it=d`${oe}•fg`,st=d`${oe}•bg`,li=d`${oe}•bc`,Tl=d`${oe}•bw`,h0=d`${oe}•bs`,xn=d`${oe}•br`,Il=d`${oe}•fw`,Rl=d`${oe}•ol`,jl=d`${oe}•ow`,p0=d`${oe}•oo`,g0=d`${oe}•lh`,po={BAR:d`
    ${d0}: var(${b}•14); /* font size */
    ${u0}: var(${b}•8); /* border radius */

    &:is([data-layout=hug], :not([data-layout])) { /** @default */
      ${zl}: inline-flex;
    }

    &[data-layout=fill] {
      ${zl}: flex;
    }
  `,OPTIONS:d`
    ${it}: var(--arc-color-fg-secondary);
    ${st}: transparent;
    ${li}: transparent;
    ${Tl}: var(${b}•1);
    ${g0}: calc(var(${oe}•sz) - var(${Tl}) * 2);
    ${jl}: var(${b}•2);
    ${p0}: 0;
  `,COMMON:d`
    ${Pl}: var(--arc-color-bg-secondary);
    ${El}: var(${b}•4);
    ${_l}: var(${b}•2);

    ${xn}: var(${b}•6);

    /* Common sizes */
    &:is([data-size=lg], :not([data-size])) { /* @default */
      ${oe}•sz: var(${b}•32);
      ${$n}•pd: var(${b}•8);
      ${yn}•pd: var(${b}•12);
    }

    &[data-size=md] {
      ${oe}•sz: var(${b}•24);
      ${$n}•pd: var(${b}•6);
      ${yn}•pd: var(${b}•8);
    }
  `,COMMON_OPTION_STATES:d`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${it}: var(--arc-color-fg-on-hover-default);
        ${st}: var(--arc-color-bg-hover-default);
      }
    }

    &:has(:checked) {
      ${it}: var(--arc-color-mono-black);
      ${st}: var(--arc-color-mono-white);
      ${Il}: var(--arc-font-weight-500);

      &:not(:has(:disabled)) {
        ${h0}: var(--arc-shadow-sm);
      }
    }

    &:has(:disabled) {
      ${it}: var(--arc-color-fg-disabled);

      &:has(:checked) {
        ${st}: var(--arc-color-bg-disabled);
        ${li}: var(--arc-color-border-disabled);
      }
    }

    &:has(:focus-within:focus-visible) {
      ${Rl}: var(${jl}) solid var(--arc-color-border-focus);
    }
  `,SOLID:d`
    ${Pl}: transparent;
    ${El}: 0;
    ${_l}: var(${b}•4);

    ${xn}: var(${b}•8);

    /* Solid sizes */
    &:is([data-size=lg], :not([data-size])) {
      ${oe}•sz: var(${b}•40);
      ${$n}•pd: var(${b}•8);
      ${yn}•pd: var(${b}•12);
    }

    &[data-size=md] {
      ${oe}•sz: var(${b}•32);
      ${$n}•pd: var(${b}•6);
      ${yn}•pd: var(${b}•10);
    }
  `,SOLID_OPTION_STATES:d`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${it}: var(--arc-color-fg-on-hover-default);
        ${st}: var(--arc-color-bg-hover-subtle);
      }
    }

    &:has(:checked) {
      ${it}: var(--arc-color-fg-primary);
      ${st}: var(--arc-color-bg-secondary);
      ${Il}: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${it}: var(--arc-color-fg-disabled);

      &:has(:checked) {
        ${st}: var(--arc-color-bg-disabled);
        ${li}: var(--arc-color-border-disabled);
      }
    }

    &:has(:focus-within:focus-visible) {
      ${Rl}: var(${jl}) solid var(--arc-color-border-focus);
    }
  `},y$=d`
@layer arc-components {

  [arc-radio-bar] {
    ${po.BAR}
    ${po.OPTIONS}

    /* Inter-Component Communication -------------------------------• */
    --arc-label-opacity-disabled: 1; /* intrinsic disabled opacity not needed here; letting tokens handle it */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* VARIANTS ----------------------------------------------------• */
    &:is([data-variant=common], :not([data-variant])) { /* @default */
      ${po.COMMON}

      [arc-radio-bar-option] {
        ${po.COMMON_OPTION_STATES}
      }
    }

    &[data-variant=solid] {
      ${po.SOLID}

      [arc-radio-bar-option] {
        ${po.SOLID_OPTION_STATES}
      }
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    box-shadow: var(${h0}, none);
    border-radius: var(${xn});
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${d0}));
    display: var(${zl});
    gap: var(${_l});
    border-radius: var(${u0});
    background: var(${Pl});
    padding: var(${El});
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${xn});
      outline: var(${Rl}, none);
      outline-offset: var(${p0});
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${g0});
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${oe}•sz);
      min-width: var(${oe}•sz);

      border-radius: var(${xn});
      border: var(${Tl}) solid var(${li});
      background: var(${st});
      color: var(${it});
      font-weight: var(${Il}, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${yn}•pd);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${$n}•pd);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,x$=fr(pa,["hug","fill"]),k$=fr(ze,["lg","md"]),w$=fr(Ur,["common","solid"]),Ml=({children:r,label:e,icon:a,name:t,value:o,...n})=>{const c=r||(0,i.jsx)(ue,{icon:a,text:e});return(0,i.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":n?.checked||void 0,children:(0,i.jsx)(l0,{...n,name:t,value:o,label:c,layout:"fill",useMask:!1,onChange:n.onChange??Ct})})},v0=({children:r,size:e="lg",layout:a="hug",variant:t="common",name:o,options:n,value:c,isDisabled:l,onChange:u,...h})=>{const p=Or(o,"arc-radio-bar");return(0,i.jsx)("ul",{...h,"arc-radio-bar":"","data-size":e,"data-layout":a,"data-variant":t,"is-disabled":l?"":void 0,role:"radiogroup",children:n?n.map(({hidden:f,onChange:g,value:v,...m})=>f||v==null||v===""?null:(0,s.createElement)(Ml,{...m,key:String(v),name:p,value:v,checked:c===v,disabled:l||m.disabled,onChange:g??u??Ct})):r})};Cr("ArcRadioBar",y$);const S$=(r,e)=>r==="gradient"?e.panelGradient:e.panelSolid,C$=({canTogglePanels:r,panels:e,activePanel:a,setActivePanel:t,labels:o=Ce})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("div",{"arc-color-picker-section":"control",children:(0,i.jsx)(v0,{layout:"fill",size:"md",children:e.map(n=>(0,i.jsx)(Ml,{name:"color-picker-panel",value:n,label:S$(n,o),checked:n===a,onChange:()=>t(n)},n))})})}),A$=({color:r,hsv:e,hsvRef:a,tools:t,palettes:o,activePaletteColor:n,popoverId:c,selectedNameRef:l,expandHexShorthand:u,commitLocalHsv:h,onAddColor:p,onRemoveColor:f,labels:g})=>{const v=o&&o.length>0,m=t&&t.length>0;return(0,i.jsxs)(i.Fragment,{children:[m&&(0,i.jsx)(s0,{color:r,hsv:e,selectedNameRef:l,hsvRef:a,commitLocalHsv:h,tools:t,expandHexShorthand:u,labels:g}),(0,i.jsx)(Ph,{palettes:v?o:void 0,activePaletteColor:n,commitLocalHsv:h,selectedNameRef:l,hsvRef:a,popoverId:c,onAddColor:p??Ct,onRemoveColor:f,labels:g,"has-divider":m?"top":void 0})]})},Ll=r=>{const e=(0,s.useRef)(null),a=(0,s.useRef)(null),t=(0,s.useRef)(r);t.current=r;const o=(0,s.useCallback)(()=>{e.current=null;const h=a.current;a.current=null,h&&t.current(h.value)},[]),n=(0,s.useCallback)(h=>{a.current={value:h},e.current==null&&(e.current=requestAnimationFrame(o))},[o]),c=(0,s.useCallback)(()=>{e.current!=null&&(cancelAnimationFrame(e.current),e.current=null),a.current=null},[]),l=(0,s.useCallback)(()=>{e.current!=null&&(cancelAnimationFrame(e.current),o())},[o]),u=(0,s.useCallback)(()=>e.current!=null,[]);return(0,s.useEffect)(()=>c,[c]),{schedule:n,cancel:c,flush:l,hasPending:u}},f0=.05,m0=.5,z$=4,E$=(0,s.memo)(function({entry:e,sortedIndex:a,angle:t,isDragging:o,stopPositionLabel:n,onAtChange:c,onDragStart:l}){const{stop:u,index:h}=e,p=Z(u.at,rr.STOP_MIN,rr.STOP_MAX),f=(0,s.useCallback)(v=>{const m=bh(v.key,t);if(m==null)return;v.preventDefault();const y=Z(p+m,rr.STOP_MIN,rr.STOP_MAX);c(h,y,!0)},[t,p,c,h]),g=(0,s.useCallback)(v=>{v.preventDefault(),v.stopPropagation(),l(h,v.pointerId)},[l,h]);return(0,i.jsx)("div",{"arc-gradient-stop-thumb":"",role:"slider",tabIndex:0,"aria-valuemin":rr.STOP_MIN,"aria-valuemax":rr.STOP_MAX,"aria-valuenow":Math.round(p),"aria-label":n(a+1),"is-dragging":o?"":void 0,style:{left:`${p}%`,background:String(u.color),zIndex:a+1},onPointerDown:g,onKeyDown:f})}),b0=(r,e)=>{const a=r.getBoundingClientRect(),t=r.offsetWidth/2;return{centerX:a.left+a.width/2,centerY:a.top+a.height/2,axisHalfLength:t,axisAngleDeg:e-90}},_$=({stops:r,angle:e=rr.ANGLE,onUpdateStops:a,onUpdateAngle:t,labels:o})=>{const n=o??Ce,c=(0,s.useRef)(null),l=(0,s.useRef)(null),u=(0,s.useRef)(null),h=(0,s.useRef)(null),p=(0,s.useRef)(null),f=(0,s.useRef)(null),g=(0,s.useRef)(null),v=(0,s.useRef)(null),[m,y]=(0,s.useState)(null),[S,k]=(0,s.useState)(null),[w,z]=(0,s.useState)(null),[x,_]=(0,s.useState)(!1),P=S??e,R=(0,s.useMemo)(()=>m??r??[],[m,r]),U=(0,s.useMemo)(()=>ka(R),[R]),T=(0,s.useMemo)(()=>{const E=R.length>0?R:rr.STOPS;return m?Et(E,rr.STOP_MIN,rr.STOP_MAX):E},[m,R]),L=(0,s.useMemo)(()=>({background:gh({stops:T,angle:rr.ANGLE}),rotate:`${P-90}deg`}),[T,P]),G=(0,s.useCallback)(E=>{a?.(E,"preview")},[a]),I=(0,s.useCallback)((E,F=!1)=>{const Y=Et(E,rr.STOP_MIN,rr.STOP_MAX);a?.(F?ch(Y):Y,"commit")},[a]),H=(0,s.useCallback)(E=>{t?.(E,"preview")},[t]),V=(0,s.useCallback)(E=>{t?.(E,"commit")},[t]),er=(0,s.useCallback)((E,F,Y=!1)=>{const cr=r??[],ir=cr[E];if(!ir||Math.abs(ir.at-F)<f0)return;const wr=cr.map((Lr,re)=>re===E?{...Lr,at:F}:Lr);I(wr,Y)},[I,r]),O=(0,s.useCallback)((E,F,Y)=>{const cr=u.current,ir=c.current;if(!ir)return null;const wr=cr??b0(ir,P);return vh(E,F,wr.centerX,wr.centerY,wr.axisAngleDeg,wr.axisHalfLength,rr.STOP_MIN,rr.STOP_MAX,Y)},[P]),J=(0,s.useCallback)(E=>{if(!Number.isFinite(E))return;const F=Math.round(E),Y=f.current??e;Math.abs(Y-F)<m0||(f.current=F,k(F),(v.current==null||Math.abs(v.current-F)>=m0)&&(v.current=F,H(F)))},[e,H]),nr=(0,s.useCallback)((E,F)=>{const Y=p.current??r??[],cr=Y[E];if(!cr||Math.abs(cr.at-F)<f0)return;const ir=Y.map((He,Ie)=>Ie===E?{...He,at:F}:He);p.current=ir,y(ir);const wr=Et(ir,rr.STOP_MIN,rr.STOP_MAX),Lr=g.current,re=P;(!Lr||!dn({stops:Lr,angle:re},{stops:wr,angle:re}))&&(g.current=wr,G(wr))},[G,P,r]),sr=(0,s.useCallback)(E=>{const F=l.current;if(F==null)return;const Y=O(E.clientX,E.clientY,!1);Y!=null&&nr(F,Y)},[nr,O]),{schedule:yr,cancel:q,flush:tr}=Ll(sr),Mr=(0,s.useCallback)(E=>{const F=h.current;if(!F||!F.hasExceededThreshold)return;const Y=ol(E.clientX,E.clientY,F.centerX,F.centerY),cr=fh(F.startAngle,F.startPointerAngleDeg,Y,rr.ANGLE_MIN,rr.ANGLE_MAX);J(E.shiftKey?mh(cr):cr)},[J]),{schedule:dr,cancel:br,flush:hr}=Ll(Mr),pr=(0,s.useCallback)((E,F)=>{const Y=c.current;Y&&(Y.setPointerCapture(F),l.current=E,u.current=b0(Y,P),p.current=[...r??[]],g.current=Et(p.current,rr.STOP_MIN,rr.STOP_MAX),y(p.current),z(E))},[P,r]),vr=(0,s.useCallback)((E,F)=>{if(U.length===0)return;const Y=O(E,F,!0);if(Y==null)return;const cr=U.reduce((ir,wr)=>{const Lr=Math.abs(wr.stop.at-Y);return!ir||Lr<ir.distance?{stopIndex:wr.index,distance:Lr}:ir},null);cr&&er(cr.stopIndex,Y,!0)},[er,O,U]),kr=(0,s.useCallback)(()=>{const E=h.current;if(E?.hasExceededThreshold&&hr(),br(),h.current=null,!!E){if(E.hasExceededThreshold){const F=f.current;F!=null&&V(F)}else vr(E.startClientX,E.startClientY);f.current=null,v.current=null,k(null),_(!1)}},[br,V,vr,hr]),K=(0,s.useCallback)(()=>{tr(),q();const E=p.current;E&&I(E,!0),l.current=null,u.current=null,p.current=null,g.current=null,y(null),z(null)},[q,I,tr]),or=(0,s.useCallback)(E=>{if(!t){vr(E.clientX,E.clientY);return}const F=c.current;if(!F)return;const Y=F.getBoundingClientRect(),cr=Y.left+Y.width/2,ir=Y.top+Y.height/2;F.setPointerCapture(E.pointerId);const wr=Number.isFinite(E.clientX)?E.clientX:0,Lr=Number.isFinite(E.clientY)?E.clientY:0;h.current={pointerId:E.pointerId,startClientX:wr,startClientY:Lr,lastClientX:wr,lastClientY:Lr,startPointerAngleDeg:ol(wr,Lr,cr,ir),startAngle:e,centerX:cr,centerY:ir,hasExceededThreshold:!1}},[e,vr,t]),C=(0,s.useCallback)(E=>{if(l.current!=null){yr({clientX:E.clientX,clientY:E.clientY});return}const F=h.current;if(!F)return;Number.isFinite(E.clientX)&&Number.isFinite(E.clientY)?(F.lastClientX=E.clientX,F.lastClientY=E.clientY):(F.lastClientX+=E.movementX??0,F.lastClientY+=E.movementY??0);const{lastClientX:Y,lastClientY:cr}=F,ir=Math.hypot(Y-F.startClientX,cr-F.startClientY);if(!F.hasExceededThreshold){if(ir<z$)return;F.hasExceededThreshold=!0,_(!0)}dr({clientX:Y,clientY:cr,shiftKey:E.shiftKey})},[yr,dr]),$=(0,s.useCallback)(()=>{if(l.current!=null){K();return}kr()},[K,kr]),N=(0,s.useCallback)(()=>{if(l.current!=null){K();return}kr()},[K,kr]),ar=(0,s.useCallback)(()=>{l.current!=null&&K()},[K]);return(0,i.jsxs)("div",{"arc-gradient-field-wrapper":"",role:"group","aria-label":n.gradientStops,children:[(0,i.jsxs)("small",{"arc-gradient-field-angle-output":"","aria-hidden":"true",children:[P,"\xB0"]}),(0,i.jsx)("div",{ref:c,"arc-gradient-field":"","is-dragging":w!=null||x?"":void 0,"is-rotating":x?"":void 0,style:L,onPointerDown:or,onPointerMove:C,onPointerUp:$,onPointerCancel:N,onLostPointerCapture:ar,children:U.map((E,F)=>(0,i.jsx)(E$,{entry:E,sortedIndex:F,angle:P,isDragging:w===E.index,stopPositionLabel:n.stopPosition,onAtChange:er,onDragStart:pr},`gradient-stop-thumb-${E.index}`))})]})},{STOP_MIN:go,STOP_MAX:vo}=rr,P$=(0,s.memo)(function({stop:e,stopIndex:a,sortedIndex:t,prevNeighborAt:o,nextNeighborAt:n,editingStopIndex:c,labels:l,onOpenColorEdit:u,onRegisterAnchor:h,onInsertStopAt:p,onUpdate:f,onDelete:g}){const v=l??Ce,m=t+1,y=Or(void 0,"gradient-stop-row-anchor"),S=Or(void 0,"gradient-stop-input"),k=(0,s.useRef)(null),w=(0,s.useRef)(t),[z,x]=(0,s.useState)(!1),_=Z(e.at,go,vo),[P,R]=(0,s.useState)(String(_)),U=c===a,T=(0,s.useCallback)(()=>{R(String(Z(e.at,go,vo)))},[e.at]),L=(0,s.useCallback)((q,tr=!1,Mr="commit")=>{const dr=Number(q??P);if(Number.isNaN(dr))return;const br=Z(dr,go,vo),hr=String(br);R(hr);const pr=tr||el(o,n,br);br!==e.at?f(a,{...e,at:br},pr,Mr):pr&&f(a,e,!0,Mr)},[P,n,f,o,e,a]),G=(0,s.useCallback)(()=>{x(!0)},[]),I=(0,s.useCallback)(()=>{x(!1),L(void 0,!0)},[L]),H=c0({min:go,max:vo,getValue:()=>Number(P),onStep:q=>{const tr=String(q);R(tr),L(tr,!1,"preview")}}),V=(0,s.useCallback)(q=>{if(q.key==="Enter"){q.preventDefault(),x(!1),L(void 0,!0),q.currentTarget.blur();return}q.key==="Escape"&&(q.preventDefault(),x(!1),T(),q.currentTarget.blur())},[L,T]),er=e0(H,V);(0,s.useLayoutEffect)(()=>{if(!z){w.current=t;return}if(w.current===t)return;w.current=t;const q=k.current;if(!q)return;const{selectionStart:tr,selectionEnd:Mr}=q;q.focus({preventScroll:!0}),tr!=null&&Mr!=null&&q.setSelectionRange(tr,Mr)},[z,t]),(0,s.useEffect)(()=>{z||R(String(Z(e.at,go,vo)))},[e.at,z]);const O=(0,s.useCallback)(({value:q})=>{const tr=String(q??P);R(tr),L(tr,!1,"preview")},[L,P]),J=z?P:String(_),nr=(0,s.useCallback)(()=>{g(a)},[g,a]),sr=(0,s.useCallback)(()=>{u(a,y)},[u,y,a]),yr=(0,s.useCallback)(()=>{p(t)},[p,t]);return(0,s.useLayoutEffect)(()=>{h?.(a,y)},[h,y,a]),(0,i.jsxs)("li",{"arc-gradient-stop-row":"",id:y,"is-editing-color":U?"":void 0,children:[t>0&&(0,i.jsx)("span",{"arc-gradient-stop-insert":"",children:(0,i.jsx)(Br,{_isCustom:!0,icon:"fa-solid fa-plus fa-2xs",onClick:yr,tooltip:v.insertColorStop,isDisabled:c!=null})}),(0,i.jsx)(vn,{kind:"gradient-stop",color:e.color,onClick:sr}),(0,i.jsx)(uo,{ref:k,"arc-color-input":"stop",inputProps:{type:"number",appearance:"textfield",id:S,"aria-label":v.stopPosition(m),value:J,min:go,max:vo,step:1,onFocus:G,onBlur:I,onKeyDown:er,onChange:O,wheelControl:{deltaPerStep:24}},size:"md",variant:"solid",inputSuffix:"%"}),(0,i.jsx)("span",{"row-spacer":""}),(0,i.jsx)(Br,{layout:"icon",size:"sm",icon:"fa-regular fa-trash",variant:"tertiary",tooltip:v.removeColorStop,onClick:nr,isDisabled:c!=null})]})}),$0=({children:r,sectionName:e,content:a,...t})=>(0,i.jsxs)("header",{"arc-color-section-header":e??"",...t,children:[(0,i.jsx)(ue,{...typeof a=="object"?a:{text:a},size:"sm",isStrong:!0}),r]}),T$=({stops:r,editFallbackColor:e="#000000",format:a=wa.format,onUpdate:t,labels:o})=>{const n=o??Ce,c=(0,s.useMemo)(()=>r??[],[r]),l=(0,s.useMemo)(()=>ka(c),[c]),[u,h]=(0,s.useState)([]),p=Or(void 0,"gradient-stop-edit-popover"),[f,g]=(0,s.useState)(null),v=(0,s.useRef)(null),[m,y]=(0,s.useState)(),[S,k]=(0,s.useState)(e),[w,z]=(0,s.useState)(!1),[x,_]=(0,s.useState)(!1),[P,R]=(0,s.useState)(),[U,T]=(0,s.useState)(0),L=(0,s.useRef)(!1),G=(0,s.useRef)(null),I=(0,s.useRef)(0),H=(0,s.useCallback)(()=>(I.current+=1,`gradient-stop-${I.current}`),[]),V=(0,s.useCallback)(()=>ya.handlePopover?.(p,"show"),[p]),er=(0,s.useCallback)(()=>ya.handlePopover?.(p,"hide"),[p]);(0,s.useEffect)(()=>{h(C=>C.length===c.length?C:C.length<c.length?[...C,...Array.from({length:c.length-C.length},()=>H())]:C.slice(0,c.length))},[H,c.length]);const O=(0,s.useCallback)((C,$)=>{const N=ka(C);h(N.map(ar=>$[ar.index]??H())),t?.(N.map(ar=>ar.stop))},[H,t]),J=(0,s.useCallback)((C={kind:"append"})=>{const $=c.length,N=C.kind==="append"?uh(c):[...c,dh(c,C)];G.current=$,h(ar=>[...ar,H()]),t?.(N)},[H,c,t]),nr=(0,s.useCallback)((C,$,N=!1,ar="commit")=>{const E=c.map((F,Y)=>Y===C?$:F);if(N){O(E,u);return}t?.(E,ar)},[O,c,t,u]),sr=(0,s.useCallback)(C=>{v.current===C&&(er(),v.current=null,g(null),z(!1)),h($=>$.filter((N,ar)=>ar!==C)),t?.(c.filter(($,N)=>N!==C))},[c,er,t]),yr=(0,s.useCallback)((C,$,N="commit")=>{if(!c[C])return;const E=c.map((F,Y)=>Y===C?{...F,color:$}:F);t?.(E,N)},[c,t]),q=(0,s.useCallback)(()=>{er(),v.current=null,g(null),z(!1)},[er]),tr=(0,s.useCallback)((C,$)=>{const N=c[C];if(!N)return;const ar=v.current!=null;v.current=C,_(!0),g(C),y($),k(N.color),ar?T(E=>E+1):(L.current=!0,R($))},[c]),Mr=(0,s.useCallback)((C,$)=>{if(v.current===C){q();return}tr(C,$)},[q,tr]),dr=(0,s.useCallback)((C,$)=>{G.current!==C||!c[C]||(G.current=null,tr(C,$))},[c,tr]);(0,s.useEffect)(()=>{!L.current||f==null||!m||(L.current=!1,V())},[m,f,V]);const br=(0,s.useCallback)(C=>{const $=C?.newState==="open";z($),$||(v.current=null,g(null))},[]),hr=(0,s.useCallback)(C=>{C.key!=="Escape"||!w||q()},[q,w]),pr=(0,s.useCallback)(C=>{const $=v.current;$!=null&&yr($,C,"preview")},[yr]),vr=(0,s.useCallback)(C=>{k(C);const $=v.current;$!=null&&yr($,C,"commit")},[yr]),kr=(0,s.useCallback)(C=>{Du(C)&&vr(C.color.value)},[vr]),K=(0,s.useCallback)(()=>{c.length<2||O(sh(c),u)},[O,c,u]),or=(0,s.useCallback)(C=>{J({kind:"between",sortedIndex:C})},[J]);return(0,i.jsxs)("div",{"arc-gradient-stops":"",children:[(0,i.jsx)($0,{content:n.gradientStops,sectionName:"stops",children:(0,i.jsxs)(co,{children:[(0,i.jsx)(Br,{"arc-gradient-stop-distribute":"",layout:"icon",size:"sm",icon:"fa-regular fa-arrows-left-right-to-line",variant:"tertiary",onClick:K,tooltip:n.distributeColorStops,isDisabled:c.length<2}),(0,i.jsx)(Br,{"arc-gradient-stop-add":"",layout:"icon",size:"sm",icon:"fa-regular fa-plus",variant:"tertiary",onClick:()=>J({kind:"append"}),tooltip:n.addColorStop,isDisabled:f!=null})]})}),(0,i.jsx)("ul",{"arc-gradient-stop-list":"",children:l.map((C,$)=>(0,i.jsx)(P$,{stop:C.stop,stopIndex:C.index,sortedIndex:$,prevNeighborAt:l[$-1]?.stop.at,nextNeighborAt:l[$+1]?.stop.at,editingStopIndex:f,onOpenColorEdit:Mr,onRegisterAnchor:dr,onInsertStopAt:or,onUpdate:nr,onDelete:sr,labels:o},u[C.index]??`gradient-stop-row-${C.index}`))}),x&&(0,i.jsx)(Wa,{mode:"edit",heading:"",panels:["solid"],color:S,_colorSyncKey:U,format:a,labels:o,onPreviewColor:C=>pr(C.value),onChange:kr,popoverProps:{id:p,popover:"manual",anchorAt:"left-center",alternateAnchorId:m,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,offset:12,onToggle:br,onKeyDown:hr,footerSlot:(0,i.jsxs)(co,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)("span",{"arc-button-bar-spacer":""}),(0,i.jsx)(Br,{"arc-color-picker-button":"save",text:n.done,size:"sm",onClick:q})]})}},P)]})},{ANGLE_MIN:I$,ANGLE_MAX:R$,ANGLE_SNAP_STEP:j$}=rr,M$=({inputProps:r,labels:e,...a})=>{const{id:t="angle-slider",min:o=I$,max:n=R$,step:c=1,value:l,onChange:u,...h}=r,p=e??Ce,f=Or(void 0,`${t}-label`),g=(0,s.useCallback)(v=>{if(v.shiftKey||!wl(v.key))return;const m=Sl(v.key,v,{step:Number(c)});if(m==null)return;v.preventDefault();const y=r0(Number(l),m,{min:Number(o),max:Number(n)}),S={value:String(y)};u?.(S,v)},[o,n,c,l,u]);return(0,i.jsxs)("div",{"arc-gradient-angle-slider":"",children:[(0,i.jsx)($0,{sectionName:"angle",content:p.angle,id:f}),(0,i.jsx)(Cl,{"arc-angle-slider":"",...a,layout:"fill",size:"md",snapStep:j$,inputIdPrefix:t,inputProps:{...h,min:o,max:n,step:c,value:l,onChange:u,onKeyDown:g,"aria-labelledby":f},valueInputProps:{showValueInput:!0},tooltipProps:{showTooltip:!0,text:"{#value}\xB0"}})]})},L$="gradient-angle-presets",D$=(r,e)=>rr.ANGLE_PRESETS.map(a=>({stops:r,angle:a,name:e(a)})),O$=({gradient:r,onSelectAngle:e,labels:a})=>{const t=a??Ce,o=r?.angle??rr.ANGLE,n=(0,s.useMemo)(()=>D$(r?.stops??rr.STOPS,t.gradientAngleOption),[r?.stops,t.gradientAngleOption]),c=(0,s.useMemo)(()=>n.find(u=>u.angle===o),[n,o]),l=u=>{Lu(u)&&e?.(u.gradientData.gradient.angle)};return(0,i.jsx)(fn,{"arc-gradient-presets":"",id:L$,colors:n,activeGradient:c,showHeading:!1,setAriaLabel:t.gradientAngle,onSwatchClick:l,labels:a})},B$=({tools:r,gradient:e,setGradient:a,editFallbackColor:t,format:o,labels:n,...c})=>{const l=(0,s.useMemo)(()=>({stops:e?.stops??[],angle:e?.angle??rr.ANGLE}),[e]),u=(0,s.useCallback)((x,_="commit")=>{a?.({...l,...x},{phase:_})},[l,a]),h=(0,s.useRef)(l.angle),[p,f]=(0,s.useState)(null),g=(0,s.useCallback)(()=>{u({angle:h.current},"commit")},[u]),{isPreviewingRef:v,createInputProps:m}=Th({onCommit:g});(0,s.useEffect)(()=>{v.current||(h.current=l.angle)},[v,l.angle]);const y=(0,s.useMemo)(()=>{const x=_=>Z(_,rr.ANGLE_MIN,rr.ANGLE_MAX);return m(_=>{const P=x(_);h.current=P,f(P),u({angle:P},"preview")},()=>f(null))},[u,m]),S=(0,s.useMemo)(()=>!r||r.length===0?[...Nc]:[...r],[r]),k=(0,s.useMemo)(()=>{const x={gradientField:S.includes("gradient-field"),gradientStops:S.includes("gradient-stops"),angleSlider:S.includes("angle-slider"),anglePresets:S.includes("angle-presets")};return x.gradientField||x.gradientStops||x.angleSlider||x.anglePresets?x:null},[S]);if(!k)return null;const{stops:w,angle:z=rr.ANGLE}=l;return(0,i.jsxs)("div",{...c,"arc-color-tools":"gradient","arc-color-picker-section":"tools",children:[k.gradientField&&(0,i.jsx)(_$,{stops:w,angle:z,onUpdateStops:(x,_)=>u({stops:x},_??"commit"),onUpdateAngle:(x,_)=>u({angle:x},_??"commit"),labels:n}),k.gradientStops&&(0,i.jsx)(T$,{stops:w,editFallbackColor:t,format:o,onUpdate:(x,_)=>u({stops:x},_??"commit"),labels:n}),k.angleSlider&&(0,i.jsx)(M$,{labels:n,inputProps:{surfaceName:"angle",min:rr.ANGLE_MIN,max:rr.ANGLE_MAX,value:p??z,...y}}),k.anglePresets&&(0,i.jsx)(O$,{gradient:l,onSelectAngle:x=>u({angle:x}),labels:n})]})},N$=({tools:r,...e})=>{const a=r&&r.length>0;return(0,i.jsx)(i.Fragment,{children:a&&(0,i.jsx)(B$,{tools:r,...e})})},y0=({heading:r,showGoBack:e,goBackProps:a,...t})=>(0,i.jsx)(ya,{...t,variant:"common","arc-color-picker-wrapper":"",showGoBack:e,goBackProps:a,headerSlot:!!r&&(0,i.jsx)(ue,{...typeof r=="string"?{text:r}:r,"arc-color-picker-heading":"",overflow:"truncate",isStrong:!0})});y0.displayName="ArcColorPickerWrapper";const kn=(r,e)=>r.length===0||r.includes(e)?e:r[0],wa={mode:"normal",color:"#05aff0",format:"auto",heading:Ce.heading,palettes:[]},F$={icon:"fa-regular fa-paint-brush",text:Ce.colorPicker,layout:"icon",shape:"round",size:"md"},H$={stops:rr.STOPS,angle:rr.ANGLE},V$=["solid","gradient"],x0=(r,e)=>r.includes("gradient")?r.length===1||e==="gradient":!1,k0=(r,e,a,t)=>{const o=r.stops??[],n=r.angle??rr.ANGLE;return o.length>0?{stops:o,angle:n}:x0(a,e)?ph(r,t).gradient:{stops:[],angle:n}},Wa=({children:r,mode:e=wa.mode,color:a=wa.color,gradient:t=H$,format:o=wa.format,heading:n=wa.heading,tools:c,omitTools:l,isInline:u=!1,showGoBack:h=!1,goBackProps:p,canTogglePanels:f=!1,panels:g=V$,activePanel:v="solid",onUpdatePanel:m,palettes:y,popoverProps:S,onChange:k,onSnapshotChange:w,onPreviewColor:z,onPreviewGradient:x,onAddColor:_,onRemoveColor:P,expandHexShorthand:R,_colorSyncKey:U,labels:T,...L})=>{const G=(0,s.useMemo)(()=>Fc(T),[T]),I=(0,s.useMemo)(()=>Js(a).color,[a]),H=Or(S?.id??void 0,"color-picker"),[V,er]=(0,s.useState)(()=>kn(g,v)),O=e==="simple",nr=V==="gradient"?"gradient":O?"simple":"solid",sr=(0,s.useCallback)((D,ur=V)=>k0(D,ur,g,I),[V,g,I]),[yr,q]=(0,s.useState)(()=>k0(t,kn(g,v),g,Js(a).color)),[tr,Mr]=(0,s.useState)(()=>{const D=Kr(I);return D?nn(D):{h:0,s:0,v:0,a:1}}),dr=(0,s.useRef)(tr),br=(0,s.useRef)(tr),hr=(0,s.useRef)(null),pr=(0,s.useRef)(!1),vr=(0,s.useRef)(null),kr=(0,s.useRef)(I),K=(0,s.useRef)(null),or=(0,s.useRef)(void 0),C=(0,s.useRef)(v),$=(0,s.useRef)(null),N=(0,s.useRef)(null),ar=(0,s.useRef)(null);(0,s.useEffect)(()=>{dr.current=tr,br.current=tr},[tr]),(0,s.useEffect)(()=>{const D=sr(t,V);q(ur=>dn(ur,D)?ur:D)},[t,V,sr]);const E=(0,s.useCallback)((D,ur,Sr)=>{try{const Tr=Sr?.solidHsv??dr.current,ha={...nt(Tr,{format:o}),name:or.current},Ai=ur??sr(t,D),zi=hn(Ai,{fallbackColor:ha.value});return{activePanel:D,color:ha,gradient:zi,value:D==="gradient"?zi.value:ha.value}}catch{return null}},[o,t,sr]),F=(0,s.useCallback)(D=>{if(z)try{z(nt(D,{format:o}))}catch{}},[o,z]),Y=(0,s.useRef)({}),cr=(0,s.useCallback)(D=>{const ur=D.querySelector('[arc-slider][arc-color-slider="hue"]'),Sr=D.querySelector('[arc-slider][arc-color-slider="alpha"]'),Tr={};ur instanceof HTMLElement&&(Tr.hue=ur),Sr instanceof HTMLElement&&(Tr.alpha=Sr),Y.current=Tr},[]),ir=(0,s.useCallback)((D,ur)=>{const Sr=hr.current;let Tr=Y.current[D];if((!Tr||!Tr.isConnected)&&Sr&&(cr(Sr),Tr=Y.current[D]),!Tr)return;const Ai=D==="hue"?{min:0,max:360,step:1}:D==="alpha"?{min:0,max:100,step:1}:null;if(!Ai)return;const{toValue:zi}=Ns({value:ur,...Ai});Tr.style.setProperty("--js\u2022v",String(zi))},[cr]),wr=(0,s.useCallback)(D=>{const ur=hr.current;if(!ur)return;const Sr=De(D);ur.style.setProperty("--js\u2022hue",`hsl(${D.h} 100% 50%)`),ur.style.setProperty("--js\u2022hex",Oe({...Sr,a:1},!1)),ur.style.setProperty("--js\u2022rgb",Ga(Sr)),ir("hue",D.h),ir("alpha",Z(Math.round(D.a*100),0,100))},[ir]),Lr=(0,s.useCallback)(D=>{const ur=hr.current;if(ur){const Sr=Math.round(Vc(D.h));Sr!==vr.current&&(vr.current=Sr,ur.dispatchEvent(new CustomEvent(nl,{detail:{h:Sr}})))}queueMicrotask(()=>{F(D)})},[F]),{schedule:re,cancel:He}=Ll(Lr),Ie=(0,s.useCallback)(()=>{He(),pr.current=!1,vr.current=null},[He]),ce=(0,s.useCallback)(D=>{pr.current=!0,re(D)},[re]),Re=(0,s.useCallback)(D=>{if(x)try{const ur=Ga(De(dr.current));x(hn(D,{fallbackColor:ur}))}catch{}},[x]),Ve=(0,s.useCallback)((D,ur,Sr)=>{const Tr=E(D,ur,Sr);return Tr?(w?.(Tr),Tr):null},[E,w]),aa=_t(Ve),ie=(0,s.useCallback)((D,ur,Sr)=>{const ha=Sr?.shouldEmitSnapshot!==!1?Ve(D,ur):E(D,ur);if(ha){if(D==="gradient"){k?.({activePanel:"gradient",gradient:ha.gradient});return}kr.current=ha.color.value,K.current=ha.color.rgba,k?.({activePanel:"solid",color:ha.color})}},[E,Ve,k]),je=_t(ie),ee=(0,s.useCallback)((D,ur)=>{if((ur?.phase??"commit")==="preview"){q(Tr=>al(Tr,D)?Tr:D),(!ar.current||!al(ar.current,D))&&(ar.current=D,Re(D));return}ar.current=null,q(Tr=>dn(Tr,D)?Tr:D),ie("gradient",D)},[Re,ie]),Ge=(0,s.useCallback)((D,ur)=>{if(D>0||!x0(g,V))return;const Sr=sr(t,V);if(Sr.stops.length===0)return;const Tr=`${V}:${Sr.stops[0]?.color}`;if($.current!==Tr)if($.current=Tr,ur.emitSnapshot){if(!k&&!w)return;je("gradient",Sr)}else k&&je("gradient",Sr,{shouldEmitSnapshot:!1})},[V,t,k,w,g,sr,je]);(0,s.useEffect)(()=>{const D=t.stops??[];D.length>0&&($.current=null);const ur=N.current===null;if(!ur&&N.current!==V){if(N.current=V,Ie(),w){const Tr=sr(t,V);aa(V,Tr,{solidHsv:br.current})}Ge(D.length,{emitSnapshot:!1});return}ur&&(N.current=V),Ge(D.length,{emitSnapshot:!0})},[Ie,V,t,w,sr,Ge,aa]);const Ue=(0,s.useCallback)(D=>{!k&&!w||(dr.current=D,ie("solid"))},[ie,k,w]),Ke=(0,s.useCallback)((D,ur)=>{const Sr=ur?.phase??"commit";if(!(Sr==="preview"&&sn(D,dr.current))){if(dr.current=D,Sr==="preview"){wr(D),ce(D);return}Ie(),Mr(D),Ue(D)}},[Ie,Ue,ce,wr]),jt=(0,s.useMemo)(()=>{const D=O?"":"manual";return S?.popover??D},[S?.popover,O]),ki=(0,s.useMemo)(()=>Ga(De(tr)),[tr]),wi=(0,s.useMemo)(()=>y?.map(D=>({...D,canAddColor:!1,canRemoveColor:!1}))??[],[y]),Mt=(0,s.useCallback)(()=>{const D=hr.current;if(!D)return;const ur=O?'button[arc-color-chip="swatch"]:not(:disabled)':'[arc-color-surface="field"]';D.querySelector(ur)?.focus()},[O]),xo=S?.onToggle,Bn=(0,s.useCallback)(D=>{D?.newState==="open"&&requestAnimationFrame(Mt),xo?.(D)},[Mt,xo]);et(()=>{U!=null&&(K.current=null)},[U]),(0,s.useEffect)(()=>{if(!pr.current&&I!==kr.current){kr.current=I;try{const D=Kr(I)??{r:0,g:0,b:0,a:1},ur=K.current;if(ur&&Vs(D,ur))return;const Sr=De(dr.current);if(Vs(D,Sr))return;or.current=void 0;const Tr=nn(D,dr.current.h);if(sn(Tr,dr.current))return;dr.current=Tr,Mr(Tr)}catch{}}},[I]);const La=(0,s.useMemo)(()=>{const ur=O?Mu:V==="solid"?Os:Nc,Sr=!c||c.length===0?[...ur]:[...c];if(!l?.length)return Sr;const Tr=new Set(l);return Sr.filter(ha=>!Tr.has(ha))},[c,O,l,V]),Si=(0,s.useMemo)(()=>La.includes("palettes"),[La]);et(()=>{const D=hr.current;if(!D){Y.current={};return}cr(D)},[V,O,cr,La]);const ko=(0,s.useCallback)(D=>{er(ur=>{const Sr=typeof D=="function"?D(ur):D,Tr=kn(g,Sr);return Tr!==ur&&m?.(Tr),Tr})},[g,m]);(0,s.useEffect)(()=>{if(C.current!==v){C.current=v,er(kn(g,v));return}er(D=>{const ur=kn(g,D);return ur!==D&&m?.(ur),ur})},[v,g,m]);const Ci=(0,s.useMemo)(()=>{const D=De(tr);return{"--js\u2022hue":`hsl(${tr.h} 100% 50%)`,"--js\u2022hex":Oe({...D,a:1},!1),"--js\u2022rgb":Ga(D)}},[tr]),Q=(0,i.jsxs)("div",{...L,ref:hr,"arc-color-picker":nr,"is-inline":u?"":void 0,style:Ci,children:[O?(0,i.jsx)(f$,{color:I,hsv:tr,hsvRef:dr,tools:La,palettes:wi,activePaletteColor:ki,commitLocalHsv:Ke,popoverId:H,selectedNameRef:or,expandHexShorthand:R,labels:G}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C$,{canTogglePanels:f,panels:g,activePanel:V,setActivePanel:ko,labels:G}),V==="solid"?(0,i.jsx)(A$,{color:I,hsv:tr,hsvRef:dr,tools:La,palettes:Si?y:void 0,activePaletteColor:ki,commitLocalHsv:Ke,popoverId:H,selectedNameRef:or,expandHexShorthand:R,onAddColor:_??Ct,onRemoveColor:P,labels:G}):(0,i.jsx)(N$,{tools:La,gradient:yr,setGradient:ee,editFallbackColor:I,format:o,labels:G})]}),r&&(0,i.jsx)("div",{"arc-color-picker-section":"footer",children:r})]});if(u)return Q;const Vr=S?.anchorProps??F$,Ja=O?{...S,anchorAt:S?.anchorAt??"bottom-center",showDismiss:!1,hasTail:!0}:{...S,heading:n??void 0,showGoBack:h??void 0,goBackProps:p??void 0,showHeaderDivider:!0,showFooterDivider:!0,isHeaderSticky:!0,isFooterSticky:!0};return(0,i.jsx)(y0,{...Ja,popover:jt,anchorProps:Vr,id:H,onToggle:Bn,children:Q})};Wa.getColorAs=eh,Wa.getColorData=nt,Wa.getGradientData=hn,Wa.getContrastColor=no,Wa.addColor=xb,Wa.removeColor=kb,Cr("ArcColorPicker",mb);var G$;const Tt={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},U$=r=>[{test:()=>!!r.variant,value:r.variant},{test:()=>!!r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{test:()=>!!r.icon,value:"icon-text"},{test:()=>!!r.avatar&&typeof r.subtext<"u",value:"user-detail"},{test:()=>!!r.avatar,value:"user"},{test:()=>typeof r.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],K$=({icon:r,onClick:e,items:a,renderSubmenu:t,submenuProps:o,...n})=>({icon:r&&typeof r=="string"?`${r.replace(" fa-fw","")} arc-fw`:r,itemProps:n}),w0=(r,e)=>{const{icon:a,itemProps:t}=K$(e);switch(r){case"divider":return(0,i.jsx)("hr",{});case"section-label":return(0,i.jsx)(ue,{...t,...Tt,icon:a,size:"sm",isStrong:!0});case"icon-text":return(0,i.jsx)(ue,{...t,...Tt,icon:a});case"icon-text-detail":return(0,i.jsx)(ue,{...t,...Tt,icon:a,isStrong:!0});case"text":return(0,i.jsx)(ue,{...t,...Tt});case"text-detail":return(0,i.jsx)(ue,{...t,...Tt,subtext:t.subtext??"sub",isStrong:!0});case"user":return(0,i.jsx)(ec,{...t,...Tt,size:"sm"});case"user-detail":return(0,i.jsx)(ec,{...t,...Tt,size:"md",isStrong:!0});default:return r}},px=r=>Object.fromEntries(G$.map(e=>[e,w0(e,r)])),Dl=200,W$=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps.id:void 0;return typeof e=="string"&&e.length>0?e:void 0},X$=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps:{},{menuProps:a,renderItem:t,...o}=e;return{menuProps:a,popoverPassthrough:o}},q$=r=>({ownMenuId:r.menu,parentTriggerId:r.trigger}),Y$=r=>{const e=r.submenuProps;if(!e||typeof e!="object")return;const a=e.renderItem;return typeof a=="function"?a:void 0},di=(r,e,a)=>{if(!(typeof r.renderSubmenu=="function"||Array.isArray(r.items)&&r.items.length>0))return{hasSubmenu:!1};const o=Bl(r,e),n=`${a}-subtrigger-${o}`;let l=W$(r)??`${a}-submenu-${o}`;return l===n&&(l=`${l}-menu`),{hasSubmenu:!0,menuId:l,triggerId:n}},Z$=(r,e)=>{if(!e||!r)return-1;let t=e.nodeType===Node.ELEMENT_NODE?e:e.parentNode;for(;t;){if(t===r)return-1;if(t instanceof HTMLLIElement&&t.parentElement===r)return Array.prototype.indexOf.call(r.children,t);t=t.parentNode}return-1},J$=(r,e)=>{if(typeof document>"u")return!1;const a=ca(r,e);try{return!!a?.matches?.(":popover-open")}catch{return!1}},Ol=r=>r===!0||typeof r=="number"&&r>=0&&Number.isFinite(r),Q$=r=>r===!0?0:r,r1=r=>r===!0?Dl:r,e1={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},Bl=(r,e)=>r.itemId!=null&&String(r.itemId)!==""?String(r.itemId):`auto-${e}`,a1=r=>{let e=null;for(let a=r;a;a=a.parentElement)a.hasAttribute("arc-popover")&&(e=a);return e},S0=(r,e,a,t)=>{if(t||a==="divider"||!!!(e.href||e.onClick))return;a1(r.currentTarget)?.hidePopover?.()},t1=r=>r?.role??e1[wn(r)]??"menuitem",wn=r=>U$(r)?.find(({test:e})=>e())?.value??"text",C0=r=>e=>w0(r,e),Nl=(r,e,a,t)=>{const o=t??di(r,e,a);if(o.hasSubmenu)return o.triggerId;const n=Bl(r,e);return`${a}-mi-${n}`},o1=(r,e,a)=>wn(r)==="divider"||r.isDisabled===!0||r["aria-disabled"]===!0?!1:di(r,e,a).hasSubmenu?!0:!!(r.href||r.onClick),ui=(r,e)=>{const a=[];for(let t=0;t<r.length;t+=1)o1(r[t],t,e)&&a.push(t);return a},A0=(r,e,a)=>{if(typeof document>"u")return;const t=r.children[e];if(!(t instanceof HTMLElement))return;const o=ca(a,r);if(o instanceof HTMLElement&&t.contains(o)){o.focus();return}const n=t.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');Array.from(n).find(l=>l.getAttribute("aria-disabled")!=="true")?.focus()},z0=(r,e,a,t)=>{const o=ui(r,e);if(o.length===0)return-1;if(t==="actual")return a>=0&&o.includes(a)?a:o[0];let n=o.indexOf(a);return n<0?t==="next"?o[0]:t==="previous"?o[o.length-1]:o[0]:t==="next"?(n=(n+1)%o.length,o[n]):(n=(n-1+o.length)%o.length,o[n])};function n1(r,e,a){return{ArrowUp:t=>{const o=z0(r,e,t,"previous");o>=0&&a(o)},ArrowDown:t=>{const o=z0(r,e,t,"next");o>=0&&a(o)},Home:()=>{const t=ui(r,e);t.length>0&&a(t[0])},End:()=>{const t=ui(r,e);t.length>0&&a(t[t.length-1])}}}function c1(r,e){const{isVisible:a,menuListRef:t,activeItemIndex:o,filteredItems:n,menuDomId:c,isMenuRtlRef:l,submenuBackNavigation:u,listNavByKey:h,hideSubmenu:p,focusTriggerById:f,focusRowAtItemIndex:g,setActiveItemIndex:v,openSubmenuForKeyboard:m}=e;if(!a||!t.current||!(r.target instanceof Node)||!t.current.contains(r.target))return;const y=t.current,S=r.target.closest?.("ul[arc-menu]");if(S&&S!==y)return;let k=Z$(y,r.target);if(k<0&&o>=0&&(k=o),k<0)return;const w=n[k],z=di(w,k,c),x=l.current,_=x?"ArrowLeft":"ArrowRight",P=x?"ArrowRight":"ArrowLeft";if(u&&r.key==="Escape"){r.preventDefault(),r.stopPropagation(),p(u.ownMenuId),f(u.parentTriggerId);return}if(z.hasSubmenu&&J$(z.menuId,y)&&r.key===P){r.preventDefault(),r.stopPropagation(),p(z.menuId),g(k);return}if(u&&r.key===P){r.preventDefault(),r.stopPropagation(),p(u.ownMenuId),f(u.parentTriggerId);return}if(z.hasSubmenu&&(r.key===_||r.key==="Enter")){r.preventDefault(),r.stopPropagation(),v(k),m(z.menuId);return}const R=h[r.key];R&&(r.preventDefault(),r.stopPropagation(),R(k))}function i1(r,e){if(typeof document>"u")return;ca(r,e)?.hidePopover?.()}function s1(r,e){if(typeof document>"u")return;ca(r,e)?.showPopover?.()}function l1(r){r.querySelectorAll("[popover]").forEach(e=>{try{e.matches(":popover-open")&&e.hidePopover?.()}catch{}})}function d1(r,e){typeof document>"u"||requestAnimationFrame(()=>{ca(r,e)?.querySelector("[arc-menu]")?.focus()})}function u1(r,e){if(typeof document>"u")return;ca(r,e)?.focus()}function h1({menuListRef:r,passiveMode:e}){const a=(0,s.useRef)(null),t=(0,s.useRef)(null),o=(0,s.useRef)(null),n=(0,s.useCallback)(()=>{t.current!=null&&(clearTimeout(t.current),t.current=null)},[]),c=(0,s.useCallback)(()=>{o.current!=null&&(clearTimeout(o.current),o.current=null)},[]),l=(0,s.useCallback)(()=>{const m=r.current;m&&l1(m)},[r]),u=(0,s.useCallback)(m=>{i1(m,r.current),a.current===m&&(a.current=null)},[r]),h=(0,s.useCallback)(m=>{typeof document>"u"||(a.current&&a.current!==m&&u(a.current),s1(m,r.current),a.current=m)},[u,r]),p=(0,s.useCallback)(m=>{if(!Ol(e))return;c(),n();const y=Q$(e);if(y<=0){h(m);return}t.current=setTimeout(()=>{t.current=null,h(m)},y)},[e,n,c,h]),f=(0,s.useCallback)(m=>{if(!Ol(e))return;n(),c();const y=r1(e);if(y<=0){u(m);return}o.current=setTimeout(()=>{o.current=null,u(m)},y)},[e,n,c,u]),g=(0,s.useCallback)(m=>{n(),c(),h(m),d1(m,r.current)},[n,c,h,r]),v=(0,s.useCallback)(m=>{u1(m,r.current)},[r]);return{activeSubmenuIdRef:a,cancelPendingSubmenuOpen:n,cancelPendingSubmenuClose:c,closeOpenDescendantPopovers:l,hideSubmenu:u,runShowSubmenu:h,showSubmenuFromPointer:p,requestSubmenuCloseFromPointer:f,openSubmenuForKeyboard:g,focusTriggerById:v}}const p1=d`--arc•menu`,Xa=d`${p1}•item`,g1=d`
@layer arc-components {

  [arc-menu] {
    ${Xa}•gap: var(${M}•8);
    ${Xa}•fg: inherit;
    ${Xa}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${b}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${M}•2));
    padding: var(--arc-menu-padding, var(${M}•4));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  /* Submenus sit under the same <li> as the row button, so the parent row stays :hover while
     pointing at submenu items. Reset the item bg token on submenu lists so inherited hover from
     the parent <li> does not paint every submenu row; each submenu row only picks up hover from its own <li>. */
  [arc-menu-item] > [arc-popover] [arc-menu] {
    ${Xa}•bg: transparent;
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${Xa}•gap));

    background: var(--arc-menu-item-background, var(${Xa}•bg));
    color: var(--arc-menu-item-color, var(${Xa}•fg));
    padding: var(--arc-menu-item-padding, 0);
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])) {
      &:is(:hover, :has(> [arc-button=custom]:not([is-disabled]):focus-visible)) {
        ${Xa}•bg: var(--arc-color-bg-hover-default);
      }
    }

    /* Inter-Component Communication • ArcButton -------------------• */

    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-transition: none;
      --arc-button-position: var(--arc-menu-item-position, relative);
      --arc-button-gap: var(--arc-menu-item-gap, var(${Xa}•gap));
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);
      --arc-button-overflow: var(--arc-menu-item-overflow, clip);
      --arc-button-outline-offset: var(--arc-menu-item-outline-offset, var(${b}•2m));

      [arc-button-content] {
        display: contents;
      }
    }
  }

  [arc-menu-item=divider] {
    margin: 0 var(${M}•4m);

    hr {
      flex: 1;
      border: none;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      height: 0;
      margin: 0;
    }
  }

`,v1=({items:r,filterText:e,renderItem:a,isVisible:t,keepMenuOpen:o,renderSubmenu:n,passiveMode:c,submenuBackNavigation:l,...u})=>{const h=c??Dl,p=(0,s.useId)(),f=(0,s.useRef)(null),{activeSubmenuIdRef:g,cancelPendingSubmenuOpen:v,cancelPendingSubmenuClose:m,closeOpenDescendantPopovers:y,hideSubmenu:S,showSubmenuFromPointer:k,requestSubmenuCloseFromPointer:w,openSubmenuForKeyboard:z,focusTriggerById:x}=h1({menuListRef:f,passiveMode:h}),_=(0,s.useRef)(!1),[P,R]=(0,s.useState)(!1),[U,T]=(0,s.useState)(-1);(0,s.useLayoutEffect)(()=>{const O=f.current;if(O&&typeof getComputedStyle<"u"){const J=getComputedStyle(O).direction==="rtl";_.current=J,R(J)}},[t,r]);const L=(0,s.useMemo)(()=>e?r.filter(O=>Object.values(O).some(J=>J===e)):r,[r,e]),G=(0,s.useRef)(L);G.current=L;const I=(0,s.useCallback)(O=>{if(O<0){T(-1);return}T(O);const J=f.current;if(!J)return;const nr=Nl(L[O],O,p);A0(J,O,nr)},[L,p]),H=(0,s.useMemo)(()=>n1(L,p,I),[L,p,I]),V=O=>c1(O,{isVisible:!!t,menuListRef:f,activeItemIndex:U,filteredItems:L,menuDomId:p,isMenuRtlRef:_,submenuBackNavigation:l,listNavByKey:H,hideSubmenu:S,focusTriggerById:x,focusRowAtItemIndex:I,setActiveItemIndex:T,openSubmenuForKeyboard:z}),er=(0,s.useMemo)(()=>L.map((O,J)=>{const nr=Bl(O,J),{itemId:sr,role:yr,keepMenuOpen:q,items:tr,renderSubmenu:Mr,submenuProps:dr,...br}=O,hr=di(O,J,p),{hasSubmenu:pr}=hr,vr=pr?hr.menuId:"",kr=pr?{menu:hr.menuId,trigger:hr.triggerId}:void 0,K=wn(O)||"",or=yr||t1(O)||"menuitem",C=J===U,$=Nl(O,J,p,hr),N={filterText:e,isCurrent:C,menuControlId:$,itemId:nr,role:yr,keepMenuOpen:q??o,isRtl:P,...pr?{hasSubmenu:!0,ids:kr}:{hasSubmenu:!1}},ar=a?.(br,J,N);return pr?(0,i.jsxs)("li",{"arc-menu-item":K,role:"presentation",onFocusCapture:()=>T(J),onMouseEnter:()=>{k(vr)},onMouseLeave:Ol(h)?()=>w(vr):void 0,onClick:E=>S0(E,O,K,q??o),children:[ar,n?.({ids:kr,items:tr??[],item:O,filterText:e,passiveMode:h,isRtl:P})]},nr):(0,i.jsx)("li",{"arc-menu-item":K,role:or,onFocusCapture:()=>T(J),onClick:E=>S0(E,O,K,q??o),children:ar},nr)}),[U,e,L,o,a,p,P,h,n,k,w]);return(0,s.useEffect)(()=>{if(!t){v(),m(),y(),g.current=null,T(-1);return}const O=G.current,J=ui(O,p);if(J.length>0){const nr=J[0],sr=f.current;if(T(nr),sr){const yr=Nl(O[nr],nr,p);A0(sr,nr,yr)}}},[t,p,v,m,y,g]),(0,s.useEffect)(()=>()=>{v(),m(),y(),g.current=null},[v,m,y,g]),(0,i.jsx)("ul",{...u,ref:f,"arc-menu":"",role:"menu",onKeyDown:V,onMouseLeave:()=>T(-1),tabIndex:t?0:-1,children:er})};Cr("ArcMenu",g1);const E0=["items","renderItem","renderSubmenu","keepMenuOpen","onToggle","id","menuProps","passiveMode","submenuBackNavigation","offset","ref"],_0=r=>{const{startSlot:e,endSlot:a,onClick:t,href:o,target:n,containerProps:c,isDisabled:l,"aria-disabled":u,tooltip:h,id:p,popoverTarget:f,popoverTargetAction:g,"aria-haspopup":v,"aria-controls":m,"aria-expanded":y,...S}=r,k=wn(S),w=(0,s.useMemo)(()=>C0(k),[k]),z=u??l,x=k==="divider",_=!!(o||t||f),P=!x,R=P&&e?"":void 0,U=P&&a?"":void 0,T=(0,s.useMemo)(()=>({...c,onClick:t,tooltip:h,href:o,target:n,id:p,popoverTarget:f,popoverTargetAction:g,"aria-haspopup":v,"aria-controls":m,"aria-expanded":y}),[c,t,h,o,n,p,f,g,v,m,y]),L=(0,s.useMemo)(()=>({...c}),[c]);return _?(0,i.jsxs)(Br,{...T,role:f?"menuitem":T.role,"aria-disabled":z?"true":void 0,isDisabled:!!z,_isCustom:!0,"arc-dropdown-item":k??"","has-start-slot":R,"has-end-slot":U,children:[P&&e,(0,i.jsx)(w,{...S,"is-item-content":"interactive"}),P&&a]}):(0,i.jsxs)("div",{...L,"arc-dropdown-item":k??"","has-start-slot":R,"has-end-slot":U,children:[P&&e,(0,i.jsx)(w,{...S,"is-item-content":"inert"}),P&&a]})},f1=d`--arc•dropdown`,m1=d`${f1}•menu`,Te=d`${m1}•item`,b1=d`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${Te}•padding: var(${M}•8) var(${M}•12);
    ${Te}•min•height: var(${b}•36);
    ${Te}•gap: var(${M}•8);

    &[arc-dropdown-item=text-detail] {
      ${Te}•min•height: var(${b}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${Te}•min•height: var(${b}•32);
    }

    &[arc-dropdown-item=user] {
      ${Te}•min•height: var(${b}•40);

      &:not([has-start-slot]) {
        ${Te}•padding: var(${M}•8) var(${M}•12) var(${M}•8) var(${M}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${Te}•min•height: var(${b}•48);

      &:not([has-start-slot]) {
        ${Te}•padding: var(${M}•8) var(${M}•12) var(${M}•8) var(${M}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${Te}•min•height: var(${b}•8);
      ${Te}•padding: 0;
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-font-size: initial;
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0em);
    --arc-popover-outline-size: 0em;
    --arc-popover-overflow: var(--arc-dropdown-overflow, auto);

    --arc-menu-item-gap: var(${Te}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-submenu] {
    &:where([anchor-at="left-start"], [anchor-at="right-start"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${M}•4m));
    }

    &:where([anchor-at="left-end"], [anchor-at="right-end"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${M}•4));
    }
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${Te}•gap);
    text-align: start;
    min-height: var(${Te}•min•height);

    &:not([arc-button]) {
      padding: var(${Te}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${Te}•padding);
      --arc-button-min-height: var(${b}•40);
    }

    [is-item-content] {
      flex: 1;
    }

    [arc-dropdown-submenu-icon] {
      --arc-icon-color: var(--arc-dropdown-submenu-icon-color, var(--arc-color-fg-secondary));
    }
  }

}
`,Sn={OFFSET:void 0,ANCHOR_AT_LTR:"left-start",ANCHOR_AT_RTL:"right-start",ICON_LTR:"fa-regular fa-angle-right",ICON_RTL:"fa-regular fa-angle-left"},$1=(r,e)=>({anchorAt:r?Sn.ANCHOR_AT_LTR:Sn.ANCHOR_AT_RTL,offset:e??Sn.OFFSET}),P0=(0,s.forwardRef)((r,e)=>(0,i.jsx)(Go,{...r,ref:e,"arc-dropdown-menu-button":""})),y1=r=>{const e={...r};return E0.forEach(a=>{Reflect.deleteProperty(e,a)}),e},x1=r=>r?Sn.ICON_RTL:Sn.ICON_LTR,k1=(r,e)=>r===void 0?x1(e):typeof r=="function"?r(e):r,hi=r=>{const{items:e,renderItem:a,keepMenuOpen:t,menuProps:o,passiveMode:n,submenuBackNavigation:c,renderSubmenu:l,submenuIcon:u,submenuOffset:h,ref:p,...f}=r,[g,v]=(0,s.useState)(!1),m=(0,s.useRef)(r);m.current=r;const y=(0,s.useRef)(null),S=(0,s.useCallback)(_=>{if(typeof document>"u")return;ca(_,y.current)?.hidePopover?.()},[]),k=(0,s.useCallback)(_=>{y.current=_,oa(p,_)},[p]),w=(0,s.useCallback)(_=>{const P=m.current,R=y1(P),U=Y$(_.item)??P.renderItem,{ids:T}=_,L=P.keepMenuOpen;if(_.item.renderSubmenu)return _.item.renderSubmenu({items:_.items,renderItem:U,keepMenuOpen:L,filterText:_.filterText,passiveMode:_.passiveMode,ids:T,closeSubmenu:()=>{S(T.menu)},inheritedFromParent:R});const{menuProps:G,popoverPassthrough:I}=X$(_.item);return(0,i.jsx)(hi,{...R,...$1(_.isRtl,P.submenuOffset),...I,id:T.menu,"arc-dropdown-submenu":"",submenuBackNavigation:q$(T),alternateAnchorId:T.trigger,hidePopoverButton:!0,passiveMode:_.passiveMode,items:_.items,renderItem:U,keepMenuOpen:L,menuProps:G})},[S]),z=(0,s.useCallback)((..._)=>{const[P,,R]=_;if(a)return a(..._);const{ids:U,isRtl:T,menuControlId:L}=R,{endSlot:G,...I}=P,H=!!U,V=k1(m.current.submenuIcon,!!T),er=G||H?(0,i.jsxs)(i.Fragment,{children:[G,H?(0,i.jsx)(Ar,{"arc-dropdown-submenu-icon":"",icon:V}):null]}):void 0;return(0,i.jsx)(_0,{...I,id:L,endSlot:er,...U?{popoverTarget:U.menu,popoverTargetAction:"toggle","aria-haspopup":"menu","aria-controls":U.menu}:{}})},[a]),x=_=>{v(_.newState==="open"),r?.onToggle?.(_)};return(0,i.jsx)(ya,{...f,ref:k,"arc-dropdown":"",variant:"common",onToggle:x,children:(0,i.jsx)(v1,{...o,"arc-dropdown-menu":"",passiveMode:n,submenuBackNavigation:c,items:e??[],renderItem:z,isVisible:g,keepMenuOpen:t,renderSubmenu:w})})};P0.displayName="ArcDropdownButton",hi.Button=P0,hi.Item=_0,Cr("ArcDropdownMenu",b1);const T0=({size:r="md",layout:e="icon",variant:a="common",hierarchy:t="tertiary",...o})=>(0,i.jsx)(Br,{...o,"arc-input-action":"",size:r,layout:e,variant:a,hierarchy:t}),pi=d`--arc•link`,Ta=d`${pi}•fg`,Cn=d`${Ta}•hover`,An=d`${Ta}•disabled`,Fl=d`${pi}•outline`,I0=d`${Fl}•size`,Hl=d`${Fl}•offset`,w1=d`${pi}•cursor`,zn=d`${pi}•focus•color`,S1=d`
@layer arc-components {
${Tv}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${Ta}: currentcolor;
    ${Cn}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${An}: color-mix(in srgb, currentcolor, transparent 70%);

    ${zn}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${Ta}: var(--arc-color-fg-primary);
    ${Cn}: var(--arc-color-fg-secondary);
    ${An}: var(--arc-color-fg-disabled);
    ${zn}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${Ta}: var(--arc-color-fg-secondary);
    ${Cn}: var(--arc-color-fg-primary);
    ${An}: var(--arc-color-fg-disabled);
    ${zn}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${Ta}: var(--arc-color-fg-on-mono-inverse);
    ${Cn}: var(--arc-link-fg-hover-inverse);
    ${An}: var(--arc-link-fg-disabled-inverse);
    ${zn}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${I0}: 0.125em; /* 2px */
    ${Hl}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${Ta}: var(--arc-link-color-hover, var(${Cn}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${Fl}: var(${I0}) solid var(--arc-link-color-focus, var(${zn}));
    ${Hl}: var(${Hl});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${Ta}: var(--arc-link-color-disabled, var(${An}));
    ${w1}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${Ta}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${Ta}));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,C1=fr(Ur,["inherit","primary","secondary","inverse"]),A1=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="a",href:n,icon:c,text:l,overflow:u,iconSize:h,gapSize:p,isFlipped:f,isDisabled:g,...v})=>(0,i.jsx)(o,{...v,href:g?void 0:n,"arc-link":"","data-variant":t,"aria-disabled":g,"data-is-disabled":g?"":void 0,children:r||(0,i.jsx)(ue,{icon:c,text:l,overflow:u,iconSize:h,gapSize:p,size:a,layout:e,isFlipped:f})});Cr("ArcLink",S1);const z1=[...Da],E1=fr(Ur,["common"]),_1=fr(Ur,["common","critical"]),P1=fr(Ur,["common","brand","info","success","warning","error","processing"]),T1=["auto","dark","light","none"],I1=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],R1=fr(ze,["xl","lg","md","sm","custom","fullscreen"]),j1=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],Vl=r=>r?.matches(":modal"),Gl=(r,e)=>e.target===r,M1=(r,e)=>e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom,En=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onCloseOverride:t=void 0})=>(o,n)=>c=>{if(c?.preventDefault?.(),c?.stopPropagation?.(),!r?.current){n?.(c);return}if(t){t(o,c,r.current),n?.(c);return}if(e&&o!=="confirm:discard"){a?.(!0);return}r.current?.close(o),a?.(!1),n?.(c)},Ul=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onClose:t,onToggle:o})=>{(0,s.useEffect)(()=>{const n=r.current;if(!n)return;const c=u=>{Vl(n)&&Gl(n,u)&&(e?(u.preventDefault(),u.stopPropagation(),a?.(!0)):t?.("outside",u))},l=u=>{Gl(n,u)&&(a?.(!1),t?.(n.returnValue,u),o?.(!1,u))};return n.addEventListener("close",l),n.addEventListener("cancel",c),()=>{n.removeEventListener("close",l),n.removeEventListener("cancel",c)}},[r,e,a,t,o])},Kl=({modalRef:r,isOpen:e,isTopLayer:a})=>{(0,s.useEffect)(()=>{const t=r.current;t&&(e&&!t.open&&(a?t.showModal():t.show()),!e&&t.open&&t.close())},[e,a])},Wl=({modalRef:r,isOpen:e,autoFocusId:a})=>{(0,s.useEffect)(()=>{const t=r.current;if(!t||!a||!e)return;const o=t.querySelector(`#${a}`);if(!o||!(o instanceof HTMLElement))return;const n=setTimeout(()=>{o.focus()},0);return()=>clearTimeout(n)},[r,a,e])},R0=(r,e)=>(typeof r.composedPath=="function"?r.composedPath():[]).includes(e)||r.target instanceof Node&&e.contains(r.target),j0=({modalRef:r,isOpen:e=!1,closeOnBackdrop:a=!1,attemptCloseModal:t})=>{(0,s.useEffect)(()=>{const o=r.current;if(!o||!e||!a||!Vl(o))return;let n=!1;const c=u=>{n=R0(u,o)},l=u=>{if(n||R0(u,o))return;const h=o.getBoundingClientRect();M1(h,u)&&t("outside")(u)};return document.documentElement?.addEventListener("pointerdown",c,{capture:!0}),document.documentElement?.addEventListener("click",l,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",c,{capture:!0}),document.documentElement?.removeEventListener("click",l,{capture:!0})}},[r,t,e,a])},M0=({modalRef:r,isOpen:e=!1,closeOnEsc:a=!1,closedBy:t="closerequest",attemptCloseModal:o})=>{(0,s.useEffect)(()=>{const n=r.current;if(!n||!e||!a||!Vl(n))return;const c=l=>{if(l.key==="Escape"&&Gl(n,l)){if(t==="none"){l.stopPropagation(),l.preventDefault();return}o("escape")(l)}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r,o,e,a,t])},Xl=r=>(0,i.jsx)(Br,{"aria-label":"Dismiss",text:"Dismiss",...r,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large",layout:"icon",shape:"square",size:"md"}),L1=r=>(0,i.jsx)(Br,{"arc-modal-go-back":"","aria-label":"Go Back",text:"Go Back",...r,variant:"common",hierarchy:"secondary",icon:"fa-regular fa-arrow-left",layout:"icon",shape:"square",size:"md"}),gi=(0,s.forwardRef)(({inert:r,...e},a)=>(0,i.jsx)("div",{...e,ref:a,"arc-modal-content":"",inert:r}));gi.displayName="ModalContent";const L0=({showDivider:r,...e})=>(0,i.jsx)("header",{...e,"arc-modal-header":"","has-divider":r?"":void 0}),D1=({glyph:r,variant:e="common"})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)(Ar,{icon:r,"arc-modal-glyph":"","arc-icon-status":e})}),ql=r=>{const{titleContent:e,TitleElement:a="h2",...t}=r;return(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(a,{...t,"arc-modal-title":"",children:typeof e=="string"?e:(0,i.jsx)(ue,{...e})})})},O1=({message:r,...e})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("p",{...e,"arc-modal-message":"",children:r})}),Yl=({tag:r="section",padding:e,...a})=>(0,i.jsx)(r,{...a,"arc-modal-body":"","data-padding":e==="auto"?void 0:e}),Zl=({showDivider:r,...e})=>(0,i.jsx)("footer",{...e,"arc-modal-footer":"","has-divider":r?"":void 0}),B1=r=>e=>{if(e.key==="Escape"){if(r==="none"){e.stopPropagation(),e.preventDefault();return}return"escape"}},$r=d`--arc•modal`,_n=d`${$r}•layout`,N1=d`${$r}•header`,vi=d`${$r}•body`,Pn=d`${$r}•footer`,D0=d`${$r}•fg`,fi=d`${$r}•bg`,Ia=d`${$r}•backdrop`,lt=d`${$r}•scale`,fo=d`${N1}•padding`,Xr=d`${vi}•padding`,dt=d`${Pn}•padding`,F1=d`
  ${$r}•font•size: var(${b}•14);
  ${$r}•gap: var(${M}•16);

  ${_n}•rows: auto 1fr auto;
  ${_n}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${_n}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${_n}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${_n}•rows: auto;
  }

  ${D0}: var(--arc-color-fg-primary);
  ${fi}: var(--arc-color-bg-primary);
  ${$r}•border: none;
  ${$r}•border•radius: var(--arc-border-radius-lg);
  ${$r}•divider: var(${b}•1) solid var(--arc-color-border-mid);

  ${$r}•max•width: calc(100vw - var(${M}•32));
  ${$r}•min•width: unset;
  ${$r}•width: auto;

  ${$r}•max•height: calc(100vh - var(${M}•32));
  ${$r}•min•height: unset;
  ${$r}•height: max-content;

  ${lt}: 1;
  ${lt}•start: 0.95;

  ${vi}•text•align: unset;
  ${Pn}•justify•content: flex-end;

  ${Ia}•bg: var(--arc-color-overlay-stark);
  ${Ia}•pointer•events: none;
  ${Ia}•cursor: default;

  &:where([is-backdrop=light]) {
    ${Ia}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${Ia}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${Ia}•bg: transparent;
  }
`,H1=d`
  &[data-size=sm] {
    ${$r}•width: 28em;
  }

  &[data-size=md] {
    ${$r}•width: 40em;
  }

  &[data-size=lg] {
    ${$r}•width: 50em;
  }

  &[data-size=xl] {
    ${$r}•width: 64em;
  }

  &[data-size=custom] {
    ${$r}•width: auto;
    ${$r}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${$r}•width: 100vw;
    ${$r}•height: 100vh;
    ${$r}•min•width: 100vw;
    ${$r}•min•height: 100vh;
    ${$r}•max•width: 100vw;
    ${$r}•max•height: 100vh;
    ${$r}•border•radius: var(--arc-border-radius-none);

    ${lt}: 1;
    ${lt}•start: 1.125;
  }
`,V1=d`
  &[is-confirm] {
    ${Pn}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${vi}•text•align: center;
    ${Pn}•justify•content: center;

    ${Xr}•block•start: var(${M}•40);
    ${Xr}•block•end: var(${M}•20);

    ${dt}•block•start: var(${M}•12);
    ${dt}•block•end: var(${M}•40);

    ${$r}•glyph•size: var(${b}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${$r}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${$r}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${M}•12);
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,G1=d`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${Xr}•block•start: var(${M}•10);
    }

    &:has([arc-modal-footer]) {
      ${Xr}•block•end: var(${M}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${fo}•block•end: var(${M}•20);
      ${Xr}•block•start: var(${M}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${Xr}•block•end: var(${M}•20);
      ${dt}•block•start: var(${M}•12);
      ${dt}•block•end: var(${M}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${Xr}•inline•start: 0;
      ${Xr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${Xr}•block•start: 0;
      ${Xr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${Xr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${Xr}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${Xr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${Xr}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${Xr}•block•start: var(${M}•20);
      ${Xr}•inline•end: var(${M}•24);
      ${Xr}•block•end: var(${M}•20);
      ${Xr}•inline•start: var(${M}•24);
    }

    &:has([arc-modal-go-back]) {
      ${fo}•inline•start: var(${M}•20);
    }

    ${fo}:
      var(${M}•20)
      var(${M}•24)
      var(${fo}•block•end, var(${M}•10))
      var(${fo}•inline•start, var(${M}•24));

    ${Xr}:
      var(${Xr}•block•start, var(${M}•20))
      var(${Xr}•inline•end, var(${M}•24))
      var(${Xr}•block•end, var(${M}•20))
      var(${Xr}•inline•start, var(${M}•24));

    ${dt}:
      var(${dt}•block•start, var(${M}•10))
      var(${M}•24)
      var(${dt}•block•end, var(${M}•20))
      var(${M}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${Xr}: 0;
    }
  }
`,U1=d`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, scale;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, scale;
    }
  }
`,K1=d`
  [arc-modal] {
    opacity: 0;
    scale: var(--arc-modal-scale, var(${lt}));

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: flex;
      flex-direction: column;
      opacity: 1;
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      scale: var(--arc-modal-scale-start, var(${lt}•start));
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,Jl=d`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${F1}
    ${H1}
    ${V1}
    ${G1}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${lt}: 1;
      ${lt}•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, scale;
    contain: layout style paint;

    inset: var(--arc-modal-inset, 0);
    translate: var(--arc-modal-translate, none);
    margin: var(--arc-modal-margin, auto);

    padding: 0;
    color: var(--arc-modal-color, var(${D0}));
    background: var(--arc-modal-background, var(${fi}));
    border: var(--arc-modal-border, var(${$r}•border));
    border-radius: var(--arc-modal-border-radius, var(${$r}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${$r}•width));
    height: var(--arc-modal-height, var(${$r}•height));
    min-width: var(--arc-modal-min-width, var(${$r}•min•width));
    min-height: var(--arc-modal-min-height, var(${$r}•min•height));
    max-width: var(--arc-modal-max-width, var(${$r}•max•width));
    max-height: var(--arc-modal-max-height, var(${$r}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${Ia}•bg));
      pointer-events: var(${Ia}•pointer•events, none);
      cursor: var(${Ia}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${$r}•font•size));
      flex: 1 1 min-content;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${$r}•gap));

      padding: var(${fo});
      background: var(--arc-modal-header-background, var(${fi}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${$r}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${M}•4m) var(${M}•8m) var(${M}•4m) var(${M}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${M}•4m) 0 var(${M}•4m) var(${M}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${M}•8);

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${M}•4);
      }
    }

    [arc-modal-body] {
      flex: 1;
      padding: var(${Xr});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${vi}•text•align));
    }

    [arc-modal-footer] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${Pn}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${$r}•gap));

      background: var(--arc-modal-footer-background, var(${fi}));
      padding: var(--arc-modal-footer-padding, var(${dt}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${$r}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${M}•16) var(${M}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${Ia}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, max-content);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${M}•32)));
      --arc-button-bar-flex: none;

      z-index: var(--arc-modal-confirm-z-index, 3);

      inset: var(--arc-modal-confirm-inset, 0);
      translate: var(--arc-modal-confirm-translate, none);
      margin: var(--arc-modal-confirm-margin, auto);
    }
  }

  ${U1}
  ${K1}
`,ut={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},O0=({children:r,headerProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,s.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:u=ut.isTopLayer,isInverse:h=ut.isInverse,scheme:p=ut.scheme,backdropColor:f=ut.backdropColor,variant:g=ut.variant,message:v=ut.message,onCloseOverride:m=ut.onCloseOverride,onConfirmDiscard:y,onConfirmCancel:S,contentRef:k,...w}=o,{slotStart:z,TitleElement:x,titleContent:_,slotEnd:P,...R}=e||{},{primaryButton:U,secondaryButton:T,...L}=t||{},G=!!(_||z||P),I=p==="auto"?void 0:p,H=!!m,V=nr=>H?m?.("confirm:discard",nr,n.current??void 0):y?.("confirm:discard",nr),er=nr=>H?m?.("confirm:cancel",nr,n.current??void 0):S?.("confirm:cancel",nr);Ul({modalRef:n,onClose:m}),Kl({modalRef:n,isOpen:c,isTopLayer:u}),Wl({modalRef:n,isOpen:c,autoFocusId:l});const O=nr=>{er(nr),T?.onClick?.(nr)},J=nr=>{V(nr),U?.onClick?.(nr)};return(0,i.jsx)("dialog",{...w,ref:n,"arc-modal":"","arc-scheme":h?"inverse":I,"is-confirm":g||"","is-inverse":h?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:"none",onKeyDown:B1("none"),children:(0,i.jsxs)(gi,{ref:k,children:[G&&(0,i.jsxs)(L0,{...R,children:[z&&(0,i.jsx)("div",{"header-slot":"start",children:z}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(ql,{TitleElement:x,titleContent:_})}),P&&(0,i.jsx)("div",{"header-slot":"end",children:P})]}),(0,i.jsx)(Yl,{...a,children:r||v&&(0,i.jsx)("p",{style:{margin:0},children:v})}),(0,i.jsx)(Zl,{...L,children:(0,i.jsxs)(co,{children:[(0,i.jsx)(Br,{...T,text:T?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:h,onClick:O}),(0,i.jsx)(Br,{...U,text:U?.text||"Discard",variant:g??"common",hierarchy:"primary",isInverse:h,onClick:J})]})})]})})};Cr("ArcModalConfirm",Jl);const Fe={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},W1=({children:r,confirmProps:e,headerProps:a,bodyProps:t,dismissProps:o,footerProps:n,...c})=>{const l=(0,s.useRef)(null),[u,h]=(0,s.useState)(!1),{isOpen:p,autoFocusId:f,isTopLayer:g=Fe.isTopLayer,isInverse:v=Fe.isInverse,scheme:m=Fe.scheme,backdropColor:y=Fe.backdropColor,hasConfirmFlow:S=Fe.hasConfirmFlow,hasUnsavedChanges:k=Fe.hasUnsavedChanges,onCloseOverride:w=Fe.onCloseOverride,bypassConfirmWhen:z=Fe.bypassConfirmWhen??{},size:x=Fe.size,closeOnBackdrop:_=Fe.closeOnBackdrop,closeOnEsc:P=Fe.closeOnEsc,showDismiss:R=Fe.showDismiss,onActionError:U,onClose:T,onToggle:L,width:G,height:I,style:H,contentRef:V,...er}=c,{showGoBack:O,goBackProps:J,slotStart:nr,TitleElement:sr,titleContent:yr,slotEnd:q,showDivider:tr=Fe.headerProps?.showDivider,...Mr}=a??{},{slotStart:dr,primaryButton:br,secondaryButton:hr,tertiaryButton:pr,showDivider:vr=Fe.footerProps?.showDivider,...kr}=n??{},K=!!(O||yr||nr||q),or=!!(br||hr||pr),C=!!(or||dr),$=!!(S&&k),N=P?"closerequest":"none",ar=m==="auto"?void 0:m,{didPressEscapeKey:E,didClickBackdrop:F,didClickGoBackButton:Y,didClickDismissButton:cr,didClickPrimaryButton:ir,didClickSecondaryButton:wr,didClickTertiaryButton:Lr}=z,re=En({modalRef:l,shouldConfirm:$,setIsConfirming:h,onCloseOverride:w});Ul({modalRef:l,shouldConfirm:$,setIsConfirming:h,onClose:T,onToggle:L}),Kl({modalRef:l,isOpen:p,isTopLayer:g}),Wl({modalRef:l,isOpen:p,autoFocusId:f}),j0({modalRef:l,isOpen:p,closeOnBackdrop:_,attemptCloseModal:F?En({modalRef:l,shouldConfirm:$&&!F,setIsConfirming:h}):re}),M0({modalRef:l,isOpen:p,closeOnEsc:P,closedBy:N,attemptCloseModal:E?En({modalRef:l,shouldConfirm:$&&!E,setIsConfirming:h}):re});const He=()=>h(!1),Ie=(Re,Ve)=>re(Re)(Ve),ce=(Re,Ve,aa)=>async ie=>{ie?.preventDefault?.(),ie?.stopPropagation?.();const je=()=>Ve?En({modalRef:l,shouldConfirm:$&&!Ve,setIsConfirming:h})(Re,aa?.onCloseCallback)(ie):re(Re,aa?.onCloseCallback)(ie);try{await aa?.onClick?.(ie),je()}catch(ee){U?.(ee,{reason:Re,event:ie})}};return(0,i.jsxs)("dialog",{...er,ref:l,"arc-modal":"","arc-scheme":v?"inverse":ar,"is-inverse":v?"":void 0,"is-top-layer":g?"":void 0,"is-backdrop":y==="auto"?void 0:y,"data-size":x,closedby:N,style:{"--arc-modal-width":G??"","--arc-modal-height":I??"",...H},children:[!K&&R&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(Xl,{...o,isInverse:v,onClick:ce("button:dismiss",cr,o)})}),(0,i.jsxs)(gi,{ref:V,inert:u?"":void 0,children:[K&&(0,i.jsxs)(L0,{...Mr,showDivider:tr,children:[O&&(0,i.jsx)("div",{"header-slot":"go-back",children:(0,i.jsx)(L1,{...J,isInverse:v,onClick:ce("button:back",Y,J)})}),nr&&(0,i.jsx)("div",{"header-slot":"start",children:nr}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(ql,{TitleElement:sr,titleContent:yr})}),q&&(0,i.jsx)("div",{"header-slot":"end",children:q}),R&&(0,i.jsx)("div",{"header-slot":"dismiss",children:(0,i.jsx)(Xl,{...o,isInverse:v,onClick:ce("button:dismiss",cr,o)})})]}),(0,i.jsx)(Yl,{...t,children:r}),C&&(0,i.jsxs)(Zl,{...kr,showDivider:vr,children:[dr&&(0,i.jsx)("div",{"footer-slot":"content",children:dr}),or&&(0,i.jsxs)(co,{children:[pr&&(0,i.jsx)(Br,{...pr,text:pr?.text||"Button",isInverse:v,variant:"common",hierarchy:"tertiary",onClick:ce("button:tertiary",Lr,pr)}),hr&&(0,i.jsx)(Br,{...hr,text:hr?.text||"Cancel",isInverse:v,variant:"common",hierarchy:"secondary",onClick:ce("button:secondary",wr,hr)}),br&&(0,i.jsx)(Br,{...br,text:br?.text||"Action",isInverse:v,variant:"common",hierarchy:"primary",onClick:ce("button:primary",ir,br)})]})]})]}),S&&(0,i.jsx)(O0,{isOpen:u,isInverse:v,isTopLayer:g,backdropColor:y,...e,onConfirmDiscard:Ie,onConfirmCancel:He})]})};Cr("ArcModal",Jl);const qa={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},X1={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-solid fa-do-not-enter",info:"fa-solid fa-circle-info",processing:(0,i.jsx)(is,{"arc-modal-spinner":""})},q1=({children:r,dismissProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,s.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:u=qa.isTopLayer,isInverse:h=qa.isInverse,scheme:p=qa.scheme,backdropColor:f=qa.backdropColor,closeOnBackdrop:g=qa.closeOnBackdrop,closeOnEsc:v=qa.closeOnEsc,variant:m=qa.variant,icon:y,TitleElement:S,titleContent:k,message:w,showDismiss:z,onCloseOverride:x=qa.onCloseOverride,onClose:_,onToggle:P,contentRef:R,...U}=o,{primaryButton:T,...L}=t??{},G=y||X1[m],I=v?"closerequest":"none",H=p==="auto"?void 0:p,V=En({modalRef:n,onCloseOverride:x});return Ul({modalRef:n,onClose:_,onToggle:P}),Kl({modalRef:n,isOpen:c,isTopLayer:u}),Wl({modalRef:n,isOpen:c,autoFocusId:l}),j0({modalRef:n,isOpen:c,closeOnBackdrop:g,attemptCloseModal:V}),M0({modalRef:n,isOpen:c,closeOnEsc:v,closedBy:I,attemptCloseModal:V}),(0,i.jsxs)("dialog",{...U,ref:n,"arc-modal":"","arc-scheme":h?"inverse":H,"is-alert":m||"","is-inverse":h?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:I,children:[z&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(Xl,{...e,isInverse:h,onClick:V("button:dismiss",e?.onClick)})}),(0,i.jsxs)(gi,{ref:R,children:[(0,i.jsx)(Yl,{...a,children:r||(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D1,{glyph:G,variant:m}),(0,i.jsx)(ql,{TitleElement:S,titleContent:k}),(0,i.jsx)(O1,{message:w})]})}),(0,i.jsx)(Zl,{...L,children:(0,i.jsx)(co,{orientation:"vertical",children:(0,i.jsx)(Br,{...T,text:T?.text||"Close",variant:"common",hierarchy:"primary",isInverse:h,onClick:V("button:primary",T?.onClick)})})})]})]})};Cr("ArcModalAlert",Jl);var B0=ta(68563),fe,Qr,Sa,Ya;function Y1(r=!1){if(typeof r!="boolean")throw new Error("defaultValue must be `true` or `false`");const[e,a]=fe(r),t=Qr(()=>{a(!0)},[]),o=Qr(()=>{a(!1)},[]),n=Qr(()=>{a(c=>!c)},[]);return{value:e,setValue:a,setTrue:t,setFalse:o,toggle:n}}var Ca=typeof window<"u"?s.useLayoutEffect:s.useEffect;function ua(r,e,a,t){const o=(0,s.useRef)(e);Ca(()=>{o.current=e},[e]),(0,s.useEffect)(()=>{const n=a?.current??window;if(!(n&&n.addEventListener))return;const c=l=>{o.current(l)};return n.addEventListener(r,c,t),()=>{n.removeEventListener(r,c,t)}},[r,a,t])}function gx(r){ua("click",e=>{r(e)})}function vx(){const[r,e]=fe(null),a=Qr(async t=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),e(t),!0}catch(o){return console.warn("Copy failed",o),e(null),!1}},[]);return[r,a]}function Z1(r){const[e,a]=fe(r??0),t=Qr(()=>{a(c=>c+1)},[]),o=Qr(()=>{a(c=>c-1)},[]),n=Qr(()=>{a(r??0)},[r]);return{count:e,increment:t,decrement:o,reset:n,setCount:a}}function J1(r,e){const a=Sa(r);Ca(()=>{a.current=r},[r]),Ya(()=>{if(e===null)return;const t=setInterval(()=>{a.current()},e);return()=>{clearInterval(t)}},[e])}function fx({countStart:r,countStop:e=0,intervalMs:a=1e3,isIncrement:t=!1}){const{count:o,increment:n,decrement:c,reset:l}=Z1(r),{value:u,setTrue:h,setFalse:p}=Y1(!1),f=Qr(()=>{p(),l()},[p,l]),g=Qr(()=>{if(o===e){p();return}t?n():c()},[o,e,c,n,t,p]);return J1(g,u?a:null),[o,{startCountdown:h,stopCountdown:p,resetCountdown:f}]}function mi(r){const e=(0,s.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return Ca(()=>{e.current=r},[r]),(0,s.useCallback)((...a)=>{var t;return(t=e.current)==null?void 0:t.call(e,...a)},[e])}var Ql=typeof window>"u";function rd(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,s.useCallback)(g=>a.serializer?a.serializer(g):JSON.stringify(g),[a]),n=(0,s.useCallback)(g=>{if(a.deserializer)return a.deserializer(g);if(g==="undefined")return;const v=e instanceof Function?e():e;let m;try{m=JSON.parse(g)}catch(y){return console.error("Error parsing JSON:",y),v}return m},[a,e]),c=(0,s.useCallback)(()=>{const g=e instanceof Function?e():e;if(Ql)return g;try{const v=window.localStorage.getItem(r);return v?n(v):g}catch(v){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,v),g}},[e,r,n]),[l,u]=(0,s.useState)(()=>t?c():e instanceof Function?e():e),h=mi(g=>{Ql&&console.warn(`Tried setting localStorage key \u201C${r}\u201D even though environment is not a client`);try{const v=g instanceof Function?g(c()):g;window.localStorage.setItem(r,o(v)),u(v),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))}catch(v){console.warn(`Error setting localStorage key \u201C${r}\u201D:`,v)}}),p=mi(()=>{Ql&&console.warn(`Tried removing localStorage key \u201C${r}\u201D even though environment is not a client`);const g=e instanceof Function?e():e;window.localStorage.removeItem(r),u(g),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))});(0,s.useEffect)(()=>{u(c())},[r]);const f=(0,s.useCallback)(g=>{g.key&&g.key!==r||u(c())},[r,c]);return ua("storage",f),ua("local-storage",f),[l,h,p]}var Q1=null;function N0(r,{defaultValue:e=!1,initializeWithValue:a=!0}={}){const t=l=>Q1?e:window.matchMedia(l).matches,[o,n]=fe(()=>a?t(r):e);function c(){n(t(r))}return Ca(()=>{const l=window.matchMedia(r);return c(),l.addListener?l.addListener(c):l.addEventListener("change",c),()=>{l.removeListener?l.removeListener(c):l.removeEventListener("change",c)}},[r]),o}var ry="(prefers-color-scheme: dark)",ey="usehooks-ts-dark-mode";function mx(r={}){const{defaultValue:e,localStorageKey:a=ey,initializeWithValue:t=!0}=r,o=N0(ry,{initializeWithValue:t,defaultValue:e}),[n,c]=rd(a,e??o??!1,{initializeWithValue:t});return Ca(()=>{o!==n&&c(o)},[o]),{isDarkMode:n,toggle:()=>{c(l=>!l)},enable:()=>{c(!0)},disable:()=>{c(!1)},set:l=>{c(l)}}}function F0(r){const e=(0,s.useRef)(r);e.current=r,(0,s.useEffect)(()=>()=>{e.current()},[])}function bi(r,e=500,a){const t=(0,s.useRef)();F0(()=>{t.current&&t.current.cancel()});const o=(0,s.useMemo)(()=>{const n=B0(r,e,a),c=(...l)=>n(...l);return c.cancel=()=>{n.cancel()},c.isPending=()=>!!t.current,c.flush=()=>n.flush(),c},[r,e,a]);return(0,s.useEffect)(()=>{t.current=B0(r,e,a)},[r,e,a]),o}function bx(r,e,a){const t=a?.equalityFn??((h,p)=>h===p),o=r instanceof Function?r():r,[n,c]=fe(o),l=Sa(o),u=bi(c,e,a);return t(l.current,o)||(u(o),l.current=o),[n,u]}function $x(r,e={}){const{preserveTitleOnUnmount:a=!0}=e,t=Sa(null);Ca(()=>{t.current=window.document.title},[]),Ca(()=>{window.document.title=r},[r]),F0(()=>{!a&&t.current&&(window.document.title=t.current)})}function yx(r){const[e,a]=fe(!1),t=()=>{a(!0)},o=()=>{a(!1)};return ua("mouseenter",t,r),ua("mouseleave",o,r),e}function xx({threshold:r=0,root:e=null,rootMargin:a="0%",freezeOnceVisible:t=!1,initialIsIntersecting:o=!1,onChange:n}={}){var c;const[l,u]=fe(null),[h,p]=fe(()=>({isIntersecting:o,entry:void 0})),f=Sa();f.current=n;const g=((c=h.entry)==null?void 0:c.isIntersecting)&&t;Ya(()=>{if(!l||!("IntersectionObserver"in window)||g)return;let y;const S=new IntersectionObserver(k=>{const w=Array.isArray(S.thresholds)?S.thresholds:[S.thresholds];k.forEach(z=>{const x=z.isIntersecting&&w.some(_=>z.intersectionRatio>=_);p({isIntersecting:x,entry:z}),f.current&&f.current(x,z),x&&t&&y&&(y(),y=void 0)})},{threshold:r,root:e,rootMargin:a});return S.observe(l),()=>{S.disconnect()}},[l,JSON.stringify(r),e,a,g,t]);const v=Sa(null);Ya(()=>{var y;!l&&((y=h.entry)!=null&&y.target)&&!t&&!g&&v.current!==h.entry.target&&(v.current=h.entry.target,p({isIntersecting:o,entry:void 0}))},[l,h.entry,t,g,o]);const m=[u,!!h.isIntersecting,h.entry];return m.ref=m[0],m.isIntersecting=m[1],m.entry=m[2],m}function kx(){const[r,e]=fe(!1);return Ya(()=>{e(!0)},[]),r}function ay(){const r=Sa(!1);return Ya(()=>(r.current=!0,()=>{r.current=!1}),[]),Qr(()=>r.current,[])}function wx(r=new Map){const[e,a]=fe(new Map(r)),t={set:Qr((o,n)=>{a(c=>{const l=new Map(c);return l.set(o,n),l})},[]),setAll:Qr(o=>{a(()=>new Map(o))},[]),remove:Qr(o=>{a(n=>{const c=new Map(n);return c.delete(o),c})},[]),reset:Qr(()=>{a(()=>new Map)},[])};return[e,t]}function Sx(r,e,a="mousedown",t={}){ua(a,o=>{const n=o.target;if(!n||!n.isConnected)return;(Array.isArray(r)?r.filter(l=>!!l.current).every(l=>l.current&&!l.current.contains(n)):r.current&&!r.current.contains(n))&&e(o)},void 0,t)}var H0=null;function Cx(r,e={}){let{initializeWithValue:a=!0}=e;H0&&(a=!1);const t=Qr(u=>{if(e.deserializer)return e.deserializer(u);if(u==="undefined")return;let h;try{h=JSON.parse(u)}catch(p){return console.error("Error parsing JSON:",p),null}return h},[e]),o=Qr(()=>{if(H0)return null;try{const u=window.localStorage.getItem(r);return u?t(u):null}catch(u){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,u),null}},[r,t]),[n,c]=fe(()=>{if(a)return o()});Ya(()=>{c(o())},[r]);const l=Qr(u=>{u.key&&u.key!==r||c(o())},[r,o]);return ua("storage",l),ua("local-storage",l),n}var V0=null;function Ax(r){const{ref:e,box:a="content-box"}=r,[{width:t,height:o},n]=fe(V0),c=ay(),l=Sa({...V0}),u=Sa(void 0);return u.current=r.onResize,Ya(()=>{if(!e.current||typeof window>"u"||!("ResizeObserver"in window))return;const h=new ResizeObserver(([p])=>{const f=a==="border-box"?"borderBoxSize":a==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",g=G0(p,f,"inlineSize"),v=G0(p,f,"blockSize");if(l.current.width!==g||l.current.height!==v){const y={width:g,height:v};l.current.width=g,l.current.height=v,u.current?u.current(y):c()&&n(y)}});return h.observe(e.current,{box:a}),()=>{h.disconnect()}},[a,e,c]),{width:t,height:o}}function G0(r,e,a){return r[e]?Array.isArray(r[e])?r[e][0][a]:r[e][a]:e==="contentBoxSize"?r.contentRect[a==="inlineSize"?"width":"height"]:void 0}var U0=null;function zx(r={}){let{initializeWithValue:e=!0}=r;U0&&(e=!1);const a=()=>{if(!U0)return window.screen},[t,o]=fe(()=>{if(e)return a()}),n=bi(o,r.debounceDelay);function c(){const l=a(),u=r.debounceDelay?n:o;if(l){const{width:h,height:p,availHeight:f,availWidth:g,colorDepth:v,orientation:m,pixelDepth:y}=l;u({width:h,height:p,availHeight:f,availWidth:g,colorDepth:v,orientation:m,pixelDepth:y})}}return ua("resize",c),Ca(()=>{c()},[]),t}var $i=null;function ty(r){const e=document.querySelector(`script[src="${r}"]`),a=e?.getAttribute("data-status");return{node:e,status:a}}function Ex(r,e){const[a,t]=fe(()=>!r||e?.shouldPreventLoad?"idle":typeof window>"u"?"loading":$i.get(r)??"loading");return Ya(()=>{if(!r||e?.shouldPreventLoad)return;const o=$i.get(r);if(o==="ready"||o==="error"){t(o);return}const n=ty(r);let c=n.node;if(c)t(n.status??o??"loading");else{c=document.createElement("script"),c.src=r,c.async=!0,e?.id&&(c.id=e.id),c.setAttribute("data-status","loading"),document.body.appendChild(c);const u=h=>{const p=h.type==="load"?"ready":"error";c?.setAttribute("data-status",p)};c.addEventListener("load",u),c.addEventListener("error",u)}const l=u=>{const h=u.type==="load"?"ready":"error";t(h),$i.set(r,h)};return c.addEventListener("load",l),c.addEventListener("error",l),()=>{c&&(c.removeEventListener("load",l),c.removeEventListener("error",l)),c&&e?.removeOnUnmount&&(c.remove(),$i.delete(r))}},[r,e?.shouldPreventLoad,e?.removeOnUnmount,e?.id]),a}var oy=null;function _x(r={}){const{autoLock:e=!0,lockTarget:a,widthReflow:t=!0}=r,[o,n]=fe(!1),c=Sa(null),l=Sa(null),u=()=>{if(c.current){const{overflow:p,paddingRight:f}=c.current.style;if(l.current={overflow:p,paddingRight:f},t){const g=c.current===document.body?window.innerWidth:c.current.offsetWidth,v=parseInt(window.getComputedStyle(c.current).paddingRight,10)||0,m=g-c.current.scrollWidth;c.current.style.paddingRight=`${m+v}px`}c.current.style.overflow="hidden",n(!0)}},h=()=>{c.current&&l.current&&(c.current.style.overflow=l.current.overflow,t&&(c.current.style.paddingRight=l.current.paddingRight)),n(!1)};return Ca(()=>{if(!oy)return a&&(c.current=typeof a=="string"?document.querySelector(a):a),c.current||(c.current=document.body),e&&u(),()=>{h()}},[e,a,t]),{isLocked:o,lock:u,unlock:h}}var ed=typeof window>"u";function ny(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,s.useCallback)(g=>a.serializer?a.serializer(g):JSON.stringify(g),[a]),n=(0,s.useCallback)(g=>{if(a.deserializer)return a.deserializer(g);if(g==="undefined")return;const v=e instanceof Function?e():e;let m;try{m=JSON.parse(g)}catch(y){return console.error("Error parsing JSON:",y),v}return m},[a,e]),c=(0,s.useCallback)(()=>{const g=e instanceof Function?e():e;if(ed)return g;try{const v=window.sessionStorage.getItem(r);return v?n(v):g}catch(v){return console.warn(`Error reading sessionStorage key \u201C${r}\u201D:`,v),g}},[e,r,n]),[l,u]=(0,s.useState)(()=>t?c():e instanceof Function?e():e),h=mi(g=>{ed&&console.warn(`Tried setting sessionStorage key \u201C${r}\u201D even though environment is not a client`);try{const v=g instanceof Function?g(c()):g;window.sessionStorage.setItem(r,o(v)),u(v),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))}catch(v){console.warn(`Error setting sessionStorage key \u201C${r}\u201D:`,v)}}),p=mi(()=>{ed&&console.warn(`Tried removing sessionStorage key \u201C${r}\u201D even though environment is not a client`);const g=e instanceof Function?e():e;window.sessionStorage.removeItem(r),u(g),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))});(0,s.useEffect)(()=>{u(c())},[r]);const f=(0,s.useCallback)(g=>{g.key&&g.key!==r||u(c())},[r,c]);return ua("storage",f),ua("session-storage",f),[l,h,p]}function Px(r){const[e,a]=fe(1),t=e+1<=r,o=e-1>0,n=Qr(h=>{const p=h instanceof Function?h(e):h;if(p>=1&&p<=r){a(p);return}throw new Error("Step not valid")},[r,e]),c=Qr(()=>{t&&a(h=>h+1)},[t]),l=Qr(()=>{o&&a(h=>h-1)},[o]),u=Qr(()=>{a(1)},[]);return[e,{goToNextStep:c,goToPrevStep:l,canGoToNextStep:t,canGoToPrevStep:o,setStep:n,reset:u}]}var cy="(prefers-color-scheme: dark)",iy="usehooks-ts-ternary-dark-mode";function Tx({defaultValue:r="system",localStorageKey:e=iy,initializeWithValue:a=!0}={}){const t=N0(cy,{initializeWithValue:a}),[o,n]=rd(e,r,{initializeWithValue:a});return{isDarkMode:o==="dark"||o==="system"&&t,ternaryDarkMode:o,setTernaryDarkMode:n,toggleTernaryDarkMode:()=>{const u=["light","system","dark"];n(h=>{const p=(u.indexOf(h)+1)%u.length;return u[p]})}}}function Ix(r,e){const a=Sa(r);Ca(()=>{a.current=r},[r]),Ya(()=>{if(!e&&e!==0)return;const t=setTimeout(()=>{a.current()},e);return()=>{clearTimeout(t)}},[e])}function Rx(r){const[e,a]=fe(!!r),t=Qr(()=>{a(o=>!o)},[]);return[e,t,a]}var sy=null;function jx(r={}){let{initializeWithValue:e=!0}=r;sy&&(e=!1);const[a,t]=fe(()=>e?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=bi(t,r.debounceDelay);function n(){(r.debounceDelay?o:t)({width:window.innerWidth,height:window.innerHeight})}return ua("resize",n),Ca(()=>{n()},[]),a}const ly=(r,e)=>{const a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;a?a.call(r,e):r.value=e,r.dispatchEvent(new Event("input",{bubbles:!0}))},dy=({defaultValue:r="",value:e,debounceMs:a,inputElementRef:t,onClear:o,onKeyDown:n,onSearch:c})=>{const l=e!==void 0,u=c!==void 0&&a!==void 0,[h,p]=(0,s.useState)(r),f=l?e??"":h,g=(0,s.useRef)(!1),v=bi(w=>{c?.(w)},a??0),m=(0,s.useCallback)(()=>{v.cancel()},[v]),y=(0,s.useCallback)(w=>{l||p(w)},[l]);(0,s.useEffect)(()=>m,[m]),(0,s.useEffect)(()=>{if(u){if(!g.current){g.current=!0;return}m(),v(f)}},[m,v,f,u]);const S=(0,s.useCallback)(()=>{m();const w=t.current;if(w){ly(w,""),o?.(),w.focus();return}l||p(""),o?.()},[m,t,l,o]),k=(0,s.useCallback)(w=>{n?.(w),!(w.defaultPrevented||w.key!=="Enter"||!c)&&(m(),c(f))},[m,n,c,f]);return{resolvedValue:f,handleValueChange:y,handleClear:S,handleKeyDown:k}},uy=ii,hy=si,py=fr(kl,["outline","solid"]),K0="Search",gy="Clear search",ad={layout:"hug",size:"inherit",variant:"outline"},vy=({canClear:r,isDisabled:e,onClear:a})=>{if(r)return(0,i.jsx)(T0,{"aria-label":gy,disabled:e,icon:"fa-regular fa-xmark",onClick:a})},fy=({ariaLabel:r,ariaLabelledBy:e,headerLabel:a})=>r??(!a&&!e?K0:void 0),W0=(0,s.forwardRef)(({debounceMs:r,inputProps:e,layout:a=ad.layout,onClear:t,onSearch:o,size:n=ad.size,variant:c=ad.variant,headerLabel:l,headerSlot:u,footerCaption:h,footerSlot:p,onChange:f,...g},v)=>{const{id:m,value:y,defaultValue:S="",onChange:k,onKeyDown:w,placeholder:z=K0,disabled:x,readOnly:_,required:P,"aria-label":R,"aria-labelledby":U,...T}=e,L=Or(m,"arc-search"),G=(0,s.useRef)(null),{resolvedValue:I,handleValueChange:H,handleClear:V,handleKeyDown:er}=dy({defaultValue:S,value:y,debounceMs:r,inputElementRef:G,onClear:t,onKeyDown:w,onSearch:o}),O=!x&&!_&&I.length>0,J=fy({ariaLabel:R,ariaLabelledBy:U,headerLabel:l}),nr=vy({canClear:O,isDisabled:x,onClear:V}),sr=q=>{G.current=q,oa(v,q)},yr=(q,tr)=>{H(tr.target.value),k?.(q,tr)};return(0,i.jsx)(uo,{...g,"arc-search":"",layout:a,size:n,variant:c,ref:sr,onChange:f,headerLabel:l,headerSlot:u,inputPrefix:(0,i.jsx)(Ar,{icon:"fa-regular fa-search"}),inputAction:nr,footerCaption:h,footerSlot:p,inputProps:{...T,id:L,value:I,disabled:x,placeholder:z,readOnly:_,required:P,onChange:yr,onKeyDown:er,"aria-disabled":x||void 0,"aria-label":J,"aria-labelledby":U,"aria-readonly":_||void 0,"aria-required":P||void 0}})});W0.displayName="ArcSearch";const my=ii,by=si,$y=fr(Ur,["outline","solid","plain"]),X0=()=>typeof globalThis?.CSS?.supports=="function"&&globalThis.CSS.supports("appearance","base-select"),yi=r=>Array.isArray(r.options),mo=r=>{const e=r?.variant;return e!=="divider"&&e!=="section-label"},q0=r=>r?.variant==="section-label"&&!!(r.text||r.icon),Y0=r=>{},Z0=(r=[])=>r.flatMap(e=>yi(e)?e.options:[e]).some(e=>mo(e)&&e.value===""),J0=r=>{const e=o=>typeof o=="string"&&o.trim().length>0,a=o=>{if(typeof o!="object"||o===null)return;const{name:n}=o;return e(n)?n:void 0};return[r?.text,a(r?.avatar),r?.["aria-label"]].find(e)??"Anonymous"},Tn=d`--arc•select`,Ye=d`${Tn}•picker`,Q0=d`${Ye}•fg`,rp=d`${Ye}•bg`,td=d`${Tn}•option`,In=d`${td}•fg`,Rn=d`${td}•bg`,It=d`${td}•icon`,yy=d`
  ${Q0}: currentcolor;
  ${rp}: var(--arc-color-bg-mono);
  ${Tn}•placeholder•fg: var(--arc-select-placeholder-color, var(--arc-color-fg-secondary));

  ${Ye}•width: auto;
  ${Ye}•min•width: 3em;
  ${Ye}•border•radius: var(--arc-border-radius-lg);
  ${Ye}•shadow: var(--arc-shadow-lg);

  ${In}: currentcolor;
  ${Rn}: transparent;

  ${It}•display: none;
  ${It}•color: var(${In});
`,xy=d`
  &[data-layout=fill] {
    ${Ye}•width: 100%; /* fallback */
    ${Ye}•width: anchor-size(inline);
  }
`,ky=d`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,wy=d`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,Sy=d`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${yy}
    ${xy}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${Ye}•display, none);
      flex-direction: column;
      gap: var(${M}•4);
      border: none;
      color: var(${Q0});
      width: var(--arc-select-picker-width, var(${Ye}•width));
      min-width: var(--arc-select-picker-min-width, var(${Ye}•min•width));
      margin: var(--arc-select-picker-margin, var(${M}•4) 0);
      padding: var(--arc-select-picker-padding, var(${M}•4));
      background: var(--arc-select-picker-background, var(${rp}));
      border-radius: var(--arc-select-picker-border-radius, var(${Ye}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${Ye}•shadow));
    }

    ::picker(select):popover-open {
      ${Ye}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      cursor: inherit;
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      outline: none;
      padding-inline: var(${b}•12);
      max-width: var(--arc-select-max-width, var(--js•max•width, none));
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${M}•8);
      width: 100%;
    }

    [arc-select-placeholder] {
      flex: 1;
      color: var(${Tn}•placeholder•fg);
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${b}•24);
      --arc-avatar-initial-font-size: var(${b}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [arc-select-icon=selected] {
        display: none;
      }
    }

    /* Hide the cloned <selectedcontent> when the placeholder span drives the trigger. */
    select[data-placeholder] selectedcontent {
      display: none;
    }

    [arc-select-option-group-legend] {
      font-size: var(${b}•12);
      font-weight: var(--arc-font-weight-600);
      color: var(--arc-select-legend-color, var(--arc-color-fg-secondary));
      padding: var(--arc-select-legend-padding, var(${M}•8));
      cursor: default;
    }

    /* Separator above each legend after the first optgroup. */
    optgroup ~ optgroup [arc-select-option-group-legend] {
      border-top: var(${b}•1) solid var(--arc-color-border-mid);
      margin-top: var(${M}•4);
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${M}•8);
      width: 100%;
      min-width: 0;
      color: var(${In});
      background: var(--arc-select-option-background, var(${Rn}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${M}•8));

      &::checkmark {
        display: none;
      }

      &:disabled {
        ${In}: var(--arc-color-fg-disabled);
        ${Rn}: transparent;
        ${It}•display: none;
        cursor: var(--arc-select-disabled-cursor, not-allowed);
      }

      &:not(:disabled):hover {
        ${Rn}: var(--arc-color-bg-hover-default);
      }

      &:not(:disabled):checked {
        ${Rn}: var(--arc-color-bg-selected-default);
        ${It}•display: flex;
        ${It}•color: var(--arc-select-option-selected-icon-color, var(${In}));
      }

      [arc-select-icon=selected] {
        display: var(${It}•display, none);
        color: var(${It}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }

      select[data-placeholder] {
        color: var(${Tn}•placeholder•fg);
      }
    }
  }

  ${ky}
  ${wy}

}
`,Cy=(0,s.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",tag:t="span",items:o,placeholder:n,renderItem:c,headerLabel:l,headerSlot:u,footerCaption:h,footerSlot:p,id:f,value:g,defaultValue:v,required:m,disabled:y,readOnly:S,maxWidth:k,inputProps:w,...z},x)=>{const{name:_,onBlur:P,onChange:R,onFocus:U,onInput:T,"aria-describedby":L,"aria-label":G,"aria-labelledby":I,...H}=z,V=Or(f,"arc-select"),er=a==="plain"&&r==="fill"?"hug":r,O=y||void 0,J=S||void 0,nr=m||void 0,sr=X0(),yr=a!=="plain"&&!!(l||u),q=a!=="plain"&&!!(h||p),tr=typeof n=="string"&&n.length>0&&!Z0(o),Mr=v??(tr?"":void 0),dr=g??Mr,br=tr&&dr==="",hr=sr&&tr&&dr==="",pr=J&&dr!=null?String(dr):void 0,vr=o.flatMap($=>yi($)?$.options.filter(mo):mo($)?[$]:(Y0($),[])),kr=new Map(vr.map(($,N)=>[$,N])),K=$=>{const{itemId:N,...ar}=$,E=C0(wn($));return(0,i.jsx)(E,{...ar})},or=$=>{const N=kr.get($)??0,ar=$["aria-disabled"]===!0||$.disabled===!0,E=typeof $.itemId=="string"&&$.itemId.length>0?$.itemId:N,F=String($?.value??$?.itemId??N);return(0,i.jsx)("option",{value:F,disabled:ar||pr!==void 0&&F!==pr||void 0,"arc-select-option":"",children:sr?(0,i.jsxs)(i.Fragment,{children:[c?c($,N):K($),(0,i.jsx)("span",{"arc-select-icon":"selected","aria-hidden":!0,children:(0,i.jsx)(Ar,{icon:"fa-regular fa-check arc-fw"})})]}):J0($)},E)},C=($,N)=>{const ar=$.options.filter(mo);if(ar.length===0)return null;const E=$.options.find(q0);return(0,i.jsxs)("optgroup",{label:$.label,disabled:$.disabled||void 0,children:[sr&&E&&(0,i.jsx)("legend",{"arc-select-option-group-legend":"",children:K(E)}),ar.map(or)]},$.itemId??`${$.label}-${N}`)};return(0,i.jsxs)(t,{...H,"arc-select":"","arc-input":"select","data-layout":er,"data-size":e,"data-variant":a,children:[yr&&(0,i.jsxs)(Pr.Header,{children:[(0,i.jsx)(Pr.HeaderLabel,{htmlFor:V,children:l}),!!u&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.HeaderSlot,{children:u})]}),(0,i.jsx)(Pr.InputBody,{children:(0,i.jsxs)("select",{...w,name:w?.name??_,onBlur:w?.onBlur??P,onChange:w?.onChange??R,onFocus:w?.onFocus??U,onInput:w?.onInput??T,"aria-describedby":w?.["aria-describedby"]??L,"aria-label":w?.["aria-label"]??G,"aria-labelledby":w?.["aria-labelledby"]??I,value:g,defaultValue:g==null?Mr:void 0,required:m,disabled:y,ref:x,id:V,"aria-disabled":O,"aria-required":nr,"data-readonly":J,"data-placeholder":br||void 0,style:{...k?{"--js\u2022max\u2022width":k}:{},...w?.style},children:[(0,i.jsxs)("button",{"arc-select-button":"",children:[hr&&(0,i.jsx)(ue,{"arc-select-placeholder":"",text:n,overflow:"truncate"}),(0,i.jsx)("selectedcontent",{}),(0,i.jsx)("span",{"aria-hidden":!0,children:(0,i.jsx)(Ar,{icon:"fa-regular fa-angle-down arc-fw"})})]}),tr&&(0,i.jsx)("option",{value:"",disabled:!0,hidden:!0,children:n}),o.map(($,N)=>yi($)?C($,N):mo($)?or($):null)]})}),q&&(0,i.jsxs)(Pr.Footer,{children:[(0,i.jsx)(Pr.FooterCaption,{children:h}),!!p&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.FooterSlot,{children:p})]})]})});Cr("ArcSelect",Sy);const Ay=fr(ze,["inherit","md","sm"]),me={On:"on",Off:"off"},bo={Before:"before",After:"after"},zy=({disabled:r,id:e,name:a,size:t="md",value:o,labelOff:n,labelOn:c,onChange:l,...u})=>{const h=Or(a,"arc-switch-name"),p=Or(e?`${e}-off`:void 0,"arc-switch-off"),f=Or(e?`${e}-on`:void 0,"arc-switch-on"),g=w=>{if(w.code==="Space"){w.preventDefault(),w.stopPropagation();const z=o===me.On?me.Off:me.On;l?.({value:z},w)}},v=w=>{const z={on:Io(c),off:Io(n)};return z?.on&&z?.off?z[w]:!z?.on&&z?.off?`${z?.off}: ${w}`:z?.on&&!z?.off?`${z?.on}: ${w}`:z[w]},m=(0,i.jsxs)(Pc,{type:"switch",onKeyDown:g,children:[(0,i.jsx)(Jo,{type:"switch",name:h,id:p,value:me.Off,checked:o===me.Off,disabled:r,"aria-label":v(me.Off)?.trim(),onChange:l}),(0,i.jsx)(Jo,{type:"switch",name:h,id:f,value:me.On,checked:o===me.On,disabled:r,"aria-label":v(me.On)?.trim(),onChange:l}),(0,i.jsx)("span",{"data-element":"mask"})]}),y=!c&&o===me.Off?f:p,S=!n&&o===me.On?p:f,k=!!(c||n)&&(0,i.jsxs)(i.Fragment,{children:[!!n&&(0,i.jsx)(wt,{htmlFor:y,"arc-switch-label":c?me.Off:"",children:(0,i.jsx)(St,{children:n})}),m,!!c&&(0,i.jsx)(wt,{htmlFor:S,"arc-switch-label":n?me.On:"",children:(0,i.jsx)(St,{children:c})})]});return(0,i.jsx)("span",{...u,"arc-switch":"","data-state":o,"data-size":t,role:"radiogroup",children:k||m})},se=d`--arc•switch`,Hr=d`${se}•knob`,Ey=d`
@layer arc-components {

  [arc-switch] {
    ${se}•background: var(--arc-color-alpha-white-100);
    ${Hr}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${se}•background: var(--arc-color-alpha-white-70);
      ${Hr}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${W}•background: var(--arc-color-bg-neutral-subtle);
      ${W}•border•color: var(--arc-color-border-stark);
      ${Hr}•border•color: var(--arc-color-border-on-stark);
      ${Hr}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${W}•border•color: var(--arc-color-border-heavy);
        ${Hr}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${W}•background: var(--arc-color-bg-disabled);
        ${W}•border•color: var(--arc-color-border-disabled);
        ${Hr}•border•color: var(--arc-color-border-on-stark);
        ${Hr}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${W}•background: var(--arc-color-bg-theme-heavy);
      ${W}•border•color: var(--arc-color-border-theme-heavy);
      ${Hr}•border•color: var(--arc-color-border-theme-heavy);
      ${Hr}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${W}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${W}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${se}•font•size: 1em;
      ${se}•width: 2.5em;
      ${se}•height: 1.5em;
      ${se}•gap: 0.5em;
      ${Hr}•size: 1.5em;
      ${Hr}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${se}•font•size: var(${b}•14);
      ${se}•width: var(${b}•40);
      ${se}•height: var(${b}•24);
      ${se}•gap: var(${b}•8);
      ${Hr}•x•shift: var(${b}•4);
      ${Hr}•size: var(${b}•24);
    }

    &[data-size=sm] {
      ${se}•font•size: var(${b}•12);
      ${se}•width: var(${b}•30);
      ${se}•height: var(${b}•14);
      ${se}•gap: var(${b}•8);
      ${Hr}•x•shift: var(${b}•1);
      ${Hr}•size: var(${b}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${W}•border•radius: var(--arc-border-radius-pill);
    ${W}•width: var(${se}•width);
    ${W}•height: var(${se}•height);
    ${W}•x•shift: var(${Hr}•x•shift);
    ${W}•size: var(${Hr}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${Hr}•translate: calc(-100% + var(${Hr}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${Hr}•translate: calc(0% - var(${Hr}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${se}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${se}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${W}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${Hr}•translate);

      display: inline-flex;
      width: var(${Hr}•size);
      height: var(${Hr}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${Hr}•color);
      box-shadow: var(${Hr}•shadow);
      border: var(${W}•border•width) solid var(${Hr}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,_y=({disabled:r,id:e,name:a,size:t="md",value:o,label:n,labelPosition:c=bo.After,onChange:l,labelOff:u,labelOn:h,...p})=>{const f=Or(a,"arc-switch-name"),g=Or(e,"arc-switch"),v=(S,k)=>{const w=S.checked?me.On:me.Off;l?.({...S,value:w},k)};!n&&(h||u)&&(n=h||u,c=h?bo.After:bo.Before);const m=(0,i.jsxs)(Pc,{type:"checkbox",children:[(0,i.jsx)(Jo,{type:"checkbox",name:f,id:g,checked:o===me.On,disabled:r,role:"switch","aria-checked":o===me.On,"aria-label":n?void 0:"Toggle switch",tabIndex:0,onChange:v}),(0,i.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),y=(0,i.jsx)(wt,{htmlFor:g,"arc-switch-label":c,children:(0,i.jsx)(St,{children:n})});return u&&h?(0,i.jsx)(zy,{...p,disabled:r,id:e,name:a,labelOff:u,labelOn:h,size:t,value:o,onChange:l}):(0,i.jsxs)("span",{...p,"arc-switch":"","data-state":o,"data-size":t,"data-label-position":c,role:"presentation","aria-live":"off",children:[n&&c===bo.Before&&y,m,n&&c===bo.After&&y]})};Cr("ArcSwitch",Ey);const Py=["title","heading","subheading","body"],ep=["h1","h2","h3","h4","h5","h6"],ap=["code","div","li","p","pre","span"],tp=[...ep,...ap],Ty=[...Da],Iy=["title-inherit","title-lg","title-md","title-sm"],Ry=["heading-inherit","heading-lg","heading-md","heading-sm"],jy=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],My=fr(Ur,["inherit","primary","primary-inverse"]),Ly=["body-inherit","body-lg","body-md","body-sm","body-xs"],Dy=$e(Ur,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),Oy=fr(Vn,["inherit","start","center","justify","end"]),By=fr(Gn,["inherit","loose","standard","tight"]),Ny={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},Fy=r=>{const{align:e,lineHeight:a,size:t,variant:o,scheme:n="auto",isMonospace:c,tag:l,...u}=r,h=Ny?.[l]??"body",p=t?.includes("inherit")?t?.split("-")?.[0]:t,f=o?.endsWith("-inverse");let g;return n!=="auto"?g=n:f&&(g=void 0),{...u,"arc-text":p||h,"arc-scheme":g,"data-is-monospace":c?"":void 0,"data-align":e?.includes("inherit")?void 0:e,"data-variant":o?.includes("inherit")?void 0:o,"data-line-height":a?.includes("inherit")?void 0:a}},Za=d`--arc•text`,od=d`${Za}•font`,$o=d`${Za}•align`,Ra=d`${Za}fg`,op=d`${Za}•flex`,np=d`${Za}•hyphens`,jn=d`${Za}•letterspacing`,ja=d`${Za}•lineheight`,cp=d`${Za}•opacity`,ip=d`${Za}•whitespace`,Rt=d`${od}•family`,ne=d`${od}•size`,yo=d`${od}•weight`,Hy=d`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${$o}: unset;
  ${Ra}: unset;
  ${op}: unset;
  ${np}: auto;
  ${jn}: unset;
  ${ja}: unset;
  ${cp}: unset;
  ${ip}: unset;

  ${Rt}: unset;
  ${ne}: unset;
  ${yo}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${ja}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${ja}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${ja}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${$o}: start;
  }

  &[data-align=center] {
    ${$o}: center;
  }

  &[data-align=justify] {
    ${$o}: justify;
  }

  &[data-align=end] {
    ${$o}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${Ra}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${Ra}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${Ra}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${Ra}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${Ra}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${Ra}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${Ra}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${Ra}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${Rt}: var(--arc-font-family-title);
  ${yo}: var(--arc-font-weight-title);
  ${jn}: var(--arc-letter-spacing-title);
  ${ja}: var(--arc-line-height-title);

  ${ne}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${ne}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${ne}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${ne}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${Rt}: var(--arc-font-family-heading);
  ${yo}: var(--arc-font-weight-heading);
  ${jn}: var(--arc-letter-spacing-heading);
  ${ja}: var(--arc-line-height-heading);

  ${ne}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${ne}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${ne}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${ne}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${Rt}: var(--arc-font-family-subheading);
  ${yo}: var(--arc-font-weight-subheading);
  ${jn}: unset;
  ${ja}: var(--arc-line-height-subheading);

  ${ne}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${ne}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${ne}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${ne}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${Rt}: var(--arc-font-family-body);
  ${yo}: var(--arc-font-weight-body);
  ${ja}: var(--arc-line-height-body);
  ${ne}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${ne}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${ne}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${ne}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${ne}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${ne}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${Rt}: var(--arc-font-family-mono);
  ${ja}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${op}));
  hyphens: var(--arc-text-hyphens, var(${np})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${cp}));
  text-align: var(--arc-text-align, var(${$o}));
  white-space: var(--arc-text-white-space, var(${ip}));

  color: var(--arc-text-color, var(${Ra}));

  font-size: var(--arc-text-font-size, var(${ne}));
  font-family: var(--arc-text-font-family, var(${Rt}));
  font-weight: var(--arc-text-font-weight, var(${yo}));
  line-height: var(--arc-text-line-height, var(${ja}));
  letter-spacing: var(--arc-text-letter-spacing, var(${jn}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,Vy=r=>(0,s.forwardRef)((e,a)=>(0,s.createElement)(r,{...Fy({...e,tag:r}),ref:a})),Gy=[...tp].reduce((r,e)=>({...r,[e]:Vy(e)}),{});Cr("Arc",Hy);const Uy=fr(Ur,["common","ai","critical"]),sp=[...Da],lp=["default","success","warning","error"],dp=fr(ze,["inherit","md"]),up=fr(Ur,["common"]),hp=[...pt],Ky=[...Lt],pp=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],Wy=Uy.filter(r=>r!=="critical"),gp={size:dp[1],variant:up[0],scheme:sp[2],popover:hp[2],placement:pp[4],severity:lp[0],showDismiss:!0},vp=(r,e="toggle")=>{const a=document.getElementById(r);({toggle:()=>a?.togglePopover(),show:()=>a?.showPopover(),hide:()=>a?.hidePopover()})[e]()},fp=d`--arc•progress`,Xy=d`${fp}•bar`,qy=d`${fp}•value`,mp=d`${Xy}•bg`,Mn=d`${qy}•bg`,Yy=d`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Rv}

  [arc-progress-bar] {
    ${mp}: var(--arc-color-alpha-subtle);
    ${Mn}: var(--arc-color-bg-brand-stark);

    &[data-variant=ai] {
      ${Mn}: var(--arc-progress-bar-gradient-ai-200);
    }

    &[data-variant=critical] {
      ${Mn}: var(--arc-color-bg-critical-mid);
    }
  }

  [arc-progress-bar] {
    appearance: none;
    width: 100%;
    height: var(${b}•8);

    /* firefox needs these at this level, other browsers can use these too */
    background: var(--arc-progress-bar-background, var(${mp}));
    border-radius: var(--arc-border-radius-pill);
    border: none;

    /* turn off the default bar background for other browsers */
    &::-webkit-progress-bar { background: none; }

    /* firefox's progress-value bar */
    &::-moz-progress-bar {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${Mn}));
    }

    /* all the others' progress-value bar */
    &::-webkit-progress-value {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${Mn}));
    }
  }

}
`,Zy=({progress:r=0,variant:e="common",...a})=>(0,i.jsxs)("progress",{...a,"arc-progress-bar":"","data-variant":e,value:r,max:a.max||100,"aria-valuenow":r,"aria-valuemax":a.max||100,children:[r,"% "]});Cr("ArcProgressBar",Yy);const Ma=d`--arc•toast`,xi=d`${Ma}•content`,bp=d`${Ma}•color`,$p=d`${Ma}•background`,Ln=d`${Ma}•icon•color`,Dn=d`${Ma}•transition`,Jy=d`
@layer arc-components {

  [arc-toast] {
    ${xi}•gap: var(${M}•2);
    ${Dn}•duration: 300ms;
    ${Ln}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${Ma}•font•size: var(${b}•16);
      ${xi}•font•size: var(${b}•14);
    }

    &[data-size=inherit] {
      ${Ma}•font•size: 1em;
      ${xi}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${Ln}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${Ln}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${Ln}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${$p}: var(--arc-color-bg-mono);
      ${bp}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${M}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${Ma}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${bp}));
    background-color: var(--arc-toast-background, var(${$p}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${M}•12) var(${M}•12) var(${M}•12) var(${M}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${Ma}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${Ma}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${M}•8) var(${M}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${M}•8);
      padding: var(${M}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${Ln}));

      height: 1lh;
      padding: 0 var(${M}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${xi}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${M}•2);
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${Dn}•duration) allow-discrete,
      overlay var(${Dn}•duration) allow-discrete,
      content-visibility var(${Dn}•duration) allow-discrete,
      opacity var(${Dn}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,yp=({id:r,children:e,icon:a,heading:t,subtext:o,dismissProps:n,showDismiss:c=!0,onClose:l,actionSlot:u,size:h="md",variant:p="common",scheme:f=gp.scheme,placement:g="bottom-left",getToastId:v,progressBarProps:m,severity:y,...S})=>{const k=()=>{l?.()},w=f==="auto"?void 0:f,z=!!u||c,x=Or(r,"arc-toast"),{variant:_,hierarchy:P,...R}=n||{};(0,s.useEffect)(()=>{v?.(x)},[v,x]);const U=Xi(a);return(0,i.jsx)("div",{...S,"arc-toast":"","arc-scheme":w,"data-size":h,"data-variant":p,"data-placement":g,"data-severity":y||void 0,id:x,children:(0,i.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,i.jsxs)("div",{"arc-toast-body":"",children:[a&&(0,i.jsx)(Ar,{icon:U,"arc-toast-icon":""}),(0,i.jsx)("div",{"arc-toast-content":"",children:e||(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)("header",{"arc-toast-heading":"",children:(0,i.jsx)("strong",{children:t})}),o&&(0,i.jsx)("p",{"arc-toast-subtext":"",children:o})]})})]}),z&&(0,i.jsxs)("div",{"arc-toast-actions":"",children:[u,c&&(0,i.jsx)(Br,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...R,popoverTarget:x,onClick:k})]}),m&&(0,i.jsx)(Zy,{...m,variant:y==="error"?"critical":m.variant,"arc-toast-progress-bar":""})]})})};yp.handleToast=vp,Cr("ArcToast",Jy);var On;(function(r){r.None="none",r.Persistent="localStorage",r.Temporary="sessionStorage"})(On||(On={}));const Qy=(r,e,a)=>{const[t,o]=(0,s.useState)(e),[n,c]=ny(r,e),[l,u]=rd(r,e);return a===On.Temporary?[n,c]:a===On.Persistent?[l,u]:[t,o]},rx=["auto","hex","hexa","rgb","hsl","oklch"],ex=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
