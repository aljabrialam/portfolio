const __vite__fileDeps=["assets/displacement-sphere-Bgkx0yLZ.js","assets/jsx-runtime-CbkKSL4Y.js","assets/image-CKvKuLoN.js","assets/heading-BKkj-knJ.js","assets/components-BP3zyvdP.js","assets/heading-DxmoR0-i.css","assets/image-CQFqa4Pm.css","assets/useWindowSize-MDlHk0QV.js","assets/three-DA_TF9PM.js","assets/throttle-BgiUmwhn.js","assets/use-spring-mJt5bGGW.js","assets/index-CQBIJVQe.js","assets/displacement-sphere-D2dKsJud.css","assets/index-CtBj8hdQ.js","assets/animate-wrbG-yaf.js","assets/spr-lesson-builder-dark-placeholder-CxlvWxWS.js","assets/meta-BrRb_X7k.js","assets/config-DnEgSU9V.js","assets/meta-CUrllC_C.css","assets/preload-helper-BqjOJQfC.js","assets/decoder-text-BKyrVvd3.js","assets/visually-hidden-BFqrBCCe.js","assets/visually-hidden-DZKbrLgw.css","assets/decoder-text-DSqD8fOZ.css","assets/useScrollToHash-jYlNwIpY.js","assets/divider-Dbshg1YA.js","assets/divider-CJ0zz9kw.css","assets/index-BUsloKFI.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as s,j as e}from"./jsx-runtime-CbkKSL4Y.js";import{s as te}from"./spr-lesson-builder-dark-placeholder-CxlvWxWS.js";import{S as D,L as se,b as ne,F as oe}from"./meta-BrRb_X7k.js";import{_ as B}from"./preload-helper-BqjOJQfC.js";import{D as G}from"./decoder-text-BKyrVvd3.js";import{b as k,H as R,a as q,t as O,g as N,T,B as ie,L as F}from"./heading-BKkj-knJ.js";import{a as J,I as ae}from"./image-CKvKuLoN.js";import{V as L}from"./visually-hidden-BFqrBCCe.js";import{u as re}from"./useScrollToHash-jYlNwIpY.js";import{c as y}from"./config-DnEgSU9V.js";import{L as H}from"./components-BP3zyvdP.js";import{D as K}from"./divider-Dbshg1YA.js";import{u as ce}from"./useWindowSize-MDlHk0QV.js";function le(t,r,m){const l=s.useRef();s.useEffect(()=>{l.current=t}),s.useEffect(()=>{function i(){l.current()}{let a=setInterval(i,r);return()=>clearInterval(a)}},[r,m])}function de(t){const r=s.useRef();return s.useEffect(()=>{r.current=t},[t]),r.current}const C="/assets/ALAMAZING-WORD-GAME-DohqKYq0.png";function pe(){return()=>{}}function U(){return s.useSyncExternalStore(pe,()=>!0,()=>!1)}const me="_intro_15kxq_1",ue="_text_15kxq_9",he="_name_15kxq_36",xe="_title_15kxq_74",fe="_row_15kxq_78",_e="_word_15kxq_107",ge="_introTextReveal_15kxq_1",je="_line_15kxq_199",ve="_introLine_15kxq_1",be="_scrollIndicator_15kxq_248",we="_introScrollIndicator_15kxq_1",ye="_mobileScrollIndicator_15kxq_315",Se="_introMobileScrollIndicator_15kxq_1",d={intro:me,text:ue,name:he,title:xe,row:fe,word:_e,introTextReveal:ge,line:je,introLine:ve,scrollIndicator:be,introScrollIndicator:we,mobileScrollIndicator:ye,introMobileScrollIndicator:Se};s.lazy(()=>B(()=>import("./displacement-sphere-Bgkx0yLZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(t=>({default:t.DisplacementSphere})));function Ie({id:t,sectionRef:r,scrollIndicatorHidden:m,...l}){const{theme:i}=J(),{disciplines:a}=y,[o,_]=s.useState(0),g=de(i),j=[a.slice(0,-1).join(", "),a.slice(-1)[0]].join(", and "),x=a.find((p,f)=>f===o),b=`${t}-title`,v=re();U(),le(()=>{const p=(o+1)%a.length;_(p)},5e3,i),s.useEffect(()=>{g&&g!==i&&_(0)},[i,g]);const u=p=>{p.preventDefault(),v(p.currentTarget.href)};return e.jsx(D,{className:d.intro,as:"section",ref:r,id:t,"aria-labelledby":b,tabIndex:-1,...l,children:e.jsx(k,{in:!0,timeout:3e3,children:({visible:p,status:f})=>e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:d.text,children:[e.jsx("h1",{className:d.name,"data-visible":p,id:b,children:e.jsx(G,{text:y.name,delay:500})}),e.jsxs(R,{level:0,as:"h2",className:d.title,children:[e.jsx(L,{className:d.label,children:`${y.role} + ${j}`}),e.jsxs("span",{"aria-hidden":!0,className:d.row,children:[e.jsx("span",{className:d.word,"data-status":f,style:q({delay:O.base.durationXS}),children:y.role}),e.jsx("span",{className:d.line,"data-status":f})]}),e.jsx("div",{className:d.row,children:a.map(w=>e.jsx(k,{unmount:!0,in:w===x,timeout:{enter:3e3,exit:2e3},children:({status:S,nodeRef:I})=>e.jsx("span",{"aria-hidden":!0,ref:I,className:d.word,"data-plus":!0,"data-status":S,style:q({delay:O.base.durationL}),children:w})},w))})]})]}),e.jsx(H,{to:"/#project-1",className:d.scrollIndicator,"data-status":f,"data-hidden":m,onClick:u,children:e.jsx(L,{children:"Scroll to projects"})}),e.jsxs(H,{to:"/#project-1",className:d.mobileScrollIndicator,"data-status":f,"data-hidden":m,onClick:u,children:[e.jsx(L,{children:"Scroll to projects"}),e.jsx("svg",{"aria-hidden":!0,stroke:"currentColor",width:"43",height:"15",viewBox:"0 0 43 15",children:e.jsx("path",{d:"M1 1l20.5 12L42 1",strokeWidth:"2",fill:"none"})})]})]})},i)})}const Ne="/assets/profile-Cd_Pxj3W.jpg",ke="/assets/profile-placeholder-DOgU6wR2.jpg",Le="/assets/profile-Cd_Pxj3W.jpg",Ae="/assets/katakana-DR-bVyLd.svg",qe="_profile_v8cfi_1",Te="_content_v8cfi_37",De="_column_v8cfi_50",Re="_title_v8cfi_59",Pe="_description_v8cfi_70",$e="_tag_v8cfi_80",Me="_tagText_v8cfi_93",Ee="_image_v8cfi_114",ze="_svg_v8cfi_119",Oe="_button_v8cfi_135",h={profile:qe,content:Te,column:De,title:Re,description:Pe,tag:$e,tagText:Me,image:Ee,svg:ze,button:Oe},Fe=({visible:t,titleId:r})=>e.jsxs(s.Fragment,{children:[e.jsx(R,{className:h.title,"data-visible":t,level:3,id:r,children:e.jsx(G,{text:"Hi there",start:t,delay:500})}),e.jsxs(T,{className:h.description,"data-visible":t,size:"l",as:"p",children:["I’m ALJABRI known at the office as ALJ, currently I live in SINGAPORE working as a Senior Software Engineer at"," ",e.jsx(se,{href:"https://www.viseo.com/en/",children:"VISEO ASIA"}),". I am perpetually preoccupied with thoughts of my son, ALJMAR - My coding buddy."]}),e.jsx(T,{className:h.description,"data-visible":t,size:"l",as:"p",children:"A Dynamic Mobile App Engineer with a robust skill set spanning native Android, React Native (Android/iOS), web development (PHP: Laravel, CodeIgniter, WordPress, React), and Python. Proficient in Java/Kotlin, React Native JavaScript/TypeScript, and Python programming languages. Demonstrates excellence in Object-Oriented Programming, Agile Scrum methodologies, and the Software Development Life Cycle (SDLC). Successfully deployed high-value applications to prestigious bank clients, showcasing precision and versatility in project delivery."})]}),He=({id:t,visible:r,sectionRef:m})=>{const[l,i]=s.useState(!1),a=`${t}-title`;return e.jsx(D,{className:h.profile,onFocus:()=>i(!0),onBlur:()=>i(!1),as:"section",id:t,ref:m,"aria-labelledby":a,tabIndex:-1,children:e.jsx(k,{in:r||l,timeout:0,children:({visible:o,nodeRef:_})=>e.jsxs("div",{className:h.content,ref:_,children:[e.jsx("div",{className:h.column,children:e.jsx(Fe,{visible:o,titleId:a})}),e.jsxs("div",{className:h.column,children:[e.jsxs("div",{className:h.tag,"aria-hidden":!0,children:[e.jsx(K,{notchWidth:"64px",notchHeight:"8px",collapsed:!o,collapseDelay:1e3}),e.jsx("div",{className:h.tagText,"data-visible":o,children:"About me"})]}),e.jsx("div",{className:h.image,children:e.jsx(ae,{reveal:!0,delay:100,placeholder:ke,srcSet:`${Le} 480w, ${Ne} 960w`,width:960,height:1280,sizes:`(max-width: ${N.mobile}px) 100vw, 480px`,alt:"Me and Aljmar"})})]})]})})})},Ce="/assets/iphone-11-DGIHa_Ph.glb",We="/assets/macbook-pro-DZn-FKKF.glb",W={SpringUp:"spring-up",LaptopOpen:"laptop-open"},A={phone:{url:Ce,width:374,height:512,position:{x:0,y:0,z:0},animation:W.SpringUp},laptop:{url:We,width:1280,height:800,position:{x:0,y:0,z:0},animation:W.LaptopOpen}},Ve="_summary_1cfqm_1",Be="_content_1cfqm_35",Ge="_details_1cfqm_65",Je="_preview_1cfqm_78",Ke="_model_1cfqm_88",Ue="_loader_1cfqm_142",Ze="_svg_1cfqm_151",Xe="_index_1cfqm_192",Ye="_indexNumber_1cfqm_201",Qe="_title_1cfqm_222",et="_description_1cfqm_241",tt="_button_1cfqm_260",c={summary:Ve,content:Be,details:Ge,preview:Je,model:Ke,loader:Ue,svg:Ze,index:Xe,indexNumber:Ye,title:Qe,description:et,button:tt},V=s.lazy(()=>B(()=>import("./index-CtBj8hdQ.js"),__vite__mapDeps([13,1,2,3,4,5,6,8,9,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,7,27])).then(t=>({default:t.Model})));function st({id:t,visible:r,sectionRef:m,index:l,title:i,description:a,model:o,buttonText:_,buttonLink:g,alternate:j,...x}){const[b,v]=s.useState(!1),[u,p]=s.useState(!1),{theme:f}=J(),{width:w}=ce(),S=U(),I=`${t}-title`,P=w<=N.tablet,Z=f==="light"?.7:1,X=l<10?`0${l}`:l,$=`(max-width: ${N.tablet}px) 30vw, 20vw`,Y=`(max-width: ${N.tablet}px) 80vw, 40vw`;function M(){p(!0)}function Q(n,ee){return e.jsx("svg",{type:"project","data-visible":ee&&u,"data-light":f==="light",style:q({opacity:Z}),className:c.svg,"data-device":n,viewBox:"0 0 751 136",children:e.jsx("use",{href:`${Ae}#katakana-project`})})}function E(n){return e.jsxs("div",{className:c.details,children:[e.jsxs("div",{"aria-hidden":!0,className:c.index,children:[e.jsx(K,{notchWidth:"64px",notchHeight:"8px",collapsed:!n,collapseDelay:1e3}),e.jsx("span",{className:c.indexNumber,"data-visible":n,children:X})]}),e.jsx(R,{level:3,as:"h2",className:c.title,"data-visible":n,id:I,children:i}),e.jsx(T,{className:c.description,"data-visible":n,as:"p",children:a}),e.jsx("div",{className:c.button,"data-visible":n,children:e.jsx(ie,{iconHoverShift:!0,href:g,iconEnd:"arrow-right",children:_})})]})}function z(n){return e.jsxs("div",{className:c.preview,children:[o.type==="laptop"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:c.model,"data-device":"laptop",children:[!u&&e.jsx(F,{center:!0,className:c.loader,"data-visible":n}),S&&n&&e.jsx(s.Suspense,{children:e.jsx(V,{alt:o.alt,cameraPosition:{x:0,y:0,z:8},showDelay:700,onLoad:M,show:n,models:[{...A.laptop,texture:{...o.textures[0],sizes:Y}}]})})]})}),o.type==="phone"&&e.jsxs(e.Fragment,{children:[Q("phone",n),e.jsxs("div",{className:c.model,"data-device":"phone",children:[!u&&e.jsx(F,{center:!0,className:c.loader,"data-visible":n}),S&&n&&e.jsx(s.Suspense,{children:e.jsx(V,{alt:o.alt,cameraPosition:{x:0,y:0,z:11.5},showDelay:300,onLoad:M,show:n,models:[{...A.phone,position:{x:-.6,y:1.1,z:0},texture:{...o.textures[0],sizes:$}},{...A.phone,position:{x:.6,y:-.5,z:.3},texture:{...o.textures[1],sizes:$}}]})})]})]})]})}return e.jsx(D,{className:c.summary,"data-alternate":j,"data-first":l===1,onFocus:()=>v(!0),onBlur:()=>v(!1),as:"section","aria-labelledby":I,ref:m,id:t,tabIndex:-1,...x,children:e.jsx("div",{className:c.content,children:e.jsx(k,{in:r||b,children:({visible:n})=>e.jsxs(e.Fragment,{children:[!j&&!P&&e.jsxs(e.Fragment,{children:[E(n),z(n)]}),(j||P)&&e.jsxs(e.Fragment,{children:[z(n),E(n)]})]})})})})}const nt="_home_1e7fe_1",ot={home:nt},gt=()=>[{rel:"prefetch",href:"/draco/draco_wasm_wrapper.js",as:"script",type:"text/javascript",importance:"low"},{rel:"prefetch",href:"/draco/draco_decoder.wasm",as:"fetch",type:"application/wasm",importance:"low"}],jt=()=>ne({title:"Software Engineer",description:`Design portfolio of ${y.name} — a Software Engineer working on web & mobile apps with a focus on experience design, and accessibility.`}),vt=()=>{const[t,r]=s.useState([]),[m,l]=s.useState(!1),i=s.useRef(),a=s.useRef();s.useRef(),s.useRef();const o=s.useRef();return s.useEffect(()=>{const _=[i,a,o],g=new IntersectionObserver((x,b)=>{x.forEach(v=>{if(v.isIntersecting){const u=v.target;if(b.unobserve(u),t.includes(u))return;r(p=>[...p,u])}})},{rootMargin:"0px 0px -10% 0px",threshold:.1}),j=new IntersectionObserver(([x])=>{l(!x.isIntersecting)},{rootMargin:"-100% 0px 0px 0px"});return _.forEach(x=>{g.observe(x.current)}),j.observe(i.current),()=>{g.disconnect(),j.disconnect()}},[t]),e.jsxs("div",{className:ot.home,children:[e.jsx(Ie,{id:"intro",sectionRef:i,scrollIndicatorHidden:m}),e.jsx(st,{id:"project-1",sectionRef:a,visible:t.includes(a.current),index:1,Alamazing:!0,Word:!0,Game:!0,Mobile:!0,title:"Alamazing Word Game",description:"Mobile App: Tech: React Native - Typescript, Android, iOS. A Simple Word Game App, a player can select a category (Cities, Foods and Animals) and attempt to guess a randomized word based on the given hint.",buttonText:"View project",model:{type:"laptop",alt:"Smart Sparrow lesson builder",textures:[{srcSet:`${C} 1280w, ${C} 2560w`,placeholder:te}]}}),e.jsx(He,{sectionRef:o,visible:t.includes(o.current),id:"details"}),e.jsx(oe,{})]})};export{vt as H,W as M,gt as l,jt as m};
