import { useOutletContext } from "react-router-dom"

function HostVanInfo() {
  const { van } = useOutletContext()
  return (
    <section className="host-vans-section">
      <div>Name: {van.name}</div>
      <div>Category: {van.type}</div>
      <div>Description: {van.description}</div>
      <div>Visibility: Public</div>
    </section>
  )
}

export default HostVanInfo
