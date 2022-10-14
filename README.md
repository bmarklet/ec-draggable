# ec-draggable
Draggable EpikChat broadcast bookmarklet

## Usage

1. create a new bookmark in your browser and give it a name such as EC-DRAGGABLE (CTL+D or CMD+D for shortcut)

2. copy the following script into the url of the bookmark and save it

```
javascript: (function() {   var dragJS = document.createElement('script');   var dragCSS = document.createElement('link');   dragCSS.type = 'text/css';   dragCSS.rel = 'stylesheet';   const uid = () => { return Date.now().toString(36) + Math.random().toString(36).substr(2); };   dragJS.setAttribute('src', 'https://cdn.jsdelivr.net/gh/bmarklet/ec-draggable/draggable.js?v=%27 + uid());   dragCSS.setAttribute(%27href%27, %27https://cdn.jsdelivr.net/gh/bmarklet/ec-draggable/draggable.css?v=%27 + uid());   document.body.appendChild(dragJS);   document.body.appendChild(dragCSS); }());
```

3. click the EC-DRAGGABLE bookmarklet in your bookmark toolbar while EpikChat is loaded in your browser

4. open a broadcast or two and drag that shit around

### GO TO JAIL
#### Go Directly To Jail
#### DO NOT PASS GO
#### DO NOT COLLECT $200
