import Image from "next/image"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"

type MainImageDisplayProps = {
  image: HttpTypes.StoreProductImage
  imageIndex: number
  isZoomed: boolean
  onToggleZoom: () => void
}

export const MainImageDisplay = ({
  image,
  imageIndex,
  isZoomed,
  onToggleZoom,
}: MainImageDisplayProps) => {
  return (
    <Container className="relative aspect-square w-full overflow-hidden bg-ui-bg-subtle rounded-lg shadow-lg group">
      {image?.url && (
        <>
          <Image
            src={image.url}
            priority={imageIndex <= 2}
            className={`object-cover transition-transform duration-500 cursor-zoom-in ${
              isZoomed ? "scale-150" : "group-hover:scale-105"
            }`}
            alt={`Product image ${imageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            style={{
              objectFit: "cover",
            }}
            onClick={onToggleZoom}
          />

          {/* Zoom indicator */}
          <div className="absolute top-4 right-4 bg-ui-bg-overlay rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg
              className="w-4 h-4 text-ui-fg-on-color"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </>
      )}
    </Container>
  )
}
