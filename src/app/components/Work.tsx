import styles from "../../styles/Work.module.scss"
import WorkCard from "./WorkCard"

export default function Work() {
	return (
		<div className={styles.container} id="work">
			<div className={styles.sectionTitle}>
				Work
			</div>
			<div className={styles.message}>
				制作物一覧です。<br />
				各制作物をクリックすると、詳細をご確認いただけます。<br />
				随時更新予定です。
			</div>
			<div className={styles.cardContainer}>
				<WorkCard
					imageSrc = "learn-by-typing.png"
				/>
				<WorkCard
					imageSrc = "schedule-matching-app.png"
				/>
				<WorkCard
					imageSrc = "induction-course-quiz.png"
				/>
			</div>
		</div>
	)
}