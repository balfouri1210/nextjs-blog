import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllPostsIds, getPostData } from '../../lib/posts';
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({ postData }: {
  postData: {
    id: String,
    title: String,
    date: String
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h2>POST PAGE : {postData.title}</h2>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // getStaticPaths가 하는 역할은 [id]에 올 수 있는 모든 옵션을 배열로 제공하는 것.
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getPostData(params.id);

  return {
    props: {
      postData
    }
  }
}