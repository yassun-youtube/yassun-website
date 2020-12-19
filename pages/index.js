import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getVideoPageData } from "../lib/getVideoPageData";
import VideoList from "../components/video-list";
import MyHead from "../components/my-head";

export const config = {
  amp: true
}

export default function Home({ id, data, totalPages }) {
  return (
    <>
      <MyHead ogpImage={data.items[0].thumbnailUrl} />
      <VideoList json={data} pageNumber={id} totalPages={totalPages} />
    </>
  )
}

export async function getStaticProps() {
  const data = await getVideoPageData()
  return {
    props: { id: 1, data: data[0], totalPages: data.length }
  }
}
