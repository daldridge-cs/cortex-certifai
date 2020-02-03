(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(1),r=(a(0),a(121));const o={title:"What is Certifai?",linkTitle:"What is Certifai?",weight:10,description:"What is Cortex Certifai, and how does it works at a high level?\n"},i={id:"about",title:"What is Certifai?",description:"What is Cortex Certifai, and how does it works at a high level?\n",source:"@site/docs/about.md",permalink:"/cortex-certifai/docs/about",sidebar:"docs",next:{title:"Quickstart",permalink:"/cortex-certifai/docs/quickstart"}},s=[{value:"How does Certifai work?",id:"how-does-certifai-work",children:[]},{value:"Certifai usage options",id:"certifai-usage-options",children:[]},{value:"Certifai components",id:"certifai-components",children:[{value:"Install components",id:"install-components",children:[]},{value:"Runtime components",id:"runtime-components",children:[]}]}],l={rightToc:s};function c({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Cortex Certifai evaluates AI models for robustness, fairness, and explainability, and allows users to compare different models or model versions for these qualities."),Object(r.b)("h2",{id:"how-does-certifai-work"},"How does Certifai work?"),Object(r.b)("p",null,"Data Scientists create scan definitions, which are comprised of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"One or more trained models that they want to evaluate"),Object(r.b)("li",{parentName:"ul"},"A single curated dataset (NOTE: For explanations a subset of the dataset may be used.)")),Object(r.b)("p",null,"Models are evaluated/scored for one or more of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"factors/performance-metric"}),Object(r.b)("strong",{parentName:"a"},"Performance Metric")),": This is a measurement that the data scientist has provided test data to calculate or pre-calculated scores for in the model definition. (e.g. Accuracy)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"factors/robustness"}),Object(r.b)("strong",{parentName:"a"},"Robustness")),": measures how well models retain an outcome given changes to the data feature values. The more robust a model is, the greater the changes required to alter the outcome.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"factors/fairness"}),Object(r.b)("strong",{parentName:"a"},"Fairness by group")),': measures the difference required to change the outcome for different groups implicit in a feature given the same model and dataset. For example, implicit groups male, female, and nonbinary belong to the feature, "gender". A fair model shows that all 3 groups require a similar amount of change to alter the results.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"factors/explainability"}),Object(r.b)("strong",{parentName:"a"},"Explainability")),": measures the average simplicity of counterfactual explanations provided for each model. An explanation that requires a single changed feature will score 100%. Explanations that require more changed features will score lower.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"factors/explainability"}),Object(r.b)("strong",{parentName:"a"},"Explanations")),": display the prediction provided through the generation of counterfactuals for the change that must occur in a dataset with given restrictions to obtain a different outcome. To alter an outcome some dataset feature values must change while others remain constant. Each observation row of the dataset is displayed in a table that shows the changed features, as well as the original values and counterfactual values for that feature.  Users can explore the entire dataset one observation at a time to understand what features changed and by how much to obtain a different result."))),Object(r.b)("p",null,"Business decision makers and Compliance Officers are able to view the evaluation comparison visualizations and scores to select the best models for business goals and to identify whether or not models meet thresholds for robustness, fairness, and/or explainability."),Object(r.b)("p",null,"Data Scientists can use the evaluation results to improve models and model training to provide more trustworthy AI models."),Object(r.b)("h2",{id:"certifai-usage-options"},"Certifai usage options"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Certifai")," deployed remotely:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Use Case"),": for scans that require more resources because of large datasets or long runtimes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Storage"),": The datasets and scan output are connected to S3 (or Ceph) storage buckets."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Scan definition"),": configured using the Certifai CLI and saved as YAML file using any text editor."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Run scan"),": A Certifai remote scan is run by an administrator who triggers a Kubernetes job that points to the scan definition file and runs in the cloud or OpenShift. Datasets must be available in S3 (or Ceph)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Scan output"),": The scan results are delivered to the S3 (or Ceph) bucket that is configured when the operator instance is created, where they can viewed from the Remote Console instance (the URL for the Remote Console is available from the system administrator).")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Certifai")," installed locally:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Use Case"),": Used for local scans run by data scientists with smaller datasets  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Storage"),": Datasets must be saved locally (as .csv files with headers)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Scan definition"),": Scans may be defined locally using the Certifai CLI or in a Jupyter notebook."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Run scan"),": Scans are run from the CLI or a notebook using the API."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Scan output"),": Scan results are saved to a local file and displayed in a local instance of the Console.")),Object(r.b)("h2",{id:"certifai-components"},"Certifai components"),Object(r.b)("h3",{id:"install-components"},"Install components"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Operator",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Sets up remote Console route (URL)"),Object(r.b)("li",{parentName:"ul"},"Sets up remote files storage connection to scanner and console (S3 or Ceph)"),Object(r.b)("li",{parentName:"ul"},"Sets up remote authentication method"),Object(r.b)("li",{parentName:"ul"},"Deploys the Console and Reference Model server running in Kubernetes"))),Object(r.b)("li",{parentName:"ul"},"Toolkit",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Reference Model server - serves the reference models provided to help you get started with Certifai"),Object(r.b)("li",{parentName:"ul"},"Certifai CLI - tool for inputing scan definitions locally or remotely"),Object(r.b)("li",{parentName:"ul"},"Client library/API - methods that run the scans")))),Object(r.b)("h3",{id:"runtime-components"},"Runtime components"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Scanner: Runs model scan",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Scan definition input configured via:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"CLI"),Object(r.b)("li",{parentName:"ul"},"Notebook/IDE"))),Object(r.b)("li",{parentName:"ul"},"Scan results output storage:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Local filesystem"),Object(r.b)("li",{parentName:"ul"},"Remote S3 (or Ceph) bucket"))))),Object(r.b)("li",{parentName:"ul"},"Console: Displays visualizations of scan results"),Object(r.b)("li",{parentName:"ul"},"Reference Model server to serve the sample models")))}c.isMDXComponent=!0},121:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return a?r.a.createElement(d,s({ref:t},c,{components:a})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);