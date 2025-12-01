import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="inline-block bg-primary-300 rounded-full px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-700 mr-2 mb-2 transition-all duration-300 ease-out hover:ease-in hover:bg-primary-500"
    >
      #{text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
