import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import styles from "../../styles/WorkModal.module.scss";
import { WorkType } from "../types/work";
import serviceColorMap from "../types/colorMap";


export default function Modal(props: {isOpen: boolean, onClose: () => void, content: WorkType }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	
	if (!props.isOpen) return null;

    const handleThumbnailClick = (index: number) => {
        setCurrentImageIndex(index);
    };

	return (
		<div className={styles.modalOverlay} onClick={props.onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button className={styles.closeButton} onClick={props.onClose}>×</button>
				<div className={styles.leftContainer}>
					<div className={styles.platform}>
						{props.content.platform}
					</div>
					<h3 className={styles.title}>
						{props.content.title}
					</h3>
					<div className={styles.divideLine}/>
					<table>
						<tbody>
							<tr>
								<td className={styles.firstColumn}>Date</td>
								<td className={styles.secondColumn}>
									{props.content.date}
								</td>
							</tr>
							<tr>
								<td className={styles.firstColumn}>Team</td>
								<td className={styles.secondColumn}>
									{props.content.team}
								</td>
							</tr>
							<tr>
								<td className={styles.firstColumn}>Role</td>
								<td className={styles.secondColumn}>
									{props.content.role.split("¥n").map((line, index) => (
										<React.Fragment key={index}>
											{line}
											<br />
										</React.Fragment>
									))}
								</td>
							</tr>
							{props.content.serviceUrl ? (
								<tr>
									<td className={styles.firstColumn}>URL</td>
									<td className={styles.secondColumn}>
										<a href={props.content.serviceUrl} target="_blank">
											{props.content.serviceUrl} <FontAwesomeIcon icon={faLink} />
										</a>
									</td>
								</tr>
							) : (
								<></>
							)}
						</tbody>
					</table>
					<div className={styles.divideLine}/>
					<div className={styles.description}>
						{props.content.description.split("¥n").map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))}
					</div>
					<div className={styles.divideLine}/>
					<div className={styles.serviceFrame}>
						{props.content.usedService.map((service, index) => {
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
					{props.content.githubUrl ? (
						<a href={props.content.githubUrl} className={styles.github} target="_blank">
							<FontAwesomeIcon icon={faSquareGithub} />
						</a>
					) : (
						<></>
					)}
				</div>
				<div className={styles.rightContainer}>
					<div className={styles.headerImage}>
						<Image
							className={styles.image}
							src={`/work/${props.content.id}/${currentImageIndex + 1}.png`}
							alt="トップ画像"
							width={1000}
							height={1000}
						/>
					</div>
					<div className={styles.thumbnailContainer}>
						{Array.from({ length: props.content.imageCount }, (_, index) => (
							<Image
								key={index}
								className={styles.thumbnail}
								src={`/work/${props.content.id}/${index + 1}.png`}
								alt={`サムネイル${index}`}
								onClick={() => handleThumbnailClick(index)}
								width={500}
								height={500}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};