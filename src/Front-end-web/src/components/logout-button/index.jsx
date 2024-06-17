"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const ButtonLogout = () => {
  const route = useRouter();

  async function logout() {
    signOut({
      redirect: false,
    });
    route.push('/auth');
    route.refresh();
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger> <LogOut onClick={logout}/> </TooltipTrigger>
        <TooltipContent>
          <p>Sair </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ButtonLogout;
