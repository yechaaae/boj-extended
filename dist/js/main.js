"use strict";(function a(){if(chrome.runtime.lastError)return console.warn(chrome.runtime.lastError.message),void setTimeout(a,1e3);const b=window.location;b.pathname.startsWith("/user/")?extendUserPage():b.pathname.startsWith("/status")?extendStatusPage():b.pathname.startsWith("/group/member/")?extendGroupMemberPage():function(a){return a.startsWith("/my/files")||a.startsWith("/modify")||a.startsWith("/password/change")||a.startsWith("/setting/")||a.startsWith("/support")}(b.pathname)&&extendSettingPage(),extendTheme(),extendWide(),function(){function a(a){for(let b=0;3>b;++b){if(a.classList.contains("result-text"))return a;a=a.parentNode}return null}function b(a,b){const c=new MutationObserver(function(a){a.forEach(function(a){b(a.target)})});c.observe(a,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}function c(a,b){a.parentNode.appendChild(b)}function d(a,b){const c=(a.getAttribute("class")||"").trim();c.startsWith("result-")&&Config.load(c,c=>{c?(a.style.display="none",b.style.display="",b.innerHTML=c):(a.style.display="",b.style.display="none")})}document.querySelectorAll("span[class^=result-]").forEach(e=>{if(e.classList.contains("result-text"))return;const f=document.createElement("span");f.setAttribute("class","result-fake-text");const g=a(e);null===g?c(e,f):(c(g,f),b(g,a=>{const b=a.querySelector("span")||a;d(b,f)})),d(e,f)})}(),extendProblemPage()})();