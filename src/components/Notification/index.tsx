import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { MdClose, MdCancel, MdCheckCircle  } from "react-icons/md";

import * as C from "./styles";

type Props = {
	type?: "accept" | "error";
	content: string;
	timer?: number;
};

const Notification: React.FC<Props> = ({ type, content, timer }) => {
	const [notification, setNotification] = useState(true);

	useEffect(() => {
		setTimeout(() => setNotification(false), timer ? timer * 1000 : 3000);
	}, []);

	return (
		<AnimatePresence>	
			{notification && <C.Container 
				type={type}
				initial={{
					opacity: 0,
					translateY: "-20px"
				}}
				animate={{
					opacity: 1,
					translateY: "0px"
				}}
				exit={{
					opacity: 0,
					translateY: "-20px"
				}}
				transition={{
					duration: 0.5,
					type: "spring"
				}}
				timer={timer}
			>
				{type && type == "error" ? <MdCancel /> : <MdCheckCircle />}
				<MdClose 
					className="close-notify" 
					onClick={() => setNotification(!notification)}
				/>
				<C.Content>{content}</C.Content>
				<div className="timer"></div>
			</C.Container>}
		</AnimatePresence>
	);
};

export type NotificationContent = { 
	type: "error" | "accept";
	content: string;
	timer: number;
};

export default Notification;