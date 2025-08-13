import Image from "next/image";

export default function About(){
    return (
        <section className="flex flex-col items-center justify-center min-h-screen pl-70 pr-70 text-center p-4">
              <div className="flex flex-row justify-center items-center m-2">
                <Image 
                src="/crop_king.png" 
                alt="Foto Profil" 
                width={150} 
                height={150} 
                className="rounded-full border-4 border-white shadow-lg"
              />
              <div className="flex flex-col text-start ml-2">
                <h1 className="text-4xl font-bold mt-4">Hello, I am King Nussy</h1>
                <p className="mt-2 text-lg text-gray-600">
                I'm a student at SMK Taruna Bhakti, Depok, majoring in Software
                Engineering. I'm a responsible and dependable individual who can
                collaborate effectively in a team.
                </p>
              </div>
              </div>
            </section>
    );
}