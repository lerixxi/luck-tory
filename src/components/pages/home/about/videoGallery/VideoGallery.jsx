import React, { useState, useEffect } from "react";
// import ReactPlayer from "react-player/lazy";
// import ModalVideo from "react-modal-video";
import dynamic from "next/dynamic";

import styles from "./VideoGallery.module.scss";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export const VideoGallery = ({ videoUrls }) => {
	const [isOpen, setOpen] = useState(false);
	const [currentVideoUrl, setCurrentVideoUrl] = useState("");

	const openModal = (url) => {
		setCurrentVideoUrl(url);
		setOpen(true);
	};

	return (
		<div>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="L61p2uyiMSo"
				onClose={() => setOpen(false)}
			/>

			<button className="btn-primary" onClick={() => setOpen(true)}>
				VIEW DEMO
			</button>
			<ModalVideo
				channel="youtube"
				url={currentVideoUrl}
				autoplay
				isOpen={isOpen}
				onClose={() => setOpen(false)}
			/>
			<div
				className={styles.videoBox}
				onClick={() => openModal("https://youtu.be/i8-dHVibpws")}
			>
				<ReactPlayer
					url="https://youtu.be/i8-dHVibpws"
					light
					width="100%"
					height="100%"
				/>
			</div>

			{/* {videoUrls.map((url, index) => (
				<div
					className={styles.videoBox}
					key={index}
					onClick={() => openModal(url)}
				>
					<ReactPlayer url={url} light width="100%" height="100%" />
				</div>
			))} */}
		</div>
	);
};
