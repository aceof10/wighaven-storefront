import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "WigHaven - Premium Wigs for Every Style",
  description:
    "Discover our curated collection of premium wigs. From natural looks to bold statements - find your perfect style at WigHaven.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        <div className="content-container text-center mb-12">
          <h2 className="text-3xl small:text-4xl font-light mb-4">
            Discover Our Collections
          </h2>
          <p className="text-ui-fg-muted max-w-2xl mx-auto">
            Each collection is thoughtfully curated to help you express your
            unique style and personality.
          </p>
        </div>
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
