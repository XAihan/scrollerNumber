const g={formatDate(e,n="y-M-d h:m:s"){let t;typeof e=="object"?t=e:(typeof e=="string"&&(/^[0-9]+$/.test(e)?e=parseInt(e):e=e.replace(new RegExp(/-/gm),"/")),typeof e=="number"&&e.toString().length===10&&(e=e*1e3),t=new Date(e));const a={y:t.getFullYear(),M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds(),a:t.getDay()},o=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"];return n.replace(/(y|m|d|h|M|s|a)/g,s=>{let r=a[s];return s==="a"?o[r]:(s&&r<10&&(r="0"+r),r||0)})}};export{g as d};