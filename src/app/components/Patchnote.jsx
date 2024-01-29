function Patchnote({ className }) {
  return (
    <div className={className}>
      <h1 className="text-xl font-bold">패치노트</h1>
      <ul className="mt-2 space-y-2">
        <li className="space-y-1">
          <p className="font-bold">2024-01-27 - v1.0.1</p>
          <p className="pl-2">남청의 원반, 수슈수슈 패닉 등장 포켓몬 추가</p>
        </li>
        <li className="space-y-1">
          <p className="font-bold">2024-01-18 - v1.0.0</p>
          <p className="pl-2">1~9세대, 벽록의 가면 등장 포켓몬 추가</p>
        </li>
      </ul>
    </div>
  );
}

export default Patchnote;
