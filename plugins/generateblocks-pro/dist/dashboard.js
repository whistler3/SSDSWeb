!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=224)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},2:function(e,t){e.exports=window.wp.components},224:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),c=s(2),l=s(6),i=s.n(l);class o extends n.Component{constructor(){super(...arguments),this.state={isLicenseKeyAPILoaded:!1,isAPISaving:!1,licenseSettings:generateBlocksProSettings.licenseSettings}}componentDidMount(){this.setState({isLicenseKeyAPILoaded:!0})}getSetting(e,t){let s=t;return void 0!==this.state.licenseSettings[e]&&(s=this.state.licenseSettings[e]),s}updateSettings(e){this.setState({isAPISaving:!0});const t=e.target.nextElementSibling;t.classList.remove("gblocks-action-message--show"),i()({path:"/generateblocks-pro/v1/license",method:"POST",data:{licenseSettings:this.state.licenseSettings}}).then(e=>{this.setState({isAPISaving:!1}),t.classList.add("gblocks-action-message--show"),e.success&&e.response?(t.classList.remove("gblocks-action-message--error"),"valid"===e.response.license?t.textContent=Object(a.__)("License key activated.","generateblocks-pro"):"deactivated"===e.response.license?t.textContent=Object(a.__)("License key deactivated.","generateblocks-pro"):t.textContent=e.response,this.setState({licenseSettings:{...this.state.licenseSettings,status:e.response.license}}),setTimeout((function(){t.classList.remove("gblocks-action-message--show")}),3e3)):(t.classList.add("gblocks-action-message--error"),t.textContent=e.response)})}render(){return this.state.isLicenseKeyAPILoaded?Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"generateblocks-settings-main"},Object(n.createElement)(c.PanelBody,{title:Object(a.__)("License Key")},Object(n.createElement)("div",{className:"gblocks-dashboard-panel-row-wrapper"},Object(n.createElement)(c.PanelRow,null,Object(n.createElement)(c.BaseControl,{id:"gblocks-license-key-area",className:"gblocks-license-key-area"},Object(n.createElement)(c.Notice,{className:"gblocks-licensing-notice",isDismissible:!1,status:"valid"===this.state.licenseSettings.status?"success":"warning"},"valid"===this.state.licenseSettings.status?Object(n.createElement)("span",null,Object(a.__)("Receiving updates","generateblocks-pro")):Object(n.createElement)("span",null,Object(a.__)("Not receiving updates","generateblocks-pro"))),Object(n.createElement)(c.TextControl,{type:"password",autoComplete:"off",placeholder:Object(a.__)("Enter your license key here…","generateblocks-pro"),value:this.getSetting("key"),onChange:e=>{this.setState({licenseSettings:{...this.state.licenseSettings,key:e}})}}))),""!==this.state.licenseSettings.key&&Object(n.createElement)(c.PanelRow,null,Object(n.createElement)(c.BaseControl,null,Object(n.createElement)(c.ToggleControl,{label:Object(a.__)("Receive beta updates"),help:Object(a.__)("Get alpha and beta updates directly to your Dashboard.","generateblocks-pro"),checked:!!this.getSetting("beta"),onChange:e=>{this.setState({licenseSettings:{...this.state.licenseSettings,beta:e}})}}))),Object(n.createElement)(c.PanelRow,null,Object(n.createElement)("div",{className:"gblocks-action-button"},Object(n.createElement)(c.Button,{isPrimary:!0,disabled:this.state.isAPISaving,onClick:e=>this.updateSettings(e)},this.state.isAPISaving&&Object(n.createElement)(c.Spinner,null),!this.state.isAPISaving&&Object(a.__)("Save")),Object(n.createElement)("span",{className:"gblocks-action-message"}))))))):Object(n.createElement)(c.Placeholder,{className:"gblocks-settings-placeholder"},Object(n.createElement)(c.Spinner,null))}}window.addEventListener("DOMContentLoaded",()=>{Object(n.render)(Object(n.createElement)(o,null),document.getElementById("gblocks-license-key-settings"))});class r extends n.Component{constructor(){super(...arguments),this.state={isAPISaving:!1,isTemplateLibraryAPILoaded:!1,isSyncingLibrary:!1,enableRemoteTemplates:generateBlocksProSettings.adminSettings.enable_remote_templates,enableLocalTemplates:generateBlocksProSettings.adminSettings.enable_local_templates}}componentDidMount(){this.setState({isTemplateLibraryAPILoaded:!0})}getSetting(e,t){let s=t;return void 0!==this.state.settings[e]&&(s=this.state.settings[e]),s}updateSettings(e){this.setState({isAPISaving:!0});const t=e.target.nextElementSibling;i()({path:"/generateblocks-pro/v1/template-library",method:"POST",data:{enableRemoteTemplates:this.state.enableRemoteTemplates,enableLocalTemplates:this.state.enableLocalTemplates}}).then(e=>{this.setState({isAPISaving:!1}),t.classList.add("gblocks-action-message--show"),t.textContent=e.response,e.success&&e.response?setTimeout((function(){t.classList.remove("gblocks-action-message--show")}),3e3):t.classList.add("gblocks-action-message--error")})}render(){return this.state.isTemplateLibraryAPILoaded?Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"generateblocks-settings-main"},Object(n.createElement)(c.PanelBody,{title:Object(a.__)("Pattern Library")},Object(n.createElement)("div",{className:"gblocks-dashboard-panel-row-wrapper"},Object(n.createElement)(c.PanelRow,null,Object(n.createElement)(c.ToggleControl,{label:Object(a.__)("Enable Local Patterns","generateblocks-pro"),checked:!!this.state.enableLocalTemplates,onChange:e=>{this.setState({enableLocalTemplates:e})}}),Object(n.createElement)(c.ToggleControl,{label:Object(a.__)("Enable Remote Patterns","generateblocks-pro"),checked:!!this.state.enableRemoteTemplates,onChange:e=>{this.setState({enableRemoteTemplates:e})}}),!!this.state.enableRemoteTemplates&&Object(n.createElement)(c.BaseControl,{id:"gblocks-sync-template-library",className:"gblocks-sync-template-library",help:Object(a.__)("The pattern library syncs once a day by default. Clicking this button will force it to re-sync.","generateblocks-pro")},Object(n.createElement)(c.Button,{isSecondary:!0,onClick:e=>{this.setState({isSyncingLibrary:!0});const t=e.target.nextElementSibling;i()({path:"/generateblocks-pro/v1/sync_template_library",method:"POST"}).then(e=>{this.setState({isSyncingLibrary:!1}),t.classList.add("gblocks-action-message--show"),e.success&&e.response?(t.textContent=Object(a.__)("Remote patterns synced.","generateblocks-pro"),setTimeout((function(){t.classList.remove("gblocks-action-message--show")}),3e3)):(t.classList.add("gblocks-action-message--error"),t.textContent=e)})}},this.state.isSyncingLibrary&&Object(n.createElement)(c.Spinner,null),!this.state.isSyncingLibrary&&Object(a.__)("Sync Remote Patterns","generateblocks-pro")),Object(n.createElement)("span",{className:"gblocks-action-message"}))),Object(n.createElement)("div",{className:"gblocks-action-button"},Object(n.createElement)(c.Button,{isPrimary:!0,disabled:this.state.isAPISaving,onClick:e=>this.updateSettings(e)},this.state.isAPISaving&&Object(n.createElement)(c.Spinner,null),!this.state.isAPISaving&&Object(a.__)("Save","generateblocks-pro")),Object(n.createElement)("span",{className:"gblocks-action-message"})))))):Object(n.createElement)(c.Placeholder,{className:"gblocks-settings-placeholder"},Object(n.createElement)(c.Spinner,null))}}window.addEventListener("DOMContentLoaded",()=>{Object(n.render)(Object(n.createElement)(r,null),document.getElementById("gblocks-template-library-settings"))})},6:function(e,t){e.exports=window.wp.apiFetch}});