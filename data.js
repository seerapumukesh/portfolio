/* ============================================================
   EDIT ME — drives Projects, Blog, and the Skills filter.
   ============================================================ */

const PROJECTS = [
  {
    name: "Enterprise Snowflake Migration",
    year: "2023",
    status: "Production",
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
    year: "2023 — 2024",
    status: "Production",
    highlights: [
      "Built event-driven ingestion using REST APIs",
      "Automated Azure Data Factory pipelines",
      "Enabled near real-time dashboards"
    ],
    stack: ["Azure Data Factory", "REST APIs", "Event-Driven", "Power BI"]
  },
  {
    name: "Analytics Data Platform",
    year: "2024 — Present",
    status: "Production",
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

const SKILLS = [
  { name: "AWS", cat: "Cloud" }, { name: "S3", cat: "Cloud" }, { name: "EC2", cat: "Cloud" },
  { name: "EMR", cat: "Cloud" }, { name: "Redshift", cat: "Cloud" }, { name: "Lambda", cat: "Cloud" },
  { name: "Glue", cat: "Cloud" }, { name: "Kinesis", cat: "Cloud" }, { name: "Athena", cat: "Cloud" },
  { name: "DynamoDB", cat: "Cloud" }, { name: "Azure Data Factory", cat: "Cloud" }, { name: "Databricks", cat: "Cloud" },
  { name: "Synapse Analytics", cat: "Cloud" }, { name: "ADLS", cat: "Cloud" },

  { name: "PySpark", cat: "Processing" }, { name: "Spark SQL", cat: "Processing" },
  { name: "Spark Streaming", cat: "Processing" }, { name: "Kafka", cat: "Processing" },
  { name: "Hadoop", cat: "Processing" }, { name: "Hive", cat: "Processing" },

  { name: "Snowflake", cat: "Warehousing" }, { name: "Snowpipe", cat: "Warehousing" },
  { name: "Amazon Redshift", cat: "Warehousing" }, { name: "PostgreSQL", cat: "Warehousing" },
  { name: "SQL Server", cat: "Warehousing" }, { name: "Amazon RDS", cat: "Warehousing" },

  { name: "Apache Airflow", cat: "Orchestration" }, { name: "DBT", cat: "Orchestration" },
  { name: "Talend", cat: "Orchestration" }, { name: "Informatica", cat: "Orchestration" },
  { name: "SSIS", cat: "Orchestration" },

  { name: "Power BI (DAX)", cat: "BI" }, { name: "Tableau", cat: "BI" }, { name: "Qlik Sense", cat: "BI" },
  { name: "Pandas", cat: "BI" }, { name: "NumPy", cat: "BI" }, { name: "Spark ML", cat: "BI" },

  { name: "Python", cat: "DevOps" }, { name: "SQL", cat: "DevOps" }, { name: "T-SQL", cat: "DevOps" },
  { name: "PL/SQL", cat: "DevOps" }, { name: "Git", cat: "DevOps" }, { name: "GitHub", cat: "DevOps" },
  { name: "Bitbucket", cat: "DevOps" }, { name: "Jenkins", cat: "DevOps" }, { name: "CI/CD", cat: "DevOps" }
];
