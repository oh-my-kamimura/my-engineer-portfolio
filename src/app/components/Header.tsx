import styles from "../../styles/Header.module.scss"

export default function Header() {
	return (
		<div className={styles.header}>
			<a className={styles.logo} href="#top">
				YOHEI KAMIMURA
			</a>
			<div className={styles.menuContainer}>
				<a className={styles.menuElement} href="#about-site">
					About this site
				</a>
				<span className={styles.divide}>|</span>
				<a className={styles.menuElement} href="#work">
					Work
				</a>
				<span className={styles.divide}>|</span>
				<a className={styles.menuElement} href="#skills">
					Skills
				</a>
				<span className={styles.divide}>|</span>
				<a className={styles.menuElement} href="#contact">
					Contact
				</a>
			</div>
		</div>
	)
}