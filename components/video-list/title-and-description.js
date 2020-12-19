import styles from "../../styles/global";

export const TitleAndDescription = () => {
  return (
    <>
      <h1 className="video-list-title">やっすんのエンジニア大学</h1>
      <p className="center" style={{ padding: '0 16px'}}>
        現役エンジニアのやっすんが、YouTubeでエンジニア向けの技術情報をお届け。
      </p>
      <p className="center" style={{ padding: '0 16px'}}>
        忙しくて日頃情報収集できない方も、動画でサクッと勉強しましょう！
      </p>
      <div className="center">
        <a href="https://github.com/yassun-youtube" target="_blank" className="center" rel="noopener">
          <amp-img src="/images/github-icon.svg" alt="" height={ 32 } width={ 32 }/>
          <strong style={ {marginLeft: '8px'} }>GitHub</strong>
        </a>
        <a href="https://twitter.com/yassun_youtuber" target="_blank" className="center" rel="noopener">
          <amp-img src="/images/twitter-icon.svg" alt="" height={ 48 } width={ 48 } />
          <strong>Twitter</strong>
        </a>
      </div>
      <style jsx>{styles}</style>
      <style jsx>{`
        .video-list-title {
          display: flex;
          justify-content: center;
          font-size: 48px;
          color: #424242;
        }
        @media only screen and (max-width: 600px) {
          .video-list-title {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  )
}
