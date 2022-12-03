module.exports = {

  ekle: (name, link) => `<:Discord_Bot:1025913971909345331> **${name}** Botunu sunucuna ekleyip kullanmak istiyorsan [Tıkla!]${link}`,
  random: `<a:emoji_209:1025913063494393886> Rastgele Avatar <a:emoji_209:1025913063494393886> `,
  destek: (name) => `Selam Dostum Botu Sunucuna Ekliyerek Bana Destekte Bulunabilirsin`,
  guild: {
    banner: {
      get: (name) => `${name}'nin Afişi`,
      not: "Sunucuda afiş bulunmamakta."
    }
  },
  user: {
    banner: {
      get: (target) => `Buyrun, **${target.user.tag}** üyesinin profil afişi!`,
      not: (target) => `Buyrun, **${target.user.tag}** üyesinin profil afişi!`
    }
  },
  error: {
    type: (number) => {
      if (number == "1") {
        return {
          perm: () => "MANAGE_GUILD",
          send: () => `<:iptal:1025913448586027078>  Bunu yapabilmek için **MANAGE_GUILD** yetkisine ihtiyacın var!`
        }
      } else if (number == "2") {
        return {
          perm: () => "ADMINISTRATOR",
          send: () => `<:iptal:1025913448586027078>  Bunu yapabilmek için **ADMINISTRATOR** yetkisine ihtiyacın var!`
        }
      }
    }
  },
  lang_choose: () => "<:iptal:1025913448586027078>  | Bir dil seçmelisin\n\n:flag_gb: English (en)\n:flag_tr: Turkish (tr)\n:flag_fr: Français (fr)\n:flag_de: Deutsch (de)\n:flag_sa: Arabic (ar)",
  lang_changed: (lang) => {
    if (lang == "ar") {
      return "<:onay:1025913485789511780> | تم تحديث اللغة!"
    } else if (lang == "de") {
      return "<:onay:1025913485789511780> | Sprache wurde aktualisiert!"
    } else if (lang == "en") {
      return "<:onay:1025913485789511780> | Language has beed updated!"
    } else if (lang == "fr") {
      return "<:onay:1025913485789511780> | Langue mise à jour avec succès!"
    } else if (lang == "tr") {
      return "<:onay:1025913485789511780> | Dil başarıyla güncellendi! "
    }
  },
  prefix_choose: () => "<:iptal:1025913448586027078> | Bir önek yazmalısınız!",
  prefix_changed: () => "<:onay:1025913485789511780> | Ön ekinizi başarıyla değiştirdiniz!",
  user_info: {
    get: (number) => {
      if (number == "1") {
        return {
          name: () => "Hesap Bilgileri",
          value: (user, timestamp, badges, nitro) => {
            if (nitro) {
              return `**❯ Avatar**: [Gör](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ Hesap yaşı:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Rozetleri:** ${badges} ${nitro}`
            } else {
              return `**❯ Avatar**: [Gör](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ Hesap yaşı:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Rozetleri:** ${badges}`
            }
          }
        }
      }
    }
  }
};