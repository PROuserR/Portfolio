"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const PortfolioPage = () => {
  const ref = useRef();
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const items = [
    {
      id: 1,
      title: t("instagramClone"),
      desc: t("instagramCloneDesc"),
      img: "https://images.pexels.com/photos/5426401/pexels-photo-5426401.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://github.com/PROuserR/Instagram-Clone-Frontend",
    },
    {
      id: 2,
      title: t("socialMediaPlatform"),
      desc: t("socialMediaPlatformDesc"),
      img: "https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://github.com/PROuserR/Social-Media-Platform",
    },
    {
      id: 3,
      title: t("timeManagmentTable"),
      desc: t("timeManagmentTableDesc"),
      img: "https://images.pexels.com/photos/6892902/pexels-photo-6892902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://github.com/PROuserR/TimeManagmentTable",
    },
    {
      id: 4,
      title: t("lyricsFinder"),
      desc: t("lyricsFinderDesc"),
      img: "https://images.pexels.com/photos/5118495/pexels-photo-5118495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://github.com/PROuserR/Lyrics-Finder",
      blog: "https://dev.to/prouserr/from-a-few-lines-of-code-to-building-a-whole-functional-website--459e",
    },
    {
      id: 5,
      title: t("smartCalculator"),
      desc: t("smartCalculatorDesc"),
      img: "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://github.com/PROuserR/Smart-Calculator",
      blog: "https://www.codeproject.com/Articles/5370605/Lets-Code-that-Wicked-Cool-Calculator",
    },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="absolute left-1/4 top-40 sm:top-80 md:top-40 w-1/2 h-80 bg-gradient-to-r from-red-800 to-red-600 dark:from-red-600 dark:to-red-300 blur-3xl rounded-full -z-10 -rotate-[30deg]" />
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl xl:text-8xl text-center z-50">
          {t("projects")}
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex bg-gradient-to-r from-red-300 to-white text-red-900 dark:text-red-300 dark:from-black dark:to-red-900"
          >
            <div className="h-screen w-screen bg-transparent" />
            {items.map((item) => (
              <div
                className={
                  "h-screen w-screen px-12 gap-x-36 flex items-center justify-center"
                }
                key={item.id}
              >
                <div className="flex flex-col gap-8">
                  <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                    {item.title}
                  </h1>

                  <p className="w-80 md:w-96 lg:w-[500px] text-xl lg:text-2xl xl:text-4xl xl:w-[600px]">
                    {item.desc}
                  </p>
                  <div className="flex gap-x-12">
                    <Link href={item.link} className="w-fit">
                      <button className="text-lg p-2 md:p-4 md:text-md lg:p-6 lg:text-xl bg-red-900 text-red-300 dark:bg-red-300 dark:text-red-900 font-semibold rounded-xl hover:opacity-75">
                        {t("viewMore")}
                      </button>
                    </Link>
                    {item?.blog && (
                      <Link href={item.blog} className="w-fit">
                        <button className="text-lg p-2 md:p-4 md:text-md lg:p-6 lg:text-xl bg-red-900 text-red-300 dark:bg-red-300 dark:text-red-900 font-semibold rounded-xl hover:opacity-75">
                        {t("seeBlog")}
                        </button>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="relative w-[720px] h-[480px]">
                  <Image
                    src={item.img}
                    alt="project cover"
                    className="shadow-2xl shadow-black object-cover"
                    fill
                    sizes="w-full"
                  />
                </div>
              </div>
            ))}
            <div className="h-screen w-screen bg-transparent" />
          </motion.div>
        </div>
      </div>
      <div className="flex w-screen h-[125vh] gap-16 items-center justify-center text-center">
        <div className="flex flex-col absolute left-2 xl:left-24 z-10 gap-y-12">
          <h1 className="text-4xl xl:text-6xl italic text-red-950">
            {t("doYouHaveAProject")}
          </h1>
          <Link
            href="/contact"
            className="text-4xl bg-red-300 dark:bg-red-800 p-4 w-fit mx-auto rounded-2xl hover:shadow-2xl shadow-gray-500 hover:opacity-50"
          >
            {t("button2")}
          </Link>
        </div>

        <div className="relative w-full h-full bg-gradient-to-r from-red-300 dark:from-red-800 to-black">
          <Image
            src="https://images.pexels.com/photos/6615234/pexels-photo-6615234.jpeg?auto=compress&cs=tinysrgb&w=3000&lazy=load"
            className="object-cover mix-blend-lighten"
            alt="Contact background"
            fill
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
