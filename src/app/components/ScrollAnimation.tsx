import styles from "../../styles/ScrollAnimation.module.scss"

export default function ScrollAnimation() {
	return (
		<svg className={styles.arrows}>
			<path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
			<path className={styles.a1} d="M0 20 L30 52 L60 20"></path>
			<path className={styles.a1} d="M0 40 L30 72 L60 40"></path>
		</svg>
	)
}