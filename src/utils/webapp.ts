
interface WindowExtended extends Window {
    Telegram?: any
}

const windowExt : WindowExtended = window

export const userdata = {
    user: '',
    username: '',
    query_id: ''
}

export enum MODE { Customer = 'Customer', Vendor = 'Vendor', IncorrectMode = 'IncorrectMode'}

userdata.user = windowExt.Telegram?.WebApp?.initDataUnsafe?.user?.id ?? ''
userdata.username = windowExt.Telegram?.WebApp?.initDataUnsafe?.user?.username ?? ''
userdata.query_id = windowExt.Telegram?.WebApp?.initDataUnsafe?.query_id ?? ''

// href="/booker/startapp?mode=client" values = {client, vendor}
export const mode = (( value: string ) => {
    if ( value === 'customer' )
        return MODE.Customer
    if ( value === 'vendor' )
        return MODE.Vendor
    return MODE.IncorrectMode
})( windowExt.location.search.split('=')[1])


console.log(`Debug log from webapp.ts,href: ${windowExt.location.href} `)
console.log(`Debug log from webapp.ts, MODE: ${mode} `)
console.log(`Debug log from webapp.ts, initstring: ${windowExt.Telegram?.WebApp?.initData}`)
console.log(`Debug log from webapp.ts, userdata: ${userdata.user} ${userdata.username} ${userdata.query_id}`)
//console.log('Debug log from webapp.ts' + windowExt.Telegram.WebApp.initDataUnsafe)


export const tgWebApp = windowExt.Telegram.WebApp