import { FacebookLogin, GoogleLogin } from "@/components";
import Providers from "@/middleware/providers";
import Link from "next/link";

export default function () {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-12">
          <div id="maintab">
            <ul className="custom-tab-nav flex flex-wrap items-center justify-center mb-10">
              <li className="mx-2">
                <Link
                  className="font-semibold py-3 px-5 leading-none uppercase transition-all hover:text-orange  text-base md:text-md"
                  href="/auth/login"
                >
                  login
                </Link>{" "}
                <span className="inline-block ml-2">|</span>
              </li>
              <li className="mx-2 active">
                <Link
                  className="font-semibold py-3 px-5 leading-none uppercase transition-all hover:text-orange  text-base md:text-md"
                  href="/auth/register"
                >
                  register
                </Link>
              </li>
            </ul>

            <div>
              <div id="register" className="custom-tab-content">
                <div className="p-8 md:p-20 shadow max-w-4xl mx-auto">
                  <form action="#" method="post">
                    <input
                      className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                      type="text"
                      name="user-name"
                      placeholder="Username"
                    />
                    <input
                      className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                      type="password"
                      name="user-password"
                      placeholder="Password"
                    />
                    <input
                      className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                      name="user-email"
                      placeholder="Email"
                      type="email"
                    />
                    <div className="button-box">
                      <a
                        href="#"
                        className="inline-block leading-none uppercase text-white text-sm bg-dark px-5 py-4 transition-all hover:bg-orange"
                      >
                        <span>Register</span>
                      </a>
                    </div>
                  </form>
                  <div className="grid grid-flow-cols ms:grid-cols-1 gap-4 md:grid-cols-2 justify-stretch">
                    <Providers>
                      <GoogleLogin title="Sign up with Google"></GoogleLogin>
                      <FacebookLogin title="Sign up with Facebook"></FacebookLogin>
                    </Providers>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
