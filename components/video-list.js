import Link from 'next/link'
import Pagination from "./video-list/pagination";
import styles from '../styles/global'
import { TopImage } from "./video-list/top-image";
import { TitleAndDescription } from "./video-list/title-and-description";

/*
{
  "kind": "youtube#searchListResponse",
  "etag": "B78qhUqpAHkKeO83zT-i5GBYFyk",
  "prevPageToken": "CDIQAQ",
  "regionCode": "JP",
  "pageInfo": {
    "totalResults": 75,
    "resultsPerPage": 25
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "BfIVLr54yljFgIZ_H5JJAEqtkAI",
      "id": {
        "kind": "youtube#video",
        "videoId": "07AJ3NvoWdM"
      },
      "snippet": {
        "publishedAt": "2020-10-14T22:00:01Z",
        "channelId": "UCajrdoGzHzDogrNrLYYmGsg",
        "title": "意外と知らない！ AWS の世界を変える可能性をもつ5つのサービス！！",
        "description": "教育系エンジニアのやっすんが、AWSの世界を変える (かもしれない) 面白いサービスを紹介します！ Twitterフォローお願いします！ https://twitter.com/yassun_youtuber ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/07AJ3NvoWdM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/07AJ3NvoWdM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/07AJ3NvoWdM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "やっすんのエンジニア大学",
        "liveBroadcastContent": "none",
        "publishTime": "2020-10-14T22:00:01Z"
      }
    },
    ...
  ]
}
 */
export default function VideoList({ json, pageNumber, totalPages }) {
  return (
    <main className="container">
      <TopImage />
      <TitleAndDescription />
      <h2 className="center">投稿動画一覧</h2>
      <div className="movie-list-container">
        {json.items.map((item, key) => {
          const videoId = item.id.videoId
          const title = item.snippet.title
          const thumbnailUrl = item.thumbnailUrl
          // const thumbnailUrl = item.snippet.thumbnails.medium.url

          return (
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener"
              key={key}
              className="video-wrapper"
            >
              <amp-img className="video-image" src={thumbnailUrl} alt='' layout="responsive" height="180px" width="320px" />
              <div className="video-description-wrapper">
                <div className="video-description">{ title }</div>
              </div>
            </a>
          )
        })}
      </div>

      <Pagination pageNumber={pageNumber} totalPages={totalPages} />

      <style jsx>{styles}</style>
      <style jsx>{`
        .container {
          padding: 0 0 48px;
        }
        .movie-list-container {
          display: grid;
          justify-content: center;
          column-gap: 6px;
          row-gap: 16px;
        }
        @media only screen and (min-width: 1600px) {
          .movie-list-container {
            grid-template-columns: repeat(5, 320px);
          }
        }
        @media only screen and (max-width: 1600px) {
          .movie-list-container {
            grid-template-columns: repeat(4, 320px);
          }
        }
        @media only screen and (max-width: 1300px) {
          .movie-list-container {
            grid-template-columns: repeat(3, 320px);
          }
        }
        @media only screen and (max-width: 1000px) {
          .movie-list-container {
            grid-template-columns: repeat(2, 320px);
          }
        }
        @media only screen and (max-width: 700px) {
          .movie-list-container {
            grid-template-columns: 320px;
          }
        }
        .video-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 320px;
          padding: 0 0 12px;
          border-radius: 10px;
          box-shadow: 0 0 3px 1px rgba(0, 0, 0, .2);
        }
        .video-wrapper:hover {
          box-shadow: 0 0 6px 1px rgba(0, 0, 0, .5);
        }
        .video-image {
          height: 180px;
          width: 320px;
          border-radius: 10px 10px 0 0;
        }
        .video-description-wrapper {
          padding: 4px 16px;
        }          
        .video-description {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </main>
  )
}


