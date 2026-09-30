"use client";

import Chat from "./chat";
import AppSideNav from "./sidenav/sidenav";

export default function Page() {
  return (
      <>
      <main>
        <AppSideNav />
        <Chat />

      </main>
      </>
  );
}
