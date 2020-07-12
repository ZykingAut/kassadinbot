module.exports = {
    name: 'ban',
    description: 'Command to ban users from a guild',
    usage: '<@user> <reason>',
    guildOnly: true,
    args: true,
    cooldown: 5,
    execute(msg, args) {
        if (!msg.mentions.users.size) return msg.reply('you need to tag a user in order to ban them!');
        if (!msg.guild.member(msg.author).hasPermission('BAN_MEMBERS')) return msg.reply('you need to have ban permission to use this command!');
        const taggedUser = msg.mentions.users.first();
        if (!msg.guild.member(taggedUser).bannable) return msg.reply('I am not able to ban user higher than me!');
        return msg.guild.member(taggedUser).ban({reason: args.slice(1).join(' ')}).catch(e => console.log(e));
    }
}