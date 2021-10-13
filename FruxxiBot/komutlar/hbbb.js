//------------------- Hoşgeldin - Hoşcakal Komutu ----------\\

/main

bot.joinCommand({
	channel: '$getServerVar[hosgeldinlog]',

	code: `

        $color[00ff44]
        $title[Sunucumuza Birisi Katıldı !]
       <@$authorID>
        $description[$thumbnail[$authorAvatar]
        **Aramıza Hoşgeldin** <@$authorID>
       ** Seninle Birlikte Toplam ** \` $membersCount \` ** Kişiyiz.**
      ]

        `
});

bot.leaveCommand({
	channel: '$getServerVar[hosgeldinlog]',

	code: `
        $color[ff0101]
        $title[Sunucumuzdan Birisi Ayrıldı !]
        $description[$thumbnail[$authorAvatar]
       **Hoşçakal** \` $username#$discriminator[$authorID] \`
        **Sen Ayrılınca ** \` $membersCount\` **Kişi Kaldık.**
        ]
        `
});


/Varible 
hosgeldinlog:"" 


komutlar/hg-bb aç.js 

module.exports = {
  name: "hg-bb",
  code: `
  $onlyPerms[admin;**Bunun İçin Yeterli Yetkin Yok**]
  $onlyIf[$message!=;Kullanım *hg-bb #kanal]
  $setServerVar[hosgeldinlog;$mentionedChannels[1]]
**Hoşgeldin - Hoşçakal Kanal** <#$mentionedChannels[1]> **Olarak Seçildi.**`
} 


komutlar/hg-bb kapat.js

module.exports = {
  name: "hg-bb-kapat",
  code: `
  $onlyPerms[admin;**Bunun İçin Yeterli Yetkin Yok**]
  $resetServerVar[hosgeldinlog]
**Hoşgeldin - Hoşçakal Kapatıldı**`
}