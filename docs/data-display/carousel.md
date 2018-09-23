---
title: Carousel 
---

# Carousel 

A carousel component. Scales with its container.

## When To Use

- When there is a group of content on the same level.

- When there is insufficient content space, it can be used to save space in the form of a revolving door.

- Commonly used for a group of pictures/cards.

## Default

### Preview
<ClientOnly>
  <carousel-default></carousel-default>
</ClientOnly>

### Codes
```html
<w-carousel class="wrapper" :selected.sync="selected">
    <w-carousel-item name="1">
        <div class="box">1</div>
    </w-carousel-item>
    <w-carousel-item name="2">
        <div class="box">2</div>
    </w-carousel-item>
    <w-carousel-item name="3">
        <div class="box">3</div>
    </w-carousel-item>
</w-carousel>
```

```javascript
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

export default {
    data() {
        return {
            selected: '1'
        }
    },
    components: {
        'w-carousel': Carousel,
        'w-carousel-item': CarouselItem
    }
}
```

## Attributes

### Carousel

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| selected | The current carousel item that is selected | String | undefined |

### Carousel Item

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| name | Name of each carousel item | String | - |
