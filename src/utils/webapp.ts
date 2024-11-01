
interface WindowExtended extends Window {
    Telegram?: any
}

const windowExt : WindowExtended = window

export const userdata = {
    user: '',
    username: '',
    query_id: ''
}

userdata.user = windowExt.Telegram?.WebApp?.initDataUnsafe?.user?.id ?? ''
userdata.username = windowExt.Telegram?.WebApp?.initDataUnsafe?.user?.username ?? ''
userdata.query_id = windowExt.Telegram?.WebApp?.initDataUnsafe?.user?.query_id ?? ''

console.log(`Debug log from webapp.ts, initstring: ${windowExt.Telegram?.WebApp?.initData}`)
console.log(`Debug log from webapp.ts, userdata: ${userdata.user} ${userdata.username} ${userdata.query_id}`)
//console.log('Debug log from webapp.ts' + windowExt.Telegram.WebApp.initDataUnsafe)

export const tgWebApp = windowExt.Telegram.WebApp