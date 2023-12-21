import styled from "styled-components";

export const ContentContainer = styled.div``;

export const Title = styled.div`
    color: #20217d;
    text-align: center;
    font-family: "Pretendard", sans-serif;
    font-size: 50px;
    font-weight: bold;
    white-space: nowrap;
    @media screen and (min-width: 0px) and (max-width: 374px) {
        font-size: 25px;
    }
    @media screen and (min-width: 375px) and (max-width: 600px) {
        font-size: 30px;
    }
    @media screen and (min-width: 601px) and (max-width: 900px) {
        font-size: 40px;
    }
`;

export const NameInputBox = styled.div`
    font-family: "Pretendard", sans-serif;
    background-color: #ffdae6;
    color: #c72a5f;
    font-size: 19px;
    font-weight: light;
    width: 300px;
    height: 60px;
    resize: none;
    border-radius: 45px;
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 30px;
    padding: 17px 0 17px 30px;
    margin-left: 13vw;
`;

export const InputBox = styled.div`
    font-family: "Pretendard", sans-serif;
    background-color: #ffdae6;
    color: #c72a5f;
    font-size: 19px;
    font-weight: light;
    width: 1100px;
    height: 300px;
    resize: none;
    border-radius: 45px;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto; /* 가운데 정렬을 위한 margin 설정 */
    margin-bottom: 30px;
    padding: 40px;
`;

export const CommentInput = styled.input`
    font-family: "Pretendard", sans-serif;
    color: #c72a5f;
    font-weight: light;
    border: none;
    font-size: 19px;
    resize: none; /* 사용자 크기 조정 비활성화 */
    outline: none; /* 포커스 효과 제거 */

    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #c72a5f;
    }
    @media screen and (max-width: 412px) {
        font-size: 15px; /* 작은 화면에서 폰트 크기 조절 */
    }
`;
export const ContentInput = styled.textarea`
    font-family: "Pretendard", sans-serif;
    width: 100%;
    height: 87%;
    background-color: transparent;
    color: #c72a5f;
    font-weight: light;
    border: none;
    font-size: 19px;
    resize: none; /* 사용자 크기 조정 비활성화 */
    outline: none; /* 포커스 효과 제거 */
    &::placeholder {
        color: #c72a5f;
    }
    @media screen and (max-width: 412px) {
        font-size: 15px; /* 작은 화면에서 폰트 크기 조절 */
    }
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

export const InputCount = styled.div`
    font-size: 18px;
    text-align: right; /* 텍스트를 오른쪽 정렬합니다. */
    margin-right: 20px;
    margin-top: 5px;
`;

export const Button = styled.button`
    width: 380px;
    height: 75px;
    background-color: #ffdae6;
    color: #c72a5f;
    font-size: 35px;
    display: block;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    margin: 0 auto;
    font-family: "Pretendard", sans-serif;
    @media screen and (max-width: 475px) {
        width: 100%; /* 모바일 화면에서 가로 가득 차도록 설정합니다. */
        margin: 0; /* 좌우 마진을 제거합니다. */
    }
    &:hover {
        box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25) inset;
    }
`;

export const Entries = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    list-style-type: none;
    width: 1100px;
    margin: 0 auto;
    margin-top: 30px;
    max-width: 100%;
`;

export const EntryItem = styled.div`
    background-color: #eeeeee;
    height: 300px;
    padding: 17px;
    margin: 15px;
    border-radius: 20px;
    font-weight: bold;
    line-height: 1.3;
    color: black; /* 글씨 색상 설정 */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    word-break: break-all;
    flex-basis: calc(100% - 20px);

    @media screen and (min-width: 701px) and (max-width: 900px) {
        margin: 10px;
        flex-basis: calc(50% - 20px); /* 2 per row (701-900px) */
    }

    @media screen and (min-width: 901px) {
        margin: 10px;
        flex-basis: calc(33.33% - 20px); /* 3 per row (901px and above) */
    }
`;
export const EntryDate = styled.span`
    font-size: 17px;
    white-space: nowrap;
    @media screen and (min-width: 0px) and (max-width: 700px) {
        font-size: 16px;
    }
`;

export const EntryText = styled.span`
    font-size: 18px;
`;

export const EntryWrapper = styled.div`
    width: 100%;
    height: 94%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    &::-webkit-scrollbar {
        width: 10px; /* 스크롤바의 두께 지정 */
        border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #000000;
        border-radius: 5px;
        backdrop-filter: blur(50px);
    }

    &::-webkit-scrollbar-track {
        background-color: #d9d9d9; /* 스크롤바 트랙 색상 지정 */
        border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2) inset;
    }
`;

export const Pagination = styled.span`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    ul {
        list-style: none;
        display: flex;
        gap: 10px;
        padding: 0;

        li {
            cursor: pointer;
            border: 1px solid #fff;
            font-size: 22px;
            font-weight: bold;
            color: #d9d9d9;

            @media screen and (min-width: 0px) and (max-width: 393px) {
                font-size: 18px;
            }

            @media screen and (min-width: 393px) and (max-width: 520px) {
                font-size: 22px;
            }

            &:hover {
                color: #000;
            }
            &.active {
                color: #c72a5f;
            }
        }
    }
`;
