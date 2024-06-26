import React from "react";
import styles from "./loading.module.scss";
import Loader from "../../../loader";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <>
      <div className={styles.post}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <Skeleton
              className={styles.rounded}
              width={"40px"}
              height={"40px"}
            ></Skeleton>
            <div className={styles.column}>
              <div className={styles.row}>
                <Skeleton
                  className={styles.borderR}
                  width={"60%"}
                  height={"16px"}
                ></Skeleton>
                <Skeleton
                  className={styles.borderR}
                  width={"16px"}
                  height={"16px"}
                ></Skeleton>
              </div>

              <Skeleton
                className={styles.borderR}
                width={"100px"}
                height={"16px"}
              ></Skeleton>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <Skeleton
            className={styles.borderR}
            width={"70%"}
            height={"16px"}
          ></Skeleton>
          <Skeleton
            className={styles.borderR}
            width={"30%"}
            height={"16px"}
          ></Skeleton>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <Skeleton
              className={styles.rounded}
              width={"40px"}
              height={"40px"}
            ></Skeleton>
            <div className={styles.column}>
              <div className={styles.row}>
                <Skeleton
                  className={styles.borderR}
                  width={"60%"}
                  height={"16px"}
                ></Skeleton>
                <Skeleton
                  className={styles.borderR}
                  width={"16px"}
                  height={"16px"}
                ></Skeleton>
              </div>

              <Skeleton
                className={styles.borderR}
                width={"100px"}
                height={"16px"}
              ></Skeleton>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <Skeleton
            className={styles.borderR}
            width={"70%"}
            height={"16px"}
          ></Skeleton>
          <Skeleton
            className={styles.borderR}
            width={"30%"}
            height={"16px"}
          ></Skeleton>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <Skeleton
              className={styles.rounded}
              width={"40px"}
              height={"40px"}
            ></Skeleton>
            <div className={styles.column}>
              <div className={styles.row}>
                <Skeleton
                  className={styles.borderR}
                  width={"60%"}
                  height={"16px"}
                ></Skeleton>
                <Skeleton
                  className={styles.borderR}
                  width={"16px"}
                  height={"16px"}
                ></Skeleton>
              </div>

              <Skeleton
                className={styles.borderR}
                width={"100px"}
                height={"16px"}
              ></Skeleton>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <Skeleton
            className={styles.borderR}
            width={"70%"}
            height={"16px"}
          ></Skeleton>
          <Skeleton
            className={styles.borderR}
            width={"30%"}
            height={"16px"}
          ></Skeleton>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <Skeleton
              className={styles.rounded}
              width={"40px"}
              height={"40px"}
            ></Skeleton>
            <div className={styles.column}>
              <div className={styles.row}>
                <Skeleton
                  className={styles.borderR}
                  width={"60%"}
                  height={"16px"}
                ></Skeleton>
                <Skeleton
                  className={styles.borderR}
                  width={"16px"}
                  height={"16px"}
                ></Skeleton>
              </div>

              <Skeleton
                className={styles.borderR}
                width={"100px"}
                height={"16px"}
              ></Skeleton>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <Skeleton
            className={styles.borderR}
            width={"70%"}
            height={"16px"}
          ></Skeleton>
          <Skeleton
            className={styles.borderR}
            width={"30%"}
            height={"16px"}
          ></Skeleton>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <Skeleton
              className={styles.rounded}
              width={"40px"}
              height={"40px"}
            ></Skeleton>
            <div className={styles.column}>
              <div className={styles.row}>
                <Skeleton
                  className={styles.borderR}
                  width={"60%"}
                  height={"16px"}
                ></Skeleton>
                <Skeleton
                  className={styles.borderR}
                  width={"16px"}
                  height={"16px"}
                ></Skeleton>
              </div>

              <Skeleton
                className={styles.borderR}
                width={"100px"}
                height={"16px"}
              ></Skeleton>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <Skeleton
            className={styles.borderR}
            width={"70%"}
            height={"16px"}
          ></Skeleton>
          <Skeleton
            className={styles.borderR}
            width={"30%"}
            height={"16px"}
          ></Skeleton>
        </div>
      </div>
    </>
  );
};

export default Loading;
