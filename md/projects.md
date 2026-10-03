# Projects Master Database

## Portfolio Matrix

| Project Name | Domain / Type | Role | Core Technologies | Primary Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Nursing Home Management SaaS** | Healthcare / Cloud SaaS | Technical Lead / Lead Developer | .NET, Azure, Kubernetes, Docker, SQL Server | Modernized legacy desktop to SaaS; 15,000+ staff across 120+ facilities |
| **Together (Relationship Check-In)** | Mobile Application | Mobile / Software Developer | React Native, Expo, Firebase (Auth, Firestore, FCM) | 5,000+ users, 4.8★ rating, 99.9% push notification delivery |
| **Financial Transaction Classifier** | AI / Machine Learning | AI / Software Developer | Python, Azure AI / Foundry, LLMs, BERT, SetFit | Accuracy improved from 68% to 94%; 65% LLM cost reduction |
| **Enterprise Web Applications** | Enterprise SaaS / FinTech | Senior Software Engineer | C#, .NET Core, Angular, SQL Server, Azure | High-throughput APIs processing 10M+ monthly transactions |
| **SMS Messaging Management** | Telecommunications / Web | Software Developer | Node.js, Express, MongoDB, React, Redux | 100,000+ monthly SMS; <80ms search query latency |

---

## Detailed Project Case Studies

### 1. Nursing Home Management SaaS Platform

**Industry:** Healthcare  
**Target Market:** United States  
**Application Type:** Cloud-Native Multi-Tenant SaaS / Legacy Desktop Modernization  
**Role:** Technical Lead / Senior Software Engineer  

#### Business Background & Problem Statement
The client operated an established, mission-critical legacy desktop application utilized by long-term care facilities and nursing homes. The system suffered from deployment friction, scalability constraints, and lack of remote accessibility. The business objective was to perform a complete architectural modernization into a cloud-native SaaS platform supporting nationwide operations.

#### Core Business Functionality
- **Staff & Workforce Management:** Employee directory, certifications, credential tracking, and role-based access control.
- **Scheduling & Shift Management:** Multi-facility staff scheduling, open shift bidding, and schedule conflict resolution.
- **Timecards & Attendance:** Digital punch clock, overtime computation, and payroll integration.
- **Regulatory Compliance & Reporting:** Comprehensive state and federal healthcare compliance audit trails.
- **Facility Administration:** Multi-facility organizational hierarchy and tenant data isolation.

#### Architecture & Technical Design
- **Architecture Pattern:** Distributed Microservices, Domain-Driven Design (DDD), and Event-Driven Architecture.
- **Messaging & Decoupling:** Asynchronous communication and event streaming via **Azure Service Bus** (Queues & Topics).
- **API Management:** Unified API Gateway using **Azure API Management (APIM)** for rate limiting, security, and routing.
- **Cloud Infrastructure:** Serverless event processing with **Azure Functions** and container orchestration via **Kubernetes**.

#### Technology Stack
`C#` `.NET 8` `ASP.NET Core Web API` `SQL Server` `Entity Framework Core` `Azure App Service` `Azure Functions` `Azure Service Bus` `Azure Key Vault` `Azure APIM` `Docker` `Kubernetes` `GitLab CI/CD`

#### Key Engineering Challenges & Solutions
1. **Monolith Decomposition:** Decomposed complex desktop legacy logic into bounded microservices without causing service disruptions.
2. **Data Isolation & Multi-Tenancy:** Implemented resilient multi-tenant database partitioning strategies ensuring HIPAA/healthcare compliance.
3. **Automated CI/CD:** Designed zero-downtime rolling deployment pipelines using Docker containers on Kubernetes.

#### Key Metrics & Business Impact
- **Scale:** Supported **15,000+ active healthcare personnel** across **120+ facilities** nationwide.
- **Team Leadership:** Mentored and led a high-performing cross-functional team of **8 developers and QA engineers**.
- **Latency Reduction:** Achieved a **45% reduction in API response times** through caching and async processing.
- **Release Speed:** Cut release deployment cycles from **hours to under 15 minutes**.
- **Cost Efficiency:** Lowered cloud infrastructure and operational costs by **30%**.

---

### 2. Together — Relationship Check-In Mobile App

**Application Type:** Cross-Platform Mobile Application (iOS & Android)  
**Target Audience:** Couples  
**Role:** Mobile / Software Developer  

#### Product Overview & Purpose
A privacy-first mobile application designed to foster healthy relationships through structured weekly check-ins, asynchronous reflection, guided connection exercises, and relationship insights.

#### Core Features
- **Weekly Guided Check-Ins:** Collaborative prompts for communication and goal alignment.
- **Private Reflection Spaces:** Individual response staging before mutual revelation.
- **Appreciation & Connection Activities:** Habit-building positive reinforcement exercises.
- **Relationship Growth Insights:** Visual trends and engagement milestones.
- **Security & Privacy Controls:** One-tap account deletion, automated data purging, encrypted storage, and optional Google Sign-In.

#### Technology Stack
`React Native` `TypeScript` `JavaScript` `Expo` `Firebase Authentication` `Cloud Firestore` `Firebase Cloud Messaging (FCM)`

#### Key Responsibilities
- Engineered full cross-platform mobile functionality using React Native and Expo.
- Integrated Firebase Authentication with email/password and Google OAuth workflows.
- Architected Cloud Firestore NoSQL data schemas with strict security rules for user privacy.
- Implemented real-time push notification workflows via Firebase Cloud Messaging.
- Managed end-to-end Android build generation and Google Play Store deployment.

#### Key Metrics & Business Impact
- **User Base:** Onboarded **5,000+ active users** with a **4.8 / 5.0 rating** on the Google Play Store.
- **Push Delivery:** Maintained a **99.9% push notification delivery rate** across varied Android device types.
- **Data Security:** Maintained zero data security incidents with automated end-to-end user data purge protocols.

---

### 3. Financial Transaction Classification Engine (Hybrid AI/ML System)

**Domain:** FinTech / Intelligent Automation  
**Application Type:** Hybrid AI/ML Classification Pipeline  
**Role:** AI / Software Developer  

#### Problem Statement
Financial accounting systems require high-accuracy classification of raw, unstructured transaction descriptions into 40+ standardized chart-of-accounts categories. The baseline single-prompt LLM implementation had unacceptable error rates (~68% accuracy) and excessive token overhead.

#### Solution Architecture: Two-Tier Hybrid Classification
1. **Tier 1 (Fast Screening & Top-3 Candidate Ranking):**
   - A single optimized LLM prompt analyses the transaction string and generates the top 3 candidate categories with calculated confidence scores.
2. **Tier 2 (Targeted Fallback Classification):**
   - If the Tier 1 confidence score falls below a predefined threshold, the system automatically routes the transaction to specialized, few-shot prompt models or fine-tuned classifiers (BERT/DeBERTa/SetFit) for granular disambiguation.

#### Technology Stack
`Python` `Azure AI / Azure Foundry` `Azure Machine Learning` `OpenAI / Large Language Models` `Prompt Engineering` `BERT` `DeBERTa` `SetFit` `PyTorch` `Scikit-learn` `XGBoost`

#### Key Engineering Responsibilities
- Designed the two-tier routing architecture and confidence score evaluation logic.
- Engineered few-shot prompts and JSON schema structured outputs.
- Generated and curated a balanced synthetic dataset of **50,000+ financial transaction records**.
- Explored fine-tuning transformer architectures (BERT, DeBERTa, SetFit) to minimize inference costs.
- Implemented automated evaluation scripts computing Precision, Recall, and F1-scores.

#### Key Metrics & Quantitative Impact
- **Accuracy Improvement:** Boosted overall transaction classification accuracy from **68% to 94%**.
- **Cost Reduction:** Slashed LLM token usage and API costs by **65%** via confidence-based early exit routing.
- **Latency Optimization:** Reduced average processing latency by **50%** for high-confidence transactions.
- **Dataset Scale:** Trained and benchmarked models against **50,000+ synthetic and annotated transactions** across **40+ categories**.

---

### 4. Enterprise Web Applications & Portals

**Domain:** Enterprise Operations & B2B Services  
**Application Type:** Multi-Tenant Web Applications & REST Microservices  
**Role:** Senior Software Engineer  

#### Project Scope & Overview
Architected and built scalable enterprise portal modules supporting multi-tenant workflows, financial integrations, and real-time operational reporting for US/UK corporate clients.

#### Technology Stack
`C#` `.NET Core` `ASP.NET Core Web API` `SQL Server` `Entity Framework Core` `Angular` `TypeScript` `Microsoft Azure`

#### Key Responsibilities & Highlights
- Developed high-throughput RESTful API endpoints handling millions of monthly business records.
- Modeled normalized database schemas, stored procedures, and indexes in SQL Server.
- Built dynamic, modular frontend dashboards and administration portals in Angular.
- Standardized coding guidelines, unit test suites (achieving >85% code coverage), and automated PR review workflows.

---

### 5. SMS & Messaging Management System

**Domain:** Telecommunications & Customer Communication  
**Application Type:** Full-Stack Web Application & Search Engine  
**Role:** Software Developer  

#### Project Scope & Overview
Engineered a centralized communication management module enabling real-time indexing, search, filtering, and conversation tracking across high-volume SMS records.

#### Features & Capabilities
- Contact directory and message history timeline.
- Multi-parameter message search, faceted filtering, and paginated record views.
- Real-time outbound SMS dispatch and inbound status webhook tracking.

#### Technology Stack
`Node.js` `Express` `MongoDB` `React` `Redux` `JavaScript`

#### Key Metrics & Technical Deliverables
- **Scale:** Handled ingestion and search indexing for **100,000+ monthly inbound and outbound SMS records**.
- **Search Latency:** Optimized compound MongoDB indexes, reducing search and pagination response times to **<80ms**.
- **User Productivity:** Accelerated customer support response times through structured contact conversation threads.
