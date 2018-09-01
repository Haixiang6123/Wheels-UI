# Wheels UI
[![Build Status](https://travis-ci.org/Haixiang6123/wheel-ui.svg?branch=master)](https://travis-ci.org/Haixiang6123/wheel-ui)

A project for building UI library based on Vue.js.

## Introduction

## Get Started

1. Add CSS styles

    Before you use this UI, please enable border-box
    
    ```css
    * { box-sizing: border-box; }
    *::before { box-sizing: border-box; }
    *::after { box-sizing: border-box; }
    ```
    
    This feature supports IE8+ browsers.
    
    You also need to set global variables in sass. This will be updated in the feature.
    
    ```scss
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #42B983;
        --border-color: #42B983;
        --border-color-hover: #42B983;
    }
    ```
    
    This feature supports IE15+ browsers.
    
2. Install wheel-ui
    
    ```
    npm i --save wheel-ui
    ```

3. Import wheel-ui
    ```javascript
    import {Button} from 'wheel-ui';
    import 'wheel-ui/dist/index.css'
    
    export default {
      name: 'app',
      components: {
        HelloWorld,
        'ow-button': Button
      }
    }
    ``` 
    
4. Import svg symbols

    ```html
    <script src="//at.alicdn.com/t/font_812986_j8n9iohqjd.js"></script>
    ```

## Documentation

## Questions

## Issues

## Changelog

## Get In Touch

## Contribution