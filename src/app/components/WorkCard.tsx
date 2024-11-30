"use client";
import styles from "../../styles/WorkCard.module.scss"
import Image from "next/image"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";

import Modal from "./WorkModal";
import { WorkType } from "../types/work";
import serviceColorMap from "../types/colorMap";


export default function WorkCard(props: {work: WorkType}) {
	const [isModalOpen, setModalOpen] = useState(false);
	const handleButtonClick = () => {
		setModalOpen(true);
	};

	return (
		<>
			<button className={`${styles.container}`} onClick={handleButtonClick}>
				<div className={styles.cardImageFrame}>
					<Image
						className={styles.cardImage}
						src={`/work-card/${props.work.id}.png`}
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
						<a href={props.work.githubUrl} className={styles.github} target="_blank">
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