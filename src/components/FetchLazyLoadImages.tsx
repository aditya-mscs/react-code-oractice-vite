import { useEffect, useState } from "react"
import GoBackToHome from "./GoBacktoHome"


const FetchLazyLoadImages = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images.json")
      .then(response => {
        if(response.ok) {
          return response.json()          
        }
      })
      .then(data => {
        type ImageData = { url: string }
        const image = data.data.slice(0, 20).map((image: ImageData) => image.url)
        setImages(image)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <GoBackToHome />
      <h1>Fetch API</h1>
      <p>Fetch API is a modern replacement for XMLHttpRequest. It's a browser built-in API that allows you to make network requests similar to XMLHttpRequest, but with a simpler and more powerful interface.</p>
      {
        images.map((image, index) => {
          return <img key={index} src={image} height={500} style={{display: "block", margin: "10px"}} />
        })
      }
    </div>
  )
}

export default FetchLazyLoadImages