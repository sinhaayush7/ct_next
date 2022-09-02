import '../styles/globals.css'
import {useEffect, useState} from 'react'
function MyApp({ Component, pageProps }) {
  const [ct, setCt] = useState(null)
  useEffect(() => {
  (function () {
    let clevertap = ({event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]})
    clevertap.account.push({"id": "<YOUR ACC ID>"});
    clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
    clevertap.privacy.push({useIP: false});
    setCt(clevertap)
    if (typeof window !== undefined) {
      var wzrk = document.createElement('script');
      wzrk.type = 'text/javascript';
      wzrk.async = true;
      console.log(document)
      wzrk.src = 'https://d2r1yp2w7bby2u.cloudfront.net/js/clevertap.min.js';
      var s = window.document.getElementsByTagName('script')[0];
      console.log(s)
      s.parentNode.insertBefore(wzrk, s);
    }
  })()
}, [])


  return <Component {...pageProps} clevertap={ct} />
}

export default MyApp
