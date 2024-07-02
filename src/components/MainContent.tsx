"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import BootstrapCarousel from "./BootstrapCarousel";

export default function MainContent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mb-10 mt-12 flex flex-col items-center justify-center text-center">
      <BootstrapCarousel />
      <div
        data-aos="fade-up"
        className="my-8 text-center font-xxx text-xl leading-loose text-[#98761A]"
      >
        Жасыңды санап қарасам – биылғы жыл бестесің, Зейнет тепті парымдап
        тепкішектің кестесін. Үкілеулік ер бесті тақымыңнан кетпесін, Қалаулы
        елдің ұлы бол, атақ-даңқың өшпесін.
      </div>
      <div
        data-aos="fade-up"
        className="mb-8 text-center font-georgia text-[22px] uppercase leading-relaxed text-[#090909]"
      >
        Құрметті ағайын-туыс <br />
        бауырлар, құда-жекжат, <br /> нағашы-жиен, бөлелер, <br /> дос-жараңдар,
        әріптестер, <br /> көршілер!
      </div>
      <div
        data-aos="fade-up"
        className="mb-8 text-center font-georgia text-[22px] uppercase leading-relaxed text-[#090909]"
      >
        сіз(дер)ді <br /> ұлымыз
      </div>
      <div data-aos="fade-up" className="mb-8 font-xxx text-4xl text-[#98761A]">
        Ханның
      </div>
      <div
        data-aos="fade-up"
        className="mb-8 text-center font-georgia text-[22px] uppercase leading-relaxed text-[#090909]"
      >
        Сүндет тойына <br /> арналған салтанатты <br /> ақ дастарханымыздың{" "}
        <br />
        қадірлі қонағы болуға <br />
        шақырамыз!
      </div>
      <div className="relative mx-10 mb-16 flex h-[60vh] w-[80%] flex-col items-center rounded-xl bg-[url('/girl.webp')] bg-cover bg-center bg-no-repeat">
        <div className="pt-8 font-xxx text-3xl text-[#846718]">
          Той Салтанаты:
        </div>
        <div className="flex flex-col items-center pt-8 text-center uppercase text-[#846718]">
          <div data-aos="flip-up" className="font-georgia text-2xl">
            шілде
          </div>
          <div
            data-aos="flip-up"
            className="pb-4 font-georgia text-7xl font-bold"
          >
            18
          </div>
          <div data-aos="flip-up" className="font-georgia text-2xl">
            2024 жыл
          </div>
          <div className="absolute bottom-8 flex flex-col text-[#846718]">
            <div className="font-xxx text-3xl capitalize">Басталуы:</div>
            <div
              data-aos="flip-up"
              data-os-easing="ease-out-cubic"
              className="font-georgia text-7xl font-bold"
            >
              18:00
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="flip-down"
        className="mb-8 font-xxx text-3xl leading-relaxed text-[#846718]"
      >
        Тойдың <br /> бағдарламасы:
      </div>
      <div className="relative grid grid-cols-2 items-center gap-x-10 text-center font-georgia text-[#050505]">
        <div data-aos="zoom-out" data-aos-delay="200" className="text-xl">
          17:30 <br /> қонақтардың <br /> жиналуы
        </div>
        <Image
          data-aos="zoom-in"
          src="/bg-2.webp"
          alt="background"
          width={100}
          height={100}
          className="relative bottom-1 mx-auto"
        />
        <Image
          data-aos="zoom-in"
          src="/bg-3.webp"
          alt="background"
          width={100}
          height={100}
          className="relative bottom-1 mx-auto"
        />
        <div data-aos="zoom-out" data-aos-delay="200" className="text-xl">
          18:00 <br /> тойдың <br /> басталуы
        </div>
        <div data-aos="zoom-out" data-aos-delay="200" className="text-xl">
          21:30 <br /> суретке түсу
        </div>
        <Image
          data-aos="zoom-in"
          src="/opop.png"
          alt="background"
          width={100}
          height={100}
          className="relative bottom-3 mx-auto mt-2"
        />
        <div className="absolute left-[50%] h-full border-[0.5px] border-[#98761A]"></div>
        <div className="absolute left-[47.5%] top-[10%] h-4 w-4 rounded-[50%] bg-[#CC9B33]"></div>
        <div className="absolute left-[47.5%] h-4 w-4 rounded-[50%] bg-[#CC9B33]"></div>
        <div className="absolute bottom-[10%] left-[47.5%] h-4 w-4 rounded-[50%] bg-[#CC9B33]"></div>
      </div>
    </div>
  );
}
