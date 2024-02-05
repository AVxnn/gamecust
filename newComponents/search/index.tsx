import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Input from "../../components/legendary/input";
import styles from "./search.module.scss";
import Search from "../../public/img/svg/Search";
import useDebounce from "../../features/Hooks/useDebounce";
import { Context } from "../../app/(pages)/layout";
import { getSearch } from "../../features/new/getSearch/getSearch";
import Link from "next/link";
import DropItem from "./dropDown/dropItem";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SearchComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");
  const labelRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState({
    posts: [],
    users: [],
  });
  const { mobxStore, popupHandlers } = useContext(Context);
  const router = useRouter();

  const saveHandler = async () => {
    if (value) {
      const resData = await getSearch(value);
      setData(resData);
      if (value) {
        setIsOpen(true);
        popupHandlers.noWorkScroll();
      } else {
        setIsOpen(false);
        popupHandlers.workScroll();
      }
    }
  };

  const handlerChanger = (value: string) => {
    setValue(value);
  };

  const handlerLink = (link: string) => {
    router.push(link);
    setValue("");
    setIsFocus(false);
    popupHandlers.workScroll();
  };

  const handlerClick = () => {
    setIsFocus(true);
  };

  const debouncedSave = useDebounce(saveHandler, 500);

  const handleClickOutside = (e: any) => {
    console.log("work");
    if (
      labelRef.current &&
      !labelRef.current.contains(e.target) &&
      popupRef.current &&
      !popupRef.current.contains(e.target)
    ) {
      setIsFocus(false);
      popupHandlers.workScroll();
    }
  };

  const linkEnter = (key: any) => {
    if (isFocus) {
      console.log(value);
      router.push(`/search/result?query=${value}`);
      setIsOpen(false);
      setIsFocus(false);
      popupHandlers.workScroll();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e: any) => {
      if (e.keyCode === 13) {
        linkEnter(e);
      }
    });
    return document.removeEventListener("keydown", (e: any) => {
      if (e.keyCode === 13) {
        linkEnter(e);
      }
    });
  }, [value]);

  useEffect(() => {
    document.addEventListener("click", (e: any) => {
      handleClickOutside(e);
    });
    return document.removeEventListener("click", (e: any) => {
      handleClickOutside(e);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    debouncedSave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className={styles.container}>
      <div ref={labelRef}>
        <Input
          onChange={(e: any) => handlerChanger(e.currentTarget.value)}
          icon={<Search />}
          value={value}
          onClick={() => handlerClick()}
          placeholder={"Поиск"}
        />
      </div>
      <div>
        <AnimatePresence initial={false} mode="wait">
          {isFocus && isOpen ? (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              ref={popupRef}
              className={styles.dropdown}
            >
              <div className={styles.header}>
                <h4 className={styles.title}>Результат поиска</h4>

                <Link
                  className={styles.showMore}
                  onClick={() => setIsOpen(false)}
                  href={`/search/result?query=${value}`}
                >
                  Посмотреть еще
                </Link>
              </div>
              <div className={styles.list}>
                {data.users.map((item: any) => {
                  return (
                    <DropItem
                      key={item._id}
                      handlerLink={handlerLink}
                      item={item}
                      type={"users"}
                    />
                  );
                })}
                {data.posts.map((item: any) => {
                  return (
                    <DropItem
                      key={item._id}
                      handlerLink={handlerLink}
                      item={item}
                      type={"posts"}
                    />
                  );
                })}
                {data.posts.length <= 0 && data.users.length <= 0 ? (
                  <>
                    <h4 className={styles.empty}>Ничего не найдено</h4>
                  </>
                ) : null}
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchComponent;
