import React from "react";
import bg from "../assets/rizz_background.svg";

function Result() {
  return (
    <div
      className="min-h-screen flex items-start justify-start pt-16 p-4 md:p-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="max-w-none w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-8">
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

        {/* 결과 정보 박스 */}
        <div
          className="p-6 shadow-lg relative"
          style={{
            width: "1000px",
            background: "#FFF5F8",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.10)",
          }}>
          {/* Lv.6 & 감정 상태 */}
          <div className="absolute top-6 right-6 text-right">
            <h2 className="text-4xl font-bold text-[#F34164]">Lv.6</h2>
            <p className="text-[#EC3750] font-medium text-sm mt-1">
              불타오르지는 않지만 꽤 삐침.
            </p>
          </div>

          {/* 번역 결과 */}
          <h2 className="text-2xl font-bold mb-4 text-[#F34164]">
            번역 결과
          </h2>

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            <span className="text-gray-600">"좀 지친다. 나 그냥 잘게"</span> <br />
            → <span className="font-semibold text-black">
              "지금 너랑 이야기하는 게 힘들다. 더 대화하면 화만 날 것 같으니까 그냥 잔다."
            </span>
          </p>

          <p className="mt-4 text-gray-700">
            추가로 <span className="font-semibold">"잘게"</span>라고 한 걸 보면,
            감정 소모로 인해 지쳐서 일단 피하는 느낌.
          </p>
        </div>

        {/* 해결책 박스 */}
        <div
          className="mt-6 p-6 shadow-lg"
          style={{
            width: "1000px",
            background: "#FFF5F8",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.10)",
          }}>
          <h2 className="text-2xl font-bold mb-4 text-[#AA55F3]">
            Rizz’s Solutions
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold">BEST 1</h3>
              <p className="text-gray-800">
                "여보세요? 고객님? 제 마음속에 계신데요? 여보세요? 잠드셨나요?"
              </p>
              <p className="text-sm text-gray-500">
                💡 이걸 톡으로 보내거나 음성 메시지로 장난스럽게 보내면, 살짝 피식할 수도 있음
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold">BEST 2</h3>
              <p className="text-gray-800">
                "아니 벌써 꿈나라 가신다고요? 내 꿈에 초대장 보냈는데, 확인하고 오시면 됩니다."
              </p>
              <p className="text-sm text-gray-500">
                💡 장난스럽게 꿈에서 만나자고 하면 풀릴 수도 있음
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold">BEST 3</h3>
              <p className="text-gray-800">
                "(귀여운 강아지나 고양이 움짤 보내면서) 이 친구가 내 상태야. 벌써 반성 중이야."
              </p>
              <p className="text-sm text-gray-500">
                💡 귀여운 이미지로 감정 완화 유도
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
