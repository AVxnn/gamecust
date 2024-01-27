import React, { useCallback, useContext, useState } from "react";
import Input from "../../components/legendary/input";
import styles from "./search.module.scss";
import Search from "../../public/img/svg/Search";
import DropDown from "./dropDown";
import useDebounce from "../../features/Hooks/useDebounce";
import { Context } from "../../app/(pages)/layout";
import { getSearch } from "../../features/new/getSearch/getSearch";

const SearchComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const { mobxStore } = useContext(Context);

  const saveHandler = () => {
    if (mobxStore.user.id) {
      getSearch(value);
    }
  };

  const handlerClick = useCallback(
    (value: string) => {
      setValue(value);
      debouncedSave();
    },
    [value]
  );

  const debouncedSave = useDebounce(saveHandler, 500);

  return (
    <div className={styles.container}>
      <Input
        onChange={(e: any) => handlerClick(e.currentTarget.value)}
        icon={<Search />}
        placeholder={"Поиск"}
      />
      <DropDown />
    </div>
  );
};

export default SearchComponent;
