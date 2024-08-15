import "./CookieBanner.css"
import { CookieBannerProps } from "../../data/Interfaces.ts"
import Cookies from "js-cookie"
import React from "react"

function handleAcceptCookies(setCookieConsent: React.Dispatch<React.SetStateAction<string | undefined>>) {
  Cookies.set("cookieConsent", 'true');
  setCookieConsent('true');
}

function handleRejectCookies(setCookieConsent: React.Dispatch<React.SetStateAction<string | undefined>>) {
  Cookies.set("cookieConsent", 'false');
  setCookieConsent('false');
}

function CookieBanner(props: CookieBannerProps) {
  return (
    <div className={"cookie-banner-main"}>
      <p>
        With your consent, this website uses cookies to improve your experience.
      </p>
      <div className={"cookie-banner-main-buttons"}>
        <button onClick={() => handleRejectCookies(props.setCookieConsent)}>Reject</button>
        <button onClick={() => handleAcceptCookies(props.setCookieConsent)}>Accept</button>
      </div>
    </div>

  )
}

export default CookieBanner;