import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bg from "../assets/rizz_background.svg";

const parseContent = (content) => {
  const lines = content.split("\n").map((line) => line.trim());
  const extractedData = {
    level: "",
    translation: "",
    explanation: "",
    solutions: [],
  };
  let currentSection = "";

  lines.forEach((line) => {
    if (line.includes("레벨")) {
      const levelMatch = line.match(/\d+/);
      extractedData.level = levelMatch ? levelMatch[0] : "알 수 없음";
      currentSection = "level";
    } else if (line.includes("언어 해석")) {
      extractedData.translation = "";
      currentSection = "translation";
    } else if (line.includes("간단한 부가 설명")) {
      extractedData.explanation = "";
      currentSection = "explanation";
    } else if (line.includes("해결법")) {
      extractedData.solutions = [];
      currentSection = "solutions";
    } else if (line.startsWith("BEST")) {
      extractedData.solutions.push(line);
      currentSection = "solutions";
    } else {
      if (currentSection === "translation") {
        extractedData.translation += ` ${line}`;
      } else if (currentSection === "explanation") {
        extractedData.explanation += ` ${line}`;
      } else if (currentSection === "solutions") {
        extractedData.solutions[
          extractedData.solutions.length - 1
        ] += ` ${line}`;
      }
    }
  });
  return extractedData;
};

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const response =
    location.state?.response?.data?.choices?.[0]?.message?.content;
  const parsedData = response ? parseContent(response) : null;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="text-center mb-6 flex flex-col items-center justify-start mt-2">
        <h1
          className="text-[90px] font-black bg-gradient-to-r from-[#F34164] to-[#AA55F3] text-transparent bg-clip-text drop-shadow-lg"
          style={{ fontFamily: "Pretendard" }}>
          Rizz AI
        </h1>
        <p className="text-xl text-gray-600 font-medium">
          연애 바보들을 위한 상남자의 여자친구 언어 해석기
        </p>
      </div>

      <div
        style={{
          background: "#FDEBF6",
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.10)",
          borderRadius: "30px",
          padding: "20px",
          width: "1000px",
        }}
        className="text-center">
        {parsedData ? (
          <>
            <div className="flex justify-between items-center px-6 mt-4">
              <h2 className="text-[25px] font-bold text-gray-800">Result</h2>
              <div className="flex items-center text-[#EC3750] text-[40px] font-extrabold">
                <div>Lv.</div>
                <div>{parsedData.level}</div>
              </div>
            </div>

            <div className="mt-4 text-left ml-6">
              <p className="text-lg text-gray-800">
                {parsedData.translation && (
                  <>
                    {parsedData.translation.split(" → ").map((text, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && " → "} {text}
                        <br />
                      </React.Fragment>
                    ))}
                  </>
                )}
              </p>
            </div>

            <div className="mt-4 text-left ml-6">
              <p className="text-lg text-gray-800">{parsedData.explanation}</p>
            </div>

            <div className="mt-6 text-left ml-6">
              <h3 className="text-xl font-semibold text-[#000000]">
                Rizz’s Solutions
              </h3>
              <ul className="mt-4 space-y-2">
                {parsedData.solutions.map((solution, index) => {
                  const isTip = index % 2 === 1;
                  return (
                    <li
                      key={index}
                      className={`text-lg ${
                        isTip ? "text-black text-sm" : "text-[#EC3750] text-xl"
                      }`}>
                      {solution}
                    </li>
                  );
                })}
              </ul>
            </div>

            <button
              onClick={() => navigate("/")}
              className="mt-6 px-6 py-2 bg-[#F97198] text-white rounded-lg hover:bg-pink-600 transition">
              돌아가기
            </button>
          </>
        ) : (
          <p className="text-xl text-red-500">데이터가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Result;
