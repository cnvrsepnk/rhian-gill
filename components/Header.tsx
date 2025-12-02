import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ThemeToggle } from './ThemeToggle'
import SearchButton from './SearchButton'
import SectionContainer from '@/components/SectionContainer'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-2'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="site-logo-text">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="site-title text-5xl md:text-6xl lg:text-7xl">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </Link>
      </div>

      {/* <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
          <div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </div>
      </Link> */}

      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden items-center gap-x-4 overflow-x-auto sm:flex">
          {headerNavLinks
            //.filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-700 m-1 text-lg font-semibold text-gray-900 uppercase dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>
        {/* <SearchButton /> */}
        <ThemeToggle />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
