 "use strict";
 const proces = require('process') 
 proces.on('uncaughtException', console.error)
 
 const { 
 default: 
   makeWASocket,
   useSingleFileAuthState,
   DisconnectReason,
   fetchLatestBaileysVersion,
   makeInMemoryStore,
   jidDecode
 } = require('@adiwajshing/baileys');
 
  
 const PhoneNumber = require('awesome-phonenumber')
 const spin = require('spinnies')
 const { Boom } = require('@hapi/boom')   
 const fs = require('fs')      
 const pino = require ('pino'); 
 const CFonts = require('cfonts');
 const Options = require('./FunctionMD/settings/options.js')
 const { info } = Options
 var corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"]
 const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
 const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	

 const { color, bgcolor, ConsoleLog, getBuffer } = require('./FunctionMD/function.js')
 const { state, saveState } = useSingleFileAuthState('./auth_info_multi.json');    
 const { groupResponse } = require('./FunctionMD/response/group.js')
 const { move } = require('./FunctionMD/base/mybase')
 const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
 const moment = require("moment-timezone")
 const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss | DD/MM')
 const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
 

 
 try{
 async function connectToWhatsApp () {
console.log(color(`\n\n\n\nπiago dominaππ`, 'red'))
setTimeout( () => {
 CFonts.say(info.botName, {
	font: 'chrome',
	align: 'center',
	colors: ['red'],
	background: 'black',
	letterSpacing: 1,
	space: true,
 });
 CFonts.say(`iago`, {
	font: 'console',
	align: 'center',
	colors: ['red'],
	background: 'transparent',
	letterSpacing: 1,
	space: true,
 });
console.log(`
βββββββββββββββα³
ββCriador: iago
β
ββInstagram: @iago_cardoso__
β
ββNumero: ${info.ownernmr}
β
ββYoutube: https://youtube.com/channel/UCONoMCw8a2weLcUSHNRwP2g
β
ββVercao: ${info.version}
βββββββββββββββα³\n\n
Bot concetado e pronto pra usar\n
`)

}, 500)
      
 const { version } = await fetchLatestBaileysVersion()  
 const sock = makeWASocket({ 
   logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['NT DRAGON-MD 7.0.6 by iago', 'Aloha', '5.4'],
        auth: state,
        version
 })
 
 store.bind(sock.ev) 
 sock.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {}
          return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    
   sock.sendContact = (jid, numbers, name, quoted, mbuh) => {
	 let number = numbers.replace(/[^0-9]/g, '')
     const vcard = 'BEGIN:VCARD\n' 
     + 'VERSION:3.0\n' 
     + 'FN:' + name + '\n'
	 + 'ORG:;\n'
	 + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
	 + 'END:VCARD'
  	 return sock.sendMessage(jid, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mbuh ? mbuh : []},{ quoted: quoted })
   }
    
 sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect } = update

      if (connection === 'open'){
      sock.sendMessage(`15874108061@s.whatsapp.net`, {text: `β­ββββββββ β’ β β’ ββββββββββ\nβ                         ππ΄ππΌπππ\nβββββββββ β’ β β’ ββββββββββ\nβ\nβ\nβπ πππ‘ ππ π·ππ΄πΊππ-ππ· ππ π‘π πππππ‘πππ ππππ !β\nβ\nβ\nββπ΅ππ‘ ππππππ πππ π π ππ’ππππ!\nβ\nβ\nβπ»πππ΄: β±οΈ ${time} β±οΈ\nβ\nβ°ββββββββ β’ β β’ ββββββββββ`})
             }                         	             
       if (connection === 'close') {
         let messageconnect = new Boom(lastDisconnect?.error)?.output.statusCode
            if (messageconnect === DisconnectReason.badSession) { 
               console.log(`Opa foi mal mais nΓ£o acho o arquivo do qr por favor re-escanei o qrπ`)      
               sock.logout();         
              } else if (messageconnect === DisconnectReason.connectionClosed) { 
               console.log("ConexΓ£o perdida, tentando reconectarπ"); 
               connectToWhatsApp(); 
              } else if (messageconnect === DisconnectReason.connectionReplaced) { 
               console.log("A conceΓ§Γ£o foi substituΓ­da, por favor, feche esta conexΓ£o primeiro");    
               sock.logout();           
              } else if (messageconnect === DisconnectReason.restartRequired) { 
               console.log("Ocorreu um erro, reconectandoπ"); 
               connectToWhatsApp();
              } else if (messageconnect === DisconnectReason.connectionLost) { 
               console.log("ConexΓ£o perdida da web, tentando reconectarπ"); 
               connectToWhatsApp();               
              } else if (messageconnect === DisconnectReason.loggedOut) { 
              console.log(`Device is out, please re-scanπ`);    
              sock.logout();               
              } else if (messageconnect === DisconnectReason.timedOut) { 
               console.log("A conexΓ£o atingiu o limite, recarregueπ"); 
               connectToWhatsApp(); 
             } else sock.end(`Reason : ${messageconnect}|${connection}`)
           }                         
        })    
        
 sock.ev.on('creds.update', saveState);  
 
 store.bind(sock.ev)  
 
  sock.ev.on('messages.upsert', async ({ messages }) => {
  
    const m = messages[0];        
    const from = m.key.remoteJid

    await move(sock, m, store)
    require('./FunctionMD/message/Thunder-XM_Multi-Device.js')(sock, m, store)            
  })
  
  sock.ev.on('group-participants.update', async (update) =>{
   groupResponse(sock, update)
   console.log(update)
   })
         
                           
 /*
 * Run main file;
 */
  }
 connectToWhatsApp()
 
 } catch(e) { 
  e = String(e) 
  if (e.includes('Connection Closed')){ return }
  if (e.includes('Timed Out')){ return }
  
  console.log(e)
 }
 const LordThunder = require.resolve(__filename)
 fs.watchFile(LordThunder, () => {
 fs.unwatchFile(LordThunder)
 console.log(color(`modificado! >`, 'yellow'), color(`${__filename}`, 'orange'))
 delete require.cache[LordThunder]
 require(LordThunder)
 } )
