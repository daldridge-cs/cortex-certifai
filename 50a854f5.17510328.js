(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),r=(n(0),n(121));const i={title:"Run sample scans",linkTitle:"Run sample scans",weight:70,description:"Learn how to run the Certifai use case scans provided as examples in your Certifai Toolkit.\n"},o={id:"usage/sample-scans",title:"Run sample scans",description:"Learn how to run the Certifai use case scans provided as examples in your Certifai Toolkit.\n",source:"@site/docs/usage/sample-scans.md",permalink:"/cortex-certifai/docs/usage/sample-scans",sidebar:"docs",previous:{title:"View scans in the Console",permalink:"/cortex-certifai/docs/usage/console"},next:{title:"Get started in Jupyter Notebooks",permalink:"/cortex-certifai/docs/usage/jupyter"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Run Reference Model server",id:"run-reference-model-server",children:[]},{value:"Run a use case scan",id:"run-a-use-case-scan",children:[]},{value:"Run a scan for a single use case model",id:"run-a-scan-for-a-single-use-case-model",children:[]},{value:"View scan results",id:"view-scan-results",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"../setup/download-toolkit"}),"Download the Certifai toolkit")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"../setup/install-certifai-cli-lib"}),"Install the Certifai CLI")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"../setup/install-reference-models"}),"Install the Certifai Reference Models"))),Object(r.b)("h2",{id:"run-reference-model-server"},"Run Reference Model server"),Object(r.b)("p",null,"To run a scan, you must first make one or more model implementations accessible\nto Certifai via REST endpoints."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In another terminal, activate the ",Object(r.b)("inlineCode",{parentName:"li"},"certifai-reference-models")," conda environment",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"conda activate certifai-reference-models\n"))),Object(r.b)("li",{parentName:"ol"},"Run the certifai reference model server by doing:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"```\nstartCertifaiModelServer\n```\n")),"If you are asked to allow an external connection, click 'Deny' as the models\nonly need to be available locally.")),Object(r.b)("p",null,"You should see build output that ends similar to the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"* Running on http://0.0.0.0:5111/ (Press CTRL+C to quit)\n")),Object(r.b)("h2",{id:"run-a-use-case-scan"},"Run a use case scan"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the original terminal where you unzipped the toolkit and activated\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"certifai")," conda environment, run the ",Object(r.b)("inlineCode",{parentName:"p"},"certifai")," command\nspecifying the scan definition file and an output path.\n(The following use case example scans four models that\npredict whether a person has type 2 diabetes.)"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"certifai scan -f examples/definitions/diabetes_scanner_definition.yaml -o ./reports\n")),Object(r.b)("p",{parentName:"li"}," The scan may take 10 or more minutes to complete, depending on the CPU available on your system."),Object(r.b)("p",{parentName:"li"}," Note: You may see ",Object(r.b)("inlineCode",{parentName:"p"},"DataConversionWarning")," in the output of the reference\nmodel server.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When the scan completes, output similar to the following is displayed."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"...\nScan Completed\n\n====== Report Summary ======\nTotal number of evaluations performed: 20\nNumber of successful reports: 20\nNumber of failed reports: 0\n")),Object(r.b)("p",{parentName:"li"},"The reports are written into the ",Object(r.b)("inlineCode",{parentName:"p"},"./reports")," folder as specified in the ",Object(r.b)("inlineCode",{parentName:"p"},"-o")," option."),Object(r.b)("p",{parentName:"li"},"In general scan results include up to 6 report files created\nfor each model implementation:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"robustness"),Object(r.b)("li",{parentName:"ul"},"fairness"),Object(r.b)("li",{parentName:"ul"},"explainability"),Object(r.b)("li",{parentName:"ul"},"explanations"),Object(r.b)("li",{parentName:"ul"},"performance"),Object(r.b)("li",{parentName:"ul"},"atx (AI Trust Index)")),Object(r.b)("p",{parentName:"li"},"The diabetes use case does not include a fairness report, so only 20 reports, 5 per model, are displayed."))),Object(r.b)("h2",{id:"run-a-scan-for-a-single-use-case-model"},"Run a scan for a single use case model"),Object(r.b)("p",null,"Run a scan for a single model using the ",Object(r.b)("inlineCode",{parentName:"p"},"-m")," flag."),Object(r.b)("p",null,"The following command runs a scan for the model with an ",Object(r.b)("inlineCode",{parentName:"p"},"id")," of ",Object(r.b)("inlineCode",{parentName:"p"},"svm")," in the definition file."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"certifai scan -f examples/definitions/diabetes_scanner_definition.yaml -m svm -o ./reports\n")),Object(r.b)("h2",{id:"view-scan-results"},"View scan results"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Start the local Certifai Console from the folder where you unzipped the toolkit (",Object(r.b)("inlineCode",{parentName:"p"},"certifai/"),"). Specify the reports output folder."),Object(r.b)("br",null),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"MAC/Linux"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"SCAN_RESULTS_DIRECTORY=examples/reports python -m certifai.console.app\n")),Object(r.b)("br",null),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Windows Users")),Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"SCAN_RESULTS_DIRECTORY")," environment variable accepts unix style paths. So, if you want to store scan results in a Windows directory ",Object(r.b)("inlineCode",{parentName:"p"},"folder1\\folder2\\reports"),", you should set ",Object(r.b)("inlineCode",{parentName:"p"},"SCAN_RESULTS_DIRECTORY=folder1/folder2/reports")),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("em",{parentName:"p"},"Environment Variables for Windows Users")),Object(r.b)("p",{parentName:"li"},"  Set the environment variables in your CMD prompt appropriately. Double quote paths if they contain any spaces"),Object(r.b)("p",{parentName:"li"},"For CMD prompt, you can use the following command"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"set SCAN_RESULTS_DIRECTORY=examples/reports python -m certifai.console.app\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The Console is available at ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8000"),". Copy this URL into a browser to view your scan result visualizations."))))}s.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,l({ref:t},s,{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);