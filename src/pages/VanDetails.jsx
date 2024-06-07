import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function VanDetails() {
  const params = useParams()

  const [van, setVan] = useState(null)

  useEffect(() => {
    async function getVan() {
      try {
        const res = await fetch(`/api/vans/${params.id}`)
        const vanData = await res.json()
        setVan(vanData.vans)
      } catch (error) {
        console.log(error)
      }
    }
    getVan()
  }, [params.id])

  return (
    <div className="van-detail-container  content-container">
      {van ? (
        <>
          <h1>{van.name}: Details</h1>
          <picture>
            <source
              srcSet={van.imageUrlWebp}
              type="image/webp"
            />
            <img
              src={van.imageUrlPng}
              alt={`The ${van.name} van`}
              loading="lazy"
              width="881"
              height="881"
            />
          </picture>
          <p>{van.description}</p>

          <ul>
            <li>Price: £{van.price}/day</li>
            <li>Type: {van.type}</li>
          </ul>
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  )
}

export default VanDetails
