!function(a){var b=function(a){var b=0;return a.wheelDelta?b=a.wheelDelta:a.detail&&(b=-a.detail),a.preventDefault&&a.preventDefault(),b},c=(new Date).getTime(),d=0,e=function(e){if(a.needMouseWheel===!0){var f=b(e);d+=f;var g=(new Date).getTime();if(g-c>40){var h=a.getFlashMovie();h.externalMouseWheel(d),d=0,c=g}}};a.addEventListener&&a.addEventListener("DOMMouseScroll",e,!1),a.onmousewheel=a.document.onmousewheel=e}(window);