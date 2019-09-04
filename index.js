/*
RoLLodeQc utility to fetch repos issues.

Copyright 2016
Robin Millette <mailto:robin@millette.info>
<http://robin.millette.info>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the
[GNU Affero General Public License](LICENSE.txt)
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict'

// core
const qs = require('querystring')

// npm
const ghGot = require('gh-got')

// own
const bookworm = require('rollodeqc-gh-bookworm')
const utils = require('rollodeqc-gh-utils')

const fetchPage = (options) => ghGot(
  typeof options === 'object'
    ? `repos/${options.repo_fullname}/issues?` + qs.stringify(options)
    : options
)

const methods = {
  getItems: (result) => result && result.body,
  updateItems: (result, inner) => {
    inner.body = result.body.concat(inner.body)
    return inner
  }
}

module.exports = (repoFullname) => bookworm.bookworm({
  repo_fullname: repoFullname,
  per_page: 100
}, fetchPage, methods)
  .then((x) => x.body)
  .then((x) => x.map(utils.chosenFields))
  .then((x) => x.map((y) => {
    y.user = utils.chosenFields(y.user)

    if (y.labels && y.labels.length) {
      y.labels = y.labels.map(utils.chosenFields)
    } else {
      delete y.labels
    }

    if (y.milestone) {
      y.milestone = utils.chosenFields(y.milestone)
      y.milestone.creator = utils.chosenFields(y.milestone.creator)
    }

    if (!y.assignees || !y.assignees.length) { delete y.assignees }
    return y
  }))
