# rollodeqc-gh-repos-issues
[![Build Status](https://travis-ci.org/millette/rollodeqc-gh-repos-issues.svg?branch=master)](https://travis-ci.org/millette/rollodeqc-gh-repos-issues)
[![Coverage Status](https://coveralls.io/repos/github/millette/rollodeqc-gh-repos-issues/badge.svg?branch=master)](https://coveralls.io/github/millette/rollodeqc-gh-repos-issues?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/millette/rollodeqc-gh-repos-issues.svg)](https://gemnasium.com/github.com/millette/rollodeqc-gh-repos-issues)
> RoLLodeQc utility to fetch repos issues.

## Install
```
$ npm install --save rollodeqc-gh-repos-issues
```

## Now with update-notifier
The cli now uses [update-notifier][] to let the user know about updates to this program.

Users have the ability to opt-out of the update notifier by changing
the optOut property to true in ~/.config/configstore/update-notifier-rollodeqc-gh-user-streak.json.
The path is available in notifier.config.path.

Users can also opt-out by setting the environment variable NO_UPDATE_NOTIFIER
with any value or by using the --no-update-notifier flag on a per run basis.

## Usage
```js
const rollodeqcGhReposIssues = require('rollodeqc-gh-repos-issues')

rollodeqcGhReposIssues('unicorns')
//=> 'unicorns & rainbows'
```

## API
### rollodeqcGhReposIssues(input, [options])
#### input
Type: `string`

Lorem ipsum.

#### options
##### foo
Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## CLI
```
$ npm install --global rollodeqc-gh-repos-issues
```

```
$ rollodeqc-gh-repos-issues --help

  Usage
    rollodeqc-gh-repos-issues [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ rollodeqc-gh-repos-issues
    unicorns & rainbows
    $ rollodeqc-gh-repos-issues ponies
    ponies & rainbows
```


## License
AGPL-v3 © [Robin Millette](http://robin.millette.info)
