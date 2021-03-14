module.exports=function(t){var n={};function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(a,r,function(n){return t[n]}.bind(null,r));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=27)}([function(t,n){t.exports=flarum.core.compat.app},function(t,n){t.exports=flarum.core.compat["helpers/icon"]},function(t,n,e){"use strict";function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,a(t,n)}e.d(n,"a",(function(){return r}))},function(t,n){t.exports=flarum.core.compat.Component},,function(t,n){t.exports=flarum.core.compat["components/Switch"]},function(t,n){t.exports=flarum.core.compat["components/Button"]},,function(t,n){t.exports=flarum.core.compat["tags/utils/sortTags"]},,,,,,function(t,n){t.exports=flarum.core.compat["components/ExtensionPage"]},function(t,n){t.exports=flarum.core.compat["utils/saveSettings"]},,,,,,,,function(t,n){t.exports=flarum.core.compat["components/UploadImageButton"]},function(t,n){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,n){t.exports=flarum.core.compat["utils/withAttr"]},,function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),o=e(2),i=e(14),s=e.n(i),u=e(6),c=e.n(u),l=e(15),d=e.n(l),p=e(5),f=e.n(p),g=e(1),h=e.n(g),_=e(23),b=e.n(_),x=e(3),y=e.n(x),v=(e(24),e(25),e(8)),w=e.n(v),O=function(t){function n(){return t.apply(this,arguments)||this}Object(o.a)(n,t);var e=n.prototype;return e.oninit=function(n){t.prototype.oninit.call(this,n),this.tags=this.attrs.tags},e.view=function(){var t=this;return m(".TagGroup",[m("ul.TagList",[w()(r.a.store.all("tags")).map((function(n){var e=t.tags;return[m(f.a,{id:n.slug(),state:!!e.length&&e.includes(n.slug()),onchange:function(){this.state?-1!==e.indexOf(this.id)&&e.splice(e.indexOf(this.id),1):e.push(this.id)},className:"switchTags"},m("li",{style:{color:n.color(),lineHeight:"20px",fontSize:"16px",marginLeft:n.isPrimary()||null===n.position()?0:"20px"}},h()(n.icon()),n.name()))]}))])])},n}(y.a),F=function(t){function n(){return t.apply(this,arguments)||this}Object(o.a)(n,t);var e=n.prototype;return e.oninit=function(n){t.prototype.oninit.call(this,n),this.settings=JSON.parse(r.a.data.settings.dem13n_discussion_cards||null)},e.content=function(){if(!this.settings)return m(".ExtensionPage-settings",[m(".container",{style:{color:"red",fontWeight:"bold"}},h()("fas fa-exclamation-triangle",{style:{fontSize:"24px",marginRight:"10px"}}),r.a.translator.trans("dem13n.admin.settings.settings_error"))]);var t=this.settings;return r.a.forum.data.attributes.dem13n_discussion_cards_default_imageUrl=r.a.forum.attribute("baseUrl")+"/assets/"+r.a.data.settings.dem13n_discussion_cards_default_image_path,[m(".ExtensionPage-settings",[m(".container",[m("Form",{onsubmit:this.onsubmit.bind(this)},[m(".Form-group",[m("label",r.a.translator.trans("dem13n.admin.settings.default_img")),m(b.a,{name:"dem13n_discussion_cards_default_image"})]),m(".Form-group",[m(f.a,{state:t.previewText||!1,onchange:function(){t.previewText^=!0}},r.a.translator.trans("dem13n.admin.settings.preview_text"))]),m(".Form-group",[m(f.a,{state:t.cardBadges||!1,onchange:function(){t.cardBadges^=!0}},r.a.translator.trans("dem13n.admin.settings.badges"))]),m(".Form-group",[m(f.a,{state:t.cardFooter,onchange:function(){t.cardFooter^=!0}},r.a.translator.trans("dem13n.admin.settings.actor_info"))]),m(".Form-group",[m(f.a,{state:t.Replies,onchange:function(){t.Replies^=!0}},r.a.translator.trans("dem13n.admin.settings.show_replies"))]),m(".Form-group",[m(f.a,{state:t.onIndexPage,onchange:function(){t.onIndexPage^=!0}},r.a.translator.trans("dem13n.admin.settings.output_on_index_page"))]),m(".Form-group",[m("label",r.a.translator.trans("dem13n.admin.settings.desktop_card_width",{percent:t.desktopCardWidth})),m("input",{type:"range",min:1,max:100,step:.1,value:t.desktopCardWidth||49,oninput:function(n){t.desktopCardWidth=n.target.value},style:{width:"100%"}})]),m(".Form-group",[m("label",r.a.translator.trans("dem13n.admin.settings.tablet_card_width",{percent:t.tabletCardWidth})),m("input",{type:"range",min:1,max:100,step:.1,value:t.tabletCardWidth||49,oninput:function(n){t.tabletCardWidth=n.target.value},style:{width:"100%"}})]),m(".Form-group",[m("label",r.a.translator.trans("dem13n.admin.settings.small_cards")),m("input.FormControl",{type:"number",min:0,value:t.smallCards,oninput:function(n){t.smallCards=n.target.value}})]),m(".Form-group",[m("label",r.a.translator.trans("dem13n.admin.settings.choose_tags")),m(O,{tags:t.allowedTags}),m(c.a,{type:"submit",className:"Button Button--primary",loading:this.loading},r.a.translator.trans("core.admin.settings.submit_button"))])])])])]},e.onsubmit=function(t){t.preventDefault(),this.loading||(this.loading=!0,d()({dem13n_discussion_cards:JSON.stringify(this.settings)}).then((function(){return window.location.reload()})))},n}(s.a);r.a.initializers.add("dem13n/discussion/cards",(function(){r.a.extensionData.for("dem13n-discussion-cards").registerPage(F)}))}]);
//# sourceMappingURL=admin.js.map