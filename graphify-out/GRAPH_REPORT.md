# Graph Report - asingh51.github.io  (2026-09-03)

## Corpus Check
- 45 files · ~81,791 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 220 nodes · 311 edges · 19 communities (13 shown, 2 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Leadership & Locked Resume Access
- About/Writing Blog Pages
- Homepage & Public-Sector Case Studies
- Site Layout & Build Config
- CSS/Lint Dev Dependencies
- Career History & Employers
- Core Runtime Dependencies
- TypeScript Config
- JobMinglr Home Screenshot Elements
- package.json Metadata
- JobMinglr Employer Page Elements
- Sticker Avatar (Hero Asset)
- CI Deploy Pipeline
- Profile Photo
- Sticker2 Avatar Asset

## God Nodes (most connected - your core abstractions)
1. `Seo()` - 15 edges
2. `Abhay Resume-J.pdf (Staff Engineer resume)` - 15 edges
3. `Layout()` - 13 edges
4. `team-lead.pdf (Team Lead / TPM resume)` - 11 edges
5. `tpm.pdf (TPM resume)` - 11 edges
6. `compilerOptions` - 10 edges
7. `ArchDiagram()` - 8 edges
8. `verifyPasscode()` - 8 edges
9. `JobMinglr Landing Page Screenshot` - 8 edges
10. `scripts` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Abhay Resume-J.pdf (Staff Engineer resume)` --semantically_similar_to--> `team-lead.pdf (Team Lead / TPM resume)`  [INFERRED] [semantically similar]
  static/resumes/Abhay Resume-J.pdf → static/resumes/team-lead.pdf
- `Abhay Resume-J.pdf (Staff Engineer resume)` --semantically_similar_to--> `tpm.pdf (TPM resume)`  [INFERRED] [semantically similar]
  static/resumes/Abhay Resume-J.pdf → static/resumes/tpm.pdf
- `team-lead.pdf (Team Lead / TPM resume)` --semantically_similar_to--> `tpm.pdf (TPM resume)`  [INFERRED] [semantically similar]
  static/resumes/team-lead.pdf → static/resumes/tpm.pdf
- `Gate()` --calls--> `verifyPasscode()`  [EXTRACTED]
  src/pages/leadership.jsx → src/utils/passcode.js
- `TpmGate()` --calls--> `verifyPasscode()`  [EXTRACTED]
  src/pages/resume.jsx → src/utils/passcode.js

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Gatsby Build/Deploy Pipeline** — _github_workflows_gatsby, readme, gatsby_config, tailwind_config [INFERRED 0.75]
- **Abhay Singh's Three Resume Variants** — static_resumes_abhay_resume_j, static_resumes_team_lead, static_resumes_tpm, person_abhay_singh [INFERRED 0.85]
- **Illinois Disease Surveillance Project and Deloitte AWS Award** — project_state_illinois_disease_surveillance, award_deloitte_aws_innovation_challenge, employer_deloitte [EXTRACTED 1.00]
- **Candidate Evaluation UI Bundle (Card + Match Score + Verified Signals)** — static_images_projects_jobminglr_employers_candidate_card, static_images_projects_jobminglr_employers_match_score, static_images_projects_jobminglr_employers_verified_signals [EXTRACTED 1.00]
- **Hero Value Proposition (Headline + Stats Badge + Primary CTA + Match Score)** — static_images_projects_jobminglr_home_hero_headline, static_images_projects_jobminglr_home_stats_badge, static_images_projects_jobminglr_home_cta_get_matches, static_images_projects_jobminglr_home_match_score_ui [INFERRED 0.75]
- **App Engagement Notifications Shown in Mockup** — static_images_projects_jobminglr_home_application_sent_notification, static_images_projects_jobminglr_home_new_message_notification, static_images_projects_jobminglr_home_match_score_ui [INFERRED 0.70]

## Communities (19 total, 2 thin omitted)

### Community 0 - "Leadership & Locked Resume Access"
Cohesion: 0.08
Nodes (21): RequestPasscodeButton(), adr, conflict, delivery, Gate(), hiring, kpis, mentoring (+13 more)

### Community 1 - "About/Writing Blog Pages"
Cohesion: 0.11
Nodes (5): Layout(), PostLayout(), Seo(), posts, achievements

### Community 2 - "Homepage & Public-Sector Case Studies"
Cohesion: 0.12
Nodes (10): ArchDiagram(), cdcEdges, cdcNodes, centerBottom(), centerLeft(), centerRight(), centerTop(), testimonials (+2 more)

### Community 3 - "Site Layout & Build Config"
Cohesion: 0.13
Nodes (8): Gatsby Deploy Workflow, config, Footer(), ImpactCard(), Nav(), ThemeToggle(), featured, src/pages/*.jsx

### Community 4 - "CSS/Lint Dev Dependencies"
Cohesion: 0.12
Nodes (17): autoprefixer, eslint, gatsby-plugin-postcss, gh-pages, devDependencies, autoprefixer, eslint, gatsby-plugin-postcss (+9 more)

### Community 5 - "Career History & Employers"
Cohesion: 0.29
Nodes (16): Deloitte 2024 AWS Innovation Challenge (2nd place), Capgemini, Deloitte, Hitachi Payment Services, JobMinglr, John Deere, University of Texas, Abhay Singh (+8 more)

### Community 6 - "Core Runtime Dependencies"
Cohesion: 0.13
Nodes (15): deploy, @emailjs/browser, framer-motion, gatsby, lucide-react, dependencies, deploy, @emailjs/browser (+7 more)

### Community 7 - "TypeScript Config"
Cohesion: 0.14
Nodes (13): gatsby-*.ts, node, compilerOptions, esModuleInterop, isolatedModules, jsx, module, moduleResolution (+5 more)

### Community 8 - "JobMinglr Home Screenshot Elements"
Cohesion: 0.22
Nodes (13): Mobile App Phone Mockup, App Store / Google Play Download Badges, "Application Sent" Notification, "Browse Jobs" Secondary CTA Button, "Get My Matches — Free" CTA Button, "Hiring? JobMinglr for employers" Link, "Your next job, matched to you" Hero Headline, Senior Credit Analyst @ Monzo Job Listing Example (+5 more)

### Community 9 - "package.json Metadata"
Cohesion: 0.18
Nodes (10): description, name, private, scripts, build, clean, develop, format (+2 more)

### Community 10 - "JobMinglr Employer Page Elements"
Cohesion: 0.28
Nodes (9): Connect Your ATS Integration, Sarah Mitchell Candidate Card, Create a Free Employer Account CTA, Find the People Who Fit / Skip the Resume Pile Headline, Match Score Feature, Employers Page Top Navigation Bar, JobMinglr Employers Landing Page, Employer Plan Feature List (Free to Start, Unlimited Postings, Web/Mobile, ATS Integrations) (+1 more)

### Community 11 - "Sticker Avatar (Hero Asset)"
Cohesion: 0.50
Nodes (4): Cartoon Male Portrait Illustration, Die-cut Sticker Style, Hero Section Avatar Usage, Sticker Avatar Image

### Community 12 - "CI Deploy Pipeline"
Cohesion: 0.67
Nodes (3): build job, deploy job, EmailJS Integration (Actions secrets)

## Ambiguous Edges - Review These
- `Site Navigation Bar (Browse Jobs, Match, Job Seekers, Employers, Blog)` → `"Hiring? JobMinglr for employers" Link`  [AMBIGUOUS]
  static/images/projects/jobminglr/home.png · relation: conceptually_related_to

## Knowledge Gaps
- **73 isolated node(s):** `config`, `name`, `private`, `version`, `description` (+68 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 116 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Site Navigation Bar (Browse Jobs, Match, Job Seekers, Employers, Blog)` and `"Hiring? JobMinglr for employers" Link`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Seo()` connect `About/Writing Blog Pages` to `Leadership & Locked Resume Access`, `Homepage & Public-Sector Case Studies`, `Site Layout & Build Config`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `Layout()` connect `About/Writing Blog Pages` to `Leadership & Locked Resume Access`, `Homepage & Public-Sector Case Studies`, `Site Layout & Build Config`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `CSS/Lint Dev Dependencies` to `package.json Metadata`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Abhay Resume-J.pdf (Staff Engineer resume)` (e.g. with `team-lead.pdf (Team Lead / TPM resume)` and `tpm.pdf (TPM resume)`) actually correct?**
  _`Abhay Resume-J.pdf (Staff Engineer resume)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `team-lead.pdf (Team Lead / TPM resume)` (e.g. with `Abhay Resume-J.pdf (Staff Engineer resume)` and `tpm.pdf (TPM resume)`) actually correct?**
  _`team-lead.pdf (Team Lead / TPM resume)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `tpm.pdf (TPM resume)` (e.g. with `Abhay Resume-J.pdf (Staff Engineer resume)` and `team-lead.pdf (Team Lead / TPM resume)`) actually correct?**
  _`tpm.pdf (TPM resume)` has 2 INFERRED edges - model-reasoned connections that need verification._