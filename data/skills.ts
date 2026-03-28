import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
    {
        id: "networking",
        label: "Networking",
        icon: "IconNetwork",
        skills: [
            { name: "TCP/IP", level: "proficient" },
            { name: "OSPF", level: "proficient" },
            { name: "IPv6", level: "proficient" },
        ],
    },
    {
        id: "security",
        label: "Security",
        icon: "IconShieldLock",
        skills: [
            { name: "Firewall Administration", level: "proficient" },
            { name: "VPN (WireGuard, IPSec)", level: "proficient" },
        ],
    },
    {
        id: "systems",
        label: "Systems",
        icon: "IconServer",
        skills: [
            { name: "Linux (RHEL / Debian)", level: "proficient" },
            { name: "Windows / Windows Server", level: "proficient" },
            { name: "Active Directory", level: "proficient" },
            { name: "Proxmox / VMware", level: "proficient" },
            { name: "Docker", level: "proficient" },
        ],
    },
    {
        id: "automation",
        label: "Automation & Tools",
        icon: "IconTerminal2",
        skills: [
            { name: "Powershell", level: "familiar" },
            { name: "Python", level: "familiar" },
            { name: "Bash", level: "familiar" },
            { name: "Git", level: "proficient" },
        ],
    },
    {
        id: "monitoring",
        label: "Monitoring",
        icon: "IconActivity",
        skills: [{ name: "Prometheus", level: "familiar" }],
    },
];
