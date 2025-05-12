//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : CypherX
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +2250788145722

//----------------------[ CYPHER-X ]----------------------//

const fs = require('fs')
//File System module - because even bots need to read and write💁‍♂️
const { color } = require('./lib/color')
//Colouring console because plain text is quite boring😑
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAIEqrFqIa99idgUAACUJAAAKAAAAY3JlZHMuanNvbpVWXYvzWhX+L*u2fU++26QwYJpJ89VM04+0TURkJ9lJd5uvJmmS9mXgXOmNdw4K4nuOCAp64634H17QC*FW*AXzEyTTGWbweF7HQiHsrj7rWWs969n5CNIMl8hAZzD6CPIC17BC3WN1zhEYgfEpDFEB+iCAFQQjcLR0GK9beHGN29BR1oLYTInZhpQ8NzPkbBucXRtHjGPT2Q2474P85MXY*wIgVMxVz8ZiVejD2F9IUV00iWJx23HeTHhp4F2Wl2SiBTLJ3oD7DhHiAqeRnO9QggoYG+hsQVy8jz6ylnueb0zMGDTjWMeAiwcroTVq+85TjcN0G7KKeuL2*sF5H*1ISUym9V3NHATtZjvYJhRfy41kLMaFYYaTjSEr86qn7lrySr*EUYoCLUBphavzu*suKXfHZVxSA3e*vMg14WAds3nrBkF9GMp0brK6VSdCeyTN9xHfHlNnQvNx4ojzYRJ7u+PCdV1V3XtbYr1slzvdZ2xZzcex+Ja4Vbxo5fD*9N00ho0w0Em+boUyGdPy*ng+UGPOJJi537pkfhprokw4c7t5H31jKfYmx+RYC*yqPBBayezqM2tNacnYrCYGPVsI+WDNrafr+St9WJ2KL7FckcTCIwgJeTy17q1rX6U1IyinMjFL5ZWzcXvacNcjW4XL0awm+aqxfNQwdLzJjWowv+WWtnkXovElFHTWXgy51b6VxJunig7orAVgRN33QYEiXFYFrHCWPp0xbB*AoF4iv0DVU3vBZMWJBwnX5WyDC2Xmrw8nI6ai5aqd8eOj7k2njL*VtrpLmDegD*Ii81FZokDFZZUVZxOVJYxQCUY*fJpUV3SBkqxCOg7ACNA0x*MUyw1p+gflV80OViXM869SVIE+CIssMREYVcUJ9cE1nhdIjhQH4q3A8aJES8JEpmmZGsiSJAo011WYXHOucILKCiY5GFFDdkjSQ5ok73*UBylqq6t8uqIZqg9CXJSVnZ7yOIPBi7ZefoS+n53SanlOfal7QAUYvTlGVYXTqOwKO6Ww8He4RlJXBxiFMC7RfR8EqMY+6vAA00hHpdGqBUV7xZL9cW3OVaPpGrfL0mtI6AcBCoXhB4obUB9YkkYfeI5kP*hDyNICixA5FEDXjuvmdv*5XiEdyEoNAsRvvDFd6NB1zpfxZGIbe*G6nVcFoAIFL132oH845avsgNIvuU0z0xhLLW3vVolPTcYpmRavayYInTe4V2WB0cdXt5SyoMO7NZnNxqBk0E2ry*OfYhgNmO*qIb5GCTQ95DiWI0meIrvA7rwPUthBgcef*+QPj7*4za*+pe*Pfzzz7*9+0*8bvHb3*29b++fvj87edvPn*z+OmXv3r89PCnx08Pv3*89PDH7ttRfp5nRyZAFcRx2bmdjv0sP8jyrKfvSllRRDISpUgEr*N*WefrulhMT9rzTolZLAZUa9nCZhwgarw3Wvoyd8LzxRJgsF8I7fzmv4CAEdgHl1ZotItXp7S+Fe7q*LZdHsmL5w3zi29Lpsc6O5FGkdjr0cdjL8ovKCX0u9u4IFK4GcA5ZytQcXk+nGUHerq4WD2puemyXXX4Nlmqlqc715M5iZvmKNxt0ukdYjhXO7pcNeTVApN3g4WEGIIYsI2eWESdqRNM2caeX0B9r5RHistRvtkcBBPHdWRPT0*JXowufr5g8LMFXFUbYvTk188j+19zf90f8r7*BuL5AvgejY5XAhFlhDLVTlqkBv6KstbRdlvNnXMZlKSi8uWF2KQOGfo2uO+MIY9hFWZF0r0NpEGRPcmqyE7dgmtpmH3pWhQjTY6uhcewrMRX0*iuD1HC4BplFVmuwnLX9cCinF3Y7cNZzPNlBasXDwLi04degPt*A1BLAQIUAxQAAAgIAIEqrFqIa99idgUAACUJAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAJ4FAAAAAA==' 
// You know the drill. Put your CypherX session id here. Should look like: XPLOADER-BOT:~ (don't forget that, it's crucial!)

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'CypherX' 
// Pick a name for the bot. Default is "CypherX" — but who doesn’t love a cool bot name?

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '2250788145722' 
// Your personal contact number. If you want to call Tylor, this is the number. 👀

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'keutly' 
// Set your name, currently it's the mastermind's. The one and only... Tylor. (Don't ask how I got here, it's a mystery.)

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "Cypher" 
// Time to decide the name for your sticker pack. This will appear every time you create a sticker. "Cypher" is the default because... well, why not?

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "X" 
// Who's the artist behind those epic stickers? You, of course! Unless you're just using the default name "X" – mystery vibes!

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
// The bot is time-traveling. Set the timezone correctly. Trust us, you don't want the bot to get confused. 🕒

//--------------[ POSTGRES DATABASE ]----------------//

global.postgresqls = process.env.DATABASE_URL || "";
// Your database URL. If you're using panel, no need to fill, if you're using Heroku, this will be automatically filled. Let the magic happen!

//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg---"
// Where does the journey end? Maybe an Instagram link? Or WhatsApp link🤔 Or maybe just a placeholder. Who knows? 👀

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "©CypherX is on fire!🔥"
// Add a watermark finished tasks because... every masterpiece needs a signature.

//---------------------[ REPLIES ]-----------------------//
global.mess = { 
  done: '✅ *Mission Accomplished!* All systems go, CypherX finished the task!',
  success: '🎉 *BOOM! Success!* CypherX is too cool for this world. We did it!',
  owner: '🚫 *Hold up!* This command is for the big boss only. You’re not the boss of me!',
  group: '👥 *Join the club!* This feature is exclusive to group chats!',
  admin: '🔒 *Admin powers required!* Make me an admin, and I’ll unlock this magic for you.',
  notadmin: '⚠️ *Not Quite There Yet!* You gotta be the admin to wield this feature. Better start begging!',
//new
  error: '🤖 *Oopsie!* Something went wrong. Maybe try again? Or blame the developer. Your call!',
  wait: '⏳ *Hold your horses!* I’m working on it... (No, seriously, I’m not slacking off.)',
  nolink: '🔗 *Link not found!* Did you forget to include it, or are you just testing me?',
  notext: '🤔 *No query detected!* Did you forget to include it, or are you just testing me?',
  ban: '🚨 *Banned!* You’ve been banished to the shadow realm. (Don’t worry, it’s not permanent... probably.)',
  unban: '🎈 *Unbanned!* Welcome back! We missed you... kind of.'
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! Or I’ll send CypherX after you... 😈 */

//😹😹🙆‍♂️
// botz = m (Not to be confused with 'The bot'... he's cooler.)
// isOwner = 🤔 (But only on special days... we keep it mysterious)
// isCypherAdmin = 🗿 (Admin powers are granted by CypherX, no exceptions!)


//--------------------[ WATCHER ]-----------------------//
// Who’s watching the watchers? 🤔
// Let’s keep track of any changes like a hawk in a top hat. 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red')) 
  delete require.cache[file]
  require(file)
})

//----------------------[ CYPHER-X ]----------------------//
// CypherX is like a cat. It might ignore you, but it knows what you’re up to. 🐱
// It only responds when it feels like it. It’s the true master of mystery.
// Please proceed with caution. Our code doesn’t bite, but it might give you an awkward look.
// Tylor? If you’ve found this, you’ve unlocked a secret... but only if you truly understand it.
