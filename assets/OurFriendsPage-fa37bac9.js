import{s as n,b as o,P as a,j as i,a as p,c as b,r as g}from"./index-9c87dbe8.js";const S=n.div`
  margin-top: 40px;

  @media ${o} {
    margin-top: 80px;
  }
`,w=n.h2`
  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  text-align: center;
  line-height: normal;

  color: ${({theme:e})=>e.colors.black};

  @media ${o} {
    font-size: ${({theme:e})=>e.fontSizes.huge};
  }
`,y=({children:e})=>i.jsx(S,{children:i.jsx(w,{children:e})});y.propTypes={children:a.any.isRequired};const I=n.section`
  padding-bottom: 75px;
`,R=n.div`
  margin-bottom: 24px;

  @media ${o} {
    margin-top: 40px;
  }

  @media ${p} {
    margin-bottom: 60px;
  }
`;b.defaults.baseURL="https://mypets-backend.onrender.com/api";const W=async()=>{try{const{data:{friends:e}}=await b.get("/friends");return e}catch(e){console.log(e)}},E=n.li`
  position: relative;

  flex: 1;
  min-width: 280px;
  height: auto;

  padding: 16px 12px;

  border-radius: 40px;

  box-shadow: ${({theme:e})=>e.boxShadow.main};

  background-color: #fff;

  @media ${o} {
    min-width: 336px;
  }

  @media ${p} {
    min-width: 394px;

    &:last-child {
      flex: 0;
      margin-right: auto;
    }
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover,
  &:focus {
    transform: scale(1.02);
    transition: transform ${({theme:e})=>e.transitionHover};
  }

  cursor: pointer;
`,O=n.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`,k=n.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,H=n.div``,q=n.img`
  width: 100px;
  height: 68px;

  @media ${o} {
    width: 124px;
    height: 88px;
  }

  @media ${p} {
    width: 146px;
    height: 104px;
  }
`,L=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,c=n.div`
  font-family: ${({theme:e})=>e.fonts.main.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;

  @media ${o} {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  @media ${p} {
    font-size: ${({theme:e})=>e.fontSizes.md};
  }

  &:hover {
    color: ${({theme:e})=>e.colors.blue};

    cursor: pointer;
  }

  &:hover > a {
    color: ${({theme:e})=>e.colors.blue};

    cursor: pointer;
  }
`,P=n.p`
  position: relative;
`,u=n.p``,x=n.a`
  font-family: ${({theme:e})=>e.fonts.main.regular};
  color: ${({theme:e})=>e.colors.black};
`,C=n.ul`
  position: absolute;
  top: 107px;
  right: 97px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 130px;
  height: auto;
  padding: 12px;

  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.blue};

  box-shadow: ${({theme:e})=>e.boxShadow.main};

  background-color: #fff;

  transition: all ${({theme:e})=>e.transitionHover};
`,M=n.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};
`,N=n.p``,A=n.p``,D=["MN","TU","WE","TH","FR","SA","SU"],T=({items:e,handleTimeHover:s,hoveredTime:l})=>i.jsx(i.Fragment,{children:e.map(({imageUrl:t,url:m,title:F,workDays:r,address:$,email:f,phone:h,addressUrl:z})=>i.jsxs(E,{children:[i.jsx(k,{href:`${m}`,target:"_blank",children:F}),i.jsxs(O,{children:[i.jsx(H,{children:i.jsx(q,{src:t})}),i.jsxs(L,{children:[i.jsxs(c,{onMouseEnter:()=>s(t),onMouseLeave:()=>s(""),children:[i.jsx(P,{children:"Time:"}),i.jsx(x,{children:r?r[0].isOpen?`${r[0].from} - ${r[0].to}`:"Close":"Day and Night"})]}),i.jsxs(c,{children:[i.jsx(u,{children:"Address:"}),i.jsx(x,{href:z,target:"_blank",rel:"noopener noreferrer",children:$===null?"Website only":$})]}),i.jsxs(c,{children:[i.jsx(u,{children:"Email:"}),i.jsx(x,{href:`mailto:${f}`,children:f===null?"Telephone only":f})]}),i.jsxs(c,{children:[i.jsx(u,{children:"Phone:"}),i.jsx(x,{href:`tel:${h}`,children:h===null?"Email only":h})]})]})]}),l===t&&i.jsx(C,{children:r?r.map((d,j)=>d&&i.jsxs(M,{children:[i.jsxs(N,{children:[D[j],": "]}),i.jsx(A,{children:d.isOpen?`${d.from} - ${d.to}`:"Closed"})]},j)):"Day and Night"})]},t))});T.propTypes={items:a.array.isRequired,handleTimeHover:a.func.isRequired,hoveredTime:a.string.isRequired};const _=n.div``,B=n.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${o} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,v=({items:e})=>{const[s,l]=g.useState(""),t=m=>{l(m)};return i.jsx(_,{children:i.jsx(B,{children:i.jsx(T,{items:e,handleTimeHover:t,hoveredTime:s})})})};v.propTypes={items:a.array.isRequired};function J(){const[e,s]=g.useState([]);return g.useEffect(()=>{(async()=>{try{const t=await W();s(t)}catch(t){console.log(t)}})()},[]),i.jsxs(I,{children:[i.jsx(R,{children:i.jsx(y,{children:"Our friends"})}),i.jsx(v,{items:e})]})}export{J as default};