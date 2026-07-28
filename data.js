/* ============================================================
   EDIT ME — this file drives the PROJECTS and ARTICLES sections.
   Add, remove, or edit entries below. No other files need to change.
   ============================================================ */

const PROJECTS = [
  {
    name: "financial-lakehouse-migration",
    tagline: "SQL Server → Snowflake lakehouse with SCD Type 2 history",
    description:
      "Reference architecture for migrating an on-prem SQL Server warehouse into Snowflake, including Snowpipe ingestion, DBT-based transformation and testing, and slowly changing dimension modeling to preserve historical accuracy for regulatory reporting.",
    stack: ["Snowflake", "DBT", "Airflow", "Python", "SQL"],
    status: "production",
    url: "https://github.com/seerapumukesh",
    year: "2024"
  },
  {
    name: "realtime-booking-stream",
    tagline: "Kafka → Spark Streaming pipeline for booking events",
    description:
      "Streaming pipeline that ingests booking and clickstream events through Kafka, processes them with Spark Streaming, and lands low-latency aggregates in Cassandra for downstream personalization services.",
    stack: ["Kafka", "Spark Streaming", "Scala", "Cassandra"],
    status: "production",
    url: "https://github.com/seerapumukesh",
    year: "2021"
  },
  {
    name: "airflow-dag-toolkit",
    tagline: "Reusable Airflow DAG patterns for batch orchestration",
    description:
      "A set of composable Airflow DAG templates and sensors used to orchestrate 30+ daily batch jobs across a data lake and warehouse, with dependency-aware scheduling and alerting baked in.",
    stack: ["Airflow", "Python", "AWS", "Redshift"],
    status: "production",
    url: "https://github.com/seerapumukesh",
    year: "2023"
  },
  {
    name: "adf-databricks-elt",
    tagline: "Azure Data Factory + Databricks ELT framework",
    description:
      "ELT framework moving data from Azure SQL, Blob Storage, and Synapse into Databricks, standardizing ingestion patterns across 15+ source systems with automated data quality checks.",
    stack: ["Azure Data Factory", "Databricks", "PySpark", "Synapse"],
    status: "production",
    url: "https://github.com/seerapumukesh",
    year: "2023"
  },
  {
    name: "dq-observability-layer",
    tagline: "Data quality + lineage monitoring for pipeline health",
    description:
      "Lightweight data quality and observability layer that runs schema validation and freshness checks on pipeline output, cutting ad-hoc data investigation requests roughly in half.",
    stack: ["DBT", "Python", "SQL", "Great Expectations"],
    status: "production",
    url: "https://github.com/seerapumukesh",
    year: "2024"
  },
  {
    name: "retail-inventory-saas",
    tagline: "B2B inventory & order management platform (founder project)",
    description:
      "Full-stack SaaS product for retail inventory and order tracking, built from the ground up — MySQL operational store, Informatica ETL for reporting, and a Django/JS application layer serving 200+ retail clients.",
    stack: ["Python", "Django", "MySQL", "Informatica", "JavaScript"],
    status: "archived",
    url: "https://github.com/seerapumukesh",
    year: "2017"
  }
];

const ARTICLES = [
  {
    title: "Designing Slowly Changing Dimensions that survive audits",
    excerpt:
      "Notes on SCD Type 2 modeling patterns for regulated financial data — what breaks in practice and how to design history tracking that holds up under a compliance review.",
    date: "2026-03-01",
    tag: "Data Modeling",
    url: "#"
  },
  {
    title: "Airflow DAGs vs. cron: what actually changes at scale",
    excerpt:
      "A field comparison from replacing cron-based scheduling with dependency-aware Airflow orchestration across 30+ daily jobs.",
    date: "2026-01-14",
    tag: "Orchestration",
    url: "#"
  },
  {
    title: "Notes from a PhD seminar: rethinking data lineage as a graph problem",
    excerpt:
      "Coursework notes connecting graph-theoretic approaches from a PhD seminar to production data lineage tracking — add your own writeup here.",
    date: "2026-05-10",
    tag: "Research",
    url: "#"
  }
];
