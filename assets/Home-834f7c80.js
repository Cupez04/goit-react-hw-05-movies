import{r as t,j as a,b as c}from"./index-7250dade.js";import{M as m}from"./MovieList-4070a5f0.js";import{C as f,a as r}from"./api-1deb9de0.js";import{T as l}from"./Typography-784682a3.js";const j=()=>{const[o,n]=t.useState([]),[i,e]=t.useState(!1);return t.useEffect(()=>{(async()=>{try{e(!0),await r.fakePromise();const s=await r.MoviesTrending();n(s.results)}catch(s){console.log(s)}finally{e(!1)}})()},[]),a.jsx(a.Fragment,{children:a.jsx(f,{sx:{mt:3},children:i?a.jsx(c,{}):a.jsxs(a.Fragment,{children:[a.jsx(l,{variant:"h4",component:"h1",align:"left",children:"Trending Today"}),a.jsx(m,{movies:o})]})})})};export{j as default};
