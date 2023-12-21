import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import * as C from "./CommentStyle"; // D에 해당하는 모듈을 정확한 경로로 import

export default function Comment() {
    const { commentInput, contentInput } = useParams();
    const [data, setData] = useState("");

    const getPostData = async () => {
        try {
            // commentInput, contentInput을 활용하여 데이터를 가져옴
            const response = await axios.get(`http://15.164.167.225/guests/${commentInput}/${contentInput}`);
            setData(response.data);
        } catch (error) {
            console.error("데이터를 불러오는 중 에러 발생:", error);
        }
    };

    useEffect(() => {
        getPostData();
    }, [commentInput, contentInput]);

    return (
        <C.ContentContainer>
            <C.BtnText>aaa</C.BtnText>
            <C.Title>
                <C.TitleName>To. 2023</C.TitleName>
            </C.Title>

            <C.TextBox>dd</C.TextBox>
        </C.ContentContainer>
    );
}
