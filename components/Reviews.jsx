"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  // {
  //   avatar: "/reviews/giftolexia_logo.jpeg",
  //   name: "Giftolexia Solutions Private Limited",
  //   job: "Data Analyst and Full Stack Developer Intern",
  //   review:
  //     "Bhuvan worked along with the Data Analytics team and made substantial contributions both at an individual level and at the team level. We appreciate his interest, perseverance and dedication throughout the project, and his contribution to Giftolexia. ...",
  //   company_link: "https://giftolexia.com",
  //   certificate_link:
  //     "https://drive.google.com/file/d/1FbVPU1ZPk-N44kYldMuwZwCP6efEqAA4/view?usp=sharing",
  // },
  // {
  //   avatar: "/reviews/liaplus_logo.jpeg",
  //   name: "LiaPlus AI",
  //   job: "Full Stack Developer Intern",
  //   review:
  //     " During his 3 month tenure, he demonstrated exceptional dedication playing a key role in various projects. His contributions have been highly valued, and we commend his hard work and commitment.",
  //   company_link: "https://liaplus.com",
  //   certificate_link:
  //     "https://drive.google.com/file/d/1SDpKxBN498vZ7WhX5oIWuG_0Q2F8y7NH/view?usp=sharing",
  // },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-12 text-center">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={50}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[450px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="min-h-[400px] bg-tertiary p-8 dark:bg-secondary/40">
                  <CardHeader className="mb-10 p-0">
                    <a
                      href={person.company_link}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-x-4 transition-all hover:underline"
                    >
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                        className="rounded-full"
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </a>
                  </CardHeader>
                  <CardDescription className="h-[200px] text-justify text-lg text-muted-foreground">
                    <a
                      href={person.certificate_link}
                      target="_blank"
                      rel="noopener"
                      className="hover:text- flex items-center gap-x-4 transition-all"
                    >
                      {person.review}
                    </a>
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
