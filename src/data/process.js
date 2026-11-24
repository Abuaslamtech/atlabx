import { Compass, Layers, ShieldCheck, Activity } from 'lucide-react'

export const processSteps = [
  {
    id: 1,
    icon: Compass,
    title: 'Discovery & Architecture',
    description:
      'Thorough technical scoping, data flow modeling, schema design, and milestone definition before a line of production code is written.',
  },
  {
    id: 2,
    icon: Layers,
    title: 'Iterative Sprint Build',
    description:
      'Agile sprints with weekly milestone reviews. Clean modular code, automated test coverage, and transparent progress updates.',
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: 'Hardened Deployment',
    description:
      'Zero-downtime production cutovers with automated CI/CD pipelines, containerized environments, and live telemetry monitoring.',
  },
  {
    id: 4,
    icon: Activity,
    title: 'Observability & SLA Support',
    description:
      'Dedicated maintenance, real-time performance telemetry, rapid incident escalation, and continuous system evolution.',
  },
]