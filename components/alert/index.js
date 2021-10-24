import styles from './alert.module.css';
import cn from 'classnames';

export default function Alert({ children, type }) {
  return (
    <div className={type === 'success' ? styles.success : styles.fail}>
      {children}
    </div>
  )
}