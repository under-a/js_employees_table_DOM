const e={asc:!0,currentColumnIndex:-1,cities:["","Tokyo","Singapore","London","New York","Edinburgh","San Francisco"]};var t=(t,r)=>{let n=document.createElement("select"),o=document.createElement("label");if(e.cities.forEach(e=>{let t=document.createElement("option");t.value=e,t.label=e,n.append(t)}),n.setAttribute("data-qa","office"),n.required=!0,"FORM"===t.tagName){o.innerHTML=r.textContent,o.append(n),t.append(o);return}n.style.cssText=`
    width: 150px;
    box-sizing: border-box;
    border: 1px solid #808080;
    border-radius: 4px;
    color: #808080;
    padding: 4px;
    outline-color: #808080;
  `,t.append(n)},r=(e,r)=>{let n=document.createElement("form"),o=document.createElement("button");for(let e of r){let r=e.textContent.toLocaleLowerCase(),o="age"===r||"salary"===r?"number":"text";if("office"===r){t(n,e);continue}let a=document.createElement("input");a.name=r,a.type=o,a.setAttribute("data-qa",r),n.innerHTML+=`<label>${e.textContent}: ${a.outerHTML}</label>`}n.classList.add("new-employee-form"),o.textContent="Save to table",o.classList.add("submit"),n.append(o),e.append(n)},n=e=>"$"+(+e).toLocaleString("en-US"),o=function(e,t){let r=e.querySelectorAll("label"),o=document.createElement("tr");[...r].forEach(e=>{"SELECT"===e.children[0].nodeName?o.innerHTML+=`<td>${e.children[0].selectedOptions[0].label}</td>`:"salary"===e.children[0].name?o.innerHTML+=`<td>${n(e.children[0].value)}</td>`:o.innerHTML+=`<td>${e.children[0].value}</td>`}),t.tBodies[0].append(o),e.reset()},a=(e,t,r)=>{let n=document.createElement("div");n.style.cssText=`
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
  `,n.innerHTML=`<h2 class="title">${e}</h2><p>${t}</p>`,n.classList=`notification ${r}`,n.setAttribute("data-qa","notification"),document.body.append(n),setTimeout(()=>{n.remove()},2500)},l=e=>{for(let t of[...e.querySelectorAll("input")]){if("name"===t.name){if(t.value.length<4)return a("Error!",`An error occurred while trying to add employee to the table.
          Reason: name is too short`,"error"),!1;if(0===t.value.trim().length)return a("Error!",`An error occurred while trying to add employee to the table.
          Reason: name cannot contain only whitespaces`,"error"),!1}if("position"===t.name){if(!t.value.length)return a("Error!",`An error occurred while trying to add employee to the table.
          Reason: choose position`,"error"),!1;if(0===t.value.trim().length)return a("Error!",`An error occurred while trying to add employee to the table.
          Reason: position cannot contain only whitespaces`,"error"),!1}if("salary"===t.name&&!t.value.length)return a("Error!",`An error occurred while trying to add employee to the table.
          Reason: salary input cannot be empty`,"error"),!1;if("age"===t.name&&(18>+t.value||+t.value>90))return a("Error!",`An error occurred while trying to add employee to the table.
          Reason: age is not match the required range (18-90)`,"error"),!1}return a("Success!","The employee was successfully added to the table","success"),!0},i=e=>+e.split(",").join("").slice(1),d=(t,r)=>{t!==e.currentColumnIndex&&(e.asc=!0),r.sort((r,n)=>{let o=i(r.children[t].textContent),a=i(n.children[t].textContent);return e.asc?o-a:a-o}),e.asc=!e.asc,e.currentColumnIndex=t},c=(t,r,n)=>{if(n.includes(t.target)){let o=n.indexOf(t.target),a=[...r.tBodies[0].rows];"Salary"===n[o].textContent?d(o,a):(o!==e.currentColumnIndex&&(e.asc=!0),a.sort((t,r)=>{let n=t.children[o].textContent,a=r.children[o].textContent;return isNaN(n)||isNaN(a)?e.asc?n.localeCompare(a):a.localeCompare(n):e.asc?parseFloat(n)-parseFloat(a):parseFloat(a)-parseFloat(n)}),e.asc=!e.asc),e.currentColumnIndex=o,a.forEach(e=>{r.tBodies[0].appendChild(e)})}},s=(e,t)=>{if("TD"===e.target.nodeName){e.target.parentNode.classList.toggle("active");let r=[...t.rows].indexOf(e.target.parentNode);[...t.rows].forEach((e,n)=>{n!==r&&t.rows[n].classList.remove("active")})}},u=(e,r)=>{let n=e.target,o=[...n.parentNode.children].indexOf(n);if("TD"!==n.nodeName)return;let a=n.textContent,l=document.createElement("input");l.classList.add("cell-input"),l.value=a,n.textContent="",n.append(l),l.focus(),2===o&&(n.firstChild.remove(),t(n,r[o]),n.firstChild.focus()),n.firstElementChild.addEventListener("blur",e=>{let t=e.target.value;2===o&&(t=e.target.selectedOptions[0].label),n.textContent=t||a,n.firstElementChild.remove()}),n.firstElementChild.addEventListener("keydown",e=>{if("Enter"===e.key){let t=e.target.value;2===o&&(t=e.target.selectedOptions[0].label),n.textContent=t||a,n.firstElementChild.remove()}})};const m=document.querySelector("table"),p=document.querySelector("body"),h=[...m.tHead.firstElementChild.children];document.addEventListener("DOMContentLoaded",()=>{r(p,h),m.addEventListener("click",e=>{e.preventDefault(),c(e,m,h),s(e,m)}),m.tBodies[0].addEventListener("dblclick",e=>{u(e,h)});let e=document.querySelector("form");e.addEventListener("submit",t=>{t.preventDefault(),l(e)&&o(e,m)})});
//# sourceMappingURL=index.451008fc.js.map
