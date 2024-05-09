"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import TooltipComponent from "../tooltip";

const ButtonLogout = () => {
  const route = useRouter();

  async function logout() {
    await signOut({
      redirect: false,
    });
    route.push("/auth");
    route.refresh();
  }

  return (
    <TooltipComponent
      href=""
      icon={<LogOut />}
      label={"Sair"}
      onClick={logout}
    />
  );
};

export default ButtonLogout;
