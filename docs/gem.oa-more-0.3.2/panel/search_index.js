var search_data = {"index":{"info":[["OmniAuth","lib/omniauth/more.rb","classes/OmniAuth.html"," < ","",1],["Strategies","OmniAuth","classes/OmniAuth/Strategies.html"," < ","",1],["Draugiem","OmniAuth::Strategies","classes/OmniAuth/Strategies/Draugiem.html"," < Object","Authenticate to draugiem.lv and frype.com and others. @example Basic Rails Usage Add this to config/initializers/omniauth.rb",1],["Ign","OmniAuth::Strategies","classes/OmniAuth/Strategies/Ign.html"," < Object","",1],["CallbackError","OmniAuth::Strategies::Ign","classes/OmniAuth/Strategies/Ign/CallbackError.html"," < StandardError","",1],["LastFm","OmniAuth::Strategies","classes/OmniAuth/Strategies/LastFm.html"," < Object","Authenticate to LastFM @example Basic Usage use OmniAuth::Strategies::LastFm, 'API Key', 'Secret Key'",1],["CallbackError","OmniAuth::Strategies::LastFm","classes/OmniAuth/Strategies/LastFm/CallbackError.html"," < StandardError","error catching, based on OAuth2 callback ",1],["WindowsLive","OmniAuth::Strategies","classes/OmniAuth/Strategies/WindowsLive.html"," < Object","",1],["WindowsLiveLogin","OmniAuth::Strategies::WindowsLive","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html"," < Object","Helper methods. ",1],["ConsentToken","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/ConsentToken.html"," < Object","",1],["User","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/User.html"," < Object","Holds the user information after a successful sign-in. 'timestamp' is the time as obtained from the SSO",1],["Yupoo","OmniAuth::Strategies","classes/OmniAuth/Strategies/Yupoo.html"," < Object","",1],["CallbackError","OmniAuth::Strategies::Yupoo","classes/OmniAuth/Strategies/Yupoo/CallbackError.html"," < StandardError","",1],["Version","OmniAuth","classes/OmniAuth/Version.html"," < ","",1],["appid","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000033","()","Returns the application ID. ",2],["appid=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000030","(appid)","Sets the application ID. Use this method if you did not specify an application ID at initialization.",2],["auth_hash","OmniAuth::Strategies::Draugiem","classes/OmniAuth/Strategies/Draugiem.html#M000005","()","",2],["auth_hash","OmniAuth::Strategies::Ign","classes/OmniAuth/Strategies/Ign.html#M000009","()","",2],["auth_hash","OmniAuth::Strategies::LastFm","classes/OmniAuth/Strategies/LastFm.html#M000017","()","",2],["auth_hash","OmniAuth::Strategies::Yupoo","classes/OmniAuth/Strategies/Yupoo.html#M000036","()","",2],["baseurl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000044","()","",2],["callback_phase","OmniAuth::Strategies::Draugiem","classes/OmniAuth/Strategies/Draugiem.html#M000002","()","",2],["callback_phase","OmniAuth::Strategies::Ign","classes/OmniAuth/Strategies/Ign.html#M000007","()","",2],["callback_phase","OmniAuth::Strategies::LastFm","classes/OmniAuth/Strategies/LastFm.html#M000016","()","",2],["callback_phase","OmniAuth::Strategies::Yupoo","classes/OmniAuth/Strategies/Yupoo.html#M000032","()","",2],["consenturl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000046","()","",2],["consumer","OmniAuth::Strategies::WindowsLive","classes/OmniAuth/Strategies/WindowsLive.html#M000021","()","",2],["copy","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::ConsentToken","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/ConsentToken.html#M000068","(consenttoken)","Makes a copy of the ConsentToken object. ",2],["debug","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000023","(error)","Stub implementation for logging errors. By default, this function does nothing if the debug flag has",2],["decodeAndValidateToken","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000073","(token, cryptkey=@cryptkey, signkey=@signkey, internal_allow_recursion=true)","Decodes and validates the token. ",2],["decodeToken","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000074","(token, cryptkey=@cryptkey)","Decodes the given token string; returns undef on failure. First, the string is URL-unescaped and base64",2],["delegationtoken=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::ConsentToken","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/ConsentToken.html#M000063","(delegationtoken)","Sets the delegation token. ",2],["derive","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000086","(secret, prefix)","Derives the key, given the secret key and prefix as described in the Web Authentication SDK documentation.",2],["draugiem_authorize_params","OmniAuth::Strategies::Draugiem","classes/OmniAuth/Strategies/Draugiem.html#M000011","(code)","",2],["e64","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000089","(s)","Base64-encodes and URL-escapes a string. ",2],["expiry=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::ConsentToken","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/ConsentToken.html#M000065","(expiry)","Sets the expiry time of the delegation token. ",2],["fatal","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000024","(error)","Stub implementation for handling a fatal error. ",2],["fetch","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000091","(url)","Fetches the contents given a URL. ",2],["flags=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::User","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/User.html#M000053","(flags)","Sets or gets the usePersistentCookie flag for the user. ",2],["getAppLoginUrl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000078","(siteid=nil, ip=nil, js=nil)","Returns the URL that is required to retrieve the application security token. By default, the application",2],["getAppRetCode","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000080","()","Returns a string that can be passed to the getTrustedParams function as the 'retcode' parameter. If this",2],["getAppSecurityToken","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000079","(siteid=nil, ip=nil)","Retrieves the application security token for application verification from the application sign-in URL.",2],["getAppVerifier","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000077","(ip=nil)","Generates an application verifier token. An IP address can optionally be included in the token. ",2],["getClearCookieResponse","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000056","()","Returns an appropriate content type and body response that the application handler can return to signify",2],["getConsentUrl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000057","(offers, context=nil, ru=nil, market=nil)","Returns the consent URL to use for Delegated Authentication for the given comma-delimited list of offers.",2],["getLoginUrl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000047","(context=nil, market=nil)","Returns the sign-in URL to use for the Windows Live Login server. We recommend that you use the Sign",2],["getLogoutUrl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000048","(market=nil)","Returns the sign-out URL to use for the Windows Live Login server. We recommend that you use the Sign",2],["getManageConsentUrl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000059","(market=nil)","Returns the URL for the consent-management user interface. You can change the language in which the consent",2],["getRefreshConsentTokenUrl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000058","(offers, refreshtoken, ru)","Returns the URL to use to download a new consent token, given the offers and refresh token. The registered/configured",2],["getTrustedLoginUrl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000083","()","Returns the trusted sign-in URL to use for the Windows Live Login server. ",2],["getTrustedLogoutUrl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000084","()","Returns the trusted sign-out URL to use for the Windows Live Login server. ",2],["getTrustedParams","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000081","(user, retcode=nil)","Returns a table of key-value pairs that must be posted to the sign-in URL for trusted sign-in. Use HTTP",2],["getTrustedToken","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000082","(user)","Returns the trusted sign-in token in the format that is needed by a control doing trusted sign-in. The",2],["get_user_info","OmniAuth::Strategies::Draugiem","classes/OmniAuth/Strategies/Draugiem.html#M000008","()","",2],["id=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::User","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/User.html#M000052","(id)","Sets or gets the pairwise unique ID for the user. ",2],["initFromXml","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000027","(settingsFile)","Initialize the WindowsLiveLogin module from a settings file. 'settingsFile' specifies the location of",2],["isValid?","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::ConsentToken","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/ConsentToken.html#M000060","()","Indicates whether the delegation token is set and has not expired. ",2],["js","OmniAuth::Strategies::Ign","classes/OmniAuth/Strategies/Ign.html#M000012","()","",2],["locationid=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::ConsentToken","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/ConsentToken.html#M000067","(locationid)","Sets the LocationID. ",2],["new","OmniAuth::Strategies::Draugiem","classes/OmniAuth/Strategies/Draugiem.html#M000000","(app, app_id, api_key)","",2],["new","OmniAuth::Strategies::Ign","classes/OmniAuth/Strategies/Ign.html#M000004","(app, api_key, hostname=nil, options = {})","",2],["new","OmniAuth::Strategies::Ign::CallbackError","classes/OmniAuth/Strategies/Ign/CallbackError.html#M000003","(error, error_reason)","",2],["new","OmniAuth::Strategies::LastFm","classes/OmniAuth/Strategies/LastFm.html#M000014","(app, api_key, secret_key, options = {})","@param [Rack Application] app standard middleware application parameter @param [String] api_key the application",2],["new","OmniAuth::Strategies::LastFm::CallbackError","classes/OmniAuth/Strategies/LastFm/CallbackError.html#M000013","(error, error_reason)","",2],["new","OmniAuth::Strategies::WindowsLive","classes/OmniAuth/Strategies/WindowsLive.html#M000020","(app, app_id = nil, app_secret = nil, options = {})","Initialize the strategy by providing @param app_id [String] The application ID from your registered app",2],["new","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000026","(appid=nil, secret=nil, securityalgorithm=nil, force_delauth_nonprovisioned=nil, policyurl=nil, returnurl=nil)","Initialize the WindowsLiveLogin module with the application ID, secret key, and security algorithm. We",2],["new","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::ConsentToken","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/ConsentToken.html#M000062","(wll, delegationtoken, refreshtoken, sessionkey, expiry, offers, locationid, context, decodedtoken, token)","Initialize the ConsentToken module with the WindowsLiveLogin, delegation token, refresh token, session",2],["new","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::User","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/User.html#M000050","(timestamp, id, flags, context, token)","Initialize the User with time stamp, userid, flags, context and token. ",2],["new","OmniAuth::Strategies::Yupoo","classes/OmniAuth/Strategies/Yupoo.html#M000029","(app, api_key, secret_key, options = {})","",2],["new","OmniAuth::Strategies::Yupoo::CallbackError","classes/OmniAuth/Strategies/Yupoo/CallbackError.html#M000028","(error, error_reason)","",2],["offers=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::ConsentToken","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/ConsentToken.html#M000066","(offers)","Sets the offers/actions for which the user granted consent. ",2],["oldsecret=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000035","(secret)","Sets your old secret key. Use this property to set your old secret key if you are in the process of transitioning",2],["oldsecretexpiry=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000037","(timestamp)","Sets the expiry time for your old secret key. After this time has passed, the old secret key will no",2],["parse","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000087","(input)","Parses query string and return a table {String=>String} If a table is passed in from CGI.params, we convert",2],["parseSettings","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000085","(settingsFile)","Function to parse the settings file. ",2],["policyurl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000041","()","Gets the privacy policy URL for your site. ",2],["policyurl=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000040","(policyurl)","Sets the privacy policy URL, to which the Windows Live ID consent service redirects users to view the",2],["processConsent","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000069","(query)","Processes the POST response from the Delegated Authentication service after a user has granted consent.",2],["processConsentToken","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000070","(token, context=nil)","Processes the consent token string that is returned in the POST response by the Delegated Authentication",2],["processLogin","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000054","(query)","Processes the sign-in response from the Windows Live sign-in server. 'query' contains the preprocessed",2],["processToken","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000055","(token, context=nil)","Decodes and validates a Web Authentication token. Returns a User object on success. If a context is passed",2],["refresh","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::ConsentToken","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/ConsentToken.html#M000061","()","Refreshes the current token and replace it. If operation succeeds true is returned to signify success.",2],["refreshConsentToken","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000071","(consenttoken, ru=nil)","Attempts to obtain a new, refreshed token and return it. The original token is not modified. ",2],["refreshConsentToken2","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000072","(offers_string, refreshtoken, ru=nil)","Helper function to obtain a new, refreshed token and return it. The original token is not modified. ",2],["request_phase","OmniAuth::Strategies::Draugiem","classes/OmniAuth/Strategies/Draugiem.html#M000001","()","",2],["request_phase","OmniAuth::Strategies::Ign","classes/OmniAuth/Strategies/Ign.html#M000006","()","",2],["request_phase","OmniAuth::Strategies::LastFm","classes/OmniAuth/Strategies/LastFm.html#M000015","()","",2],["request_phase","OmniAuth::Strategies::WindowsLive","classes/OmniAuth/Strategies/WindowsLive.html#M000025","()","",2],["request_phase","OmniAuth::Strategies::Yupoo","classes/OmniAuth/Strategies/Yupoo.html#M000031","()","",2],["returnurl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000043","()","Returns the return URL of your site. ",2],["returnurl=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000042","(returnurl)","Sets the return URL--the URL on your site to which the consent service redirects users (along with the",2],["secret=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000034","(secret)","Sets your secret key. Use this method if you did not specify a secret key at initialization. ",2],["secureurl","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000045","()","",2],["securityalgorithm","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000039","()","",2],["sessionkey=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::ConsentToken","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/ConsentToken.html#M000064","(sessionkey)","Sets the session key. ",2],["setDebug","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000022","(flag)","Stub implementation for logging errors. If you want to enable debugging output using the default mechanism,",2],["signToken","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000075","(token, signkey=@signkey)","Creates a signature for the given string by using the signature key. ",2],["signature","OmniAuth::Strategies::LastFm","classes/OmniAuth/Strategies/LastFm.html#M000019","(token)","",2],["timestamp","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000088","()","Generates a time stamp suitable for the application verifier token. ",2],["timestamp=","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::User","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/User.html#M000051","(timestamp)","Sets or gets the Unix timestamp as obtained from the SSO token. ",2],["u64","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000090","(s)","URL-unescapes and Base64-decodes a string. ",2],["usePersistentCookie?","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin::User","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin/User.html#M000049","()","",2],["user_info","OmniAuth::Strategies::Ign","classes/OmniAuth/Strategies/Ign.html#M000010","()","",2],["user_info","OmniAuth::Strategies::LastFm","classes/OmniAuth/Strategies/LastFm.html#M000018","()","",2],["validateToken","OmniAuth::Strategies::WindowsLive::WindowsLiveLogin","classes/OmniAuth/Strategies/WindowsLive/WindowsLiveLogin.html#M000076","(token, signkey=@signkey)","Extracts the signature from the token and validates it. ",2],["yupoo_sign","OmniAuth::Strategies::Yupoo","classes/OmniAuth/Strategies/Yupoo.html#M000038","(params)","",2],["LICENSE","files/LICENSE.html","files/LICENSE.html","","Copyright (c) 2010-2011 Michael Bleigh and Intridea, Inc.  Permission is hereby granted, free of charge,",3],["README.rdoc","files/README_rdoc.html","files/README_rdoc.html","","= OmniAuth::More  OmniAuth stratgies for authentication providers that do not fit into one of the other",3],["oa-more.rb","files/lib/oa-more_rb.html","files/lib/oa-more_rb.html","","",3],["more.rb","files/lib/omniauth/more_rb.html","files/lib/omniauth/more_rb.html","","",3],["draugiem.rb","files/lib/omniauth/strategies/draugiem_rb.html","files/lib/omniauth/strategies/draugiem_rb.html","","",3],["ign.rb","files/lib/omniauth/strategies/ign_rb.html","files/lib/omniauth/strategies/ign_rb.html","","",3],["last_fm.rb","files/lib/omniauth/strategies/last_fm_rb.html","files/lib/omniauth/strategies/last_fm_rb.html","","",3],["windows_live.rb","files/lib/omniauth/strategies/windows_live_rb.html","files/lib/omniauth/strategies/windows_live_rb.html","","",3],["windowslivelogin.rb","files/lib/omniauth/strategies/windows_live/windowslivelogin_rb.html","files/lib/omniauth/strategies/windows_live/windowslivelogin_rb.html","","FILE:        windowslivelogin.rb DESCRIPTION: Sample implementation of Web Authentication and Delegated",3],["yupoo.rb","files/lib/omniauth/strategies/yupoo_rb.html","files/lib/omniauth/strategies/yupoo_rb.html","","",3],["version.rb","files/lib/omniauth/version_rb.html","files/lib/omniauth/version_rb.html","","",3]],"searchIndex":["omniauth","strategies","draugiem","ign","callbackerror","lastfm","callbackerror","windowslive","windowslivelogin","consenttoken","user","yupoo","callbackerror","version","appid()","appid=()","auth_hash()","auth_hash()","auth_hash()","auth_hash()","baseurl()","callback_phase()","callback_phase()","callback_phase()","callback_phase()","consenturl()","consumer()","copy()","debug()","decodeandvalidatetoken()","decodetoken()","delegationtoken=()","derive()","draugiem_authorize_params()","e64()","expiry=()","fatal()","fetch()","flags=()","getapploginurl()","getappretcode()","getappsecuritytoken()","getappverifier()","getclearcookieresponse()","getconsenturl()","getloginurl()","getlogouturl()","getmanageconsenturl()","getrefreshconsenttokenurl()","gettrustedloginurl()","gettrustedlogouturl()","gettrustedparams()","gettrustedtoken()","get_user_info()","id=()","initfromxml()","isvalid?()","js()","locationid=()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","offers=()","oldsecret=()","oldsecretexpiry=()","parse()","parsesettings()","policyurl()","policyurl=()","processconsent()","processconsenttoken()","processlogin()","processtoken()","refresh()","refreshconsenttoken()","refreshconsenttoken2()","request_phase()","request_phase()","request_phase()","request_phase()","request_phase()","returnurl()","returnurl=()","secret=()","secureurl()","securityalgorithm()","sessionkey=()","setdebug()","signtoken()","signature()","timestamp()","timestamp=()","u64()","usepersistentcookie?()","user_info()","user_info()","validatetoken()","yupoo_sign()","license","readme.rdoc","oa-more.rb","more.rb","draugiem.rb","ign.rb","last_fm.rb","windows_live.rb","windowslivelogin.rb","yupoo.rb","version.rb"],"longSearchIndex":["lib/omniauth/version.rb","omniauth","omniauth::strategies","omniauth::strategies","omniauth::strategies::ign","omniauth::strategies","omniauth::strategies::lastfm","omniauth::strategies","omniauth::strategies::windowslive","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies","omniauth::strategies::yupoo","omniauth","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::draugiem","omniauth::strategies::ign","omniauth::strategies::lastfm","omniauth::strategies::yupoo","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::draugiem","omniauth::strategies::ign","omniauth::strategies::lastfm","omniauth::strategies::yupoo","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive","omniauth::strategies::windowslive::windowslivelogin::consenttoken","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin::consenttoken","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::draugiem","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin::consenttoken","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin::user","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::draugiem","omniauth::strategies::windowslive::windowslivelogin::user","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin::consenttoken","omniauth::strategies::ign","omniauth::strategies::windowslive::windowslivelogin::consenttoken","omniauth::strategies::draugiem","omniauth::strategies::ign","omniauth::strategies::ign::callbackerror","omniauth::strategies::lastfm","omniauth::strategies::lastfm::callbackerror","omniauth::strategies::windowslive","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin::consenttoken","omniauth::strategies::windowslive::windowslivelogin::user","omniauth::strategies::yupoo","omniauth::strategies::yupoo::callbackerror","omniauth::strategies::windowslive::windowslivelogin::consenttoken","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin::consenttoken","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::draugiem","omniauth::strategies::ign","omniauth::strategies::lastfm","omniauth::strategies::windowslive","omniauth::strategies::yupoo","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin::consenttoken","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::lastfm","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin::user","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::windowslive::windowslivelogin::user","omniauth::strategies::ign","omniauth::strategies::lastfm","omniauth::strategies::windowslive::windowslivelogin","omniauth::strategies::yupoo","files/license.html","files/readme_rdoc.html","files/lib/oa-more_rb.html","files/lib/omniauth/more_rb.html","files/lib/omniauth/strategies/draugiem_rb.html","files/lib/omniauth/strategies/ign_rb.html","files/lib/omniauth/strategies/last_fm_rb.html","files/lib/omniauth/strategies/windows_live_rb.html","files/lib/omniauth/strategies/windows_live/windowslivelogin_rb.html","files/lib/omniauth/strategies/yupoo_rb.html","files/lib/omniauth/version_rb.html"]}}