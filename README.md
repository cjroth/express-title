# express-title

[![NPM Version](https://img.shields.io/npm/v/express-title.svg?style=flat)](https://www.npmjs.org/package/express-title)
[![NPM Downloads](https://img.shields.io/npm/dm/express-title.svg?style=flat)](https://www.npmjs.org/package/express-title)
[![Node.js Version](https://img.shields.io/badge/node.js->=_0.8-brightgreen.svg?style=flat)](http://nodejs.org/download/)
[![Build Status](http://img.shields.io/travis/cjroth/express-title.svg?style=flat)](https://travis-ci.org/cjroth/express-title)
[![Coverage Status](https://img.shields.io/coveralls/cjroth/express-title.svg?style=flat)](https://coveralls.io/r/cjroth/express-title)
[![Gittip](http://img.shields.io/gittip/cjroth.svg)](https://www.gittip.com/cjroth/)

#### Fill in your `<title>` tags via middleware.


Add it as middleware:

```js
app.use(require('express-title')());
```

Set a base title:

```js
app.set('title', 'Epic Website');
```

Add page titles:

```js
app.get(function(req, res, next) {
  res
    .title('What an awesome title?!')
    .render('template');
});
```

Add `title` to your view:

```jade
doctype html
html(lang='en')

  head
    title= title
  body
    //- ...
```

Now you've got beautifully dynamic page titles:

```html
  <title>What an awesome title?! · Epic Website</title>
```

Bonus: use a custom formatter:

```js
app.use(title('%base% - %title%'));
```

## Installation

```bash
$ npm install express-title
```

```js
var title = require('express-title');
// ...
var app = express();
// ...
app.use(title())

```

## [MIT Licensed](LICENSE)