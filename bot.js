const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');
const D4 = require('discord.js');
const D5 = require('discord.js');



const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D3.Client();
const p4 = new D3.Client();
const p5 = new D3.Client();




    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
    const myID = "521341978659651596";
      let args = message.content.split(" ").slice(1).join(" ");
      if(message.content.startsWith(prefix + "ne")) {
              if(message.author.id !== myID) return;
              if(!args) return message.reply('اكتب الحالة اللي تريدها.');
          client.user.setUsername(args);
          message.channel.send(':white_check_mark: Done!').then(msg => {
             msg.delete(5000);
            message.delete(5000);
          });
      } else if(message.content.startsWith(prefix + "ply")) {
                  if(message.author.id !== myID) return;
              if(!args) return message.reply('اكتب الحالة اللي تريدها.');
          client.user.setGame(args);
          message.channel.send(':white_check_mark: Done!').then(msg => {
             msg.delete(5000);
            message.delete(5000);
          });
      } else if(message.content.startsWith(prefix + "ls")) {
                  if(message.author.id !== myID) return;
              if(!args) return message.reply('اكتب الحالة اللي تريدها.');
          client.user.setActivity(args, {type:'LISTENING'});
          message.channel.send(':white_check_mark: Done!').then(msg => {
             msg.delete(5000);
            message.delete(5000);
          });
      } else if(message.content.startsWith(prefix + "wt")) {
                  if(message.author.id !== myID) return;
              if(!args) return message.reply('اكتب الحالة اللي تريدها.');
          client.user.setActivity(args, {type:'WATCHING'});
          message.channel.send(':white_check_mark: Done!').then(msg => {
             msg.delete(5000);
            message.delete(5000);
          });
      } else if(message.content.startsWith(prefix + "avt")) {
                  if(message.author.id !== myID) return;
          client.user.setAvatar(args);
          message.channel.send(':white_check_mark: Done!').then(msg => {
                  if(!args) return message.reply('اكتب الحالة اللي تريدها.');
             msg.delete(5000);
            message.delete(5000);
          });
      }
  });



    console.log("oNNN2");
p2.on('guildMemberAdd', member => {
  const myID = "521341978659651596";
  let args = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(prefix + "ne")) {
          if(message.author.id !== myID) return;
          if(!args) return message.reply('اكتب الحالة اللي تريدها.');
      client.user.setUsername(args);
      message.channel.send(':white_check_mark: Done!').then(msg => {
         msg.delete(5000);
        message.delete(5000);
      });
  } else if(message.content.startsWith(prefix + "ply")) {
              if(message.author.id !== myID) return;
          if(!args) return message.reply('اكتب الحالة اللي تريدها.');
      client.user.setGame(args);
      message.channel.send(':white_check_mark: Done!').then(msg => {
         msg.delete(5000);
        message.delete(5000);
      });
  } else if(message.content.startsWith(prefix + "ls")) {
              if(message.author.id !== myID) return;
          if(!args) return message.reply('اكتب الحالة اللي تريدها.');
      client.user.setActivity(args, {type:'LISTENING'});
      message.channel.send(':white_check_mark: Done!').then(msg => {
         msg.delete(5000);
        message.delete(5000);
      });
  } else if(message.content.startsWith(prefix + "wt")) {
              if(message.author.id !== myID) return;
          if(!args) return message.reply('اكتب الحالة اللي تريدها.');
      client.user.setActivity(args, {type:'WATCHING'});
      message.channel.send(':white_check_mark: Done!').then(msg => {
         msg.delete(5000);
        message.delete(5000);
      });
  } else if(message.content.startsWith(prefix + "avt")) {
              if(message.author.id !== myID) return;
      client.user.setAvatar(args);
      message.channel.send(':white_check_mark: Done!').then(msg => {
              if(!args) return message.reply('اكتب الحالة اللي تريدها.');
         msg.delete(5000);
        message.delete(5000);
      });
  }
});



      console.log("oNNN3");
p3.on('guildMemberAdd', member => {
  const myID = "521341978659651596";
  let args = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(prefix + "ne")) {
          if(message.author.id !== myID) return;
          if(!args) return message.reply('اكتب الحالة اللي تريدها.');
      client.user.setUsername(args);
      message.channel.send(':white_check_mark: Done!').then(msg => {
         msg.delete(5000);
        message.delete(5000);
      });
  } else if(message.content.startsWith(prefix + "ply")) {
              if(message.author.id !== myID) return;
          if(!args) return message.reply('اكتب الحالة اللي تريدها.');
      client.user.setGame(args);
      message.channel.send(':white_check_mark: Done!').then(msg => {
         msg.delete(5000);
        message.delete(5000);
      });
  } else if(message.content.startsWith(prefix + "ls")) {
              if(message.author.id !== myID) return;
          if(!args) return message.reply('اكتب الحالة اللي تريدها.');
      client.user.setActivity(args, {type:'LISTENING'});
      message.channel.send(':white_check_mark: Done!').then(msg => {
         msg.delete(5000);
        message.delete(5000);
      });
  } else if(message.content.startsWith(prefix + "wt")) {
              if(message.author.id !== myID) return;
          if(!args) return message.reply('اكتب الحالة اللي تريدها.');
      client.user.setActivity(args, {type:'WATCHING'});
      message.channel.send(':white_check_mark: Done!').then(msg => {
         msg.delete(5000);
        message.delete(5000);
      });
  } else if(message.content.startsWith(prefix + "avt")) {
              if(message.author.id !== myID) return;
      client.user.setAvatar(args);
      message.channel.send(':white_check_mark: Done!').then(msg => {
              if(!args) return message.reply('اكتب الحالة اللي تريدها.');
         msg.delete(5000);
        message.delete(5000);
      });
  }
});

  console.log("oNNN4");
  p4.on('guildMemberAdd', member => {
    const myID = "521341978659651596";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "ne")) {
            if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "ply")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "ls")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "wt")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "avt")) {
                if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});




 console.log("oNNN5");
  p5.on('guildMemberAdd', member => {
    const myID = "521341978659651596";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "ne")) {
            if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "ply")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "ls")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "wt")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "avt")) {
                if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});
 















    










p1.login(process.env.B1);
p2.login(process.env.B2);
p3.login(process.env.B3);
p4.login(process.env.B4);
p5.login(process.env.B5);
