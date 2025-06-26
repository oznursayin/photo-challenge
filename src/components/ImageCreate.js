import { useState } from "react"

const ImageCreate = () => {
  const [images, setImages] = useState([])

  const handleNewImage = () => {
    const newImage = {
      id: crypto.randomUUID(),
      url: `https://picsum.photos/seed/${crypto.randomUUID()}/300/200`,
      iconSize: 16,
    }
    const newImages = [...images, newImage]
    setImages(newImages)
  }

  const handleIconClick = (id) => {
    setImages((images) =>
      images.map((image) =>
        image.id === id
          ? {
              ...image,
              iconSize:
                image.iconSize < 30 ? image.iconSize + 5 : image.iconSize,
            }
          : image
      )
    )
  }

  return (
    <div>
      <button onClick={handleNewImage}>Resim Ekle</button>
      <div className="images-container">
        {images.map((image) => (
          <div className="image-container" key={image.id}>
            <img
              src={image.url}
              alt=""
              onClick={() => handleIconClick(image.id)}
            />
            <div style={{ fontSize: `${image.iconSize}px` }}>👍</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ImageCreate
