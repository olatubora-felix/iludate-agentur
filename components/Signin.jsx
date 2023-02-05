import { Button } from "@material-tailwind/react";
import React from "react";

export const Signin = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center mt-24">
      <h1>Iludate &mdash; Agentur</h1>
      <div>
        <p>Log in</p>
        <p>Welcome to Illudate Agentur</p>
        <form>
          <div>
            <input type="email" placeholder="email address" />
          </div>
          <div>
            <input type="password" placeholder="password" />
          </div>
          <Button>Log in</Button>
        </form>
        <Button>Register now</Button>
      </div>
    </main>
  );
};
