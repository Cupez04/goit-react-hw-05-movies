
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.pacman_container}>
      <div className={s.pacman}>
        <div className={s.pacman_top}></div>
        <div className={s.pacman_bottom}></div>
      </div>
      <div className={s.loading_text}>Loading...</div>
    </div>
  )
};