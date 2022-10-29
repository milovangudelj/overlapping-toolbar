import Link from "next/link";

export const Footer = () => {
	return (
		<div className="w-full bg-slate-900">
			<div className="flex justify-between items-center max-w-7xl mx-auto py-4">
				<span className="">&copy; 2022</span>
				<nav>
					<ul className="flex items-center space-x-2">
						<li>
							<Link
								href="/#"
								className="text-base hover:text-slate-400 transition"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/#"
								className="text-base hover:text-slate-400 transition"
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								href="/#"
								className="text-base hover:text-slate-400 transition"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
