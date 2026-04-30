"use client";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterData = (data) => {
    // এখানে আপনার রেজিস্ট্রেশন লজিক বা API কল হবে
    console.log("Register Data:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(handleRegisterData)}
        className="max-w-md mx-auto bg-white p-6 rounded shadow"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-xl font-bold">
            Register
          </legend>

          {/* Name Field */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            placeholder="Your Full Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}

          {/* Photo URL Field */}
          <label className="label">Photo URL</label>
          <input
            type="url"
            className="input"
            placeholder="https://example.com/photo.jpg"
            {...register("photoURL", { required: "Photo URL is required" })}
          />
          {errors.photoURL && (
            <span className="text-red-500 text-sm">
              {errors.photoURL.message}
            </span>
          )}

          {/* Email Field */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email Address"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}

          {/* Password Field */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}

          <button type="submit" className="btn btn-neutral mt-6 w-full">
            Register
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default RegisterPage;
