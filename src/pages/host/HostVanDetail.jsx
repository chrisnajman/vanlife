import { useState, useEffect } from "react"
import { useParams, Link, Outlet } from "react-router-dom"
import HostVanDetailNav from "../../components/HostVanDetailNav"

function HostVanDetail() {
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
    <div className="hosts-container  content-container host-van-detail van-detail-container">
      <Link
        className="back-link link-button"
        to=".."
        relative="path"
      >
        Back to Host Vans list
      </Link>
      {van ? (
        <>
          <div className="top-wrap">
            <div>
              <picture>
                <source
                  srcSet={van.imageUrlWebp}
                  type="image/webp"
                />
                <img
                  className="van-image"
                  src={van.imageUrlPng}
                  alt={`The ${van.name} van`}
                  loading="lazy"
                  width="881"
                  height="881"
                />
              </picture>
            </div>
            <div>
              <p>{van.type}</p>
              <h1>{van.name}</h1>
              <p>&pound;{van.price}/day</p>
            </div>

            <HostVanDetailNav />
          </div>
          {<Outlet context={{ van }} />}
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  )
}

export default HostVanDetail
