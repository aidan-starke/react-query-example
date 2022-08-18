import clsx from "clsx";
import { FC, ReactNode } from "react";
import { useTheme } from "@/libs/hooks";

interface TableRowProps {
	children: ReactNode;
	rowClassName?: string;
}

const TableRow: FC<TableRowProps> = ({ children, rowClassName }) => {
	const { isDarkMode } = useTheme();

	return (
		<div
			className={clsx(
				rowClassName,
				clsx(
					"grid gap-4 border-b items-center p-4 space-x-4",
					isDarkMode && "border-gray-400"
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
	const { isDarkMode } = useTheme();

	return (
		<div
			className={clsx(
				wrapperClassName,
				clsx(
					"p-4 grid grid-cols-3 items-center border-b",
					isDarkMode && "border-gray-400"
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
