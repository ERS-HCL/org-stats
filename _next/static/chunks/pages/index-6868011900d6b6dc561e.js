(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5212:function(e,r,t){"use strict";t.d(r,{A:function(){return c}});var a=t(5893),n=t(7294),s=t(1664),o=t(1163),l=t(1330),d=t(6049),i=[{name:"Stats",path:"/"},{name:"About",path:"/about"}],c=function(e){var r=e.children,t=e.title,c=e.subTitle,u=(0,o.useRouter)();return(0,a.jsxs)("div",{className:"flex flex-col h-screen antialiased",children:[(0,a.jsx)(l.pJ,{as:"nav",className:"bg-gradient-to-r from-black to-blue-900 shadow-lg",children:function(e){var r=e.open;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)("img",{className:"w-auto h-14",src:"/org-stats/static/TO-white.png",alt:"Workflow"})}),(0,a.jsx)("div",{className:"hidden md:block",children:(0,a.jsx)("div",{className:"ml-10 flex items-baseline space-x-4",children:i.map((function(e,r){var t=e.name,o=e.path;return u.pathname===o?(0,a.jsx)(n.Fragment,{children:(0,a.jsx)("div",{className:"bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium",children:(0,a.jsx)(s.default,{href:o,children:t})})},"".concat(t,"-").concat(r)):(0,a.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:(0,a.jsx)(s.default,{href:o,children:t})},"".concat(t,"-").concat(r))}))})})]}),(0,a.jsx)("div",{className:"-mr-2 flex md:hidden",children:(0,a.jsxs)(l.pJ.Button,{className:"bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),r?(0,a.jsx)(d.b0D,{className:"block h-6 w-6","aria-hidden":"true"}):(0,a.jsx)(d.Oqj,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),(0,a.jsx)(l.pJ.Panel,{className:"md:hidden",children:(0,a.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:i.map((function(e,r){var t=e.name,o=e.path;return u.pathname===o?(0,a.jsx)(n.Fragment,{children:(0,a.jsx)("div",{className:"bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium",children:(0,a.jsx)(s.default,{href:o,children:t})})},"".concat(t,"-").concat(r)):(0,a.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:(0,a.jsx)(s.default,{href:o,children:t})},"".concat(t,"-").concat(r))}))})})]})}}),(0,a.jsx)("header",{className:"bg-white shadow",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold text-gray-700",children:t}),(0,a.jsx)("p",{className:"text-sm text-blue-700 mt-1",children:c})]})}),(0,a.jsx)("main",{className:"flex-1",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex-1 ",children:(0,a.jsxs)("div",{className:"px-4 py-6 sm:px-0 overflow-y-auto",children:[r," "]})})}),(0,a.jsx)("div",{className:"text-gray-100 bg-gradient-to-r from-black to-blue-900 text-center align-middle items-center text-xs border-t p-2",children:"HCL ERS TechOffice 2021"})]})}},8722:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return H},default:function(){return A},getColumns:function(){return E}});var a=t(4121),n=t(6265),s=t(5893),o=t(7294),l=t(7955),d=t(3802),i=t(5212),c=t(9521),u=t(4078),g=t(6049),x=t(7069),m=t(7349),p=t(4257),f=function(e){var r=e.preGlobalFilteredRows,t=e.filter,n=e.setFilter,l=r.length,d=o.useState(t),i=(0,a.Z)(d,2),c=i[0],u=i[1];return(0,s.jsxs)("span",{className:"text-gray-700 dark:text-teal-accent-400 text-sm",children:["Search"," ",(0,s.jsx)("input",{type:"text",value:c||"",className:"px-4 py-2 rounded border-gray-400 border text-xs flex-1 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600",placeholder:"".concat(l," records..."),onChange:function(e){u(e.target.value),function(e){n(e||void 0)}(e.target.value)}})]})},h=function(e){var r=e.column,t=r.filterValue,a=r.preFilteredRows,n=r.setFilter,o=a.length;return(0,s.jsx)("span",{className:"text-gray-700 dark:text-teal-accent-400 text-xs w-1/2",children:(0,s.jsx)("input",{className:"px-1 rounded border-gray-400 border py-2 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600",value:t||"",onChange:function(e){n(e.target.value||void 0)},placeholder:"Search ".concat(o," records...")})})},b=t(4429),y=t(7460),v=t.n(y);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var k=function(e,r,t){return(0,b.Lu)(e,t,{keys:[function(e){return e.values[r]}]})};k.autoRemove=function(e){return!e};var N=function(e){var r=e.columns,t=e.data;if("csv"===e.fileType){var a=r.map((function(e){return e.exportValue})),n=v().unparse({fields:a,data:t});return new Blob([n],{type:"text/csv"})}return!1},C=function(e){var r=e.columns,t=e.data,a=e.renderRowSubComponent,n=e.groupBy,l=void 0===n?[]:n,i=e.hiddenColumns,b=void 0===i?[]:i,y=o.useMemo((function(){return{date:function(e,r,t){if(null===t)return e;var a=(0,x.Z)(new Date(t[0]),1),n=(0,m.Z)(new Date(t[1]),1);return e.filter((function(e){return(0,p.Z)(new Date(e.original[r]),{start:a,end:n})}))},fuzzyText:k,text:function(e,r,t){return e.filter((function(e){var a=e.values[r];return void 0!==a&&String(a).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),v=o.useMemo((function(){return{Filter:h}}),[]),j=(0,c.useTable)({columns:r,data:t,initialState:{pageIndex:0,groupBy:l,hiddenColumns:b},defaultColumn:v,filterTypes:y,getExportFileBlob:N},c.useFilters,c.useGlobalFilter,c.useGroupBy,c.useSortBy,c.useExpanded,c.usePagination,u.zF),C=j.getTableProps,F=j.getTableBodyProps,P=j.headerGroups,O=j.prepareRow,S=j.visibleColumns,M=j.page,L=j.canPreviousPage,T=j.canNextPage,H=j.pageOptions,E=j.pageCount,A=j.gotoPage,R=j.nextPage,D=j.previousPage,_=j.setPageSize,G=j.state,Z=G.pageIndex,B=G.pageSize,I=G.globalFilter,z=j.preGlobalFilteredRows,V=j.setGlobalFilter,q=j.setHiddenColumns,U=j.exportData;return o.useEffect((function(){q(b)}),[b]),(0,s.jsx)("div",{className:"min-w-full rounded-lg border shadow-",children:(0,s.jsxs)("table",w(w({},C()),{},{className:"min-w-full divide-y divide-gray-200 rounded-lg shadow-md",children:[(0,s.jsxs)("thead",{className:"bg-gray-100 dark:bg-gray-800 rounded-t-lg",children:[(0,s.jsx)("tr",{children:(0,s.jsx)("th",{colSpan:S.length,className:"px-4 py-3 text-left text-xs text-gray-700 border-b rounded-t-lg",children:(0,s.jsxs)("div",{className:"px-4 flex flex-row-reverse text-xs text-gray-700",children:[(0,s.jsxs)("button",{type:"button",className:"inline-flex justify-between items-center uppercase py-2 px-4 m-2 border border-transparent shadow text-sm font-medium rounded-md text-gray-100 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",onClick:function(){U("csv",!0)},children:[(0,s.jsx)(g._8t,{className:"h-5 w-5 mr-1"}),(0,s.jsx)("span",{children:"CSV"})]}),(0,s.jsxs)("button",{type:"button",className:"inline-flex justify-between items-center uppercase py-2 px-4 m-2 border border-transparent shadow text-sm font-medium rounded-md text-gray-100 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",onClick:function(){U("csv",!1)},children:[(0,s.jsx)(g._8t,{className:"h-5 w-5 mr-1"}),(0,s.jsx)("span",{children:"CSV (f)"})]})]})})}),(0,s.jsx)("tr",{children:(0,s.jsx)("th",{colSpan:S.length,className:"px-4 py-3 text-left text-xs text-gray-700 border-b",children:(0,s.jsx)(f,{filter:I,setFilter:V,preGlobalFilteredRows:z})})}),P.map((function(e){return(0,s.jsx)("tr",w(w({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,s.jsx)("th",w(w({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:"px-1 py-3 text-left text-xs font-medium text-gray-700 dark:text-blue-400 uppercase tracking-wider hover:text-gray-900 dark:hover:text-blue-700",children:(0,s.jsxs)("span",{className:"flex flex-wrap",children:[e.canGroupBy?(0,s.jsx)("span",w(w({},e.getGroupByToggleProps()),{},{className:"text-gray-700 dark:text-gray-50 hover:text-teal-900 dark:hover:text-blue-400 mr-1",children:e.isGrouped?(0,s.jsx)(d.vxs,{className:"w-4 h-4"}):(0,s.jsx)(g.vxs,{className:"w-4 h-4"})})):null,e.render("Header"),e.isSorted?e.isSortedDesc?(0,s.jsx)(d.v4q,{className:"h-4 w-4"}):(0,s.jsx)(d.g8U,{className:"h-4 w-4"}):""]})}))}))}))})),P.map((function(e){return(0,s.jsx)("tr",w(w({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,s.jsx)("th",w(w({},e.getHeaderProps()),{},{className:"px-1 pb-2 text-left text-xs font-medium text-gray-700 dark:text-blue-400 uppercase tracking-wider hover:text-gray-900 dark:hover:text-blue-700",children:(0,s.jsx)("div",{children:!e.isGrouped&&e.canFilter?e.render("Filter"):null})}))}))}))}))]}),(0,s.jsx)("tbody",w(w({},F()),{},{className:"bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-400 flex-1",children:M.map((function(e,r){return O(e),(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)("tr",w(w({},e.getRowProps()),{},{children:e.cells.map((function(r){return(0,s.jsx)("td",w(w({},r.getCellProps()),{},{className:"px-4 py-4 whitespace-nowrap ".concat(r.isGrouped?"bg-blue-400 text-gray-700 dark:text-gray-800":r.isAggregated?"bg-white dark:bg-gray-700 dark:text-gray-50":r.isPlaceholder?"bg-gray-200 dark:bg-gray-800":"bg-white dark:bg-gray-700 dark:text-gray-50"),children:(0,s.jsx)("div",{className:"text-sm text-gray-900 dark:text-gray-100",children:r.isGrouped?(0,s.jsxs)("div",{className:"flex flex-wrap align-middle text-center text-gray-700 dark:text-gray-800 hover:text-teal-900  dark:hover:text-gray-900 ",children:[(0,s.jsx)("span",w(w({},e.getToggleRowExpandedProps()),{},{className:"mr-1",children:e.isExpanded?(0,s.jsx)(d.PYG,{className:"h-5 w-5"}):(0,s.jsx)(d.a3z,{className:"h-5 w-5"})})),(0,s.jsxs)("div",{children:[r.render("Cell")," (",e.subRows.length,")"]})]}):r.isAggregated?(0,s.jsx)("div",{className:"flex flex-wrap align-middle text-center font-semibold",children:r.render("Aggregated")}):r.isPlaceholder?null:r.render("Cell")})}))}))})),0===e.subRows.length&&e.isExpanded?(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:S.length,children:a({row:e})})}):null]},r)}))})),(0,s.jsx)("tfoot",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:S.length,className:"rounded-b-lg",children:(0,s.jsx)("div",{className:"bg-white dark:bg-gray-700 px-4 py-3 w-full flex items-center justify-between border-gray-200 rounded-b-lg",children:(0,s.jsxs)("div",{className:"flex flex-row flex-1 items-center justify-evenly w-full ",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("button",{onClick:function(){return A(0)},disabled:!L,className:"relative inline-flex items-center px-2 py-2 rounded-l-md border-l border-b border-t border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400",children:(0,s.jsx)(d.Adx,{className:"h-4 w-4"})}),(0,s.jsx)("button",{onClick:function(){return D()},disabled:!L,className:"relative inline-flex items-center px-2 py-2 border-l border-t border-b border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400",children:(0,s.jsx)(d.wyc,{className:"h-4 w-4"})}),(0,s.jsx)("button",{onClick:function(){return R()},disabled:!T,className:"relative inline-flex items-center px-2 py-2 border-l border-t border-b border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400",children:(0,s.jsx)(d.XCv,{className:"h-4 w-4"})}),(0,s.jsx)("button",{onClick:function(){return A(E-1)},disabled:!T,className:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400",children:(0,s.jsx)(d.a3z,{className:"h-4 w-4"})})]}),(0,s.jsx)("div",{className:"hidden sm:flex sm:items-center sm:justify-between mx-2",children:(0,s.jsx)("div",{children:(0,s.jsxs)("p",{className:"text-sm text-gray-700 dark:text-gray-200",children:["Page",(0,s.jsx)("span",{className:"font-medium mx-2",children:Z+1}),"of"," ",(0,s.jsx)("span",{className:"font-medium mx-2",children:H.length})]})})}),(0,s.jsxs)("span",{className:"hidden sm:flex text-sm items-center text-gray-700 dark:text-gray-200",children:["Go to page",(0,s.jsx)("input",{type:"number",defaultValue:Z+1,onChange:function(e){var r=e.target.value?Number(e.target.value)-1:0;A(r)},className:"py-2 px-3 mx-2 border border-gray-300 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-24"})]}),(0,s.jsx)("select",{value:B,onChange:function(e){_(Number(e.target.value))},className:"py-2 border border-gray-300 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[10,20,30,40,50].map((function(e){return(0,s.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})})})})})]}))})},F=function(e){var r=e.column,t=r.filterValue,n=void 0===t?[]:t,l=r.preFilteredRows,d=r.setFilter,i=r.id,c=o.useMemo((function(){var e=l.length?l[0].values[i]:0,r=l.length?l[0].values[i]:0;return l.forEach((function(t){e=Math.min(t.values[i],e),r=Math.max(t.values[i],r)})),[e,r]}),[i,l]),u=(0,a.Z)(c,2),g=u[0],x=u[1];return(0,s.jsxs)("div",{className:"flex flex-wrap text-gray-700 dark:text-blue-400 text-xs justify-start align-middle text-center items-center",children:[(0,s.jsx)("input",{value:n[0]||"",type:"number",className:"text-xs w-20 px-1 rounded border-gray-400 border py-1 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600",onChange:function(e){var r=e.target.value;d((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[r?parseInt(r,10):void 0,e[1]]}))},placeholder:"Min (".concat(g,")")}),(0,s.jsx)("div",{className:"p-1",children:"to"}),(0,s.jsx)("input",{value:n[1]||"",type:"number",className:"text-xs w-20 px-1 rounded border-gray-400 border py-1 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600",onChange:function(e){var r=e.target.value;d((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],r?parseInt(r,10):void 0]}))},placeholder:"Max (".concat(x,")")})]})},P=t(9999),O=function(e){var r=e.column,t=r.filterValue,a=r.setFilter,n=r.preFilteredRows,l=r.id,d=o.useMemo((function(){var e=new Set;return n.forEach((function(r){e.add(r.values[l])})),(0,P.Z)(e.values())}),[l,n]);return(0,s.jsxs)("select",{value:t,onChange:function(e){a(e.target.value||void 0)},className:"text-xs rounded border-gray-400 border dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600 py-1",children:[(0,s.jsx)("option",{value:"",children:"All"}),d.map((function(e,r){return(0,s.jsx)("option",{value:e,children:e},r)}))]})};function S(e){var r=(0,o.useState)(!1),t=r[0],a=r[1];return(0,o.useEffect)((function(){var r=window.matchMedia(e);r.matches!==t&&a(r.matches);var n=function(){a(r.matches)};return r.addListener(n),function(){return r.removeListener(n)}}),[t,e]),t}var M=function(e){var r=e.row,t=o.useState(),n=(0,a.Z)(t,2),d=n[0],i=n[1];return o.useEffect((function(){var e=r.values,t=Object.entries(e).filter((function(e){return"expander"!==e[0]})).map((function(e){return function(e,r){var t;switch(e){case"node.name":t={name:"Name",value:r};break;case"node.primaryLanguage.name":t={name:"Primary Language",value:r};break;case"node.stargazers.totalCount":t={name:"Stars",value:r};break;case"node.forkCount":t={name:"Forks",value:r};break;case"node.createdAt":t={name:"Created on",value:(0,l.Z)(new Date(r),"dd-MMM-yyyy")};break;case"node.updatedAt":t={name:"Last Update on",value:(0,l.Z)(new Date(r),"dd-MMM-yyyy")};break;case"node.licenseInfo.name":t={name:"License",value:r};break;case"node.url":t={name:"Url",value:"<a href=".concat(r,' target="_blank" style="color:#2073c0";">').concat(r,"</a>"),type:"html"};break;case"node.primaryLanguage.color":t={name:"color",value:r};break;case"node.isFork":t={name:"Forked",value:"".concat(!0===r?"Yes":"No")};break;case"node.descriptionHTML":t={name:"Description",value:r,type:"html"};break;case"node.repositoryTopics.edges":var a=[];a.push(r.map((function(e){return e.node.topic.name}))),t={name:"Tags",value:a.join(",")};break;default:t=null}return t}(e[0],e[1])}));i(t)}),[r]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"shadow-lg flex flex-col flex-wrap bg-white p-6 leading-normal",children:null===d||void 0===d?void 0:d.map((function(e){var r=e.name,t=e.type,a=e.value;return(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"text-left w-1/5",children:(0,s.jsx)("div",{className:"text-gray-600 text-sm font-semibold",children:r})}),(0,s.jsxs)("div",{className:"text-left w-4/5",children:["html"===t&&(0,s.jsx)("div",{className:"text-gray-600 text-sm",dangerouslySetInnerHTML:{__html:a}}),(!t||"text"===t)&&(0,s.jsx)("div",{className:"text-gray-600 text-sm",children:a})]})]})}))})})};function L(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?L(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var H=!0,E=function(){return[{Header:function(){return null},id:"expander",Cell:function(e){var r=e.row;return(0,s.jsx)("span",T(T({},r.getToggleRowExpandedProps()),{},{className:"text-gray-700 dark:text-gray-50 hover:text-teal-900 dark:hover:text-teal-accent-400",children:r.isExpanded?(0,s.jsx)(d.v4q,{className:"w-4 h-4"}):(0,s.jsx)(d.XCv,{className:"w-4 h-4"})}))}},{Header:"Repository",accessor:"node.name",disableFilters:!0,aggregate:"uniqueCount",Aggregated:function(e){var r=e.value;return"".concat(r," repos")}},{Header:"Language",accessor:"node.primaryLanguage.name",Filter:O,filter:"text",aggregate:"uniqueCount",Aggregated:function(e){var r=e.value;return"".concat(r," Languages")}},{Header:"Stars",accessor:"node.stargazers.totalCount",Filter:F,filter:"between",aggregate:"average",Aggregated:function(e){var r=e.value;return"".concat(Math.round(100*r)/100," (avg)")}},{Header:"Forks",accessor:"node.forkCount",disableFilters:!0,aggregate:"average",Aggregated:function(e){var r=e.value;return"".concat(Math.round(100*r)/100," (avg)")}},{Header:"Created On",accessor:"node.createdAt",disableFilters:!0,aggregate:"count",Aggregated:function(e){var r=e.value;return"".concat(r," Records")},Cell:function(e){var r=e.value;return(0,l.Z)(new Date(r),"dd/MM/yyyy")}},{Header:"Last Update",accessor:"node.updatedAt",disableFilters:!0,aggregate:"count",Aggregated:function(e){var r=e.value;return"".concat(r," Records")},Cell:function(e){var r=e.value;return(0,l.Z)(new Date(r),"dd/MM/yyyy")}},{Header:"License Info",accessor:"node.licenseInfo.name",disableFilters:!0},{Header:"Tags",accessor:"node.repositoryTopics.edges",Cell:function(e){e.value;return""},disableFilters:!0},{Header:"URL",accessor:"node.url",disableFilters:!0},{Header:"Language Color",accessor:"node.primaryLanguage.color",disableFilters:!0},{Header:"Is Fork",accessor:"node.isFork",disableFilters:!0},{Header:"Project Description",accessor:"node.descriptionHTML",disableFilters:!0}]};function A(e){var r=e.data,t=S("(min-width: 1024px)"),n=S("(min-width: 620px)"),l=o.useState([]),d=(0,a.Z)(l,2),c=d[0],u=d[1],g=r.org,x=r.timestamp,m=o.useMemo((function(){return E()}),[]),p=o.useMemo((function(){return g.edges}),[g]),f=o.useMemo((function(){return[]}),[]);o.useEffect((function(){u(t?["node.licenseInfo.name","node.url","node.primaryLanguage.color","node.isFork","node.descriptionHTML","node.repositoryTopics.edges"]:n?["node.createdAt","node.updatedAt","node.forkCount","node.licenseInfo.name","node.url","node.primaryLanguage.color","node.isFork","node.descriptionHTML","node.repositoryTopics.edges"]:["node.createdAt","node.updatedAt","node.forkCount","node.stargazers.totalCount","node.primaryLanguage.name","node.licenseInfo.name","node.url","node.primaryLanguage.color","node.isFork","node.descriptionHTML","node.repositoryTopics.edges"])}),[t,n]);var h=o.useCallback((function(e){var r=e.row;return(0,s.jsx)(M,{row:r})}),[]);return(0,s.jsx)(i.A,{title:"Github Stats",subTitle:"Public Repositories as of ".concat(x),children:(0,s.jsx)(C,{columns:m,data:p,renderRowSubComponent:h,groupBy:f,hiddenColumns:c})})}},5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8722)}])}},function(e){e.O(0,[908,192,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);