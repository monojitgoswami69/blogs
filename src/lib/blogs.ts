import { BlogPost } from '../types/blog';

export const BLOGS_DATA: BlogPost[] = [
  {
    slug: 'agentrouter',
    title: 'AgentRouter AI Setup Guide',
    subtitle: 'Claude Code, OpenAI Codex & OpenCode Integration with Free Credits',
    description:
      'Complete step-by-step guide to configure AgentRouter with $175 in initial credits, a $50 referral bonus, and $25 daily check-in rewards for Claude Opus 5, GPT-5.6 Sol, GLM-5.3, and DeepSeek V4.',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    readingTime: '5 min read',
    tags: ['AI', 'CLI', 'Claude Code', 'OpenAI Codex', 'OpenCode', 'AgentRouter', 'Free Credits'],
    author: {
      name: 'Monojit Goswami',
      url: 'https://mgbuilds.in',
    },
    sections: [
      {
        id: 'account-setup',
        title: '1. Account Registration & Claiming Credits',
        orderedList: [
          'Registration: Sign up using the referral invitation link [https://agentrouter.org/register?aff=EZ5v](https://agentrouter.org/register?aff=EZ5v) to receive the full $175 initial credits and grant $50 in bonus credits to both accounts.',
          'GitHub Account Requirements: Sign in with a GitHub account that is at least 6 months old with adequate content and activity. Empty accounts, alt accounts, or newly created profiles are automatically flagged and blocked by anti-bot fraud filters (while exact algorithmic criteria remain undisclosed, established and lightly active accounts pass through without issue).',
          'Initial Balance: Once authenticated, your $175 balance is instantly credited to your dashboard wallet.',
          'Daily Bonus Synchronization: Daily credits ($25/day) are NEVER applied automatically. You must always log out and log back into your account each day to trigger token synchronization and claim the bonus.',
          'Generate API Token: Go to [Console > API Tokens](https://agentrouter.org/console/token) and click "Add Token". Provide a name, select "Never expires", toggle "Unlimited quota" (or custom limits), and copy your `sk-...` API key.',
        ],
        actionButton: {
          text: 'Visit AgentRouter →',
          url: 'https://agentrouter.org/register?aff=EZ5v',
        },
        notice: {
          type: 'info',
          title: 'Free Credits & Daily Bonus Notice',
          content:
            'New eligible accounts receive $175 upon registration. Signing up through this referral link also grants a $50 bonus, along with a $25 credit awarded for daily logins. Note that daily credits do not apply automatically; you must log out and log back in each day to trigger the daily quota synchronization.',
        },
      },
      {
        id: 'active-models',
        title: '2. Supported Models',
        lead: 'The following models are supported and available with your free account credits:',
        unorderedList: [
          '`claude-opus-5`',
          '`claude-opus-4-8`',
          '`gpt-5.6-sol`',
          '`glm-5.3`',
          '`deepseek-v4-flash`',
        ],
      },
      {
        id: 'client-installation',
        title: '3. Client Installation & Configuration',
        lead: 'Select your preferred AI coding client below to view the dedicated setup instructions for your operating system.',
        clientGuides: [
          {
            id: 'codex',
            title: 'OpenAI Codex',
            lead: 'Official @openai/codex CLI configured to route through the AgentRouter OpenAI-compatible API gateway.',
            collapsiblePrerequisites: {
              title: 'Prerequisites: Node.js (Optional)',
              content: 'Node.js 18 or newer is required to install the official Codex package.',
              code: 'node --version',
              list: [
                'macOS (Homebrew): `brew install node`',
                'Windows: Download LTS installer from nodejs.org',
                'Linux (Debian/Ubuntu): `curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt-get install -y nodejs`',
              ],
            },
            platforms: [
              {
                id: 'codex-mac-linux',
                label: 'macOS / Linux',
                steps: [
                  {
                    title: 'Step 1: Install Codex CLI',
                    description: 'Install globally via npm or Homebrew:',
                    command: 'npm install -g @openai/codex',
                    collapsible: {
                      title: 'Alternative: Homebrew Installation (macOS)',
                      content: 'If you prefer Homebrew:',
                      code: 'brew install codex',
                    },
                  },
                  {
                    title: 'Step 2: Setup Configuration Directory',
                    description: 'Clear any previous configuration and initialize the directory:',
                    command: 'rm -rf ~/.codex && mkdir ~/.codex',
                  },
                  {
                    title: 'Step 3: Configure Authentication',
                    description: 'Open `~/.codex/auth.json` in a text editor (replace YOUR_API_KEY with your key):',
                    command: 'nano ~/.codex/auth.json',
                    code: {
                      filename: '~/.codex/auth.json',
                      content: JSON.stringify(
                        {
                          OPENAI_API_KEY: 'YOUR_API_KEY',
                        },
                        null,
                        2
                      ),
                    },
                  },
                  {
                    title: 'Step 4: Configure Provider',
                    description: 'Create and save `~/.codex/config.toml` with the exact provider parameters below:',
                    command: 'nano ~/.codex/config.toml',
                    code: {
                      filename: '~/.codex/config.toml',
                      content: `model_provider = "agentrouter"\nmodel = "gpt-5.6-sol"\nmodel_reasoning_effort = "xhigh"\ndisable_response_storage = true\npreferred_auth_method = "apikey"\n\n[model_providers.agentrouter]\nname = "agentrouter"\nbase_url = "https://agentrouter.org/v1"\nwire_api = "responses"`,
                    },
                  },
                  {
                    title: 'Step 5: Verify & Launch',
                    description: 'Restart your terminal to reload environment variables, verify the version, and launch:',
                    command: 'codex -V\ncd your-project-folder\ncodex',
                  },
                ],
              },
              {
                id: 'codex-windows',
                label: 'Windows',
                steps: [
                  {
                    title: 'Step 1: Install Codex CLI',
                    description: 'Run in PowerShell or Command Prompt:',
                    command: 'npm install -g @openai/codex',
                  },
                  {
                    title: 'Step 2: Setup Configuration Directory',
                    description: 'In PowerShell, recreate the configuration folder:',
                    command: 'Remove-Item -Recurse -Force ~\\.codex -ErrorAction SilentlyContinue\nNew-Item -ItemType Directory ~\\.codex',
                  },
                  {
                    title: 'Step 3: Configure Authentication',
                    description: 'Create and save `auth.json` (replace YOUR_API_KEY with your secret key):',
                    command: 'notepad ~\\.codex\\auth.json',
                    code: {
                      filename: 'auth.json',
                      content: JSON.stringify(
                        {
                          OPENAI_API_KEY: 'YOUR_API_KEY',
                        },
                        null,
                        2
                      ),
                    },
                  },
                  {
                    title: 'Step 4: Configure Provider',
                    description: 'Create and save `config.toml`:',
                    command: 'notepad ~\\.codex\\config.toml',
                    code: {
                      filename: 'config.toml',
                      content: `model_provider = "agentrouter"\nmodel = "gpt-5.6-sol"\nmodel_reasoning_effort = "xhigh"\ndisable_response_storage = true\npreferred_auth_method = "apikey"\n\n[model_providers.agentrouter]\nname = "agentrouter"\nbase_url = "https://agentrouter.org/v1"\nwire_api = "responses"`,
                    },
                    note: 'Ensure Windows Notepad does not add a hidden .txt extension to config.toml.',
                  },
                  {
                    title: 'Step 5: Verify & Launch',
                    description: 'Restart terminal, verify, and run:',
                    command: 'codex -V\ncd your-project-folder\ncodex',
                  },
                ],
              },
            ],
          },
          {
            id: 'claude-code',
            title: 'Claude Code',
            lead: 'Official Anthropic Claude Code CLI configured with AgentRouter Anthropic endpoint.',
            collapsiblePrerequisites: {
              title: 'Prerequisites: Node.js (Optional)',
              content: 'If installing via npm, Node.js 18 or newer is required.',
              code: 'node --version',
              list: [
                'macOS (Homebrew): `brew install node`',
                'Windows: Download LTS installer from nodejs.org',
                'Linux (Debian/Ubuntu): `curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt-get install -y nodejs`',
              ],
            },
            platforms: [
              {
                id: 'cc-mac-linux',
                label: 'macOS / Linux',
                steps: [
                  {
                    title: 'Step 1: Install the CLI',
                    description: 'Install using the official script or npm:',
                    command: 'curl -fsSL https://claude.ai/install.sh | bash',
                    collapsible: {
                      title: 'Alternative: NPM Global Install',
                      content: 'If you have Node 18+ and prefer npm:',
                      code: 'npm install -g @anthropic-ai/claude-code',
                    },
                  },
                  {
                    title: 'Step 2: Configure Client',
                    description:
                      'Edit `~/.claude/settings.json` to point to AgentRouter (replace YOUR_API_KEY with your key):',
                    command: 'mkdir -p ~/.claude && nano ~/.claude/settings.json',
                    code: {
                      filename: '~/.claude/settings.json',
                      content: JSON.stringify(
                        {
                          env: {
                            ANTHROPIC_API_KEY: 'YOUR_API_KEY',
                            ANTHROPIC_BASE_URL: 'https://agentrouter.org',
                            CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: '1',
                          },
                          permissions: {
                            allow: [],
                            deny: [],
                          },
                          apiKeyHelper: "echo 'YOUR_API_KEY'",
                        },
                        null,
                        2
                      ),
                    },
                    note: 'Important: Do NOT append /v1 to ANTHROPIC_BASE_URL for Claude Code.',
                  },
                  {
                    title: 'Step 3: Launch',
                    description: 'Restart your terminal and launch Claude Code:',
                    command: 'claude',
                  },
                ],
              },
              {
                id: 'cc-windows',
                label: 'Windows',
                steps: [
                  {
                    title: 'Step 1: Install the CLI',
                    description: 'Run in PowerShell or Git Bash (Git Bash recommended for path compatibility):',
                    command: 'npm install -g @anthropic-ai/claude-code',
                  },
                  {
                    title: 'Step 2: Configure Client',
                    description:
                      'Create `C:\\Users\\<username>\\.claude\\settings.json`:',
                    command: 'mkdir ~\\.claude\nnotepad ~\\.claude\\settings.json',
                    code: {
                      filename: 'settings.json',
                      content: JSON.stringify(
                        {
                          env: {
                            ANTHROPIC_API_KEY: 'YOUR_API_KEY',
                            ANTHROPIC_BASE_URL: 'https://agentrouter.org',
                            CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: '1',
                          },
                          permissions: {
                            allow: [],
                            deny: [],
                          },
                          apiKeyHelper: "echo 'YOUR_API_KEY'",
                        },
                        null,
                        2
                      ),
                    },
                    note: 'Replace both occurrences of YOUR_API_KEY with your secret key.',
                  },
                  {
                    title: 'Step 3: Launch',
                    description: 'Restart terminal and run:',
                    command: 'claude',
                  },
                ],
              },
            ],
          },
          {
            id: 'opencode',
            title: 'OpenCode',
            lead: 'OpenCode terminal AI coding agent configured with the AgentRouter provider configuration in opencode.json and interactive /connect authentication.',
            collapsiblePrerequisites: {
              title: 'Prerequisites: Node.js / CLI Tooling',
              content: 'Node.js 18 or newer is required to install the OpenCode CLI.',
              code: 'node --version',
            },
            platforms: [
              {
                id: 'opencode-mac-linux',
                label: 'macOS / Linux',
                steps: [
                  {
                    title: 'Step 1: Install OpenCode CLI',
                    description: 'Install globally via npm or official install script:',
                    command: 'npm install -g opencode-ai',
                    collapsible: {
                      title: 'Alternative: Shell Install Script',
                      content: 'Install via curl:',
                      code: 'curl -fsSL https://opencode.ai/install.sh | bash',
                    },
                  },
                  {
                    title: 'Step 2: Configure Provider in opencode.json',
                    description: 'Create `~/.config/opencode/opencode.json` (or place `opencode.json` in your project root) with the model configuration below:',
                    command: 'mkdir -p ~/.config/opencode && nano ~/.config/opencode/opencode.json',
                    code: {
                      filename: '~/.config/opencode/opencode.json',
                      content: JSON.stringify(
                        {
                          $schema: 'https://opencode.ai/config.json',
                          provider: {
                            agentrouter: {
                              name: 'AgentRouter',
                              baseURL: 'https://agentrouter.org/v1',
                              models: {
                                'claude-opus-5': {
                                  name: 'Claude Opus 5',
                                },
                                'claude-opus-4-8': {
                                  name: 'Claude Opus 4.8',
                                },
                                'gpt-5.6-sol': {
                                  name: 'GPT 5.6 Sol',
                                },
                                'glm-5.3': {
                                  name: 'GLM 5.3',
                                },
                                'deepseek-v4-flash': {
                                  name: 'DeepSeek V4 Flash',
                                },
                              },
                            },
                          },
                          model: 'agentrouter/claude-opus-5',
                        },
                        null,
                        2
                      ),
                    },
                    note: 'The API key is not stored in opencode.json. It will be configured interactively in Step 3.',
                  },
                  {
                    title: 'Step 3: Connect API Key via /connect',
                    description: 'Start OpenCode in your project workspace, run the `/connect` command, enter `agentrouter` as the provider ID, and paste your `sk-...` API key:',
                    command: 'cd your-project-folder\nopencode',
                    note: 'Inside OpenCode terminal session, run: /connect -> enter provider ID "agentrouter" -> paste your API key.',
                  },
                ],
              },
              {
                id: 'opencode-windows',
                label: 'Windows',
                steps: [
                  {
                    title: 'Step 1: Install OpenCode CLI',
                    description: 'Install globally via npm in PowerShell or Command Prompt:',
                    command: 'npm install -g opencode-ai',
                  },
                  {
                    title: 'Step 2: Configure Provider in opencode.json',
                    description: 'Create `opencode.json` under `%USERPROFILE%\\.config\\opencode\\opencode.json` (or in project root):',
                    command: 'mkdir ~\\.config\\opencode\nnotepad ~\\.config\\opencode\\opencode.json',
                    code: {
                      filename: 'opencode.json',
                      content: JSON.stringify(
                        {
                          $schema: 'https://opencode.ai/config.json',
                          provider: {
                            agentrouter: {
                              name: 'AgentRouter',
                              baseURL: 'https://agentrouter.org/v1',
                              models: {
                                'claude-opus-5': {
                                  name: 'Claude Opus 5',
                                },
                                'claude-opus-4-8': {
                                  name: 'Claude Opus 4.8',
                                },
                                'gpt-5.6-sol': {
                                  name: 'GPT 5.6 Sol',
                                },
                                'glm-5.3': {
                                  name: 'GLM 5.3',
                                },
                                'deepseek-v4-flash': {
                                  name: 'DeepSeek V4 Flash',
                                },
                              },
                            },
                          },
                          model: 'agentrouter/claude-opus-5',
                        },
                        null,
                        2
                      ),
                    },
                    note: 'Ensure the file is saved as opencode.json without a hidden .txt extension.',
                  },
                  {
                    title: 'Step 3: Connect API Key via /connect',
                    description: 'Launch OpenCode in your project workspace, run `/connect`, enter `agentrouter`, and input your `sk-...` API key:',
                    command: 'cd your-project-folder\nopencode',
                    note: 'Inside OpenCode terminal session, run: /connect -> enter provider ID "agentrouter" -> paste your API key.',
                  },
                ],
              },
            ],
          },
        ],
        notice: {
          type: 'tip',
          title: 'Official Documentation & Additional Integrations',
          content:
            'For additional tools, IDE plugins (like Pi, Cursor, Cline, Continue), or advanced parameters, visit the official [AgentRouter Documentation](https://agentrouter.org/docs/). Note: The documentation is primarily in Chinese, so use your browser built-in translation to English for in-depth setup guides and updates.',
        },
      },
      {
        id: 'troubleshooting',
        title: '4. Troubleshooting & Best Practices',
        lead: 'Common solutions for CLI configuration, account verification, and credit synchronization:',
        unorderedList: [
          '**Daily Credits Synchronization**: Daily credits ($25/day) do not apply automatically. Always log out of agentrouter.org and log back in each day to refresh your session and claim the daily reward.',
          '**Account Verification Criteria**: If initial credits fail to appear, verify that your GitHub account is at least 6 months old with active commit history. Blank alts and newly created accounts are rejected by anti-fraud filters.',
          '**Anthropic vs OpenAI Base URL**: For Anthropic clients (Claude Code), use `https://agentrouter.org` without `/v1`. For OpenAI-compatible tools (Codex, OpenCode, Cline, Cursor), use `https://agentrouter.org/v1`.',
          '**Token Permissions**: In [Console > API Tokens](https://agentrouter.org/console/token), confirm your token is assigned to the `default` group with all models active and "Never expires" enabled.',
        ],
      },
    ],
  },
];

export function getAllBlogs(): BlogPost[] {
  return BLOGS_DATA.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOGS_DATA.find((blog) => blog.slug === slug);
}
