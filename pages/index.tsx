import Head from "next/head";
import Header from "../components/legendary/header";
import React, { useContext, useEffect } from "react";
import PostList from "../components/legendary/MiddleBlock/PostList";
import { observer } from "mobx-react";
import MainLayout from "../components/layout/MainLayout";
import { YMInitializer } from "react-yandex-metrika";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import registrationEmail from "../features/provider/registrationEmail";
import { Context } from "./_app";

const Home = ({ props }: any) => {

  const { status, data: session } = useSession() as any;
  
  const {mobxStore} = useContext(Context);

  const router = useRouter();
  const { authpopup } = router.query;

  const getAuth = async () => {
    console.log(authpopup, session)
    if (authpopup && session) {
      const ses = session?.session
      const data = {
        username: ses?.user.name || session.token.name,
        email: ses?.user.email || session.token.email,
        picture:ses?.user.picture || session.token.picture,
        sub: ses?.user.sub || session.token.sub,
        email_verified: false,
      }
      mobxStore.registrationGoogle(data.username, data.email, data.picture, data.sub, data.email_verified)
      console.log(session);
    }
  }

  useEffect(() => {
    getAuth()
  }, [])

  const fetchData = async (page: any) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/rec/${page}`
    );

    return await res?.json();
  };

  return (
    <>
      <Head>
        <title>GameCust</title>
        <meta name="description" content="Социальная сеть для геймеров и гиков с разных областей!" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,  user-scalable=no"
        />
        <meta name="keywords" content="геймкаст, gamecust, гемкаст, гик, геймеры, социальная сеть для геймеров, для геймеров" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://gamecust.ru",
              "@type": "Organization",
              "name": "GameCust",
              "url": "https://www.gamecust.ru",
              "logo": "https://www.gamecust.ru",
              "description": "Социальная сеть для геймеров и гиков с разных областей!",
            }
          `}
        </script>
      </Head>
      <Header />
      <MainLayout>
        <PostList
          PostData={props ? props : null}
          fetchData={fetchData}
          textEmpty={"Создайте свой первый пост"}
        />
      </MainLayout>
      <YMInitializer
        accounts={[94688000]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        }}
        version="2"
      />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/rec/0`
  );

  return {
    props: { props: await res?.json() }, // will be passed to the page component as props
  };
}

export default observer(Home);
