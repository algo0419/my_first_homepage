import { SiteFrame } from "@/components/site-frame";
import { FloatingCollage } from "@/components/floating-collage";

export default function HomePage() {
  return (
    <SiteFrame current="home" fullBleed>
      <section className="fade-up">
        <FloatingCollage />
      </section>
    </SiteFrame>
  );
}
