"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const NotFoundPage = () => {
  const router = useRouter();
  const path = usePathname();
  console.log(path);
  useEffect(() => {
    if (path !== "/api") {
      router.push("/");
    }
  }, []);

  return <div></div>;
};

export default NotFoundPage;
