
import type { ReactElement } from "react";
import React from 'react'
import { useAppDispatch } from "../global/store/hooks";
import {IndexHomePage} from "../features/home/home";

const IndexPage = () => {

  const dispatch = useAppDispatch();

  return (
  <div>
    <IndexHomePage />
  </div>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return page;
};
export default IndexPage;
