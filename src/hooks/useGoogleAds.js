import { useEffect } from "react";
export function useGoogleAds(){
    useEffect(() => {
        const googleScript = document.createElement('script');
        googleScript.type="text/javascript";
        googleScript.src="https://www.googletagmanager.com/gtag/js?id=G-Y62EZR4VWP"
        googleScript.async=true
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y62EZR4VWP');
        document.body.appendChild(googleScript);
        return () => {
          document.body.removeChild(googleScript);
        }
    },[])

}