---
title: Popover
---

# Popover

The floating card popped by clicking or hovering.

## When To Use

A simple popup menu to provide extra information or operations.

## Default

### Preview
<ClientOnly>
  <data-display-popover></data-display-popover>
</ClientOnly>

### Codes
```html
<!--Top popover-->
<w-popover>
    <w-button>Top</w-button>
    <template slot="content">
        Content
    </template>
</w-popover>
<!--Bottom popover-->
<w-popover position="bottom">
    <w-button>Bottom</w-button>
    <template slot="content">
        Content
    </template>
</w-popover>
<!--Left popover-->
<w-popover position="left">
    <w-button>Left</w-button>
    <template slot="content">
        Content
    </template>
</w-popover>
<!--Right popover-->
<w-popover position="right">
    <w-button>Right</w-button>
    <template slot="content">
        Content
    </template>
</w-popover>
```

## With Hover
<ClientOnly>
  <data-display-popover-hover></data-display-popover-hover>
</ClientOnly>

## Codes
```html
<!--Top popover-->
<w-popover trigger="hover">
    <w-button>Top</w-button>
    <template slot="content">
        Content
    </template>
</w-popover>
<!--Bottom popover-->
<w-popover position="bottom" trigger="hover">
    <w-button>Bottom</w-button>
    <template slot="content">
        Content
    </template>
</w-popover>
<!--Left popover-->
<w-popover position="left" trigger="hover">
    <w-button>Left</w-button>
    <template slot="content">
        Content
    </template>
</w-popover>
<!--Right popover-->
<w-popover position="right" trigger="hover">
    <w-button>Right</w-button>
    <template slot="content">
        Content
    </template>
</w-popover>
```

## Attributes

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| position | Position of content when it pops, value can be `top`, `bottom`, `left`, `right` | String | `top` |
| trigger | How to trigger popping action, value can be `click`, `hover` | String | `click` |
