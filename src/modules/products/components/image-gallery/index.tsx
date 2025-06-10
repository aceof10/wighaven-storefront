"use client"
import { useState } from "react"

import { HttpTypes } from "@medusajs/types"
import { MainImageDisplay } from "./main-image-display"
import { ThumbnailNavigation } from "./thumbnail-navigation"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!images.length) {
    return (
      <div className="flex items-start relative">
        <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
          <div className="aspect-square w-full bg-ui-bg-subtle rounded-lg flex items-center justify-center">
            <p className="text-ui-fg-muted">No images available</p>
          </div>
        </div>
      </div>
    )
  }

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index)
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        <MainImageDisplay
          image={images[selectedImageIndex]}
          imageIndex={selectedImageIndex}
          isZoomed={isZoomed}
          onToggleZoom={toggleZoom}
        />

        {images.length > 1 && (
          <ThumbnailNavigation
            images={images}
            selectedIndex={selectedImageIndex}
            onImageSelect={handleImageSelect}
          />
        )}

        {/* Image Counter */}
        <div className="text-center text-sm text-ui-fg-muted">
          {selectedImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
