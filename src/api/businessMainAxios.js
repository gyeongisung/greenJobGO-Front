import { client } from "./client";

//  대분류 카테고리 불러오기
export const getBigcate = async setCategory => {
  console.log("카테정보 불러옵니다");

  try {
    const res = await client.get(`/admin/category`);
    const result = await res.data;
    setCategory(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

//  대분류 카테고리 불러오기
export const getMainImgList = async ({
  setSwiperData,
  clickCate,
  setNoItem,
}) => {
  console.log("카테정보 불러옵니다");

  try {
    const res = await client.get(`/company/mainstudent?icategory=${clickCate}`);
    const result = await res.data;
    console.log("스와이퍼용 데이터", result);
    setSwiperData(result);
    {
      result.length === 0 ? setNoItem(true) : setNoItem(false);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};
