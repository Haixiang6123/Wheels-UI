---
title: Tabs
---

# Tabs

Tabs make it easy to switch between different views.

## When To Use

1. Card Tabs: for managing too many closeable views.
2. Normal Tabs: for functional aspects of a page.

## Examples
<ClientOnly>
  <data-display-tabs></data-display-tabs>
</ClientOnly>

## Codes
```javascript
data() {
    return {
        selected: "1"
    }
}
```
```html
<w-tabs :selected="selected">
    <w-tabs-head>
        <w-tabs-item name="1">Home</w-tabs-item>
        <w-tabs-item name="2">Introduction</w-tabs-item>
        <w-tabs-item name="3">Components</w-tabs-item>
        <w-tabs-item name="4">Contributions</w-tabs-item>
    </w-tabs-head>
    <w-tabs-body>
        <w-tabs-pane name="1">Home page</w-tabs-pane>
        <w-tabs-pane name="2">Introduction page</w-tabs-pane>
        <w-tabs-pane name="3">Components page</w-tabs-pane>
        <w-tabs-pane name="4">Contributions page</w-tabs-pane>
    </w-tabs-body>
</w-tabs>
```

## Attributes

### Tabs
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| selected | Index of each tabs-pane and tabs-item | String | - |

### TabsItem
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| name | Index of each tabs-item, corresponding to tabs-pane | String | - |
| disabled | If it's disabled | Boolean | false |

### TabsPane
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| name | Index of each tabs-pane, corresponding to tabs-item | String | - |
