import styled from "styled-components";

export default function Main() {
    return (
        <>
            <MainWrapper>
                <p>여기가 메인이고 만들면 지우기~ 아래 yellow도 white로 바꾸면 됨!</p>
            </MainWrapper>
        </>
    );
}

const MainWrapper = styled.div`
    background: ${(props) => props.theme.colors.yellow};
`;
