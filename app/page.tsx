import { SiteFrame } from "@/components/site-frame";
import { FloatingCollage } from "@/components/floating-collage";

export default function HomePage() {
  return (
    <SiteFrame current="home">
      <section className="-mx-4 fade-up sm:-mx-6 lg:-mx-8">
        <FloatingCollage />
      </section>
    </SiteFrame>
  );
}
