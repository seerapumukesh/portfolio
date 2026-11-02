// Public report entries only. Never add confidential workbooks or authenticated embed links.
// Each report: { title, tool: 'Tableau' | 'Power BI', question, approach, insight,
//   url, image: 'reports/example.webp', imageAlt, embedUrl (optional public embed) }
window.PORTFOLIO_REPORTS = [
  {
    title: 'Inside the Netflix catalog', tool: 'Tableau · Content analytics',
    question: 'How does the catalog vary by country, genre, content type, and year?',
    approach: 'A geographic view, genre and rating comparisons, and a timeline of titles added. Type and title filters connect the catalog overview with individual title details.',
    insight: 'Compare the movie and TV mix, then explore how genres, ratings, and geographic coverage differ within the published dataset.',
    url: 'https://public.tableau.com/app/profile/mukesh.seerapu/viz/Netflix_17121816818000/Netflix',
    image: 'reports/netflix.png', imageAlt: 'Mukesh’s Netflix Tableau dashboard showing country distribution, content ratings, genres, and titles added over time.'
  },
  {
    title: 'Stock performance in context', tool: 'Tableau · Financial analytics',
    question: 'How did a stock move over a selected period, and how does it compare with the S&P 500?',
    approach: 'Stock and date selectors bring together price trends, volume, daily returns, and a benchmark comparison. Ranked gainers and losers add market context.',
    insight: 'Explore price movement alongside trading volume and benchmark performance. This portfolio uses historical data published in April 2024, not a live market feed.',
    url: 'https://public.tableau.com/app/profile/mukesh.seerapu/viz/StockAnalysis-04_04_2024/StockAnalysis',
    image: 'reports/stock-analysis.png', imageAlt: 'Mukesh’s stock analysis Tableau dashboard with price measures, stock trend, S&P 500 comparison, trading volume, and daily returns.'
  }
];

window.PORTFOLIO_WORK = [
  {
    id: 'banking', url: 'projects/banking.html', category: 'engineering', number: '01', label: 'Banking · Data platform',
    title: 'One trusted view of banking data.',
    summary: 'Bringing core banking, lending, and member data together so reporting starts from a consistent foundation.',
    metric: '8+', metricLabel: 'source systems consolidated',
    stack: ['Snowflake', 'dbt', 'Azure', 'SQL'],
    question: 'How do you make reporting reliable when the same business data lives across disconnected systems?',
    approach: 'I built a metadata-driven ingestion framework, organized dbt transformations into staging, intermediate, and mart layers, and added automated tests and schema validation. Watermarks, run IDs, and reconciliation make failed runs recoverable.',
    result: 'A centralized warehouse with reusable source onboarding, tested transformations, and traceable data for downstream reporting.',
    evidence: 'Professional experience · Architecture summary; proprietary data and code are not published.'
  },
  {
    id: 'reporting', url: 'projects/reporting.html', category: 'analytics', number: '02', label: 'Analytics · Business intelligence',
    title: 'From recurring reports to usable answers.',
    summary: 'Power BI and Qlik Sense reporting that helps business teams work from shared data and spend less time preparing reports.',
    metric: '40+', metricLabel: 'business users supported',
    stack: ['Power BI', 'DAX', 'Qlik Sense', 'Data modeling'],
    question: 'How can business users get consistent reporting without repeating the same manual preparation?',
    approach: 'I delivered Power BI and Qlik Sense dashboards on top of the enterprise data platform, connecting warehouse data to the reporting needs of business users.',
    result: 'Supported 40+ business users and reduced report generation time by 60%, as documented in my professional experience.',
    evidence: 'Professional experience · Report data is proprietary; this is a delivery summary, not a public dashboard.'
  },
  {
    id: 'annuities', url: 'projects/annuities.html', category: 'engineering', number: '03', label: 'Financial services · AWS',
    title: 'Reliable data for financial reporting.',
    summary: 'An AWS data platform for annuity policy, premium, withdrawal, and valuation data, with reconciliation built into the workflow.',
    metric: '30+', metricLabel: 'daily batch jobs orchestrated',
    stack: ['AWS', 'Airflow', 'Redshift', 'Spark'],
    question: 'How do you move financial data processing to the cloud while keeping reporting auditable?',
    approach: 'I orchestrated batch pipelines with Airflow across S3, Redshift, DynamoDB, and RDS; ran Spark transformations on EMR; and moved streaming ingestion from Kafka to Kinesis. Reusable views and stored procedures supported actuarial, finance, and investment reporting.',
    result: 'Dependency-aware orchestration for 30+ daily jobs and financial reconciliation that traces differences back to the affected policy or batch.',
    evidence: 'Professional experience · Generalized architecture; no client datasets or source code are shared.'
  },
  {
    id: 'lakehouse', url: 'projects/lakehouse.html', category: 'engineering', number: '04', label: 'Cloud modernization · Azure',
    title: 'A lakehouse built for consistent analytics.',
    summary: 'A layered data foundation that turns raw operational records into conformed datasets for BI and data science.',
    metric: '3', metricLabel: 'layers: Bronze, Silver, Gold',
    stack: ['Databricks', 'Delta Lake', 'PySpark', 'ADF'],
    question: 'How do you replace duplicated ETL jobs with a data foundation that teams can reuse?',
    approach: 'I designed a medallion lakehouse on ADLS Gen2 and Delta Lake, with ADF orchestration and Databricks transformations. CDC, SCD Type 2, and quality checks preserve history and standardize data before it reaches reporting.',
    result: 'Reusable ingestion and replayable pipeline runs, with immutable raw data and reconciliation before watermarks advance.',
    evidence: 'Professional experience · Generalized implementation summary.'
  }
];
