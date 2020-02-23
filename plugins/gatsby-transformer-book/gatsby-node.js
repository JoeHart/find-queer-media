const fetch = require("node-fetch")
const queryString = require("query-string")

function isUpperCase(str) {
  return str === str.toUpperCase()
}

// Converts keys of an object to camel case based on: https://stackoverflow.com/questions/12931828/convert-returned-json-object-properties-to-lower-first-camelcase/32441713
function toCamel(o) {
  var newO, origKey, newKey, value
  if (o instanceof Array) {
    return o.map(function(value) {
      if (typeof value === "object") {
        value = toCamel(value)
      }
      return value
    })
  } else {
    newO = {}
    for (origKey in o) {
      if (o.hasOwnProperty(origKey)) {
        newKey = isUpperCase(origKey)
          ? origKey
          : (
              origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey
            ).toString()
        value = o[origKey]
        if (
          value instanceof Array ||
          (value !== null && value.constructor === Object)
        ) {
          value = toCamel(value)
        }
        newO[newKey] = value
      }
    }
  }
  return newO
}

async function getBookData(node, apiOptions) {
  if (node.googleBooksId != null) {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes/${node.googleBooksId}?key${apiOptions}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.volumeInfo
  }

  return null
}

async function onCreateNode(
  { node, createContentDigest, actions },
  configOptions
) {
  if (node.internal.type !== `BooksJson`) {
    return
  }
  const { createNode } = actions

  const apiOptions = queryString.stringify(configOptions)
  const bookData = await getBookData(node, apiOptions)
  const bookNode = {
    ...bookData,
    ...node,
    id: node.googleBooksId,
    children: [],
    parent: null,
    internal: {
      contentDigest: createContentDigest(bookData),
      type: "Book",
    },
  }

  createNode(bookNode)
}

exports.onCreateNode = onCreateNode
