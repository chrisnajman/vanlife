import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaCircleArrowRight } from "react-icons/fa6"

function Vans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    async function getVans() {
      try {
        const res = await fetch("/api/vans")
        const vansData = await res.json()
        setVans(vansData.vans)
      } catch (error) {
        console.log(error)
      }
    }
    getVans()
  }, [])

  const vanList = vans.map((van) => {
    return (
      <li key={van.id}>
        <Link
          className="link-button"
          to={van.id}
          aria-label={`View details for ${van.name}, 
                             priced at £${van.price} per day`}
        >
          <p>{van.name}</p>
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

          <ul className="van-footer">
            <li>Price: £{van.price}/day</li>
            <li>
              Type: <span className="van-type">{van.type}</span>
            </li>
          </ul>
          <FaCircleArrowRight aria-hidden="true" />
        </Link>
      </li>
    )
  })
  return (
    <div className="vans-container  content-container">
      <h1>Explore our van options</h1>
      {vans.length > 0 ? (
        <ul className="van-list">{vanList}</ul>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  )
}

export default Vans
