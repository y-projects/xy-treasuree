(self.webpackChunkactivity_streams=self.webpackChunkactivity_streams||[]).push([[55],{7341:()=>{"use strict";{const e=window.matchMedia("(prefers-color-scheme: dark)"),t={r:0,g:0,b:0,a:1},n={r:255,g:255,b:255,a:1};function i(e,t,n){return.2125*e+.7154*t+.0721*n<=110}function s(e,t,n){return`rgb(${Math.round(e.r+(t.r-e.r)*(100-n)/100)}, ${Math.round(e.g+(t.g-e.g)*(100-n)/100)}, ${Math.round(e.b+(t.b-e.b)*(100-n)/100)})`}const r=[["--newtab-background-color",{lwtProperty:"ntp_background",processColor(e){if(!e)return null;const{r:t,g:n,b:i}=e;return`rgb(${t}, ${n}, ${i})`}}],["--newtab-background-color-secondary",{lwtProperty:"ntp_card_background"}],["--newtab-text-primary-color",{lwtProperty:"ntp_text",processColor(t,n){var s,r;let o=null===(s=n.ownerGlobal)||void 0===s||null===(r=s.docShell)||void 0===r?void 0:r.chromeEventHandler.style;if(!t)return n.removeAttribute("lwt-newtab"),n.toggleAttribute("lwt-newtab-brighttext",e.matches),o&&(o.colorScheme=""),null;n.setAttribute("lwt-newtab","true");const{r:a,g:l,b:h,a:d}=t;let u=!i(a,l,h);return n.toggleAttribute("lwt-newtab-brighttext",u),o&&(o.colorScheme=u?"dark":"light"),`rgba(${a}, ${l}, ${h}, ${d})`}}],["--in-content-zap-gradient",{lwtProperty:"zap_gradient",processColor:e=>e}],["--newtab-text-secondary-color",{lwtProperty:"ntp_text",processColor(e){if(!e)return null;const{r:t,g:n,b:i,a:s}=e;return`rgba(${t}, ${n}, ${i}, ${.7*s})`}}],["--newtab-element-hover-color",{lwtProperty:"ntp_background",processColor:(e,i)=>e?s(e,i.hasAttribute("lwt-newtab-brighttext")?n:t,i.hasAttribute("lwt-newtab-brighttext")?80:90):null}],["--newtab-element-active-color",{lwtProperty:"ntp_background",processColor:(e,i)=>e?s(e,i.hasAttribute("lwt-newtab-brighttext")?n:t,i.hasAttribute("lwt-newtab-brighttext")?60:80):null}],["--newtab-border-color",{lwtProperty:"ntp_background",processColor:(e,i)=>e?s(e,i.hasAttribute("lwt-newtab-brighttext")?n:t,75):null}],["--newtab-overlay-color",{lwtProperty:"ntp_background",processColor(e){if(!e)return null;const{r:t,g:n,b:i}=e;return`rgba(${t}, ${n}, ${i}, 0.85)`}}],["--lwt-sidebar-background-color",{lwtProperty:"sidebar",processColor(e){if(!e)return null;const{r:t,g:n,b:i}=e;return`rgb(${t}, ${n}, ${i})`}}],["--lwt-sidebar-text-color",{lwtProperty:"sidebar_text",processColor(e,t){if(!e)return t.removeAttribute("lwt-sidebar"),t.removeAttribute("lwt-sidebar-brighttext"),null;t.setAttribute("lwt-sidebar","true");const{r:n,g:s,b:r,a:o}=e;return i(n,s,r)?t.removeAttribute("lwt-sidebar-brighttext"):t.setAttribute("lwt-sidebar-brighttext","true"),`rgba(${n}, ${s}, ${r}, ${o})`}}],["--lwt-sidebar-highlight-background-color",{lwtProperty:"sidebar_highlight",processColor(e,t){if(!e)return t.removeAttribute("lwt-sidebar-highlight"),null;t.setAttribute("lwt-sidebar-highlight","true");const{r:n,g:i,b:s,a:r}=e;return`rgba(${n}, ${i}, ${s}, ${r})`}}],["--lwt-sidebar-highlight-text-color",{lwtProperty:"sidebar_highlight_text"}]];({init(){addEventListener("LightweightTheme:Set",this),e.addEventListener("change",this)},handleEvent(e){const t=document.documentElement;if("LightweightTheme:Set"==e.type){let{data:n}=e.detail;n||(n={}),this._setProperties(t,n)}else"change"==e.type&&(t.hasAttribute("lwt-newtab")||t.toggleAttribute("lwt-newtab-brighttext",e.matches))},_setProperty(e,t,n){n?e.style.setProperty(t,n):e.style.removeProperty(t)},_setProperties(e,t){for(let[n,i]of r){const{lwtProperty:s,processColor:r}=i;let o=t[s];if(r)o=r(o,e);else if(o){const{r:e,g:t,b:n,a:i}=o;o=`rgba(${e}, ${t}, ${n}, ${i})`}this._setProperty(e,n,o)}}}).init()}},8359:(e,t,n)=>{"use strict";function i(){this._isPrivateEngine=!1,this._isAboutPrivateBrowsing=!1,this._engineIcon=null,window.addEventListener("ContentSearchService",this),this._sendMsg("GetEngine"),this._sendMsg("GetHandoffSearchModePrefs")}n.r(t),n.d(t,{ContentSearchHandoffUIController:()=>i}),i.prototype={handleEvent(e){let t="_onMsg"+e.detail.type;t in this&&this[t](e.detail.data)},get defaultEngine(){return this._defaultEngine},_onMsgEngine({isPrivateEngine:e,isAboutPrivateBrowsing:t,engine:n}){this._isPrivateEngine=e,this._isAboutPrivateBrowsing=t,this._updateEngine(n)},_onMsgCurrentEngine(e){this._isPrivateEngine||this._updateEngine(e)},_onMsgCurrentPrivateEngine(e){this._isPrivateEngine&&this._updateEngine(e)},_onMsgHandoffSearchModePrefs(e){this._shouldHandOffToSearchMode=e,this._updatel10nIds()},_updateEngine(e){this._defaultEngine=e,this._engineIcon&&URL.revokeObjectURL(this._engineIcon),e.isAppProvided?e.iconData?this._engineIcon=this._getFaviconURIFromIconData(e.iconData):this._engineIcon="chrome://global/skin/icons/defaultFavicon.svg":this._engineIcon="chrome://global/skin/icons/search-glass.svg",document.body.style.setProperty("--newtab-search-icon","url("+this._engineIcon+")"),this._updatel10nIds()},_updatel10nIds(){let e=this._defaultEngine,t=document.querySelector(".search-handoff-button"),n=document.querySelector(".fake-textbox");t&&n&&(!e||this._shouldHandOffToSearchMode?(document.l10n.setAttributes(t,this._isAboutPrivateBrowsing?"about-private-browsing-search-btn":"newtab-search-box-input"),document.l10n.setAttributes(n,this._isAboutPrivateBrowsing?"about-private-browsing-search-placeholder":"newtab-search-box-text")):e.isAppProvided?(document.l10n.setAttributes(t,this._isAboutPrivateBrowsing?"about-private-browsing-handoff":"newtab-search-box-handoff-input",{engine:e.name}),document.l10n.setAttributes(n,this._isAboutPrivateBrowsing?"about-private-browsing-handoff-text":"newtab-search-box-handoff-text",{engine:e.name})):(document.l10n.setAttributes(t,this._isAboutPrivateBrowsing?"about-private-browsing-handoff-no-engine":"newtab-search-box-handoff-input-no-engine"),document.l10n.setAttributes(n,this._isAboutPrivateBrowsing?"about-private-browsing-handoff-text-no-engine":"newtab-search-box-handoff-text-no-engine")))},_getFaviconURIFromIconData(e){if("string"==typeof e)return e;let t=new Blob([e]);return URL.createObjectURL(t)},_sendMsg(e,t=null){dispatchEvent(new CustomEvent("ContentSearchClient",{detail:{type:e,data:t}}))}}},8451:(e,t,n)=>{var i=n(8359),s=n(7672),r=i.ContentSearchHandoffUIController;void 0===s.ContentSearchHandoffUIController&&(s.ContentSearchHandoffUIController=r),e.exports=i},4109:()=>{(function(){"use strict";this.ContentSearchUIController=function(){const e="http://www.w3.org/1999/xhtml";function t(e,t,n,i,s=""){this.input=e,this._idPrefix=s,this._healthReportKey=n,this._searchPurpose=i,this._isPrivateEngine=!1;let r=s+"searchSuggestionTable";this.input.autocomplete="off",this.input.setAttribute("aria-autocomplete","true"),this.input.setAttribute("aria-controls",r),t.appendChild(this._makeTable(r)),this.input.addEventListener("keydown",this),this.input.addEventListener("input",this),this.input.addEventListener("focus",this),this.input.addEventListener("blur",this),window.addEventListener("ContentSearchService",this),this._stickyInputValue="",this._hideSuggestions(),this._getSearchEngines(),this._getStrings()}return t.prototype={_oneOffButtons:[],_pendingOneOffRefresh:void 0,get defaultEngine(){return this._defaultEngine},set defaultEngine(e){let t;this._defaultEngine&&this._defaultEngine.icon&&URL.revokeObjectURL(this._defaultEngine.icon),t=e.iconData?this._getFaviconURIFromIconData(e.iconData):"chrome://global/skin/icons/defaultFavicon.svg",this._defaultEngine={name:e.name,icon:t,isAppProvided:e.isAppProvided},this._updateDefaultEngineHeader(),this._updateDefaultEngineIcon(),e&&document.activeElement==this.input&&this._speculativeConnect()},get engines(){return this._engines},set engines(e){this._engines=e,this._pendingOneOffRefresh=!0},get selectedIndex(){let e=[...this._suggestionsList.children,...this._oneOffButtons,document.getElementById("contentSearchSettingsButton")];for(let t=0;t<e.length;++t)if(e[t].classList.contains("selected"))return t;return-1},set selectedIndex(e){this._table.removeAttribute("aria-activedescendant"),this.input.removeAttribute("aria-activedescendant");let t=[...this._suggestionsList.children,...this._oneOffButtons,document.getElementById("contentSearchSettingsButton")],n=e<this.numSuggestions&&this.selectedButtonIndex>-1?this.numSuggestions+this.selectedButtonIndex:-1;for(let i=0;i<t.length;++i){let s=t[i],r=i<this.numSuggestions?s.firstChild:s;i==e?(s.classList.add("selected"),r.setAttribute("aria-selected","true"),this.input.setAttribute("aria-activedescendant",r.id)):i!=n&&(s.classList.remove("selected"),r.setAttribute("aria-selected","false"))}},get selectedButtonIndex(){let e=[...this._oneOffButtons,document.getElementById("contentSearchSettingsButton")];for(let t=0;t<e.length;++t)if(e[t].classList.contains("selected"))return t;return-1},set selectedButtonIndex(e){let t=[...this._oneOffButtons,document.getElementById("contentSearchSettingsButton")];for(let n=0;n<t.length;++n){let i=t[n];n==e?(i.classList.add("selected"),i.setAttribute("aria-selected","true")):(i.classList.remove("selected"),i.setAttribute("aria-selected","false"))}},get selectedEngineName(){let e=this._oneOffsTable.querySelector(".selected");return e?e.engineName:this.defaultEngine.name},get numSuggestions(){return this._suggestionsList.children.length},selectAndUpdateInput(e){this.selectedIndex=e;let t=this.suggestionAtIndex(e)||this._stickyInputValue;this.input.value!=t&&(this.input.value=t),this._updateSearchWithHeader()},suggestionAtIndex(e){let t=this._suggestionsList.children[e];return t?t.textContent:null},deleteSuggestionAtIndex(e){if(this.isFormHistorySuggestionAtIndex(e)){let t=this.suggestionAtIndex(e);this._sendMsg("RemoveFormHistoryEntry",t),this._suggestionsList.children[e].remove(),this.selectAndUpdateInput(-1)}},isFormHistorySuggestionAtIndex(e){let t=this._suggestionsList.children[e];return t&&t.classList.contains("formHistory")},addInputValueToFormHistory(){let e={value:this.input.value,engineName:this.selectedEngineName};return CSS.supports("overflow: clip")||(e=this.input.value),this._sendMsg("AddFormHistoryEntry",e),e},handleEvent(e){document.contains(this.input)&&this["_on"+e.type[0].toUpperCase()+e.type.substr(1)](e)},_onCommand(e){this.selectedButtonIndex!=this._oneOffButtons.length?(this.search(e),e&&e.preventDefault()):this._sendMsg("ManageEngines")},search(e){if(!this.defaultEngine)return;let t,n=this.input;t=this._table.hidden||e.originalTarget&&"contentSearchDefaultEngineHeader"==e.originalTarget.id||e instanceof KeyboardEvent?n.value:this.suggestionAtIndex(this.selectedIndex)||n.value;let i={engineName:this.selectedEngineName,searchString:t,healthReportKey:this._healthReportKey,searchPurpose:this._searchPurpose,originalEvent:{shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,altKey:e.altKey}};"button"in e&&(i.originalEvent.button=e.button),this.suggestionAtIndex(this.selectedIndex)&&(i.selection={index:this.selectedIndex,kind:void 0},e instanceof MouseEvent?i.selection.kind="mouse":e instanceof KeyboardEvent&&(i.selection.kind="key")),this._sendMsg("Search",i),this.addInputValueToFormHistory()},_onInput(){this.input.value?this.input.value!=this._stickyInputValue&&(this._getSuggestions(),this.selectAndUpdateInput(-1)):(this._stickyInputValue="",this._hideSuggestions()),this._updateSearchWithHeader()},_onKeydown(e){let t=0,n=0,i=0;switch(e.keyCode){case e.DOM_VK_UP:if(this._table.hidden)return;if(e.getModifierState("Accel")){if(e.shiftKey){n=-1;break}this._cycleCurrentEngine(!0);break}if(e.altKey){i=-1;break}t=-1;break;case e.DOM_VK_DOWN:if(this._table.hidden)return void this._getSuggestions();if(e.getModifierState("Accel")){if(e.shiftKey){n=1;break}this._cycleCurrentEngine(!1);break}if(e.altKey){i=1;break}t=1;break;case e.DOM_VK_TAB:if(this._table.hidden)return;if(this.selectedButtonIndex<=0&&e.shiftKey||this.selectedButtonIndex==this._oneOffButtons.length&&!e.shiftKey)return;i=e.shiftKey?-1:1;break;case e.DOM_VK_RIGHT:if(this.input.selectionStart!=this.input.selectionEnd||this.input.selectionEnd!=this.input.value.length)return;return this.numSuggestions&&this.selectedIndex>=0&&this.selectedIndex<this.numSuggestions?(this.input.value=this.suggestionAtIndex(this.selectedIndex),this.input.setAttribute("selection-index",this.selectedIndex),this.input.setAttribute("selection-kind","key")):(this.input.removeAttribute("selection-index"),this.input.removeAttribute("selection-kind")),this._stickyInputValue=this.input.value,void this._hideSuggestions();case e.DOM_VK_RETURN:return void this._onCommand(e);case e.DOM_VK_DELETE:return void(this.selectedIndex>=0&&this.deleteSuggestionAtIndex(this.selectedIndex));case e.DOM_VK_ESCAPE:return void(this._table.hidden||this._hideSuggestions());default:return}let s=this.selectedIndex;if(t){let e=s+t;e<-1&&(e=this.numSuggestions+this._oneOffButtons.length),s==this.numSuggestions&&-1==t&&(this.selectedButtonIndex=-1),this.selectAndUpdateInput(e)}else if(n){let e;e=s>=this.numSuggestions||-1==s?1==n?0:this.numSuggestions-1:s+n,e>=this.numSuggestions&&(e=-1),this.selectAndUpdateInput(e)}else if(i){let t,n=this.selectedButtonIndex;t=-1==n||n==this._oneOffButtons.length?1==i?0:this._oneOffButtons.length-1:n+i,t==this._oneOffButtons.length&&e.keyCode!=e.DOM_VK_TAB&&(t=-1),this.selectedButtonIndex=t}e.preventDefault()},_currentEngineIndex:-1,_cycleCurrentEngine(e){if(this._currentEngineIndex==this._engines.length-1&&!e||0==this._currentEngineIndex&&e)return;this._currentEngineIndex+=e?-1:1;let t=this._engines[this._currentEngineIndex].name;this._sendMsg("SetCurrentEngine",t)},_onFocus(){this._mousedown||(this.input.setAttribute("keepfocus","true"),this._speculativeConnect())},_onBlur(){this._mousedown?setTimeout((()=>this.input.focus()),0):(this.input.removeAttribute("keepfocus"),this._hideSuggestions())},_onMousemove(e){let t=this._indexOfTableItem(e.target);if(t>=this.numSuggestions)return this.selectedIndex=-1,void(this.selectedButtonIndex=t-this.numSuggestions);this.selectedIndex=t},_onMouseup(e){2!=e.button&&this._onCommand(e)},_onMouseout(e){this._indexOfTableItem(e.originalTarget)>=this.numSuggestions&&(this.selectedButtonIndex=-1)},_onClick(e){this._onMouseup(e)},_onContentSearchService(e){let t="_onMsg"+e.detail.type;t in this&&this[t](e.detail.data)},_onMsgFocusInput(e){this.input.focus()},_onMsgBlur(e){this.input.blur(),this._hideSuggestions()},_onMsgSuggestions(e){if(this._stickyInputValue!=e.searchString||this.defaultEngine.name!=e.engineName)return;this._clearSuggestionRows();let{left:t}=this.input.getBoundingClientRect();this._table.style.top=this.input.offsetHeight+"px",this._table.style.minWidth=this.input.offsetWidth+"px",this._table.style.maxWidth=window.innerWidth-t-40+"px";let n=new Set(e.searchString.trim().toLowerCase().split(/\s+/));for(let t=0;t<6;t++){let i,s;if(t<e.formHistory.length)[i,s]=["formHistory",t];else{let n=t-e.formHistory.length;if(!(n<e.remote.length))break;[i,s]=["remote",n]}this._suggestionsList.appendChild(this._makeTableRow(i,e[i][s],t,n))}this._table.hidden&&(this.selectedIndex=-1,this._pendingOneOffRefresh&&(this._setUpOneOffButtons(),delete this._pendingOneOffRefresh),this._currentEngineIndex=this._engines.findIndex((e=>e.name==this.defaultEngine.name)),this._table.hidden=!1,this.input.setAttribute("aria-expanded","true"))},_onMsgSuggestionsCancelled(){this._table.hidden||this._hideSuggestions()},_onMsgState(e){"isPrivateWindow"in e&&(this._isPrivateEngine=e.isPrivateEngine),this.engines=e.engines;let t=e.currentEngine;this._isPrivateEngine&&(t=e.currentPrivateEngine),this.defaultEngine&&this.defaultEngine.name==t.name&&this.defaultEngine.icon==t.icon||(this.defaultEngine=t)},_onMsgCurrentState(e){this._onMsgState(e)},_onMsgCurrentEngine(e){this._isPrivateEngine||(this.defaultEngine=e,this._pendingOneOffRefresh=!0)},_onMsgCurrentPrivateEngine(e){this._isPrivateEngine&&(this.defaultEngine=e,this._pendingOneOffRefresh=!0)},_onMsgStrings(e){this._strings=e,this._updateDefaultEngineHeader(),this._updateSearchWithHeader(),document.getElementById("contentSearchSettingsButton").textContent=this._strings.searchSettings},_updateDefaultEngineIcon(){let e=this._engines.find((e=>e.name===this.defaultEngine.name)),t=this.defaultEngine.isAppProvided||e&&e.identifier?this.defaultEngine.icon:"chrome://global/skin/icons/search-glass.svg";document.body.style.setProperty("--newtab-search-icon","url("+t+")")},_updateDefaultEngineHeader(){let e=document.getElementById("contentSearchDefaultEngineHeader");if(e.firstChild.setAttribute("src",this.defaultEngine.icon),this._strings){for(;e.firstChild.nextSibling;)e.firstChild.nextSibling.remove();e.appendChild(document.createTextNode(this._strings.searchHeader.replace("%S",this.defaultEngine.name)))}},_updateSearchWithHeader(){if(!this._strings)return;let e=document.getElementById("contentSearchSearchWithHeader").querySelectorAll("label");if(this.input.value){let t=this._strings.searchForSomethingWith2;t=t.replace("%1$S","%S").split("%S"),e[0].textContent=t[0],e[1].textContent=this.input.value,e[2].textContent=t[1]}else e[0].textContent=this._strings.searchWithHeader,e[1].textContent="",e[2].textContent=""},_speculativeConnect(){this.defaultEngine&&this._sendMsg("SpeculativeConnect",this.defaultEngine.name)},_makeTableRow(t,n,i,s){let r=document.createElementNS(e,"tr");r.dir="auto",r.classList.add("contentSearchSuggestionRow"),r.classList.add(t),r.setAttribute("role","presentation"),r.addEventListener("mousemove",this),r.addEventListener("mouseup",this);let o=document.createElementNS(e,"td"),a=document.createElementNS(e,"div");a.setAttribute("class","historyIcon"),o.appendChild(a),o.classList.add("contentSearchSuggestionEntry"),o.setAttribute("role","option"),o.id=this._idPrefix+"searchSuggestion"+i,o.setAttribute("aria-selected","false");let l=n.trim().toLowerCase().split(/\s+/);for(let t=0;t<l.length;t++){let n=l[t],i=document.createElementNS(e,"span");s.has(n)&&i.classList.add("typed"),i.textContent=n,o.appendChild(i),t<l.length-1&&o.appendChild(document.createTextNode(" "))}return r.appendChild(o),r},_getFaviconURIFromIconData(e){if("string"==typeof e)return e;let t=new Blob([e]);return URL.createObjectURL(t)},_getImageURIForCurrentResolution:e=>window.devicePixelRatio>1?e.replace(/\.png$/,"@2x.png"):e,_getSearchEngines(){this._sendMsg("GetState")},_getStrings(){this._sendMsg("GetStrings")},_getSuggestions(){this._stickyInputValue=this.input.value,this.defaultEngine&&this._sendMsg("GetSuggestions",{engineName:this.defaultEngine.name,searchString:this.input.value})},_clearSuggestionRows(){for(;this._suggestionsList.firstElementChild;)this._suggestionsList.firstElementChild.remove()},_hideSuggestions(){this.input.setAttribute("aria-expanded","false"),this.selectedIndex=-1,this.selectedButtonIndex=-1,this._currentEngineIndex=-1,this._table.hidden=!0},_indexOfTableItem(e){if(e.classList.contains("contentSearchOneOffItem"))return this.numSuggestions+this._oneOffButtons.indexOf(e);if(e.classList.contains("contentSearchSettingsButton"))return this.numSuggestions+this._oneOffButtons.length;for(;e&&"tr"!=e.localName;)e=e.parentNode;if(!e)throw new Error("Element is not a row");return e.rowIndex},_makeTable(t){this._table=document.createElementNS(e,"table"),this._table.id=t,this._table.hidden=!0,this._table.classList.add("contentSearchSuggestionTable"),this._table.setAttribute("role","presentation"),this._table.addEventListener("mousedown",(()=>{this._mousedown=!0})),document.addEventListener("mouseup",(()=>{delete this._mousedown})),this._table.addEventListener("mouseout",this);let n=document.createElementNS(e,"tr"),i=document.createElementNS(e,"td");n.setAttribute("class","contentSearchHeaderRow"),i.setAttribute("class","contentSearchHeader");let s=document.createElementNS(e,"img");i.appendChild(s),i.id="contentSearchDefaultEngineHeader",n.appendChild(i),n.addEventListener("click",this),this._table.appendChild(n);let r=document.createElementNS(e,"tr");r.setAttribute("class","contentSearchSuggestionsContainer");let o=document.createElementNS(e,"td");o.setAttribute("class","contentSearchSuggestionsContainer"),this._suggestionsList=document.createElementNS(e,"table"),this._suggestionsList.setAttribute("class","contentSearchSuggestionsList"),o.appendChild(this._suggestionsList),r.appendChild(o),this._table.appendChild(r),this._suggestionsList.setAttribute("role","listbox"),this._oneOffsTable=document.createElementNS(e,"table"),this._oneOffsTable.setAttribute("class","contentSearchOneOffsTable"),this._oneOffsTable.classList.add("contentSearchSuggestionsContainer"),this._oneOffsTable.setAttribute("role","group"),this._table.appendChild(this._oneOffsTable),n=document.createElementNS(e,"tr"),i=document.createElementNS(e,"td"),n.setAttribute("class","contentSearchHeaderRow"),i.setAttribute("class","contentSearchHeader"),n.appendChild(i),i.id="contentSearchSearchWithHeader";let a=document.createElement("label"),l=document.createElement("label");l.setAttribute("class","contentSearchSearchWithHeaderSearchText");let h=document.createElement("label");i.appendChild(a),i.appendChild(l),i.appendChild(h),this._oneOffsTable.appendChild(n);let d=document.createElementNS(e,"button");return d.setAttribute("class","contentSearchSettingsButton"),d.classList.add("contentSearchHeaderRow"),d.classList.add("contentSearchHeader"),d.id="contentSearchSettingsButton",d.addEventListener("click",this),d.addEventListener("mousemove",this),this._table.appendChild(d),this._table},_setUpOneOffButtons(){if(!this._engines)return;for(;this._oneOffsTable.firstChild.nextSibling;)this._oneOffsTable.firstChild.nextSibling.remove();this._oneOffButtons=[];let t=this._engines.filter((e=>e.name!=this.defaultEngine.name)).filter((e=>!e.hidden));if(!t.length)return void(this._oneOffsTable.hidden=!0);let n=this.input.offsetWidth-2,i=Math.floor(n/49),s=Math.floor(n/i),r=document.createElementNS(e,"tr"),o=document.createElementNS(e,"td");r.setAttribute("class","contentSearchSuggestionsContainer"),o.setAttribute("class","contentSearchSuggestionsContainer");for(let n=0;n<t.length;++n){let a=t[n];n>0&&n%i==0&&(r.appendChild(o),this._oneOffsTable.appendChild(r),r=document.createElementNS(e,"tr"),o=document.createElementNS(e,"td"),r.setAttribute("class","contentSearchSuggestionsContainer"),o.setAttribute("class","contentSearchSuggestionsContainer"));let l=document.createElementNS(e,"button");l.setAttribute("class","contentSearchOneOffItem");let h,d=document.createElementNS(e,"img");h=a.iconData?this._getFaviconURIFromIconData(a.iconData):this._getImageURIForCurrentResolution("chrome://browser/skin/search-engine-placeholder.png"),d.setAttribute("src",h),d.addEventListener("load",(function(){URL.revokeObjectURL(h)}),{once:!0}),l.appendChild(d),l.style.width=s+"px",l.setAttribute("engine-name",a.name),l.engineName=a.name,l.addEventListener("click",this),l.addEventListener("mousemove",this),t.length-n<=i-n%i&&l.classList.add("last-row"),(n+1)%i==0&&l.classList.add("end-of-row"),l.id="oneOff"+n,o.appendChild(l),this._oneOffButtons.push(l)}r.appendChild(o),this._oneOffsTable.appendChild(r),this._oneOffsTable.hidden=!1},_sendMsg(e,t=null){dispatchEvent(new CustomEvent("ContentSearchClient",{detail:{type:e,data:t}}))}},t}()}).call(window)}}]);
//# sourceMappingURL=gecko.3c1ee6776061428a69c0.js.map