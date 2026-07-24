// ---------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav__toggle');
  const list = document.querySelector('.nav__list');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Duplicate ticker content so the CSS scroll loop (-50%) is seamless
  const track = document.querySelector('.ticker__track');
  if (track) {
    track.innerHTML = track.innerHTML + track.innerHTML;
  }
});

// ---------------------------------------------------------
// PROJECT DATA
// Edit this array to add, remove, or update projects.
// `status: "draft"` shows a "Details coming soon" pill —
// switch to "done" once you write the full description.
// ---------------------------------------------------------
const PROJECTS = [
  {
    title: "Yahoo Finance Equity Research",
    period: "Fall 2025 · CSE 487, Data Intensive Computing",
    status: "draft",
    summary: "Distributed data pipeline (Hadoop + Spark) over multi-year Yahoo Finance equity data. Time-series modeling, regression, and K-means clustering to relate macro variables to equity performance and group securities by risk/return profile.",
    tags: ["Hadoop", "Spark", "Python", "Clustering", "Time Series"],
    links: []
  },
  {
    title: "Financial Data Analytics — 150 Years of the S&P 500",
    period: "Fall 2025 · CSE 487, Data Intensive Computing",
    status: "draft",
    summary: "Built a structured, long-run dataset from 150+ years of S&P 500 history using Pandas and NumPy. Engineered time-series features and applied regression/clustering to surface persistent, regime-like patterns in equity returns.",
    tags: ["Python", "Pandas", "NumPy", "Regression"],
    links: []
  },
  {
    title: "Corporate Credit Risk Analysis",
    period: "Fall 2025 · MGA 306, Financial Reporting & Analysis",
    status: "draft",
    summary: "Excel-based credit model comparing Starbucks and McDonald's on profitability, liquidity, leverage, and cash flow. Calculated interest coverage, debt-to-capital, EBITDA coverage, and Altman Z-score to produce data-driven credit recommendations.",
    tags: ["Excel", "Credit Analysis", "Financial Modeling"],
    links: []
  },
  {
    title: "Consumer Loan Default & Rate Prediction",
    period: "UBDA Club Competition",
    status: "draft",
    summary: "Built three ML models on an anonymized consumer loan dataset — regressions on interest rate and default risk, plus a classifier for default risk. Found lending decisions are structured and largely predictable from the underlying data.",
    tags: ["Python", "Regression", "Classification"],
    links: []
  },
  {
    title: "Dealership Relational Database Design",
    period: "Database Design Coursework",
    status: "draft",
    summary: "Designed a scalable relational database (Access + Salesforce) for a car dealership, unifying sales and service records under a single customer record instead of two disconnected systems.",
    tags: ["Access", "Salesforce", "Database Design"],
    links: []
  }
];

function renderProjects() {
  const grid = document.querySelector('[data-project-grid]');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card">
      <div class="project-card__head">
        <h3>${p.title}</h3>
        ${p.status === 'draft'
          ? '<span class="status-pill status-pill--draft">Write-up coming</span>'
          : '<span class="status-pill">Complete</span>'}
      </div>
      <div class="project-card__meta">${p.period}</div>
      <p>${p.summary}</p>
      <div class="tag-row">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);
