---
title: Grid
---

# Grid

Grid system of Wheel UI.

## Default

In most business situations, Wheel UI needs to solve a lot of information storage problems within the design area, 
so based on 12 Grids System, it divided the design area into 24 aliquots.

### Preview
<ClientOnly>
  <grid-default></grid-default>
</ClientOnly>

### Codes
```html
<!--Row 1-->
<w-row class="w-row">
    <w-col span="8">
        <div class="w-col">8</div>
    </w-col>
    <w-col span="8">
        <div class="w-col">8</div>
    </w-col>
    <w-col span="8">
        <div class="w-col">8</div>
    </w-col>
</w-row>
<!--Row 2 -->
<w-row class="w-row">
    <w-col span="6">
        <div class="w-col">6</div>
    </w-col>
    <w-col span="6">
        <div class="w-col">6</div>
    </w-col>
    <w-col span="6">
        <div class="w-col">6</div>
    </w-col>
    <w-col span="6">
        <div class="w-col">6</div>
    </w-col>
</w-row>
<!--Row 3-->
<w-row class="w-row">
    <w-col span="4">
        <div class="w-col">4</div>
    </w-col>
    <w-col span="4">
        <div class="w-col">4</div>
    </w-col>
    <w-col span="4">
        <div class="w-col">4</div>
    </w-col>
    <w-col span="4">
        <div class="w-col">4</div>
    </w-col>
    <w-col span="4">
        <div class="w-col">4</div>
    </w-col>
    <w-col span="4">
        <div class="w-col">4</div>
    </w-col>
</w-row>
<!--Row 4-->
<w-row class="w-row">
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
</w-row>
```

## Gutter

### Preview
<ClientOnly>
  <grid-gutter></grid-gutter>
</ClientOnly>

### Codes
```html
<!--Row 1-->
<w-row class="w-row" gutter="10">
    <w-col span="8">
        <div class="w-col">8</div>
    </w-col>
    <w-col span="8">
        <div class="w-col">8</div>
    </w-col>
    <w-col span="8">
        <div class="w-col">8</div>
    </w-col>
</w-row>
<!--Row 2-->
<w-row class="w-row" gutter="10">
    <w-col span="6">
        <div class="w-col">6</div>
    </w-col>
    <w-col span="6">
        <div class="w-col">6</div>
    </w-col>
    <w-col span="6">
        <div class="w-col">6</div>
    </w-col>
    <w-col span="6">
        <div class="w-col">6</div>
    </w-col>
</w-row>
```

## Offset

### Preview
<ClientOnly>
  <grid-offset></grid-offset>
</ClientOnly>

### Codes
```html
<!--Row 1-->
<w-row class="w-row" gutter="10">
    <w-col span="8">
        <div class="w-col">8</div>
    </w-col>
    <w-col span="8" offset="8">
        <div class="w-col">8</div>
    </w-col>
</w-row>
<!--Row 2-->
<w-row class="w-row" gutter="10">
    <w-col span="6" offset="6">
        <div class="w-col">6</div>
    </w-col>
    <w-col span="6" offset="6">
        <div class="w-col">6</div>
    </w-col>
</w-row>
<!--Row 3-->
<w-row class="w-row" gutter="10">
    <w-col span="4">
        <div class="w-col">4</div>
    </w-col>
    <w-col span="4" offset="4">
        <div class="w-col">4</div>
    </w-col>
    <w-col span="4" offset="8">
        <div class="w-col">4</div>
    </w-col>
</w-row>
<!--Row 4-->
<w-row class="w-row" gutter="10">
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2" offset="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2" offset="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2" offset="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2">
        <div class="w-col">2</div>
    </w-col>
    <w-col span="2" offset="2">
        <div class="w-col">2</div>
    </w-col>
</w-row>
```

## Attributes

### Row

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| align | The vertical alignment of the flex layout: `left`, `center` or `right` | String | `left` |
| gutter | Spacing between grids | String/Number | 0 |

### Col

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| span | Raster number of cells to occupy, 0 corresponds to `display: none` | String/Number | - |
| offset | The number of cells to offset Col from the left | String/Number | 0 |