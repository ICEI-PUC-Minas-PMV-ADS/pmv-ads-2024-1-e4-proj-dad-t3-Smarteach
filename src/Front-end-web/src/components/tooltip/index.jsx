import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link";

const TooltipComponent = ({ href, label, icon }) => {

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger> <Link href={href}> {icon} </Link> </TooltipTrigger>
                <TooltipContent>
                    <p>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider> 
    )
}

export default TooltipComponent