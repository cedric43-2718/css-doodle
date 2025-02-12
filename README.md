# &lt;css-doodle /&gt;

[![Build Status](https://travis-ci.org/css-doodle/css-doodle.svg?branch=master)](https://travis-ci.org/css-doodle/css-doodle)
![license](https://img.shields.io/github/license/mashape/apistatus.svg)


A web component for drawing patterns with CSS.

<a href="https://css-doodle.com/">
  <img src="screenshot/doodle.png" />
</a>

## Example

```css
<css-doodle>
  @grid: 5 / 200px;
  background: @p(#000, #fff);
  margin: 1px;
</css-doodle>
```

## Docs
[https://css-doodle.com](http://css-doodle.com)


## Resources

* [Creating Patterns Using CSS & the &lt;css-doodle /&gt; Web Component](https://alligator.io/css/patterns-css-doodle/)
* [Bokeh Backgrounds with CSS-Doodle](https://www.timothyellison.com/2018/05/27/bokeh-backgrounds-with-css-doodle/), by Tim Ellison
* [How to Draw Patterns with CSS Using CSS Doodle](https://webdesign.tutsplus.com/tutorials/how-to-draw-patterns-with-css-using-css-doodle--cms-33110), by Adi Purdila


## Build

```bash
# build css-doodle.js
npm run build

# generate css-doodle.min.js
npm run minify && npm run trim

# or just use make
make
```

## Support
Thank you for your support! 🙏
<a href="https://opencollective.com/css-doodle#backers" target="_blank"><img src="https://opencollective.com/css-doodle/backers.svg?width=890"></a>
<a href="https://opencollective.com/css-doodle#sponsors" target="_blank"><img src="https://opencollective.com/css-doodle/sponsors.svg?width=890"></a>
