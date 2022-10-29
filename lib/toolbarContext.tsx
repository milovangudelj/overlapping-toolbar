import { useRouter } from "next/router";
import {
	createContext,
	Dispatch,
	RefObject,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";

type ToolbarProviderValue = {
	overlapped: boolean;
	toolbar: RefObject<Element> | undefined;
	overlappingElement: RefObject<Element> | undefined;
	checkToolbarOverlap: (el: RefObject<Element>) => boolean;
	setOverlapped: Dispatch<SetStateAction<boolean>>;
	registerElement: (ref: RefObject<Element>) => void;
};

const ToolbarContext = createContext<ToolbarProviderValue>({
	overlapped: false,
	toolbar: { current: null },
	overlappingElement: { current: null },
	setOverlapped: () => {},
	checkToolbarOverlap: () => false,
	registerElement: () => {},
});

export function useToolbar(): ToolbarProviderValue {
	return useContext(ToolbarContext);
}

export const ToolbarProvider = ({
	children,
	toolbar,
}: {
	children: ReactNode;
	toolbar: RefObject<Element>;
}) => {
	const value = useProvideToolbar(toolbar);

	return (
		<ToolbarContext.Provider value={value}>
			{children}
		</ToolbarContext.Provider>
	);
};

const useProvideToolbar = (
	toolbar: RefObject<Element>
): ToolbarProviderValue => {
	const [overlapped, setOverlapped] = useState<boolean>(false);
	const [overlappingElement, setOverlappingElement] =
		useState<RefObject<Element>>();
	const [elements, setElements] = useState<Set<RefObject<Element>>>(new Set());

	/** Registers an element to be checked against the toolbar */
	const registerElement = (ref: RefObject<Element>) => {
		elements.add(ref);
	};

	/** Checks if the given element overlaps with the toolbar */
	const checkToolbarOverlap = (ref: RefObject<Element>) => {
		if (!toolbar.current) return false;
		if (!ref.current) return false;

		const elBounds = ref.current.getBoundingClientRect();
		const toolbarBounds = toolbar.current.getBoundingClientRect();

		let overlapping = !(
			elBounds.top > toolbarBounds.bottom ||
			elBounds.right < toolbarBounds.left ||
			elBounds.bottom < toolbarBounds.top ||
			elBounds.left > toolbarBounds.right
		);

		return overlapping;
	};

	/** Checks if the given element is in viewport */
	const isElementInViewport = (ref: RefObject<Element>) => {
		if (!ref.current) return false;

		const rect = ref.current.getBoundingClientRect();

		const res =
			rect.top > -rect.height &&
			rect.left > -rect.width &&
			rect.bottom <
				(window.innerHeight || document.documentElement.clientHeight) +
					rect.height &&
			rect.right <=
				(window.innerWidth || document.documentElement.clientWidth) +
					rect.width;

		return res;
	};

	const scrollHandler = () => {
		if (!toolbar.current) return;
		if (!isElementInViewport(toolbar)) return;

		let overlapping = overlapped; // Accumulates the value of all overlap checks */
		elements.forEach((element) => {
			if (!element.current) {
				elements.delete(element); // Removes null refs
				return;
			}
			if (!isElementInViewport(element)) return;

			const elOverlaps = checkToolbarOverlap(element);
			if (elOverlaps) setOverlappingElement(element);

			overlapping = overlapping || elOverlaps;
		});
		if (!overlapping) setOverlappingElement(undefined);

		setOverlapped(overlapping);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);

		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	return {
		overlapped,
		toolbar,
		overlappingElement,
		setOverlapped,
		checkToolbarOverlap,
		registerElement,
	};
};
