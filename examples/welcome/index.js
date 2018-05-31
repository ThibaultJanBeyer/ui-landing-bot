var uilb = new UILandingBot(document.body);

uilb
  .message({
      content: "Hey! 👋",
      cssClass: "no-icon",
      delay: 1000
  })
  .then(ok => 
      uilb.message({
      content:
          "I’m the friendly bot and I’m here to make you <strong>feel good</strong>!",
      delay: 1000
      })
  )
  .then(ok =>
      uilb.message({
      cssClass: "fill-img no-icon",
      content:
          '<img src="https://media.giphy.com/media/xHMIDAy1qkzNS/giphy.gif">',
      delay: 1000
      })
  )
  .then(ok =>
      uilb.message({
      content: "How do you feel?",
      delay: 1000
      })
  )
  .then(ok => 
  uilb.action({
      type: "button",
      items: [
          {
          text: "cat",
          value: "meow!"
          },
          {
          text: "awesome",
          value: "awesum!"
          }
      ]
      })
  )
  .then(ok => 
      uilb.message({
      human: true,
      content: ok
      })
  )
  .then(ok =>
      uilb.message({
      content: 'Feeling good now? Well, check out my <a href="https://github.com/ThibaultJanBeyer/ui-landing-bot">documentation on Github</a> and leave me a Star now 🌟😎🌟',
      delay: 1000
      })
  )
  .then(ok => 
      uilb.message({
      human: true,
      content: "I love you! 😍",
      delay: 2000
      })
  )
  .catch(error => console.log('error', error));
