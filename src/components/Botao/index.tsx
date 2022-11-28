import style from './style.module.scss';

export default function Botao({
  children,
  type = 'button',
  onClick,
}: {
  children: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className={style.botao} type={type}>
      {children}
    </button>
  );
}
