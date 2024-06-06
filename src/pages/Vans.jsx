import { useState, useEffect } from "react"
import { UrlRoot } from "../components/UrlRoot"
import { Link } from "react-router-dom"

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
          to={`${UrlRoot}vans/${van.id}`}
          aria-label={`View details for ${van.name}, 
                             priced at £${van.price} per day`}
        >
          <h2>{van.name}</h2>
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

          <ul>
            <li>Price: £{van.price}/day</li>
            <li>Type: {van.type}</li>
          </ul>
        </Link>
      </li>
    )
  })
  return (
    <>
      <h1>Explore our van options</h1>
      <ul className="van-list">{vanList}</ul>
    </>
  )
}

export default Vans
