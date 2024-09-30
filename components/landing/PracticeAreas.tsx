import { client, urlFor } from "@/lib/sanity";
import { CourseInterface, PracticeInterface } from "@/types/interface";
import Link from "next/link";
import { format } from "date-fns";
import { practiceSource } from "@/helpers/practiceSource";
import Image, { StaticImageData } from "next/image";


const PracticeAreas = async () => {

  return (
    <div className="bg-white py-24 sm:py-32 font-DM">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Practice Areas
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {practiceSource.map((practice: PracticeInterface) => (
            <article
              key={practice.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={practice.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-700/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <span>
                  <span className="absolute inset-0" />
                  {practice.title}
                </span>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
