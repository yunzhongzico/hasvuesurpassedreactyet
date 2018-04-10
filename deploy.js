const pages = require('gh-pages')

pages.publish('dist', { message: ':rocket: Deployed site' }, function (err) {
  console.log(err)
})
