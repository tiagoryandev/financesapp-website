import React from "react";

import * as C from "./styles";

const Loading: React.FC = () => {
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
				durantion: 3
			}}
		>
			<C.LoadingCircle />
		</C.Container>
	);
};

export default Loading;