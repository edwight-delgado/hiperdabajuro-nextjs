"use client";
import { useSession } from "next-auth/react";
export const TopBreadCrumb = () => {
  const { data: session } = useSession();
  return (
    <div className="py-9 bg-gray-light">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-12">
            <nav>
              <ul className="flex flex-wrap items-center justify-center">
                <li className="text-dark font-medium text-base uppercase mr-5">
                  {session?.user ? <p>Bienvenido {session.user.name} </p> : ""}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
