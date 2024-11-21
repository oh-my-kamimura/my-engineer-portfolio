import styles from "../../styles/WorkCard.module.scss"
import Image from "next/image"
import React from "react";

export default function WorkCard(props: { imageSrc: string, title: string, platform: string, usedService: string[], description: string }) {
	type ColorMap = { [key: string]: [backgroundColor: string, fontColor: string]; };

	const serviceColorMap: ColorMap = {
		"HTML/CSS": ["#E44D26", "white"],
		Typescript: ["#007ACC", "white"],
		Angular: ["#DD1B16", "white"],
		Java: ["#5382A1", "white"],
		Spring: ["#6DB33F", "white"],
		AWS: ["#FF9900", "black"],
		Figma: ["#F24E1E", "white"],
		Javascript: ["#F7DF1E", "black"],
		Firebase: ["#FFCA28", "black"],
		ReactNative: ["#20232A", "#61DAFB"],
		MySQL: ["#00758F", "white"],
	};

	return (
		<div className={styles.container}>
			<div className={styles.cardImageFrame}>
				<Image
					className={styles.cardImage}
					src={`/work-card/${props.imageSrc}`}
					alt="トップ画像"
					fill
				/>
			</div>
			<div className={styles.overviewContainer}>
				<div className={styles.title}>
					{props.title}
				</div>
				<div className={styles.platform}>
					{props.platform}
				</div>
				<div className={styles.serviceFrame}>
					{props.usedService.map((service, index) => {
						const [backgroundColor, fontColor] = serviceColorMap[service];
						return (
							<div
								key={index}
								className={styles.serviceElement}
								style={{
									backgroundColor: backgroundColor,
									color: fontColor,
								}}
							>
								{service}
							</div>
						)
					})}
				</div>
				<div className={styles.description} style={{whiteSpace: "pre-line"}}>
				{props.description.split("¥n").map((line, index) => (
					<React.Fragment key={index}>
					{line}
					<br />
					</React.Fragment>
				))}
				</div>
			</div>
		</div>
	)
}