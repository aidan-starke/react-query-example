import clsx from "clsx";
import { FC, ReactNode } from "react";

interface TableRowProps {
	children: ReactNode;
	rowClassName?: string;
}

const TableRow: FC<TableRowProps> = ({ children, rowClassName }) => (
	<div
		className={clsx(
			rowClassName,
			"grid gap-4 border-b items-center p-4 space-x-4"
		)}
	>
		{children}
	</div>
);

export const Layout = {
	TableRow,
};
