import type { CardContent, RenderOptions } from './types';

export const CLAWMAMA_SOCIAL_CARD = Object.freeze({
  template: 'ember', theme: 'ember', preset: 'og', width: 1200, height: 630,
});

export type SocialCardDefinition = { route: string; key: string; content: CardContent };

export const PUBLIC_WEBSITE_SOCIAL_CARDS: readonly SocialCardDefinition[] = [
  { route: '/', key: 'home', content: { eyebrow: 'Ready-to-use agents', title: 'AI agents inside your chat apps', subtitle: 'Create, connect, and use agents without running infrastructure.', footer: 'clawmama.run' } },
  { route: '/blog/', key: 'blog', content: { eyebrow: 'Blog', title: 'Practical notes on useful agents', subtitle: 'Short notes on Skills, memory, workflows, and chat-based agents.', footer: 'clawmama.run' } },
  { route: '/zh/blog/', key: 'zh-blog', content: { lang: 'zh', eyebrow: '博客', title: '关于好用 Agent 的实践笔记', subtitle: '记录 Skill、托管 Agent、聊天渠道、记忆和工作流。', footer: 'clawmama.run' } },
  { route: '/ecosystem/', key: 'ecosystem', content: { eyebrow: 'Ecosystem', title: 'Hosted agents for agent ecosystems', subtitle: 'Skills, channels, and partner workflows packaged into launchable agents.', footer: 'clawmama.run' } },
  { route: '/zh/ecosystem/', key: 'zh-ecosystem', content: { lang: 'zh', eyebrow: '生态', title: '面向 Agent 生态的托管 Agent', subtitle: '把 Skill、聊天渠道和合作方工作流打包成可启动的 Agent。', footer: 'clawmama.run' } },
];

export const WEB_CONSOLE_PAGE_SOCIAL_CARDS: Readonly<Record<string, CardContent>> = Object.freeze({
  console: { eyebrow: 'Web Console', title: 'Create and manage your AI assistants', subtitle: 'Launch ready-to-use agents, install Skills, and connect your chat apps.', footer: 'app.clawmama.run' },
  search: { lang: 'zh', eyebrow: 'ClawMama', title: '搜索 AI Agents 和 Skills', subtitle: '浏览即用型 Agents 或单个 Skills，快速创建已经准备好的 AI 助手。', footer: 'app.clawmama.run' },
  agents: { lang: 'zh', eyebrow: 'Agents 目录', title: '即用型 AI Agents', subtitle: '面向具体场景的 AI Agents，创建后即可在常用聊天软件里使用。', footer: 'app.clawmama.run' },
  skills: { lang: 'zh', eyebrow: 'Skills 目录', title: 'OpenClaw 与 Hermes Skills', subtitle: '可复用能力，一条链接装进你的 AI 助手。', footer: 'app.clawmama.run' },
  launch: { lang: 'zh', eyebrow: '开始使用', title: '你的 AI 助手，2 分钟就绪', subtitle: 'ClawMama 为你创建并托管助手，不需要自己部署或运维。', footer: 'app.clawmama.run' },
});

export function clawMamaSocialCard(content: CardContent): RenderOptions {
  return { template: CLAWMAMA_SOCIAL_CARD.template, theme: CLAWMAMA_SOCIAL_CARD.theme, preset: CLAWMAMA_SOCIAL_CARD.preset, content };
}
