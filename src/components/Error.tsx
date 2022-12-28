import classe from "./Error.module.css"

export const Error = () => {
  return (
    <div>
        <p className={classe.error}>Usuário não encontrado!</p>
        <p>Informe outro usuario!</p>
    </div>
  )
}

export default Error;