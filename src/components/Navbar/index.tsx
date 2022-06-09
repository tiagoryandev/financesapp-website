import React, { useContext } from "react";

import * as C from "./styles";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar: React.FC = () => {
	const { user } = useContext(AuthContext);

	return (
		<>
			<C.Container>
				<C.LogoMark>
					<C.LogoIcon />
					<h1>Finances</h1>
				</C.LogoMark>
				<C.Options>
					<span>
						{user?.first_name} {user?.last_name}
					</span>
				</C.Options>
			</C.Container>
		</>
	);
};

export default Navbar;