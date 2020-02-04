(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(6),c=(r(0),r(163)),i={title:"Admin setup to view reports",linkTitle:"Admin setup to view reports",weight:40,description:"Follow this process to push the example reports included in the toolkit to an object store (S3/Ceph) to be viewed in the remote Certifai Console.\n"},a={id:"version-1.0.0/setup/setup-example-reports",title:"Admin setup to view reports",description:"Follow this process to push the example reports included in the toolkit to an object store (S3/Ceph) to be viewed in the remote Certifai Console.\n",source:"@site/versioned_docs/version-1.0.0/setup/setup-example-reports.md",permalink:"/cortex-certifai/docs/1.0.0/setup/setup-example-reports",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"AI Trust Index",permalink:"/cortex-certifai/docs/1.0.0/factors/atx"},next:{title:"OpenShift Setup",permalink:"/cortex-certifai/docs/1.0.0/setup/openshift-setup"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Process",id:"process",children:[{value:"Docker",id:"docker",children:[]},{value:"s3cmd",id:"s3cmd",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An S3 compatible object store with an existing bucket and credentials to access it"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"s3cmd")," or ",Object(c.b)("inlineCode",{parentName:"li"},"docker")," needs to be installed"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"download-toolkit"}),"Download the Certifai toolkit")," to get the sample reports")),Object(c.b)("h2",{id:"process"},"Process"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Extract the toolkit into the current working directory"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"unzip certifai_toolkit.zip\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Set the following environment variables accordingly:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"ACCESS_KEY=<access key>\nSECRET_KEY=<secret key>\nBUCKET_HOST=<object store endpoint>\nBUCKET_NAME=<bucket name>\n")))),Object(c.b)("p",null,"From the directory you extracted the toolkit into, you\ncan either use Docker, s3cmd, or your preferred tool to\npush the sample reports to the bucket."),Object(c.b)("h3",{id:"docker"},"Docker"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"docker run \\\n  -v $(pwd):/s3 \\\n  schickling/s3cmd  \\\n  --access_key=$ACCESS_KEY   \\\n  --secret_key=$SECRET_KEY   \\\n  --host=$BUCKET_HOST   \\\n  --host-bucket=$BUCKET_HOST \\\n  --no-ssl  \\\n  put -r /s3/examples/reports/ s3://${BUCKET_NAME}/\n")),Object(c.b)("h3",{id:"s3cmd"},"s3cmd"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://s3tools.org/s3cmd"}),"Install S3cmd")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"s3cmd  \\\n  --access_key=$ACCESS_KEY   \\\n  --secret_key=$SECRET_KEY   \\\n  --host=$BUCKET_HOST   \\\n  --host-bucket=$BUCKET_HOST \\\n  --no-ssl  \\\n  put -r examples/reports/ s3://${BUCKET_NAME}/\n")),Object(c.b)("p",null,"Now you can view the example reports from a remote Certifai Console that is configured with the same access and bucket."))}l.isMDXComponent=!0},163:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return r?o.a.createElement(m,a({ref:t},p,{components:r})):o.a.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);