(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[120],{3093:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projectsnsocials",function(){return s(1824)}])},6555:function(e,t,s){"use strict";var A=s(5893);let a=["@1x","@2x","@3x"],o=e=>{let{src:t,width:s,height:o,alt:i}=e,r=t.split(".").slice(-1)[0],n=t.replace(".".concat(r),""),l=Array.from({length:3},(e,t)=>t).map(e=>"".concat(n).concat(a[e],".").concat(r," ").concat((e+1)*768,"w")).join(", ");return s>768&&(o=768*o/(s=768)),(0,A.jsx)("img",{srcSet:l,alt:i,style:{width:s,height:"auto",aspectRatio:"".concat(s," / ").concat(o)}})};t.Z=o},1824:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var A=s(5893),a=s(6893),o=s(8100),i=s(9008),r=s.n(i),n=s(5675),l=s.n(n),c=s(7735);let h=[{name:"GitHub",link:"https://github.com/Kherrisan",icon:c.pZu,apiUrl:"https://api.swo.moe/stats/github/Kherrisan",color:"#24292f"},{name:"Telegram",link:"https://t.me/Kherrisan",icon:c.n26,apiUrl:"https://api.swo.moe/stats/telegram/Kherrisan",color:"#2CA5E0"},{name:"Twitter",link:"https://twitter.com/Kherrisan",icon:c.mWf,apiUrl:"https://api.swo.moe/stats/twitter/Kherrisan",color:"#1da1f2"},{name:"Weibo",link:"https://weibo.com/u/5593419409",icon:c.KUB,apiUrl:"https://api.swo.moe/stats/weibo/5593419409",color:"#e71f19"},{name:"Steam Games",link:"https://steamcommunity.com/profiles/76561198365158640",icon:c.EX5,apiUrl:"https://api.swo.moe/stats/steamgames/76561198365158640",color:"#134375",followerName:"games"}];var d={src:"/_next/static/media/arknights@2x.e3c399e7.jpeg",height:710,width:1536,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJYoP//EABsQAAIBBQAAAAAAAAAAAAAAAAECIgADFCGB/9oACAEBAAE/ALoTGEFkm+NX/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/AFdv/9k=",blurWidth:8,blurHeight:4},m=s(6555);let g=e=>fetch(e).then(e=>e.json()),x=e=>{let{apiUrl:t,followerName:s}=e,{data:a,error:i}=(0,o.ZP)(t,g);return i?(0,A.jsx)("div",{className:"font-mono text-xs",children:"-"}):a?(0,A.jsxs)("div",{className:"font-mono text-xs",children:[a.count," ",s]}):(0,A.jsx)("div",{className:"font-mono text-xs",children:"..."})},p=e=>{let t=e.followerName?e.followerName:"subs";return(0,A.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,A.jsxs)("div",{className:"flex items-center justify-between overflow-hidden rounded border-b-4 bg-light-300 p-4 transition-all duration-150 dark:bg-dark-700 hover:opacity-80 hover:shadow-lg",style:{borderBottomColor:e.color},children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("div",{className:"font-bold text-sm",children:e.name}),(0,A.jsx)(x,{apiUrl:e.apiUrl,followerName:t})]}),e.icon?(0,A.jsx)(e.icon,{size:18,className:"opacity-70"}):(0,A.jsx)(a.AlO,{size:18,className:"opacity-70"})]})})},u=e=>{let{genshinUserInfo:t}=e;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(r(),{children:(0,A.jsx)("title",{children:"KendrickZou - Projects & Socials"})}),(0,A.jsxs)("div",{className:"container mx-auto max-w-3xl px-6",children:[(0,A.jsx)("h1",{className:"heading-text page-heading",children:"Arknights"}),(0,A.jsx)("div",{className:"shadow-xl text-0 rounded overflow-hidden",children:(0,A.jsx)(l(),{src:d,alt:"Arknights Background"})}),(0,A.jsx)("div",{className:"shadow-xl text-0 rounded overflow-hidden",children:(0,A.jsx)(m.Z,{src:"https://cdn.bilicdn.tk/npm/kendrickzou-portfolio-img@1.0.32/28e524805df5828dacb9115e3a091733.jpeg",width:280,height:280,alt:"alt"})}),(0,A.jsx)("h1",{className:"heading-text page-heading",children:"Projects"}),(0,A.jsx)("h1",{className:"heading-text page-heading",children:"Socials"}),(0,A.jsx)("div",{className:"mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4",children:h.map(e=>(0,A.jsx)(p,{...e},e.name))}),(0,A.jsxs)("div",{className:"secondary-text text-center font-mono text-xs",children:["Real-time stats, powered by"," ",(0,A.jsx)("a",{className:"hover-links",href:"https://github.com/spencerwooo/substats",target:"_blank",rel:"noopener noreferrer",children:"substats"}),"."]})]}),(0,A.jsx)("div",{className:"flex-1"})]})};var w=u}},function(e){e.O(0,[675,100,774,888,179],function(){return e(e.s=3093)}),_N_E=e.O()}]);