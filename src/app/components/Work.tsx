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
					imageSrc="learn-by-typing.png"
					title="資格勉強×タイピング"
					platform="Webアプリケーション"
					usedService={["Typescript", "Angular", "HTML/CSS", "Java", "Spring", "MySQL","AWS", "Figma"]}
				/>
				<WorkCard
					imageSrc="schedule-matching-app.png"
					title="日程調整アプリ「ラク調」"
					platform="モバイルアプリ（iPhone × android）【開発中】"
					usedService={["Typescript", "ReactNative", "Firebase", "Figma"]}
				/>
				<WorkCard
					imageSrc="induction-course-quiz.png"
					title="研修生向けクイズサイト"
					platform="Webアプリケーション"
					usedService={["HTML/CSS", "Java", "Spring", "MySQL", "Figma"]}
				/>
			</div>
		</div>
	)
}