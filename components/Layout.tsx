import { ReactNode } from "react";

import { Navbar, Footer } from "./";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="bg-slate-800 text-slate-50 min-h-screen">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};
