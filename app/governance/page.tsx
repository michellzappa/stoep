import { TopBar, PageHeader } from "../components/Nav";
import { RoleTag } from "../components/CivicUI";
import { T } from "../lib/i18n";

function RoleColumn({
  role,
  title,
  items,
}: {
  role: "resident" | "government" | "entrepreneur";
  title: React.ReactNode;
  items: React.ReactNode[];
}) {
  return (
    <div className="rounded-lg border border-[#e6e2d6] bg-white p-5">
      <RoleTag role={role} />
      <h2 className="mt-3 font-serif italic text-[24px] leading-tight">{title}</h2>
      <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-[#3b3a35]">
        {items.map((item, index) => (
          <li key={index} className="border-t border-dashed border-[#e6e2d6] pt-2 first:border-t-0 first:pt-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function GovernanceCard({
  title,
  body,
}: {
  title: React.ReactNode;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[#e6e2d6] bg-white p-5">
      <h3 className="font-serif italic text-[22px] leading-tight">{title}</h3>
      <p className="mt-3 text-[13.5px] leading-relaxed text-[#3b3a35]">{body}</p>
    </div>
  );
}

export default function GovernanceMock() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <PageHeader
        eyebrow={<T nl="Mock 06 · eigenaarschap en rollen" en="Mock 06 · ownership and roles" />}
        title={<T nl="Rollen & governance — van, voor en door samenleving" en="Roles & governance — from, for, and by society" />}
        subtitle={
          <T
            nl="Deze mock maakt expliciet dat Uitwijken.nl niet van de gemeente en niet van een bedrijf is. De drie maatschappelijke rollen doen mee in het product en in het bouwproces."
            en="This mock makes explicit that Uitwijken.nl is not owned by the city and not by a company. The three societal roles participate in the product and in the build process."
          />
        }
      />

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <RoleColumn
            role="resident"
            title={<T nl="Bewoners" en="Residents" />}
            items={[
              <T key="1" nl="Brengen behoeften, ervaringen, prioriteiten en energie in." en="Bring needs, experience, priorities, and energy." />,
              <T key="2" nl="Beantwoorden vragen, starten initiatieven, markeren plekken." en="Answer questions, start initiatives, mark places." />,
              <T key="3" nl="Dragen formele moderatie en buurtborden mee." en="Help carry formal moderation and local boards." />,
            ]}
          />
          <RoleColumn
            role="government"
            title={<T nl="Overheid" en="Government" />}
            items={[
              <T key="1" nl="Brengt plannen, budgetten, veiligheid, data en publieke verantwoordelijkheid in." en="Brings plans, budgets, safety, data, and public responsibility." />,
              <T key="2" nl="Stelt vragen in plaats van alles vooraf te beslissen." en="Asks questions instead of deciding everything upfront." />,
              <T key="3" nl="Financiert of enabled zonder eigenaar te worden." en="Funds or enables without becoming owner." />,
            ]}
          />
          <RoleColumn
            role="entrepreneur"
            title={<T nl="Ondernemers" en="Entrepreneurs" />}
            items={[
              <T key="1" nl="Brengen diensten, ruimtes, lokale economie en praktische capaciteit in." en="Bring services, spaces, local economy, and practical capacity." />,
              <T key="2" nl="Kunnen events hosten en buurtvragen praktisch ondersteunen." en="Can host events and practically support local questions." />,
              <T key="3" nl="Doen mee zonder de laag commercieel te sturen." en="Participate without commercially steering the layer." />,
            ]}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <GovernanceCard
            title={<T nl="Formele communities" en="Formal communities" />}
            body={
              <T
                nl="Gebieden en thema's die raken aan budgetten, plannen of publieke besluiten krijgen een zichtbaar moderatiebord dat fysiek bestaat en aanspreekbaar is."
                en="Areas and themes that touch budgets, plans, or public decisions get a visible moderation board that exists physically and can be held accountable."
              />
            }
          />
          <GovernanceCard
            title={<T nl="Informele communities" en="Informal communities" />}
            body={
              <T
                nl="Bewonersinitiatieven, themagroepen en praktische netwerken kunnen lichter georganiseerd worden, zolang scope, normen en escalatie duidelijk blijven."
                en="Resident initiatives, theme groups, and practical networks can be organized more lightly, as long as scope, norms, and escalation stay clear."
              />
            }
          />
          <GovernanceCard
            title={<T nl="Society-owned" en="Society-owned" />}
            body={
              <T
                nl="De juridische vorm is nog open, maar de randvoorwaarde niet: de laag mag niet afhankelijk zijn van advertentieprikkels, platform lock-in of gemeentelijke surveillance."
                en="The legal form is still open, but the requirement is not: the layer cannot depend on ad incentives, platform lock-in, or municipal surveillance."
              />
            }
          />
          <GovernanceCard
            title={<T nl="Teamvorming" en="Team formation" />}
            body={
              <T
                nl="De volgende fase moet een projectlead, product/prototype lead, civic governance, technische data-capaciteit en lokale co-design capaciteit organiseren."
                en="The next phase must organize a project lead, product/prototype lead, civic governance, technical data capacity, and local co-design capacity."
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
