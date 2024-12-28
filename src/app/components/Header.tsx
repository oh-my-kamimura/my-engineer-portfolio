import styles from "../../styles/Header.module.scss"

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.menuContainer}>
				<a className={styles.menuElement} href="#top">
					Top
				</a>
				<a className={styles.menuElement} href="#about-site">
					About this site
				</a>
				<a className={styles.menuElement} href="#work">
					Work
				</a>
				{/* <a className={styles.menuElement} href="#skills">
					Skills
				</a> */}
				<a className={styles.menuElement} href="#contact">
					Contact
				</a>
			</div>
		</div>
	)
}