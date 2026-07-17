export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FAF7F0] px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-center text-5xl font-extrabold text-[#2F6F4F]">
          ExamOrigin
        </h1>

        <p className="mt-3 text-center text-[#666666]">
          AI 기반 영어 시험 분석 플랫폼
        </p>

        <div className="mt-10 space-y-5">
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            className="w-full rounded-2xl border border-[#D9D9D9] bg-white px-5 py-4 text-gray-700 outline-none transition-all focus:border-[#2F6F4F] focus:ring-2 focus:ring-[#F2C14E]"
          />

          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="w-full rounded-2xl border border-[#D9D9D9] bg-white px-5 py-4 text-gray-700 outline-none transition-all focus:border-[#2F6F4F] focus:ring-2 focus:ring-[#F2C14E]"
          />

          <button className="w-full rounded-2xl bg-[#2F6F4F] py-4 text-lg font-bold text-white transition-all duration-200 hover:bg-[#275D42] hover:shadow-lg">
            로그인
          </button>
        </div>

        <p className="mt-6 cursor-pointer text-center text-sm text-[#888888] hover:text-[#2F6F4F]">
          비밀번호를 잊으셨나요?
        </p>
      </div>
    </main>
  );
}