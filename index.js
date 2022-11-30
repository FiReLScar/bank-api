let axios = require('axios')

let Session = {
    ID: '', ScriptManagerContent: '', TabLogin: '', EventTarget_: '', EventArgument_: '', ViewState: '', ViewStateGenerator: '', EventValidation: '', KeyID: '', SecureCookieKey: ''
}

let CreateSession = async () => {
    let response = await axios.get('https://www.w-w-i-s.com/hb/51/Default.aspx?entity=UYCI]', {
        headers: {
            "Host": "www.w-w-i-s.com",
            "Sec-Ch-Ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
            "Sec-Ch-Ua-Mobile": "?0",
            "Sec-Ch-Ua-Platform": "Windows",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.5304.107 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Connection": "close"
        }
    })
    Session.ID = response.headers['set-cookie'][0].split(';')[0].split('=')[1]
    Session.ScriptManagerContent = ";;AjaxControlToolkit, Version=3.5.50401.0, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e:en-US:beac0bd6-6280-4a04-80bd-83d08f77c177:de1feab2:f9cec9bc:a0b0f951:a67c2700"
    Session.TabLogin = new RegExp(/<input type="hidden" name="tabLogin_ClientState" id="tabLogin_ClientState" value="(.*)" \/>/).exec(response.data)[1]
    Session.EventTarget_ = new RegExp(/<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="(.*)" \/>/).exec(response.data)[1]
    Session.EventArgument_ = new RegExp(/<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="(.*)" \/>/).exec(response.data)[1]
    Session.ViewState = new RegExp(/<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="(.*)" \/>/).exec(response.data)[1]
    Session.ViewStateGenerator = new RegExp(/<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="(.*)" \/>/).exec(response.data)[1]
    Session.EventValidation = new RegExp(/<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="(.*)" \/>/).exec(response.data)[1]
    Session.KeyID = new RegExp(/<input type="hidden" name="KeyID" id="KeyID" value="(.*)" \/>/).exec(response.data)[1]
    Session.TabLogin = Session.TabLogin.replace(/&quot;/g, '"')
}

let Username = async username => {
    let response = await axios.post('https://www.w-w-i-s.com/hb/51/Default.aspx?entity=UYCI]', {
        "ScriptManagerContent_HiddenField": Session.ScriptManagerContent,
        "tabLogin_ClientState": Session.TabLogin,
        "__EVENTTARGET": Session.EventTarget_,
        "__EVENTARGUMENT": Session.EventArgument_,
        "__VIEWSTATE": Session.ViewState,
        "__VIEWSTATEGENERATOR": Session.ViewStateGenerator,
        "__EVENTVALIDATION": Session.EventValidation,
        "tabLogin$tbcLogin$txtUsername": username,
        "tabLogin$tbcLogin$cmdLoginEX": "Login",
        "tabLogin$tbcNewUserTab$txtNewUsername": "",
        "tabLogin$tbcNewUserTab$txtNewPassword1": "",
        "tabLogin$tbcNewUserTab$txtNewPassword2": "", 
        "tabLogin$tbcNewUserTab$txtInfo1": "", 
        "tabLogin$tbcNewUserTab$txtInfo2": "", 
        "tabLogin$tbcForgotPasswd$txtForgotPwdUsername": "",
        "KeyID": Session.KeyID
    }, {
        headers: {
            "Host": "www.w-w-i-s.com",
            "Cookie": "ASP.NET_SessionId="+Session.ID,
            "Cache-Control": "max-age=0",
            "Sec-Ch-Ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
            "Sec-Ch-Ua-Mobile": "?0",
            "Sec-Ch-Ua-Platform": "Windows",
            "Upgrade-Insecure-Requests": "1",
            "Origin": "https://www.w-w-i-s.com",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.5304.107 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Referer": "https://www.w-w-i-s.com/hb/51/Default.aspx?entity=UYCI]",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9"
        }
    })
    Session.ScriptManagerContent = new RegExp(/<input type="hidden" name="ScriptManagerContent_HiddenField" id="ScriptManagerContent_HiddenField" value="(.*)" \/>/).exec(response.data)[1]
    Session.TabLogin = new RegExp(/<input type="hidden" name="tabLogin_ClientState" id="tabLogin_ClientState" value="(.*)" \/>/).exec(response.data)[1]
    Session.EventTarget_ = new RegExp(/<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="(.*)" \/>/).exec(response.data)[1]
    Session.EventArgument_ = new RegExp(/<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="(.*)" \/>/).exec(response.data)[1]
    Session.ViewState = new RegExp(/<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="(.*)" \/>/).exec(response.data)[1]
    Session.ViewStateGenerator = new RegExp(/<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="(.*)" \/>/).exec(response.data)[1]
    Session.EventValidation = new RegExp(/<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="(.*)" \/>/).exec(response.data)[1]
    Session.KeyID = new RegExp(/<input type="hidden" name="KeyID" id="KeyID" value="(.*)" \/>/).exec(response.data)[1]
    Session.TabLogin = Session.TabLogin.replace(/&quot;/g, '"')
}

let Password = async password => {
    let response = await axios.post('https://www.w-w-i-s.com/hb/51/Default.aspx?entity=UYCI]', {
        "ScriptManagerContent_HiddenField": "",
        "tabLogin_ClientState": Session.TabLogin,
        "__EVENTTARGET": Session.EventTarget_,
        "__EVENTARGUMENT": Session.EventArgument_,
        "__VIEWSTATE": Session.ViewState,
        "__VIEWSTATEGENERATOR": Session.ViewStateGenerator,
        "__EVENTVALIDATION": Session.EventValidation,
        "tabLogin$tbcLogin$txtPassword": password,
        "tabLogin$tbcLogin$cmdLoginEX": "Login",
        "tabLogin$tbcNewUserTab$txtNewUsername": "",
        "tabLogin$tbcNewUserTab$txtNewPassword1": "",
        "tabLogin$tbcNewUserTab$txtNewPassword2": "",
        "tabLogin$tbcNewUserTab$txtInfo1": "",
        "tabLogin$tbcNewUserTab$txtInfo2": "",
        "tabLogin$tbcForgotPasswd$txtForgotPwdUsername": "",
        "KeyID": Session.KeyID
    }, {
        headers: {
            "Host": "www.w-w-i-s.com",
            "Cookie": "ASP.NET_SessionId="+Session.ID,
            "Cache-Control": "max-age=0",
            "Sec-Ch-Ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
            "Sec-Ch-Ua-Mobile": "?0",
            "Sec-Ch-Ua-Platform": "Windows",
            "Upgrade-Insecure-Requests": "1",
            "Origin": "https://www.w-w-i-s.com",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.5304.107 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Referer": "https://www.w-w-i-s.com/hb/51/Default.aspx?entity=UYCI%5d",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9"
        }
    })
    console.log(response)
}


let Login = async (username, password) => {
    await CreateSession()
    await Username(username)
    await Password(password)
    console.log(Session)
}

Login('username', 'password')