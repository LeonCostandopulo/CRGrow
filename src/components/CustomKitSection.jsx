import { CustomProducts } from "./CustomProducts"
import { BrowserRouter} from "react-router-dom"

export function CustomKitSection() {
  const textos = {
    h2 : "¿Querés un kit personalizado? ¡Armá el tuyo!",
    CustomProducts1 : "Paneles Led",
    CustomProducts2 : "Carpas"
  }
  return (
    <section className="custom">
      <h2 className="custom-title">{textos.h2}</h2>
      <BrowserRouter future={{ v7_startTransition: true }}>
          <CustomProducts typeRequired='iluminacion'>{textos.CustomProducts1}</CustomProducts>
          <CustomProducts typeRequired='carp'>{textos.CustomProducts2}</CustomProducts>

      </BrowserRouter>
    </section>
  )
}