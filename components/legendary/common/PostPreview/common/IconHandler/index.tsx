import React from "react";
import Premium from "../../../../../../public/img/svgIcons/Premium";
import Artist from "../../../../../../public/img/svgIcons/Artist";
import Moderator from "../../../../../../public/img/svgIcons/Moderator";
import Ghost from "../../../../../../public/img/svgIcons/Ghost";
import HeartPink from "../../../../../../public/img/svg/HeartPink";

const IconHandler = ({ user }: any) => {
  const changeHandler = () => {
    switch (user?.iconActive) {
      case "premium":
        return <Premium />;
      case "artist":
        return <Artist />;
      case "moderator":
        return <Moderator />;
      case "halloween":
        return <Ghost />;
      case "heart":
        return <HeartPink />;
    }
  };

  return <div>{changeHandler()}</div>;
};

export default IconHandler;
