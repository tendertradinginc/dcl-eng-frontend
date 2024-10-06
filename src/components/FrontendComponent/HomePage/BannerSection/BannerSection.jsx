import SliderHero from "./SliderHero";

export default async function BannerSection() {
  const response = await fetch("http://localhost:5000/api/v1/homepage/banner", {
    cache: "no-store",
  });
  const { data: slides } = await response.json();

  return (
    <div>
      <SliderHero slides={slides} />
    </div>
  );
}
