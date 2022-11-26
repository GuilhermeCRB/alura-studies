import style from './style.module.scss'

export default function Botao(
    { children, type = "button" }: { children: string, type?: "button" | "submit" | "reset" | undefined }
  ) {
  return (
    <button className={style.botao} type={type}>
      {children}
    </button>
  )
}