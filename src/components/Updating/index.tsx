import React from "react";

import * as C from "./styles";

const Updating: React.FC = () => {
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
				duration: 0.5
			}}
		>
			<C.LoadingCircle />
		</C.Container>
	);
};

export default Updating;