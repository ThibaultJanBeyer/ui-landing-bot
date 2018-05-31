```
   __  ________                    ___             ____        __ 
  / / / /  _/ /   ____ _____  ____/ (_)___  ____ _/ __ )____  / /_
 / / / // // /   / __ `/ __ \/ __  / / __ \/ __ `/ __  / __ \/ __/
/ /_/ // // /___/ /_/ / / / / /_/ / / / / / /_/ / /_/ / /_/ / /_  
\____/___/_____/\__,_/_/ /_/\__,_/_/_/ /_/\__, /_____/\____/\__/  
                                         /____/                   

```
# UILandingBot

landbot clone written in native Vanilla JavaScript. Dead simple &amp; no dependencies, just pure joy!

# Example

temporarily:
https://codepen.io/ThibaultJanBeyer/pen/NzPVVX?editors=0110

# Key Features

- No dependencies.
- Full HTML Support.
- Extremely easy to use.
- Vanilla Javascript.
- Less than 80 lines of code.
- Ultra-Lightweight, less than ~1KB gzipped.
- Ultra-Fast.

# Browser Support

It works on all the latest browsers. However, as I’m using native classes other ES6 functionality:  
- \>=Edge 16 

# Why?

Well, I stumbled upon the commercial tool https://www.landbot.io/ and wanted to use it. However the pricing is crazily inhuman, as time of writing, landbot.io would cost you 20€/month which is insane. So I quickly searched the web and quickly found [botui](https://github.com/botui/botui) which is basically what I was searching for. I started using it, but figured out that it is overcomplicated: Firstly, regarding messages, they wrote their own subset of markup language. Wait what?… No idea. Secondly, it seems abandoned, it has currently 20 open issues. Lastly, and that was the reason why I did not contribute to the project but wrote my own: it has a dependency to vue.js! Why in the world would you need a library for such a small tool?… Also, more precisely, requires vuejs version 2.0.5, a newer version won’t work and break the tool. As, this is some core decision, I would not want to participate in developing it further. So here it is, a dead simple landing bot alternative that consists of less than 80 lines of code. Enjoy.

# Installation

## Easy

Just download the file and add it to your document:
```
<script src="https://thibaultjanbeyer.github.io/ui-landing-bot/dist/uilb.min.js"></script>
```
If you want to add the default styling add the CSS file as well:
```
<link rel="stylesheet" href="https://thibaultjanbeyer.github.io/ui-landing-bot/dist/uilb.min.js">
```

# Usage

Pass the node that you want to have the bot rendered into:
```
const uilb = new UILandingBot(document.body);
```
That’s it! Now you can use it to create awesome stories that get visitors hooked.

## Messages

### Syntax

```
uilb.message({options})
```

### Example:
```
uilb.message({
      content: "Hey! 👋",
      delay: 1000
})
```
Will write `Hey! 👋` on behalf of the bot after 1 Second delay.  
A message returns a promise. So, you can chain multiple messages onto another:

```
uilb.message({
      content: "Hey! 👋",
      cssClass: "no-icon",
      delay: 1000
})
.then(ok => 
   uilb.message({
      content: "How are you?",
      delay: 1000
   })
);
```
Will write `Hey! 👋` on behalf of the bot after 1 second, then after another second the bot will write `How are you?`.  
If you want to write on behalf of the user just set `human: true` like so:

```
uilb.message({
      content: "Hey! 👋",
      cssClass: "no-icon",
      delay: 1000
})
.then(ok => 
   uilb.message({
      content: "How are you?",
      delay: 1000
   })
)
.then(ok => 
   uilb.message({
      content: "Good",
      human: true,
      delay: 2000
   })
);
```
Hurray! This already makes up a fine conversation between bot and human!

## Actions

### Syntax

```
uilb.action({options})
```

### Example:

Actions add interactivity for the user. For example you could, like this, let the user choose an answer:
```
uilb.message({
      content: "Hey! 👋 <br>How are you?",
      delay: 1000
})
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
.then( answer => console.log(answer) );
```

This will display two buttons. One with the text `cat` and the other one reading `awesome`. When the user clicks on `cat` the `console.log` will be `meow!`. Because it resolves the value of the clicked button.


# Properties:
| property | type | usage |
|--- |--- |--- |
|node |Node |The DOM element where the chat will be rendered to. |

# Methods:

## .message
| properties | type | usage |
|--- |--- |--- |
|content |String |the text that will be written. HTML can be used. |
|cssClass |String |adds one or multiple custom CSS Class to the container and also the message |
|delay |Integer |the time it waits before displaying the message. In Milliseconds. |
|human |Boolean |whether or not it is the human speaking |

## .action
| properties | type | usage |
|--- |--- |--- |
|type |String |the type of action. Currently only `"button"` is supported. |
|items |String |the items that will be rendered. |
|cssClass |String |adds one or multiple custom CSS Class to the container and also the message |
|delay |Integer |the time it waits before displaying the message. In Milliseconds. |
|human |Boolean |whether or not it is the human speaking |


# Classes
| name | trigger |
|--- |--- |
|.uilb |added to the initialization node on create |
|.uilb-container |is a container that holds the messages, it is used to add pseudoelements as the speech bubble arror and the bot/user face. It will also start with an opacity of 0 and a translate in order to create this “fly-in” animation |
|.uilb-message |is added to the container of the actual message |
|.human |is added to the container and the message of the human speech bubble |
|.no-icon |you can use this custom class to hide the bot/user icon |
|.fill-img |you can use this custom class to have this message element covering the whole speech bubble |

# Have Fun!

[![Typewriter Gif](https://thibaultjanbeyer.github.io/DragSelect/typewriter.gif)](http://thibaultjanbeyer.com/)
