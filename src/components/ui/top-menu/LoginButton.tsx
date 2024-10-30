"use client";
import Providers from "@/middleware/providers";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function () {
  const { data: session } = useSession();
  return (
    <li className="main-menu__item">
      {session?.user ? (
        <button
          type="button"
          onClick={() => signOut()}
          className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
        >
          Cerrar Sesión
        </button>
      ) : (
        <Link
          className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
          href="/auth/register"
        >
          Inicial Sesión
        </Link>
      )}
    </li>
  );
}
