import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import bg from "../assets/rizz_background.svg";

function Home() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // navigate 훅 사용

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/result")
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="max-w-none w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-[90px] font-black bg-gradient-to-r from-[#F34164] to-[#AA55F3] text-transparent bg-clip-text drop-shadow-lg"
            style={{
              fontFamily: "Pretendard",
            }}>
            Rizz AI
          </h1>

          <p className="text-xl text-gray-600 font-medium">
            여자 친구 언어 해석기
          </p>
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="relative w-full flex justify-center">
          <div
            className="relative flex items-center max-w-none"
            style={{
              background: "#FDEBF6",
              boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.10)",
              borderRadius: "30px",
              height: "auto",
              width: "1000px",
              position: "relative",
              padding: "20px",
            }}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="번역이 필요한 여자친구의 메세지를 입력하세요."
              className="w-full text-lg bg-transparent focus:outline-none px-4"
              style={{
                fontFamily: "Pretendard",
                fontWeight: "300",
                minHeight: "100px", // 최소 높이 지정
                maxHeight: "300px", // 너무 커지지 않도록 제한
                overflowWrap: "break-word", // 자동 줄바꿈
                wordBreak: "break-word",
                resize: "none", // 크기 조절 방지
              }}
            />
            <button
              type="submit"
              className="absolute bottom-2 right-2 flex items-center justify-center text-white hover:bg-pink-600 transition"
              style={{
                background: "#F97198",
                borderRadius: "9999px",
                width: "50px",
                height: "50px",
              }}>
              <Icon
                icon="material-symbols:translate-rounded"
                width="24"
                height="24"
              />
            </button>
          </div>
        </form>

        {/* Middle Text */}
        <p className="text-center text-gray-600 font-medium my-4">
          Rizz AI 가 제시하는 해결책에 대한 책임은 본인에게 있습니다. <br />
        </p>
        <p
          style={{
            marginTop: "-10px",
            color: "#EC3750",
            fontSize: "20px",
            fontFamily: "Pretendard",
            fontWeight: "500",
          }}>
          But trust me, it works!
        </p>
      </div>
    </div>
  );
}

export default Home;
