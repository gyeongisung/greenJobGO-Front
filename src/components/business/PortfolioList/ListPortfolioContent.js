import React, { useState } from "react";
import Listgallery from "./Listgallery";
import ListBoard from "./ListBoard";
import { ReactComponent as Gallerybtn } from "../../../assets/galleryBtn.svg";
import { ReactComponent as Boardbtn } from "../../../assets/boardBtn.svg";
import {
  ContentListViewer,
  ContentListWrap,
} from "../../../styles/BusinessPortfolioStyle";

const ListPortfolioContent = ({
  listData,
  count,
  galleryData,
  viewState,
  setViewState,
  onImgError,
}) => {
  return (
    <ContentListWrap>
      <ul className="content-top-line">
        <li>총 {count}건</li>
        <li>
          <Gallerybtn onClick={() => setViewState(true)} />
          <Boardbtn onClick={() => setViewState(false)} />
        </li>
      </ul>
      {viewState ? (
        <ContentListViewer>
          <Listgallery galleryData={galleryData} onImgError={onImgError} />
        </ContentListViewer>
      ) : (
        <ContentListViewer>
          <ListBoard listData={listData} onImgError={onImgError} />
        </ContentListViewer>
      )}
    </ContentListWrap>
  );
};

export default ListPortfolioContent;