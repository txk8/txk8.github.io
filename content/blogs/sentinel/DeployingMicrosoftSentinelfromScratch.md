+++
author = "Kate"
title = "Deploying Microsoft Sentinel in Azure: A Practical Guide to Cloud Security Monitoring"
date = "12-20-2025"
description = "Hands-on lab showing how I deployed Microsoft Sentinel from scratch in Azure, configured data connectors, created analytics rules, automated incident response, and tested detections with a simulated attack."
+++

# Deploying Microsoft Sentinel from Scratch: Hands-On Lab

In this lab, I deployed Microsoft Sentinel from scratch in an Azure environment. I configured a workspace, connected key data sources, created analytics rules, and tested them with a simulated attack. The goal was to understand the full lifecycle of monitoring, detecting, and responding to security events in the cloud.

---

## Key Concepts

| Term | What it is | Why it matters |
|------|-------------------|----------------|
| **Workspace** | A Log Analytics space in Azure where data is stored | All Sentinel data (logs, alerts) lives here |
| **Sentinel** | Cloud SIEM tool for detecting, investigating, and responding to threats | Central point for security monitoring in Azure |
| **Data Connector** | A way to bring data from a service (VMs, Azure Activity, Defender, etc.) into Sentinel | Sentinel can only analyse data that’s connected |
| **Analytics Rule** | Logic that searches data for suspicious activity | Creates alerts or incidents automatically |
| **Automation Rule** | Steps that run automatically when an incident triggers | Saves time and ensures consistent response |
| **Workbook** | A dashboard to visualise logs and alerts | Helps teams understand activity at a glance |
| **Data Collection Rule (DCR)** | Defines what data is collected from specific resources | Ensures important security logs are captured |
| **NRT Query Rule** | Near real-time detection of threats | Speeds up alerting for urgent security issues |

---

## 1. Create a Log Analytics Workspace

1. In the Azure Portal, search for **Log Analytics workspaces** and click **Create**.
2. Fill in the details:
   - **Subscription**
   - **Resource Group**
   - **Name**
   - **Region**
3. Click **Review + Create**, then **Create** after validation.
4. ![Workspace Screenshot](/Screenshot2025-12-10at15.43.22.png)

---

## 2. Deploy Microsoft Sentinel

1. Search for **Microsoft Sentinel** in the portal.
2. Click **Create**, select your workspace, then **Add**.
3. ![Sentinel Workspace Screenshot](/static/img/Screenshot 2025-12-10 at 16.05.33.png)

---

## 3. Assign a Sentinel Role to a User

1. Navigate to the resource group → **Access Control (IAM)** → **Add role assignment**.
2. Search for **Microsoft Sentinel Contributor** and select it.
3. Assign to a user (e.g., Operator1) → **Review + Assign**.
4. ![Role Assignment Screenshot](path-to-your-image.png)

---

## 4. Configure Data Retention

1. Go to the Log Analytics workspace → **Settings → Usage and estimated costs → Data Retention**.
2. Change the retention from 30 days to 180 days → **OK**.
3. ![Data Retention Screenshot](path-to-your-image.png)

---

## 5. Deploy Content Hub Solutions

1. Go to Sentinel → **Content Management → Content Hub**.
2. Search and **Install**:
   - Windows Security Events
   - Azure Activity
   - Microsoft Defender for Cloud
3. ![Content Hub Screenshot](path-to-your-image.png)

---

## 6. Configure Data Connectors

### Azure Activity

1. In Content Hub → **Azure Activity → Manage → Open connector page**.
2. Launch **Azure Policy Assignment Wizard**.
3. Enter subscription and version; select your workspace.
4. Tick **Create remediation task**, leave default policy → **Review + Create → Create**.
5. ![Azure Activity Connector Screenshot](path-to-your-image.png)

### Microsoft Defender for Cloud

1. Open the connector page → Toggle **Connected** → Ensure **Bi-directional sync** is enabled.
2. ![Defender Connector Screenshot](path-to-your-image.png)

---

## 7. Create Analytics Rules

### Scheduled Rule

1. Sentinel → **Configuration → Analytics → Rule templates**.
2. Search: *Suspicious number of resource creation or deployment activities*.
3. Create rule, set **Query scheduling** to run every 1 hour → **Review + Create → Save**.
4. ![Analytics Rule Screenshot](path-to-your-image.png)

### NRT Query Rule

1. Configuration → **Analytics → Create → NRT query rule**.
2. Name it, select **Privilege escalation** MITRE ATT&CK tactic.
3. Enter KQL query:

```kql
// Example KQL
SecurityEvent
| where EventID == 4672
| summarize count() by Account, bin(TimeGenerated, 1h)
```

###  Configure Automation
Sentinel → Configuration → Automation → Create.
Pick Assign owner, select Operator1 → Apply.

###  Simulate Privilege Escalation
VM1 → Operations → Run command → RunPowerShellScript.
Enter test script simulating privilege escalation.
Verify incident is created in Sentinel → Open incident → View details.

###  Reflection
-How to deploy Sentinel end-to-end in Azure.
-How data flows from source → log analytics → alerts → incidents.
-How to create analytics rules (scheduled + near real-time).
-How to automate responses with automation rules.
-How to validate detections with simulated attacks.






