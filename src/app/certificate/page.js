/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function Certificate(){
    return (
        <section className="flex flex-wrap justify-center gap-6 p-8">
        <div className="w-80 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <Image
            className="h-48 w-full object-cover"
            src="/sqlcer.png"
            alt="certificate"
            />
            <p className="p-4 text-center text-lg font-bold text-gray-800">
            HACKERRANK Certificate
            </p>
        </div>

        <div className="w-80 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <Image
            className="h-48 w-full object-cover"
            src="/javacer.png"
            alt="certiicate"
            />
            <p className="p-4 text-center text-lg font-bold text-gray-800">
            HACKERRANK Certificate
            </p>
        </div>
        </section>
    );
}
        