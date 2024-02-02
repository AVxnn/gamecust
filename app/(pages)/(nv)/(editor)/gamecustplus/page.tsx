"use client";
import React from "react";
import PremiumSettingsBlock from "../../../../../components/legendary/MiddleBlock/PremiumSettingsBlock";
import Popup from "reactjs-popup";

const GameCustPlus = ({ isOpen, setIsOpen }: any) => {
  return (
    <Popup nested open={isOpen} onClose={() => setIsOpen(false)} modal>
      <PremiumSettingsBlock />
    </Popup>
  );
};

export default GameCustPlus;
