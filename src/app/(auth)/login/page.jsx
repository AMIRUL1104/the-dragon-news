"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginData = async (userdata) => {
    console.log(userdata);

    const { email, password } = userdata;

    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }
    if (data) {
      alert("SignIn Successful");
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(handleLoginData)}
        className="max-w-md mx-auto bg-white p-6 rounded shadow"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-xl font-bold">Login</legend>

          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className=" text-red-500">Email field is required</span>
          )}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className=" text-red-500">Password field is required</span>
          )}

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </fieldset>

        <p className=" mt-2">
          Don't have an account?{" "}
          <Link href="/register" className="link">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
