"use client";

import React, { createContext, useContext, useEffect } from "react";
import styles from "./layout.module.scss";
import Header from "../../../newComponents/header";
import AuthPopup from "../../../components/auth/authPopup";
import MobileMenu from "../../../components/legendary/common/MobileMenu";
import { useSession } from "next-auth/react";
import { Context } from "../layout";
import { observer } from "mobx-react-lite";

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  const { status, data: session } = useSession() as any;

  const { mobxStore } = useContext(Context);

  const getAuth = async () => {
    if (session && !mobxStore.user.email) {
      const ses = session.session;
      const data = {
        username: ses?.user.name || session.token.name,
        email: ses?.user.email || session.token.email,
        picture: ses?.user.picture || session.token.picture,
        sub: ses?.user.sub || session.token.sub,
        email_verified: false,
      };
      mobxStore.registrationGoogle(
        data.username,
        data.email,
        data.picture,
        data.sub,
        data.email_verified
      );
    }
  };

  useEffect(() => {
    if (session && !mobxStore.user.email) {
      console.log("work");
      getAuth();
    }
  }, [session]);

  return (
    <>
      <AuthPopup />
      <Header />
      <div className={styles.layout}>
        <div className={styles.container}>{children}</div>
      </div>
      <MobileMenu />
    </>
  );
};

export default observer(LayoutPages);
