(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{124:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),i=(r(0),r(163)),l={title:"Install Certifai Toolkit",linkTitle:"Install Certifai Toolkit",weight:60,description:"Follow this process to install the Certifai CLI, libraries, and Console.\n"},o={id:"version-1.0.1/setup/install-certifai-cli-lib",title:"Install Certifai Toolkit",description:"Follow this process to install the Certifai CLI, libraries, and Console.\n",source:"@site/versioned_docs/version-1.0.1/setup/install-certifai-cli-lib.md",permalink:"/cortex-certifai/docs/setup/install-certifai-cli-lib",version:"1.0.1",sidebar:"version-1.0.1/docs",previous:{title:"Install Certifai reference model package",permalink:"/cortex-certifai/docs/setup/install-reference-models"},next:{title:"View scans in the Console",permalink:"/cortex-certifai/docs/usage/console"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install the Certifai Toolkit",id:"install-the-certifai-toolkit",children:[]}],p={rightToc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"download-toolkit"}),"Download the Certifai toolkit")),Object(i.b)("li",{parentName:"ul"},"Python 3.6 (support for 3.7 and 3.8 coming soon)"),Object(i.b)("li",{parentName:"ul"},"Conda or another virtual environment manager (recommended)")),Object(i.b)("h2",{id:"install-the-certifai-toolkit"},"Install the Certifai Toolkit"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a virtual environment"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"conda create -n certifai python=3.6\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Activate the newly created environment"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"conda activate certifai\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the base requirements"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"pip install -r requirements.txt\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the CERTIFAI packages"),Object(i.b)("p",{parentName:"li"},"On MAC or Linux:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"pip install packages/*\n")),Object(i.b)("p",{parentName:"li"},"For Windows COMMAND shell:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"for %f in (packages\\*.zip) do pip install %f\n")),Object(i.b)("p",{parentName:"li"},"For Windows Powershell:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-ChildItem .\\packages\\*.zip | ForEach-Object -Process { pip install $_ }\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify that the Certifai CLI and client libraries are installed successfully."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"certifai -h\n")),Object(i.b)("p",{parentName:"li"},"A usage statement is displayed if the Certifai CLI has been installed successfully."))))}s.isMDXComponent=!0},163:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,m=b["".concat(l,".").concat(f)]||b[f]||u[f]||i;return r?a.a.createElement(m,o({ref:t},p,{components:r})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);