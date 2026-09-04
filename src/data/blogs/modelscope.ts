import { BlogPost } from '../../types/blog';

export const modelscopeBlog: BlogPost = {
  slug: 'modelscope',
  title: 'ModelScope Inference Setup for Coding Agents',
  subtitle: 'Run DeepSeek-V4 Pro, GLM-5.2 & Qwen in OpenCode, Codex & Claude Code via Magicubes',
  description:
    'Complete technical setup guide for running terminal coding agents (OpenCode, OpenAI Codex CLI, and Claude Code) on ModelScope using OpenAI and Anthropic compatible gateways, powered by the Magicubes credit economy.',
  publishedAt: '2026-09-04',
  updatedAt: '2026-09-04',
  readingTime: '7 min read',
  tags: ['AI', 'ModelScope', 'DeepSeek', 'GLM-5.2', 'OpenCode', 'Claude Code', 'Codex', 'Coding Agents'],
  author: {
    name: 'Monojit Goswami',
    url: 'https://mgbuilds.in',
  },
  sections: [
    {
      id: 'account-token-setup',
      title: '1. Account Registration & API Token Setup',
      lead: 'ModelScope provides hosted model inference with API key management and standard authentication options (including GitHub and Google).',
      orderedList: [
        '**Sign Up via Direct Referral Link**: Register directly via the [ModelScope Sign-Up Link](https://modelscope.ai/register?inviteCode=monojitgoswami69&invitorName=monojitgoswami69&login=true&logintype=register). This direct link automatically applies the referral invite, granting an immediate **50 Magicubes** welcome bonus directly upon account creation with no separate code entry step needed.',
        '**Open Access Token Dashboard**: After logging in, navigate to [https://modelscope.ai/my/myaccesstoken](https://modelscope.ai/my/myaccesstoken) or click on your profile avatar in the header and select "Access Token".',
        '**Generate New Token**: Click "Create New Token". Assign an identifier (e.g., `developer-cli-agent`) and confirm. ModelScope will display your private API token (prefixed with `ms-`).',
        '**Secure Key Storage**: Copy and store your token in an environment variable (`MODELSCOPE_API_TOKEN`) or your password manager. Never commit it to public version control.',
      ],
      actionButton: {
        text: 'Sign Up on ModelScope (+50 Free Magicubes) →',
        url: 'https://modelscope.ai/register?inviteCode=monojitgoswami69&invitorName=monojitgoswami69&login=true&logintype=register',
      },
    },
    {
      id: 'cubes-rewards-system',
      title: '2. The Magicubes Credit System',
      lead: 'ModelScope meters API usage through credits called Magicubes (managed at [modelscope.ai/magicube/usage?tab=earn](https://modelscope.ai/magicube/usage?tab=earn)). Each API call consumes Magicubes based on tokens used across models like DeepSeek-V4 Pro, GLM-5.2, and Qwen.',
      actionButton: {
        text: 'View Magicubes Rewards Dashboard →',
        url: 'https://modelscope.ai/magicube/usage?tab=earn',
      },
      subsections: [
        {
          id: 'first-login-earnings',
          title: 'First-Day Rewards (~500 Magicubes on Day 1)',
          description:
            'A new account can gather roughly 500 Magicubes on day one by completing one-time setup tasks alongside the daily routine. This provides around 20 to 25 million tokens of compute to get started:',
          orderedList: [
            '**Sign Up via Invitation Link (+50 Magicubes)**: Register using the direct [ModelScope Sign-Up Link](https://modelscope.ai/register?inviteCode=monojitgoswami69&invitorName=monojitgoswami69&login=true&logintype=register) to automatically credit an instant +50 welcome bonus with no manual code entry needed.',
            '**Daily Login (+200 Magicubes)**: Issued daily upon logging into [modelscope.ai](https://modelscope.ai) and completing any basic action on the platform.',
            '**Bind Alibaba Cloud Account (+50 Magicubes & +50 Daily)**: Under [Account Settings](https://modelscope.ai/my/settings/account), click "Bind Alibaba Cloud Account" to create an account. You do not need to complete the Alibaba profile completion step (which requires mobile verification, where regions like India are unavailable). The mobile verification step can be skipped: simply close the Alibaba tab after basic account creation, return to ModelScope, and click "Bind" again. An authorization popup will open; click "Authorize" and your binding is active. This one-time setup grants +50 Magicubes immediately and permanently fetches +50 Magicubes daily upon login.',
            '**Fill in Profile Bio (+50 Magicubes)**: Add a bio and work experience under [Profile Settings](https://modelscope.ai/my/settings/profile).',
            '**Verify Developer Email (+50 Magicubes)**: Add and verify your primary email address under [Account Settings](https://modelscope.ai/my/settings/account).',
            '**Complete Profile Pin Highlights (+50 Magicubes, Net +49)**: Open [Civision](https://modelscope.ai/aigc), select any image model, and generate one simple test image (costs 1 Magicube). Then go to your public profile, click "Highlight", and pin that generated image to your showcase. This unlocks the +50 milestone reward (net +49 Magicubes).',
            '**Like 20 Community Assets (+40 Magicubes)**: Favorite or like any 20 items across ModelScope (models, technical docs, research papers, or datasets) at +2 Magicubes per like (20 × 2 = +40 daily).',
            '**Post 2 Community Comments (+10 Magicubes)**: Leave 2 constructive comments on models, articles, or discussions at +5 Magicubes per comment (2 × 5 = +10 daily).',
            '**Day 1 Total (~500 Magicubes)**: Exactly 499 net Magicubes (50 + 200 + 50 + 50 + 50 + 49 + 40 + 10) credited on day one, providing enough balance for around 20 to 25 million tokens of generation.',
          ],
        },
        {
          id: 'guaranteed-daily-earnings',
          title: 'Guaranteed Daily Earnings (300 Magicubes/Day)',
          description:
            'After day one, regular daily tasks supply 300 Magicubes each day. This covers roughly 10 to 15 million tokens of daily generation at no cost:',
          unorderedList: [
            '**Automatic Daily Login (+200 Magicubes)**: Granted automatically on your first action after logging into [modelscope.ai](https://modelscope.ai) each day.',
            '**Alibaba Cloud Account Binding (+50 Magicubes)**: Credited automatically every day upon login after the one-time binding setup under [Account Settings](https://modelscope.ai/my/settings/account) (skipping mobile verification as described above).',
            '**Automatic Baseline Total: 250 Magicubes/Day**: Credited daily with zero manual effort beyond signing in.',
            '**Like 20 Community Assets (+40 Magicubes)**: Favorite or like any 20 models, papers, or docs (20 × 2 = +40 daily).',
            '**Post 2 Community Comments (+10 Magicubes)**: Post 2 constructive comments on models or discussions (2 × 5 = +10 daily).',
            '**Quick Routine Total: 50 Magicubes/Day**: Takes under two minutes (liking 20 assets and leaving 2 comments).',
            '**Guaranteed Daily Total: 300 Magicubes**: Exactly 300 Magicubes credited each day (250 automatic + 50 from the quick routine), amounting to 9,000 Magicubes every 30 days.',
            '**Daily Inference Runway**: In practice, 300 Magicubes covers roughly 10 to 15 million tokens per day, providing ample runway for coding agents like OpenCode, Codex, and Claude Code.',
          ],
        },
      ],
    },
    {
      id: 'client-configuration',
      title: '3. AI Coding Client Integration',
      lead: 'Connect ModelScope directly to your terminal coding agents. Select your preferred agent below:',
      notice: {
        type: 'tip',
        title: 'Recommended Agent Harness: OpenCode CLI',
        content:
          '**OpenCode CLI is the recommended harness** for ModelScope inference. It handles temporary upstream 502/503 errors and rate limits with automatic retries instead of terminating your session loop. For models, `deepseek-ai/DeepSeek-V4-Pro-0813` and `zai-org/GLM-5.2` provide high coding accuracy and large context windows.',
      },
      clientGuides: [
        {
          id: 'opencode',
          title: 'OpenCode CLI (Recommended)',
          lead: 'Route coding agent sessions through ModelScope models using its OpenAI-compatible endpoint. OpenCode is the recommended harness because it handles intermittent server errors with automatic retries.',
          collapsiblePrerequisites: {
            title: 'Prerequisites: Node.js / CLI Tooling',
            content: 'Node.js 18 or newer is required to install the OpenCode CLI.',
            code: 'node --version',
            list: [
              'Install globally via npm: `npm install -g opencode-ai`',
              'Or install via shell script: `curl -fsSL https://opencode.ai/install.sh | bash`',
            ],
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
                  description:
                    'Create `~/.config/opencode/opencode.json` (or place `opencode.json` in your project root) with the model configuration below:',
                  command: 'mkdir -p ~/.config/opencode && nano ~/.config/opencode/opencode.json',
                  code: {
                    filename: '~/.config/opencode/opencode.json',
                    content: JSON.stringify(
                      {
                        $schema: 'https://opencode.ai/config.json',
                        provider: {
                          modelscope: {
                            name: 'ModelScope',
                            baseURL: 'https://api-inference.modelscope.ai/v1',
                            models: {
                              'deepseek-ai/DeepSeek-V4-Pro-0813': {
                                name: 'DeepSeek V4 Pro',
                              },
                              'zai-org/GLM-5.2': {
                                name: 'GLM 5.2',
                              },
                              'Qwen/Qwen3-Coder-30B-A3B-Instruct': {
                                name: 'Qwen 3 Coder 30B',
                              },
                            },
                          },
                        },
                        model: 'modelscope/deepseek-ai/DeepSeek-V4-Pro-0813',
                      },
                      null,
                      2
                    ),
                  },
                  note: 'The API key is not stored in opencode.json. It will be configured interactively in Step 3.',
                },
                {
                  title: 'Step 3: Connect API Key via /connect',
                  description:
                    'Start OpenCode in your project workspace, run the `/connect` command, enter `modelscope` as the provider ID, and paste your `ms-...` API key:',
                  command: 'cd your-project-folder\nopencode',
                  note: 'Inside OpenCode terminal session, run: /connect -> enter provider ID "modelscope" -> paste your API key.',
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
                  description:
                    'Create `opencode.json` under `%USERPROFILE%\\.config\\opencode\\opencode.json` (or in project root):',
                  command: 'mkdir ~\\.config\\opencode\nnotepad ~\\.config\\opencode\\opencode.json',
                  code: {
                    filename: 'opencode.json',
                    content: JSON.stringify(
                      {
                        $schema: 'https://opencode.ai/config.json',
                        provider: {
                          modelscope: {
                            name: 'ModelScope',
                            baseURL: 'https://api-inference.modelscope.ai/v1',
                            models: {
                              'deepseek-ai/DeepSeek-V4-Pro-0813': {
                                name: 'DeepSeek V4 Pro',
                              },
                              'zai-org/GLM-5.2': {
                                name: 'GLM 5.2',
                              },
                              'Qwen/Qwen3-Coder-30B-A3B-Instruct': {
                                name: 'Qwen 3 Coder 30B',
                              },
                            },
                          },
                        },
                        model: 'modelscope/deepseek-ai/DeepSeek-V4-Pro-0813',
                      },
                      null,
                      2
                    ),
                  },
                  note: 'Ensure the file is saved as opencode.json without a hidden .txt extension.',
                },
                {
                  title: 'Step 3: Connect API Key via /connect',
                  description:
                    'Launch OpenCode in your project workspace, run `/connect`, enter `modelscope`, and input your `ms-...` API key:',
                  command: 'cd your-project-folder\nopencode',
                  note: 'Inside OpenCode terminal session, run: /connect -> enter provider ID "modelscope" -> paste your API key.',
                },
              ],
            },
          ],
        },
        {
          id: 'codex',
          title: 'OpenAI Codex',
          lead: 'Official @openai/codex CLI configured to route through the ModelScope OpenAI-compatible API gateway.',
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
                  description: 'Open `~/.codex/auth.json` in a text editor (replace with your ModelScope token):',
                  command: 'nano ~/.codex/auth.json',
                  code: {
                    filename: '~/.codex/auth.json',
                    content: JSON.stringify(
                      {
                        OPENAI_API_KEY: 'ms-YOUR_MODELSCOPE_TOKEN',
                      },
                      null,
                      2
                    ),
                  },
                },
                {
                  title: 'Step 4: Configure Provider',
                  description: 'Create and save `~/.codex/config.toml` with the ModelScope provider parameters below:',
                  command: 'nano ~/.codex/config.toml',
                  code: {
                    filename: '~/.codex/config.toml',
                    content: `model_provider = "modelscope"\nmodel = "deepseek-ai/DeepSeek-V4-Pro-0813"\nmodel_reasoning_effort = "xhigh"\ndisable_response_storage = true\npreferred_auth_method = "apikey"\n\n[model_providers.modelscope]\nname = "modelscope"\nbase_url = "https://api-inference.modelscope.ai/v1"\nwire_api = "responses"`,
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
                  description: 'Create and save `auth.json` (replace with your ModelScope token):',
                  command: 'notepad ~\\.codex\\auth.json',
                  code: {
                    filename: 'auth.json',
                    content: JSON.stringify(
                      {
                        OPENAI_API_KEY: 'ms-YOUR_MODELSCOPE_TOKEN',
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
                    content: `model_provider = "modelscope"\nmodel = "deepseek-ai/DeepSeek-V4-Pro-0813"\nmodel_reasoning_effort = "xhigh"\ndisable_response_storage = true\npreferred_auth_method = "apikey"\n\n[model_providers.modelscope]\nname = "modelscope"\nbase_url = "https://api-inference.modelscope.ai/v1"\nwire_api = "responses"`,
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
          title: 'Claude Code (Beta Gateway)',
          lead: 'Connect @anthropic-ai/claude-code directly to ModelScope using its native Anthropic Messages API gateway without proxy tools or translation middleware.',
          notice: {
            type: 'warning',
            title: 'Anthropic Messages API is in Beta (Potential Instability)',
            content:
              'ModelScope\'s Anthropic-compatible gateway is currently in **beta** and experiences occasional upstream disconnects. Because Claude Code does not automatically retry network errors, sessions can drop abruptly. If you hit frequent disconnects, use **OpenCode CLI** instead, which retries failed requests automatically.',
          },
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
              id: 'claude-code-mac-linux',
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
                    'Edit `~/.claude/settings.json` to point to ModelScope (replace with your ModelScope token):',
                  command: 'mkdir -p ~/.claude && nano ~/.claude/settings.json',
                  code: {
                    filename: '~/.claude/settings.json',
                    content: JSON.stringify(
                      {
                        env: {
                          ANTHROPIC_API_KEY: 'ms-YOUR_MODELSCOPE_TOKEN',
                          ANTHROPIC_BASE_URL: 'https://api-inference.modelscope.ai',
                          ANTHROPIC_MODEL: 'deepseek-ai/DeepSeek-V4-Pro-0813',
                          CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: '1',
                        },
                        permissions: {
                          allow: [],
                          deny: [],
                        },
                        apiKeyHelper: "echo 'ms-YOUR_MODELSCOPE_TOKEN'",
                      },
                      null,
                      2
                    ),
                  },
                  note: 'Important: Do NOT append /v1 to ANTHROPIC_BASE_URL for Claude Code.',
                },
                {
                  title: 'Step 3: Launch',
                  description: 'Restart your terminal and launch Claude Code in your project directory:',
                  command: 'claude',
                },
              ],
            },
            {
              id: 'claude-code-windows',
              label: 'Windows',
              steps: [
                {
                  title: 'Step 1: Install the CLI',
                  description: 'Run in PowerShell or Git Bash (Git Bash recommended for path compatibility):',
                  command: 'npm install -g @anthropic-ai/claude-code',
                },
                {
                  title: 'Step 2: Configure Client',
                  description: 'Create `C:\\Users\\<username>\\.claude\\settings.json`:',
                  command: 'mkdir ~\\.claude\nnotepad ~\\.claude\\settings.json',
                  code: {
                    filename: 'settings.json',
                    content: JSON.stringify(
                      {
                        env: {
                          ANTHROPIC_API_KEY: 'ms-YOUR_MODELSCOPE_TOKEN',
                          ANTHROPIC_BASE_URL: 'https://api-inference.modelscope.ai',
                          ANTHROPIC_MODEL: 'deepseek-ai/DeepSeek-V4-Pro-0813',
                          CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: '1',
                        },
                        permissions: {
                          allow: [],
                          deny: [],
                        },
                        apiKeyHelper: "echo 'ms-YOUR_MODELSCOPE_TOKEN'",
                      },
                      null,
                      2
                    ),
                  },
                  note: 'Replace both occurrences of ms-YOUR_MODELSCOPE_TOKEN with your secret key.',
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
      ],
    },
    {
      id: 'troubleshooting',
      title: '4. Troubleshooting & Status Codes',
      lead: 'Common responses and troubleshooting steps for ModelScope API gateways:',
      unorderedList: [
        '**HTTP 404 (Browser Visit)**: Expected behavior. `https://api-inference.modelscope.ai/v1` is an API endpoint that only responds to authenticated POST requests, not browser GET requests.',
        '**HTTP 401 Unauthorized**: The `Authorization: Bearer <TOKEN>` header is missing, malformed, or invalid. Verify and regenerate your token at [https://modelscope.ai/my/myaccesstoken](https://modelscope.ai/my/myaccesstoken).',
        '**HTTP 402 / 429 Insufficient Magicubes**: Requests fail when your account runs out of Magicubes. Log into [https://modelscope.ai](https://modelscope.ai) and complete the daily tasks (login, like 20 items, post 2 comments) to replenish your balance with 300 Magicubes.',
        '**Balance Tracking**: All model endpoints draw from the same Magicubes pool. You can track your remaining balance and token history at [https://modelscope.ai/magicube/usage?tab=usage](https://modelscope.ai/magicube/usage?tab=usage).',
        '**Connection Timeouts**: When processing deep reasoning traces or large token contexts, ensure client HTTP timeouts are set to at least 90 seconds to prevent premature disconnections during cold starts.',
      ],
    },
  ],
};
