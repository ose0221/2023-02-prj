import { useState, useEffect } from "react";
import * as C from "./ContentStyle";
import axios from "axios";

export default function Content() {
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        // 서버로부터 데이터를 가져오는 로직 추가
    };

    const CommentSubmit = async (e) => {
        e.preventDefault(); // 폼의 기본 동작 방지

        try {
            // 서버에 데이터를 보내는 요청
            const response = await axios.post("http://your-api-endpoint", {
                name,
                inputText,
            });

            // 요청이 성공한 경우 추가적인 작업 수행
            console.log("서버 응답:", response.data);

            // 필요하다면 서버 응답에 따른 추가 동작 수행
        } catch (error) {
            console.error("서버 요청 중 에러 발생:", error);
            // 요청이 실패한 경우 에러 핸들링
        }
        setName([]);
        setInputText([]);
        getDatas();
    };

    const [name, setName] = useState(""); //이름
    const [inputText, setInputText] = useState(""); // 입력된 텍스트를 저장하는 상태
    const maxLength = 200; // 최대 글자 수

    const handleNameChange = (event) => {
        const name = event.target.value;
        if (name.length <= 5) {
            setName(name);
        }
    };

    const handleInputChange = (e) => {
        const content = e.target.value;
        if (content.length > maxLength) {
            setInputText(content.slice(0, maxLength));
        } else {
            setInputText(content);
        }
    };

    const isSubmitDisabled = inputText === "" || inputText.length > maxLength || name === ""; //완료 버튼 비활성화 조건

    return (
        <C.ContentContainer>
            <C.NameInputBox>
                <C.CommentInput
                    type="text"
                    placeholder="이름을 입력해 주세요"
                    value={name}
                    onChange={handleNameChange} // 이름을 입력하는 이벤트 핸들러 추가
                />
            </C.NameInputBox>

            <C.InputBox>
                <C.ContentInput placeholder="나에게 전하고 싶은 말을 적어주세요" value={inputText} onChange={handleInputChange} maxLength={maxLength} />
                <C.InputCount>
                    {inputText.length}/{maxLength}
                </C.InputCount>
            </C.InputBox>
            <br />

            <C.Button onClick={CommentSubmit} disabled={isSubmitDisabled}>
                작성하기
            </C.Button>
        </C.ContentContainer>
    );
}
