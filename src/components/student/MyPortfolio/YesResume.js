import React from "react";
import { YesResumeWrap } from "../../../styles/YesResumStyle";
import NoImage from "../../../assets/NoImage.jpg";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { AuthStateAtom } from "../../../recoil/atoms/AuthState";
import { userInfo } from "../../../recoil/selectors/UserInfoSelector";

const YesResume = () => {
  const authState = useRecoilValue(AuthStateAtom);
  const userInfoData = useRecoilValue(userInfo);

  const navigate = useNavigate();
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  const handleMovePage = () => {
    navigate("/student/mypage");
  };
  console.log(userInfoData);
  return (
    <YesResumeWrap>
      <div className="contain">
        <div>
          <img
            src={`http://112.222.157.156/img/student/${userInfoData.std.istudent}/${userInfoData.file.img.img}`}
            alt="자료없음"
            onError={onImgError}
          />
        </div>
        <div>
          <div className="content">
            <div>
              <h3>{userInfoData.std.introducedLine}</h3>
              <span>{userInfoData.std.subject.subjectName}</span>
            </div>
            <div>
              <span>수강기간</span>
              <span>
                {userInfoData.std.startedAt} ~ {userInfoData.std.endedAt}
              </span>
            </div>
          </div>
          <div className="move-button">
            <button onClick={handleMovePage}>포트폴리오 상세보기</button>
          </div>
        </div>
      </div>
      {authState.editableYn === 0 ? (
        <div className="buttons">
          <button>삭제</button>
          <button>수정</button>
        </div>
      ) : null}
    </YesResumeWrap>
  );
};

export default YesResume;
