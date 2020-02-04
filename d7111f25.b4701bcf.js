(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{115:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return b}));var a=i(1),r=i(6),n=(i(0),i(121)),o={title:"Download Certifai Toolkit",linkTitle:"Download Certifai Toolkit",weight:50,description:"Follow this process to download the Certifai Toolkit.\n"},l={id:"setup/download-toolkit",title:"Download Certifai Toolkit",description:"Follow this process to download the Certifai Toolkit.\n",source:"@site/docs/setup/download-toolkit.md",permalink:"/cortex-certifai/docs/setup/download-toolkit",sidebar:"docs",previous:{title:"OpenShift Setup",permalink:"/cortex-certifai/docs/setup/openshift-setup"},next:{title:"Install Certifai reference model package",permalink:"/cortex-certifai/docs/setup/install-reference-models"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Download Certifai Toolkit",id:"download-certifai-toolkit",children:[]},{value:"Next steps",id:"next-steps",children:[]}],p={rightToc:c};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The Certifai Toolkit is used in both remote and local implementations of Certifai, as well as for use with Jupyter lab. The toolkit includes the following:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Reference Model server - serves the reference models provided to help you get started with Certifai"),Object(n.b)("li",{parentName:"ul"},"Certifai CLI - tool for inputing scan definitions locally or remotely"),Object(n.b)("li",{parentName:"ul"},"Client library/API - methods that run the scans"),Object(n.b)("li",{parentName:"ul"},"Certifai Console - UI for visualizing scan results")),Object(n.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Remote Certifai Console URL - requires installation of Certifai on ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/cortex-certifai/docs/setup/openshift-setup"}),"RedHat OpenShift"))),Object(n.b)("h2",{id:"download-certifai-toolkit"},"Download Certifai Toolkit"),Object(n.b)("p",null,"Navigate to the remote Certifai Console at the URL provided by your Administrator."),Object(n.b)("p",null,"In the Certifai Console"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click on the help icon at the top right.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("inlineCode",{parentName:"p"},"Download Toolkit"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Accept the license agreement.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The zip package is downloaded to your local drive.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Make a directory to work in (e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"certifai"),")."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"mkdir certifai\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Unzip the package into it."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Mac/Linux users"),":",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"unzip certifai_toolkit.zip -d certifai\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows users"),"\nUnzip the files to the proper location using your preferred GUI tool, or run the following prompt in POWERSHELL:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"Expand-Archive -LiteralPath certifai_toolkit.zip -DestinationPath certifai -Force\n")),"  NOTE: If a ",Object(n.b)("inlineCode",{parentName:"li"},"certifai_toolkit.zip")," exists, it will be overwritten automatically."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Go into the folder to view the zip file contents."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"cd certifai\n")),Object(n.b)("p",{parentName:"li"},"The zip file contains:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"a ",Object(n.b)("inlineCode",{parentName:"li"},"packages")," folder containing a set of python packages as zip files"),Object(n.b)("li",{parentName:"ul"},"a pip ",Object(n.b)("inlineCode",{parentName:"li"},"requirements.txt")," file"),Object(n.b)("li",{parentName:"ul"},"an ",Object(n.b)("inlineCode",{parentName:"li"},"examples")," folder containing scan definitions and datasets for:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"the 'healthcare disease prediction (diabetes)' example model use case"),Object(n.b)("li",{parentName:"ul"},"the 'banking loan approval (german credit)' example model use case.")))))),Object(n.b)("h2",{id:"next-steps"},"Next steps"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"For users who want to get acquainted with the scan results visualizations: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/cortex-certifai/docs/usage/console"}),"open the Console and view the sample reports available with the toolkit"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"For users, like data engineers, who have developed models and who want to quickly define a scan from a command line: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/cortex-certifai/docs/setup/install-certifai-cli-lib"}),"Install the Certifai CLI"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"For users who are developing models and who are comfortable using python notebooks, like data scientists: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/cortex-certifai/docs/setup/install-certifai-cli-lib"}),"Install the Certifai libraries"),"."))))}b.isMDXComponent=!0},121:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return f}));var a=i(0),r=i.n(a);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l({},t,{},e)),i},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(i),d=a,f=s["".concat(o,".").concat(d)]||s[d]||u[d]||n;return i?r.a.createElement(f,l({ref:t},p,{components:i})):r.a.createElement(f,l({ref:t},p))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=i[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);