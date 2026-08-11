/* ============================================================
   EDIT ME — drives Projects, Field Notes, Skills filter, and
   the Architecture diagram.
   ============================================================ */

const PROJECTS = [
  {
    name: "Enterprise Banking Data Platform",
    year: "2023 — Present",
    status: "Production",
    highlights: [
      "Consolidated core banking, lending, and member data — plus vendor files and REST APIs — into one centralized, governed platform",
      "Built a metadata-driven ingestion framework so onboarding a new source meant configuration, not a new pipeline",
      "Orchestrated ingestion with Azure Data Factory and Talend, landed raw data in Azure Blob Storage, and modeled it in Snowflake",
      "Organized transformations in dbt across staging, intermediate, and mart layers with automated tests and lineage",
      "Designed for safe recovery — watermarks, run IDs, and reconciliation meant a failed job could restart without losing or duplicating data"
    ],
    outcomes: ["Metadata-driven source onboarding", "Automated data-quality testing", "Recoverable, auditable pipeline runs"],
    stack: ["Azure Data Factory", "Talend", "Snowflake", "DBT", "Azure Blob Storage", "Python", "Power BI"]
  },
  {
    name: "Annuities Data Platform",
    year: "2023 — 2024",
    status: "Production",
    highlights: [
      "Modernized annuity policy, premium, withdrawal, and valuation data processing, moving key workloads from on-prem infrastructure to AWS",
      "Orchestrated batch pipelines with Airflow across S3, Redshift, DynamoDB, and RDS/PostgreSQL",
      "Moved streaming ingestion from Kafka to Kinesis to reduce operational overhead for a team not staffed to run Kafka",
      "Ran large-scale transformations on Spark via EMR, with Lambda handling lightweight event-driven processing",
      "Built reusable Redshift views and stored procedures for actuarial, finance, and investment reporting, with reconciliation that could prove the warehouse matched the source down to the affected policy or batch"
    ],
    outcomes: ["AWS-native batch + streaming platform", "Reduced streaming operational complexity", "Auditable financial reconciliation"],
    stack: ["AWS", "Amazon Redshift", "Apache Airflow", "Amazon Kinesis", "Spark on EMR", "PostgreSQL (RDS)", "DynamoDB"]
  },
  {
    name: "Enterprise Lakehouse Modernization",
    year: "2022 — 2023",
    status: "Production",
    highlights: [
      "Designed a medallion lakehouse (Bronze/Silver/Gold) on Azure Data Lake Storage Gen2 and Delta Lake to replace duplicated, point-to-point ETL jobs",
      "Used Azure Data Factory for batch orchestration and Databricks (PySpark/Spark SQL) for scalable transformation",
      "Streamed selected real-time events through Kafka into Delta tables via Structured Streaming",
      "Applied CDC, SCD Type 2, and data-quality rules in the Silver layer to produce trusted, conformed datasets for BI and data science",
      "Made every run idempotent and replayable — immutable raw data, run IDs, Delta MERGE, and reconciliation before watermarks advanced"
    ],
    outcomes: ["Unified batch + streaming platform", "Reusable metadata-driven ingestion", "Idempotent, replayable pipeline runs"],
    stack: ["Azure Databricks", "Delta Lake", "Azure Data Factory", "ADLS Gen2", "Kafka", "PySpark", "Unity Catalog"]
  },
  {
    name: "Real-Time Fraud Detection & Decisioning Platform",
    year: "2021 — 2022",
    status: "Production",
    highlights: [
      "Built the event pipeline behind a real-time transaction decisioning system that had to approve, block, step-up, or queue transactions for manual review in under a few seconds",
      "Owned the Kafka event contracts, stream processing, and low-latency feature computation that fraud rules and ML scoring depended on",
      "Maintained durable, replayable raw transaction history and a full decision audit trail — every input, feature, score, and rule hit — for compliance and model retraining",
      "Built monitoring around stream lag, decision latency, and data quality so degraded feature freshness was caught before it affected a decision"
    ],
    outcomes: ["Sub-second transaction decisioning", "Full decision audit trail", "Real-time feature pipeline for ML scoring"],
    stack: ["Kafka", "Spark Structured Streaming", "Redis", "Python", "Amazon S3", "Snowflake"]
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
