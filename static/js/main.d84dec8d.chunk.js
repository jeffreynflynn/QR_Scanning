(this["webpackJsonpmobile-scanning"]=this["webpackJsonpmobile-scanning"]||[]).push([[0],{104:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(96),o=n.n(c),i=(n(104),n(29)),s=n.n(i),u=n(57),l=n(98),d=n(56),m=n(97),v=n.n(m),f=function(){var e=window.innerHeight,t=window.innerWidth,n=Object(a.createRef)(),c=Object(a.createRef)(),o=Object(a.useState)(null),i=Object(l.a)(o,2),m=i[0],f=i[1],g=Object(a.useCallback)((function(e){e!==m&&e.length>0&&f(e)}),[m]),h=Object(a.useCallback)(Object(u.a)(s.a.mark((function a(){var r,o,i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.current&&n.current.readyState===n.current.HAVE_ENOUGH_DATA&&(r=c.current.getContext("2d"),c.current.width=t,c.current.height=e,r.drawImage(n.current,0,0,t,e),o=r.getImageData(0,0,t,e),(i=v()(o.data,o.width,o.height,{inversionAttempts:"dontInvert"}))&&g(i.data)),requestAnimationFrame(h);case 2:case"end":return a.stop()}}),a)}))),[c,n,e,t,g]),w=Object(a.useEffect)((function(e,t){if(console.log(e,t),t)throw new Error(t);e&&g(e.getText())}),[g]);return Object(a.useEffect)((function(){Object(u.a)(s.a.mark((function a(){var r,c,o,i,u;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!Boolean(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)){a.next=19;break}return a.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{height:e,width:t,aspectRatio:t/e,facingMode:"environment"}});case 5:return r=a.sent,n.current.srcObject=r,a.next=9,navigator.mediaDevices.enumerateDevices();case 9:if(c=a.sent,o=c.find((function(e){return"videoinput"===e.kind&&"Back Camera"===e.label}))){a.next=13;break}throw new Error("No environment video device found");case 13:return console.log(o),i=new d.BrowserQRCodeReader,a.next=17,i.decodeFromStream(r,n.current,w);case 17:(u=a.sent)&&console.log(u);case 19:a.next=24;break;case 21:a.prev=21,a.t0=a.catch(0),console.log(a.t0);case 24:case"end":return a.stop()}}),a,null,[[0,21]])})))()}),[n,e,t,h,w]),r.a.createElement(a.Fragment,null,r.a.createElement("canvas",{hidden:!0,ref:c}),r.a.createElement("video",{ref:n,autoPlay:!0,playsInline:!0}),null!==m&&r.a.createElement("div",{className:"qr-code"},m))};var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,n){e.exports=n(186)}},[[99,1,2]]]);
//# sourceMappingURL=main.d84dec8d.chunk.js.map