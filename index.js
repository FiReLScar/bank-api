let axios = require('axios')
let fs = require('fs')

let Session = {
    ID: '',
    ScriptManagerContent: '',
    TabLogin: '',
    EventTarget_: '',
    EventArgument_: '',
    ViewState: '',
    ViewStateGenerator: '',
    EventValidation: '',
    KeyID: '',
    SecureCookieKey: '',
    Question: '',
    Answer: '',
    Username: ''
}

let Data = {
    Accounts: []
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
    Session.Username = username
}

let Password = async password => {
    Session.SecureCookieKey = "Secure_" + Session.Username
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
            "Cookie": Session.SecureCookieKey+"=Test_Cookie50=Test to see if standard cookies are enabled.; ASP.NET_SessionId="+Session.ID,
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
    Session.EventTarget_ = new RegExp(/<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="(.*)" \/>/).exec(response.data)[1]
    Session.EventArgument_ = new RegExp(/<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="(.*)" \/>/).exec(response.data)[1]
    Session.ViewState = new RegExp(/<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="(.*)" \/>/).exec(response.data)[1]
    Session.ViewStateGenerator = new RegExp(/<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="(.*)" \/>/).exec(response.data)[1]
    Session.EventValidation = new RegExp(/<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="(.*)" \/>/).exec(response.data)[1]
    Session.TabLogin = Session.TabLogin.replace(/&quot;/g, '"')
    Session.Question = new RegExp(/<label for="TFAQuestionPrompt1_Answer" id="TFAQuestionPrompt1_Question">(.*)<\/label>/).exec(response.data)[1]
    Session.KeyID = new RegExp(/<input type="hidden" name="KeyID" value="(.*)" \/>/).exec(response.data)[1]
}

let Question = async () => {
    let response = await axios.post('https://www.w-w-i-s.com/hb/51/login.aspx?KeyID='+Session.KeyID+'&flash=no', {
        "__EVENTTARGET": "",
        "__EVENTARGUMENT": "",
        "__VIEWSTATE": Session.ViewState,
        "__VIEWSTATEGENERATOR": Session.ViewStateGenerator,
        "__EVENTVALIDATION": Session.EventValidation,
        "KeyID": Session.KeyID,
        "TFAQuestionPrompt1$Answer": Session.Answer,
        "TFAQuestionPrompt1$cmdTFAQuestionsCont": "Continue"
    }, {
        headers: {
            "Host": "www.w-w-i-s.com",
            "Cookie": Session.SecureCookieKey+"=Test_Cookie50=Test to see if standard cookies are enabled.; ASP.NET_SessionId="+Session.ID,
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
            "Referer": 'https://www.w-w-i-s.com/hb/51/login.aspx?KeyID='+Session.KeyID+'&flash=no',
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9"
        }
    })
    // save session data
    Session.EventTarget_ = new RegExp(/<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="(.*)" \/>/).exec(response.data)[1]
    Session.EventArgument_ = new RegExp(/<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="(.*)" \/>/).exec(response.data)[1]
    Session.ViewState = new RegExp(/<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="(.*)" \/>/).exec(response.data)[1]
    Session.ViewStateGenerator = new RegExp(/<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="(.*)" \/>/).exec(response.data)[1]
    Session.EventValidation = new RegExp(/<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="(.*)" \/>/).exec(response.data)[1]
    Session.TabLogin = Session.TabLogin.replace(/&quot;/g, '"')
    Session.KeyID = new RegExp(/<input type="hidden" name="KeyID" value="(.*)" \/>/).exec(response.data)[1]
    let accept = await axios.post('https://www.w-w-i-s.com/hb/51/login.aspx?KeyID='+Session.KeyID+'&flash=no', {
        "__EVENTTARGET": Session.EventTarget_,
        "__EVENTARGUMENT": Session.EventArgument_,
        "__VIEWSTATE": Session.ViewState,
        "__VIEWSTATEGENERATOR": Session.ViewStateGenerator,
        "__EVENTVALIDATION": Session.EventValidation,
        "KeyID": Session.KeyID,
        "cmdNoPromptContinue": "Continue"
    }, {
        headers: {
            "Host": "www.w-w-i-s.com",
            "Cookie": Session.SecureCookieKey+"=Test_Cookie50=Test to see if standard cookies are enabled.; ASP.NET_SessionId="+Session.ID,
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
            "Referer": 'https://www.w-w-i-s.com/hb/51/login.aspx?KeyID='+Session.KeyID+'&flash=no',
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9"
        }
    })
    Session.EventTarget_ = new RegExp(/<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="(.*)" \/>/).exec(accept.data)[1]
    Session.EventArgument_ = new RegExp(/<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="(.*)" \/>/).exec(accept.data)[1]
    Session.ViewState = new RegExp(/<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="(.*)" \/>/).exec(accept.data)[1]
    Session.EventValidation = new RegExp(/<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="(.*)" \/>/).exec(accept.data)[1]
    Session.TabLogin = Session.TabLogin.replace(/&quot;/g, '"')
    let page = accept.data
    let matches = page.match(/<td><a id="Landing1_AccountBox1_AccountRepeater_ctl[0-9][0-9]_History" href="(.*)">(.*)<\/a><\/td>/gi)
    for (let match of matches) {
        let id = new RegExp(/ctl[0-9][0-9]/).exec(match)[0]
        let account = new RegExp(/href="(.*)">(.*)<\/a><\/td>/).exec(match)[2]
        let penbal = new RegExp('<td id="Landing1_AccountBox1_AccountRepeater_'+id+'_BalCol1TCell" class="Money">(.*)<\/td>').exec(page)[1]
        let bal = new RegExp('<td id="Landing1_AccountBox1_AccountRepeater_'+id+'_BalCol1TCell" class="Money">.*<\\/td>[\\n\\s]+<td class="Money">((-|)\\$[0-9.]+)').exec(page)[1]
        Data.Accounts.push({
            id: id,
            account: account,
            penbal: penbal,
            bal: bal
        })
    }
}

let UpdateBalance = async () => {
    let response = await axios.post('https://www.w-w-i-s.com/hb/51/Account.aspx?KeyID='+Session.KeyID, {
        "ScriptManagerContent": "ScriptManagerContent|lkViewAccounts",
        "ScriptManagerContent_HiddenField": "",
        "KeyID": Session.KeyID,
        "__EVENTTARGET": "lkViewAccounts",
        "__EVENTARGUMENT": "",
        "__LASTFOCUS": "",
        "__VIEWSTATEKEY": "ViewState_3",
        "__VIEWSTATE": "",
        "__EVENTVALIDATION": Session.EventValidation,
        "__ASYNCPOST": "true",
    }, {
        headers: {
            "Host": "www.w-w-i-s.com",
            "Cookie": Session.SecureCookieKey+"=Test_Cookie50=Test to see if standard cookies are enabled.; ASP.NET_SessionId="+Session.ID,
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
            "Referer": 'https://www.w-w-i-s.com/hb/51/login.aspx?KeyID='+Session.KeyID+'&flash=no',
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9"
        }
    })
    let page = response.data
    let matches = page.match(/<td><a id="Landing1_AccountBox1_AccountRepeater_ctl[0-9][0-9]_History" href="(.*)">(.*)<\/a><\/td>/gi)
    Data.Accounts = []
    for (let match of matches) {
        let id = new RegExp(/ctl[0-9][0-9]/).exec(match)[0]
        let account = new RegExp(/href="(.*)">(.*)<\/a><\/td>/).exec(match)[2]
        let penbal = new RegExp('<td id="Landing1_AccountBox1_AccountRepeater_'+id+'_BalCol1TCell" class="Money">(.*)<\/td>').exec(page)[1]
        let bal = new RegExp('<td id="Landing1_AccountBox1_AccountRepeater_'+id+'_BalCol1TCell" class="Money">.*<\\/td>[\\n\\s]+<td class="Money">((-|)\\$[0-9.]+)').exec(page)[1]
        Data.Accounts.push({
            id: id,
            account: account,
            penbal: penbal,
            bal: bal
        })
    }
}

let GetHistory = async (id) => {
    let response = await axios.post('https://www.w-w-i-s.com/hb/51/Account.aspx?KeyID='+Session.KeyID, {
        "ScriptManagerContent": "UpdatePanelContentSection|Landing1$AccountBox1$AccountRepeater$"+id+"$History",
        "ScriptManagerContent_HiddenField": "",
        "__EVENTTARGET": "Landing1$AccountBox1$AccountRepeater$"+id+"$History",
        "__EVENTARGUMENT": "",
        "__VIEWSTATEKEY": "ViewState_1",
        "__VIEWSTATE": "",
        "__EVENTVALIDATION": Session.EventValidation,
        "KeyID": Session.KeyID,
        "__ASYNCPOST": "true",
    }, {
        headers: {
            "Host": "www.w-w-i-s.com",
            "Cookie": Session.SecureCookieKey+"=Test_Cookie50=Test to see if standard cookies are enabled.; ASP.NET_SessionId="+Session.ID,
            "Cache-Control": "max-age=0",
            "Sec-Ch-Ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
            "Sec-Ch-Ua-Mobile": "?0",
            "Sec-Ch-Ua-Platform": "Windows",
            "Upgrade-Insecure-Requests": parseInt(id.substring(3)),
            "Origin": "https://www.w-w-i-s.com",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.5304.107 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Referer": 'https://www.w-w-i-s.com/hb/51/Account.aspx?KeyID='+Session.KeyID,
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9"
        }
    })
    let page = response.data
    let PendTransDiv = page.indexOf('<div id="HistoryBox1_PendTransactionsDiv">')+'<div id="HistoryBox1_PendTransactionsDiv">'.length
    let PendTransEnd = page.indexOf('</div>', PendTransDiv)
    let PendTable = page.substring(PendTransDiv, PendTransEnd)
    let matches = PendTable.match(/<td><a id="HistoryBox1_PendTransactionsGrid_ctl[0-9][0-9]_PendDateLink" href=".*">([0-9]+\/[0-9]+\/[0-9]*)<br>.*<\/a><\/td><td>(.*)<\/td><td class="Money">(&nbsp;|\$[0-9.]+)<\/td><td class="Money">(&nbsp;|\$[0-9.]+)<\/td>/gi)
    let transactions = []
    if (matches!=null) {
        for (let match of matches) {
            let data = new RegExp(/<td><a id="HistoryBox1_PendTransactionsGrid_ctl[0-9][0-9]_PendDateLink" href=".*">([0-9]+\/[0-9]+\/[0-9]*)<br>.*<\/a><\/td><td>(.*)<\/td><td class="Money">(&nbsp;|(-|)\$[0-9.]+)<\/td><td class="Money">(&nbsp;|(-|)\$[0-9.]+)<\/td>/gi).exec(match)
            let date = data[1]
            let desc = data[2]
            let money = data[3]=="&nbsp;"?data[5]:data[3]
            console.log(data[1], data[2], data[3], data[4], data[5], data[6], data[7])
            transactions.push({
                date: date,
                desc: desc,
                money: money,
                balance: null,
                pending: true
            })
        }
    }
    matches = page.match(/<td><a id="HistoryBox1_LastTransactionGrid_ctl[0-9]+_HistDateLink" href=".*">([0-9]+\/[0-9]+\/[0-9]+)<\/a>\s*<\/td><td>(.*)<\/td><td class="Money">(-\$[0-9.]+|)<\/td><td class="Money">(\$[0-9.]+|)<\/td><td class="Money">((-|)\$[0-9.]+|)<\/td>/gi)
    if (matches!=null) {
        for (let match of matches) {
            let data = new RegExp(/<td><a id="HistoryBox1_LastTransactionGrid_ctl[0-9]+_HistDateLink" href=".*">([0-9]+\/[0-9]+\/[0-9]+)<\/a>\s*<\/td><td>(.*)<\/td><td class="Money">(-\$[0-9.]+|)<\/td><td class="Money">(\$[0-9.]+|)<\/td><td class="Money">((-|)\$[0-9.]+|)<\/td>/gi).exec(match)
            let date = data[1]
            let desc = data[2]
            let money = data[3]==""?data[4]:data[3]
            let balance = data[5]
            transactions.push({
                date: date,
                desc: desc,
                money: money,
                balance: balance,
                pending: false
            })
        }
    }
    console.log(transactions)
}

let prompt = require('prompt-sync')();

let Login = async (username, password) => {
    console.log("Creating Session...")
    await CreateSession()
    console.log("Setting Username...")
    await Username(username)
    console.log("Setting Password...")
    await Password(password)
    console.log("Logging in...")
    let questions
    if (fs.existsSync('questions.json')) {
        questions = JSON.parse(fs.readFileSync('questions.json'))
    } else {
        questions = {}
    }
    if (questions[username] == undefined || questions[username][Session.Question] == undefined) {
        console.log(Session.Question)
        Session.Answer = prompt('Answer: ')
        if (questions[username] == undefined) questions[username] = {}
        questions[username][Session.Question] = Session.Answer
    } else {
        Session.Answer = questions[username][Session.Question]
    }
    console.log("Answering Question...")
    await Question()
    console.log(Session)
    fs.writeFile('questions.json', JSON.stringify(questions), () => {})
    console.log("Updating Balance...")
    await UpdateBalance()
    console.log(Data)
    console.log("Getting History...")
    await GetHistory(Data.Accounts[1].id)
}

require('dotenv').config()
Login(process.env.USERNAME, process.env.PASSWORD)