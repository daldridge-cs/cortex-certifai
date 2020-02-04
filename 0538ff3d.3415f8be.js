(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?r.a.createElement(d,o({ref:t},b,{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),i=(n(0),n(121)),c={title:"Run scans remotely",linkTitle:"Run scans remotely",weight:100,description:"Learn how to run Certifai scans remotely in Kubernetes.\n"},o={id:"usage/remote-scan",title:"Run scans remotely",description:"Learn how to run Certifai scans remotely in Kubernetes.\n",source:"@site/docs/usage/remote-scan.md",permalink:"/cortex-certifai/docs/usage/remote-scan",sidebar:"docs",previous:{title:"Define and run scans locally",permalink:"/cortex-certifai/docs/usage/local-scan"},next:{title:"Prepare model endpoints for scanning",permalink:"/cortex-certifai/docs/usage/prepare-model-endpoints"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configure and run scan job",id:"configure-and-run-scan-job",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"OpenShift 4.2 Cluster. (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../setup/openshift-setup"}),"See Openshift Setup"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You have the following information provided by your Administrator and based on the operator instance installation."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Console URL and login credentials (This can be found in the RHOS Platform - In left navigation panel click Network -> Routes.)"),Object(i.b)("li",{parentName:"ul"},"s3 compatible storage where ",Object(i.b)("strong",{parentName:"li"},"Cortex Certifai")," scan result will be stored",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Note that this must be an object store with an s3 compatible API, like noobaa, ceph, or s3 storage."))),Object(i.b)("li",{parentName:"ul"},"You must have these values to submit a remote scan:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"S3 access-key"),Object(i.b)("li",{parentName:"ul"},"S3 bucket-name"),Object(i.b)("li",{parentName:"ul"},"S3 endpoint"),Object(i.b)("li",{parentName:"ul"},"S3 secret-key"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A CERTIFAI scanner definition file (YAML) has been created."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Created using the CLI or Notebook (APIs), or pulled from the Toolkit examples"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The scanner definition has been uploaded into a bucket in an S3 compatible object store (s3, ceph, noobaa)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ensure the bucket provided in this command matches the bucket provided during the CERTIFAI operator setup."),Object(i.b)("li",{parentName:"ul"},"There are various ways a user can upload content to S3.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Example using Docker:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker run -v $(pwd):/s3 schickling/s3cmd  \\\n--access_key=<S3 Access Key>   \\\n--secret_key=<S3 Secret Key>   \\\n--host=<S3 Host>   \\\n--host-bucket=<S3 Host>  \\\n--no-ssl put /s3/<scan-definition-file-name>.yaml s3://<bucket-name>/<optional-path>/<scan-definition-file-name>.yaml\n"))),Object(i.b)("li",{parentName:"ul"},"Example using ",Object(i.b)("inlineCode",{parentName:"li"},"s3cmd"),":",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"s3cmd \\\n--access_key=<S3 Access Key> \\\n--secret_key=<S3 Secret Key> \\\n--host=<S3 Host> \\\n--host-bucket=<S3 Host> \\\n--no-ssl put /s3/german_credit.yaml s3://<bucket-name>/<optional-path>/<scan-definition-file-name>.yaml\n"))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Datasets have been prepared (with headers) and loaded into a bucket in an S3 compatible object store (s3, ceph, noobaa)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ensure the bucket provided in this command matches the bucket provided in during the CERTIFAI operator setup.")))),Object(i.b)("h2",{id:"configure-and-run-scan-job"},"Configure and run scan job"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a CERTIFAI scanner job via kubernetes by configuring the args in YAML file below."),Object(i.b)("p",{parentName:"li"},"Where:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The first parameter in the args field is the s3 location of a CERTIFAI definition file (from step 1).  "),Object(i.b)("li",{parentName:"ul"},"The last parameter in the args field specifies where the scan results should be saved; this must match the same bucket name used when creating the CERTIFAI operator."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BUCKET_ACCESS_KEY")," is the public access key of a user with read/write permissions into the intended bucket (commonly referenced as ",Object(i.b)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BUCKET_SECRET_KEY"),"is the public access key's secret value (commonly referenced as ",Object(i.b)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BUCKET_ENDPOINT")," is the full uri of the Object Storage server including the protocol, ex. ",Object(i.b)("inlineCode",{parentName:"li"},"http://ad902e803371311ea958f02eee277073-321225983.us-east-1.elb.amazonaws.com")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-o")," is the output destination.")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"NOTE"),": If there is more than one model name or report type the items are comma delimited."),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Sample certifai_scanner.yaml")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-YAML"}),'  apiVersion: batch/v1\n  kind: Job\n  metadata:\n    name: certifai-scanner\n  spec:\n    backoffLimit: 1\n    template:\n      spec:\n        imagePullSecrets:\n          - name: docker-login\n        containers:\n          - name: certifai-scanner\n            image: index.docker.io/c12e/cortex-certifai:scanner-ubi8-v6\n            imagePullPolicy: IfNotPresent\n            env:\n              - name: BUCKET_ACCESS_KEY\n                valueFrom:\n                  secretKeyRef:\n                    name: certifai-storage-auth\n                    key: auth-key\n              - name: BUCKET_SECRET_KEY\n                valueFrom:\n                  secretKeyRef:\n                    name: certifai-storage-auth\n                    key: auth-secret\n              - name: BUCKET_NAME\n                valueFrom:\n                  configMapKeyRef:\n                    name: certifai-storage-config-map\n                    key: bucket-name\n              - name: BUCKET_ENDPOINT\n                valueFrom:\n                  configMapKeyRef:\n                    name: certifai-storage-config-map\n                    key: endpoint\n              - name: VERIFY_CERT\n                value: \'false\'\n              - name: USE_SSL\n                value: \'true\'\n            args: ["s3://<bucket-name>/<namespace>/<folder>/<scan-definition-file-name>.yaml", "-o", "s3://<bucket-name>"]\n        restartPolicy: Never\n')),Object(i.b)("p",{parentName:"li"},"Example:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'args: ["s3://first.bucket/certifai/definitions/german_credit.yaml", "-o", "s3://first.bucket"]\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Submit the kubernetes job."),Object(i.b)("p",{parentName:"li"},"Where:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-f")," is the scan definition filename."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-n")," is the namespace assigned to the operator during setup.")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f <scan-definition-file-name>.yaml -n <namespace>\n")),Object(i.b)("p",{parentName:"li"},"Example:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f certifai_scanner.yaml -n certifai\n")),Object(i.b)("p",{parentName:"li"},"The above job will read its scanner definition from ",Object(i.b)("inlineCode",{parentName:"p"},"s3://bucket/certifai/definitions/german_credit.yaml")," and will write the reports to the root of the same bucket (",Object(i.b)("inlineCode",{parentName:"p"},"s3://bucket"),")"),Object(i.b)("p",{parentName:"li"},"The expanded command (",Object(i.b)("inlineCode",{parentName:"p"},"entrypoint")," + ",Object(i.b)("inlineCode",{parentName:"p"},"args"),") that is being run by the job defined above is ",Object(i.b)("inlineCode",{parentName:"p"},"certifai scan s3://bucket/certifai/definitions/german_credit.yaml -o s3://bucket")),Object(i.b)("p",{parentName:"li"},"After making any edits to the above resource, use ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl apply -f <resourceFile>.yaml")," to submit the scanner job to kubernetes and let it run to completion.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open logs and verify that the job completes successfully. You may use ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl")," or ",Object(i.b)("inlineCode",{parentName:"p"},"k9s")," utilities to monitor the status of the job or view the logs.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Refresh the remote Certifai Console and verify the new scan results are displayed."))))}s.isMDXComponent=!0}}]);