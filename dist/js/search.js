"use strict";function extendQuickSearch(){async function a(a){const b={requests:[{indexName:"Problems",params:encodeURI("query="+a+"&page=0&facets=[]&tagFilters=")}]},{results:c}=await fetch(Constants.QUICK_SEARCH_URL+"?"+Constants.QUICK_SEARCH_QUERY,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify(b)}).then(a=>a.json());f.innerHTML="";const{hits:d,processingTimeMS:e,nbHits:i}=c[0];for(const b of d){const{id:a,time:c,memory:d}=b,{title:e,description:g}=b._highlightResult,h=Utils.createElement("div",{class:"quick-search-item"});h.innerHTML=`\
        <div class="title"><a href="/problem/${a}">${a}번 - ${e.value}</a></div>\
        <div class="meta">시간 제한: ${c}초 &nbsp; 메모리 제한: ${d}MB</div>\
        <div class="desc">${g.value}</div>\
        <div class="links"> \
          <a href="/submit/${a}">제출</a> \
          <a href="/problem/status/${a}">맞은 사람</a> \
          <a href="/status?from_problem=1&amp;problem_id=${a}">채점 현황</a> \
        </div> \
      `,f.appendChild(h)}h.href=encodeURI("/search#q="+a+"&c=Problems"),g.innerHTML=`${i}개의 결과 중 ${d.length}개 표시 (${e/1e3}초)`}let b=!1;const c=Utils.createElement("div",{id:"quick-search",class:"overlay"}),d=Utils.createElement("div",{class:"container"}),e=Utils.createElement("input",{class:"form-control",placeholder:"\uAC80\uC0C9",autofucus:!0}),f=Utils.createElement("div",{class:"results"}),g=Utils.createElement("div",{class:"results-footer"});g.innerText="-";const h=Utils.createElement("a",{class:"btn btn-default more-button",href:"/search"});h.innerText="\uB354 \uB9CE\uC740 \uAC80\uC0C9 \uACB0\uACFC \uBCF4\uAE30",d.appendChild(e),d.appendChild(f),d.appendChild(g),d.appendChild(h),c.appendChild(d),document.body.appendChild(c);let i=null,j="";e.addEventListener("keyup",async b=>{b.preventDefault();const c=b.target.value,d=c.replace(/\s/g,"");j!==d&&(j=d,clearTimeout(i),i=setTimeout(()=>{a(c)},100))});const k=new Set;document.addEventListener("keydown",a=>{k.add(a.key)}),document.addEventListener("keyup",a=>{k.has("Escape")?(b=!1,c.style.display="none"):k.has("/")&&(k.has("Control")||k.has("Alt"))&&(b=!0,c.style.display="flex",setTimeout(()=>{e.focus()},10)),k.delete(a.key)}),document.addEventListener("click",a=>{a.target==c&&(b=!1,c.style.display="none")})}