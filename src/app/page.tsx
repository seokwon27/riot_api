export default function Home() {
  const versionData = async (): Promise<string> => {
    const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json").then((data) =>
      data.json()
    );
    return res[0];
  };

  return (
    <div>
      <div>홈페이지</div>
      <div>SSG 렌더링</div>
      <div>주요 링크와 간단한 소개를 제공합니다.</div>
      <div>사용된 api 버전은 {versionData()} 입니다.</div>
    </div>
  );
}
