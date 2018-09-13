---
title: Layout
---

# Layout

Handling the overall layout of a page.

## Default

### Preview
<ClientOnly>
  <layout-default></layout-default>
</ClientOnly>

### Codes
```html
<w-layout class="w-layout">
    <w-header class="w-header">
        header
    </w-header>
    <w-content class="w-content">
        content
    </w-content>
    <w-footer class="w-footer">
        footer
    </w-footer>
</w-layout>
```

## With Sider

### Preview
<ClientOnly>
  <layout-sider></layout-sider>
</ClientOnly>

### Codes
```html
<!--Layout 1-->
<w-layout class="w-layout">
    <w-header class="w-header">
        header
    </w-header>
    <w-layout>
        <w-sider class="w-sider">
            sider
        </w-sider>
        <w-content class="w-content">
            content
        </w-content>
    </w-layout>
    <w-footer class="w-footer">
        footer
    </w-footer>
</w-layout>

<!--Layout 2-->
<w-layout class="w-layout">
    <w-sider class="w-sider">
        sider
    </w-sider>
    <w-layout>
        <w-header class="w-header">
            header
        </w-header>
        <w-content class="w-content">
            content
        </w-content>
        <w-footer class="w-footer">
            footer
        </w-footer>
    </w-layout>
</w-layout>
```
