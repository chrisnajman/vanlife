import { useState, useEffect } from "react"
// import { UrlRoot } from "../components/UrlRoot"
// import { Link } from "react-router-dom"

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
      <div key={van.id}>
        <h2>{van.name}</h2>
        <p>{van.description}</p>
        <picture>
          <source
            srcSet={van.imageUrlWebp}
            type="image/webp"
          />
          <img
            src={van.imageUrlPng}
            alt={van.name}
            loading="lazy"
            width="881"
            height="881"
          />
        </picture>

        <ul>
          <li>Price: {van.price}</li>
          <li>Type: {van.type}</li>
        </ul>
      </div>
    )
  })
  return (
    <>
      <h1>Vans</h1>
      {vanList}
    </>
  )
}

export default Vans
