import React from "react";

import * as C from "./styles";

type Props = {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ isOpen, setOpen, children }) => {
	return (
		<C.Container
			initial={{
				opacity: 0
			}}
			animate={{
				opacity: 1
			}}
			exit={{
				opacity: 0
			}}
			transition={{
				duration: 0.3
			}}
		>
			<C.Modal
				initial={{
					opacity: 0,
					translateY: "-10px"
				}}
				animate={{
					opacity: 1,
					translateY: "0px"
				}}
				exit={{
					opacity: 0,
					translateY: "-10px"
				}}
				transition={{
					duration: 0.3
				}}
			>
				<C.ClosedMenuIcon onClick={() => setOpen(!isOpen)} />
				{children}
			</C.Modal>
		</C.Container>
	);
};

export default Modal;