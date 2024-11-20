import styles from "../../styles/Work.module.scss"

export default function Work() {
	return (
		<div className={styles.container}>
			<div className={styles.sectionTitle}>
				Work
			</div>
			<div className={styles.message}>
				制作物一覧です。<br />
				各制作物をクリックすると、詳細をご確認いただけます。<br />
				随時更新予定です。
			</div>
		</div>
	)
}