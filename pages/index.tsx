import Head from 'next/head'

import { Layout, Post } from "../components";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Overlapping toolbar</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="max-w-7xl mx-auto py-8">
				<Post />
				<div className="mt-32">
					<span className="uppercase text-slate-400">More posts</span>
					<ol className="flex space-x-8 mt-8">
						<li className="flex-1">
							<h3 className="text-3xl font-medium mb-2">A post title</h3>
							<span className="text-sm text-slate-400">28 Oct 2022</span>
							<div className="flex items-center justify-center mt-4 rounded-lg aspect-video bg-slate-600">
								Image
							</div>
						</li>
						<li className="flex-1">
							<h3 className="text-3xl font-medium mb-2">A post title</h3>
							<span className="text-sm text-slate-400">28 Oct 2022</span>
							<div className="flex items-center justify-center mt-4 rounded-lg aspect-video bg-slate-600">
								Image
							</div>
						</li>
						<li className="flex-1">
							<h3 className="text-3xl font-medium mb-2">A post title</h3>
							<span className="text-sm text-slate-400">28 Oct 2022</span>
							<div className="flex items-center justify-center mt-4 rounded-lg aspect-video bg-slate-600">
								Image
							</div>
						</li>
					</ol>
				</div>
			</main>
		</Layout>
	);
}
