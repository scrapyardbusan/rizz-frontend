import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import bg from "../assets/rizz_background.png";

function Home() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { text: message };

    try {
      const res = await fetch("http://3.36.113.92:8080/rizz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("서버 응답:", result); // 서버 응답 콘솔에 출력

      // 응답을 /result 페이지로 전달
      navigate("/result", { state: { response: result } });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="flex flex-col items-center justify-start w-full h-full">
        {/* Header */}
        <div className="text-center mb-10 mt-2">
          <h1
            className="text-[90px] font-black bg-gradient-to-r from-[#F34164] to-[#AA55F3] text-transparent bg-clip-text drop-shadow-lg"
            style={{ fontFamily: "Pretendard" }}>
            Rizz AI
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            연애 바보들을 위한 상남자의 여자친구 언어 해석기
          </p>
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="relative w-full flex justify-center mt-4">
          <div
            className="relative flex items-center justify-center"
            style={{
              background: "#FDEBF6",
              boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.10)",
              borderRadius: "30px",
              padding: "20px",
              width: "1000px",
            }}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="‘나 그냥 잘게’라는 그녀의 신호, 그게 사실은 ‘지구 멸망’이란 뜻일 수도 있음."
              className="w-full text-lg bg-transparent focus:outline-none px-4"
              style={{
                fontFamily: "Pretendard",
                minHeight: "100px",
                maxHeight: "300px",
                resize: "none",
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
      </div>
    </div>
  );
}

export default Home;
