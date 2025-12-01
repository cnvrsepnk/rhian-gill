// lib/bluesky.js
import { AtpAgent } from '@atproto/api';

// The public API host for Bluesky
const service = 'https://public.api.bsky.app';

export async function getAuthorFeed(actorHandle) {
  const agent = new AtpAgent({ service });

  try {
    const response = await agent.app.bsky.feed.getAuthorFeed({
      actor: actorHandle,
      // Optional: filter to only show original posts, excluding replies
      filter: 'posts_no_replies',
      limit: 5, // Adjust the number of posts to fetch
      includePins: true
    });
    
    return response.data.feed;
  } catch (error) {
    console.error('Error fetching Bluesky feed:', error);
    return [];
  }
}