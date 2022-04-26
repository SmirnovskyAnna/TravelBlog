import { getClient } from "../lib/sanity.server"
import groq from 'groq'

const Home = ({ posts }) => {

  console.log(posts)
  return (
    <div> 
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "username": author->username,
    "categories": categories[]->{id, title},
    "authorImage": author->avatar,
    body,
    mainImage,
    slug,
    publishedAt
  }`)
  return {
    props: {
      posts
    }
  }
}

export default Home


