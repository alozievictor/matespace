import React from "react";

const Auth = () => {
  const [showTab, setShowTab] = React.useState({
    Login: true,
    Register: false,
  });

  return (
    <div className="w-[80%] mx-auto bg-white drop-shadow rounded-xl py-4 px-10">
      <div className=" w-full bg-white">
        <div className="w-full border-b flex justify-start items-center px-3">
          <div className="w-full md:w-[50%] mx-auto">
            <ul className="flex justify-between items-center gap-3">
              <li className="text-sm p-1 cursor-pointer">
                <button
                  //   role="button"
                  className={`${
                    showTab.Login
                      ? "bg-[#C7E9E9] h-[40px] text-[#000] font-medium text-base capitalize py-2 px-10 rounded"
                      : "text-[#545454] font-norml text-base"
                  }`}
                  id="tab-0"
                  data-toggle="tab"
                  href="#"
                  onClick={() =>
                    setShowTab((prev) => ({
                      ...prev,
                      Login: true,
                      Register: false,
                    }))
                  }
                >
                  Login
                </button>
              </li>
              <li className="text-sm p-1 cursor-pointer">
                <button
                  //   role="button"
                  className={`${
                    showTab.Register
                      ? "bg-[#C7E9E9] h-[40px] text-[#000] font-medium text-base capitalize py-2 px-10 rounded"
                      : "text-[#545454] font-norml text-base"
                  }`}
                  id="tab-0"
                  data-toggle="tab"
                  href="#"
                  onClick={() =>
                    setShowTab((prev) => ({
                      ...prev,
                      Login: false,
                      Register: true,
                    }))
                  }
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full my-5">
          <>
            {showTab.Login && <Login />}
            {showTab.Register && <Register />}
          </>
        </div>
      </div>
    </div>
  );
};

export default Auth;

export const Login = () => {
  return (
    <div class="mx-auto flex w-full flex-col justify-center pt-0">
      <div class="my-auto mb-auto flex flex-col">
        <div>
          <form novalidate="" class="mb-4">
            <div class="grid gap-2">
              <div class="grid gap-1">
                <label class="text-zinc-950 font-normal" for="email">
                  Email
                </label>
                <input
                  class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autocapitalize="none"
                  autocomplete="email"
                  autocorrect="off"
                  name="email"
                />
                <label class="text-zinc-950 mt-2" for="password">
                  Password
                </label>
                <input
                  id="password"
                  placeholder="Password"
                  type="password"
                  autocomplete="current-password"
                  class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                  name="password"
                />
              </div>
              <button
                class="mt-2 flex w-full items-center justify-center rounded-xl px-4 py-3 text-base font-medium text-white bg-[#36A398]"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex justify-between items-center">
            <p>
              <a
                href="/dashboard/signin/forgot_password"
                class="font-medium text-zinc-950 text-sm underline hover:text-red-600"
              >
                Forgot your password?
              </a>
            </p>

            <p>
              <a
                href="/dashboard/signin/signup"
                class="font-medium text-zinc-950 text-sm"
              >
                Don't have an account? Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Register = () => {
  return (
    <div class="mx-auto flex w-full flex-col justify-center pt-0">
      <div class="my-auto mb-auto flex flex-col">
        <div>
          <form novalidate="" class="mb-4">
            <div class="grid gap-2">
              <div class="grid gap-1">
                <label class="text-zinc-950 font-normal" for="email">
                  Username
                </label>
                <input
                  class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                  id="text"
                  placeholder="Username"
                  type="text"
                  autocapitalize="none"
                  autocomplete="off"
                  autocorrect="off"
                  name="username"
                />
                <label class="text-zinc-950 font-normal" for="email">
                  Email
                </label>
                <input
                  class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autocapitalize="none"
                  autocomplete="email"
                  autocorrect="off"
                  name="email"
                />
                <label class="text-zinc-950 mt-2" for="password">
                  Password
                </label>
                <input
                  id="password"
                  placeholder="Password"
                  type="password"
                  autocomplete="current-password"
                  class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                  name="password"
                />
              </div>
              <button
                class="mt-2 flex w-full items-center justify-center rounded-xl px-4 py-3 text-base font-medium text-white bg-[#36A398]"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <div className="flex justify-between items-center">
            <p>
              <a
                href="/dashboard/signin/signup"
                class="font-medium text-zinc-950 text-sm"
              >
                Have an account? Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
