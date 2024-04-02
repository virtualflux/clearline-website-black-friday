import { useEffect } from 'react';

export const useSalesIQ = (url, widgetCode) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.type="text/javascript";
    let code=`var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {mode:"async", widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`
    script.append(document.createTextNode(code))
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

