(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{163:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return t?a.a.createElement(m,c({ref:n},p,{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(6),o=(t(0),t(163)),i={title:"Prepare model endpoints for scanning",linkTitle:"Prepare model endpoints for scanning",weight:110,description:"Learn how to prepare your models for scanning by creating a model endpoint.\n"},c={id:"version-1.0.1/usage/prepare-model-endpoints",title:"Prepare model endpoints for scanning",description:"Learn how to prepare your models for scanning by creating a model endpoint.\n",source:"@site/versioned_docs/version-1.0.1/usage/prepare-model-endpoints.md",permalink:"/cortex-certifai/docs/usage/prepare-model-endpoints",version:"1.0.1",sidebar:"version-1.0.1/docs",previous:{title:"Run scans remotely",permalink:"/cortex-certifai/docs/usage/remote-scan"},next:{title:"API Reference",permalink:"/cortex-certifai/docs/api"}},l=[{value:"Create a model endpoint using Flask",id:"create-a-model-endpoint-using-flask",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To scan your own model with Certifai, you must provide an endpoint that\nmatches the expected predict API specified ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/CognitiveScale/certifai-reference-models/blob/master/docs/instructions.md#model-predict-requestresponse"}),"here"),"."),Object(o.b)("p",null,"Guidance on using Docker to package your python code for use with Certifai\nis provided ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/CognitiveScale/certifai-reference-models"}),"here"),"."),Object(o.b)("h2",{id:"create-a-model-endpoint-using-flask"},"Create a model endpoint using Flask"),Object(o.b)("p",null,"For development purposes, you can run your model in a local flask application\nwithout using Docker."),Object(o.b)("p",null,"This example uses the ",Object(o.b)("inlineCode",{parentName:"p"},"banking_loan_approval")," use case from the Reference Models repository."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In another terminal, clone the Reference Models repository:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone git@github.com:CognitiveScale/certifai-reference-models.git\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the ",Object(o.b)("inlineCode",{parentName:"p"},"banking_loan_approval")," folder. The ",Object(o.b)("inlineCode",{parentName:"p"},"Makefile")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"all"),"\nsubdirectory will let you build and run a model server that has endpoints for\nfour model implementations of this use case."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"cd certifai-reference-models/banking_loan_approval/all\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create and activate a new conda environment."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"conda create -n model-server python=3.6\nconda activate model-server\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install the prerequisites."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"pip install cortex-python flask gunicorn\npip install -r requirements.txt\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Train the models using ",Object(o.b)("inlineCode",{parentName:"p"},"make train-all-local"),". When this completes you should see output\nending similar to the following."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"```\n...\nSaved: SVM\n0.7966666666666666\nmodel: models/german_credit_svm.pkl\n```\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the server using ",Object(o.b)("inlineCode",{parentName:"p"},"make predict-all-local"),". You should see build output\nthat ends similar to the following."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"```\n- Running on http://0.0.0.0:5111/ (Press CTRL+C to quit)\n```\nIf you are asked to allow an external connection, click 'Deny' as the model only needs to be available locally.\n\nIf you get an error about `Address already in use`, make sure that your previous model server is not still running (CTRL-C to exit).\n")))))}s.isMDXComponent=!0}}]);