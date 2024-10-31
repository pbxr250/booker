
interface WindowExtended extends Window {
    Telegram?: any
}

const windowExt : WindowExtended = window


//console.log(windowExt.Telegram.WebApp.initData)
//console.log(windowExt.Telegram.WebApp.initDataUnsafe)

export const tgWebApp = windowExt.Telegram.WebApp