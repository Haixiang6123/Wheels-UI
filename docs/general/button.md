---
title: Button
---

# Button

Common usages of Button is shown as followed.

## Examples
<ClientOnly>
  <general-button></general-button>
</ClientOnly>

## Codes
```html
<w-button>Default</w-button>
<w-button icon="remove">Left Icon</w-button>
<w-button icon="remove" iconPosition="right">Right Icon</w-button>
<w-button :loading="true">Loading</w-button>
```

## Attributes
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| icon | Name of icon | String | - |
| iconPosition | Position of icon | String | "left" |
| loading | If is showing loading icon | Boolean | false |
