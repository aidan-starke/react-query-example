import clsx from "clsx";
import { FC, ReactNode } from "react";
import { useTheme } from "@/libs/hooks";
import { applyDarkModeBorder } from "@/libs/utils";

interface TableRowProps {
	children: ReactNode;
	rowClassName?: string;
}

const TableRow: FC<TableRowProps> = ({ children, rowClassName }) => {
	const isDarkMode = useTheme((state) => state.theme === "Dark");

	return (
		<div
			className={clsx(
				rowClassName,
				applyDarkModeBorder(
					"grid gap-4 border-b items-center p-4 space-x-4",
					isDarkMode
				)
			)}
		>
			{children}
		</div>
	);
};

interface TableWrapperProps {
	children: ReactNode;
	wrapperClassName?: string;
}

const TableWrapper: FC<TableWrapperProps> = ({
	children,
	wrapperClassName,
}) => {
	const isDarkMode = useTheme((state) => state.theme === "Dark");

	return (
		<div
			className={clsx(
				wrapperClassName,
				applyDarkModeBorder(
					"p-4 grid grid-cols-3 items-center border-b",
					isDarkMode
				)
			)}
		>
			{children}
		</div>
	);
};

export const Layout = {
	TableRow,
	TableWrapper,
};
