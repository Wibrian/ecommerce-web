import Hero from "../components/Hero"
import NewCollection from "../components/NewCollection"
import NewsLetter from "../components/NewsLetter"
import Offer from "../components/Offer"
import Popular from "../components/Popular"

export default function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </>
  )
}
