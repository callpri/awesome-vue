(window.webpackJsonp=window.webpackJsonp||[]).push([[23,24],{246:function(t,e,n){"use strict";n.r(e);n(94);const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,l=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return l.test(t)}function o(t){if(u(t))return t;const e=t.match(i),n=e?e[0]:"",r=a(t);return s.test(r)?t:r+".html"+n}var c={name:"NavLink",props:{item:{required:!0}},computed:{link(){return o(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return t=this.link,/^mailto:/.test(t)||function(t){return/^tel:/.test(t)}(this.link);var t},isBlankTarget(){return"_blank"===this.target},isInternal(){return!u(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:u(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},h=n(12),k=Object(h.a)(c,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=k.exports}}]);