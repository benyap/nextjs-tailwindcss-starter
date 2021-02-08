import Head from "next/head";

import { version } from "version.json";

const Page = () => {
  return (
    <div className="grid grid-cols-1 h-screen max-w-screen-md mx-4 md:mx-auto">
      <Head>
        <title>Tailwind CSS &amp; Next.js Starter</title>
      </Head>
      <main>
        <h1 className="text-5xl font-bold text-gray-800 mt-12 mb-6">
          Tailwind CSS &amp; Next.js Starter
        </h1>
        <p className="text-xl text-gray-800">
          An opinionated{" "}
          <a
            className="text-blue-700 hover:text-blue-500 transition-colors"
            href="https://nextjs.org"
          >
            Next.js 10
          </a>{" "}
          template project with support for{" "}
          <a
            className="text-blue-700 hover:text-blue-500 transition-colors"
            href="https://tailwindcss.com"
          >
            Tailwind&nbsp;CSS
          </a>
          ,{" "}
          <a
            className="text-blue-700 hover:text-blue-500 transition-colors"
            href="https://github.com/tailwindlabs/tailwindcss-forms"
          >
            Tailwind&nbsp;CSS&nbsp;Forms
          </a>{" "}
          and{" "}
          <a
            className="text-blue-700 hover:text-blue-500 transition-colors"
            href="https://sass-lang.com"
          >
            Sass
          </a>
          .
        </p>
        <p className="text-gray-500 my-6">
          This project is currently a work in progress. Documentation on the way!
        </p>
      </main>
      <footer className="mt-6 mb-12 self-end">
        <hr className="border-t border-gray-300 mb-2" />
        <div className="flex justify-between text-gray-400 text-sm font-light">
          <span>
            Created by{" "}
            <a
              className="hover:text-gray-300 transition-colors"
              href="https://github.com/benyap"
            >
              benyap
            </a>
            .{" "}
            <a
              className="hover:text-gray-300 transition-colors"
              href="https://github.com/benyap/tailwindcss-nextjs-starter/blob/main/LICENSE"
            >
              MIT License
            </a>
            .
          </span>
          <span>v{version}</span>
        </div>
      </footer>
    </div>
  );
};

export default Page;
