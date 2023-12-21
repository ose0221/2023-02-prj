import { useState } from "react";
import * as C from "./ChoiceStyle";
import Bubble1 from "../../img/Letter/Bubble1.svg";
import Bubble2 from "../../img/Letter/Bubble2.svg";

export default function Choice() {
    // 2023와 2024 버튼을 각각 추적하기 위한 state 변수
    const [selectedBtn2023, setSelectedBtn2023] = useState(false);
    const [selectedBtn2024, setSelectedBtn2024] = useState(false);

    // 버튼이 클릭될 때 호출되는 함수
    const handleChooseBtnClick = (btn) => {
        // 토글 기능 추가
        if (btn === "To. 2023") {
            setSelectedBtn2023((prevSelected) => !prevSelected);
            setSelectedBtn2024(false); // 2023을 클릭한 경우 2024 버튼은 선택 해제
        } else if (btn === "To. 2024") {
            setSelectedBtn2024((prevSelected) => !prevSelected);
            setSelectedBtn2023(false); // 2024을 클릭한 경우 2023 버튼은 선택 해제
        }
    };

    const WrapperComponent2023 = selectedBtn2023 ? C.ChosenBtn : C.ChooseBtn;
    const WrapperComponent2024 = selectedBtn2024 ? C.ChosenBtn : C.ChooseBtn;

    return (
        <C.ContentContainer>
            <C.ChooseBoxWrapper>
                <C.ChooseBox>
                    <C.BubbleImg src={Bubble1}></C.BubbleImg>
                    <WrapperComponent2023 onClick={() => handleChooseBtnClick("To. 2023")}>
                        <C.BtnText>To. 2023</C.BtnText>
                    </WrapperComponent2023>
                </C.ChooseBox>
                <C.ChooseBox>
                    <C.BubbleImg src={Bubble2}></C.BubbleImg>
                    <WrapperComponent2024 onClick={() => handleChooseBtnClick("To. 2024")}>
                        <C.BtnText>To. 2024</C.BtnText>
                    </WrapperComponent2024>
                </C.ChooseBox>
            </C.ChooseBoxWrapper>
        </C.ContentContainer>
    );
}
