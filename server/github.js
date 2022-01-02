const axios = require('axios');

let getReposByUsername = (user) => {
  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: { 'User-Agent': 'request' }
  };

  return axios(options)
  .then(res => {
    let formatted = []
    for (let i = 0; i < res.data.length; i++) {
      let repo = {}
      repo.repoId = res.data[i].id
      repo.repoName = res.data[i].name
      repo.owner = res.data[i].owner.login
      repo.ownerUrl = res.data[i].owner.html_url
      repo.htmlUrl = res.data[i].html_url
      repo.description = res.data[i].description
      repo.updated = res.data[i].updated_at
      repo.note = '(empty)'
      formatted.push(repo)
    }
    return formatted
  })
}

module.exports = {getReposByUsername}