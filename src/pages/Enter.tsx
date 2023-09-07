import { useState } from 'react';

export default function Enter() {
  const [nickname, setNickname] = useState('');

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex justify-center items-center">
      <div className="w-full h-screen flex justify-center items-center bg-[url(./assets/enter.jpg)] bg-no-repeat bg-cover bg-center shadow-xl">
        <div className="w-96 bg-white rounded-lg p-6 space-y-4 shadow-lg">
          <h1 className="font-bold text-3xl">환영합니다!</h1>
          <p>VersaShop 쇼핑에 사용할 닉네임을 입력해주세요.</p>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              id="nickname"
              type="text"
              placeholder="한글자 이상 입력해주세요."
              className="outline-none border-b px-1 py-2"
              onChange={handleNickname}
              required
            />
            <button
              type="submit"
              className="bg-lime-300 px-4 py-2 rounded-md mt-4 font-semibold"
            >
              입력
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
