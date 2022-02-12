import styles from './title.module.scss';

export default function Title({title}) {
    return(
        <div className={styles.wrapper}>
            {title}
        </div>
    )
}