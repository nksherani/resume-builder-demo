# Resume Builder Database & Documentation

This repository contains the structured master database for Naveed Ahmed Khan's professional portfolio, tailored resumes, cover letters, and career documentation.

---

## 📑 Master Documentation Index

| Section | Markdown File | Description |
| :--- | :--- | :--- |
| **Introduction** | [intro.md](file:///Volumes/Lexar/GitHub/resume-builder-demo/md/intro.md) | Executive summary, professional background, core strengths, and specializations |
| **Experience** | [experience.md](file:///Volumes/Lexar/GitHub/resume-builder-demo/md/experience.md) | Comprehensive work history, roles, responsibilities, team structures, and metrics |
| **Skills** | [skills.md](file:///Volumes/Lexar/GitHub/resume-builder-demo/md/skills.md) | Technical competency matrix across backend, cloud, frontend, databases, and AI |
| **Projects** | [projects.md](file:///Volumes/Lexar/GitHub/resume-builder-demo/md/projects.md) | Detailed case studies, system architecture, challenges, and measurable impact |
| **Education** | [education.md](file:///Volumes/Lexar/GitHub/resume-builder-demo/md/education.md) | University degrees, academic honors, certifications, courses, and workshops |
| **Achievements** | [achievements.md](file:///Volumes/Lexar/GitHub/resume-builder-demo/md/achievements.md) | Quantified KPIs, cost/latency savings, awards, promotions, and executive recognitions |

---

## 🎯 Tailored Resumes & Cover Letters per Job Description

| Target Role & Company | Target Job Description | Tailored Resume (MD / PDF) | Tailored Cover Letter (MD / PDF) | Primary Emphasis |
| :--- | :--- | :--- | :--- | :--- |
| **Lead .NET & Cloud Solutions Architect**<br>*(HealthBridge)* | [01-lead-dotnet-cloud-architect.md](file:///Volumes/Lexar/GitHub/resume-builder-demo/jobs/01-lead-dotnet-cloud-architect.md) | • [Markdown](file:///Volumes/Lexar/GitHub/resume-builder-demo/resumes/01-resume-lead-dotnet-cloud-architect.md)<br>• [PDF Version](file:///Volumes/Lexar/GitHub/resume-builder-demo/pdf/resumes/01-resume-lead-dotnet-cloud-architect.pdf) | • [Markdown](file:///Volumes/Lexar/GitHub/resume-builder-demo/cover-letters/01-cover-letter-lead-dotnet-cloud-architect.md)<br>• [PDF Version](file:///Volumes/Lexar/GitHub/resume-builder-demo/pdf/cover-letters/01-cover-letter-lead-dotnet-cloud-architect.pdf) | C#, .NET 8, Azure Architecture, AKS, Legacy Modernization, Team Leadership (8–10 devs), 15k users scale. |
| **Senior Full-Stack & AI Solutions Engineer**<br>*(Apex Financial)* | [02-senior-fullstack-ai-engineer.md](file:///Volumes/Lexar/GitHub/resume-builder-demo/jobs/02-senior-fullstack-ai-engineer.md) | • [Markdown](file:///Volumes/Lexar/GitHub/resume-builder-demo/resumes/02-resume-senior-fullstack-ai-engineer.md)<br>• [PDF Version](file:///Volumes/Lexar/GitHub/resume-builder-demo/pdf/resumes/02-resume-senior-fullstack-ai-engineer.pdf) | • [Markdown](file:///Volumes/Lexar/GitHub/resume-builder-demo/cover-letters/02-cover-letter-senior-fullstack-ai-engineer.md)<br>• [PDF Version](file:///Volumes/Lexar/GitHub/resume-builder-demo/pdf/cover-letters/02-cover-letter-senior-fullstack-ai-engineer.pdf) | Applied AI/LLMs, Two-Tier Hybrid Classifier (68% → 94% acc, 65% token cost cut), React/Next.js, Python, Mobile. |
| **Principal Backend Engineer (Distributed Systems)**<br>*(NexaScale)* | [03-principal-backend-distributed-systems.md](file:///Volumes/Lexar/GitHub/resume-builder-demo/jobs/03-principal-backend-distributed-systems.md) | • [Markdown](file:///Volumes/Lexar/GitHub/resume-builder-demo/resumes/03-resume-principal-backend-distributed-systems.md)<br>• [PDF Version](file:///Volumes/Lexar/GitHub/resume-builder-demo/pdf/resumes/03-resume-principal-backend-distributed-systems.pdf) | • [Markdown](file:///Volumes/Lexar/GitHub/resume-builder-demo/cover-letters/03-cover-letter-principal-backend-distributed-systems.md)<br>• [PDF Version](file:///Volumes/Lexar/GitHub/resume-builder-demo/pdf/cover-letters/03-cover-letter-principal-backend-distributed-systems.pdf) | High-Scale Systems (10M+ txns/mo), Azure Service Bus, Pub/Sub, Low Latency (45% faster), SQL & MongoDB tuning. |

---

## 📁 Directory Structure

```text
resume-builder-demo/
├── jobs/                   # Target job descriptions for resume tailoring & testing
│   ├── 01-lead-dotnet-cloud-architect.md
│   ├── 02-senior-fullstack-ai-engineer.md
│   └── 03-principal-backend-distributed-systems.md
├── cover-letters/          # Tailored cover letters (Markdown & PDF)
│   ├── 01-cover-letter-lead-dotnet-cloud-architect.md
│   ├── 01-cover-letter-lead-dotnet-cloud-architect.pdf
│   ├── 02-cover-letter-senior-fullstack-ai-engineer.md
│   ├── 02-cover-letter-senior-fullstack-ai-engineer.pdf
│   ├── 03-cover-letter-principal-backend-distributed-systems.md
│   └── 03-cover-letter-principal-backend-distributed-systems.pdf
├── resumes/                # Tailored resumes (Markdown & PDF)
│   ├── 01-resume-lead-dotnet-cloud-architect.md
│   ├── 01-resume-lead-dotnet-cloud-architect.pdf
│   ├── 02-resume-senior-fullstack-ai-engineer.md
│   ├── 02-resume-senior-fullstack-ai-engineer.pdf
│   ├── 03-resume-principal-backend-distributed-systems.md
│   └── 03-resume-principal-backend-distributed-systems.pdf
├── pdf/                    # Organized PDF distributions
│   ├── cover-letters/
│   └── resumes/
├── md/                     # Master profile database (Markdown)
│   ├── achievements.md
│   ├── education.md
│   ├── experience.md
│   ├── intro.md
│   ├── projects.md
│   └── skills.md
├── txt/                    # Raw source text files
│   ├── achievements.txt
│   ├── education.txt
│   ├── experience.txt
│   ├── intro.txt
│   ├── projects.txt
│   └── skills.txt
├── scripts/                # Build and PDF compiler scripts
│   └── generate-pdfs.js
└── README.md               # Repository documentation & directory index
```
