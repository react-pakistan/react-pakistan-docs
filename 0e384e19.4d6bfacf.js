(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||r;return a?o.a.createElement(h,c(c({ref:t},l),{},{components:a})):o.a.createElement(h,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),r=(a(0),a(114)),i={id:"intro",title:"Intro",sidebar_label:"React Pakistan"},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Intro",description:"<a",source:"@site/docs/intro.md",slug:"/intro",permalink:"/react-pakistan-docs/docs/intro",editUrl:"https://github.com/react-pakistan/react-pakistan-docs/edit/master/docs/intro.md",version:"current",sidebar_label:"React Pakistan",sidebar:"someSidebar",next:{title:"React Commons Collection",permalink:"/react-pakistan-docs/docs/react-commons-collection"}},s=[{value:"The Motivation",id:"the-motivation",children:[{value:"Moving Forward",id:"moving-forward",children:[]},{value:"How I can help React Pakistan",id:"how-i-can-help-react-pakistan",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("div",null,Object(r.a)("a",{href:"https://react-pakistan.github.io/react-pakistan-docs/",target:"_blank"},Object(r.a)("img",{alt:"React Pakistan - React Commons Collection",src:"https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg",width:"100%"}))),"React Pakistan is an OpenSource & Free Software (FOSS) platform, creating React software solutions for the global community.",Object(r.a)("h2",{id:"the-motivation"},"The Motivation"),Object(r.a)("p",null,"It all started with, when there was a need to build custom UI for one of the clients and we realised that\nalthough we have several UI packages available i.e. MaterialUI, AntD and so many others but none of them\nallow full customisation as per your client's design specs."),Object(r.a)("p",null,"So, we built up a collection of React Commons Components from the ground up, so that these components could then be\nused as per the client's design specs in any extended project."),Object(r.a)("p",null,"Extending upon them, we built several production apps, for instance React UI Collection and other client's apps."),Object(r.a)("p",null,"Also, there are helper packages like React Icon, React Logo and React Emoji collections, these packages contain 1000's\nof Reactified SVG's which can be customisable as per your specs."),Object(r.a)("p",null,"There are some utils packages to reuse the code as much as possible across all shared repos."),Object(r.a)("p",null,"Also, we abstracted, our ESlint rules across all packages to make it up to the defined standards."),Object(r.a)("p",null,"Most codebase is built using TDD approach, hence reaching 90%+ coverage in some repos."),Object(r.a)("p",null,"All codebase is written in TypeScript hence more robustibility."),Object(r.a)("h3",{id:"moving-forward"},"Moving Forward"),Object(r.a)("p",null,"We shall continue to grow React Pakistan in all possible dimensions as possible, for the contributors."),Object(r.a)("h3",{id:"how-i-can-help-react-pakistan"},"How I can help React Pakistan"),Object(r.a)("p",null,"All we ask for, to use our packages from our NPM profile and let us know your feedback and ways how we could improve it even more.\nIf you happen to like our repositories/project, please consider giving a star on our ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-pakistan"}),"GitHub")," repositories."),Object(r.a)("h4",{id:"contributors"},"Contributors"),Object(r.a)("p",null,"Special thanks to all of our contributors who have put together all the bits and bobs of this project for the community.\nShould you wish to be React Pakistan contributor, please shoot an expression of interest at ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"mailto:react.pakistan14@gmail.com"}),"ReactPakistanEmail")))}p.isMDXComponent=!0}}]);