(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(6),i=(a(0),a(163)),o={title:"Glossary",linkTitle:"Glossary",weight:90,description:"The Glossary defines common Certifai terms.\n"},l={id:"version-1.0.1/glossary",title:"Glossary",description:"The Glossary defines common Certifai terms.\n",source:"@site/versioned_docs/version-1.0.1/glossary.md",permalink:"/cortex-certifai/docs/glossary",version:"1.0.1",sidebar:"version-1.0.1/docs",previous:{title:"API Reference",permalink:"/cortex-certifai/docs/api"}},s=[],c={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Term"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Definition"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ATX"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AI Trust Index - a weighted average of trust factor scores from your scan outputs (robustness, fairness, one performance metric, and explainability)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Binary Classification"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A learning task type that given a set of data elements predicts which one of two groups the set belongs to (e.g. Loan granted or Loan denied). One of the Learning Task types that Certifai evaluates models for.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Burden"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Burden indicates the effort required to produce a positive outcome (via counterfactuals) for a feature group. If the burden for one group is very high and the burden for another group is low, that could indicate the model is being unfair to a feature group.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Counterfactuals"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Alternative predictive data points that Certifai uses to infer an imaginary line representing the boundary between the possible outcomes produced by the model. Distance from the counterfactual to the line is used to calculate report values.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data Types"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data types are assigned to dataset features during evaluation setup to define how the Certifai algorithm handles the observation values for that feature. Data type options are: ",Object(i.b)("br",null),Object(i.b)("br",null)," - ",Object(i.b)("em",{parentName:"td"},"Categorical")," - data that falls into categories like boolean data or data that is expressed as one of a small set of strings or numbers.",Object(i.b)("br",null)," - ",Object(i.b)("em",{parentName:"td"},"Numerical-Int")," - data that is expressed as a whole number.",Object(i.b)("br",null)," - ",Object(i.b)("em",{parentName:"td"},"Numerical-Float")," - data that is expressed as a decimal number.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dataset"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A set of data features (columns) with multiple sets (rows) of values, where each set of values constitutes an observation in Certifai.\xa0 When a dataset is configured for evaluations the following values are calculated and displayed for each feature.",Object(i.b)("br",null),Object(i.b)("br",null)," - ",Object(i.b)("em",{parentName:"td"},"Min"),": The minimum value of the feature expressed in the dataset if the feature is numerical.",Object(i.b)("br",null)," - ",Object(i.b)("em",{parentName:"td"},"Max"),": The maximum value of the feature expressed in the dataset if the feature is numerical.",Object(i.b)("br",null)," - ",Object(i.b)("em",{parentName:"td"},"# of Categories"),": The number of categories expressed in feature values for the dataset if the feature is categorical.",Object(i.b)("br",null)," - ",Object(i.b)("em",{parentName:"td"},"MAD"),": Median Average Deviation for the feature values in the given dataset if the feature is numerical.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dataset Restrictions"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data restrictions are configured for each feature of a dataset you want to constrain when you assign scan definitions. The restriction options ensure that the algorithm follows necessary rules when creating counterfactuals for the feature values. Options are as follows:",Object(i.b)("br",null),Object(i.b)("br",null)," - ",Object(i.b)("em",{parentName:"td"},"No restriction")," - which allows the data feature values to be used to generate counterfactual values without any limitations.",Object(i.b)("br",null)," - ",Object(i.b)("em",{parentName:"td"},"No changes")," - which prevents counterfactual values from being generated for that feature.",Object(i.b)("br",null)," - ",Object(i.b)("em",{parentName:"td"},"Min/Max")," - which allows counterfactual values to be generated within the range specified in the fields that are displayed after the Min/Max restriction selection.",Object(i.b)("br",null)," - ",Object(i.b)("em",{parentName:"td"},"+/- %")," - which allows counterfactual values to be generated for the feature values within a specified percentage (plus or minus) the original feature value in a dataset. The percentage value field opens after this restriction option is selected.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evaluation Dataset"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An Evaluation Dataset is any dataset selected to run evaluation visualizations. A second smaller dataset is defined for a scan and used to run the Explanations evaluation, because dataset size affects the amount of time required to run that report.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Explainability"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Explainability measures the average simplicity of counterfactual explanations provided for each model. An explanation that requires a single changed feature will score 100%. Explanations that require more changed features will score lower.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Explainability Score"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The score assigned to capture how few features need to be changed in assigning counterfactual values to alter the predicted outcome for dataset observations. A single feature change is assigned a score of 100, and scores decrease as more feature values must be changed to alter the outcome.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Explanations"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Explanations display the prediction provided through the generation of counterfactuals for the change that must occur in a dataset with given restrictions to obtain a different outcome. To alter an outcome some dataset feature values must change while others remain constant. Each observation row of the dataset is displayed in a table that shows the changed features, as well as the original values and counterfactual values for that feature.\xa0 Users can explore the entire dataset one observation at a time to understand what features changed and by how much to obtain a different result.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fairness"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Fairness measures the difference required to change the outcome for different groups implicit in a feature given the same model and dataset. For example, implicit groups male, female, and nonbinary belong to the feature, "gender". A fair model shows that all 3 groups require a similar amount of change to alter the results.')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Feature Group"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Some dataset features are categorical rather than numeric. Any feature that is categorical contains groups. For example: the feature gender may have groups such as male, female, and nonbinary. Features with groups may be selected to be evaluated for Fairness across the groups.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gini Index"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Gini index or Gini coefficient is a statistical measure of distribution developed by the Italian statistician Corrado Gini in 1912. It is often used as a gauge of economic inequality, measuring income distribution or, less commonly, wealth distribution among a population. The coefficient ranges from 0 (or 0%) to 1 (or 100%), with 0 representing perfect equality and 1 representing perfect inequality. Values over 1 are theoretically possible due to negative income or wealth.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learning Task Type"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A kind of machine learning problem.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mean Absolute Deviation (MAD)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The mean absolute deviation of a dataset is the average distance between each data point and the mean. It demonstrates the variability in a dataset.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Multi-value Classification"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is a learning task type where the model predicts the categorical response value where the data can be separated into specific \u201cclasses\u201d. One of the Learning Task types that Certifai evaluates models for.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Observations"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Each observation corresponds to a single record (row) from the assigned dataset; it is a set of feature values from the dataset.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Performance Metric"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any model quality that a data scientist has measured during model development\xa0 that they are interested in visualizing that offers a basis for comparison in the form of a numeric value between 0 and 1 (e.g. Accuracy). The performance metrics selected are defined in the scan definition. One of the metric options must be selected to be used in the ATX calculation.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Regression"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A learning task type that is used to estimate\xa0the relationships between a\xa0dependent variable\xa0(the outcome variable) and one or more\xa0independent variables\xa0(or features). Regression models allow models to estimate the\xa0conditional expectation\xa0(or population\xa0average value) of the dependent variable when the independent variables take on a given set of values.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Robustness"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Robustness measures how well models retain an outcome given changes to the data feature values. The more robust a model is, the greater the changes required to alter the outcome.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Spread"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"- For categorical data spread = 1.",Object(i.b)("br",null),Object(i.b)("br",null),"- For numerics spread = MAD (median absolute deviation) of the feature in the dataset provided, unless MAD = 0, which happens when more than half the data points have the same value. In this case Spread = standard deviation of the feature values.")))))}b.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(a),p=n,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return a?r.a.createElement(m,l({ref:t},c,{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);