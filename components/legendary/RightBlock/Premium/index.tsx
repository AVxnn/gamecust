import React, { useState } from "react";
import styles from "./Premium.module.scss";
import Button from "../../common/Button";
import glassesson from "../../../../public/img/glassesson.png";
import Image from "next/image";
import GameCustPlus from "../../../../app/(pages)/(nv)/(editor)/gamecustplus/page";
import Popup from "reactjs-popup";
import PremiumSettingsBlock from "../../MiddleBlock/PremiumSettingsBlock";

const Premium = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.premium}>
      <Image width={200} height={93} src={glassesson} alt="glaasss" />
      <div className={styles.promoImg}>
        <p className={styles.title}>Эту рекламу вы больше не увидите!</p>
        <p className={styles.subtitle}>С подпиской Plus. Всего 75₽ в месяц</p>
      </div>
      <Button
        clb={() => setIsOpen(true)}
        type={"primary"}
        full={true}
        size={"big"}
      >
        Убрать рекламу
      </Button>
      <Popup nested open={isOpen} onClose={() => setIsOpen(false)} modal>
        <PremiumSettingsBlock />
      </Popup>
    </div>
  );
};

export default Premium;
