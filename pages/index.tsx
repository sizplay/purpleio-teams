/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto min-h-screen">
      <section className="px-6 fixed top-0 left-0 right-0">
        <Navigation />
      </section>
      <section className="pt-16">
        <div className="pt-24">
          <h1 className="font-bold text-5xl">
            보라빛 소를 찾는 사람들이 모여
            <br />
            세상의 문제를 해결하고 새로운 가치를 만듭니다.
          </h1>
        </div>
        <img
          src="/13464_59658_494.jpg"
          alt="팀이미지"
          className="w-screen pt-24 rounded-lg"
        />
        <div className="pt-16">
          <h1 className="font-bold text-3xl">
            보라빛 소에 대한 간략한 설명으로 사람들의 궁금증과
            <br />
            우리의 비전 신뢰를 나타내는 문구가 나오면 좋겠습니다
          </h1>
        </div>
        <div className="pt-48 text-center">
          <h1 className="font-bold text-4xl">
            고객 경험을 첫번째 가치로 생각합니다.
          </h1>
          <p className="pt-8 text-lg">
            퍼플아이오에서 고객 경험은 고객이 우리의 서비스를 사용하는 과정에서
            느끼는 모든 것을 의미합니다. <br />
            우리는 그 경험을 통해 고객이 느끼는 감정을 이해하고, 그 감정을 통해
            고객이 원하는 것을 파악합니다.
            <br />
            그리고 그것을 기반으로 고객이 원하는 것을 만들어냅니다.
          </p>
        </div>
        <p className="text-right pt-10">회사 소개 알아보기 {`>`}</p>
        <div className="grid grid-cols-4 gap-3">
          <img
            src="/kolonmall-mobile-1.jpeg"
            alt="콜론몰 모바일"
            className="w-full h-full"
          />
          <img
            src="/kolonsport-mobile-2.jpeg"
            alt="콜론몰 모바일"
            className="w-full h-full"
          />
          <img
            src="/thecartgolf-mobile-3.jpeg"
            alt="콜론몰 모바일"
            className="w-full h-full"
          />
          <img
            src="/247-mobile.jpg"
            alt="콜론몰 모바일"
            className="w-full h-full"
          />
        </div>
        <div className="pt-48 text-center">
          <h1 className="font-bold text-4xl">
            실패에 대한 두려움 없이 기술에 적응하여 비즈니스를 리드합니다
          </h1>
          <p className="pt-8 text-lg">
            퍼플아이오는 기술을 기반으로 비즈니스를 리드합니다. <br />
            우리는 기술을 통해 비즈니스의 문제를 해결하고, 비즈니스를
            성장시킵니다.
          </p>
        </div>
        <p className="text-right pt-10">서비스 알아보기 {`>`}</p>
        <img src="/online-homework_P1_1440x800.jpg" alt="비즈니스" />
        <div className="pt-24 text-center">
          <h1 className="font-bold text-4xl">
            기술을 기반으로 새로운 시도를 두려워하지 않고 <br />
            함께 자라기를 추구합니다
          </h1>
          <p className="pt-8 text-lg">
            퍼플아이오는 임직원의 성장을 가장 중요하게 생각합니다. <br />
            함께 자라기를 통해 서로를 존중하고 배려하며, <br />
            서로의 성장을 도모합니다.
          </p>
        </div>
        <p className="text-right pt-10">팀 문화 알아보기 {`>`}</p>
        <Carousel>
          <div>
            <img src="/Untitled-1pXwT5.png" alt="비즈니스" />
          </div>
          <div>
            <img src="/Untitled-1pXwT5.png" alt="비즈니스" />
          </div>
          <div>
            <img src="/Untitled-1pXwT5.png" alt="비즈니스" />
          </div>
        </Carousel>
      </section>
    </main>
  );
}
