import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-[80vh] w-full relative bg-ui-bg-subtle overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 small:px-32">
        <div className="max-w-3xl space-y-6">
          <Heading
            level="h1"
            className="text-4xl small:text-6xl leading-tight text-ui-fg-base font-light"
          >
            Find Your Perfect Look
          </Heading>
          <Heading
            level="h2"
            className="text-xl small:text-2xl leading-relaxed text-ui-fg-muted font-normal max-w-2xl mx-auto"
          >
            Premium wigs crafted for confidence, comfort, and style. From
            natural everyday looks to bold transformations.
          </Heading>
          <div className="flex flex-col small:flex-row gap-4 justify-center items-center pt-6">
            <LocalizedClientLink href="/store">
              <Button size="large" className="w-full small:w-auto">
                Shop Now
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
