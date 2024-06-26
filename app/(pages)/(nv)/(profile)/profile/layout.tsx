"use client";

import React, { Suspense, useContext, useEffect, useState } from "react";
import styles from "./layout.module.scss";
import { observer } from "mobx-react-lite";
import NavigationLayout from "../../../../../newComponents/navigation/navigationLayout";
import CreateButton from "../../../../../newComponents/createButton";
import Premium from "../../../../../components/legendary/RightBlock/Premium";
import Contacts from "../../../../../components/legendary/RightBlock/Contacts";
import Profile from "../../../../../newComponents/profile";
import Subscriptions from "../../../../../components/legendary/RightBlock/Subscriptions";
import { getUserId } from "../../../../../features/new/getUserId/getUserId";
import { useParams, usePathname, useRouter } from "next/navigation";
import Subscribers from "../../../../../components/legendary/RightBlock/Subscribers";
import { Context } from "../../../layout";
import Loader from "../../../../../newComponents/loader";

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  const { uid } = useParams() as any;
  const pathname = usePathname() as any;
  const [data, setData] = useState([]) as any;
  const router = useRouter();
  const { mobxStore } = useContext(Context);

  const getFirstUser = async () => {
    if (uid) {
      const res = await getUserId(uid);
      const newPosts = await res;
      if (!newPosts._id) {
        router.push("/");
      }
      setData(newPosts);
    }
  };

  useEffect(() => {
    getFirstUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, mobxStore.user]);

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.leftColumn}>
          <NavigationLayout />
          <CreateButton />
        </div>
        <div className={styles.middleColumn}>
          <Profile data={data} />
          {children}
        </div>
        <div className={styles.rightColumn}>
          <Subscribers data={data} />
          <Subscriptions data={data} />
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default observer(LayoutPages);
