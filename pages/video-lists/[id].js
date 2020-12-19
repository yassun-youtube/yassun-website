import { getVideoPageData } from "../../lib/getVideoPageData";
import VideoList from "../../components/video-list";
import MyHead from "../../components/my-head";
import Head from "next/head";

export const config = {
  amp: true
}

export default function VideoPage({ id, data, totalPages }) {
  return (
    <>
      <MyHead ogpImage={data.items[0].thumbnailUrl}/>
      <VideoList json={data} pageNumber={id} totalPages={totalPages}/>
    </>
  )
}

export async function getStaticProps({ params }) {
  const index = Number(params.id) - 1
  const data = await getVideoPageData()

  return {
    props: { id: params.id, data: data[index], totalPages: data.length}
  }
}

export async function getStaticPaths() {
  const json = await getVideoPageData()

  return {
    paths: [...new Array(json.length)].map((_, i) => {
      return {
        params: {
          id: `${i+1}`,
        }
      }
    }),
    fallback: false,
  }
}
