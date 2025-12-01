import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Books' })

export default function Books() {
  return (
    <>
      <div className="space-y-10">
        <div className="space-y-2 pt-10 pb-8 text-center md:space-y-5">
          <h1 className="text-4xl leading-9 tracking-tight text-gray-900 sm:leading-10 md:text-5xl md:leading-14 lg:text-6xl dark:text-gray-100">
            &mdash; Books &mdash;
          </h1>
          {/* <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
            a Mapper to chart will need a Shifter to go / a Skimmer makes copies only a Mirror can clone / a Siphon must sap to fuel a Guardian's attack / the Spectra are paired and the Cynod protects
          </p> */}
        </div>
        <div className="hero">
          <div className="w-full lg:flex lg:max-w-full">
            <div
              className="relative h-80 flex-none overflow-hidden rounded-t bg-[url(/static/images/black-white-face-fantasy-art.jpg)] bg-cover bg-center text-center lg:h-auto lg:w-2/5 lg:rounded-t-none lg:rounded-l"
              title="The Cost of Resonance Placeholder Book Cover"
            >
              <span className="absolute top-3 right-3 w-40 items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 inset-ring inset-ring-blue-700/10">
                CURRENTLY QUERYING
              </span>

              <div className="flex h-full flex-col items-center justify-center bg-gray-900/50">
                <h2 className="mb-0 text-2xl leading-9 font-bold tracking-tight text-gray-100 uppercase sm:text-3xl sm:leading-8 md:text-4xl md:leading-12">
                  The Cost of
                  <br />
                  Resonance
                </h2>
                <h3 className="text-md mb-5 tracking-tight tracking-wide text-gray-300 uppercase sm:text-xl md:text-2xl">
                  Book One of
                  <br />
                  The Shattered Sight
                </h3>
              </div>
              {/* <div className="flex flex-col h-full justify-between bg-gray-900/50">
      <div className="text-top"><h2 className="text-2xl leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-8 md:text-4xl md:leading-12 dark:text-gray-100 mb-0 font-bold uppercase">The Cost<br />of<br />Resonance</h2></div>
      <div className="text-bottom">Book One of The Shattered Sight</div>
    </div> */}
            </div>

            <div className="flex flex-col justify-between bg-gray-100 p-4 leading-normal dark:bg-gray-900/70">
              <div className="mb-8 space-y-5">
                {/* <span className="w-40 float-right inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 inset-ring inset-ring-blue-700/10">CURRENTLY QUERYING</span> */}
                {/* <h2 className="text-2xl leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-8 md:text-4xl md:leading-12 dark:text-gray-100 mb-0 font-bold">
            The Cost of Resonance</h2> */}
                {/* <h3 className="text-md tracking-tight text-gray-500 sm:text-xl dark:text-gray-400 mb-5 uppercase tracking-wide">
            Book One of The Shattered Sight
          </h3> */}

                <p className="text-md">
                  Born into a world where eye color determines magical ability, Spectra Elim
                  ax’Tenebris is bound to serve the Cynod, an influential, militaristic organization
                  whose recruits must Pair with one another to utilize their powers. But Elim is
                  much more interested in the freedoms of commoneyes, and would gladly exchange his
                  elite status for a quiet life of independence and solitude.
                </p>
                <p className="text-md">
                  During a routine mission he is drawn to the signal of a would-be Pair – Iah, a
                  prickly recluse who has inexplicably evaded mandatory recruitment. After she
                  accidentally wields a spectral power un-Paired, Elim seizes his chance and
                  convinces her of a temporary partnership, desperate to break free of the Cynod’s
                  iron grip.
                </p>
                <p className="text-md">
                  On the run, they become entangled with Soren Entorial, a charismatic spymaster who
                  is investigating a slew of kidnappings that seem linked to Iah’s cryptic dreams.
                  Determined to confront her demons and discover the truth behind her rule-breaking
                  magic, Iah ignores Elim’s warnings and agrees to aid Soren in his search for the
                  missing commoneyes.
                </p>
                <p className="text-md">
                  But her burgeoning powers attract more than just agents of the Cynod – an unseen
                  threat lurks patiently behind the murky veil of Iah’s past. The Wound must be
                  repaired, and The Stranded will not be denied.
                </p>
              </div>
              {/* <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
    </div> */}
            </div>
          </div>
        </div>
        {/* <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div> */}
      </div>
    </>
  )
}
