---
title: Button
---

# Button

Common usages of Button is shown as followed.

## Examples
<ClientOnly>
  <demo-button></demo-button>
</ClientOnly>

## Codes
```html
<w-button>Default</w-button>
<w-button icon="remove">Left Icon</w-button>
<w-button icon="remove" iconPosition="right">Right Icon</w-button>
<w-button :loading="true">Loading</w-button>
```

## Attributes
| Attributes | Description | Type | Optional Value | Default |
|---|---|:---:|---|---|
| icon | Name of icon | String | - | - |
| iconPosition | Position of icon | String | "left" / "right" | "left" |
| loading | If is showing loading icon | Boolean | true / false | false |
