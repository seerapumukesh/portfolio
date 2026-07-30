/* ============================================================
   EDIT ME — drives Projects, Field Notes, Skills filter, and
   the Architecture diagram.
   ============================================================ */

const PROJECTS = [
  {
    name: "Audit-ready Snowflake modernization",
    year: "2023",
    status: "Production",
    highlights: [
      "Modernized a legacy SQL Server warehouse into Snowflake for regulated reporting",
      "Built a dbt transformation layer with automated tests and SCD Type 2 history",
      "Improved query performance by 45% while preserving traceable historical records"
    ],
    outcomes: ["45% faster analytical queries", "Automated data-quality testing", "Audit-ready historical modeling"],
    stack: ["Snowflake", "DBT", "SQL Server", "Airflow", "SQL"]
  },
  {
    name: "Event-driven financial reporting platform",
    year: "2023 — 2024",
    status: "Production",
    highlights: [
      "Designed Azure-based ingestion pipelines bringing operational financial data from REST APIs into governed reporting datasets",
      "Automated orchestration in Azure Data Factory to improve data freshness",
      "Reduced manual reporting work through end-to-end automation"
    ],
    outcomes: ["Automated source-to-report workflow", "Event-driven ingestion", "Faster reporting availability"],
    stack: ["Azure Data Factory", "REST APIs", "Event-Driven Architecture", "Power BI"]
  },
  {
    name: "Self-service analytics data products",
    year: "2024 — Present",
    status: "Production",
    highlights: [
      "Created reusable semantic datasets that gave business users consistent, trustworthy metrics",
      "Built a governed Power BI reporting layer on top of the semantic models",
      "Removed dependency on ad-hoc SQL requests for common business questions"
    ],
    outcomes: ["Reusable semantic models", "Governed business metrics", "Less analyst SQL dependency"],
    stack: ["Power BI", "DAX", "Snowflake", "SQL"]
  },
  {
    name: "Streaming booking-data platform",
    year: "2018 — 2021",
    status: "Production",
    highlights: [
      "Built real-time pipelines with Kafka and Spark Streaming to process booking events",
      "Served low-latency aggregates through Cassandra for downstream services",
      "Supported a high-growth e-commerce environment through 5x booking volume growth"
    ],
    outcomes: ["Real-time event processing", "Low-latency serving layer", "Scaled through 5x growth"],
    stack: ["Kafka", "Spark Streaming", "Scala", "Cassandra", "Azure"]
  }
];

const ARTICLES = [
  {
    title: "SCD Type 2 is not enough: designing history that stands up to an audit",
    excerpt:
      "An implementation-focused guide to historical data modeling in regulated systems — validity windows, late-arriving changes, source traceability, and the tests that prevent silent history errors.",
    date: "2026-03-01",
    tag: "Data Modeling",
    url: "articles/scd-that-survive-audits.html"
  },
  {
    title: "Airflow versus cron: the operational shift that matters at 30+ daily jobs",
    excerpt:
      "The real value of orchestration is not scheduling. It's visible dependencies, dependable backfills, meaningful alerting, and a clearer operating model for data teams.",
    date: "2026-01-14",
    tag: "Orchestration",
    url: "articles/airflow-vs-cron.html"
  },
  {
    title: "How we improved Snowflake query performance by 45%",
    excerpt:
      "A practical breakdown of warehouse sizing, clustering strategy, model design, and workload analysis — plus the trade-offs behind a measurable performance improvement.",
    date: "2026-05-10",
    tag: "Performance",
    url: "articles/snowflake-performance.html"
  },
  {
    title: "What makes a data platform ready for AI?",
    excerpt:
      "Before models, copilots, or retrieval systems can be trustworthy, teams need clean data contracts, lineage, quality checks, access controls, and clear ownership. Here's the infrastructure checklist.",
    date: "2025-11-01",
    tag: "AI Data Infrastructure",
    url: "articles/ai-ready-data-platform.html"
  }
];

const SKILLS = [
  // Cloud data platforms
  { name: "AWS", cat: "Cloud data platforms" }, { name: "S3", cat: "Cloud data platforms" },
  { name: "EC2", cat: "Cloud data platforms" }, { name: "EMR", cat: "Cloud data platforms" },
  { name: "Redshift", cat: "Cloud data platforms" }, { name: "Lambda", cat: "Cloud data platforms" },
  { name: "Glue", cat: "Cloud data platforms" }, { name: "Athena", cat: "Cloud data platforms" },
  { name: "DynamoDB", cat: "Cloud data platforms" }, { name: "Azure Data Factory", cat: "Cloud data platforms" },
  { name: "Databricks", cat: "Cloud data platforms" }, { name: "Azure Synapse", cat: "Cloud data platforms" },
  { name: "ADLS", cat: "Cloud data platforms" }, { name: "Snowflake", cat: "Cloud data platforms" },
  { name: "Amazon RDS", cat: "Cloud data platforms" },

  // Data modeling and transformation
  { name: "DBT", cat: "Data modeling & transformation" }, { name: "SCD Type 2 Modeling", cat: "Data modeling & transformation" },
  { name: "SQL", cat: "Data modeling & transformation" }, { name: "T-SQL", cat: "Data modeling & transformation" },
  { name: "PL/SQL", cat: "Data modeling & transformation" }, { name: "Talend", cat: "Data modeling & transformation" },
  { name: "Informatica", cat: "Data modeling & transformation" }, { name: "SSIS", cat: "Data modeling & transformation" },
  { name: "SQL Server", cat: "Data modeling & transformation" }, { name: "PostgreSQL", cat: "Data modeling & transformation" },

  // Distributed processing and streaming
  { name: "PySpark", cat: "Distributed processing & streaming" }, { name: "Spark SQL", cat: "Distributed processing & streaming" },
  { name: "Spark Streaming", cat: "Distributed processing & streaming" }, { name: "Kafka", cat: "Distributed processing & streaming" },
  { name: "Kinesis", cat: "Distributed processing & streaming" }, { name: "Hadoop", cat: "Distributed processing & streaming" },
  { name: "Hive", cat: "Distributed processing & streaming" }, { name: "Scala", cat: "Distributed processing & streaming" },
  { name: "Cassandra", cat: "Distributed processing & streaming" },

  // Orchestration and reliability
  { name: "Apache Airflow", cat: "Orchestration & reliability" }, { name: "CI/CD", cat: "Orchestration & reliability" },
  { name: "Git", cat: "Orchestration & reliability" }, { name: "GitHub", cat: "Orchestration & reliability" },
  { name: "Bitbucket", cat: "Orchestration & reliability" }, { name: "Jenkins", cat: "Orchestration & reliability" },

  // Data quality, governance & observability
  { name: "Automated Data Testing", cat: "Data quality, governance & observability" },
  { name: "Schema Validation", cat: "Data quality, governance & observability" },
  { name: "Data Lineage", cat: "Data quality, governance & observability" },
  { name: "dbt Tests", cat: "Data quality, governance & observability" },

  // Analytics enablement
  { name: "Power BI (DAX)", cat: "Analytics enablement" }, { name: "Qlik Sense", cat: "Analytics enablement" },
  { name: "Pandas", cat: "Analytics enablement" }, { name: "NumPy", cat: "Analytics enablement" },

  // AI/ML data readiness
  { name: "AWS SageMaker", cat: "AI/ML data readiness" }, { name: "Spark ML", cat: "AI/ML data readiness" },
  { name: "Python", cat: "AI/ML data readiness" }
];

const ARCH_LAYERS = [
  { label: "Sources", tools: [
    { name: "SQL Server", icon: "🗄️" }, { name: "REST APIs", icon: "🔌" }, { name: "Azure SQL", icon: "☁️" }
  ]},
  { label: "Ingest", tools: [
    { name: "Kafka", icon: "📡" }, { name: "Azure Data Factory", icon: "🏭" }, { name: "AWS Kinesis", icon: "🔄" }
  ]},
  { label: "Lake", tools: [
    { name: "Amazon S3", icon: "🪣" }, { name: "ADLS Gen2", icon: "🗃️" }, { name: "Blob Storage", icon: "📦" }
  ]},
  { label: "Process", tools: [
    { name: "PySpark", icon: "⚡" }, { name: "Databricks", icon: "🧱" }, { name: "dbt", icon: "🛠️" }
  ]},
  { label: "Warehouse", tools: [
    { name: "Snowflake", icon: "❄️" }, { name: "Redshift", icon: "🟥" }, { name: "Azure Synapse", icon: "🔷" }
  ]},
  { label: "Govern", tools: [
    { name: "dbt Tests", icon: "✅" }, { name: "Schema Validation", icon: "🧩" }, { name: "Data Lineage", icon: "🔍" }
  ]},
  { label: "Serve", tools: [
    { name: "Power BI", icon: "📊" }, { name: "Qlik Sense", icon: "📈" }, { name: "ML / APIs", icon: "🤖" }
  ]}
];
