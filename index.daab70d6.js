// write your code here
var t=document.querySelector(".total-population"),e=document.querySelector(".average-population"),o=document.querySelectorAll(".population"),n=0,r=0,l=!0,a=!1,u=void 0;try{for(var i,c=o[Symbol.iterator]();!(l=(i=c.next()).done);l=!0){var y=i.value.innerHTML,S=Number(y.split(",").join(""));r+=S}}catch(t){a=!0,u=t}finally{try{l||null==c.return||c.return()}finally{if(a)throw u}}n=r/o.length,t.textContent=r.toLocaleString("en-US"),e.textContent=n.toLocaleString("en-US");//# sourceMappingURL=index.daab70d6.js.map

//# sourceMappingURL=index.daab70d6.js.map
