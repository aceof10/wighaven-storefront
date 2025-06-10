import Image from "next/image"

import { HttpTypes } from "@medusajs/types"

type ThumbnailNavigationProps = {
  images: HttpTypes.StoreProductImage[]
  selectedIndex: number
  onImageSelect: (index: number) => void
}

export const ThumbnailNavigation = ({
  images,
  selectedIndex,
  onImageSelect,
}: ThumbnailNavigationProps) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {images.map((image, index) => (
        <button
          key={image.id}
          onClick={() => onImageSelect(index)}
          className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
            index === selectedIndex
              ? "border-ui-border-interactive shadow-lg"
              : "border-ui-border-base hover:border-ui-border-strong"
          }`}
        >
          {image.url && (
            <Image
              src={image.url}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 10vw"
            />
          )}

          {/* Active indicator */}
          {index === selectedIndex && (
            <div className="absolute inset-0 bg-ui-bg-interactive/10" />
          )}
        </button>
      ))}
    </div>
  )
}
