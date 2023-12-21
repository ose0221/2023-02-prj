import styled from "styled-components";

export const ContentContainer = styled.div``;

export const BtnText = styled.p`
    text-align: center;
`;

export const Title = styled.div`
    width: 380px;
    height: 75px;
    line-height: 75px;
    background-color: #c72a5f;
    color: #fff;
    font-size: 35px;
    display: block;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    margin: 0 auto;
    margin-bottom: 100px;
    font-family: "Pretendard", sans-serif;
    @media screen and (max-width: 475px) {
        width: 100%; /* 모바일 화면에서 가로 가득 차도록 설정합니다. */
        margin: 0; /* 좌우 마진을 제거합니다. */
    }
`;

export const TitleName = styled.p`
    text-align: center;
`;

export const TextBox = styled.div`
    font-family: "Pretendard", sans-serif;
    width: 60vw;
    height: 87%;
    background-color: #ffdae6;
    color: #c72a5f;
    font-weight: light;
    border: none;
    font-size: 19px;
    resize: none; /* 사용자 크기 조정 비활성화 */
    outline: none; /* 포커스 효과 제거 */
    margin: 0 auto;
    &::-webkit-scrollbar {
        width: 10px; /* 스크롤바의 두께 지정 */
        border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #595959;
        border-radius: 5px;
        backdrop-filter: blur(50px);
    }

    &::-webkit-scrollbar-track {
        background-color: #acacac; /* 스크롤바 트랙 색상 지정 */
        border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2) inset;
    }
`;
