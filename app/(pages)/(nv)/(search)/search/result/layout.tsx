"use client";

import React, { useEffect, useState } from "react";
import SearchHeader from "../../../../../../newComponents/searchHeader";
import { getSearch } from "../../../../../../features/new/getSearch/getSearch";
import { useSearchParams } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const params = useSearchParams() as any;
  const [data, setData] = useState({});

  const saveHandler = async () => {
    const par = params.get("query");

    if (par) {
      const resData = await getSearch(par);
      setData(resData);
    }
  };

  useEffect(() => {
    saveHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchHeader data={data} />
      {children}
    </>
  );
};

export default Layout;
