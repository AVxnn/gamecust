"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./layout.module.scss";
import { observer } from "mobx-react-lite";
import NavigationLayout from "../../../../newComponents/navigation/navigationLayout";
import CreateButton from "../../../../newComponents/createButton";
import Premium from "../../../../components/legendary/RightBlock/Premium";
import Contacts from "../../../../components/legendary/RightBlock/Contacts";
import Profile from "../../../../newComponents/profile";
import Subscriptions from "../../../../components/legendary/RightBlock/Subscriptions";
import { getUserId } from "../../../../features/new/getUserId/getUserId";
import { useParams, usePathname } from "next/navigation";
import Subscribers from "../../../../components/legendary/RightBlock/Subscribers";
import { Context } from "../../layout";

// export async function generateMetadata(
//   { params }: any
// ) {
//   // read route params
//   const id = params.uid;

//   // fetch data
//   const user = await getUserId(id);

//   return {
//     title: `Профиль ${user.username} | GameCust новости из мира игр`,
//     description: user.description,
//     openGraph: {
//       title: `Профиль ${user.username} | GameCust новости из мира игр`,
//       description: user.description,
//       url: `https://gamecust.ru/profile/${user._id}`,
//       siteName: "GameCust",
//       images: [
//         {
//           url: "/mstile-150x150.png",
//           width: 150,
//           height: 150
//         }
//       ]
//     }
//   };
// }

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  const { uid } = useParams() as any;
  const pathname = usePathname() as any;
  const [data, setData] = useState([]) as any;
  const { mobxStore } = useContext(Context);

  const getFirstUser = async () => {
    const res = await getUserId(uid);
    const newPosts = await res;
    setData(newPosts);
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
