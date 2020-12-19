import ImgixClient from 'imgix-core-js'

const client = new ImgixClient({
  domain: 'yassun.imgix.net',
  secureURLToken: process.env.IMGIX_SOURCE_URL_TOKEN,
});

export const buildImgixImage = async (url) => {
  return await client.buildURL(url, { fm: 'webp', auto: 'compress', lossless: true })
}
