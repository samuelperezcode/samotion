import { Heading, Heroes, Footer } from './components/'

export default function MarketingPage () {
  return (
    <div className="min-h-full flex flex-col">
      <section className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </section>
      <Footer />
    </div>
  )
}
