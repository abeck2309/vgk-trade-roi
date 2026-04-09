import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";

const openingSection = {
  title: "Project Overview",
  body: "This project evaluates major Vegas Golden Knights trades by comparing the value VGK received versus the value they gave up. Trades are analyzed using realized on-ice performance, remaining future value from draft picks and prospects, and the cost of acquiring that value under the NHL salary cap. The goal is to move beyond reputation or narrative and quantify how much value each trade actually produced for the Golden Knights."
};

const methodologyParagraphs = [
  {
    title: "Net Trade Value (NTV)",
    body: "Net Trade Value (NTV) represents the total value VGK gained from a trade. It is calculated as realized on-ice value plus expected future value from picks and prospects, minus the value of players traded away. Positive values favor VGK, while negative values favor the other team."
  },
  {
    title: "xGAR",
    body: "xGAR, or Expected Goals Above Replacement, estimates a player's on-ice impact relative to a replacement-level player. It captures both offensive and defensive contributions and is more useful here than raw points because it includes play-driving and defensive value, not just scoring. It can also be preferable to broader WAR-style summaries when the goal is to stay closely tied to expected-goal impact across positions and seasons."
  },
  {
    title: "Expected Value (EV)",
    body: "Expected Value (EV) represents the modeled future value of draft picks and unproven prospects using a simple framework based on historical outcomes. First-round picks are valued by draft position, while later rounds use round-level averages. Future picks are time-discounted because their value is not realized immediately, and prospects are also discounted based on years since draft to reflect attrition risk and uncertainty in development."
  },
  {
    title: "Cap Efficiency",
    body: "Cap Efficiency measures how much on-ice value a player delivered relative to their total cap hit. It is measured using total contract value over the period being evaluated rather than AAV, because the goal is to capture the actual cost tied to the value produced in the sample. Since realized value is summed across multiple seasons, using full cap hit over that same stretch keeps the comparison more consistent."
  },
  {
    title: "Dashboard Interpretation",
    body: "The Trade ROI dashboard shows which VGK trades delivered the most total value. Clicking a trade reveals the value breakdown and the players who contributed to the result. The Cap Efficiency dashboard compares individual players involved in trades based on their realized value and total cap hit, allowing direct comparison between incoming and outgoing assets."
  },
  {
    title: "Data Sources and Scope",
    body: "On-ice value is measured using xGAR data from Evolving Hockey. Contract information is sourced from PuckPedia. Draft pick value is modeled using historical expected value curves. This analysis reflects regular-season performance only. Goalie impact and retained salary are noted when relevant but are not directly included in value calculations."
  }
];

const closingSection = {
  title: "Evaluation Window",
  body: "Trades are evaluated based on the value produced while assets were actually owned by VGK. Performance outside of that ownership window is not included. This project focuses on understanding trade outcomes through data rather than assigning credit or blame based on public perception."
};

export default function MethodologyPage() {
  return (
    <Container className="space-y-12 pb-20 pt-12 md:space-y-16 md:pt-16">
      <PageIntro
        eyebrow="Methodology"
        title="The scoring framework behind the project."
        description="This page explains the metrics, assumptions, and data sources used to evaluate Vegas Golden Knights trade outcomes."
      />

      <section className="panel p-6 md:p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-white md:text-[1.75rem]">
          {openingSection.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-mist md:text-base">{openingSection.body}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {methodologyParagraphs.map((section) => (
          <div key={section.title} className="panel flex h-full flex-col p-6 md:p-7">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-white md:text-[1.75rem]">
              {section.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-mist md:text-base">{section.body}</p>
          </div>
        ))}
      </section>

      <section className="panel p-6 md:p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-white md:text-[1.75rem]">
          {closingSection.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-mist md:text-base">{closingSection.body}</p>
      </section>
    </Container>
  );
}
