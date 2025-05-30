import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					className="cursor-pointer hover:text-orange-500 dark:ring-1"
					variant="outline"
					size="icon"
				>
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="dark:bg-gray-800">
				<DropdownMenuItem className="hover:!bg-gray-200 dark:hover:!bg-gray-200 dark:hover:!text-black hover:cursor-pointer transition-colors duration-400" onClick={() => setTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem className="hover:!bg-gray-200 dark:hover:!bg-gray-200 dark:hover:!text-black hover:cursor-pointer transition-colors duration-400" onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem className="hover:!bg-gray-200 dark:hover:!bg-gray-200 dark:hover:!text-black hover:cursor-pointer transition-colors duration-400" onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
