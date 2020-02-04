(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(1),i=a(6),r=(a(0),a(163)),o={title:"Explainability and Explanations",linkTitle:"Explainability and Explanations",weight:30,description:"This page provides details about explainability trust factor in Cortex Certifai, and the optional explanations which illuminate the details of the explainability score.\n"},l={id:"version-1.0.0/factors/explainability",title:"Explainability and Explanations",description:"This page provides details about explainability trust factor in Cortex Certifai, and the optional explanations which illuminate the details of the explainability score.\n",source:"@site/versioned_docs/version-1.0.0/factors/explainability.md",permalink:"/cortex-certifai/docs/1.0.0/factors/explainability",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Robustness",permalink:"/cortex-certifai/docs/1.0.0/factors/robustness"},next:{title:"Performance Metric",permalink:"/cortex-certifai/docs/1.0.0/factors/performance-metric"}},s=[{value:"What are Explainability and Explanations?",id:"what-are-explainability-and-explanations",children:[]},{value:"How is explainability calculated?",id:"how-is-explainability-calculated",children:[]},{value:"What is the importance of explainability and explanations?",id:"what-is-the-importance-of-explainability-and-explanations",children:[]},{value:"How is explainability displayed in Certifai?",id:"how-is-explainability-displayed-in-certifai",children:[]},{value:"How are explanations displayed in Certifai?",id:"how-are-explanations-displayed-in-certifai",children:[]}],c={rightToc:s};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-are-explainability-and-explanations"},"What are Explainability and Explanations?"),Object(r.b)("p",null,"Explainability measures the average simplicity of the counterfactual explanations provided for each model."),Object(r.b)("p",null,"The Explanations report provides a record-by-record view of the actual input data values side-by-side with the counterfactual values, so viewers can observe the amount of change required to move from one outcome to another. The fewer feature values that must be changed to change the outcome of each records, the more explainable the model is."),Object(r.b)("p",null,"The explanations report is run on an alternate dataset that is specified in the scan definition.  This report must generate counterfactuals for every row in the explanations dataset, so it may take some time to run for larger datasets.  "),Object(r.b)("h2",{id:"how-is-explainability-calculated"},"How is explainability calculated?"),Object(r.b)("p",null,"The explainability score is the score assigned to capture the simplicity of counterfactual explanations for dataset observations. A single feature change is assigned a score of 100, and scores decrease as more feature values must be changed to alter the outcome."),Object(r.b)("h2",{id:"what-is-the-importance-of-explainability-and-explanations"},"What is the importance of explainability and explanations?"),Object(r.b)("p",null,"The different types of viewers of the Certifai evaluations may use the Explanation report in different ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Data scientists")," may use this report to spot check the records to make sure that the outcomes assigned make sense. For instance in the Banking:Loan Approval use case you would not expect that a larger counterfactual loan amount would move the result from Loan Denied to Loan Granted. If anomalies like this are present, then the model may have to be altered to be more accurate."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Business decision-makers")," may use this report to get a closer look at why specific models perform the way they do. By knowing which features change the outcomes most often or how much certain features must change, business users can identify the model that best expresses their business\u2019s goals and values. For instance in the Banking:Loan Approval example if changing from have no savings account to having one with just a hundred dollars often moves the result from Loan Denied to Loan Granted, they can help enable loan requesters by encouraging them to open savings accounts."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Compliance officers")," may be interested in using Explainability to define thresholds for acceptability by observing the amount of change for specific features in the best and worst models.")),Object(r.b)("h2",{id:"how-is-explainability-displayed-in-certifai"},"How is explainability displayed in Certifai?"),Object(r.b)("p",null,"The top of the report displays:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The purpose of the prediction"),Object(r.b)("li",{parentName:"ul"},"The target result for the counterfactual derived for the observation")),Object(r.b)("p",null,"The explainability histogram shows the distribution over the number of features that must be changed to alter the outcome. The number of changed features is  on the x-axis. The changed features for an explanation are the features that had counterfactual values assigned that altered the outcome."),Object(r.b)("p",null,"A distribution skewed to the left with a higher score indicates fewer features must change to alter the outcome. Lower scores that are skewed to the right indicate more features\u2019 values must change to alter the outcome."),Object(r.b)("h2",{id:"how-are-explanations-displayed-in-certifai"},"How are explanations displayed in Certifai?"),Object(r.b)("p",null,"In the first section, at the top of the report, the viewer makes selections that determine what information is displayed in the sections below."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select a model from the models defined in the scan definition."),Object(r.b)("li",{parentName:"ul"},"Select the observation one of two ways",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"move directly to a specific observation number by entering it in the search field"),Object(r.b)("li",{parentName:"ul"},"manually move through the dataset records one at a time by clicking the forward and back arrows")))),Object(r.b)("p",null,"The second section of the report shows a table of the changed feature actions of the observed data point and the actual and counterfactual values. changed features are features that may be altered in order to change the predicted outcome for the selected observation.\nTable columns are as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The name of the dataset feature"),Object(r.b)("li",{parentName:"ul"},"The original value for that feature as expressed in the dataset"),Object(r.b)("li",{parentName:"ul"},"The counterfactual values for the feature that resulted in a change to the outcome")),Object(r.b)("p",null,"When you read this table you should look closely at features the algorithm changed and the delta or difference between the original and the counterfactual values. By analyzing this table, the viewer can gain insight into what features must change in order to change the prediction."),Object(r.b)("p",null,'The third section of the Explanations report is a table of the remaining features of the dataset. The original data point values and because the counterfactual values are always the same they are designated "No change required".'))}u.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},h=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,b=h["".concat(o,".").concat(d)]||h[d]||p[d]||r;return a?i.a.createElement(b,l({ref:t},c,{components:a})):i.a.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);