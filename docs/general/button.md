---
title: Button
---

# Button

Common usages of Button is shown as followed.

## Default

### Preview
<ClientOnly>
  <button-default></button-default>
</ClientOnly>

### Codes
```html
<w-button>Default</w-button>
<w-button icon="remove">Left Icon</w-button>
<w-button icon="remove" iconPosition="right">Right Icon</w-button>
<w-button :loading="true">Loading</w-button>
```

## Button Group

Buttons can be grouped with `<ButtonGroup/>` Components.
Usually, they are used for indicating next page or prev page. 
Common usages of Button Group is shown as followed.

### Preview
<ClientOnly>
  <button-group></button-group>
</ClientOnly>

### Codes
```html
<w-button-group>
    <w-button icon="up">Prev</w-button>
    <w-button icon="settings">Settings</w-button>
    <w-button icon="down">Next</w-button>
</w-button-group>
```

## Attributes
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| icon | Name of icon | String | - |
| iconPosition | Position of icon | String | `left` |
| loading | If is showing loading icon | Boolean | false |
