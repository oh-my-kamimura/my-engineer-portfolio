"use client";
import styles from "../../styles/WorkCard.module.scss"
import Image from "next/image"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";

import Modal from "./WorkModal";
import { WorkType } from "../types/work";


export default function WorkCard(props: {work: WorkType}) {
	const [isModalOpen, setModalOpen] = useState(false);
	const handleButtonClick = () => {
		setModalOpen(true);
	};

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
		"Next.js": ["#444444", "white"],
		"C#": ["#68217A", "white"],
		"Unity": ["#444444", "white"],
	};

	return (
		<>
			<button className={`${styles.container}`} onClick={handleButtonClick}>
				<div className={styles.cardImageFrame}>
					<Image
						className={styles.cardImage}
						src={`/work-card/${props.work.imageSrc}`}
						alt="トップ画像"
						fill
					/>
				</div>
				<div className={styles.overviewContainer}>
					<div className={styles.title}>
						{props.work.title}
					</div>
					<div className={styles.platform}>
						{props.work.platform}
					</div>
					<div className={styles.serviceFrame}>
						{props.work.usedService.map((service, index) => {
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
					<div className={styles.description}>
						{props.work.description.split("¥n").map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))}
					</div>
					{props.work.githubUrl ? (
						<a href={props.work.githubUrl} className={styles.github}>
							<FontAwesomeIcon icon={faSquareGithub} />
						</a>
					) : (
						<></>
					)}
				</div>
			</button>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
				content={props.work}
			/>
		</>
	)
}