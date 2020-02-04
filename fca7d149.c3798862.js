(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),i=n(6),r=(n(0),n(163)),o={title:"Define and run scans locally",linkTitle:"Define and run scans locally",weight:90,description:"Learn how to run your Certifai scans locally.\n"},c={id:"version-1.0.1/usage/local-scan",title:"Define and run scans locally",description:"Learn how to run your Certifai scans locally.\n",source:"@site/versioned_docs/version-1.0.1/usage/local-scan.md",permalink:"/cortex-certifai/docs/usage/local-scan",version:"1.0.1",sidebar:"version-1.0.1/docs",previous:{title:"Get started in Jupyter Notebooks",permalink:"/cortex-certifai/docs/usage/jupyter"},next:{title:"Run scans remotely",permalink:"/cortex-certifai/docs/usage/remote-scan"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Scan your own model",id:"scan-your-own-model",children:[]},{value:"Generate a scan definition",id:"generate-a-scan-definition",children:[]},{value:"Validate the scan definition",id:"validate-the-scan-definition",children:[{value:"Test connecting to the model endpoint",id:"test-connecting-to-the-model-endpoint",children:[]}]},{value:"Run your scan",id:"run-your-scan",children:[]},{value:"View the scan results visualizations",id:"view-the-scan-results-visualizations",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"../setup/download-toolkit"}),"Download the Certifai toolkit")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"../setup/install-certifai-cli-lib"}),"Install the Certifai Toolkit")),Object(r.b)("li",{parentName:"ol"},"You must have the following prepared to define your scan:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/cortex-certifai/docs/usage/prepare-model-endpoints"}),"Prepare your Model endpoint(s)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"(Optional) Performance metric(s)"))),Object(r.b)("li",{parentName:"ul"},"A dataset URL",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For Fairness reports: one or more dataset features you wish to measure"),Object(r.b)("li",{parentName:"ul"},"For Evaluations: an additional dataset URL (a subset of the original dataset)")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tip:")," You may want to use the sample use case components provided in the Certifai Toolkit to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"sample-scans"}),"run sample scans")," to familiarize yourself with Certifai."),Object(r.b)("h2",{id:"scan-your-own-model"},"Scan your own model"),Object(r.b)("p",null,"The steps in this section show how to create a scan from scratch, using one of the models in the German Credit example provided in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CognitiveScale/certifai-reference-models"}),"Certifai Reference Models Github Repository"),"."),Object(r.b)("h2",{id:"generate-a-scan-definition"},"Generate a scan definition"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In a different terminal, activate the Conda environment you created for ",Object(r.b)("inlineCode",{parentName:"p"},"certifai"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"conda activate certifai\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a new scan definition."),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"NOTE"),": If your dataset is being called from a local folder, make sure that you cd into that folder before you run this command."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"certifai definition-create\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Enter information as prompted."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"? Model use case ID  test\n? Learning Task Type  binary-classification\n? Dataset file type  csv\n? Dataset URL (use 'file:' prefix for local system files)  examples/datasets/german_credit_eval.csv\n? CSV dataset headers are present  Yes\n 2020-01-12 19:53:20,819 root   INFO     Creating dataset with id: eval\n 2020-01-12 19:53:20,854 root   INFO     Inferring dataset features and applying user overrides\n\n Scan definition created at: scan_definition.yaml\n")),Object(r.b)("p",{parentName:"li"}," The command generates the ",Object(r.b)("inlineCode",{parentName:"p"},"scan_definition.yaml")," file, using the information you entered and analyzing the schema of the dataset you provided.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Edit this file in a text editor to add information about the use case. See the comments in the generated definition for guidance on how to update the fields."),Object(r.b)("p",{parentName:"li"},"For the German Credit example, the minimum changes you need to make to run a scan in this use case are:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"fairness_grouping_features"),": Change the list of feature names to match the actual features you want to analyze for fairness. In this case, replace the list with ",Object(r.b)("inlineCode",{parentName:"p"},"status"),". The feature names are listed in the generated ",Object(r.b)("inlineCode",{parentName:"p"},"feature_schemas")," section.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"predict_endpoint"),": Change to the URL for the model, in this case ",Object(r.b)("inlineCode",{parentName:"p"},"http://certifai-ref-models:5111/german_credit_dtree/predict"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"outcome_column"),": If the example has a column containing the ground truth, uncomment and specify the feature name, which in this case is ",Object(r.b)("inlineCode",{parentName:"p"},"outcome"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"prediction_values"),": Change the ",Object(r.b)("inlineCode",{parentName:"p"},"value")," fields to the values returned in the prediction, and the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," fields to be suitable human-readable labels for the values. (In this use case, 1 indicates the loan is granted and 2 indicates it was denied.)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"prediction_description"),": The guiding question of the use case models; what the models are predicting."),Object(r.b)("p",{parentName:"li"},"For the German Credit example, the fields in the definition should look similar to:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"...\nevaluation:\n  ...\n  fairness_grouping_features:\n  - name: 'status'\n  ...\n  prediction_description: Is a loan granted?\n  prediction_values:\n  - favorable: true\n    name: Loan granted\n    value: 1\n  - favorable: false\n    name: Loan denied\n    value: 2\nmodels:\n- ...\n  predict_endpoint: http://localhost:5111/german_credit_dtree/predict\ndataset_schema:\n  ...\n  outcome_column: outcome\n")))))),Object(r.b)("p",null,"You can see a full version of the definition in the toolkit folder in ",Object(r.b)("inlineCode",{parentName:"p"},"examples/definitions/german_credit_scanner_definition.yaml"),". This example has multiple models and multiple fairness grouping features."),Object(r.b)("h2",{id:"validate-the-scan-definition"},"Validate the scan definition"),Object(r.b)("p",null,"Validate that the fields in your scan definition match the expected schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"certifai definition-validate -f scan_definition.yaml\n")),Object(r.b)("p",null,"If the definition validates successfully, the output is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Successfully validated scan definition\n")),Object(r.b)("p",null,"If the definition fails validation, the errors are described."),Object(r.b)("p",null,"For example, the following is displayed if you do not change the default generated\nfairness_grouping_features to match the features in your dataset:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Validation failed, Validation errors found, Evaluation validation failed: Unknown feature 'feature 1' specified in fairness_grouping_features, Unknown feature 'feature 2' specified in fairness_grouping_features\n")),Object(r.b)("h3",{id:"test-connecting-to-the-model-endpoint"},"Test connecting to the model endpoint"),Object(r.b)("p",null,"Test that your definition works with your model."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"certifai definition-test -f scan_definition.yaml\n")),Object(r.b)("p",null,"  For example, if the model server is not running or the URL is incorrect, the test results in connection errors similar to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"...\nrequests.exceptions.ConnectionError: HTTPConnectionPool(host='localhost', port=8080): Max retries exceeded with url: /german_credit_svm/predict (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7fbc00acb8d0>: Failed to establish a new connection: [Errno 61] Connection refused',))\nPrediction test failed for 'ml_model' model against dataset 'eval': HTTPConnectionPool(host='localhost', port=8080): Max retries exceeded with url: /german_credit_svm/predict (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7fbc00acb8d0>: Failed to establish a new connection: [Errno 61] Connection refused',))\n\n")),Object(r.b)("p",null,"If you get this error, check the endpoint in the scan definition and check that the model is running, then run the test again."),Object(r.b)("p",null,"If you get the following error:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"ValueError: Model failed to evaluate batch (20).\nPrediction test failed for 'ml_model' model against dataset 'eval': Model failed to evaluate batch (20).\n")),Object(r.b)("p",null,"check that you have updated the ",Object(r.b)("inlineCode",{parentName:"p"},"outcome_column")," as described above. The\nabove error is returned by the reference model when too many fields are passed\nin the predict call."),Object(r.b)("p",null,"When the test is successful, the output is similar to the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"...\n2020-01-12 20:43:13,385 root   INFO     Testing 'ml_model' against dataset 'eval'\nPrediction test successful for 'ml_model' model against 'eval' dataset\n")),Object(r.b)("h2",{id:"run-your-scan"},"Run your scan"),Object(r.b)("p",null,"You are now ready to run your scan:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"certifai scan -f scan_definition.yaml\n")),Object(r.b)("h2",{id:"view-the-scan-results-visualizations"},"View the scan results visualizations"),Object(r.b)("p",null,"View your result visualization in your ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"console"}),"local Console"),"."),Object(r.b)("p",null,"Set ",Object(r.b)("inlineCode",{parentName:"p"},"SCAN_RESULTS_DIRECTORY=./reports")," when you start the Console."))}d.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return n?i.a.createElement(m,c({ref:t},s,{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);