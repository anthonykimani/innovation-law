import React from 'react';
import { client, urlFor } from "@/lib/sanity";
import { BlogArticle } from "@/types/interface";
import { format } from "date-fns";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
    title,
    description,
    "currentSlug": slug.current,
    "imageUrl": imageUrl.asset._ref,
    content,
    "dateTime": _createdAt,
    "updatedAt": _updatedAt,
    date,
    category,
    link,
    "categoryTitle":category.title,
    "authorName":author.name,
    "authorRole":author.role,
    "authorImageUrl": author.imageUrl.asset._ref,
  }`;

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

const News = async () => {
  const data = await getData();

  return (
    <div className="bg-white py-24 sm:py-32 font-DM">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our News
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            We offer educational resources, training programs, and support,
            fostering growth in blockchain and cryptocurrency.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((blog: BlogArticle) => (
            <Link
              href={`/news/${blog.currentSlug}`}
              key={blog.currentSlug}
              className="flex flex-col items-start justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-2xl overflow-hidden"
            >
              <article className="w-full">
                <div className="relative w-full">
                  <img
                    src={urlFor(blog.imageUrl).url()}
                    alt=""
                    className="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={format(new Date(blog.dateTime), "PP")}
                      className="text-gray-500"
                    >
                      {format(new Date(blog.dateTime), "PP")}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {blog.categoryTitle}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {blog.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {blog.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={urlFor(blog.authorImageUrl).url()}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-100"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {blog.authorName}
                      </p>
                      <p className="text-gray-600">{blog.authorRole}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;