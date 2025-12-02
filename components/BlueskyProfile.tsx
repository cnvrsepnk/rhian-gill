import { getAuthorFeed } from 'scripts/bluesky.mjs'
import PostCard from './PostCard'

export default async function BlueskyProfile() {
  const handle = 'ifbookscouldgill.bsky.social' // Replace with the target handle
  const feed = await getAuthorFeed(handle)

  return (
    <div className="container mx-auto space-y-10">
      <h2 className="text-center text-2xl leading-9 tracking-tight text-gray-900 sm:leading-8 md:text-4xl md:leading-12 lg:text-5xl dark:text-gray-100">
        &mdash; @{handle} &mdash;
      </h2>
      {feed.length > 0 ? (
        feed.map((postItem) => (
          // You will create this PostCard component in the next step
          <PostCard key={postItem.post.uri} item={postItem} />
        ))
      ) : (
        <p>No posts found or error fetching feed.</p>
      )}
    </div>
  )
}
