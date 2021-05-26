(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5212:function(e,r,t){"use strict";t.d(r,{A:function(){return c}});var a=t(5893),n=t(7294),s=t(1664),l=t(1163),o=t(1330),d=t(6049),i=[{name:"Stats",path:"/"},{name:"About",path:"/about"}],c=function(e){var r=e.children,t=e.title,c=(0,l.useRouter)();return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.pJ,{as:"nav",className:"bg-gradient-to-r from-current to-blue-900 shadow-lg",children:function(e){var r=e.open;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)("img",{className:"w-auto h-3",src:"/org-stats/static/logo.png",alt:"Workflow"})}),(0,a.jsx)("div",{className:"hidden md:block",children:(0,a.jsx)("div",{className:"ml-10 flex items-baseline space-x-4",children:i.map((function(e,r){var t=e.name,l=e.path;return c.pathname===l?(0,a.jsx)(n.Fragment,{children:(0,a.jsx)("div",{className:"bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium",children:(0,a.jsx)(s.default,{href:l,children:t})})},"".concat(t,"-").concat(r)):(0,a.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:(0,a.jsx)(s.default,{href:l,children:t},"".concat(t,"-").concat(r))})}))})})]}),(0,a.jsx)("div",{className:"-mr-2 flex md:hidden",children:(0,a.jsxs)(o.pJ.Button,{className:"bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),r?(0,a.jsx)(d.b0D,{className:"block h-6 w-6","aria-hidden":"true"}):(0,a.jsx)(d.Oqj,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),(0,a.jsx)(o.pJ.Panel,{className:"md:hidden",children:(0,a.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:i.map((function(e,r){var t=e.name,l=e.path;return c.pathname===l?(0,a.jsx)(n.Fragment,{children:(0,a.jsx)("div",{className:"bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium",children:(0,a.jsx)(s.default,{href:l,children:t})})},"".concat(t,"-").concat(r)):(0,a.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:(0,a.jsx)(s.default,{href:l,children:t})},"".concat(t,"-").concat(r))}))})})]})}}),(0,a.jsx)("header",{className:"bg-white shadow",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:(0,a.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:t})})}),(0,a.jsx)("main",{children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:r})})]})}},3124:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return R},default:function(){return M},getColumns:function(){return E}});var a=t(6265),n=t(5893),s=t(7955),l=t(5212),o=t(7294),d=t(9521),i=t(4078),c=t(6049),u=t(3802),x=t(7069),g=t(7349),m=t(4257),h=t(4121),p=function(e){var r=e.preGlobalFilteredRows,t=e.filter,a=e.setFilter,s=r.length,l=o.useState(t),d=(0,h.Z)(l,2),i=d[0],c=d[1];return(0,n.jsxs)("span",{className:"text-gray-700 dark:text-teal-accent-400 text-sm",children:["Search"," ",(0,n.jsx)("input",{type:"text",value:i||"",className:"px-4 py-2 rounded border-gray-400 border text-xs flex-1 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600",placeholder:"".concat(s," records..."),onChange:function(e){c(e.target.value),function(e){a(e||void 0)}(e.target.value)}})]})},f=function(e){var r=e.column,t=r.filterValue,a=r.preFilteredRows,s=r.setFilter,l=a.length;return(0,n.jsx)("span",{className:"text-gray-700 dark:text-teal-accent-400 text-xs w-1/2",children:(0,n.jsx)("input",{className:"px-1 rounded border-gray-400 border py-2 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600",value:t||"",onChange:function(e){s(e.target.value||void 0)},placeholder:"Search ".concat(l," records...")})})},b=t(4429),y=t(7460),v=t.n(y);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var N=function(e,r,t){return(0,b.Lu)(e,t,{keys:[function(e){return e.values[r]}]})};N.autoRemove=function(e){return!e};var k=function(e){var r=e.columns,t=e.data;if("csv"===e.fileType){var a=r.map((function(e){return e.exportValue})),n=v().unparse({fields:a,data:t});return new Blob([n],{type:"text/csv"})}return!1},P=function(e){var r=e.columns,t=e.data,a=e.renderRowSubComponent,s=e.groupBy,l=void 0===s?[]:s,h=e.hiddenColumns,b=void 0===h?[]:h,y=o.useMemo((function(){return{date:function(e,r,t){if(null===t)return e;var a=(0,x.Z)(new Date(t[0]),1),n=(0,g.Z)(new Date(t[1]),1);return e.filter((function(e){return(0,m.Z)(new Date(e.original[r]),{start:a,end:n})}))},fuzzyText:N,text:function(e,r,t){return e.filter((function(e){var a=e.values[r];return void 0!==a&&String(a).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),v=o.useMemo((function(){return{Filter:f}}),[]),j=(0,d.useTable)({columns:r,data:t,initialState:{pageIndex:0,groupBy:l,hiddenColumns:b},defaultColumn:v,filterTypes:y,getExportFileBlob:k},d.useFilters,d.useGlobalFilter,d.useGroupBy,d.useSortBy,d.useExpanded,d.usePagination,i.zF),P=j.getTableProps,C=j.getTableBodyProps,O=j.headerGroups,F=j.prepareRow,S=j.visibleColumns,G=j.page,R=j.canPreviousPage,E=j.canNextPage,M=j.pageOptions,_=j.pageCount,A=j.gotoPage,D=j.nextPage,B=j.previousPage,H=j.setPageSize,T=j.state,Z=T.pageIndex,z=T.pageSize,L=T.globalFilter,V=j.preGlobalFilteredRows,q=j.setGlobalFilter,I=j.exportData;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("table",w(w({},P()),{},{className:"min-w-full divide-y divide-gray-200 shadow-md",children:[(0,n.jsxs)("thead",{className:"bg-gray-100 dark:bg-gray-800",children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colSpan:S.length,className:"px-4 py-3 text-left text-xs text-gray-700 border-b",children:(0,n.jsxs)("div",{className:"px-4 flex flex-row-reverse text-xs text-gray-700",children:[(0,n.jsxs)("button",{type:"button",className:"inline-flex justify-between items-center uppercase py-2 px-4 m-2 border border-transparent shadow text-sm font-medium rounded-md text-gray-100 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",onClick:function(){I("csv",!0)},children:[(0,n.jsx)(c._8t,{className:"h-5 w-5 mr-1"}),(0,n.jsx)("span",{children:"CSV"})]}),(0,n.jsxs)("button",{type:"button",className:"inline-flex justify-between items-center uppercase py-2 px-4 m-2 border border-transparent shadow text-sm font-medium rounded-md text-gray-100 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",onClick:function(){I("csv",!1)},children:[(0,n.jsx)(c._8t,{className:"h-5 w-5 mr-1"}),(0,n.jsx)("span",{children:"CSV (f)"})]})]})})}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colSpan:S.length,className:"px-4 py-3 text-left text-xs text-gray-700 border-b",children:(0,n.jsx)(p,{filter:L,setFilter:q,preGlobalFilteredRows:V})})}),O.map((function(e){return(0,n.jsx)("tr",w(w({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,n.jsx)("th",w(w({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:"px-1 py-3 text-left text-xs font-medium text-gray-700 dark:text-blue-400 uppercase tracking-wider hover:text-gray-900 dark:hover:text-blue-700",children:(0,n.jsxs)("span",{className:"flex flex-wrap",children:[e.canGroupBy?(0,n.jsx)("span",w(w({},e.getGroupByToggleProps()),{},{className:"text-gray-700 dark:text-gray-50 hover:text-teal-900 dark:hover:text-blue-400 mr-1",children:e.isGrouped?(0,n.jsx)(u.vxs,{className:"w-4 h-4"}):(0,n.jsx)(c.vxs,{className:"w-4 h-4"})})):null,e.render("Header"),e.isSorted?e.isSortedDesc?(0,n.jsx)(u.v4q,{className:"h-4 w-4"}):(0,n.jsx)(u.g8U,{className:"h-4 w-4"}):""]})}))}))}))})),O.map((function(e){return(0,n.jsx)("tr",w(w({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,n.jsx)("th",w(w({},e.getHeaderProps()),{},{className:"px-1 pb-2 text-left text-xs font-medium text-gray-700 dark:text-blue-400 uppercase tracking-wider hover:text-gray-900 dark:hover:text-blue-700",children:(0,n.jsx)("div",{children:!e.isGrouped&&e.canFilter?e.render("Filter"):null})}))}))}))}))]}),(0,n.jsx)("tbody",w(w({},C()),{},{className:"bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-400 flex-1",children:G.map((function(e,r){return F(e),(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)("tr",w(w({},e.getRowProps()),{},{children:e.cells.map((function(r){return(0,n.jsx)("td",w(w({},r.getCellProps()),{},{className:"px-6 py-4 whitespace-nowrap ".concat(r.isGrouped?"bg-blue-400 text-gray-700 dark:text-gray-800":r.isAggregated?"bg-white dark:bg-gray-700 dark:text-gray-50":r.isPlaceholder?"bg-gray-200 dark:bg-gray-800":"bg-white dark:bg-gray-700 dark:text-gray-50"),children:(0,n.jsx)("div",{className:"text-sm text-gray-900 dark:text-gray-100",children:r.isGrouped?(0,n.jsxs)("div",{className:"flex flex-wrap align-middle text-center text-gray-700 dark:text-gray-800 hover:text-teal-900  dark:hover:text-gray-900 ",children:[(0,n.jsx)("span",w(w({},e.getToggleRowExpandedProps()),{},{className:"mr-1",children:e.isExpanded?(0,n.jsx)(u.PYG,{className:"h-5 w-5"}):(0,n.jsx)(u.a3z,{className:"h-5 w-5"})})),(0,n.jsxs)("div",{children:[r.render("Cell")," (",e.subRows.length,")"]})]}):r.isAggregated?(0,n.jsx)("div",{className:"flex flex-wrap align-middle text-center font-semibold",children:r.render("Aggregated")}):r.isPlaceholder?null:r.render("Cell")})}))}))})),0===e.subRows.length&&e.isExpanded?(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:S.length,children:a({row:e})})}):null]},r)}))})),(0,n.jsx)("tfoot",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:S.length,children:(0,n.jsx)("div",{className:"bg-white dark:bg-gray-700 px-4 py-3 w-full flex items-center justify-between border-gray-200",children:(0,n.jsxs)("div",{className:"flex flex-row flex-1 items-center justify-evenly w-full",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("button",{onClick:function(){return A(0)},disabled:!R,className:"relative inline-flex items-center px-2 py-2 rounded-l-md border-l border-b border-t border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400",children:(0,n.jsx)(u.Adx,{className:"h-4 w-4"})}),(0,n.jsx)("button",{onClick:function(){return B()},disabled:!R,className:"relative inline-flex items-center px-2 py-2 border-l border-t border-b border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400",children:(0,n.jsx)(u.wyc,{className:"h-4 w-4"})}),(0,n.jsx)("button",{onClick:function(){return D()},disabled:!E,className:"relative inline-flex items-center px-2 py-2 border-l border-t border-b border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400",children:(0,n.jsx)(u.XCv,{className:"h-4 w-4"})}),(0,n.jsx)("button",{onClick:function(){return A(_-1)},disabled:!E,className:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400",children:(0,n.jsx)(u.a3z,{className:"h-4 w-4"})})]}),(0,n.jsx)("div",{className:"hidden sm:flex sm:items-center sm:justify-between mx-2",children:(0,n.jsx)("div",{children:(0,n.jsxs)("p",{className:"text-sm text-gray-700 dark:text-gray-200",children:["Page",(0,n.jsx)("span",{className:"font-medium mx-2",children:Z+1}),"of"," ",(0,n.jsx)("span",{className:"font-medium mx-2",children:M.length})]})})}),(0,n.jsxs)("span",{className:"hidden sm:flex text-sm items-center text-gray-700 dark:text-gray-200",children:["Go to page",(0,n.jsx)("input",{type:"number",defaultValue:Z+1,onChange:function(e){var r=e.target.value?Number(e.target.value)-1:0;A(r)},className:"py-2 px-3 mx-2 border border-gray-300 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-24"})]}),(0,n.jsx)("select",{value:z,onChange:function(e){H(Number(e.target.value))},className:"py-2 border border-gray-300 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[10,20,30,40,50].map((function(e){return(0,n.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})})})})})]}))})},C=function(e){var r=e.column,t=r.filterValue,a=void 0===t?[]:t,s=r.preFilteredRows,l=r.setFilter,d=r.id,i=o.useMemo((function(){var e=s.length?s[0].values[d]:0,r=s.length?s[0].values[d]:0;return s.forEach((function(t){e=Math.min(t.values[d],e),r=Math.max(t.values[d],r)})),[e,r]}),[d,s]),c=(0,h.Z)(i,2),u=c[0],x=c[1];return(0,n.jsxs)("div",{className:"flex flex-wrap text-gray-700 dark:text-blue-400 text-xs justify-center align-middle text-center items-center",children:[(0,n.jsx)("input",{value:a[0]||"",type:"number",className:"text-xs w-20 px-1 rounded border-gray-400 border py-1 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600",onChange:function(e){var r=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[r?parseInt(r,10):void 0,e[1]]}))},placeholder:"Min (".concat(u,")")}),(0,n.jsx)("div",{className:"p-1",children:"to"}),(0,n.jsx)("input",{value:a[1]||"",type:"number",className:"text-xs w-20 px-1 rounded border-gray-400 border py-1 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600",onChange:function(e){var r=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],r?parseInt(r,10):void 0]}))},placeholder:"Max (".concat(x,")")})]})},O=t(9999),F=function(e){var r=e.column,t=r.filterValue,a=r.setFilter,s=r.preFilteredRows,l=r.id,d=o.useMemo((function(){var e=new Set;return s.forEach((function(r){e.add(r.values[l])})),(0,O.Z)(e.values())}),[l,s]);return(0,n.jsxs)("select",{value:t,onChange:function(e){a(e.target.value||void 0)},className:"text-xs rounded border-gray-400 border dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600",children:[(0,n.jsx)("option",{value:"",children:"All"}),d.map((function(e,r){return(0,n.jsx)("option",{value:e,children:e},r)}))]})};function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function G(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var R=!0,E=function(){return[{Header:function(){return null},id:"expander",Cell:function(e){var r=e.row;return(0,n.jsx)("span",G(G({},r.getToggleRowExpandedProps()),{},{className:"text-gray-700 dark:text-gray-50 hover:text-teal-900 dark:hover:text-teal-accent-400",children:r.isExpanded?(0,n.jsx)(u.v4q,{className:"w-4 h-4"}):(0,n.jsx)(u.XCv,{className:"w-4 h-4"})}))}},{Header:"Repository",accessor:"node.name",disableFilters:!0,aggregate:"uniqueCount",Aggregated:function(e){var r=e.value;return"".concat(r," repos")}},{Header:"Language",accessor:"node.primaryLanguage.name",Filter:F,filter:"text",aggregate:"uniqueCount",Aggregated:function(e){var r=e.value;return"".concat(r," Languages")}},{Header:"Stars",accessor:"node.stargazers.totalCount",Filter:C,filter:"between",aggregate:"average",Aggregated:function(e){var r=e.value;return"".concat(Math.round(100*r)/100," (avg)")}},{Header:"Forks",accessor:"node.forkCount",disableFilters:!0,aggregate:"average",Aggregated:function(e){var r=e.value;return"".concat(Math.round(100*r)/100," (avg)")}},{Header:"Created On",accessor:"node.createdAt",disableFilters:!0,aggregate:"count",Aggregated:function(e){var r=e.value;return"".concat(r," Records")},Cell:function(e){var r=e.value;return(0,s.Z)(new Date(r),"dd/MM/yyyy")}},{Header:"Last Update",accessor:"node.updatedAt",disableFilters:!0,aggregate:"count",Aggregated:function(e){var r=e.value;return"".concat(r," Records")},Cell:function(e){var r=e.value;return(0,s.Z)(new Date(r),"dd/MM/yyyy")}}]};function M(e){var r=e.data.org,t=o.useMemo((function(){return E()}),[]),a=o.useMemo((function(){return r.edges}),[r]),s=o.useMemo((function(){return[]}),[]),d=o.useMemo((function(){return[]}),[]),i=o.useCallback((function(e){var r=e.row;return(0,n.jsx)("pre",{className:"text-xs",children:(0,n.jsx)("code",{children:JSON.stringify({values:r.values},null,2)})})}),[]);return(0,n.jsx)(l.A,{title:"Github Stats",children:(0,n.jsx)("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:(0,n.jsx)("div",{className:"px-4 py-6 sm:px-0",children:(0,n.jsx)(P,{columns:t,data:a,renderRowSubComponent:i,groupBy:s,hiddenColumns:d})})})})}},5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3124)}])}},function(e){e.O(0,[908,192,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);