import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-2">
      <div className="flex flex-row justify-center items-center m-2">
      <div className="flex flex-col text-start ml-2">
        <h1 className="text-4xl font-bold mt-4">Hello, I am King Nussy</h1>
        <p className="mt-2 text-lg text-gray-600">
        Saya seorang pengembang web yang bersemangat dalam membangun solusi digital.
        </p>
      </div>
      </div>
      <Link href="/projects" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Lihat Proyek Saya
        </Link>
    </section>
  );
}
