import Link from "next/link";
import "../app/styles/globals.css";
import "../app/styles/home.css";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="title">Hello World!</h1>
      </main>
      <nav>
        <button>
          <Link href="/about">Sobre Nós!</Link>
        </button>
      </nav>
    </div>
  );
}
