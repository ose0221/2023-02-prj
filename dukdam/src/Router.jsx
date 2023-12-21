import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import Main from "./page/Main";
import Letter from "./page/Letter";
import ListThisYear from "./page/ListThisYear";
import ListNextYear from "./page/ListNextYear";
import Detail from "./page/Detail";

function AppNavigation() {
    const location = useLocation();

    // 메인 페이지에서만 네비게이션 숨김
    if (location.pathname === "/") {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </>
        );
    }
    // 다른 페이지에서는 네비게이션 표시
    return (
        <>
            <GlobalWrapper>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/letter" element={<Letter />} />
                    <Route path="/list2023" element={<ListThisYear />} />
                    <Route path="/list2024" element={<ListNextYear />} />
                    <Route path="/detail" element={<Detail />} />
                </Routes>
            </GlobalWrapper>
        </>
    );
}

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <AppNavigation />
            </BrowserRouter>
        </>
    );
}

const GlobalWrapper = styled.main`
    @media screen and (min-width: 834px) {
        padding: 8rem;
    }
    @media screen and (max-width: 833px) {
        padding: 5rem;
    }
    @media screen and (max-width: 400px) {
        padding: 3rem;
    }
`;
