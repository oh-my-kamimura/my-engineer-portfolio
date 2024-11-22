import styles from "../../styles/Work.module.scss"
import WorkCard from "./WorkCard"

export default function Work() {
	return (
		<div className={styles.container} id="work">
			<h3>
				Work
			</h3>
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
					usedService={["Typescript", "Angular", "HTML/CSS", "Java", "Spring", "MySQL", "AWS", "Figma"]}
					description="タイピングゲームを楽しみながら、¥n資格試験の勉強を行うことができる¥n Webアプリケーションを開発しました。¥n 現在は２つのモードを実装しています。"
					githubUrl="https://github.com/oh-my-kamimura/learn-by-typing/tree/master"
				/>
				<WorkCard
					imageSrc="schedule-matching-app.png"
					title="日程調整アプリ「ラク調」"
					platform="モバイルアプリ（iPhone × android）【開発中】"
					usedService={["Typescript", "ReactNative", "Firebase", "Figma"]}
					description="友人との日程調整をストレスフリーにする¥nモバイルアプリを開発しました。¥n友人同士の遊びの掲示板や、カレンダーに¥n基づいた回答機能などを備えています。"
					githubUrl="https://github.com/oh-my-kamimura/schedule-matching-app"
				/>
				<WorkCard
					imageSrc="induction-course-quiz.png"
					title="研修生向けクイズサイト"
					platform="Webアプリケーション"
					usedService={["HTML/CSS", "Java", "Spring", "MySQL", "Figma"]}
					description="新入社員研修中に開発したアプリケーションです。研修で学んだ内容をクイズ形式で振り返り、知識定着を促進するアプリケーションを開発し、社内で公開しました。"
				/>
			</div>
			<div className={styles.cardContainer}>
				<WorkCard
					imageSrc="my-engineer-portfolio.png"
					title="ポートフォリオサイト"
					platform="Webサイト"
					usedService={["Typescript", "Next.js", "HTML/CSS", "Figma"]}
					description="本サイトです。¥n自身の成果物をまとめました。"
					githubUrl="https://github.com/oh-my-kamimura/my-engineer-portfolio"
				/>
				<WorkCard
					imageSrc="baseball-game.png"
					title="野球版ゲーム"
					platform="Unityアプリケーション"
					usedService={["C#", "Unity"]}
					description="Unityを使用して野球版ゲームを作成しました。¥nプログラムを用いて野球のルールを実装しました。"
				/>
				<WorkCard
					imageSrc="shooting-game.png"
					title="シューティングゲーム"
					platform="Webサイト"
					usedService={["HTML/CSS", "Javascript"]}
					description="人生で初めて開発したWebサイトで、¥nプログラミングを好きになったきっかけでもあります。¥nシンプルなスクロール型シューティングゲームです。"
				/>
			</div>
		</div>
	)
}