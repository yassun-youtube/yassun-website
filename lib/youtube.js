const baseUrl = 'https://youtube.googleapis.com/youtube/v3/search'

const baseParams = {
  part: 'snippet',
  channelId: 'UCajrdoGzHzDogrNrLYYmGsg',
  maxResults: 16,
  order: 'date',
  type: 'video',
  key: process.env.GOOGLE_API_KEY,
}

const constructUrl = (params = {}) => {
  const p = { ...baseParams, ...params}
  const query = Object.keys(p).reduce((prev, cur) => {
    prev.push(`${cur}=${p[cur]}`)
    return prev
  }, []).join('&')

  console.log(`${baseUrl}?${query}`)
  return `${baseUrl}?${query}`
}

export const fetchVideoInfo = async (params) => {
  const result = await fetch(constructUrl(params), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await result.json()
}
