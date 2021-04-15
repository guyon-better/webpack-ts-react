declare namespace app {
	export const apiBasePath: string;
	export const basePath: string;
}

declare module '*.module.css' {
	const content: { [className: string]: string };
	export default content;
}

declare module '*.module.less' {
	const content: { [className: string]: string };
	export default content;
}
declare module '*.png' {
	const content: string;
	export default content;
}
declare module '*.jpg' {
	const content: string;
	export default content;
}
declare module '*.gif' {
	const content: string;
	export default content;
}

declare module '*.less' {
}

type UnPick<T, U> = Pick<T, Exclude<keyof T, U>>

type ArrayOrNot<T> = T extends any ? (T[] | T) : any

type WithChildren<T> = T & { children?: WithChildren<T>[] }

type MakeMap<T> = { [key: string]: T }