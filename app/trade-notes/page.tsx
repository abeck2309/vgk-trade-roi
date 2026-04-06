import Image from "next/image";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";

const notes = [
  {
    title: "Marc-Andre Fleury",
    text: "The Fleury trade needs separate explanation because the return was minimal, but the move also tied into broader cap management and roster planning. That makes it difficult to treat as a standard one-for-one value exchange.",
    extra:
      "The model shows it as a win for VGK, but that's mostly driven by the context provided. Fleury's post-trade value comes out negative because he went to a really bad Chicago team, and there's essentially no incoming value on the VGK side since the return never played. So statistically it looks like VGK \"won,\" but I wouldn't really interpret it that way in practice."
  },
  {
    title: "Retained Salary",
    text: "Retained salary is noted throughout the project because it changes the practical cost of a trade. It is documented as context, but not directly assigned its own standalone value component in the model.",
    extra:
      "In practice, retained salary can still shape how a trade should be read because it affects flexibility and changes the real cost of moving or acquiring a player. The site treats that as written context so the trade score can stay consistent without pretending every retention case can be valued perfectly."
  },
  {
    title: "Draft Pick Traceability",
    text: "Some outgoing or incoming picks become difficult to trace once they are moved again in later deals. When that happens, the site uses notes to explain what is modeled directly and what is only partially followed.",
    extra:
      "This Eichel example shows why draft-pick traceability can become uncertain. Minnesota held two second-round picks in the 2023 draft, so it is not possible to say with confidence which specific selection came from the asset chain that began with Vegas. In cases like that, the project can follow the movement of the pick itself, but it should avoid overstating certainty about the exact prospect attached to that branch."
  }
];

export default function TradeNotesPage() {
  return (
    <Container className="space-y-12 pb-20 pt-12 md:space-y-16 md:pt-16">
      <PageIntro
        eyebrow="Trade Notes"
        title="The edge-case section for the deals that need extra context."
        description="Some VGK trades are too unusual to leave entirely to the model. This page gives you a clear place to handle exceptions, clarifications, and tracing notes."
      />

      <section className="space-y-6">
        <article className="panel p-6 md:p-7">
          <p className="eyebrow">Context Note</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
            {notes[0].title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-mist md:text-base">{notes[0].text}</p>
          <p className="mt-4 text-sm leading-7 text-mist md:text-base">{notes[0].extra}</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line">
            <div className="grid gap-px bg-line md:grid-cols-[1fr_auto_1fr]">
              <div className="bg-panel px-5 py-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-start justify-center">
                    <Image
                      src="/vgk-logo.png"
                      alt="Vegas Golden Knights logo"
                      width={54}
                      height={54}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-bright">Vegas Golden Knights</p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Sent Marc-Andre Fleury
                    </p>
                    <p className="mt-1 text-sm leading-6 text-mist">
                      1 year left, $7 million AAV
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center bg-panel px-5 py-5">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-bright">
                  for
                </span>
              </div>

              <div className="bg-panel px-5 py-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-start justify-center">
                    <Image
                      src="/chi-logo.png"
                      alt="Chicago Blackhawks logo"
                      width={54}
                      height={54}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-bright">Chicago Blackhawks</p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Sent Mikael Hakkarainen
                    </p>
                    <p className="mt-1 text-sm leading-6 text-mist">
                      Last year of ELC, $825k AAV
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="panel p-6 md:p-7">
          <p className="eyebrow">Context Note</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
            {notes[1].title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-mist md:text-base">{notes[1].text}</p>
          <p className="mt-4 text-sm leading-7 text-mist md:text-base">{notes[1].extra}</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line">
            <div className="grid gap-px bg-line md:grid-cols-[1fr_auto_1fr]">
              <div className="bg-panel px-5 py-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-start justify-center">
                    <Image
                      src="/sjs-logo.png"
                      alt="San Jose Sharks logo"
                      width={54}
                      height={54}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-bright">San Jose Sharks</p>
                    <div className="mt-2 space-y-3">
                      <div>
                        <p className="text-base font-semibold text-white">Sent Tomas Hertl</p>
                        <p className="mt-1 text-sm leading-6 text-mist">
                          6 years left, $6.75 million cap hit acquired by Vegas, $1,387,500 retained by SJS
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">Sent 2025 3rd</p>
                        <p className="mt-1 text-sm leading-6 text-mist">Traded to Vancouver</p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">Sent 2027 3rd</p>
                        <p className="mt-1 text-sm leading-6 text-mist">&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center bg-panel px-5 py-5">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-bright">
                  for
                </span>
              </div>

              <div className="bg-panel px-5 py-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-start justify-center">
                    <Image
                      src="/vgk-logo.png"
                      alt="Vegas Golden Knights logo"
                      width={54}
                      height={54}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-bright">Vegas Golden Knights</p>
                    <div className="mt-2 space-y-3">
                      <div>
                        <p className="text-base font-semibold text-white">Sent David Edstrom</p>
                        <p className="mt-1 text-sm leading-6 text-mist">32nd overall pick in 2023 draft</p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">Sent 2025 1st</p>
                        <p className="mt-1 text-sm leading-6 text-mist">Traded to Nashville</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="panel p-6 md:p-7">
          <p className="eyebrow">Context Note</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
            {notes[2].title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-mist md:text-base">{notes[2].text}</p>
          <p className="mt-4 text-sm leading-7 text-mist md:text-base">{notes[2].extra}</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line">
            <div className="grid gap-px bg-line xl:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <div className="bg-panel px-5 py-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-start justify-center">
                    <Image
                      src="/vgk-logo.png"
                      alt="Vegas Golden Knights logo"
                      width={54}
                      height={54}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-bright">Vegas Golden Knights</p>
                    <div className="mt-2 space-y-3">
                      <div>
                        <p className="text-base font-semibold text-white">Received Jack Eichel</p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">Received 2023 3rd round pick</p>
                        <p className="mt-1 text-sm leading-6 text-mist">VGK selected F Mathieu Cataford</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center bg-panel px-5 py-5">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-bright">
                  for
                </span>
              </div>

              <div className="bg-panel px-5 py-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-start justify-center">
                    <Image
                      src="/buf-logo.png"
                      alt="Buffalo Sabres logo"
                      width={54}
                      height={54}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-bright">Buffalo Sabres</p>
                    <div className="mt-2 space-y-3">
                      <div>
                        <p className="text-base font-semibold text-white">Received Alex Tuch</p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">Received Peyton Krebs</p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">Received 2022 16th overall pick</p>
                        <p className="mt-1 text-sm leading-6 text-mist">BUF selected F Noah Ostlund</p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">Received 2023 2nd round pick</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center bg-panel px-5 py-5">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-bright">
                  then
                </span>
              </div>

              <div className="bg-panel px-5 py-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-start justify-center">
                    <Image
                      src="/min-logo.png"
                      alt="Minnesota Wild logo"
                      width={54}
                      height={54}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-bright">Minnesota Wild</p>
                    <div className="mt-2 space-y-3">
                      <div>
                        <p className="text-base font-semibold text-white">Acquired 2023 2nd round pick</p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">Sent Jordan Greenway to Buffalo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </Container>
  );
}
