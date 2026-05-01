"use client";

import { authClient } from "@/lib/auth-client";

function GithubSignIn() {
  //    GithubSignIn
  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });

    console.log("Github sign in data ", data);
  };
  return (
    <button
      onClick={handleGithubSignIn}
      className="btn bg-black text-white border-black"
    >
      Login with GitHub
    </button>
  );
}

export default GithubSignIn;
