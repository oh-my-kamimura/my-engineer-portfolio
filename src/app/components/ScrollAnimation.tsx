import styles from "../../styles/ScrollAnimation.module.scss"

export default function ScrollAnimation() {
	return (
		<svg className={styles.arrows}>
			<path className={styles.a1} d="M0 0 L15 16 L30 0"></path>
			<path className={styles.a1} d="M0 10 L15 26 L30 10"></path>
			<path className={styles.a1} d="M0 20 L15 36 L30 20"></path>
		</svg>
	)
}