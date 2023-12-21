// components/ParentComponent.jsx

import { useState } from "react";
import LetterContent from "./Letter/Content"; // Letter 폴더의 Content 컴포넌트
import DetailComment from "./Detail/Comment"; // Detail 폴더의 Comment 컴포넌트

export default function ParentComponent() {
    const [name, setName] = useState("");
    const [inputText, setInputText] = useState("");

    const handleNameChange = (newName) => {
        setName(newName);
    };

    const handleInputChange = (newInputText) => {
        setInputText(newInputText);
    };

    return (
        <>
            <LetterContent name={name} inputText={inputText} onNameChange={handleNameChange} onInputChange={handleInputChange} />
            <DetailComment name={name} inputText={inputText} />
        </>
    );
}
