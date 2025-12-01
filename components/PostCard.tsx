// components/PostCard.js

const PostCard = ({ item }) => {
  const post = item.post
  const author = post.author
  const embed = post.embed

  // Basic rich text parsing (for links and mentions)
  const renderText = (text, facets) => {
    if (!facets) return text

    // A full implementation requires careful handling of UTF-8 byte offsets
    // A library like @atproto/api's RichText is recommended for production
    return <p>{text}</p>
  }

  return (
    <div className="rounded-xl bg-gray-100 p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-md dark:bg-gray-900/70 dark:hover:shadow-2xl">
      {author.handle !== 'ifbookscouldgill.bsky.social' && (
        <p className="mb-2 text-sm text-gray-500">Reposted by Rhian Gill</p>
      )}

      <div className="mb-2 flex items-center">
        <img
          src={author.avatar || '/placeholder-avatar.png'}
          alt={author.displayName}
          className="mr-3 h-8 w-8 rounded-full"
        />
        <div>
          <p className="font-semibold">
            <a
              className="hover:underline"
              href={`https://bsky.app/profile/${author.handle}`}
              target="_blank"
            >
              {author.displayName}
            </a>
          </p>
          <p className="text-sm text-gray-500">@{author.handle}</p>
        </div>
      </div>
      <div className="mb-2">{renderText(post.record.text, post.record.facets)}</div>

      {/* Basic handling for 'external' link embeds */}
      {embed && embed.$type === 'app.bsky.embed.external' && (
        <a
          href={embed.external.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block rounded border bg-gray-50 p-3 hover:bg-gray-100"
        >
          <p className="font-semibold">{embed.external.title}</p>
          <p className="text-sm text-gray-600">{embed.external.description}</p>
        </a>
      )}

      {/* Add handling for image embeds and quote posts here */}
      {embed && embed.$type === 'app.bsky.embed.record#view' && (
        <div className="rounded-xl bg-gray-50 p-5 dark:bg-gray-800/70">
          <div className="mb-2 flex items-center">
            <img
              src={embed.record.author.avatar || '/placeholder-avatar.png'}
              alt={embed.record.author.displayName}
              className="mr-3 h-8 w-8 rounded-full"
            />
            <div>
              <p className="font-semibold">{embed.record.author.displayName}</p>
              <p className="text-sm text-gray-500">@{embed.record.author.handle}</p>
            </div>
          </div>
          <div className="mb-2">
            {renderText(embed.record.value.text, embed.record.value.facets)}
          </div>
        </div>
      )}

      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}

      <p className="mt-2 text-xs text-gray-400">{new Date(post.indexedAt).toLocaleString()}</p>
    </div>
  )
}

export default PostCard
