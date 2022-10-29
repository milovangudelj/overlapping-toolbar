import { useRef } from "react";

import { ToolbarProvider } from "../lib/toolbarContext";
import { PostToolbar, PostImage } from "../components";
import Image from "next/image";

export const Post = () => {
	const toolbar = useRef<HTMLDivElement>(null);

	return (
		<ToolbarProvider toolbar={toolbar}>
			<div className="grid grid-cols-5">
				<header className="mb-8 col-span-3 col-start-2">
					<h1 className="text-5xl font-bold mb-4">
						Overlapping toolbar experiment
					</h1>
					<span className="text-2xl block font-medium mb-4 text-slate-400">
						This is a fun little UI experiment that attempts to reproduce
						a floating side toolbar as seen on some blog websites.
					</span>
					<div className="text-slate-400 text-sm">
						Author: <span className="text-slate-50">Milo</span>
					</div>
				</header>
				<div className="flex relative overflow-hidden col-span-5 items-center justify-center bg-slate-600 text-slate-400 text-lg h-96 rounded-lg">
					<span>Loading...</span>
					<Image
						src="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
						loading="eager"
						width={1280}
						height={384}
						alt="Random photo about UI design taken from Unsplash.com"
						className="absolute object-cover object-center"
					/>
				</div>
				<div className="grid grid-cols-5 col-span-5 mt-8">
					<PostToolbar ref={toolbar} />
					<div className="col-span-3">
						<h2 className="text-4xl font-bold mb-8">
							Some secondary heading
						</h2>
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
						<h2 className="text-4xl font-bold mb-8 mt-16">
							Some other heading
						</h2>
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
						<PostImage src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
						<h2 className="text-4xl font-bold mb-8 mt-16">
							A third heading
						</h2>
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
						<PostImage src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
						<p className="my-4 text-lg">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Tempore, quia? Necessitatibus, mollitia! Saepe aliquid,
							recusandae ducimus maiores labore deserunt alias. Rerum
							repudiandae temporibus, dicta quasi saepe officia!
							Excepturi, illo doloribus.
						</p>
					</div>
				</div>
			</div>
		</ToolbarProvider>
	);
};
