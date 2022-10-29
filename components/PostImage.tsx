import { ComponentPropsWithRef, useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

import { useToolbar } from "../lib/toolbarContext";
import Image from "next/image";

interface PostImageProps extends ComponentPropsWithRef<"div"> {
	src?: string;
}

const variants: Variants = {
	resting: {
		marginLeft: 0,
	},
	overlapping: {
		marginLeft: 56,
	},
};

export const PostImage = ({
	src = "https://source.unsplash.com/random?ui-design",
}: PostImageProps) => {
	const { registerElement, overlappingElement } = useToolbar();
	const image = useRef<HTMLDivElement>(null);
	const [overlapping, setOverlapping] = useState<boolean>(false);

	useEffect(() => {
		registerElement(image);
	}, [image]);

	useEffect(() => {
		if (image.current === overlappingElement?.current) {
			setOverlapping(true);
		} else {
			setOverlapping(false);
		}
	}, [image, overlappingElement]);

	return (
		<div
			ref={image}
			className="pointer-events-none flex py-8 w-[calc(100%/3*5)] -mx-[calc(100%/3)] relative z-10"
		>
			<motion.div
				variants={variants}
				animate={overlapping ? "overlapping" : "resting"}
				transition={{
					duration: 0.2,
					ease: "easeOut",
					type: "tween",
				}}
				className={`relative overflow-hidden items-center pointer-events-auto w-full flex justify-center bg-slate-600 text-slate-400 text-lg h-96 rounded-lg`}
			>
				<span>Loading...</span>
				<Image
					src={src}
					width={1280}
					height={384}
					alt="Random photo about UI design taken from Unsplash.com"
					className="absolute object-cover object-center"
				/>
			</motion.div>
		</div>
	);
};
