import fetch from 'node-fetch';

async function createBlogPost(blogData) {
  try {
    const response = await fetch('http://localhost:5000/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    });
    
    const result = await response.json();
    console.log(`Post created: ${blogData.title}`);
    return result;
  } catch (error) {
    console.error(`Error creating post ${blogData.title}:`, error);
    throw error;
  }
}

async function main() {
  const blogPosts = [
    {
      title: "Singapore Mandates Climate Disclosures for Large Companies",
      slug: "singapore-mandates-climate-disclosures",
      summary: "Singapore's ACRA and SGX RegCo have accepted mandatory climate-related disclosure requirements, with phased implementation starting in 2027 for large non-listed companies.",
      content: "<p>Singapore's Accounting and Corporate Regulatory Authority (ACRA) and Singapore Exchange Regulation (SGX RegCo) accepted the Sustainability Reporting Advisory Committee's (SRAC) climate disclosure recommendations after public consultation, with minor refinements. Singapore's Second Minister for Finance announced mandatory climate-related disclosures, phased in per the recommendations.</p><p>For large U.S.-based multinationals in Singapore, key requirements for large non-listed companies (annual revenue ≥ S$1 billion [~US$750 million] and assets ≥ S$500 million [~US$375 million], based on two prior fiscal years) include:</p><p>Mandatory climate reporting starts in fiscal 2027. ACRA will review in 2027 whether to lower thresholds, considering global trends and implementation experience.</p><p>Exemptions apply if a parent company (local or foreign) prepares climate or sustainability reports meeting Singapore's requirements or equivalent standards (e.g., European Sustainability Reporting Standards). The subsidiary's activities must be included, and the report publicly available. For reports using standards like Global Reporting Initiative or Task Force on Climate-Related Financial Disclosures, a three-year exemption (2027–2029) applies, with ACRA reviewing potential extensions.</p><p>From fiscal 2027, large non-listed companies must report International Sustainability Standards Board-aligned disclosures, including Scope 1 and 2 emissions. Scope 3 emissions reporting is deferred until at least 2029, with two years' notice. From 2029, external limited assurance on Scope 1 and 2 emissions is required from an ACRA-registered audit firm or Singapore Accreditation Council-accredited firm.</p><p>Climate reporting aligns with financial statement timelines. Companies, directors, and officers must comply with legal requirements, including record-keeping, circulating disclosures and auditor reports, filing with regulators, revising defective disclosures, and appointing competent auditors.</p>",
      author: "James Wong",
      imageUrl: "https://images.unsplash.com/photo-1626625515798-c839e50c6a67?q=80&w=1740&auto=format&fit=crop",
      category: "Regulations"
    },
    {
      title: "Singapore-Listed Firms Progress in Climate Reporting",
      slug: "singapore-listed-firms-progress-climate-reporting",
      summary: "Singapore-listed companies have made significant progress in climate reporting, but only 28% fully meet TCFD framework requirements as mandatory reporting for all listed companies approaches in 2025.",
      content: "<p>Per The Strait Times, Singapore-listed companies have advanced in climate reporting, but only 28% fully met the Task Force on Climate-Related Financial Disclosures (TCFD) framework, a global standard for reporting climate-related impacts, risks, and opportunities.</p><p>With mandatory climate reporting for all listed companies starting in 2025, Professor Lawrence Loh of NUS Business School's Centre for Governance and Sustainability stressed the urgency of closing gaps.</p><p>A March 11 review by the Centre and Singapore Exchange Regulation (SGX RegCo) found 97% of 529 reviewed companies made at least one TCFD-aligned disclosure, up from 73% in 2023.</p><p>However, only 28% provided all 11 recommended disclosures, such as board oversight and short-, medium-, and long-term climate risks.</p><p>TCFD compliance has been mandatory for finance, agriculture, food, forest products, and energy sectors since 2023.</p><p>From 2025, all sectors must comply. Progress was notable in governance disclosures (95% in 2024 vs. 47% in 2023) and metrics/targets (92%).</p><p>Yet, fewer companies disclosed climate impacts on strategy or risk management, with under 50% integrating climate risks into broader risk frameworks.</p><p>SGX RegCo CEO Tan Boon Gin noted progress but urged better TCFD adoption to ease the transition to International Sustainability Standards Board standards.</p><p>From 2025, companies must report Scope 1 (direct) and Scope 2 (indirect, e.g., purchased electricity) emissions.</p><p>Scope 3 (value chain) emissions, reported by only 29% compared to 80% for Scope 1 and 87% for Scope 2, remain challenging.</p><p>SGX RegCo's Michael Tang said Scope 3 disclosures may start in 2026, pending review.</p><p>Prof Loh advised companies to enhance board oversight details, link climate issues to strategy, integrate risks holistically, clarify targets (e.g., base year, timeframe), and begin Scope 3 reporting with measurable metrics like business travel.</p>",
      author: "Li Mei",
      imageUrl: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1742&auto=format&fit=crop",
      category: "ESG Reporting"
    }
  ];

  for (const post of blogPosts) {
    await createBlogPost(post);
  }

  console.log('All blog posts created successfully!');
}

main().catch(console.error);