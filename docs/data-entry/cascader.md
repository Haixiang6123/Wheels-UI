---
title: Cascader 
---

# Cascader 

Cascade selection box.

## When to use
- When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
- When selecting from a large data set, with multi-stage classification separated for easy selection.
- Chooses cascade items in one float layer for better user experience.
## Default

### Preview
<ClientOnly>
  <cascader-default></cascader-default>
</ClientOnly>

### Codes

```html
<w-cascader
        items-height="200px"
        :source.sync="source"
        :selected.sync="selected"
        :load-data="loadData">
</w-cascader>
```

```javascript
import Cascader from './Cascader';

export default {
    name: "w-cascader",
    data() {
        return {
            selected: [],
            source: []
        }
    },
    components: {
        'w-cascader': Cascader,
    }
}
```

## Attributes

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| items-height | Height of the Cascader item | String | - |
| selected | Selected node| Array | - |
| source | Data source of this component | Boolean | false |
| loadData | Function to load data | Function | - |
