import Image from "next/image";

export default function Projects(){
    return (
        <section className="flex flex-wrap justify-center gap-6 p-8">
        <div className="w-80 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <Image
            className="h-48 w-full object-cover"
            src="/kallery.png"
            alt="Kallery Project"
            />
            <p className="p-4 text-center text-lg font-bold text-gray-800">
            KALLERY
            </p>
        </div>

        <div className="w-80 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <Image
            className="h-48 w-full object-cover"
            src="/sisfo.png"
            alt="SISFO SARPRAS Project"
            />
            <p className="p-4 text-center text-lg font-bold text-gray-800">
            SISFO SARPRAS
            </p>
        </div>
        </section>
    );
}