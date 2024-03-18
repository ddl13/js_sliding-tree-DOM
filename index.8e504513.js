var e=document.querySelector(".tree");e.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");t.className+="list-item",e.prepend(t),t.append(t.nextSibling)}),e.onclick=function(e){if("SPAN"===e.target.tagName){var t=e.target.parentNode.querySelector("ul");t&&(t.hidden=!t.hidden)}};
//# sourceMappingURL=index.8e504513.js.map
