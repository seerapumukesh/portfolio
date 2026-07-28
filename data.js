/* ============================================================
   EDIT ME — this file drives the PROJECTS and ARTICLES sections.
   Add, remove, or edit entries below. No other files need to change.

   For ARTICLES: each entry's "url" must point to a real page (not "#").
   Duplicate articles/_template.html to add a new one, then link it here.
   ============================================================ */

const PROJECTS = [
  {
    name: "Enterprise Snowflake Migration",
    sheet: "SHEET 01",
    year: "2023",
    status: "production",
    highlights: [
      "Migrated SQL Server warehouse to Snowflake",
      "Built dbt transformation layer",
      "Automated testing",
      "Implemented SCD Type II",
      "Improved query performance by 45%"
    ],
    stack: ["Snowflake", "DBT", "SQL Server", "Airflow", "SQL"]
  },
  {
    name: "Real-time Financial Data Platform",
    sheet: "SHEET 02",
    year: "2023 — 2024",
    status: "production",
    highlights: [
      "Built event-driven ingestion using REST APIs",
      "Automated Azure Data Factory pipelines",
      "Enabled near real-time dashboards"
    ],
    stack: ["Azure Data Factory", "REST APIs", "Event-Driven", "Power BI"]
  },
  {
    name: "Analytics Data Platform",
    sheet: "SHEET 03",
    year: "2024 — Present",
    status: "production",
    highlights: [
      "Designed reusable semantic datasets",
      "Built Power BI reporting layer",
      "Reduced analyst SQL dependency"
    ],
    stack: ["Power BI", "DAX", "Snowflake", "SQL"]
  }
];

const ARTICLES = [
  {
    title: "Designing Slowly Changing Dimensions that survive audits",
    excerpt:
      "Notes on SCD Type 2 modeling patterns for regulated financial data — what breaks in practice and how to design history tracking that holds up under a compliance review.",
    date: "2026-03-01",
    tag: "Data Modeling",
    url: "articles/scd-that-survive-audits.html"
  },
  {
    title: "Airflow DAGs vs. cron: what actually changes at scale",
    excerpt:
      "A field comparison from replacing cron-based scheduling with dependency-aware Airflow orchestration across 30+ daily jobs.",
    date: "2026-01-14",
    tag: "Orchestration",
    url: "articles/airflow-vs-cron.html"
  },
  {
    title: "What a 45% query speedup actually took",
    excerpt:
      "A breakdown of the clustering, warehouse sizing, and transformation changes behind the Snowflake migration's performance gain.",
    date: "2026-05-10",
    tag: "Performance",
    url: "articles/snowflake-performance.html"
  }
];
