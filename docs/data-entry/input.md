---
title: Input
---

# Input

A basic widget for getting the user input is a text field. 
Keyboard and mouse can be used for providing or changing data.

## Default

### Preview
<ClientOnly>
  <input-default></input-default>
</ClientOnly>

### Codes

```html
<w-input value="Basic input"></w-input>
<w-input value="Disabled input" disabled></w-input>
<w-input value="Readonly input" readonly></w-input>
```

## Data Binding

This component supports two-way data binding.

### Preview
<ClientOnly>
  <input-data-binding></input-data-binding>
</ClientOnly>

### Codes
```javascript
data() {
    return {
        value: 1
    }
}
```

```html
<w-input v-model="value"></w-input>
<div>
    value: {{value}}
</div>
```

## Error Message

To show a error message, you need to set `error` props.

### Preview
<ClientOnly>
  <input-error></input-error>
</ClientOnly>

### Codes
```html
<w-input value="Error input" error="Invalid input!"></w-input>
```

## Attributes

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| value | The input content value | String | - |
| disabled | Whether the input is disabled | Boolean | false |
| readonly | Whether the input is readonly | Boolean | false |
| error | Error message | String | - |
