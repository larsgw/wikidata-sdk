const getSitelinkUrl = require('./get_sitelink_url')

module.exports = (sitelinks, options = {}) => {
  const { addUrl } = options
  return Object.keys(sitelinks).reduce(aggregateValues(sitelinks, addUrl), {})
}

const aggregateValues = (sitelinks, addUrl) => (index, key) => {
  const { title } = sitelinks[key]
  if (addUrl) {
    index[key] = { title, url: getSitelinkUrl(key, title) }
  } else {
    index[key] = title
  }
  return index
}