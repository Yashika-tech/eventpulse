# eventpulse
# 🚀 Hands-On CI/CD Project: Jenkins + ArgoCD + Helm ## EventPulse — A Simple Event-Driven Notification Service

**EventPulse** is a lightweight Node.js event-driven app that:
- Accepts events via a REST API (e.g., `order.placed`, `user.signup`)
- Logs events and returns a processed response
- Runs as a containerized microservice on Kubernetes

**What you'll learn end-to-end:**
```
Developer pushes code to GitHub
        ↓
Jenkins detects the push (CI)
  → Runs tests
  → Builds Docker image
  → Pushes image to Docker Hub
  → Updates Helm chart values (image tag)
        ↓
ArgoCD detects the Helm chart change (CD)
  → Syncs deployment to Kubernetes
  → Your app is live!
```

---

## 🧰 Tools You'll Install

| Tool | Purpose | Install Method |
|------|---------|----------------|
| Docker Desktop | Run containers + local K8s | Download from docker.com |
| kubectl | Talk to Kubernetes | Comes with Docker Desktop |
| Helm | Package K8s manifests | `brew install helm` or winget |
| Jenkins | CI server (runs in Docker) | Docker container |
| ArgoCD | CD tool (runs in K8s) | kubectl apply |
| Node.js | Build the app | nodejs.org |
| VS Code | Code editor | You already have this ✅ |
| GitHub account | Store code + Helm charts | You already have this ✅ |

---
