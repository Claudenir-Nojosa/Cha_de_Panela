"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToggleTheme } from "./toggleTheme";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { motion } from "framer-motion";

export function NavBar() {
  const session = useSession();
  const router = useRouter();
  const handleSignOut = () => {
    signOut();
    router.push("/");
    router.refresh();
  };
  return (
    <motion.div
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar justify-between"
    >
      {session.status === "authenticated" ? (
        <div className="invisible"/>
      ) : (
        <NavigationMenu>
          <Link href="/">
            <Image src="/assets/logo.png" alt="Logo" height={80} width={80} />
          </Link>
        </NavigationMenu>
      )}
      <NavigationMenu className="mr-4">
        <NavigationMenuList className="flex gap-3">
          <NavigationMenuItem>
            <ToggleTheme />
          </NavigationMenuItem>
          Foto Perfil
        </NavigationMenuList>
      </NavigationMenu>
    </motion.div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
