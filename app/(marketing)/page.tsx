import { Heading, Heroes } from './components/'

export default function MarketingPage () {
  return (
    <main className="min-h-full flex flex-col">
      <section className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </section>
    </main>
  )
}
