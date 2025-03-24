import { CustomProducts } from "./CustomProducts"

export function CustomKitSection() {
  const textos = {
    h2 : "¿Querés un kit personalizado? ¡Armá el tuyo!",
    CustomProducts1 : "Paneles Led",
    CustomProducts2 : "Carpas"
  }
  return (
    <section id="custom" className="custom ">
      <h2 className="custom-title">{textos.h2}</h2>
        <CustomProducts typeRequired='iluminacion'>{textos.CustomProducts1}</CustomProducts>
        {/* <CustomProducts typeRequired='carp'>{textos.CustomProducts2}</CustomProducts> */}
    </section>
  )
}