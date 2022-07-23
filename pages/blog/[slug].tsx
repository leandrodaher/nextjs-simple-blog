import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface Props {
    slug?: string
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

const Post: NextPage  = ({ slug }: Props) => {
  return (
    <>
      <h1>Post: {slug}</h1>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams;

    return { props: { slug } }
}