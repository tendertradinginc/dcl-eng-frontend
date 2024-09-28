"use client";
import { useRouter } from "next/navigation";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

import ActionSubmitButton from "@/components/FrontendComponent/action/ActionSubmitButton";
import { loginUser } from "@/components/FrontendComponent/action/authAction";

const LoginForm = () => {
  const router = useRouter();
  const ref = createRef();
  const [state, fromAction] = useFormState(loginUser, null);

  useEffect(() => {
    if (state && state.success) {
      toast("successfully login");
      ref.current?.reset();
      router.push("/");
    }
    if (state && !state?.success) {
      toast.error(state?.message);
    }
  }, [state, ref]);
  return (
    <form
      ref={ref}
      action={fromAction}
      className="justify-center rounded-lg md:m-0 md:flex"
    >
      <div className="rounded-lg bg-white px-4 py-8 shadow-2xl shadow-[#16a249] md:w-96">
        <div className="mb-3">
          <span className="mb-2 block font-semibold text-gray-600">Email</span>
          <input
            placeholder=" Your email "
            required
            className="w-full rounded-md border border-gray-400 bg-white p-2"
            type="email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <span className="mb-2 block font-semibold text-gray-600">
            Password
          </span>
          <input
            placeholder="Password"
            type="password"
            name="password"
            required
            className="w-full rounded-md border border-gray-400 bg-white p-2"
          />
        </div>
        <br />
        <div>
          <ActionSubmitButton>Login</ActionSubmitButton>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
