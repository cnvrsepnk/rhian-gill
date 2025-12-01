import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Contact() {
  return (
    <>
      <div className="space-y-10">
        <div className="space-y-2 pt-10 pb-8 text-center md:space-y-5">
          <h1 className="text-4xl leading-9 tracking-tight text-gray-900 sm:leading-10 md:text-5xl md:leading-14 lg:text-6xl dark:text-gray-100">
            &mdash; Contact &mdash;
          </h1>
          {/* <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
            a Mapper to chart will need a Shifter to go / a Skimmer makes copies only a Mirror can clone / a Siphon must sap to fuel a Guardian's attack / the Spectra are paired and the Cynod protects
          </p> */}
        </div>
        <div className="hero prose dark:prose-invert mx-auto space-y-5 text-center">
          <p className="text-xl font-bold">Get in touch!</p>

          <p className="text-xl">rhian.gill.writes (at) gmail (dot) com</p>

          <p className="text-xl">Or click the links to my social media below:</p>
        </div>
      </div>
    </>
  )
}
