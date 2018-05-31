class UILandingBot {
    constructor(node) {
      this.domNode = node;
      this.domNode.classList.add("uilb");
    }

    createContainer({ human, cssClass, delay, resolve }) {
      var container = document.createElement("div");
      container.className = `uilb-container ${
        human ? "human" : "bot"
      } ${cssClass}`;
      container.style.opacity = 0;
      container.style.transform = `translateX(${human ? "" : "-"}8%)`;
  
      setTimeout(() => {
        this.domNode.appendChild(container);
      }, 50);
  
      setTimeout(() => {
        container.style.opacity = 1;
        container.style.transform = "translateX(0)";
        if (resolve) {
          console.log(resolve);
          resolve(container);
        }
      }, delay || 100);
  
      return container;
    }

    message({ content, cssClass, delay, human }) {
      return new Promise((resolve, reject) => {
        var container = this.createContainer({ human, cssClass, delay, resolve });
  
        var message = document.createElement("div");
        message.className = `uilb-message ${
          human ? "human" : "bot"
        } ${cssClass}`;
        message.innerHTML = content;
        container.appendChild(message);
      });
    }
  
    action(obj) {
      return this[`${obj.type}Action`](obj);
    }
  
    buttonAction({ items, delay, human, cssClass }) {
      return new Promise((resolve, reject) => {
        var container = this.createContainer({
          human,
          delay,
          cssClass: "no-icon"
        });
        container.style.position = 'absolute';
  
        var form = document.createElement("form");
        form.className = `uilb-action ${human ? "human" : "bot"} ${cssClass}`;
        form.addEventListener('submit', e => e.preventDefault);
  
        items.forEach(item => {
          var button = document.createElement("button");
          button.className = `uilb-button ${item.cssClass}`;
          button.type = 'button';
          button.innerHTML = item.text;
          button.addEventListener("click", () => {
            resolve(item.value);
            container.style.opacity = 0;
            setTimeout(() => this.domNode.removeChild(container), 300);
          });
          form.appendChild(button);
        });
  
        container.appendChild(form);
      });
    }
  }
