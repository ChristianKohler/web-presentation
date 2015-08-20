web-presentation
========

### A presentation framework created with web components

* Lightweight
* No dependencies
* Modular
* Extendable

## Example
http://christiankohler.github.io/web-presentation/

## Plunks
Try web-presentation ..

http://plnkr.co/edit/uU2lbg?p=preview

http://plnkr.co/edit/rTH17v?p=preview

## Getting Started

Install web-presentation with npm

    npm i web-presentation

Get web-presentation via bower

    bower install web-presentation

Include the `dist/web-presentation.html` file in your project.

    <link rel="import" href="web-presentation.html">

Use the web slide component in your html file.

```html
<web-presentation>
  <web-presentation-keyboardcontrols></web-presentation-keyboardcontrols>
  <web-slide-title>
    <h1>web-presentation</h1>
    <h2>Pure Webcomponents Presentation Framework</h2>
  </web-slide-title>
  <web-slide>
    <h1>Native, fast, extendable</h1>
    <h2>..and only one file to import</h2>
  </web-slide>
</web-presentation>
```

## API

### Components

|Component|Description|
|:--------|:----------|
|`web-presentation`|The presentation element which contains all slides|
|`web-slide`|The slide element has to be within a web-presentation element|
|`web-slide-title`|The title is the same element as web-slide. The idea is to make it easier to style all title slide|
|`web-presentation-keyboardcontrols`|One way to control the presentation. Use left and right arrow keys or space to go to the next slide|
|`web-presentation-progress`|Displays a progress bar on the bottom of the screen|

### Transitions
Usage:

```html
  <web-slide-title data-transition="fall">
```

Available transitions:
* fall
* moveFromTop
* moveToLeft
* moveFromBottom
* newspaper
* fadeIn
* fadeInFromTop
* fadeInFromBottom

If you want to add a transitions to this library please make a pull-request.

### Fragments
Show parts of a slide step by step.

Show:

```html
  <ul>
    <li data-enter="1">First</li>
    <li data-enter="99">Last</li>
    <li data-enter="2">Second</li>
  </ul>
```

Hide:

```html
  <div data-exit="1">Hide me</div>
```

Mixed:

```html
  <!-- step1:shows p1 / step2:shows p2 / step3:hides div1 and shows div2-->
  <div id="div1" data-exit="10">
    <p data-show="1">Show first</p>
    <p data-show="2">Show second</p>
  </div>
  <div id="div2" data-show="10">Show after</div>
```

## Run local demo
* Install local dev dependencies: `npm install`
* Run gulp `gulp`

## Requirements
Use Chrome 36 or higher to use web-presentation without a polyfill.

## Contribute
Help make web-presentation better.

* Install local dev dependencies: `npm install`
* Run gulp watch task: `gulp`
* Edit src files
