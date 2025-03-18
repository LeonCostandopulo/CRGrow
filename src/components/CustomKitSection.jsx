import { CustomProducts } from "./CustomProducts"
import { BrowserRouter} from "react-router-dom"

export function CustomKitSection() {
  return (
    <section className="custom">
      <h2 className="custom-title">¿Querés un kit personalizado? ¡Armá el tuyo!</h2>
      <BrowserRouter future={{ v7_startTransition: true }}>
          <CustomProducts typeRequired='iluminacion'>Paneles Led</CustomProducts>
          <CustomProducts typeRequired='carp'>Carpas</CustomProducts>

      </BrowserRouter>
    </section>
  )
}