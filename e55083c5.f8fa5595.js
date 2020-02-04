(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),i=(n(0),n(163)),o={title:"Run sample scans",linkTitle:"Run sample scans",weight:70,description:"Learn how to run the Certifai use case scans provided as examples in your Certifai Toolkit.\n"},l={id:"version-1.0.1/usage/sample-scans",title:"Run sample scans",description:"Learn how to run the Certifai use case scans provided as examples in your Certifai Toolkit.\n",source:"@site/versioned_docs/version-1.0.1/usage/sample-scans.md",permalink:"/cortex-certifai/docs/usage/sample-scans",version:"1.0.1",sidebar:"version-1.0.1/docs",previous:{title:"View scans in the Console",permalink:"/cortex-certifai/docs/usage/console"},next:{title:"Get started in Jupyter Notebooks",permalink:"/cortex-certifai/docs/usage/jupyter"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Run Reference Model server",id:"run-reference-model-server",children:[]},{value:"Run a use case scan",id:"run-a-use-case-scan",children:[]},{value:"Run a scan for a single use case model",id:"run-a-scan-for-a-single-use-case-model",children:[]},{value:"View scan results",id:"view-scan-results",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../setup/download-toolkit"}),"Download the Certifai toolkit")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../setup/install-certifai-cli-lib"}),"Install the Certifai CLI")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../setup/install-reference-models"}),"Install the Certifai Reference Models"))),Object(i.b)("h2",{id:"run-reference-model-server"},"Run Reference Model server"),Object(i.b)("p",null,"To run a scan, you must first make one or more model implementations accessible\nto Certifai via REST endpoints."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In another terminal, activate the ",Object(i.b)("inlineCode",{parentName:"li"},"certifai-reference-models")," conda environment",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"conda activate certifai-reference-models\n"))),Object(i.b)("li",{parentName:"ol"},"Run the certifai reference model server by doing:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"```\nstartCertifaiModelServer\n```\n")),"If you are asked to allow an external connection, click 'Deny' as the models\nonly need to be available locally.")),Object(i.b)("p",null,"You should see build output that ends similar to the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"* Running on http://0.0.0.0:5111/ (Press CTRL+C to quit)\n")),Object(i.b)("h2",{id:"run-a-use-case-scan"},"Run a use case scan"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the original terminal where you unzipped the toolkit and activated\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"certifai")," conda environment, run the ",Object(i.b)("inlineCode",{parentName:"p"},"certifai")," command\nspecifying the scan definition file and an output path.\n(The following use case example scans four models that\npredict whether a person has type 2 diabetes.)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"certifai scan -f examples/definitions/diabetes_scanner_definition.yaml -o ./reports\n")),Object(i.b)("p",{parentName:"li"}," The scan may take 10 or more minutes to complete, depending on the CPU available on your system."),Object(i.b)("p",{parentName:"li"}," Note: You may see ",Object(i.b)("inlineCode",{parentName:"p"},"DataConversionWarning")," in the output of the reference\nmodel server.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When the scan completes, output similar to the following is displayed."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"...\nScan Completed\n\n====== Report Summary ======\nTotal number of evaluations performed: 20\nNumber of successful reports: 20\nNumber of failed reports: 0\n")),Object(i.b)("p",{parentName:"li"},"The reports are written into the ",Object(i.b)("inlineCode",{parentName:"p"},"./reports")," folder as specified in the ",Object(i.b)("inlineCode",{parentName:"p"},"-o")," option."),Object(i.b)("p",{parentName:"li"},"In general scan results include up to 6 report files created\nfor each model implementation:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"robustness"),Object(i.b)("li",{parentName:"ul"},"fairness"),Object(i.b)("li",{parentName:"ul"},"explainability"),Object(i.b)("li",{parentName:"ul"},"explanations"),Object(i.b)("li",{parentName:"ul"},"performance"),Object(i.b)("li",{parentName:"ul"},"atx (AI Trust Index)")),Object(i.b)("p",{parentName:"li"},"The diabetes use case does not include a fairness report, so only 20 reports, 5 per model, are displayed."))),Object(i.b)("h2",{id:"run-a-scan-for-a-single-use-case-model"},"Run a scan for a single use case model"),Object(i.b)("p",null,"Run a scan for a single model using the ",Object(i.b)("inlineCode",{parentName:"p"},"-m")," flag."),Object(i.b)("p",null,"The following command runs a scan for the model with an ",Object(i.b)("inlineCode",{parentName:"p"},"id")," of ",Object(i.b)("inlineCode",{parentName:"p"},"svm")," in the definition file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"certifai scan -f examples/definitions/diabetes_scanner_definition.yaml -m svm -o ./reports\n")),Object(i.b)("h2",{id:"view-scan-results"},"View scan results"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start the local Certifai Console from the folder where you unzipped the toolkit (",Object(i.b)("inlineCode",{parentName:"p"},"certifai/"),"). Specify the reports output folder."),Object(i.b)("br",null),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"MAC/Linux"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"SCAN_RESULTS_DIRECTORY=examples/reports python -m certifai.console.app\n")),Object(i.b)("br",null),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Windows Users")),Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"SCAN_RESULTS_DIRECTORY")," environment variable accepts unix style paths. So, if you want to store scan results in a Windows directory ",Object(i.b)("inlineCode",{parentName:"p"},"folder1\\folder2\\reports"),", you should set ",Object(i.b)("inlineCode",{parentName:"p"},"SCAN_RESULTS_DIRECTORY=folder1/folder2/reports")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("em",{parentName:"p"},"Environment Variables for Windows Users")),Object(i.b)("p",{parentName:"li"},"  Set the environment variables in your CMD prompt appropriately. Double quote paths if they contain any spaces"),Object(i.b)("p",{parentName:"li"},"For CMD prompt, you can use the following command"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"set SCAN_RESULTS_DIRECTORY=examples/reports python -m certifai.console.app\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The Console is available at ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:8000"),". Copy this URL into a browser to view your scan result visualizations."))))}p.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,l({ref:t},s,{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);