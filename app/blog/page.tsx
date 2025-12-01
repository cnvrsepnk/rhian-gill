import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage(props: { searchParams: Promise<{ page: string }> }) {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <>
      <div className="space-y-10">
        <div className="space-y-2 pt-10 pb-8 md:space-y-5 text-center">
          <h1 className="text-4xl leading-9 tracking-tight text-gray-900 sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100 lg:text-6xl">
            &mdash; Blog &mdash;
          </h1>
          {/* <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
            News & Events
          </p> */}
        </div>
      
        <ListLayout
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title="All Posts"
        />
      </div>
    </>
  )
}
