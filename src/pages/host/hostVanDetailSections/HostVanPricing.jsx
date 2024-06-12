import { useOutletContext } from "react-router-dom"

function HostVanPricing() {
  const { van } = useOutletContext()
  return <section className="host-vans-section">&pound;{van.price}/day</section>
}

export default HostVanPricing
