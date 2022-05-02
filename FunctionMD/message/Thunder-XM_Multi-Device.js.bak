 "use strict";
 const fs = require('fs')
 const cron = require('node-cron')
 const uptime = process.uptime();
 const { exec } = require('child_process')
 const axios = require("axios")
 const Exif = require('../sticker/exif.js');
 const util = require("util");
 const exif = new Exif();
 const moment = require("moment-timezone")
 const speed = require('performance-now');
 const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss | DD/MM')
 const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss | DD/MM')  
 const time3 = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
 const time4 = moment.tz('America/Sao_Paulo').format('DD/MM')
 const execute = util.promisify(require('child_process').exec)
 const FileType = require('file-type')
 const request = require('request');
 let BodyForm = require('form-data')
 const { EmojiAPI } = require("emoji-api");
 const emoji = new EmojiAPI()
 const { fromBuffer } = require('file-type')
 const FormData = require('form-data')
 const fetch = require('node-fetch')
 const { addVote, delVote } = require('../../armor/js/vote');
 const { infovotacao } = require('../../armor/js/infovotacao.js');
 const { recognize } = require('../../armor/js/ocr');
 const googleImage = require('g-i-s');
 const ggs = require('google-it')
 const igg = require('insta-fetcher')
 const hx = require('hxz-api')
 const { igdl, upload, formatDate } = require('../../lib/ytdl')

 
 const ffmpeg = require('fluent-ffmpeg')
 const {
getContentType, downloadContentFromMessage } = require('@adiwajshing/baileys');
 const { 
  color, 
  runtime,
  fetchJson, 
  getRandom 
 } = require('../function.js')
 const { 
  yta, 
  ytv, 
  searchResult 
 } = require('../scrape/ytdl')
 const {
   ramalan_jodoh, 
   tafsir_mimpi,
   nomer_hoki,
   ramalan_cinta,
   suami_istri,
   ramalan_jodoh_bali,
   arti_nama,
   kecocokan_nama,
   kecocokan_nama_pasangan,
   tanggal_jadian_pernikahan,
   sifat_usaha_bisnis,
   pekerjaan_weton_lahir,
   rejeki_hoki_weton,
   ramalan_nasib,
   cek_potensi_penyakit,
   perhitungan_feng_shui,
   arti_kartu_tarot,
   petung_hari_baik,
   hari_sangar_taliwangke,
   primbon_hari_naas,
   rahasia_naga_hari,
   primbon_arah_rejeki,
   ramalan_peruntungan,
   weton_jawa,
   sifat_karakter_tanggal_lahir,
   potensi_keberuntungan,
   primbon_memancing_ikan,
   masa_subur,
   zodiak,
   shio
  } = require('../scrape/primbon') 
 const { detikNews } = require('../scrape/detik') 
 const webp_mp4 = require("../../armor/js/webp_mp4.js");
 const { textpro } = require('../scrape/textpro') 
 const { wallpaperaccess } = require('../scrape/wallpaperaccess') 
 const { TiktokDownloader } = require('../scrape/tiktokdl') 
 const Options = require('../settings/options.js')
 const afk = require("../../storage/user/afk.js");
 let _afk = JSON.parse(fs.readFileSync('./storage/user/afk.json'));
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
 let textproo = Options.textpro
 let thumb = fs.readFileSync('./storage/image/thumb.jpg') 
 let OwnerNumber = Options.info.owner 
 module.exports = async (
    sock,
    m,
    store   
    ) => { 
   
   try{            
   const from = m.key.remoteJid
   const prefa = ['/','!','.','*','#','$']
    
   const CMD = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()   
   const budy = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()   
   const prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(CMD) ? CMD.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#'	  

    

    
   const chatmessage = (m.xtype === 'conversation') ? m.message.conversation : (m.xtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
   const ordermessage = (m.xtype === 'conversation' && m.message.conversation.startsWith(prefix)) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message[m.xtype].caption.startsWith(prefix) ? m.message[m.xtype].caption : (m.xtype == 'videoMessage') && m.message[m.xtype].caption.startsWith(prefix) ? m.message[m.xtype].caption : (m.xtype == 'extendedTextMessage') && m.message[m.xtype].text.startsWith(prefix) ? m.message[m.xtype].text : (m.xtype == 'listResponseMessage') && m.message[m.xtype].singleSelectReply.selectedRowId ? m.message[m.xtype].singleSelectReply.selectedRowId : (m.xtype == 'buttonsResponseMessage') && m.message[m.xtype].selectedButtonId ? m.message[m.xtype].selectedButtonId : ''
   const args = ordermessage.trim().split(/ +/).slice(1)
    
      
   const order = ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase()
   const comando = ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase()
   const command = ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase()
        
     
   const q = args.join(' ')       
   const isCmd = ordermessage.startsWith(prefix)   
   const isGroup = from.endsWith('@g.us') 
   const itulho = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid 
   const isOwner = OwnerNumber.includes(itulho)  
   const botNumber = sock.user.id.split(':')[0] + '@s.whatsapp.net'    
   const groupMetdata = isGroup ? await sock.groupMetadata(from) : ''
   const groupMembers = isGroup ? groupMetdata.participants : ''
   const groupName = isGroup ? await groupMetdata.subject : ''   
   const groupAdmins = isGroup ? m.getGroupAdmins(groupMembers) : ''
   const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
   const isGroupAdmins = groupAdmins.includes(m.sender)
   const fromMe = m.key.fromMe
   const sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
   owner: ["15874108061@s.whatsapp.net"]
   const random = ('./lib/random')
   const type = Object.keys(m.message)[0]
   const ytb = 'https://youtube.com/channel/UCONoMCw8a2weLcUSHNRwP2g'
   const dono99 = ('./lib/dono.jpg')
   const venomi = ('./lib/venom.jpg')
   const pushname = m.pushName ? m.pushName : sender[0].split('@')[0]
   const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
   const _antivirtex = JSON.parse(fs.readFileSync('./groups/antivirtex.json'))
   const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
   const antilink = JSON.parse(fs.readFileSync('./groups/antilink.json'));
   const isAntiLink = isGroup ? antilink.includes(from) : false
   const timestamp = speed();
   const latensi = speed() - timestamp
   const keyale = "key-luiz-claudio-ofc"
   const alekey = 'ale652'
   const mmmesagebot = `👋🏻Olá @${sender.split('@')[0]} me chamo NT DRAGON-MD,  sou um bot->(robô) estou aqui para lhe entreter e ajudar em algumas tarefas, para ver meus comandos mande❗ ${prefix}menu ou ${prefix}m ❗. 😁💙\n\n\n[Se divirta com meus comandos !]`
   const path = require("path")
   const { tmpdir } = require("os")
   const Crypto = require("crypto")
   const ff = require('fluent-ffmpeg')
   const premium = JSON.parse(fs.readFileSync('./datab/premium.json'));
   const isPremium = premium.includes(sender)
   const bannumero = JSON.parse(fs.readFileSync('./datab/grupos/ban2.json'));
   const isBannumero = bannumero.includes(sender)
   premium: '[❗] Ôpa esse comando e apenas para quem comprou o Premium!\nCusta R$5,00\n\n caso tenha interesse fale com o iago!\n\nwa.me/+15874108061'
   const obgavalicao = `Obrigado pela avaliação ${m.pushName} !`
   const modifi = JSON.parse(fs.readFileSync('./groups/modifador.json'));
   const isModificador = isGroup ? modifi.includes(from) : false
   let bancht = JSON.parse(fs.readFileSync('./datab/grupos/banchat.json'));
   const isBanchat = isGroup ? bancht.includes(from) : false
   const isViewOnce = (type == 'viewOnceMessage')   
   const muterrchat = JSON.parse(fs.readFileSync('./datab/grupos/muter.json'));
   const isMuuter = isGroup ? muterrchat.includes(from) : false


//anti trava 
if (CMD.length > 1000) {
if (m.key.fromMe) return
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
setTimeout( () => {
reply ('「TRAVA?」\n\nVoce enviou um tipo de trava, por isso sera banido do grupo :('.repeat(1))
}, 20)
setTimeout( () => {
reply ('❄️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🔥'.repeat(300))
}, 1000)
console.log(color('\n\n[TRAVA]', 'red'), color('trava indentificada!\n\n', 'yellow'))
setTimeout( () => {
sock.groupParticipantsUpdate(from, [sender], "remove")
}, 1050)
}
//fim do antitrava 

//Início do antilink

const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1}, ...options, responseType: 'arraybuffer'}).then((res) => {
resolve(res.data)
}).catch(reject);
});


const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

if(isUrl(CMD) && isAntiLink && isGroupAdmins && isBotGroupAdmins) {
if (m.key.fromMe) return
if (CMD.match(`await sock.groupInviteCode(from)`)) return reply ('Link do grupo ok')
setTimeout( () => {
reply('Link detectado, porém usuário é admin')
}, 20)
}

if(isUrl(CMD) && isAntiLink && isOwner) {
setTimeout( () => {
reply('Opa iago fique a vontade!🤵🏻')
}, 20)
}

if(isUrl(CMD) && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins) {
if (m.key.fromMe) return
setTimeout( () => {
reply('Link detectado, punindo usuário...')
}, 25)
sock.groupParticipantsUpdate(from, [sender], "remove")
}


const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

//fim do antilink com essecao do dono!!

//Algumas function misturadas🔥🔥🔥🔥
             var sendFileFromUrl = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return sock.sendMessage(from, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return sock.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
} else if(mime.split("/")[0] === "video"){
return sock.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
} else if(mime.split("/")[0] === "audio"){
return sock.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
} else {
return sock.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
}
}
        
    sock.sendTextWithMentions = async (jid, text, quoted, options = {}) => sock.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })       
     
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), contextInfo: {"mentionedJid": memberr}}) : sock.sendMessage(from, {text: teks.trim(), contextInfo: {"mentionedJid": memberr}}, {quoted: m})
}           

const sendBtext = async (id, text1, desc1, but = [], vr) => {
let buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
sock.sendMessage(id, buttonMessage, {quoted: m})
}

await sock.sendPresenceUpdate('available', from);
await sock.sendReadReceipt(from, m.key.participant, [m.key.id]);


const sendMess = (hehe, ytb) => {
sock.sendMessage(hehe, {text: ytb})
}

const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

if ((CMD === `bot`)){      
sock.sendMessage(from, {text: `${mmmesagebot}`})
}

if ((CMD === `Bot`)){      
sock.sendMessage(from, {text: `${mmmesagebot}`})
}

 const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

 const temp9 = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

sock.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
await sock.updateBlockStatus(callerId, "block")
}
})


    sock.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
    async function imageToWebp (media) {

    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)

    fs.writeFileSync(tmpFileIn, media)

    await new Promise((resolve, reject) => {
        ff(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })

    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

if (CMD.includes("adivinha meu celular") || (CMD.includes("Adivinha meu celular") || (CMD.includes("Adivinha Meu celular") || (CMD.includes("Adivinha Meu Celular") || (CMD.includes("bot qual meu celular")))) )){
if (m.key.fromMe) return
var adivinha = m.key.id.length > 21 ? 'Android 🤣' : m.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅';
await sock.sendMessage(from, {text: adivinha}, {quoted: m})
}

if (CMD.includes("nt dragon") || (CMD.includes("NT DRAGON") || (CMD.includes("NT DRAGON-MD") || (CMD.includes("Nt Dragon") || (CMD.includes("Nt Dragon-md")))) )) {
if (m.key.fromMe) return
var adivinha = ` Olá ${m.pushName}, mero humano mortal🙃\n\nPara ver meus comandos mande ${prefix}menu 🤟🏼`
await sock.sendMessage(from, {text: adivinha}, {quoted: m})
}

if (CMD.includes("corno") || (CMD.includes("Corno") || (CMD.includes("CORNO")))){
if (m.key.fromMe) return
var menump3 = fs.readFileSync('./datab/corno.mp3')
sock.sendMessage(from, {audio: menump3, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
}




if (isOwner) {
prema = `🔥CRIADOR🔥`
} else {
var prema = '😐USUARIO😐'
}

if (isGroupAdmins) {
grupostat = `😌ADM😌`
} else {
var grupostat = '😪MEMBRO😪'
}

const mimetype = require('mime-types')
const getExtension = async (type) => {
	return await mimetype.extension(type)
}

const axios = require('axios')
const cheerio = require('cheerio')

const mediafireDl = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nama = seplit[5]
var mime = nama.split('.')
var mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil
}

sock.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
var trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

function telegraph(Path) {
return new Promise (async (resolve, reject) => {
if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
try {
const form = new BodyForm();
form.append("file", fs.createReadStream(Path))
const data = await  axios({url: "https://telegra.ph/upload", method: "POST", headers: {...form.getHeaders()}, data: form})
return resolve("https://telegra.ph" + data.data[0].src)
} catch (err) {
return reject(new Error(String(err)))
}
})
}

function upload (midia)  {
return new Promise(async (resolve, reject) => {
try {
let { ext } = await fromBuffer(midia)
let form = new FormData()
form.append('file', midia, 'tmp.' + ext)
await fetch('https://telegra.ph/upload', {
method: 'POST',
body: form
})
.then(html => html.json())
.then(post => {
resolve('https://telegra.ph' + post[0].src)
})
.catch(err => reject(err))
} catch (err) {
return console.log(err)
}
})
}

function convertSticker(base64, author, pack){
 return new Promise((resolve, reject) =>{
axios('https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=utf-8',
      'User-Agent': 'axios/0.21.1',
      'Content-Length': 151330
    },
    data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true,"removebg":"HQ"},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
  }).then(({data}) =>{
    resolve(data.webpBase64)
  }).catch(reject)
     
 }) 
}

//Mensagem de aguarde aleatória
var replys = ["[ ! ] Aguarde amigo, estou fazendo...", "Vai beber uma água, ja estou terminando de enviar..", "㋡ Opa, calma ae, tô enviando já!!", "❬❗❭ Aguarde 5 segundos", "☬ Seu pedido é uma ordem companheiro(a), Enviando...", "ههههه𓅂 Oi filho de Deus, calma ae, tô terminando de fazer..", "Oi princesa, já estou preparando pra enviar, Aguarde..", "Salve mano, só aguarde um pouquinho que já estou enviando!!", "Aquieta o coração amigo, já estou enviando!", "Espere sentado que estou enviando!", "Pisa no freio aí amigo, tô enviando já!", "Foi daqui que pediram comando? Ta chegando...", "Oq vc ñ pede chorando, que eu não faço sorrindo, enviando já!", "Em 365 dias úteis termino o comando kkkk meme, to enviando!", "Aproveita que tô terminando aqui e beba água, hidrate-se!", "Seu pedido é uma ordem, terminando patrão!", "Manda quem pode, obedece quem tem juízo. Já tô enviando...", "Jaja está na mão amigo, aguarde um instante!", "Quem espera, sempre alcança","Tô enviando já amigão!"]
var replys_aiai = replys[Math.floor(Math.random() * (replys.length))]
//fim das msg de aguarde

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
sock.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: m})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

//BAN CHATS/GRUPOS
if (isBanchat && !isOwner){
if (!isOwner) return 
if (CMD.toLowerCase().startsWith('unbangp')){
if (isCmd && !isBanchat ) return reply(`Este grupo esta banido pelo Iago.`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

if (isMuuter && !isGroupAdmins){
if (!isGroupAdmins) return
if (CMD.toLowerCase().startsWith('desmutar')){
if (isCmd && !isMuuter ) return reply(`Este grupo esta multado.`)
let lfd = muterrchat.indexOf(from)
muterrchat.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/muter.json', JSON.stringify(muterrchat))
reply(`Grupo desmultado com sucesso...`)
}
}

//VOTAÇÃO: CRÉDITOS: KAUAN\\
if(isGroup) {
if (CMD.toLowerCase() === 'voto'){
let vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel votar duas vezes', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = 'Vote '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n💬: ${_votes[0].reason}\n\nTotal Votos* : ${vote.length} Votos\n\nDuração* : ${_votes[0].durasi} minutos\n\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\nVote : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
        }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (CMD.toLowerCase() === 'devoto'){
const vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel anular um voto', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = 'Vote '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n💬: ${_votes[0].reason}\n\nTotal Votos : ${vote.length} Vote\n\nDuração : ${_votes[0].durasi} minutos\n\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}

var sendFileFromUrl2 = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
let type = mime.split("/")[0]+"Message"
return sock.sendMessage(from, { document: await getBuffer(url), mimetype:'audio/mpeg' , caption: 'tiktok.mp3', mentions: men ? men : []}, {quoted: m })
}


        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                       var mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    sock.sendMessage(to, media, type, { quoted: m, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
            

         

//❗❗❗❗❗❗fim das misturadas❗❗❗❗❗

//👑auto sticker 👑!//
if (m.xtype == 'videoMessage') {
if (m.key.fromMe) return
if ((isMedia && m.message.videoMessage.seconds < 11 || m.isQuotedVideo && m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
encmedia = m.isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
let rane = getRandom('.'+ await getExtension(encmedia.mimetype))
let imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
let ran = getRandom('.webp')
//enviar(mess.wait());
execute(`ffmpeg -i ${media} -y -vcodec libwebp -fs 0.99M -filter_complex "[0:v] scale=512:512,fps=12,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${ran}`, async function(err, res){
//if (err) return enviar(mess.stickerError());
await sock.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: m})
fs.unlinkSync(media)	
fs.unlinkSync(ran)
})
}
}

if (m.xtype == 'imageMessage') {
if (m.key.fromMe) return
if ((isMedia && !m.message.videoMessage || m.isQuotedImage)) {
var encmedia = m.isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
let rane = getRandom('.'+ await getExtension(encmedia.mimetype))
let imgbuff = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, imgbuff)
const media = rane
let ran = getRandom('.webp')
execute(`ffmpeg -i ${media} -vf scale=512:512 ${ran}`, async function( result) {
await sock.sendMessage(from, {sticker: {url: `./${ran}`}}, {quoted: m})
await fs.unlinkSync(media)
await fs.unlinkSync(ran)
})
} 
}

if (m.xtype == 'stickerMessage') {
if (isGroup) return
if (m.key.fromMe) return
let quotedMessSticker = m.isQuotedstiker ? m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : m.message.stickerMessage
var buff = await getFileBuffer(quotedMessSticker, 'sticker')
sock.sendMessage(from, {image: buff, caption: `👑iago domina bb😘👑`})
}

if (m.xtype == 'audioMessage') {
if (!isGroup) return
if (m.key.fromMe) return
if (!isModificador) return
var muk = m.isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
var gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
var hah = fs.readFileSync(ran)
sock.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
}

//fim do auto sticker
   
   
   function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
   }

   
let LETT = 1;    
let MenuList = `
╔┅═┅═┅═┅═┅═┅═┅═᳀
║👋🏻𝑂𝑝𝑎 ${m.pushName} 
║
║♾️ ${m.sayingtime + m.timoji}
║
║⏳𝐻𝑜𝑟𝑎: ${time3}
║
║🗓️𝐷𝑎𝑡𝑎: ${time4}
║
║👤𝑆𝑡𝑎𝑡𝑢𝑠: ${prema}
║
║♦️𝐺𝑝•𝑠𝑡𝑎𝑡𝑢𝑠: ${grupostat}
║
║🔹𝑉𝑒𝑟𝑐𝑎𝑜: ${Options.info.version}
║
║💠𝑇𝑖𝑝𝑜: 𝑀𝑈𝐿𝑇𝐼 𝐷𝐸𝑉𝐼𝐶𝐸
║
╚┅═┅═┅═┅═┅═┅═┅═᳀
║
║
╠┅═┅═⟮ 🗯️𝐹𝑖𝑔𝑢𝑟𝑖𝑛ℎ𝑎🗯️ ⟯┅═᳀
║
║➛O bot e todo automático em figurinha_
║so mandar a foto/vidio/gif e aguardar!
║
║➛${prefix}attp
║
║➛${prefix}emoji
║
║➛${prefix}emojimix
║
║➛${prefix}csticker
║
║➛${prefix}ttp
║
║➛${prefix}figualeatoria
║
║➛${prefix}toimg
║
║➛${prefix}togif
╚┅═┅═┅═┅═┅═┅═┅═᳀
║
║
╠┅═┅═⟮ 📥️𝐷𝑤𝑜𝑛𝑙𝑜𝑎𝑑📥 ⟯═᳀
║
║➛${prefix}play
║
║➛${prefix}mediafire (link)
║
║➛${prefix}tiktok (link)
║
║➛${prefix}instagram (link)
║
║➛${prefix}pinterest
║
║➛${prefix}otaku
║
║➛${prefix}playstore
║
║➛${prefix}tiktokvideo
║
║➛${prefix}tiktokaudio
║
║➛${prefix}tomp3
║
║➛${prefix}toimg
║
║➛${prefix}tourl
║
║➛${prefix}youtubemp3
╚┅═┅═┅═┅═┅═┅═┅═᳀
║
║
╠┅═┅═⟮ 🎮𝐽𝑜𝑔𝑜𝑠🎮 ⟯═┅═᳀
║
║➛${prefix}pau
║
║➛${prefix}bct
║
║➛${prefix}casal
║
║➛${prefix}shipo
║
║➛${prefix}dogolpe
║
║➛${prefix}preto
║
║➛${prefix}gay
║
║➛${prefix}nazista
║
║➛${prefix}feio
║
║➛${prefix}lixo
║
║➛${prefix}burro 
║
║➛${prefix}gordo
║
║➛${prefix}pobre
║
║➛${prefix}corno
║
║➛${prefix}corno1
║
║➛${prefix}bonito
║
║➛${prefix}macaco
║
║➛${prefix}gostoso
║
║➛${prefix}qrcode
║
║➛${prefix}nick
║
║➛${prefix}nickff
║
║➛${prefix}rankpau
║
║➛${prefix}celular
║
║➛${prefix}rankbct
║
║➛${prefix}correio
║
║➛${prefix}gerarcpf
║
║➛${prefix}mechame
║
║➛${prefix}ler
║
║➛${prefix}cep
║
║➛${prefix}google
║
║➛${prefix}googleimage
║
╚┅═┅═┅═┅═┅═┅═┅═᳀
║
║
╠┅═┅═⟮ 🛠️𝐺𝑟𝑢𝑝𝑜🛠️ ⟯═┅═᳀
║
║➛${prefix}add
║
║➛${prefix}delete
║
║➛${prefix}apaga
║
║➛${prefix}link
║
║➛${prefix}gp
║
║➛${prefix}bcadm
║
║➛${prefix}marcar
║
║➛${prefix}antilink
║
║➛${prefix}antitrava
║
║➛${prefix}mutar
║
║➛${prefix}desmutar
║
║➛${prefix}automodi
║
║➛${prefix}reviver
║
║➛${prefix}kick
║
║➛${prefix}promote
║
║➛${prefix}demote
║
║➛${prefix}votar
║
║➛${prefix}delvoto
║
╚┅═┅═┅═┅═┅═┅═┅═᳀
║
║
╠┅═┅═⟮ ⚔️𝑅𝑃𝐺⚔️️ ⟯═┅═᳀
║
║➛${prefix}caça
║
║➛${prefix}pesca
║
║➛${prefix}minera
║
║➛${prefix}curar
║
╚┅═┅═┅═┅═┅═┅═┅═᳀
║
║
╠┅═┅═⟮ 🖼️️𝐹𝑜𝑡𝑜🖼️ ⟯═┅═᳀
║
║➛${prefix}arma
║
║➛${prefix}gato
║
║➛${prefix}cachorro
║
║➛${prefix}conselho
║
║➛${prefix}metadinha
║
║➛${prefix}placaloli
║
║➛${prefix}anal
║
║➛${prefix}boobs
║
║➛${prefix}cumsluts
║
║➛${prefix}classic
║
║➛${prefix}bj
║
║➛${prefix}kuni
║
║➛${prefix}pussy
║
║➛${prefix}lesbian
║
║➛${prefix}sci_fi
║
║➛${prefix}hentai
║
║➛${prefix}hentaigif
║
║➛${prefix}buscafoto
║
║➛${prefix}blackpink
║
║➛${prefix}lightglow
║
║➛${prefix}glass
║
║➛${prefix}hoorror_blood
║
║➛${prefix}sand
║
║➛${prefix}sketch
║
║➛${prefix}magma
║
║➛${prefix}batman
║
║➛${prefix}demon
║
║➛${prefix}ice
║
║➛${prefix}sea_metal
║
║➛${prefix}skeleton
║
║➛${prefix}transformer
║
║➛${prefix}warning
║
║➛${prefix}denim
║
║➛${prefix}waifu
║
║➛${prefix}neko
║
║➛${prefix}awoo
║
║➛${prefix}megumin
║
║➛${prefix}shinobu
║
╚┅═┅═┅═┅═┅═┅═┅═᳀
║
║
╠┅═┅═⟮ 🤵🏻𝐶𝑟𝑖𝑎𝑑𝑜𝑟🤵🏻️ ⟯┅═᳀
║
║➛${prefix}08
║
║➛${prefix}07
║
║➛${prefix}add
║
║➛${prefix}reviver
║
║➛${prefix}bcadm
║
║➛${prefix}ban
║
║➛${prefix}unban
║
║➛${prefix}addprem
║
║➛${prefix}dellprem
║
║➛${prefix}block
║
║➛${prefix}unblock
║
║➛${prefix}kick2
║
║➛${prefix}tempban
║
║➛${prefix}sair
║
║➛${prefix}bangp
║
║➛${prefix}unbangp
║
╚┅═┅═┅═┅═┅═┅═┅═᳀
║
║
╠┅═┅═⟮ 👑𝑃𝑟𝑒𝑚𝑖𝑢𝑚👑 ⟯┅═᳀
║
║➛${prefix}infinito limit (número)
║
║➛${prefix}entre
║
╚┅═┅═┅═┅═┅═┅═┅═᳀
║
║
╠┅═┅═⟮ ❕𝐵𝑜𝑡/𝐼𝑛𝑓𝑜❕ ⟯┅═᳀
║
║➛${prefix}owner
║
║➛${prefix}limituser
║
║➛${prefix}grupos
║
║➛${prefix}tempoativo
║
║➛${prefix}ping
║
║➛${prefix}inventario
║
║➛${prefix}perfil
║
║➛${prefix}off (texto do off)
║
║➛${prefix}melhorers
║
╚┅═┅═┅═┅═┅═┅═┅═᳀
║
║
╠┅═⟮ 🛒𝐶𝑜𝑚𝑝𝑟𝑎/𝑇𝑟𝑜𝑐𝑎🛒 ⟯═᳀
║
║➛${prefix}troca
║
║➛${prefix}comprar 
║
║➛${prefix}dinhero
║
║➛${prefix}dinheiro
║
╚┅═┅═┅═┅═┅═┅═┅═᳀
║
║
╠┅═┅═⟮ ⁉️𝐼𝑑𝑒𝑖𝑎𝑠⁉️ ⟯┅═᳀
║
║➛${prefix}sugestao (sua ideia pro bot)
║
╚┅═┅═┅═┅═┅═┅═┅═᳀
`   

     
   //Participant Mention
   const mentionByTag = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
       
   const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
   mention != undefined ? mention.push(mentionByreply) : []
   const mentionUser = mention != undefined ? mention.filter(n => n) : []    
   const reply = async (teks) => {

   sock.sendMessage(from, 
        { text: teks, mentions: [m.sender] },
        { quoted : m })  
    }      
 
   let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `Thunder-Multi`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:rifza\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}               
    
   
   
   //function Afk
   const isAfkOn = afk.checkAfkUser(m.sender, _afk)    
     
   if (isGroup) {	
    for (let x of mentionUser) {
    if (afk.checkAfkUser(x, _afk) && !isCmd) {
    const getId = afk.getAfkId(x, _afk)
    const getReason = afk.getAfkReason(getId, _afk)
    const sejak = afk.getAfkSejak(getId, _afk) 
    const cptl = `「 OFF MODE 」\n\n🤧Essa pessoa esta off por favor não pertube  : ${getReason}\nDesde : ${sejak}`
    if (m.key.fromMe){ return }
    reply(cptl)
    }
   }
   
   if (afk.checkAfkUser(m.sender, _afk) && !isCmd) {
    const pep = `*@${m.sender.split("@")[0]} Voutou do off!\n\nNo decorrer : ${clockString(new Date - afk.getAfkTime(m.sender, _afk))}`
    reply(pep)
    _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
    fs.writeFileSync('./storage/user/afk.json', JSON.stringify(_afk))
    } 
   }
   
   //function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('../../storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi,
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('../../storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('../../storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('../../storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('../../storage/user/buruan.js')
   let DarahAwal =  Options.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isPeixe = getIkan(m.sender)
   const isGalinha = getAyam(m.sender)
   const isCoelho = getKelinci(m.sender)
   const isOvelha = getDomba(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isFerro = getBesi(m.sender)
   const isEsmeralda = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']     
   cron.schedule('0 0 * * *', () => {
     const reset = []
     _darahOrg = reset
     console.log('Darah di reset')
     fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
     console.log('Sucesso!')
     }, 
     {
      scheduled: true,
      timezone: 'America/Sao_Paulo'
     }
   )  
      
      
      if (chatmessage.includes(`assalamualaikum`) || chatmessage.includes(`Asalamu'alaikum`) || chatmessage.includes(`Assalamualaikum`) || chatmessage.includes(`Asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`) || chatmessage.includes(`assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`)) {
       
        sock.sendMessage(from, 
        { text: 'Waalaikumsalam' }, 
        { quoted : m })  

       }    
    if (chatmessage.includes(`kontol`) || chatmessage.includes(`Kontol`)){
       sock.sendMessage(from, 
        { text: '🗿' }, 
        { quoted : m })  

       } 
       
    if (chatmessage.startsWith("> ") && isOwner) {
	   console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEVAL\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
		const ev = (val) => {
        var pekok = JSON.stringify(val, null, 2)
        var nyir = util.format(pekok)
        if (pekok === undefined) {
        nyir = util.format(val)
}
        return reply(nyir)
}
        try {
        reply(util.format(eval(`;(async () => { ${chatmessage.slice(2)} })()`)))
        } catch (e) {
        reply(util.format(e))
        }
	    } 
	   else 
	    if (chatmessage.startsWith("$ ") && isOwner) {
        console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEXEC\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
        exec(chatmessage.slice(2), (err, stdout) => {
	    if (err) return reply(`${err}`)
	    if (stdout) reply(`${stdout}`)
	    })
        } 
        else 
        if (chatmessage.startsWith("=> ") && isOwner) {
	    console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEVAL\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
	    try {
	    let vul =  eval(chatmessage.slice(2))
	    if (typeof vul !== 'string') vul = require("util").inspect(vul)
		reply(`${vul}`)
        } catch (err) {
		reply(`${err}`)
	   }
     }  
if (!isGroup && !m.key.fromMe && isCmd) console.log( '⏐⠀╭❑➛──━── ', color('💠️𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐍𝐎 𝐏𝐕💠️','white'), '──━──➛','\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝐼𝐶𝐾 :','purple'),color(m.pushName,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑉𝐸𝐿𝑂𝐶𝐼𝐷𝐴𝐷𝐸 =','red'),color(latensi.toFixed(4),'red'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝑈𝑀𝐸𝑅𝑂 :','purple'),color(sender.split('@')[0],'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑆𝑇𝐴𝑇𝑈𝑆 :','purple'),color(prema,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐿𝐼𝑀𝐼𝑇𝐸 :','purple'),color(getLimit(m.sender) ? getLimit(m.sender):'❗','white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 :','purple'),color(order,'cyan'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐻𝑂𝑅𝐴𝑅𝐼𝑂 :','purple'), color(hr,'blue'),'\n⏐','⏐','\n⏐',`╰❑➛──━── ⊱⊰ ──━──➛\n⏐`)
if (!isGroup && !m.key.fromMe && !isCmd) console.log( '⏐⠀╭❑➛──━── ', color('❄️𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐍𝐎 𝐏𝐕❄️','white'), '◅⏤⏤','\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝐼𝐶𝐾 :','purple'),color(m.pushName,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑉𝐸𝐿𝑂𝐶𝐼𝐷𝐴𝐷𝐸 =','red'),color(latensi.toFixed(4),'red'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝑈𝑀𝐸𝑅𝑂 :','purple'),color(sender.split('@')[0],'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑆𝑇𝐴𝑇𝑈𝑆 :','purple'),color(prema,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐿𝐼𝑀𝐼𝑇𝐸 :','purple'),color(getLimit(m.sender) ? getLimit(m.sender):'❗','white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑇𝐼𝑃𝑂 :','purple'),color('Mensagem','green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐻𝑂𝑅𝐴𝑅𝐼𝑂 :','purple'), color(hr,'blue'),'\n⏐','⏐','\n⏐',`╰❑➛──━── ⊱⊰ ──━──➛\n⏐`)	
if (isCmd && !m.key.fromMe && isGroup) console.log( '⏐⠀╭❑➛──━── ', color('💠𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎💠','white'), '◅⏤⏤','\n⏐','⏐','\n⏐','⏐',color('❱ 𝐺𝑅𝑈𝑃𝑂 :','purple'), color(groupName,'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝐼𝐶𝐾 :','purple'),color(m.pushName,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑉𝐸𝐿𝑂𝐶𝐼𝐷𝐴𝐷𝐸 =','red'),color(latensi.toFixed(4),'red'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝑈𝑀𝐸𝑅𝑂 :','purple'),color(sender.split('@')[0],'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐿𝐼𝑀𝐼𝑇𝐸 :','purple'),color(getLimit(m.sender) ? getLimit(m.sender):'❗','white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑆𝑇𝐴𝑇𝑈𝑆 :','purple'),color(prema,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐺𝑃•𝑆𝑇𝐴𝑇𝑈𝑆 :','purple'),color(grupostat,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 :','purple'),color(order,'cyan'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐻𝑂𝑅𝐴𝑅𝐼𝑂 :','purple'),color(hr,'blue'),'\n⏐','⏐','\n⏐',`╰❑➛──━── ⊱⊰ ──━──➛\n⏐`)	
if (!isCmd && !m.key.fromMe && isGroup) console.log( '⏐⠀╭❑➛──━──', color('❄️𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎❄️','white'), '◅⏤⏤','\n⏐','⏐','\n⏐','⏐',color('❱ 𝐺𝑅𝑈𝑃𝑂 :','purple'), color(groupName,'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝐼𝐶𝐾 :','purple'),color(m.pushName,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑉𝐸𝐿𝑂𝐶𝐼𝐷𝐴𝐷𝐸 =','red'),color(latensi.toFixed(4),'red'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝑈𝑀𝐸𝑅𝑂 :','purple'),color(sender.split('@')[0],'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐿𝐼𝑀𝐼𝑇𝐸 :','purple'),color(getLimit(m.sender) ? getLimit(m.sender):'❗','white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑆𝑇𝐴𝑇𝑈𝑆 :','purple'),color(prema,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐺𝑃•𝑆𝑇𝐴𝑇𝑈𝑆 :','purple'),color(grupostat,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑇𝐼𝑃𝑂 :','purple'),color('Mensagem ','green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐻𝑂𝑅𝐴𝑅𝐼𝑂 :','purple'),color(hr,'blue'),'\n⏐','⏐','\n⏐',`╰❑➛──━── ⊱⊰ ──━──➛\n⏐`)
if (isCmd && isBannumero) {
return reply(` Olá ${pushname}\n\nVocê está na lista negra! `)}

 switch (order) {
   case 'add': 
case 'reviver': {
try {
if (!isGroup) return reply('Somente em grupos');
if (!isBotGroupAdmins) return reply('Não sou adm :(');
if (!isOwner) return reply ('💠Somente o iago !💠')
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) {
var mentioned1 = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
var response = await sock.groupParticipantsUpdate(from, [mentioned1], 'add');
var o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('❌ O alvo já está no grupo! ❌') 
if(inv[0].code == 403) return reply('❌ Erro, conta privada do usuário ❌')
if(inv[0].code == 408) return reply('❌ Erro, usuário acabou de sair ❌')
if(inv[0].code == 401) return reply('❌ Erro, porque o bot está bloqueado pelo alvo ❌')
} else {
var mentioned2 = m.message.extendedTextMessage.contextInfo.participant
var response = await sock.groupParticipantsUpdate(from, [mentioned2], 'add');
var o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('❌ O alvo já está no grupo! ❌')
if(inv[0].code == 403) return reply('❌ Erro, conta privada do usuário ❌')
if(inv[0].code == 403) return reply('❌ Falhou, porque em privado ❌')
if(inv[0].code == 408) return reply('❌ Falha, porque o alvo acabou de sair ❌')
if(inv[0].code == 401) return reply('❌ Falha, porque o bot está bloqueado pelo alvo ❌')
}
} catch {
return 
}
}
break
 
case 'kick': {
try {

if (!isGroup) return reply('Somente em grupo')
if (!isGroupAdmins) return reply('Você não e adm não tem minha permissão ')
if (!isBotGroupAdmins) return reply('Se ta lgd que não sou adm né? ')
if (!args.join(' ')) {
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Ta de adm mas é burro pa caralho, c tem que marcar alguma mensagem da pesooa pra eu expulsar')
var mentioned1 = m.message.extendedTextMessage.contextInfo.participant
sock.groupParticipantsUpdate(from, [mentioned1], "remove").catch((err) => reply("err"))
reply("A remoção do macaco foi feita com sucesso 💠🤧")
} else if (args.join(' ').length > 1) {
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Ta de adm mas é burro pa caralho, c tem que marcar alguém pra eu expulsar')
var mentioned2 = m.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned2.length > 1) {
sock.groupParticipantsUpdate(from, mentioned2, "remove").catch((err) => reply("A remoção do macaco foi feita com sucesso 💠🤧"))
} else {
sock.groupParticipantsUpdate(from, mentioned2, "remove")
}
}
} catch {
return
}
}
break

  case 'kick2':{
   if (!isGroup) return reply('Somente em grupo')
   if (!isOwner) return reply ('💠Somente o iago !💠')
   if (!isBotGroupAdmins) return reply('Se ta lgd que não sou adm né? ')
   reply('‼️Removendo o corno(a)‼️')
   console.log(mentionUser)
   setTimeout( () => {
   sock.groupParticipantsUpdate(from, mentionUser, "remove")
    }, 2500)
   }
  break
  case 'limituser':
{      

   let txt = `「 LIMITE DOS USUÁRIOS 」\n\n`
     for (let i of _limit){
     txt += `➸ ID : @${i.id.split("@")[0]}\n➸ Limit : ${i.limit}\n\n`
     }
    reply(txt)       
  }
 break
 case 'melhores':
{      
   let txt = `「 Os melhores 」\n\n`
     for (let i of _buruan){
     txt += `➸ ID : ${i.id}\n`
     txt += `🐟Peixe : ${i.ikan}\n`
     txt += `🐔Galinha : ${i.ayam}\n`
     txt += `🐇Coelho dourado : ${i.kelinci}\n`
     txt += `🐑Ovelha : ${i.domba}\n\n`
     }
    reply(txt)       
  }
 break
case 'minerar':{
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply('Você está exausto!, tente curar usando pocao') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emerald = [0,0,1,0,0,1,0,2,1,0,5,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ RESULTADO DA MINERAÇÃO ]\nFerro : ${besinya}\nEsmeralda : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Minerar⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Iniciando mineraca💎`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi

            

case 'antitrava':
if (!isGroup) return reply('Somente em grupos amg');
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (!isBotGroupAdmins) return reply('Sou adm nao amg');
if (args.length < 1) return reply('Ensira [on] pra ativar e [off] pra desativar\n\nExemplo: antitrava on');
if (args[0] === 'on') {
if (isAntiVirtex) return reply("O antitrava já está ativado.");
_antivirtex.push(from)
fs.writeFileSync('./groups/antivirtex.json', JSON.stringify(_antivirtex))
sock.sendMessage(from, {text: `foi ativado`, quoted: m});
} else if (args[0] === 'off') {
let position = _antivirtex.indexOf(_antivirtex.find((x) => x === from))
if (position === -1) return reply(`${order} não estava ativo antes`)
_antivirtex.splice(position, 1)
fs.writeFileSync('./groups/antivirtex.json', JSON.stringify(_antivirtex))
sock.sendMessage(from, {text: `foi desativado`, quoted: m});
} 
break

case 'antilink':
if (!isGroup) return reply('Somente em grupos amg');
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (!isBotGroupAdmins) return reply('Sou adm nao amg');
if (args.length < 1) return reply('Ensira [on] pra ativar e [off] pra desativar\n\nExemplo: antilink on');
if (args[0] === 'on') {
if (isAntiLink) return reply("O antilink já está ativado.");
antilink.push(from)
fs.writeFileSync('./groups/antilink.json', JSON.stringify(antilink))
sock.sendMessage(from, {text: `foi ativado`, quoted: m});
} else if (args[0] === 'off') {
let position = antilink.indexOf(antilink.find((x) => x === from))
if (position === -1) return reply(`${order} não estava ativo antes`)
antilink.splice(position, 1)
fs.writeFileSync('./groups/antilink.json', JSON.stringify(antilink))
sock.sendMessage(from, {text: `foi desativado`, quoted: m});
} 
break

case 'automodi':
if (!isGroup) return reply('Somente em grupos amg');
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (!isBotGroupAdmins) return reply('Sou adm nao amg');
if (args.length < 1) return reply('Ensira [on] pra ativar e [off] pra desativar\n\nExemplo: automodi on');
if (args[0] === 'on') {
if (isModificador) return reply("O modificador de voz já está ativado.");
modifi.push(from)
fs.writeFileSync('./groups/modifador.json', JSON.stringify(modifi))
sock.sendMessage(from, {text: `foi ativado`, quoted: m});
} else if (args[0] === 'off') {
let position = modifi.indexOf(modifi.find((x) => x === from))
if (position === -1) return reply(`${order} não estava ativo antes`)
modifi.splice(position, 1)
fs.writeFileSync('./groups/modifador.json', JSON.stringify(modifi))
sock.sendMessage(from, {text: `foi desativado`, quoted: m});
} 
break



case 'correio':
var txt = chatmessage.slice(9)
var txtt = args.join(" ")
var txt1 = txt.split("/")[0];
var txt2 = txtt.split("/")[1];
if(!txt) return reply('Cade o número da pessoa?')
if(!txtt) return reply('Cade a mensagem do correio??')
if(txt.includes("@")) return reply('So o número sem @ pfvr')
if(txt.includes("-")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return reply(`Exemplo: ${prefix}correio 558198923680/Eae cade o pix de 50 que tu ta me devendo?`)
reply('Se você fez tudo certo, logo será entregue!, não pego número fake! ')
var bla = 
`╭┄━┄━┄━┄━┄━┄━┄━┄━┄╮
┞┧ 📧📧📧📧📧📧📧📧📧📧
┞┧
┞┧👤Correio de ${pushname}. 
┞┧
┞┧
┞┧📞Renviar: ${sender.split('@')[0]} 
┞┧
┞┧
┞┧🔗Link: wa.me/${sender.split('@')[0]} 
┞┧
┞┧
┞┧
┞┧
┞┧💬: ${txt2}
┞┧
┞┧
┞┧📧📧📧📧📧📧📧📧📧📧
╰┄━┄━┄━┄━┄━┄━┄━┄━┄╮`
sock.sendMessage(`${txt1}@s.whatsapp.net`, {text: bla})
break
 case 'buy':{
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply('Mau beli apa?\n*Berikut listnya*\n> pocao\n> umpan\n> limit')
 var anu = args[1]
  if (args[0] === 'pocao'){
  let noh = 500 * anu
 if (!args[1]) return reply(`Ex: ${prefix + order} pocao 2\n 1 igual = 100`)
 if (isMonay < noh) return reply('Seu dinheiro restante não é suficiente para esta compra')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Compra feita ✔️\nRestante de dinheiro : ${getMonay(m.sender)}\nSuas poções: ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'isca'){
  let noh = 500 * anu
 if (!args[1]) return reply(`Ex : ${prefix + order} umpan 2\n 1 igual = 50`)
 if (isMonay < noh) return reply('Seu dinheiro restante não é suficiente para esta compra')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Compra feita ✔️\nRestante de dinheiro : ${getMonay(m.sender)}\nSuas riscas: ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 50000 * anu
 if (!args[1]) return reply(`Ex : ${prefix + order} limit 2\n\n 1 custa = 50000 dinheiro`)
 if (isMonay < noh) return reply('Seu dinheiro restante não é suficiente para esta compra')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Compra feita ✔️\nRestante de dinheiro : ${getMonay(m.sender)}\nSeu limit : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Formato incorreto!") }
 }
 break
 case 'jual':{//BY LORD RIFZA
 if (!q) return  reply(`O que você quer trocar??\nA lista das caças/minério que vc pode troca\n> Peixe\n> Galinha\n> Coelho\n> Ovelha\n> Ferro\n> Esmeralda`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'peixe'){
 if (isPeixe < anu) return reply('Seus peixe não é suficiente para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} peixe 2\n 1 peixe = 150 `)
 kurangIkan(m.sender, anu)
 let monaynya = 150 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Troca feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nPeixes : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'galinha'){
 if (isGalinha < anu) return reply('Seu frango não é suficiente para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} galinha 2\n 1 galinha = 250`)
 kurangAyam(m.sender, anu)
 let monaynya = 250 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Troca feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nGalinhas : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'coelho'){
 if (isCoelho < anu) return reply('Seus coelho não é suficiente para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} coelho 2\n 1 coelho = 300`)
 kurangKelinci(m.sender, anu)
 let monaynya = 1000000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Troca feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nCoelhos : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ovelha'){
 if (isOvelha < anu) return reply('Você não tem ovelhas suficientes para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} ovelha 2\n 1 ovelha = 500`)
 kurangDomba(m.sender, anu)
 let monaynya = 500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Compra feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nOvelhas : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ferro'){
 if (isFerro < anu) return reply('Seus ferro não é suficiente para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} ferro 2\n 1 ferro = 150`)
 kurangBesi(m.sender, anu)
 let monaynya = 2050* anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Troca feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nFerros : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'esmeralda'){
 if (isEsmeralda < anu) return reply('Você não tem esmeraldas suficientes para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} esmeralda 2\n 1 esmeralda = 100`)
 kurangEmerald(m.sender, anu)
 let monaynya = 9000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Troca feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nEsmeraldas : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Formato incorreto!") }

 }
 break

 case 'curar':{
 if (!isCekDarah < 1) return reply('Você só pode curar quando seu sangue 0')
 if (isCekDarah > 100) return reply('Seu sangue está cheio')
 if (isPotion < 1) return reply('Você não tem uma poção, tente comprá-la desta forma #buy pocao quantos') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Funcionou, seu sangue está cheio')
 }
 break
 case 'caça':{
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Seu sangue esta acabando, tente curar usando poções') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Perfurado por um espinho durante a caça","Escorregou em uma ravina durante a caça","Agarrado por um animal selvagem","Sem cuidado","Fica enredado em raízes","Cai durante a caça"]
   let location = ["Selva","Floresta amazônica","Floresta tropical","Padro","Floresta africana","Montanhas"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var kelii = kelinci[Math.floor(Math.random() * kelinci.length)] 
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Selva') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Floresta amazônica') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Floresta tropical') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padro') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Floresta africana') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Montanhas') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `[ CAÇA ]\n\n`
     teksehmazeh += `🐟PEIXE : ${ikanmu}\n`
     teksehmazeh += `🐔GALINHA : ${ayam}\n`
     teksehmazeh += `🐇COELHO DOURADO : ${kelii}\n`
     teksehmazeh += `🐑OVELHA : ${domba}\n\n\n`
     teksehmazeh += `[ INFO ]\n\n`
     teksehmazeh += `Local : ${lokasinya}\n\n`
     teksehmazeh += `Ferido : ${lukanya}, sangue - 10\n\n`
     teksehmazeh += `Sangue restante : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: ' Caça mais uma vez 🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} foi caça em: ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelii)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
 case 'owner': case 'dono': {
   for (let x of Options.info.owner) {
   sock.sendContact(from, x.split('@s.whatsapp.net')[0], Options.info.ownerName, m)
	}			    
   }
  break
  case 'artinama':{
  if (!q) return reply('Namanya siapa?')
  let namalu = await arti_nama(q)
  let teksnya = `[ *NAMA* : ${namalu.message.nama} ]\n*Arti* : ${namalu.message.arti}`
  reply(teksnya)
  console.log(namalu)
  }
  break
  
  case 'inventário':
  case 'inventario':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
  
  let teksehmazeh = `[ 👩🏻‍💼INFO USER👨🏻‍💼 ]\n\n`
     teksehmazeh += `❤️Seu sangue : ${getDarah(m.sender)}\n`
     teksehmazeh += `◻️️Ferros : ${getBesi(m.sender)}\n`
     teksehmazeh += `💎Esmeraldas : ${getEmerald(m.sender)}\n`
     teksehmazeh += `⏺️Limite : ${getLimit(m.sender)}\n`
     teksehmazeh += `💸Dinheiro : ${getMonay(m.sender) ? getMonay(m.sender) : '0' }\n`
     teksehmazeh += `🧪Sua poção : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `[ 🐺RESULTADO DA CAÇA🐺 ]\n`
     teksehmazeh += `🐟Peixe : ${getIkan(m.sender)}\n`
     teksehmazeh += `🐔Galinha : ${getAyam(m.sender)}\n`
     teksehmazeh += `🐇Coelho dourado : ${getKelinci(m.sender)}\n`
     teksehmazeh += `🐑Ovelha : ${getDomba(m.sender)}\n\n`
     teksehmazeh += `Coelho dourado vale = 1milhão cada 1  \n\n`
     teksehmazeh += `${Options.info.botName}`
  
  reply(teksehmazeh)
  }
  break
case 'sair': {
                if (!isOwner) return reply ('💠Somente o iago !💠')
                reply ('Vo meter o pé eu que não quero treta com meu dono 👋🏻')
                setTimeout( () => {
                sock.groupLeave(from)
                }, 1100)
            }
            break

  case 'pescar':{
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  if (isUmpan < 1) return reply('Suas iscas acabaram compre mais !')
  reply("1 isca usada")
  var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  var ditangkap = Math.ceil(Math.random() * 20)
  setTimeout( () => {
  let caption = `Pegou : ${ikannya}\n> Número de Peixes : ${ditangkap}`
  let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'PESCAR🎣'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/mancing.jpg' },
      caption: caption,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} iniciando sua pesca🎣️`)     
  }, 1500)
  kurangUmpan(m.sender, 1)
  addIkan(m.sender, ditangkap)	     
  }   
  break  
  

  case 'vida':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  let dapat =  getDarah(m.sender)
  reply(`${dapat}`)
  }
  break
  case 'bacok':{
  if (isCekDarah < 1) return reply('Darah kamu habis')
   kurangDarah(m.sender, 10)
  reply('success✔️')
  }
  break
   case 'm':
   case 'menu':
   reply(`Sexo? @${sender.split('@')[0]} \n\nEnviando o menu aguarde!`)
   let buttons = [{
          index: 1, 
      urlButton: {
       displayText: '👥𝐺𝑅𝑈𝑃𝑂 𝐷𝑂 𝑁𝑇 𝐷𝑅𝐴𝐺𝑂𝑁👥', 
       url: 'https://chat.whatsapp.com/Ca02ggDnYvK8yyuSFgQYTP'
       }
     }
    ]
    await m.sendButton(
    from, 
    MenuList,
    Options.info.botName,
    buttons,
    thumb, 
    await m.createMsg(
     from, 
     {
     video: {
      url: './storage/video/menu1.mp4', 
      caption: "Not detected"
      }, 
      gifPlayback: true
     }
     )
    )
    setTimeout( () => {
    const sections = [
    {
	title: "𝑂𝑝𝑐𝑜𝑒𝑠 ✅",
	rows: [
      {
	    title: "🔷𝐴𝑉𝐴𝐿𝐼𝐴𝑅 𝑂 𝐵𝑂𝑇🔷", 
	    rowId: ".avaliar"
	   },	 	
	   {
	    title: "🤵🏻𝐶𝑅𝐼𝐴𝐷𝑂𝑅/𝐷𝑂𝑁𝑂🤵🏻", 
	    rowId: ".dono"
	   },	 
	   {
	    title: "📷𝐼𝑁𝑆𝑇𝐴𝐺𝑅𝐴𝑀 𝐷𝑂 𝐼𝐴𝐺𝑂📷", 
	    rowId: ".Insta"
	   },	    
	   {
	    title: "📽️𝐶𝐴𝑁𝐴𝐿 𝑁𝑇 𝐷𝑅𝐴𝐺𝑂𝑁📽️", 
	    rowId: ".yt"
	   },	 
	   {
	    title: "💬𝑊𝐴.𝑀𝐸 𝐷𝑂 𝐼𝐴𝐺𝑂💬", 
	    rowId: ".wameiago"
	   },	 
	   {
	    title: "💸️𝐷𝑂𝐴𝑅 𝑃𝐼𝑋💸", 
	    rowId: ".doar"
	   },	
	   {
	    title: "📽️𝐶𝐴𝑁𝐴𝐿 𝑉𝐸𝑁𝑂𝑀 𝑀𝐷𝑆📽️", 
	    rowId: ".venomcanal"
	   },	 
     ]
    }    
    ]

  const listMessage = {
   text: "⬇️",
   footer: "⬇️",
   title: "𝐴𝑙𝑔𝑢𝑚𝑎𝑠 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑜𝑒𝑠",
   buttonText: "𝐸𝑠𝑐𝑜𝑙ℎ𝑎 𝑢𝑚𝑎 𝑜𝑝𝑐𝑎𝑜 𝑎𝑏𝑖𝑎𝑥𝑜",
   sections
   }

  const sendm =  sock.sendMessage(
     from, 
     listMessage
  )

  }, 1000)  
   break
   case 'tes':{
     m.reply(from, 'hallo', { quoted : m } )
   }
   break
   case 'temp':{
   const templateMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: '𝑆𝐼𝑇𝐸 𝑁𝑇 𝐷𝑅𝐴𝐺𝑂𝑁', 
       url: 'https://sousathiagocandido.wixsite.com/ntdragonbot-1'
      } },
     {
     index: 2, 
     callButton: {
      displayText: '𝐶𝑅𝐼𝐴𝐷𝑂𝑅', 
       phoneNumber: '15874108061'
      } },
     {
     index: 3, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#donk'
       } },
    { 
     index: 4, 
      quickReplyButton: {
       displayText: 'Click2', 
       id: '#tes'
       } },
     {
     index: 5, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
       } },
     ],
    }
   const sendm =  sock.sendMessage(
    from, 
    templateMessage
    )
   }
  break  
  case 'tempativo':{
    const templateMessage = {
    text: "TEMPO ATIVADO",
    footer: `${runtime(process.uptime())}`,
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: '𝑆𝐼𝑇𝐸 𝑁𝑇 𝐷𝑅𝐴𝐺𝑂𝑁', 
       url: 'https://sousathiagocandido.wixsite.com/ntdragonbot-1'
       } }
      ]
     }
     const sendm =  sock.sendMessage(
       from, 
       templateMessage
      )
    }
  break  
  
  case '08':
if (!isOwner) return reply ('💠Somente o iago !💠')
if (!isBotGroupAdmins) return reply ('Desculpe mestre mais não sou adm!🤧')
//kkk = (`owner + "@s.whatsapp.net"`);
await sock.groupParticipantsUpdate(from, [`15874108061@s.whatsapp.net`], 'promote')
await reply (`✓ claro, vc tem todo o direito de ser adm, mestre ｡◕‿◕｡`)
break

case '07':
if (!isOwner) return reply ('💠Somente o iago !💠')
if (!isBotGroupAdmins) return reply ('Desculpe mestre mais não sou adm!🤧')
//kkk = (`owner + "@s.whatsapp.net"`);
await sock.groupParticipantsUpdate(from, [`15874108061@s.whatsapp.net`], 'demote')
await reply (`✓ como quiser. Tirando seu adm mestre , desculpe-me.`)
break
  
  case 'tqto':{
    const templateMessage = {
    text: `}---------[✨THANKS TO✨]---------{\n\n➢ Iago\n\n}---------[✨CRIADOR✨]---------{`,
    footer: Options.info.botName,
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: 'My Instagram', 
       url: Options.info.igowner
       } }
      ]
     }
     const sendm =  sock.sendMessage(
       from, 
       templateMessage
      )
    }
  break  
  case 'opções':{
  // send a list message!
   const sections = [
    {
	title: "𝑂𝑝𝑐𝑜𝑒𝑠 ✅",
	rows: [
	   {
	    title: "🤵🏻𝐶𝑅𝐼𝐴𝐷𝑂𝑅/𝐷𝑂𝑁𝑂🤵🏻", 
	    rowId: ".dono"
	   },	 
	   {
	    title: "📷𝐼𝑁𝑆𝑇𝐴𝐺𝑅𝐴𝑀 𝐷𝑂 𝐼𝐴𝐺𝑂📷", 
	    rowId: ".Insta"
	   },	    
	   {
	    title: "📽️𝐶𝐴𝑁𝐴𝐿 𝑌𝑂𝑈𝑇𝑈𝐵𝐸📽️", 
	    rowId: ".yt"
	   },	 
	   {
	    title: "💬𝑊𝐴.𝑀𝐸 𝐷𝑂 𝐼𝐴𝐺𝑂💬", 
	    rowId: ".wameiago"
	   },	 
     ]
    }    
    ]

  const listMessage = {
   text: "⬇️",
   footer: "⬇️",
   title: "𝐴𝑙𝑔𝑢𝑚𝑎𝑠 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑜𝑒𝑠",
   buttonText: "𝐸𝑠𝑐𝑜𝑙ℎ𝑎 𝑢𝑚𝑎 𝑜𝑝𝑐𝑎𝑜 𝑎𝑏𝑖𝑎𝑥𝑜",
   sections
   }

  const sendm =  sock.sendMessage(
     from, 
     listMessage
  )

  }
  break

 case 'block': {
		if (!isOwner) return ('Ox fimosinha ?')
		let users = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await sock.updateBlockStatus(users, 'block')
		reply('Usuarios bloqueado!')
	}
	break
        case 'unblock': {
		if (!isOwner) return ('Ox fimosinha ?')
		let users = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await sock.updateBlockStatus(users, 'unblock')
		reply('Prontinho desbloqueado!')
	}
	break

  case 'wameiago':
  reply('Não seja um random porra🙄\n\n https://wa.me/15874108061')
  break

  case 'yt': 
let porr = `${dono99}`
    sock.sendMessage(from, { image: { url : porr }, caption: `🥰Aqui está, se inscreva e deixe um comentário que vou estar dando coração ❤️ 😀\n\n${Options.info.ytowner}`}, { quoted: m } )
    break


  case 'insta': 
  let link = `${dono99}`
    sock.sendMessage(from, { image: { url : link }, caption: `🥰Aqui está, segue lá 😀\n\n${Options.info.igowner}`}, { quoted: m } )
    break

case 'venomcanal': 
    let porru = `${venomi}`
    sock.sendMessage(from, { image: { url : porru }, caption: `🙂Passa no canal desse mito se inscreve la !\n\nhttps://youtube.com/channel/UCOoc5DOT_M6foZa1jSOI6JQ`}, { quoted: m } )
    break

  case 'listsection2':{
  // send a list message!
   const sections = [
    {
	title: "Section 1",
	rows: [
	    {
	     title: "Option 1", 
    	 rowId: "option1"
	    },
	    {
	     title: "Option 2", 
	     rowId: "option2", 
	     description: "This is a description"
	    }
     ]
    },
    {
	title: "Section 2",
	rows: [
	    {
	     title: "Option 3", 
	     rowId: "option3"
	     },
	    {
	     title: "Option 4", 
	     rowId: "option4", 
	     description: "This is a description V2"
	    }
       ]
     },
    ]

  const listMessage = {
   text: "This is a list",
   footer: "This is footer text",
   title: "List message",
   buttonText: "Required, text on the button to view the list",
   sections
   }

  const sendm =  sock.sendMessage(
      from, 
      listMessage
    )

  }
  break

case 'gerarcpf':
    let cp1 = `${Math.floor(Math.random() * 300) + 600}`
let cp2 = `${Math.floor(Math.random() * 300) + 600}`
let cp3 = `${Math.floor(Math.random() * 300) + 600}`
let cp4 = `${Math.floor(Math.random() * 30) + 60}`
let cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await sock.sendMessage(from, {text: `${cpf}`}, {quoted: m})
break
  
  case 'detiknews': case 'detik':{
  if (args.length < 1) return m.reply(from, 'Cari berita apa?', { quoted : m } )
  const aku_biji = await detikNews(args.join(' ')).catch(e => console.log("Undefined"))
  console.log(aku_biji)   
  let sections = []   
  for (let i = 0; i < aku_biji.length; i++) {
  const list = {title: `${aku_biji[i].Title}`,
  rows: [
	    {
	     title: `Result detik news ${i + 1}`, 
	     rowId: `#reply ${aku_biji[i].Link}`,
	     description: ``
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  sock.sendMessage(
      from, 
      {
       text: "Cari berita di detik.com",
       footer: Options.info.botName,
       title: "[ DETIK NEWS SEARCH 🔎 ]",
       buttonText: "Click and see search results➡️",
       sections
      }
    )  
   }
  break


  case 'reply':{
  let textz = q || 'undefined'
  m.reply(from, textz, { quoted : m } )
  }
  break

  case 'play': case 'lagu': case 'musik':{
  
   if (args.length < 1) return m.reply(from, 'Coloque o nome da musica na frente do comando!', { quoted : m } )
   const _0x387283=_0x56d3;(function(_0x5d04b3,_0x3e9123){const _0x5bc831=_0x56d3,_0x4a38fc=_0x5d04b3();while(!![]){try{const _0x5a3aee=-parseInt(_0x5bc831(0x17e))/0x1+parseInt(_0x5bc831(0x173))/0x2*(parseInt(_0x5bc831(0x162))/0x3)+-parseInt(_0x5bc831(0x161))/0x4+-parseInt(_0x5bc831(0x17a))/0x5+-parseInt(_0x5bc831(0x164))/0x6*(parseInt(_0x5bc831(0x17c))/0x7)+-parseInt(_0x5bc831(0x178))/0x8*(-parseInt(_0x5bc831(0x176))/0x9)+parseInt(_0x5bc831(0x16f))/0xa;if(_0x5a3aee===_0x3e9123)break;else _0x4a38fc['push'](_0x4a38fc['shift']());}catch(_0x2665dd){_0x4a38fc['push'](_0x4a38fc['shift']());}}}(_0x4567,0x1d65c));const fresh=await searchResult(args[_0x387283(0x160)]('\x20'));console['log'](fresh);let sections=[];for(let i=0x0;i<fresh[_0x387283(0x16c)];i++){const list={'title':i+0x1+'.\x20'+fresh[i]['title'],'rows':[{'title':_0x387283(0x16d),'rowId':_0x387283(0x166)+fresh[i][_0x387283(0x171)],'description':_0x387283(0x17b)+fresh[i][_0x387283(0x172)]+_0x387283(0x15f)+fresh[i][_0x387283(0x169)]+_0x387283(0x175)+fresh[i][_0x387283(0x165)][_0x387283(0x168)]+_0x387283(0x16a)+(fresh[i][_0x387283(0x170)]?'YouTube\x20musica':'YouTube')+_0x387283(0x16e)+fresh[i]['id']},{'title':'[\x20🎥Vidio️🎥\x20]\x20','rowId':_0x387283(0x17d)+fresh[i][_0x387283(0x171)],'description':_0x387283(0x17b)+fresh[i][_0x387283(0x172)]+_0x387283(0x15f)+fresh[i][_0x387283(0x169)]+_0x387283(0x175)+fresh[i][_0x387283(0x165)]['label']+_0x387283(0x16a)+(fresh[i][_0x387283(0x170)]?_0x387283(0x177):_0x387283(0x16b))+_0x387283(0x16e)+fresh[i]['id']}]};sections[_0x387283(0x15e)](list);}function _0x56d3(_0x57fdc1,_0x3a0842){const _0x4567c9=_0x4567();return _0x56d3=function(_0x56d37a,_0x19e14a){_0x56d37a=_0x56d37a-0x15e;let _0x2b10cf=_0x4567c9[_0x56d37a];return _0x2b10cf;},_0x56d3(_0x57fdc1,_0x3a0842);}function _0x4567(){const _0x115320=['\x0a\x0aℹ️Id\x20:\x20','2636910gSEcJs','isYtMusic','url','artist','134WGkGaw','\n\nEscolha\x20abaixo\x20qual\x20tipo\x20de\x20midia\x20mp3/mp4✔\n\n️','\x0a\x0a📊Duração\x20:\x20','1463121BUtxtd','YouTube\x20musica','8SnOoTk','sendMessage','160360LnsPvJ','\n👤Artista\x20:\x20','161819JLJtSW','#youtubemp4\x20','79352CwJCfr','push','\x0a\x0a💽Nome\x20:\x20','join','846280WMzPjT','3873VfCiIN','botName','18wodwzE','duration','#youtubemp3\x20','[🔍\x20YouTube\x20pesquisa de\x20musica🔎\x20]','label','album','\x0a\x0a🔎Procura em\x20:\x20','YouTube','length','[\x20🎵Música🎵\x20]\x20'];_0x4567=function(){return _0x115320;};return _0x4567();}const sendm=sock[_0x387283(0x179)](from,{'text':_0x387283(0x174),'footer':Options['info'][_0x387283(0x163)],'title':_0x387283(0x167),'buttonText':'Clique\x20e\x20escolha\x20entre os\x20resultados➡️','sections':sections});
  }
  break
case 'mechame':

sock.sendMessage(sender, {text: 'oi'})
reply (`Mensagem enviada no PV`)
break  
case  'hentai': {

if (isGroup) reply('⚙️Aguarde enviando no seu privado') 
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
var tk = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
sock.sendMessage(sender, {image: { url: tk.url}, quoted: m, thumbnail:null})
}
break

case 'statusbio':
if (args.length < 1) return reply ('cade a porra do texto!')
sock.setStatus(`${q}`)
break

case 'pau':

var terandom = Math.floor(Math.random() * 35)
const tamanho = terandom
if (tamanho < 13 ) {var pp = 'só a fimose'} else if (tamanho == 13 ) {var pp = 'passou da média😳'} else if (tamanho == 14 ) {var pp = 'passou da média😳'} else if (tamanho == 15 ) {var pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {var pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {var pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {var pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {var pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {var pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {var pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {var pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {var pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {var pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {var pp = 'vai procurar petróleo com isso?'
}
var hasil = `Seu pau @${sender.split('@')[0]}  tem ${terandom}cm\n\n${pp}`
reply(hasil)
break


  case 'youtubemp3':{
  
  if (args.length < 1) return reply('linknya?')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
  reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)  
   try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      sock.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Esse esta com erro tente usar outro !`, { quoted : m })
   }
  }
  break

  case 'youtubemp4':{
  
  if (args.length < 1) return reply('linknya?')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
  reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
   try{
    await ytv(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      sock.sendMessage(from, { video: { url: dl_link }, caption: "Este é o resultado\nEspero que esteja satisfeito com nosso serviço😊" }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Acesso negado por favor tente outro `, { quoted : m })
   }
  }
  break
  
/*case 'f':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
case 's':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif': {
sock.sendMessage(from, {text: ` Não e preciso usar comando pra fazer figurinha , apenas mande a foto/gif/video e aguarde seu sticker!`}, {quoted: m})
}
break*/

  case 'promote':{
  // title & participant
if (!isGroup) return reply('Somente em grupo')
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (!isBotGroupAdmins) return reply('Se ta lgd que não sou adm né? ')
  console.log(mentionUser)
		await sock.groupParticipantsUpdate(
		 from, 
		 mentionUser, 
		 "promote"
		 )
	   .catch((err) => m.reply(from, err, {quoted : m }))
	  }
  break
  case 'demote':{
  // title & participant
if (!isGroup) return reply('Somente em grupo')
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (!isBotGroupAdmins) return reply('Se ta lgd que não sou adm né? ')
  console.log(mentionUser)
   sock.groupParticipantsUpdate(
	 	  from, 
		  mentionUser, 
		  "demote"
		 )
		 .catch((err) => m.reply(from, err, {quoted : m })
	  )
	}
  break
case 'attp':

if (args.length < 1) return reply(`Exemplo: ${prefix + order} iago`)
reply ('Hum ok')
anu = (`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ordermessage.slice(5))}`)
await sock.sendMessage(from, {sticker: {url: anu}, quoted: m})  
break
  case 'sound1':{
   sock.sendMessage(
   from, 
   { 
    audio: {
     url : `https://k.top4top.io/m_2279djqoy1.mp3`
    }, 
    mimetype: 'audio/mp4', 
    ptt: true
    }, 
    {
    quoted: m
   }
   )
  }
  break
  case 'waifu': case 'megumin':
case 'shinobu':
case 'awoo': case 'neko':{

  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
  reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
  try{
   let za = await fetchJson(`https://waifu.pics/api/sfw/${order}`)
            
   var oiii = getBuffer(`za.link`)
  
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'PROXIMA'
      }, type: 1},
    ]
    let buttonMessage = {
      image: oiii,
      caption: "Resultado",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   } catch { reply("erro ") }
 }
 break

case 'nickff': 

var anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=Alphabott`)
var anu1 = `Aqui está: \n\n${anu.result}\n`
reply(anu1)
break

case 'corno1': {

if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém pra ver o nível do chifre')
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
anu = Math.floor(Math.random() * 101)
if (anu > 50) {
var teks = `Após medir o @${mentioned[0].split('@')[0]} \n\nSUA PORCENTAGEM E DE : ${anu}% TU E UM BAITA CORNO EM SLK🐂`
} else {
var teks = `Após medir o @${mentioned[0].split('@')[0]} \n\nSUA PORCENTAGEM E DE : ${anu}% SUA VEZ DE SER CORNO CHEGARA RLX😴!!`
}
mentions(teks, mentioned, true)
}
break

  case 'apaga': case 'delete': case 'del': case 'd':{
  
      if (!m.quoted) return  m.reply(from, 'Marque uma mensagem minha para eu apagar!', { quoted : m })
       if (!m.quoted.isBaileys) return  m.reply(from, 'So consigo apagar minhas mensagens!', { quoted : m })
          sock.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
         }
      break
  
  case 'buscafoto':{
  
  if (args.length < 1) return m.reply(from, 'Oque você procura?', { quoted : m } )
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
  try{
  const aku_biji = await wallpaperaccess(q)
  let jsonData = aku_biji
  let kamu_telor = Math.floor(Math.random() * jsonData.length);
  let anunya = jsonData[kamu_telor];
 
  console.log(anunya.link)
  let buttons = [
      {
       buttonId: `#buscafoto ${q}`, 
       buttonText: {
        displayText: 'PROXIMO'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: anunya.link },
      caption: "O resultado foi esse pra sua pesquisa!",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
    } catch (e) { e = String(e)
      m.reply(from, 'Não encontrado!', { quoted : m } )
   }
  }
  break 
  case 'hoorror_blood':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.hoorror_blood}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break 
   case 'sand':{
   
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.sand}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break
   case 'magma':{
   
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.magma}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'blackpink':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.blackpink}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sketch':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.sketch}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'glass':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.glass}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break
   case 'lightglow':{
   
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.lightglow}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sci_fi':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
      if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
      kurangLimit(m.sender, 1)
      reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
      let link = `${textproo.sci_fi}`
      let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
  
}
  break
  case 'ice':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.ice}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'demon':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.gdemon}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'batman':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.batman}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sea_metal':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.sea_metal}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'skeleton':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.skeleton}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'warning':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.warning}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break



  case 'transformer':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.transformer}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'denim':{
  
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.denim}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
case 'magma':
case 'devil':
case 'graffiti':
case 'skeleton':
case 'blackpink':
case 'cloud':
case 'blood':
case 'firework':
case 'lava':
case 'toxic':
case 'thunder':
case 'neon':
case 'greenneon':
case 'glitter':
case 'glow':
case 'galaxy':           

if (!q) return reply (`Ex: ${prefix + order} iago gado`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
getBuffer(`https://api.zekais.com/textpro/${order}?text=${q}&apikey=tLEU8JhX`).then((gambar) => {
sock.sendMessage(from, { image: gambar, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )

})                    
break
  case 'tiktokaudio':{
  if (!q) return reply('Link?')
  if (!q.includes('tiktok')) return reply('Somente link de tiktok!')
       if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    sock.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break

  case 'tiktokvideo':{
  if (!q) return reply('Link?')
  if (!q.includes('tiktok')) return reply('Link somente do tik tok!')
       if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
    sock.sendMessage(from, { video: { url: musim_duren_v }, caption: "Este é o resultado\nEspero que esteja satisfeito com nosso serviço😊" }, { quoted: m })
   }
  break
  case 'off':{
  
  let date = + new Date
  const alasan = q ? q : 'Contexto....?'
  afk.addAfkUser(m.sender, date, alasan, time, _afk)
  reply(`@${m.sender.split("@")[0]} agora sendo off\nContexto : ${alasan}`)
  }
  break

case 'link': {

if (!isGroup) return reply('Somente em grupo')
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (!isBotGroupAdmins) return reply('Se ta lgd que não sou adm né? ')
reply(`Link: https://chat.whatsapp.com/${await sock.groupInviteCode(from)}`)
}
break


case 'marcar': {

if (!isGroup) return reply('Somente em grupos amg');
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (!isBotGroupAdmins) return reply('Sou adm nao amg');
let teks = `══✪〘 👥 Atenção! 〙✪══
 
 ➲ Mensagem: ${q ? q : 'Nada não'}\n\n`
                for (let mem of groupMembers) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                sock.sendMessage(from, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: m })
                }
                break
case 'hentaigif':

if (isGroup) reply('⚙️Aguarde enviando no seu privado') 
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
var links = fs.readFileSync('./lib/subaru-1.json');
var jsonData = JSON.parse(links);
var randIndex = [Math.floor(Math.random() * (jsonData.length))]
var randKey = jsonData[randIndex];
var hasil = await getBuffer(randKey.result)
sock.sendMessage(sender, {video: hasil}, {mimetype: 'gif/video'}, {quoted: m, thumbnail:null})
break

case 'nick': 

  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
if (!q) return reply ('Ex: nick NT DRAGON')
var send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${q}`)
var teks = ` 🧙🏻‍♂️NICKS GERADOS COM SUCESSO!🧙🏻‍♂️


🍙Primeiro ${send.random_1} 
🍙Segundo ${send.random_2} 
🍙Térceiro ${send.random_3} 
🍙Quarto ${send.random_4} 
🍙Quinto ${send.random_5}
 
 
      👾EXTRAS👾
   
   
 👾${send.squares}
 👾${send.inverted_squares}
 👾${send.italic}
 👾${send.bold}
 👾${send.future_alien}
 👾${send.asian_1}
 👾${send.asian_2}
 👾${send.squiggle}
 👾${send.squiggle_2}
 👾${send.squiggle_3}
 👾${send.squiggle_4}
 👾${send.neon}
 
 
    © 𝑁𝑇 𝐷𝑅𝐴𝐺𝑂𝑁-𝑀𝐷
 `
sock.sendMessage(from, {text: teks}, {quoted: m})
break

case 'sugestão':
case 'sugestao':

const sugestao = CMD.slice(9)
if (args.length <= 1) return reply (`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return sock.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: m})
var sug = `💠[ Sugestões ]💠\n📞: wa.me/${sender.split("@s.whatsapp.net")[0]}\n\n\n💭: ${sugestao}`
await sock.sendMessage(`15874108061@s.whatsapp.net`, {text: sug}, {quoted: m})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

case 'placaloli':

if (!q) return reply('Cade o texto ?')
reply ('Aguarde..')
var lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendFileFromUrl(from, lod.message)
break 
 
case 'qrcode':

if (!q) return sock.sendMessage(from, {text: 'Digite um texto/url que deseja criar um código qr'}, {quoted: m})
const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${q}`)
sock.sendMessage(from, {image: bufferr}, {quoted: m})
break
 
case 'hora':

reply (`𝐻𝑜𝑟𝑎𝑟𝑖𝑜 𝑑𝑒 𝐵𝑟𝑎𝑠𝑖𝑙𝑖𝑎: ${time}`)
break

case 'grupos': {

                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ Lista de grupos em que o NT DRAGON-MD exerce suas funções\n\nTotal: ${anu.length} Group\n\n\n`
                 for (let i of anu) {
                     let metadata = await sock.groupMetadata(i)
                     teks += `❗────────────────────────❗\n\n⬡ Nome: ${metadata.subject}\n⬡ ID: ${metadata.id}\n⬡ Data criança: ${moment(metadata.creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n⬡ Membros: ${metadata.participants.length}\n\n✅────────────────────────✅\n⬇️\n⬇\n️`
                 }
                 sock.sendTextWithMentions(from, teks, m)
             }
             break

case 'clear': {

if (!isGroup) return reply('Somente em grupos amg');
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
reply ('❄️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🔥');
}
break

  case 'avaliar':{
  // send a list message!
   const sections = [
    {
	title: `✅De sua avaliação ${pushname}✅`,
	rows: [
	   {
	    title: "★☆☆☆☆", 
	    rowId: ".1pessimo"
	   },	 
	   {
	    title: "★★☆☆☆", 
	    rowId: ".1ruim"
	   },	    
	   {
	    title: "★★★☆☆️", 
	    rowId: ".1bom"
	   },	 
	   {
	    title: "★★★★☆", 
	    rowId: ".1muintobom"
	   },	 
	   {
	    title: "★★★★★", 
	    rowId: ".1perfeito"
	   },	 	   
     ]
    }    
    ]

  const listMessage = {
   text: "🔷",
   footer: "🔷️",
   title: `✅De sua avaliação ${pushname}✅`,
   buttonText: "AVALIAR",
   sections
   }

  const sendm =  sock.sendMessage(
     from, 
     listMessage
  )

  }
  break


case '1pessimo':
reply (`😣 obrigado pela avaliação`)
var suporte = `15874108061@s.whatsapp.net`;
var tsexto = `
╔═══〘❄️ Avaliação ❄️〙═══
║De: ${pushname} 
║
║Número wa.me//${sender.split("@")[0]}
║
║Grupo: ${groupName ? groupName: '🔷PV🔷'}
║
║
║═════════════︎
║Nota: ★☆☆☆☆
╚═════════════︎
`
var obgavalicaoo = `Obrigado pela avaliação ${m.pushName}`
sock.sendMessage(sender, {text: obgavalicaoo}, {quoted: m})
sock.sendMessage(suporte, {text: tsexto}, {quoted: m})
break

case '1ruim':
reply (`😐 obrigado pela avaliação`)
var suporte = `15874108061@s.whatsapp.net`;
var kptexto = `
╔═══〘❄️ Avaliação ❄️〙═══
║De: ${pushname} 
║
║Número wa.me//${sender.split("@")[0]}
║
║Grupo: ${groupName ? groupName: '🔷PV🔷'}
║
║
║═════════════︎
║Nota: ★★☆☆☆
╚═════════════︎
`
var obgavalicaoo = `Obrigado pela avaliação ${m.pushName}`
sock.sendMessage(sender, {text: obgavalicaoo}, {quoted: m})
sock.sendMessage(suporte, {text: kptexto}, {quoted: m})
break

case '1bom':
reply (`☺ obrigado pela avaliação`)
var suporte = `15874108061@s.whatsapp.net`;
var kkktexto = `
╔═══〘❄️ Avaliação ❄️〙═══
║De: ${pushname} 
║
║Número wa.me//${sender.split("@")[0]}
║
║Grupo: ${groupName ? groupName: '🔷PV🔷'}
║
║
║═════════════︎
║Nota: ★★★☆☆
╚═════════════︎
`
var obgavalicaoo = `Obrigado pela avaliação ${m.pushName}`
sock.sendMessage(sender, {text: obgavalicaoo}, {quoted: m})
sock.sendMessage(suporte, {text: kkktexto}, {quoted: m})
break

case '1muintobom':
reply (`😀 obrigado pela avaliação`)
var suporte = `15874108061@s.whatsapp.net`;
var xxxtexto = `
╔═══〘❄️ Avaliação ❄️〙═══
║De: ${pushname} 
║
║Número wa.me//${sender.split("@")[0]}
║
║Grupo: ${groupName ? groupName: '🔷PV🔷'}
║
║
║═════════════︎
║Nota: ★★★★☆
╚═════════════︎
`
var obgavalicaoo = `Obrigado pela avaliação ${m.pushName}`
sock.sendMessage(sender, {text: obgavalicaoo}, {quoted: m})
sock.sendMessage(suporte, {text: xxxtexto}, {quoted: m})
break

case '1perfeito':
reply (`😍 obrigado pela avaliação`)
var suporte = `15874108061@s.whatsapp.net`;
var llltexto = `
╔═══〘❄️ Avaliação ❄️〙═══
║De: ${pushname} 
║
║Número wa.me//${sender.split("@")[0]}
║
║Grupo: ${groupName ? groupName: '🔷PV🔷'}
║
║
║═════════════︎
║Nota: ★★★★★
╚═════════════︎
`
var obgavalicaoo = `Obrigado pela avaliação ${m.pushName}`
sock.sendMessage(sender, {text: obgavalicaoo}, {quoted: m})
sock.sendMessage(suporte, {text: llltexto}, {quoted: m})
break
 
case 'rankbct':

if(!isGroup) return reply ('Só pode ser utilizado este comando, em grupo.')
kurangLimit(m.sender, 0)
var membr = []
const pauzz1 = groupMembers
const pauzz2 = groupMembers
const pauzz3 = groupMembers
const pauzz4 = groupMembers
const pauzz5 = groupMembers
const pauss1 = pauzz1[Math.floor(Math.random() * pauzz1.length)]
const pauss2 = pauzz2[Math.floor(Math.random() * pauzz2.length)]
const pauss3 = pauzz3[Math.floor(Math.random() * pauzz3.length)]
const pauss4 = pauzz4[Math.floor(Math.random() * pauzz4.length)]
const pauss5 = pauzz5[Math.floor(Math.random() * pauzz5.length)]
var pcpauu1 = ["Pequenininha", `Media`, `Gigantesca cabe 10 pau`, `Labios grandes😋`, `Grelinho de diamante`, `Rosinha`, `Apertadinha`, `Melzinho doce`, `Gigantesco`, `Gigantesca "cabe o pau do hulk ai"`, `Fica de fora da calcinha`]
var pcpauu2 = ["Pequenininha", `Media`, `Gigantesca cabe 10 pau`, `Labios grandes😋`, `Grelinho de diamante`, `Rosinha`, `Apertadinha`, `Melzinho doce`, `Gigantesco`, `Gigantesca "cabe o pau do hulk ai"`, `Fica de fora da calcinha`]
var pcpauu3 = ["Pequenininha", `Media`, `Gigantesca cabe 10 pau`, `Labios grandes😋`, `Grelinho de diamante`, `Rosinha`, `Apertadinha`, `Melzinho doce`, `Gigantesco`, `Gigantesca "cabe o pau do hulk ai"`, `Fica de fora da calcinha`]
var pcpauu4 = ["Pequenininha", `Media`, `Gigantesca cabe 10 pau`, `Labios grandes😋`, `Grelinho de diamante`, `Rosinha`, `Apertadinha`, `Melzinho doce`, `Gigantesco`, `Gigantesca "cabe o pau do hulk ai"`, `Fica de fora da calcinha`]
var pcpauu5 = ["Pequenininha", `Media`, `Gigantesca cabe 10 pau`, `Labios grandes😋`, `Grelinho de diamante`, `Rosinha`, `Apertadinha`, `Melzinho doce`, `Gigantesco`, `Gigantesca "cabe o pau do hulk ai"`, `Fica de fora da calcinha`]
const pcc1 = pcpauu1[Math.floor(Math.random() * pcpauu1.length)]
const pcc2 = pcpauu2[Math.floor(Math.random() * pcpauu2.length)]
const pcc3 = pcpauu3[Math.floor(Math.random() * pcpauu3.length)]
const pcc4 = pcpauu4[Math.floor(Math.random() * pcpauu4.length)]
const pcc5 = pcpauu5[Math.floor(Math.random() * pcpauu5.length)]
var pdr = `Essas são as bucetas🍑😋 do grupo: \n${groupName}\n\n@${pauss1.id.split('@')[0]}\n${pcc1}\n\n@${pauss2.id.split('@')[0]}\n${pcc2}\n\n@${pauss3.id.split('@')[0]}\n${pcc3}\n\n@${pauss4.id.split('@')[0]}\n${pcc4}\n\n@${pauss5.id.split('@')[0]}\n${pcc5}\n\n\n 💠iago domina bb😘`
membr.push(pauss1.id)
membr.push(pauss2.id)
membr.push(pauss3.id)
membr.push(pauss4.id)
membr.push(pauss5.id)
mentions(pdr, membr, true)
break

case 'rankpau':

if(!isGroup) return reply ('Só pode ser utilizado este comando, em grupo.')
kurangLimit(m.sender, 0)
var membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
var pdr = `Esses são os caras com o menor e maior pau do Grupo🍆:\n\n${groupName}\n\n@${paus1.id.split('@')[0]}\n${pc1}\n\n@${paus2.id.split('@')[0]}\n${pc2}\n\n@${paus3.id.split('@')[0]}\n${pc3}\n\n@${paus4.id.split('@')[0]}\n${pc4}\n\n@${paus5.id.split('@')[0]}\n${pc5}\n\n 💠iago domina bb😘`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
mentions(pdr, membr, true)
break


case 'preto':
case 'gay':
case 'feio':
case 'lixo':
case 'burro':
case 'gordo':
case 'pobre':
case 'corno':
case 'bonito':
case 'macaco':
case 'gostoso':

if (!isGroup) return reply('Somente em grupos!');
kurangLimit(m.sender, 0)
var membr = []
const pauzz61 = groupMembers
const pauss61 = pauzz61[Math.floor(Math.random() * pauzz61.length)]
var teks = `O ${order} do grupo é: @${pauss61.id.split('@')[0]}\n`
membr.push(pauss61.id)
mentions(teks, membr, true)
break
 
case 'ping':
  sendBtext(from,`𝑂𝑙𝑎 𝑚𝑖𝑛ℎ𝑎 𝑣𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑𝑒 𝑑𝑒 𝑟𝑒𝑠𝑝𝑜𝑠𝑡𝑎 𝑒 𝑑𝑒: ${latensi.toFixed(4)}💬`,`𝐍𝐓 𝐃𝐑𝐀𝐆𝐎𝐍`,
  [
              {              
                buttonId: `.ping`,
                buttonText: {
                  displayText:  `⚡𝐴𝑡𝑢𝑎𝑙𝑖𝑧𝑎𝑟⚡`,
                },
                type: 1,
              },
            ]);
  break 
  
  case 'dogolpe':
  
if(!isGroup) return reply ('Só pode ser utilizado este comando, em grupo.')
if (args.length < 1) return await sock.sendMessage(from, {text: 'coloca um nome'}, {quoted: m})
var pkt = CMD.slice(9)
var iago91 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const iago92 = iago91[Math.floor(Math.random() * iago91.length)]
var jpr = `GOLPISTA ENCONTRADO👉🏻\n\n*GOLPISTA : *${args[0]}\nPORCENTAGEM DO GOLPE : ${iago92}😂\n\n\nEle(a) gosta de ferir sentimentos 😢`
reply (jpr)
break

case 'shipo':

var teks = args.join(" ")
if(teks.length < 10) return reply ('Marque uma pessoa do grupo para encontrar o par dela')
var membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
var jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]} && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break

case 'casal':

if(!isGroup) return reply ('Só pode ser utilizado este comando, em grupo.')
var membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
var jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break
 
case 'pussy':
case 'lesbian':
case 'kuni':
case 'cumsluts':
case 'classic':
case 'boobs':
case 'bj':
case 'anal':

if (isGroup) reply('⚙️Aguarde enviando no seu privado') 
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
var kon = await getBuffer(`https://hardianto.xyz/api/anime/random?nsfw=${order}&apikey=hardianto`)
sock.sendMessage(sender, {image: kon}, {quoted : m, thumbnail:null})                  
break 

case 'figualeatoria':

if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
reply (`Acalme seu coração já estou enviando🤙`)
var anu = await getBuffer(`https://supra-api.herokuapp.com/api/stickera?apikey=supraz`)
sock.sendMessage(from, {sticker: anu}, {quoted: m })
break
 
case 'metadinha':

if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
reply('💠Aguarde......💠(Aconselho usar de 10 em 10 minutos)')
var get = await fetchJson(`https://api.zacros.my.id/randomimg/ppcouple`) 
var male = await getBuffer(`${get.male}`) 
sock.sendMessage(from, {image: male}, {quoted: m});;
var female = await getBuffer(`${get.female}`) 
setTimeout( () => {
sock.sendMessage(from, {image: female}, {quoted: m})
}, 1100)
break
 
case 'tempban':
if (!isOwner) return reply ('💠Somente o iago !💠')
if(!isGroup) return reply ('Só pode ser utilizado este comando, em grupo.')
if (!isBotGroupAdmins) return reply('Desculpa iago sou adm não 🥺');
if (args[1]=="segundos") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply("*selecionar:*\nsegundos\nminuto\nhora")}
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) return;
if (m.message.extendedTextMessage.contextInfo.participant === undefined) {
var entah = m.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.sayo> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
sock.groupParticipantsUpdate(from, M_exe, "remove")
} else {
sock.groupParticipantsUpdate(from, [exe1[0]], "remove")
}
} else {
var exe1 = m.message.extendedTextMessage.contextInfo.participant
sock.groupParticipantsUpdate(from, [exe1], "remove")
}
reply(`[❗] tempo de ban: ${args[0]} ${args[1]}`)
setTimeout( () => {
var exe1 = m.message.extendedTextMessage.contextInfo.participant
sock.groupParticipantsUpdate(from, [exe1], "add")	
}, timer)
break					

case 'fechar': {

if (!isGroup) return reply('So em grupo!');
if (!isGroupAdmins) return reply('Tinha que ser fimose msm');
if (!isBotGroupAdmins) return reply('Amg nao sou adm!');
await sock.groupSettingUpdate(from, 'announcement')
} 
break

case 'abrir': {

if (!isGroup) return reply('So em grupo!');
if (!isGroupAdmins) return reply('Tinha que ser fimose msm');
if (!isBotGroupAdmins) return reply('Amg nao sou adm!');
sock.groupSettingUpdate(from, 'not_announcement')
}
break

case 'gp':

if (!isGroup) return reply('So em grupo!');
if (!isGroupAdmins) return reply('Tinha que ser fimose msm');
if (!isBotGroupAdmins) return reply('Amg nao sou adm!');
  sendBtext(from,`Escolha Abaixo Oque Você Deseja Fazer`,`𝐍𝐓 𝐃𝐑𝐀𝐆𝐎𝐍`,
  [
              {              
                buttonId: `.abrir`,
                buttonText: {
                  displayText:  `ᎪᏴᎡᏆᎡ ᏀᎡႮᏢϴ🔓`,
                },
                type: 1,
              },
              {              
                buttonId: `.fechar`,
                buttonText: {
                  displayText:  `ҒᎬᏟᎻᎪᎡ ᏀᎡႮᏢϴ🔒`,
                },
                type: 1
              },
            ]);
  break

case 'tiktok':

if (!q) return reply('Por favor coloque um link de tiktok na frente do comando!')
if (!q.includes('tiktok')) return reply('Link somente do tik tok!')

  sendBtext(from,`𝐸𝑠𝑐𝑜𝑙ℎ𝑎 𝑒𝑚 𝑞𝑢𝑒 𝑚𝑖𝑑𝑖𝑎 𝑣𝑜𝑐𝑒 𝑑𝑒𝑠𝑒𝑗𝑎`,`𝐍𝐓 𝐃𝐑𝐀𝐆𝐎𝐍-𝐌𝐃`,
  [
              {              
                buttonId: `.tiktokvideo ${q}`,
                buttonText: {
                  displayText:  `𝑉𝐼𝐷𝐸𝑂🎥`,
                },
                type: 1,
              },
              {              
                buttonId: `.tiktokaudio ${q}`,
                buttonText: {
                  displayText:  `𝐴𝑈𝐷𝐼𝑂🎵`,
                },
                type: 1
              },
            ]);
  break

case 'bct':
case 'buceta':

var irandom = Math.floor(Math.random() * 35) 
const fundura = irandom
if (fundura < 13 ) {var pp = 'Eita aguenta muinto rsrs'} else if (fundura == 13 ) {var pp = 'Homens que tem 15cm comemoram😳'} else if (fundura == 14 ) {var pp = 'Sera muinta siririca 🤔'} else if (fundura == 15 ) {var pp = 'minha fia ta enfiando o que ai ???'} else if (fundura == 16 ) {var pp = 'cauma moça e mt siririca'} else if (fundura == 17 ) {var pp = 'Tu e um poço mizara ?'} else if (fundura == 18 ) {var pp = 'Tu e um poço mizera ?'} else if (fundura == 19 ) {var pp = 'parabens negoes nao te machuca mais'} else if (fundura == 20 ) {var pp = 'Ta mais grande do que de casada em pqp'} else if (fundura == 21 ) {var pp = 'Voce e casada moça?'} else if (fundura == 22 ) {var pp = 'O buraco mais fundo que ja teve no planeta terra '} else if (fundura == 23 ) {var pp = 'O buraco mais fundo que ja teve no planeta Terra'} else if (fundura == 24 ) {var pp = 'Cabe 4 pau ai sem fazer força '} else if (fundura > 25 ) {var pp = 'Sem palavras'}
let hhhasil = `Sua bu😳eta @${sender.split('@')[0]} tem ${irandom}cm de profundidade\n\n${pp}`
reply(hhhasil)
break

case 'bcadm':  
if (!isOwner) return reply('❗Comando privado pro Iago pelo risco do bot levar ban no numero❗')
if (!isGroupAdmins) return reply('Fimosinha usando comando de adm ?')
if (args.length < 1) return reply('texto.......')
var fgp = await groupMembers
var nomor = m.participant
for (let _ of fgp) {
sendMess(_.id, `╭────────────────────╮
┞┧「🔷TRANSMISSÃO DO ADM🔷」
┞┧
┞┧
┞┧ 👤Nome: ${pushname}
┞┧ 
┞┧ 👥Grupo: ${groupName}
┞┧ 
┞┧ 📞Número: wa.me/${(sender.split('@')[0])}
┞┧ 
┞┧
┞┧
╰────────────────────╯

╭────────────────────╮ 
 🗣️:${CMD.slice(6)} 
╰────────────────────╯`)
}
reply('Grupo de transmissão bem-sucedido') 
break

await store.chats.all().map(v => v.id)

case 'bcall':  
if (!isOwner) return reply('Somente o iago!')
if (args.length < 1) return reply('texto.......')
var fgp = await store.chats.all().map(v => v.id)
for (let _ of fgp) {
let txt88 = `

╭────TRANSMISSÃO DO IAGO──── 
 ${CMD.slice(6)} 
╰────────────────────`
sock.sendMessage(_, {text: `${txt88}`, quoted: m})
}
reply('Transmissão bem-sucedido') 
break 
 
case 'infinito':
if (!isPremium) return reply('[❗] Ôpa esse comando e apenas para quem comprou o Premium!\nCusta R$5,00\n\nCaso tenha interesse fale com o iago!\n\nwa.me/+15874108061')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply('Coloque limit na frente de infinito!')
 var anu = args[1]
 
  if (args[0] === 'limit'){
  let noh = 0 * anu
 if (!args[1]) return reply(`Ex : ${prefix + order} limit 2`)
 if (isMonay < noh) return reply('Seu dinheiro restante não é suficiente para esta compra')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
 }
break
	
 
case 'addprem': 
if (!isOwner) return reply('Somente meu dono!')
if (!isGroup) return reply('Iago somente em grupo 😢')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return 
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
var pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/premium.json', JSON.stringify(premium))
var susp = `@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso `
mentions(`${susp}`, mentioned, true)   
break

case 'dellprem': 
if (!isOwner) return reply('Somente meu dono!')
if (!isGroup) return reply('Iago somente em grupo 😢')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return 
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
var pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}`
}
let dellprem = CMD.slice(12)
let positio = premium.indexOf(dellprem)
premium.splice(positio, 1)
fs.writeFileSync('./datab/premium.json', JSON.stringify(premium))
var susp = `@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium `
mentions(`${susp}`, mentioned, true)   
break

case 'ban': 
if (!isOwner) return reply('Somente meu dono!')
if (!isGroup) return reply('Iago somente em grupo 😢')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return 
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
var pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}`
}
bannumero.push(`${mentioned}`)
fs.writeFileSync('./datab/grupos/ban2.json', JSON.stringify(bannumero))
var susp = `@${mentioned[0].split('@')[0]} foi adicionado à lista negra!`
mentions(`${susp}`, mentioned, true)   
break

case 'unban': 
if (!isOwner) return reply('Somente meu dono!')
if (!isGroup) return reply('Iago somente em grupo 😢')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return 
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
var pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}`
}
let unban = CMD.slice(12)
let positioo = bannumero.indexOf(unban)
bannumero.splice(positioo, 1)
fs.writeFileSync('./datab/grupos/ban2.json', JSON.stringify(bannumero))
var susp = `@${mentioned[0].split('@')[0]} foi removido da lista negra!`
mentions(`${susp}`, mentioned, true)   
break

case 'doar': {
reply ('🔱 Olá faça uma doação e contribua com que o bot permanessa ativo🔱\n\n\n 🍃Qualquer valor e bem vindo nao existe quantia baixa!🍃\n\n\n 🧾Chave E-mail 🧾')
setTimeout( () => {
reply ('iago.ntdragon.pix@gmail.com')
}, 1110)
}
break

case 'toimg': {

if (!m.isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
await reply('Fazendo!');
let quotedMessSticker = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage;
var buff = await getFileBuffer(quotedMessSticker, 'sticker')
sock.sendMessage(from, {image: buff}, {quoted: m})
}
break

case 'tomp3':

if (!m.isQuotedVideo) return reply('Marque o video pfv')
reply('Aguarde 1 mnt!')
encmedia = m.isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
var rane = getRandom('.'+await getExtension(encmedia.mimetype))
var buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
var media = rane 
var ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
var buffer = fs.readFileSync(ran)
sock.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: m})
fs.unlinkSync(ran)
})
break

case 'dinheiro':
case 'dinhero':

reply(`Seu dinheiro atual e de: ${getMonay(m.sender) ? getMonay(m.sender) : 'Você não trocou nada para ter dinheiro!' }`)
break

case 'esquilo':
if (!m.isQuotedAudio) return reply('Marque um áudio')
var muk = m.isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
var gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
var hah = fs.readFileSync(ran)
sock.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
break

case 'compra':{

const sections = [
    {
	title: "𝐼𝑑𝑒𝑖𝑎 𝑏𝑦 𝐻𝑒𝑟𝑖𝑘𝑒 𝑁𝑢𝑚𝑒𝑟𝑜: +17542003985",
	rows: [
	   {
	    title: "💰𝑄𝑈𝐴𝐿 𝑀𝐸𝑈 𝐷𝐼𝑁𝐻𝐸𝑅𝐼𝑂?💰️", 
	    rowId: ".dinhero"
	   },
	   {
	    title: "🏷️𝐿𝐼𝑀𝐼𝑇 1🏷️", 
	    rowId: ".buy limit 1"
	   },
	   {
	    title: "🏷️𝐿𝐼𝑀𝐼𝑇 2🏷️", 
	    rowId: ".buy limit 2"
	   },	 
	   {
	    title: "🏷️𝐿𝐼𝑀𝐼𝑇 3🏷️", 
	    rowId: ".buy limit 3"
	   },
	   {
	    title: "🏷️𝐿𝐼𝑀𝐼𝑇 4🏷️", 
	    rowId: ".buy limit 4"
	   },
	   {
	    title: "🏷️𝐿𝐼𝑀𝐼𝑇 5🏷", 
	    rowId: ".buy limit 5"
	   },
	   {
	    title: "🏷️𝐿𝐼𝑀𝐼𝑇 6🏷", 
	    rowId: ".buy limit 6"
	   },
	   {
	    title: "🏷️𝐿𝐼𝑀𝐼𝑇 7🏷", 
	    rowId: ".buy limit 7"
	   },
	   {
	    title: "🏷️𝐿𝐼𝑀𝐼𝑇 8🏷", 
	    rowId: ".buy limit 8"
	   },
	   {
	    title: "🏷️𝐿𝐼𝑀𝐼𝑇 9🏷", 
	    rowId: ".buy limit 9"
	   },
	   {
	    title: "🏷️𝐿𝐼𝑀𝐼𝑇 10🏷", 
	    rowId: ".buy limit 10"
	   },
	   {
	    title: "🧪𝑃𝑂𝐶𝐴𝑂 1🧪", 
	    rowId: ".buy pocao 1"
	   },	
	   {
	    title: "🧪𝑃𝑂𝐶𝐴𝑂 2🧪", 
	    rowId: ".buy pocao 2"
	   },	    
	   {
	    title: "🧪𝑃𝑂𝐶𝐴𝑂 3🧪", 
	    rowId: ".buy pocao 3"
	   },	
	   {
	    title: "🧪𝑃𝑂𝐶𝐴𝑂 4🧪", 
	    rowId: ".buy pocao 4"
	   },	
	   {
	    title: "🧪𝑃𝑂𝐶𝐴𝑂 5🧪", 
	    rowId: ".buy pocao 5"
	   },	
	   {
	    title: "🧪𝑃𝑂𝐶𝐴𝑂 6🧪", 
	    rowId: ".buy pocao 6"
	   },	
	   {
	    title: "🧪𝑃𝑂𝐶𝐴𝑂 7🧪", 
	    rowId: ".buy pocao 7"
	   },	
	   {
	    title: "🧪𝑃𝑂𝐶𝐴𝑂 8🧪", 
	    rowId: ".buy pocao 8"
	   },	
	   {
	    title: "🧪𝑃𝑂𝐶𝐴𝑂 9🧪", 
	    rowId: ".buy pocao 9"
	   },	
	   {
	    title: "🧪𝑃𝑂𝐶𝐴𝑂 10🧪", 
	    rowId: ".buy pocao 10"
	   },	
	   {
	    title: "🐟️𝐼𝑆𝐶𝐴 1🐟️", 
	    rowId: ".buy isca 1"
	   },	
	   {
	    title: "🐟️𝐼𝑆𝐶𝐴 2🐟️", 
	    rowId: ".buy isca 2"
	   },	 
	   {
	    title: "🐟️𝐼𝑆𝐶𝐴 3🐟️", 
	    rowId: ".buy isca 3"
	   },	
	   {
	    title: "🐟️𝐼𝑆𝐶𝐴 4🐟️", 
	    rowId: ".buy isca 4"
	   },	
	   {
	    title: "🐟️𝐼𝑆𝐶𝐴 5🐟️", 
	    rowId: ".buy isca 5"
	   },	
	    {
	    title: "🐟️𝐼𝑆𝐶𝐴 6🐟️", 
	    rowId: ".buy isca 6"
	   },	
	    {
	    title: "🐟️𝐼𝑆𝐶𝐴 7🐟️", 
	    rowId: ".buy isca 7"
	   },	
	    {
	    title: "🐟️𝐼𝑆𝐶𝐴 8🐟️", 
	    rowId: ".buy isca 8"
	   },	
	    {
	    title: "🐟️𝐼𝑆𝐶𝐴 9🐟️", 
	    rowId: ".buy isca 9"
	   },	
	    {
	    title: "🐟️𝐼𝑆𝐶𝐴 10🐟️", 
	    rowId: ".buy isca 10"
	   },	
     ]
    }    
    ]

  const listMessage = {
   text: "⬇️",
   footer: "⬇️",
   title: "𝐶𝑜𝑚𝑝𝑟𝑎𝑠",
   buttonText: "𝐸𝑠𝑐𝑜𝑙ℎ𝑎 𝑢𝑚𝑎 𝑜𝑝𝑐𝑎𝑜 𝑎𝑏𝑖𝑎𝑥𝑜",
   sections
   }

  const sendm =  sock.sendMessage(
     from, 
     listMessage
  )
  }
break
case 'troca':
case 'trocar':{

const sections = [
    {
	title: "𝐼𝑑𝑒𝑖𝑎 𝑏𝑦 𝐻𝑒𝑟𝑖𝑘𝑒 𝑁𝑢𝑚𝑒𝑟𝑜: +17542003985",
	rows: [
		{
	    title: "📝️𝑃𝐸𝑅𝐹𝐼𝐿📝", 
	    rowId: ".perfil"
	   },	
	{
	    title: "📝️𝐼𝑁𝑉𝐸𝑁𝑇𝐴𝑅𝐼𝑂📝", 
	    rowId: ".inventario"
	   },	
	   {
	    title: "❤️𝐶𝑈𝑅𝐴𝑅❤️", 
	    rowId: ".curar"
	   },	
	   {
	    title: "🏹𝐶𝐴𝐶𝐴🏹", 
	    rowId: ".caça"
	   },	
	   {
	    title: "🎣️𝑃𝐸𝑆𝐶𝐴🎣", 
	    rowId: ".pescar"
	   },	
	   {
	    title: "⛏️️𝑀𝐼𝑁𝐸𝑅𝐴𝑅⛏️", 
	    rowId: ".minerar"
	   },	
	{
	    title: "🐟️𝑃𝐸𝐼𝑋𝐸 100🐟️", 
	    rowId: `.jual peixe 100`
	   },	
	   {
	    title: "🐔️𝐺𝐴𝐿𝐼𝑁𝐻𝐴 100🐔️", 
	    rowId: `.jual galinha 100`
	   },	
	   {
	    title: "🐇️𝐶𝑂𝐸𝐿𝐻𝑂 𝐷𝑂𝑈𝑅𝐴𝐷𝑂 1🐇️", 
	    rowId: `.jual coelho 1`
	   },	
	   {
	    title: "🐑️𝑂𝑉𝐸𝐿𝐻𝐴 50🐑️", 
	    rowId: `.jual ovelha 50`
	   },	
	   {
	    title: "🗡️𝐹𝐸𝑅𝑅𝑂🗡️️", 
	    rowId: `.jual ferro ${getBesi(m.sender)}`
	   },
	   {
	    title: "💰️𝐸𝑆𝑀𝐸𝑅𝐴𝐿𝐷𝐴💰️", 
	    rowId: `.jual esmeralda ${getEmerald(m.sender)}`
	   },	
   ]
    }    
    ]

  const listMessage = {
   text: "⬇️",
   footer: "⬇️",
   title: "𝑇𝑅𝑂𝐶𝐴𝑅 𝐼𝑇𝐸𝑁𝑆",
   buttonText: "𝐸𝑠𝑐𝑜𝑙ℎ𝑎 𝑢𝑚𝑎 𝑜𝑝𝑐𝑎𝑜 𝑎𝑏𝑖𝑎𝑥𝑜",
   sections
   }

  const sendm =  sock.sendMessage(
     from, 
     listMessage
  )
  }
break

case 'celular':

if (!q) return reply(`Qual celular você está procurando?`)
var teks = args.join(' ')
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
📝 Titulo: ${anu.judul}\n
❗Última atualização: ${anu.rilis}\n
📱 Tamanho do celular: ${anu.ukuran}\n
⚡ Tipo: ${anu.type}\n
🗃️ Armazenamento: ${anu.storage}\n
📴 Tela: ${anu.display}\n
📳 Polegada: ${anu.inchi}\n
🔰 Resolução da câmera: ${anu.pixel}\n
📲 Resolução do video: ${anu.videoPixel}\n
💭 Ram do celular: ${anu.ram}\n
👤 Hardware do celular: ${anu.chipset}\n
⚠️ Bateria: ${anu.batrai}\n
🔋 Tipo da bateria: ${anu.merek_batre}`
var wew = fs.readFileSync('./lib/logo2.jpg')
await sock.sendMessage(from, {image: wew, thumbnail:null, caption: `${busca_celular}`}, {quoted: m})
break

 case 'entre': {
 if (!isPremium) return reply('[❗] Ôpa esse comando e apenas para quem comprou o Premium!\nCusta R$5,00\n\nCaso tenha interesse fale com o iago!\n\nwa.me/+15874108061')
                if (!q) return reply(' Link Group?')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                reply('Nesse momento ja devo estar em seu grupo!!!')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await sock.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break

case 'ttp':

if (args.length ==0) return reply(`Como vou fazer se você nem colocou o texto na frente do comando?`)
var tp = args.join (" ")
reply('Fazendo aguarde!')
var ttp = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${encodeURI(q)}&color=black&apikey=hardianto`)
sock.sendMessage(from, {sticker: ttp}, { quoted: m })
break

case 'mediafire':

if (args.length < 1) return reply('Onde está o link?')
if(isUrl(args[0]) && !args[0].includes('mediafire')) return reply("Só é permitido link do mediafire!")
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra \n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
var teks = args.join(' ')
var res = await mediafireDl(teks)
var result = `
️🔥𝑀𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒 𝑑𝑜𝑤𝑛𝑙𝑜𝑎𝑑🔥

📁 𝑁𝑜𝑚𝑒 : ${res[0].nama}\n\n
📈 𝑇𝑎𝑚𝑎𝑛ℎ𝑜 : ${res[0].size}\n\n
🔗 𝐿𝑖𝑛𝑘 : ${res[0].link}\n\n

𝐹𝑎𝑧𝑒𝑛𝑑𝑜 𝑑𝑜𝑤𝑛𝑙𝑜𝑎𝑑 𝑑𝑎 𝑚𝑖𝑑𝑖𝑎 𝑝𝑜𝑟 𝑓𝑎𝑣𝑜𝑟 𝑎𝑔𝑢𝑎𝑟𝑑𝑒......`
reply(result)
sendFileFromUrl(from, res[0].link, {mimetype: res[0].mime, filename: res[0].nama, quoted: m})
break

case 'tourl':

if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra \n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
try {
if ((isMedia && !m.message.videoMessage || m.isQuotedImage || m.isQuotedVideo ) && args.length == 0) {
let quotedMess = m.isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
var media = await sock.downloadAndSaveMediaMessage(quotedMess)
let  telegraphh = telegraph;
reply(util.format(await telegraphh(media)))
} else {
reply('🙄Use ou responda a uma foto ou vídeo ')
}
} catch (err) {
console.log('Error : %s', color(err, 'red'));
}
break

case 'gato':{

if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra \n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
  try{
  anu = await fetchJson(`https://some-random-api.ml/img/cat`)
   anu1 = await getBuffer(anu.link)
              
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: '😸'
      }, type: 1},
    ]
    let buttonMessage = {
      image: anu1,
      caption: "𝙼𝚊𝚒𝚜 𝚏𝚘𝚏𝚘 𝚚 𝚟𝚌✅",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   } catch { reply("erro ") }
 }
 break

case 'cachorro':{

if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra \n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
  try{
  anu = await fetchJson(`https://some-random-api.ml/img/dog`)
   anu1 = await getBuffer(anu.link)
              
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: '🐶'
      }, type: 1},
    ]
    let buttonMessage = {
      image: anu1,
      caption: "𝙼𝚊𝚒𝚜 𝚏𝚘𝚏𝚘 𝚚 𝚟𝚌✅",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   } catch { reply("erro ") }
 }
 break

case 'conselho':

if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra \n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
reply(`Acalme seu coração já estou enviando🤙`)
try {
anu = await fetchJson(`https://supra-api.herokuapp.com/api/conselho?apikey=supraz`)
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i.ibb.co/4T9C6wM/depositphotos-26028721-stock-photo-fantasy-moon-and-clouds-over.webp'
}
var its = await getBuffer (ppimg)
var randTeks = `\n\n${anu.frase}\n\n`
sock.sendMessage(from, {image: its, caption: randTeks}, {quoted: m})
break

case 'perfil':

try {
var ppimg = await sock.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
var gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const dptr = `     「 🔥𝑃𝐸𝑅𝐹𝐼𝐿🔥 」\n\n
🗒 Nome : ${pushname}\n
☎️ Número : @${sender.split("@")[0]}\n
🐂 Nível gado : ${nivelgador}${nivelgado2r}%\n
📱 Seu Célular : ${m.key.id.length > 21 ? 'Android 🤣' : m.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}\n
😈 Nível puta : ${putar}${putar2}%\n
😋 Nível de gostosura : ${gostosurar}${gostosurar2}%\n
🍼 Valor do programa : R$${programa}`
var daftarimg = await getBuffer(ppimg)
sock.sendMessage(from, {image: daftarimg, caption: dptr}, {quoted: m})
break

case 'emoji':
case 'semoji':

if(!q) return sendBtext(from,`\n\n𝐸𝑋: .𝐸𝑀𝑂𝐽𝐼 🤨/𝑊𝐻𝐴𝑇𝑆𝐴𝑃𝑃\n\n`,`𝐍𝐓 𝐃𝐑𝐀𝐆𝐎𝐍`,
  [
              {              
                buttonId: `.helpemoji`,
                buttonText: {
                  displayText:  `𝑀𝐴𝐼𝑆 𝑂𝑃𝐶𝑂𝐸𝑆`,
                },
                type: 1,
              }
            ])
var emot = q.split('/')[0]
var jemot = q.split('/')[1]
if(jemot == 'apple'){
var idemot = 0
}
else if(jemot == 'google'){
var idemot = 1
}
else if(jemot == 'samsung'){
idemot = 2
}
else if(jemot == 'microsoft'){
var idemot = 3
}
else if(jemot == 'whatsapp'){
var idemot = 4
}
else if(jemot == 'twitter'){
var idemot = 5
}
else if(jemot == 'facebook'){
var idemot = 6
}
else if(jemot == 'joypixels'){
var idemot = 7
}
else if(jemot == 'openmoji'){
var idemot = 8
}
else if(jemot == 'emojidex'){
var idemot = 9
}
else if(jemot == 'lg'){
var idemot = 10
}
else if(jemot == 'htc'){
var idemot = 11
}
else if(!jemot){
var idemot = 4
}
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
reply (`Aguarde!`)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
console.log(`PEDIDO DE COMANDO EMOJI`);
sendStickerFromUrl(from, emoji.images[idemot].url, m)
})
break

case 'helpemoji':
reply(`
╔┅═┅═┅═┅═┅═┅═┅═᳀
║
║➛${prefix}emoji 🥺/whatsapp
║
║➛${prefix}emoji 🥺/apple
║
║➛${prefix}emoji 🥺/google
║
║➛${prefix}emoji 🥺/samsung
║
║➛${prefix}emoji 🥺/microsoft
║
║➛${prefix}emoji 🥺/twitter
║
║➛${prefix}emoji 🥺/facebook
║
║➛${prefix}emoji 🥺/joypixels
║
║➛${prefix}emoji 🥺/lg
║
║➛${prefix}emoji 🥺/htc
║
╚┅═┅═┅═┅═┅═┅═┅═᳀
`)
break

case 'emojimix': {

	        if (!q) return reply(`Ex: ${prefix + order} 😅+🤔`)
		let [emoji1, emoji2] = q.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await sendStickerFromUrl(from, res.url, m)
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break

case 'csticker':  

if ((isMedia && !m.message.videoMessage || m.isQuotedImage)) {
var post = m.isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : m
var imagem = await downloadContentFromMessage(post, 'image')
var base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply('Aguarde')
let link = await upload(base64)
var ranp = getRandom('.gif')
var rano = getRandom('.webp')
var ini_buffer = `https://api-exteam.herokuapp.com/api/circle?img=${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
sock.sendMessage(from, {sticker: buff}, { quoted: m})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'togif':

if (!m.isQuotedSticker) return reply('𝑀𝑎𝑟𝑞𝑢𝑒 𝑢𝑚 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑎𝑛𝑖𝑚𝑎𝑑𝑜!')
if ((isMedia && !m.message.videoMessage || m.isQuotedSticker) && args.length == 0) {
var buff = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('𝑃𝑜𝑟 𝑓𝑎𝑣𝑜𝑟 𝑎𝑔𝑢𝑎𝑟𝑑𝑒 𝑡𝑟𝑎𝑛𝑠𝑓𝑜𝑟𝑚𝑎𝑛𝑑𝑜 𝑒𝑚 𝑔𝑖𝑓')
var a = await webp_mp4(buff)
var mp4 = await getBuffer(a)
sock.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: m})
fs.unlinkSync(buff)
}
break

case 'bangp':
if (!isGroup) return reply('Somente em grupos!')
if (!isOwner) return reply('Somente meu dono')
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'unbangp':
if (!isGroup) return reply('Somente em grupos!')
if (!isOwner) return reply('Somente meu dono')
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'mutar':
if (!isGroup) return reply('Somente em grupos!')
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (isMuuter) return reply(`Este grupo ja está mutado`)
muterrchat.push(from)
fs.writeFileSync('./datab/grupos/muter.json', JSON.stringify(muterrchat))
reply(`Grupo multado com sucesso`)
break

case 'desmutar':
if (!isGroup) return reply('Somente em grupos!')
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
let ccur = muterrchat.indexOf(from)
muterrchat.splice(ccur, 1)
fs.writeFileSync('./datab/grupos/muter.json', JSON.stringify(muterrchat))
reply(`Grupo desmultado...`)
break


case 'delvote':
case 'delvoto':  
if(!m.key.remoteJid) return
delVote(from)
reply('votação deletada com sucesso')
break

case 'votar':
case 'votacao': 
case 'votação': 

if(!isGroup) return reply('Somente em grupos')
if(!CMD.includes("/")) return reply(`Cade a /, exemplo ${prefix}votação @marca/Ele é total gay/ 1`)
if(!q) return reply('*Votação*\n\n'+ prefix+ 'votar @tag marcar / pergunta  / 1 (1 = 1 Minuto)')
if (m.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || m.message.extendedTextMessage.contextInfo == null) {
let id = m.message.extendedTextMessage.contextInfo.mentionedJid[0]
var split = args.join(' ').replace('@', '').split('/')
if(!Number(split[2])) return reply('cade os minutos eim?\n\n1 = 1 Minuto')
await mentions('Vote ' +'@'+ id.split('@')[0]+' para' +'\n\n' + `voto = ✅\ndevoto = ❌\n\npergunta: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break

case 'infovotação':
case 'infovotacao':  
await sock.sendMessage(from, {text: infovotacao(prefix, pushname)}, {quoted: m})  
break

case 'arma':
case 'figuarma':

if ((isMedia && !m.message.videoMessage || m.isQuotedImage)) {
var post = m.isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : m
reply('Aguarde!')
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
let link = await upload(base64)
var postt = await getBuffer(`https://api-exteam.herokuapp.com/api/gun?img=${link}`)
sock.sendMessage(from, {image: postt}, {quoted: m})
} else {
reply('Selecione uma imagem...!')
}
break

case 'ler': 
case 'lerfoto':  

if ((isMedia && !m.message.videoMessage || m.isQuotedImage) && args.length == 0) {
encmedia = m.isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
var media = rane 
reply('Aguarde')
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Somente fotos!')
}
break

case 'cep':

if (args.length == 0) return reply(`Exemplo: ${prefix + order} 54330235`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra \n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
var query = args.join(" ")
var get_result = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${query}`)
var x = get_result.resultado
var k = `CEP : ${x.cep}\n
LOGRADOURO: ${x.logradouro}\n
BAIRRO : ${x.bairro}\n
LOCALIDADE : ${x.localidade}\n
UF : ${x.uf}\n
IBGE : ${x.ibge}\n
GIA : ${x.gia}\n
DDD : ${x.ddd}\n
SIAFI : ${x.siafi}\n`
reply(k)
break 

case 'google':

if (args.length < 1) return reply('O que você está procurando?')
if (isGroup) reply('⚙️Aguarde enviando pesquisa no seu privado') 
var teks = args.join(' ')
var res = await ggs({'query' : `${teks}`})
var kant = ``
for (let i of res) {
teks += `\n
💠「「🌹 GOOGLE 🌹」」💠\n
‣🖋️Título : ${i.title}\n
‣🔗Link : ${i.link}\n
‣🌐Sobre : ${i.snippet}\n\n\n\n`
}
sock.sendMessage(sender, {text: teks})
break

case 'googleimage':

if (args.length < 1) return reply('O que você está procurando?')
if (isGroup) reply('⚙️Aguarde enviando foto no seu privado') 
var teks = `${q}`
var res = await googleImage(teks, google)
function google(err, result){
if (err){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)]
sock.sendMessage(sender, {image: {url: random.url}, caption: `👑iago domina bb😘👑`}, {quoted: m, thumbnail: null})
}
}
break

case 'nazista':

if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
reply(`Pesquisando a sua ficha de nazista : ${pushname} aguarde... `)
var weww = ('https://i.ibb.co/gvTW0Y4/images.jpg')
var zxzzz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
var randommm =  zxzzz[Math.floor(Math.random() * zxzzz.length)]
sock.sendMessage(from, {image: {url: weww}, caption: `O quanto você é nazista? ${pushname}\n\nVocê é: ${randommm}% nazista 卐`}, {quoted: m})
break 

case 'ranknazista':{

if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
setTimeout( () => {
var zxzzzz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
var randommmm =  zxzzzz[Math.floor(Math.random() * zxzzzz.length)]
var randommmm1 =  zxzzzz[Math.floor(Math.random() * zxzzzz.length)]
var randommmm2 =  zxzzzz[Math.floor(Math.random() * zxzzzz.length)]
var randommmm3 =  zxzzzz[Math.floor(Math.random() * zxzzzz.length)]
var randommmm4 =  zxzzzz[Math.floor(Math.random() * zxzzzz.length)]

var membr = []
const pauzz11 = groupMembers
const pauzz22 = groupMembers
const pauzz33 = groupMembers
const pauzz44 = groupMembers
const pauzz55 = groupMembers
const pauss11 = pauzz11[Math.floor(Math.random() * pauzz11.length)]
const pauss22 = pauzz22[Math.floor(Math.random() * pauzz22.length)]
const pauss33 = pauzz33[Math.floor(Math.random() * pauzz33.length)]
const pauss44 = pauzz44[Math.floor(Math.random() * pauzz44.length)]
const pauss55 = pauzz55[Math.floor(Math.random() * pauzz55.length)]
var pdr = `💂Esses são os nazistas do grupo!💂\n\n\n💂[${randommmm}%]💂@${pauss11.id.split('@')[0]}\n\n💂[${randommmm1}%]💂@${pauss22.id.split('@')[0]}\n\n💂[${randommmm2}%]💂@${pauss33.id.split('@')[0]}\n\n💂[${randommmm3}%]💂@${pauss44.id.split('@')[0]}%\n\n💂[${randommmm}%]💂@${pauss55.id.split('@')[0]}\n\n\n 💠iago domina bb😘`
membr.push(pauss11.id)
membr.push(pauss22.id)
membr.push(pauss33.id)
membr.push(pauss44.id)
membr.push(pauss55.id)
mentions(pdr, membr, true)
}, 300)
}
break

case 'f':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
case 's':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
if ((isMedia && !m.message.videoMessage || m.isQuotedImage) && args.length == 0) {
const encmedia = m.isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (order) {
console.log(`Started : ${order}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
})
.on('end', function () {
console.log('Finish')
var buffer = fs.readFileSync(ran)
sock.sendMessage(from, {sticker: buffer}, {quoted: m})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && m.message.videoMessage.seconds < 10 || m.isQuotedVideo && m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = m.isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (order) {
console.log(`Started : ${order}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
})
.on('end', function () {
console.log('Finish')
var buffer = fs.readFileSync(ran)
sock.sendMessage(from, {sticker: buffer}, {quoted: m})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} 
break

    case 'instagram':
        if (!q) return reply('link?')
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('Só link de Instagram')
        if (!isInventoryLimit){ addInventoriLimit(m.sender) }
        if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra \n\nCaso queria limit infinito mande .infinito")
        kurangLimit(m.sender, 1)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    sock.sendMessage(from, {video: link, caption: `Tipo : ${i.type}`}, {quoted: m})
                } else {
                    let link = await getBuffer(i.url)
                    sock.sendMessage(from, {image: link, caption: `Tipo : ${i.type}`}, {quoted: m})                  
                }
            }
            });
	    break  

case 'otaku':
            if(!q) return reply('Nome do anime?')
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra \n\nCaso queria limit infinito mande .infinito")
            kurangLimit(m.sender, 1)
            let anime = await hx.otakudesu(q)
            var rem = `Título : ${anime.judul}\n
Japão : ${anime.jepang}\n
Avaliação : ${anime.rate}\n
Produtor : ${anime.produser}\n
Status : completo\n
Ep : ${anime.episode}\n
Genero : ${anime.genre}\n\n\n
\nLink Download SD : ${anime.batchSD}\nLink Download HD : ${anime.batchHD}`
            var ram = await getBuffer(anime.img)
            sock.sendMessage(from, {image: ram, caption:rem},{quoted:m})
            break

    case 'playstore':
            if(!q) return reply('Nome do app ?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉'
            for (let i of play){
            store += `\n「 PLAY STORE 」\n
-Nome : ${i.name}
-Link : ${i.link}\n\n\n❉─────────────────────❉`
            }
            reply(store)
            break

    case 'pinterest':
            if(!q) return reply('Oque está procurando?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await sock.sendMessage(from, {image: di},{quoted: m})
            break



  default:
  
/*  
if (isCmd) {
var teks = `${order}`
var res = await googleImage(teks, google)
function google(err, result){
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)]
sock.sendMessage(from, {image: {url: random.url}, caption: `Comando ${order} não encontrado no menu!\n\nEsse foi o resultado da pesquisa que eu fiz🔍 \n\nby iago`}, {quoted: m, thumbnail: null})
}
}
*/
   
  } } catch(e) { e = String(e) 
  if (e.includes("rate-overlimit")) {return}
  if (e.includes('Connection Closed')){ return }
  if (e.includes('Timed Out')){ return }
   console.log(color(e, 'cyan')) 
  } }
  
  const LordThunder = require.resolve(__filename)
  fs.watchFile(LordThunder, () => {
  fs.unwatchFile(LordThunder)
  console.log(color(`Modificado! >`, 'cyan'), color(`${__filename}`, 'red'))
  delete require.cache[LordThunder]
  require(LordThunder)
  } )