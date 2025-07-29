//https://whatsapp.com/channel/0029Vb5z4jOG3R3cKpOENd0D/124
//Stalk Brawl Stars 
//By: MisheruModz</> - +5512988047370

const axios = require('axios')
const cheerio = require('cheerio')

async function brawlStalk(tag) {
try {
const Misheru = tag.replace(/^#/, '').toUpperCase()
const url = `https://brawltime.ninja/pt/profile/${Misheru}`
const { data } = await axios.get(url, {
headers: {
'User-Agent': 'Mozilla/5.0',
'Accept-Language': 'pt-BR,pt;q=0.9'
}})
const $ = cheerio.load(data)
const nome = $('h1#v-0-2').text().trim()
const tagusu = $('dt:contains("Tag")').next('dd').text().trim()
const clube = $('dt:contains("Clube")').next('dd').text().replace(/<\/?[^>]+(>|$)/g, '').trim()
const quantiatrofeus = (text) => {
const match = text.match(/\d{3,}/)
return match ? parseInt(match[0]) : null
}
const trofeus = quantiatrofeus($('dt:contains("Troféus")').next('dd').text().trim())
const usertrofeusmax = quantiatrofeus($('dt:contains("Troféus Máximos")').next('dd').text().trim())
const exp = quantiatrofeus($('dt:contains("Nível de EXP")').next('dd').text().trim())
const fotoprfl = $('picture img').attr('src')
return {
criador: '@Criador: MisheruModz</> +55 12 98804-7370',
nome,
tag: tagusu,
clube,
trofeus,
usertrofeusmax,
exp,
fotoprfl
}
} catch {
return {
erro: `Talvez vc tenha errado a Tag, ou não foi possível encontrar esse jogador(a)`,
criador: '@Criador: MisheruModz</> +55 12 98804-7370'
}
}
}

module.exports = brawlStalk

//case

case 'stalkbrawl':
if (!q) return reply(`Cadê a gamertag do player bro?`)
try {
const res = await require('./Bomba/scrapers/StalkBrawlStars.js')(q)
if (res.erro) return reply(res.erro)
const msg = 
`❱❱ MEGUMIN ᝰ STALK BRAWL ❰❰\n\n🪪 *Nome:* ${res.nome}
🏷 *Tag:* ${res.tag}
👥 *Clube:* ${res.clube}
🏆 *Troféus:* ${res.trofeus}
🏆🏅 *Troféus Máximos:* ${res.usertrofeusmax}
🧪 *EXP:* ${res.exp}
\n${res.criador}`
megumin.sendMessage(from, {
image: { url: res.fotoprfl },
caption: msg
}, { quoted: m })
} catch {
reply('Deu erro pae')
}
break
