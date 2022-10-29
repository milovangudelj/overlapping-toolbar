import { ComponentPropsWithoutRef, forwardRef } from "react";
import { BookmarkSimple, ShareNetwork, Heart, ThumbsUp } from "phosphor-react";
import { motion, Variants } from "framer-motion";

import { useToolbar } from "../lib/toolbarContext";

const menuVariants: Variants = {
	resting: {
		width: "auto",
	},
	overlapped: {
		width: "48px",
	},
};

export const PostToolbar = forwardRef<
	HTMLDivElement,
	ComponentPropsWithoutRef<"div">
>((props, ref) => {
	const { overlapped } = useToolbar();

	return (
		<div className="col-span-1 h-full">
			<motion.div
				variants={menuVariants}
				initial="resting"
				animate={overlapped ? "overlapped" : "resting"}
				transition={{
					ease: "easeOut",
					duration: 0.2,
					type: "tween",
				}}
				ref={ref}
				aria-hidden={overlapped}
				className={`sticky top-8 p-1 mr-8 bg-slate-700 rounded-lg`}
			>
				<ul className="space-y-1">
					<li className="overflow-hidden p-2 flex items-center group hover:bg-slate-600 transition rounded-lg cursor-pointer">
						<BookmarkSimple
							size={24}
							className="text-slate-400 flex-none group-hover:text-yellow-500 transition"
						/>
						<span className={`text-slate-50 ml-2`}>Bookmark</span>
					</li>
					<li className="overflow-hidden p-2 flex items-center group hover:bg-slate-600 transition rounded-lg cursor-pointer">
						<ShareNetwork
							size={24}
							className="text-slate-400 flex-none group-hover:text-green-500 transition"
						/>
						<span className={`text-slate-50 ml-2`}>Share</span>
					</li>
					<li className="overflow-hidden p-2 flex items-center group hover:bg-slate-600 transition rounded-lg cursor-pointer">
						<Heart
							size={24}
							className="text-slate-400 flex-none group-hover:text-red-500 transition"
						/>
						<span className={`text-slate-50 ml-2`}>Like</span>
					</li>
					<li className="overflow-hidden p-2 flex items-center group hover:bg-slate-600 transition rounded-lg cursor-pointer">
						<ThumbsUp
							size={24}
							className="text-slate-400 flex-none group-hover:text-blue-500 transition"
						/>
						<span className={`text-slate-50 ml-2`}>Upvote</span>
					</li>
				</ul>
			</motion.div>
		</div>
	);
});

PostToolbar.displayName = "PostToolbar";
