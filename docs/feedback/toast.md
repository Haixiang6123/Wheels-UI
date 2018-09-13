---
title: Toast
---

# Toast

Show a message after user finish some actions.
Also, you can show raw html codes by using it.

## When To Use

1. When you need to show alert messages to users.
2. When you need a persistent static container which is closable by user actions.

## this.$toast

To use this component, you have to use `Vue.use(plugin)` to register as global function. 
Then you can set 3 positions when it shows a message.

### Preview
<ClientOnly>
  <toast-default></toast-default>
</ClientOnly>

### Codes
```javascript
import plugin from 'plugin';
Vue.use(plugin);
```

```html
<w-button @click="$toast('Show on top')">Show on top</w-button>
<w-button @click="$toast('Show in middle', {position:'middle'})">Show in middle</w-button>
<w-button @click="$toast('Show at bottom', {position:'bottom'})">Show at bottom</w-button>
```

## Close Button

By setting options for Toast, you can specify the text of close button. 
Also, you can set a callback function when user hits the button.

### Preview
<ClientOnly>
  <toast-close-button></toast-close-button>
</ClientOnly>

### Codes
```javascript
methods: {
    onClickButton() {
        this.$toast('Do you love me?', {
            closeButton: {
                text: 'Yes, I do!',
                callback: () => {
                    console.log('He said he does!')
                }
            }
        });
    }
}
```

```html
<w-button @click="onClickButton">Show it</w-button>
```

## HTML Support

Also, you can use html tags in the content of Toast.

### Preview
<ClientOnly>
  <toast-html></toast-html>
</ClientOnly>

### Codes
```javascript
methods: {
    onClickButton () {
        this.$toast('<strong>Do you love me?</strong>', {
            closeButton: {
                text: 'Yes, I do!',
                callback: () => {
                    console.log('He said he does!');
                }
            },
            enableHtml: true
        });
    }
}
```

```html
<w-button @click="onClickButton">Show with HTML elements</w-button>
```

## Attributes

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| autoClose | When set false, it needs user to click close button to close the Toast | Boolean | true |
| closeButton | Set message content, also set a callback when clicking close button | Object | `{text: 'Close', callback: undefined}` |
| enableHtml | Set true to transfer message to HTML elements | Boolean | false |
| position | Set position for message, values can be `top`, `bottom` and `middle` | String | `top` |

