(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(155)),i={title:"Prepare model endpoints for scanning",linkTitle:"Prepare model endpoints for scanning",weight:110,description:"Learn how to prepare your models for scanning by creating a model endpoint.\n"},c={id:"usage/prepare-model-endpoints",title:"Prepare model endpoints for scanning",description:"Learn how to prepare your models for scanning by creating a model endpoint.\n",source:"@site/docs/usage/prepare-model-endpoints.md",permalink:"/cortex-certifai/docs/usage/prepare-model-endpoints",sidebar:"docs",previous:{title:"Run scans remotely",permalink:"/cortex-certifai/docs/usage/remote-scan"},next:{title:"API Reference",permalink:"/cortex-certifai/docs/api"}},l=[{value:"Create a model endpoint using Flask",id:"create-a-model-endpoint-using-flask",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To scan your own model with Certifai, you must provide an endpoint that\nmatches the expected predict API specified ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/CognitiveScale/certifai-reference-models/blob/master/docs/instructions.md#model-predict-requestresponse"}),"here"),"."),Object(o.b)("p",null,"Guidance on using Docker to package your python code for use with Certifai\nis provided ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/CognitiveScale/certifai-reference-models"}),"here"),"."),Object(o.b)("h2",{id:"create-a-model-endpoint-using-flask"},"Create a model endpoint using Flask"),Object(o.b)("p",null,"For development purposes, you can run your model in a local flask application\nwithout using Docker."),Object(o.b)("p",null,"This example uses the ",Object(o.b)("inlineCode",{parentName:"p"},"banking_loan_approval")," use case from the Reference Models repository."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In another terminal, clone the Reference Models repository:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone git@github.com:CognitiveScale/certifai-reference-models.git\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the ",Object(o.b)("inlineCode",{parentName:"p"},"banking_loan_approval")," folder. The ",Object(o.b)("inlineCode",{parentName:"p"},"Makefile")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"all"),"\nsubdirectory will let you build and run a model server that has endpoints for\nfour model implementations of this use case."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"cd certifai-reference-models/banking_loan_approval/all\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create and activate a new conda environment."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"conda create -n model-server python=3.6\nconda activate model-server\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install the prerequisites."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"pip install cortex-python flask gunicorn\npip install -r requirements.txt\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Train the models using ",Object(o.b)("inlineCode",{parentName:"p"},"make train-all-local"),". When this completes you should see output\nending similar to the following."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"```\n...\nSaved: SVM\n0.7966666666666666\nmodel: models/german_credit_svm.pkl\n```\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the server using ",Object(o.b)("inlineCode",{parentName:"p"},"make predict-all-local"),". You should see build output\nthat ends similar to the following."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"```\n- Running on http://0.0.0.0:5111/ (Press CTRL+C to quit)\n```\nIf you are asked to allow an external connection, click 'Deny' as the model only needs to be available locally.\n\nIf you get an error about `Address already in use`, make sure that your previous model server is not still running (CTRL-C to exit).\n")))))}s.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);