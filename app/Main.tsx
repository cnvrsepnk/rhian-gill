import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import BlueskyProfile from '@/components/BlueskyProfile'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="home space-y-10 pt-10 md:space-y-20">
        <div className="mx-auto w-3/4">
          <div className="flex flex-row">
            <div className="blurb w-full space-y-2 pb-8 text-center md:space-y-5">
              <h1 className="text-4xl leading-9 tracking-tight text-gray-900 sm:leading-10 md:text-5xl md:leading-14 lg:text-6xl dark:text-gray-100">
                &mdash; Rhian Gill &mdash;
              </h1>
              {/* <h2 className="text-2xl leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-8 md:text-5xl md:leading-12 dark:text-gray-100 mb-10 text-center">&mdash; Rhian Gill &mdash;</h2> */}

              <p className="text-xl leading-7 text-gray-500 md:text-2xl dark:text-gray-400">
                Epic Fantasy Author
              </p>
              {/* <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p> */}
            </div>
          </div>
        </div>

        <div className="upcoming-projects alignfull bg-[url(/static/images/moonlit-clouds.jpg)] bg-cover bg-fixed bg-center px-5 pt-10 pb-10 md:px-20 md:pt-20 md:pb-30 xl:px-40 xl:pt-40 xl:pb-50">
          <h2 className="mb-10 text-center text-2xl leading-9 tracking-tight text-gray-100 sm:leading-8 md:text-4xl md:leading-12 lg:text-5xl dark:text-gray-100">
            &mdash; The Shattered Sight Trilogy &mdash;
          </h2>

          <div className="status-wrapper space-y-8 rounded-xl bg-gray-900/50 px-5 py-10 md:px-10">
            <div className="mb-2 flex justify-between text-gray-100">
              <span className="text-body text-md leading-tight font-semibold md:text-2xl md:leading-normal">
                The Cost of Resonance
              </span>
              <span className="text-body text-md text-right leading-tight font-semibold md:text-2xl md:leading-normal">
                Currently Querying
              </span>
            </div>
            <div className="h-8 w-full rounded-full bg-gray-100">
              <div className="bg-primary-700 flex h-8 w-full items-center justify-center rounded-full p-0.5 text-center leading-none font-semibold text-white uppercase">
                {' '}
                100%
              </div>
            </div>

            <div className="mb-2 flex justify-between text-gray-100">
              <span className="text-body text-md leading-tight font-semibold md:text-2xl md:leading-normal">
                Between Order And Chaos
              </span>
              <span className="text-body text-md text-right leading-tight font-semibold md:text-2xl md:leading-normal">
                First Draft
              </span>
            </div>
            <div className="h-8 w-full rounded-full bg-gray-100">
              <div className="bg-primary-700 flex h-8 w-[20%] items-center justify-center rounded-full p-0.5 text-center leading-none font-semibold text-white uppercase">
                {' '}
                20%
              </div>
            </div>

            <div className="mb-2 flex justify-between text-gray-100">
              <span className="text-body text-md leading-tight font-semibold md:text-2xl md:leading-normal">
                No Perfect Symmetry
              </span>
              <span className="text-body text-md text-right leading-tight font-semibold md:text-2xl md:leading-normal">
                Outline
              </span>
            </div>
            <div className="h-8 w-full rounded-full bg-gray-100">
              <div className="bg-primary-700 flex h-8 w-[50%] items-center justify-center rounded-full p-0.5 text-center leading-none font-semibold text-white uppercase">
                {' '}
                50%
              </div>
            </div>

            <span className="float-right inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700 inset-ring inset-ring-blue-700/10">
              Last Updated: <em>12-1-2025</em>
            </span>
          </div>
        </div>

        <div className="flex flex-row space-y-2 pt-6 pb-8 md:space-y-5">
          {/* <div className="newsletter w-1/2">
            <h3 className="text-xl leading-9 tracking-tight text-gray-900 sm:text-xl sm:leading-8 md:text-3xl md:leading-12 dark:text-gray-100">Stay Up To Date</h3>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 py-6 w-9/10">Receive email alerts on the latest news about author Rhian Gill's upcoming novels and events.</p>

              {siteMetadata.newsletter?.provider && (
                <div className="flex items-center pt-4">
                  <NewsletterForm />
                </div>
              )}
          </div> */}

          <div className="blog mx-auto lg:w-3/4">
            <BlueskyProfile />

            {/*<h2 className="text-4xl leading-9 tracking-tight text-gray-900 sm:leading-8 md:text-4xl md:leading-12 dark:text-gray-100 lg:text-5xl text-center">
            &mdash; Latest &mdash;
            </h2>

             <ul className="latest-posts">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-6">
                <article className="group transform rounded-xl bg-gray-50 p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-md dark:bg-gray-900/70 dark:hover:shadow-2xl">
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                          <dl>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-base leading-6 mb-5 font-medium text-gray-500 dark:text-gray-400">
                              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                            </dd>
                            <div className="flex flex-wrap">
                            {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                          </div>
                          </dl>
                          
                    <div className="space-y-5 xl:col-span-3">
                      
                      <div className="space-y-3">
                        <div>
                          
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          
                        </div>
                        <div className="text-lg prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
          </div>
        </div>
      </div>
    </>
  )
}
