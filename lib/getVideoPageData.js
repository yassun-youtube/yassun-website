import { readFile,writeFile } from "./fs-helper";
import { fetchVideoInfo } from "./youtube";
import { buildImgixImage } from "./imgix";

export const getVideoPageData = async () => {
  let pageData = null
  const useCache = process.env.USE_CACHE === 'true'
  const cacheFile = 'video-page-data-cache'

  if (useCache) {
    try {
      pageData = JSON.parse(await readFile(cacheFile, 'utf8'))
    } catch (_) {}
  }

  if (!pageData) {
    pageData = await getAllPageData()
    pageData = pageData.filter(({ items }) => items.length > 0)
    for(const data of pageData) {
      for (const item of data.items) {
        item.thumbnailUrl = await buildImgixImage(item.snippet.thumbnails.medium.url)
      }
    }
  }

  if (useCache) {
    await writeFile(cacheFile, JSON.stringify(pageData), 'utf8').catch(() => {})
  }

  return pageData
}


async function getAllPageData() {
  return await getNextPageData([],null)
}

async function getNextPageData(result= [], nextPageToken) {
  // await sleep()
  const params = nextPageToken ? { pageToken: nextPageToken } : {}
  const json = await fetchVideoInfo(params)
  result.push(json)
  console.log('getNextPageData')
  console.log(json)

  if (json.nextPageToken) {
    return await getNextPageData(result, json.nextPageToken)
  } else {
    return result
  }
}

async function sleep() {
  return new Promise(resolve => {
    setTimeout(() => {
      Promise.resolve(resolve)
    }, 1000)
  })
}
