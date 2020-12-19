import styles from "../../styles/global";

export const TopImage = () => {
  return (
    <div className="top-container">
      <div className="center top-image-wrapper">
        <amp-img className="top-sub-image" src="/images/yassun-angry.webp" alt layout="fixed" width="179px" height="298px" />
        <amp-img className="top-image" src="/images/yassun-with-whiteboard.webp" alt="" layout="fixed" width="349px" height="390px" />
        <amp-img className="top-sub-image" src="/images/yassun-jump.webp" alt layout="fixed" width="193px" height="293px" />
      </div>
      <div className="center top-image-wrapper-mobile">
        <amp-img className="top-image" src="/images/yassun-with-whiteboard-small.webp" alt="" layout="fixed" width="214px" height="240px" />
      </div>
      <div className='center top-description' style={{ WebkitTextStroke: '2px red' }}>
        <span style={{ flex: 1 }}></span>
        <span>学ぶって、いまさッ</span>
        <span style={{ flex: 1 }}>！！</span>
      </div>
      <div className='center top-description-mobile' style={{ WebkitTextStroke: '2px red' }}>
        学ぶって
        <br />
        いまさッ！！
      </div>

      <style jsx>{styles}</style>
      <style jsx>{`
        .top-container {
          position: relative;
          background-color: #de6d6d;
        }
        @media only screen and (max-width: 1000px) {
          .top-container {
            height: 240px;          
          }
        }
        .top-image-wrapper {
          justify-content: space-evenly; 
        }
        @media only screen and (max-width: 1000px) {
          .top-image-wrapper {
            display: none;          
          }
        }
        .top-image-wrapper-mobile {
          display: none;
        }
        @media only screen and (max-width: 1000px) {
          .top-image-wrapper-mobile {
            display: flex;
            width: 100%;
          }
        }
        .top-sub-image {
          width: 192px;
          height: 293px;
        }
        @media only screen and (max-width: 1000px) {
          .top-sub-image {
            display: none;          
          }
        }
        .top-description {
            position: absolute;
            top: 0;
            display: flex;
            align-items: flex-end;
            height: 100%;
            width: 100%;
            color: white;
            font-size: 5rem;
            font-weight: bold;
        }
        @media only screen and (max-width: 1000px) {
          .top-description {
            font-size: 3rem;
          }
        }
        @media only screen and (max-width: 600px) {
          .top-description {
            display: none;
          }
        }
        .top-description-mobile {
          display: none;
        }
        @media only screen and (max-width: 600px) {
          .top-description-mobile {
            position: absolute;
            top: 0;
            display: flex;
            align-items: flex-end;
            height: 100%;
            width: 100%;
            color: white;
            font-size: 48px;
            font-weight: bold;
          }
        }
      `}</style>
    </div>
  )
}
