import styles from "../../styles/Header.module.scss"

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				YOHEI KAMIMURA
			</div>
			<div className={styles.menuContainer}>
				<div className={styles.menuElement}>
					About this site
				</div>
				<span className={styles.divide}>|</span>
				<div className={styles.menuElement}>
					Work
				</div>
				<span className={styles.divide}>|</span>
				<div className={styles.menuElement}>
					Skills
				</div>
				<span className={styles.divide}>|</span>
				<div className={styles.menuElement}>
					Contact
				</div>
			</div>
		</div>
	)
}