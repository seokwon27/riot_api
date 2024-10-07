import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-[64px] w-[100%] max-w-[1920px] m-auto flex flex-col items-center text-center">
      <div className="text-4xl text-slate-500">리그 오브 레전드 백과사전</div>
      <div className="m-5 text-white">
        Riot Games API를 사용하여 챔피언과 아이템 정보를 제공합니다.{" "}
      </div>
      <div className="flex flex-col gap-12">
        <Link href={"/champions"}>
          <div>
            <Image alt="champions_link" src={`/poro2.jpg`} width={600} height={400} />
            <p className="text-titlecolor font-bold mt-2">챔피언 목록</p>
          </div>
        </Link>
        <Link href={"/rotation"}>
          <div>
            <Image alt="champions_link" src={`/poro1.jpg`} width={600} height={400} />
            <p className="text-titlecolor font-bold mt-2">금주 로테이션 목록</p>
          </div>
        </Link>
        <Link href={"/items"}>
          <div>
            <Image alt="champions_link" src={`/poro3.jpg`} width={600} height={400} />
            <p className="text-titlecolor font-bold mt-2">아이템 목록</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
