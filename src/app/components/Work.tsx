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
					work={{
						id: "learn-by-typing",
						title: "資格勉強×タイピング",
						platform: "Webアプリケーション",
						usedService: ["Typescript", "Angular", "HTML/CSS", "Java", "Spring", "MySQL", "AWS", "Figma"],
						description: "タイピングゲームを楽しみながら、¥n資格試験の勉強を行うことができる¥n Webアプリを開発しました。¥n 現在は２つのモードを実装しています。",
						githubUrl: "https://github.com/oh-my-kamimura/learn-by-typing/tree/master",
						date: "2023/05〜現在",
						team: "1人",
						role: "ALL",
						serviceUrl: "https://www.learn-by-typing.com",
						imageCount: 5,
						topContentType: "webm",
					}}
				/>
				<WorkCard
					work={{
						id: "induction-course-quiz",
						title: "研修生向けクイズサイト",
						platform: "Webアプリケーション",
						usedService: ["HTML/CSS", "Java", "Spring", "Postgres", "Figma"],
						description: "新入社員研修中に、有志を募って開発したWebアプリです。研修で学んだ内容をクイズ形式で振り返り、知識定着を促進するアプリです。社内で公開しました。",
						date: "2022/6〜2022/7",
						team: "3人",
						role: "1. UI全般¥n2. クイズ機能、ランキング機能開発¥n3. デプロイ¥n4. スケジュール管理",
						imageCount: 6,
						topContentType: "webm",
					}}
				/>
				<WorkCard
					work={{
						id: "schedule-matching-app",
						title: "日程調整アプリ「ラク調」",
						platform: "モバイルアプリ【開発中】",
						usedService: ["Typescript", "ReactNative", "Firebase", "Figma"],
						description: "友人との日程調整をストレスフリーにする¥nモバイルアプリを開発しました。¥n友人同士の遊びの掲示板や、カレンダーに¥n基づいた回答機能などを備えています。",
						githubUrl: "https://github.com/oh-my-kamimura/schedule-matching-app",
						date: "2024/6〜現在",
						team: "2人",
						role: "1. UI全般¥n2. ログイン、フレンド管理機能開発¥n3. イベント登録、調整機能開発¥n4. スケジュール管理",
						imageCount: 0,
					}}
				/>
			</div>
			<div className={styles.cardContainer}>
				<WorkCard
					work={{
						id: "my-engineer-portfolio",
						title: "ポートフォリオサイト",
						platform: "Webサイト",
						usedService: ["Typescript", "Next.js", "HTML/CSS", "Figma"],
						description: "本サイトです。¥n自身の成果物をまとめました。",
						githubUrl: "https://github.com/oh-my-kamimura/my-engineer-portfolio",
						date: "2024/11〜現在",
						team: "1人",
						role: "ALL",
						serviceUrl: "https://oh-my-kamimura-portfolio.vercel.app",
						imageCount: 2,
					}}
				/>
				<WorkCard
					work={{
						id: "baseball-game",
						title: "野球版ゲーム",
						platform: "Unityアプリケーション",
						usedService: ["C#", "Unity"],
						description: "Unityを使用して野球版ゲームを作成しました。¥nプログラムを用いて野球のルールを実装しました。",
						date: "2021/7〜2021/8",
						team: "1人",
						role: "ALL",
						imageCount: 6,
						topContentType: "webm",
					}}
				/>
				<WorkCard
					work={{
						id: "shooting-game",
						title: "シューティングゲーム",
						platform: "Webサイト",
						usedService: ["HTML/CSS", "Javascript"],
						description: "人生で初めて開発したWebサイトです。¥nプログラミングを好きになったきっかけでもあります。¥nシンプルなスクロール型シューティングゲームです。",
						date: "2020/11〜2020/12",
						team: "1人",
						role: "ALL",
						imageCount: 5,
						topContentType: "webm",
					}}
				/>
			</div>
		</div>
	)
}