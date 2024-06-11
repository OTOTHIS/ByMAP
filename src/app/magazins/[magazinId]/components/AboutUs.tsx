import { aboutSectionDescription } from "../data/content";

function AboutUs() {
  const video = {
    title: 'Fashion-Culture-Cove',
    id: 'I10XB1-IIbA',
  };

  return (
    <div className="container-custom">
      <div className="space-y-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="space-y-3">
            <p className="text-primary">Our Story</p>
            <h1 className="2xl:text-7xl text-3xl font-semibold md:w-[70%] lg:w-[60%] lg:text-5xl">
              Get to Know More About Us
            </h1>
          </div>
          <p className="text-sm text-neutral-500 md:w-[50%] lg:w-[30%]">
            {aboutSectionDescription}
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
            allowFullScreen
            className="h-[40vh] w-full lg:h-screen 2xl:h-[87vh]"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
