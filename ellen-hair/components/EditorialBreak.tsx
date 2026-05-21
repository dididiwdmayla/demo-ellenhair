import FadeUp from "./animated/FadeUp";

export default function EditorialBreak() {
  return (
    <section className="w-full bg-bg-secondary flex flex-col items-center justify-center text-center px-6" style={{ padding: '120px 24px 160px 24px' }}>
      <FadeUp>
        <p className="font-display italic font-normal text-[clamp(2rem,5vw,3.5rem)] text-text-primary max-w-4xl leading-tight">
          &quot;Cada cliente é conhecido pelo nome. <br className="hidden md:block"/> Cada cabelo tem sua história.&quot;
        </p>
        <div className="w-[80px] h-[2px] bg-red-ellen mx-auto mt-16" />
      </FadeUp>
    </section>
  );
}
