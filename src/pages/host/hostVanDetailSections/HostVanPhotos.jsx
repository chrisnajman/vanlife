import { useOutletContext } from "react-router-dom"

function HostVanPhotos() {
  const { van } = useOutletContext()
  return (
    <section className="host-vans-section">
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
    </section>
  )
}

export default HostVanPhotos
