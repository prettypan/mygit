OpenInstall=function(e,n,t){function r(){this.arr=[],this.run=function(e){this.arr?this.arr[this.arr.length]=e:e()},this.ready=function(){if(null!=this.arr)for(var e=0;e<this.arr.length;e++)this.arr[e]();this.arr=null}}function i(e){var n=[];for(var t in e){var r=e[t];if("[object Array]"==Object.prototype.toString.call())for(var i=0;i<r.length;i++)null!=r[i]&&"undefined"!=typeof r[i]&&n.push(encodeURIComponent(t)+"="+encodeURIComponent(r[i]));else null!=r&&"undefined"!=typeof r&&n.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}return n.join("&")}function o(e){var n=new t,r=e.data,i=e.url,o=e.method;i=i.indexOf("?")>-1?i+"&v="+c:i+"?v="+c,r&&"string"!=typeof r&&(r=f.stringify(r)),"POST"!=o&&r&&(i=i+(i.indexOf("?")>-1?"&":"?")+r,r=null),n.onreadystatechange=function(){if(n.readyState==("number"==typeof t.DONE?t.DONE:4)){if(200==n.status){var r=n.response||n.responseText||{};e.success&&e.success("string"==typeof r?f.parse(r):r)}else e.error&&e.error(n,n.statusText);e.complete&&e.complete(n)}},n.ontimeout=function(){e.error&&e.error(n,n.statusText)},n.timeout=e.timeout||0,n.open(o,i,!0),n.setRequestHeader&&n.setRequestHeader("Content-Type","application/json;charset=utf-8"),n.withCredentials=(e.xhrFields||{}).withCredentials,n.send(r)}function a(t,c){function f(e){function t(e){for(var t=0;t<i.length;t++)n.removeEventListener(i[t],e)}function r(){for(var r=function(){clearTimeout(e),t(r)},o=0;o<i.length;o++){var a=i[o];n.addEventListener(a,r)}}if("android"!=C.platform||"qq"!=C.brower){var i=["visibilitychange","webkitvisibilitychange","mozvisibilitychange"];r()}}function s(){for(var e=["hidden","webkitHidden","mozHidden","msHidden","oHidden"],t=0;t<e.length;t++){var r=e[t];if(r in n&&"boolean"==typeof n[r])return n[r]===!0}return!1}function d(e,n,t,r){if(M[e](n),"function"==typeof t){var i=setTimeout(function(){s()||t()},r);f(i)}}function h(e){var t=n.createElement("div");return t.innerHTML=e,t=t.children[0],t.onclick=function(){n.body.removeChild(t)},t}function p(){return C.apkUrl&&"function"==typeof t.apkDownloadHandler?void t.apkDownloadHandler(C.apkUrl):void(C.fallbackUrl?M[C.fallbackMethod](C.fallbackUrl):w&&n.body.appendChild(w))}function v(){C&&C.allowClickLog&&!U&&(U=!0,o({url:a.server+"/stats/click?"+i({appKey:x,platform:C.platform,channelCode:C.channelCode}),method:"GET",xhrFields:{withCredentials:!0}}))}function m(){C.schemaUrl?d(C.schemaMethod,C.schemaUrl,function(){p()},C.schemaTimeout):p()}function y(){l(function(){R.run(function(){t._logClick!==!1&&v(),m()})})}function g(e,n){D&&(clearTimer(D),D=null);var t=a.server+"/bind/"+x+"?"+i(e);o({url:t,method:"POST",xhrFields:{withCredentials:!0},data:n,success:function(t){C=b(t||{}),t.shadow&&(w=h(t.shadow)),R.ready(),C.ttl&&(D=setTimeout(function(){g(e,n)},1e3*C.ttl))}})}function b(e){var n={sm:"schemaMethod",st:"schemaTimeout",fm:"fallbackMethod",au:"apkUrl",acl:"allowClickLog"};for(var t in e){var r=n[t];r&&(e[r]=e[t],delete e[t])}return e}t=t||{};var C,w,k,T,O,E,S=t.channelCode,x=t.appKey,R=new r,I=this;if(!x)return void alert("鏈寚瀹歛ppKey");if(!S){var L=/[\?\&]channelCode=([^=&]+)$/.exec(e.location.href);L&&(S=L[1])}try{k=e.screen.width||"",T=e.screen.height||"",E=e.devicePixelRatio||"";var j=n.createElement("canvas").getContext("webgl");O=j.getParameter(j.VERSION)}catch(H){}var U,D,M={frm:function(e){var t=n.createElement("iframe");t.border="none",t.style.display="none",t.style.visibility="hidden",t.src=e,n.body.appendChild(t)},loc:function(n){e.location=n},hrf:function(e){var t=n.createElement("a");t.style.display="none",t.href=e,n.body.appendChild(t),t.click()},inhrf:function(e){var t=n.createElement("script");t.setAttribute("type","text/javascript"),t.innerHTML='(function(){var a = document.createElement("a");a.style.display = "none";a.href = "'+e.replace(/"/g,'\\"')+'";document.body.appendChild(a);a.click();})()',n.body.appendChild(t)},open:function(n){e.open(n)}};this.wakeupOrInstall=y,t.buttonId&&l(function(){for(var e=t.buttonId.split(" "),r=0;r<e.length;r++){var i=n.getElementById(e[r]);i&&i.addEventListener("click",function(){I.wakeupOrInstall()})}}),u(function(e){var n={channelCode:S,w:k,h:T,p:E,g:O,i:e,c:t._channelRedirect?1:0};g(n,c)})}var c=2,l=function(){"use strict";function t(){if(!o){o=!0;for(var n=0;n<i.length;n++)i[n].fn.call(e,i[n].ctx);i=[]}}function r(){"complete"===n.readyState&&t()}var i=[],o=!1,a=!1;return function(c,l){return o?void setTimeout(function(){c(l)},1):(i.push({fn:c,ctx:l}),void("complete"===n.readyState||!n.attachEvent&&"interactive"===n.readyState?setTimeout(t,1):a||(n.addEventListener?(n.addEventListener("DOMContentLoaded",t,!1),e.addEventListener("load",t,!1)):(n.attachEvent("onreadystatechange",r),e.attachEvent("onload",t)),a=!0)))}}(),u=function(){function n(n){function t(e){var n=e.split(".");if(4==n.length)for(var t=0;4>t;t++)n[t]=parseInt(n[t]);else{n=e.split("::");var r=[],i=[];if(2==n.length){n[0]&&(r=n[0].split(":")),n[1]&&(i=n[1].split(":"));for(var o=r.length+i.length;o++<8;)r.push("0");for(var t=0;t<i.length;t++)r.push(i[t])}else r=n[0].split(":");n=[];for(var t=0;t<r.length;t++){var a=parseInt(r[t],16);n[2*t]=a>>8&255,n[2*t+1]=255&a}}return n}function r(e){return e[0]<<24|e[1]<<16|e[2]<<8|e[3]}function i(e){4!=(e=t(e)).length||0===(e=r(e))||e>>24===127||e in s||(s[e]=!0,c[c.length]=e,l())}function o(e){for(var n=e.split("\r\n"),t=0;t<n.length;t++){var r=n[t];if(~r.indexOf("a=candidate")){var o=r.split(" "),a=o[4],c=o[7];"host"===c&&i(a)}else if(~r.indexOf("c=")){var o=r.split(" "),a=o[2];i(a)}}}var a,c=[],l=function(){c&&(f&&f.close(),n(c),clearTimeout(a),c=null)};a=setTimeout(l,2e3);try{var u=e.webkitRTCPeerConnection||e.mozRTCPeerConnection||e.RTCPeerConnection;if(!u)return void l();var f=new u({iceServers:[]});f.createDataChannel("",{reliable:!1}),f.onicecandidate=function(e){e.candidate&&o("a="+e.candidate.candidate)},f.createOffer(function(e){o(e.sdp),f.setLocalDescription(e)},function(){l()});{var s={};(new Date).getTime()}}catch(d){l()}}var t,i=new r;return n(function(e){t=e,i.ready()}),function(e){i.run(function(){e(t)})}}(),f=e.JSON||{parse:function(e){return eval("("+e+")")},stringify:function(){var e=Object.prototype.toString,n=Array.isArray||function(n){return"[object Array]"===e.call(n)},t={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},r=function(e){return t[e]||"\\u"+(e.charCodeAt(0)+65536).toString(16).substr(1)},i=/[\\"\u0000-\u001F\u2028\u2029]/g;return function o(t){if(null==t)return"null";if("number"==typeof t)return isFinite(t)?t.toString():"null";if("boolean"==typeof t)return t.toString();if("object"==typeof t){if("function"==typeof t.toJSON)return o(t.toJSON());if(n(t)){for(var a="[",c=0;c<t.length;c++)a+=(c?", ":"")+o(t[c]);return a+"]"}if("[object Object]"===e.call(t)){var l=[];for(var u in t)t.hasOwnProperty(u)&&l.push(o(u)+": "+o(t[u]));return"{"+l.sort().join(", ")+"}"}}return'"'+t.toString().replace(i,r)+'"'}}()};return a.channelRedirect=function(e,n){new a({appKey:e,channelCode:n,_channelRedirect:!0}).wakeupOrInstall()},a.server="//openlink.cc",a}(window,document,XMLHttpRequest);