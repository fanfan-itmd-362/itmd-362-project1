/* eslint-disable */
/* jshint ignore:start */
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgrid_cssgridlegacy-flexbox-flexboxlegacy-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,l;for(var a in x)if(x.hasOwnProperty(a)){if(e=[],n=x[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],l=i.split("."),1===l.length?Modernizr[l[0]]=s:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=s),C.push((s?"":"no-")+l.join("-"))}}function o(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?S.className.baseVal=n:S.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?f(s,t||n):s);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function p(){var e=n.body;return e||(e=l(_?"svg":"body"),e.fake=!0),e}function m(e,t,r,s){var o,i,a,f,u="modernizr",d=l("div"),c=p();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=s?s[r]:u+(r+1),d.appendChild(a);return o=l("style"),o.type="text/css",o.id="s"+u,(c.fake?c:d).appendChild(o),c.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=f,S.offsetHeight):d.parentNode.removeChild(d),!!i}function g(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(d(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+d(n[s])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,s,o){function f(){d&&(delete E.style,delete E.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var u=g(e,s);if(!r(u,"undefined"))return u}for(var d,c,p,m,y,v=["modernizr","tspan","samp"];!E.style&&v.length;)d=!0,E.modElem=l(v.shift()),E.style=E.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],y=E.style[m],i(m,"-")&&(m=a(m)),E.style[m]!==t){if(o||r(s,"undefined"))return f(),"pfx"==n?m:!0;try{E.style[m]=s}catch(h){}if(E.style[m]!=y)return f(),"pfx"==n?m:!0}return f(),!1}function v(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?y(l,n,s,o):(l=(e+" "+T.join(i+" ")+i).split(" "),u(l,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],x=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var S=n.documentElement,_="svg"===S.nodeName.toLowerCase(),b="Moz O ms Webkit",P=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=P;var T=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=T;var z={elem:l("modernizr")};Modernizr._q.push(function(){delete z.elem});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style}),w.testAllProps=v,w.testAllProps=h,Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",h("boxDirection","reverse",!0)),s(),o(C),delete w.addTest,delete w.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);
/* jshint ignore:end */
/* eslint-enable */
$.noConflict();
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#form').on("submit", function(e) {
    var userInput = {
      name: $('#name').val(),
      email: $('#email').val(),
      passwd: $('#password').val(),
      birthday: $('#birthday').val()
    };
    var verify = {
      name: false,
      email: false,
      passwd: false,
      birthday: false
    };
    var reg = {
      name: /^[0-9a-zA-Z\s]+$/,
      email: /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    };

    remove_red();

    if (!reg.name.test(userInput.name) || userInput.name.length > 12) {
      $('#info-name').addClass('red');
      $('#name').addClass('red');
    } else {
      verify.name = true;
    }
    if (!reg.email.test(userInput.email)) {
      $('#info-email').addClass('red');
      $('#email').addClass('red');
    } else {
      verify.email = true;
    }
    if (userInput.passwd.length < 8) {
      $('#info-password').addClass('red');
      $('#password').addClass('red');
    } else {
      verify.passwd = true;
    }
    if (is_eighteen(userInput.birthday) === false) {
      $('#info-birthday').addClass('red');
      $('#birthday').addClass('red');
      return false;
    } else {
      verify.birthday = true;
    }

    if (verify.name === true && verify.email === true && verify.passwd === true && verify.birthday === true) {
      $(this).remove();
      $('div').append('<section id="welcome"><ul><li id="submitted">' + userInput.name + ', welcome to our community</li><li id="passwd">Your Password is "' + userInput.passwd + '"</li></ul></section>');
      $('#info-fun').addClass('green');
      return true;
    }
    e.preventDefault();
  });

  function remove_red() {
    $('#info-name').removeClass('red');
    $('#name').removeClass('red');
    $('#info-email').removeClass('red');
    $('#email').removeClass('red');
    $('#info-password').removeClass('red');
    $('#password').removeClass('red');
    $('#info-birthday').removeClass('red');
    $('#birthday').removeClass('red');
  }

  function is_eighteen(birthday) {
    var result = false;
    var today = new Date();
    var birth = {
      raw: birthday.split('/')
    };
    var year = (today.getFullYear() - Number(birth.raw[2]));
    var month = (today.getMonth() - Number(birth.raw[0]) + 1);
    var date = (today.getDate() - Number(birth.raw[1]));

    if (birthday.length > 0) {
      if (year > 18) {
        result = true;
      } else if ((year === 18) && (month > 0)) {
        result = true;
      } else if ((month === 0) && (date >= 0)) {
        result = true;
      }
    }

    return result;
  }
});
