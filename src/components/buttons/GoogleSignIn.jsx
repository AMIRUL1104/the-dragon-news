"use client";

import { authClient } from "@/lib/auth-client";

function GoogleSignIn() {
  // handleGoogleSignIn
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log("google sign in data ", data);
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="btn bg-white text-black border"
    >
      Login with Google
    </button>
  );
}

export default GoogleSignIn;
