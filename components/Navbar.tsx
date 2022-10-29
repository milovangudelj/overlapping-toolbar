import Link from "next/link";

export const Navbar = () => {
	return (
		<div className="w-full bg-slate-700 relative z-20">
			<div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
				<Link
					href="/"
					className="text-2xl font-bold tracking-wider uppercase"
				>
					Test
				</Link>
				<nav>
					<ul className="flex items-center space-x-4">
						<li>
							<Link
								href="/#"
								className="text-lg hover:text-slate-400 transition"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/#"
								className="text-lg hover:text-slate-400 transition"
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								href="/#"
								className="text-lg hover:text-slate-400 transition"
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
