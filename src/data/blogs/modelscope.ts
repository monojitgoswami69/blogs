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
            title: 'Prerequisites: OpenCode CLI Installation',
            content: 'Ensure OpenCode is installed on your system:',
            code: 'opencode --version',
            list: [
              'Install globally via npm: `npm install -g opencode`',
              'Or install via Homebrew (macOS): `brew install opencode`',
            ],
          },
          platforms: [
            {
              id: 'opencode-mac-linux',
              label: 'macOS / Linux',
              steps: [
                {
                  title: 'Step 1: Configure Shell Profile',
                  description:
                    'Add the ModelScope endpoint and token to your shell configuration (`~/.zshrc` or `~/.bashrc`):',
                  command: `echo 'export OPENAI_BASE_URL="https://api-inference.modelscope.ai/v1"' >> ~/.zshrc
echo 'export OPENAI_API_KEY="ms-YOUR_MODELSCOPE_TOKEN"' >> ~/.zshrc
source ~/.zshrc`,
                },
                {
                  title: 'Step 2: Define Provider in Config',
                  description:
                    'Create or edit `~/.config/opencode/config.json` with your ModelScope model configurations:',
                  code: {
                    filename: '~/.config/opencode/config.json',
                    language: 'json',
                    content: JSON.stringify(
                      {
                        model: 'deepseek-ai/DeepSeek-V4-Pro-0813',
                        providers: {
                          modelscope: {
                            baseURL: 'https://api-inference.modelscope.ai/v1',
                            apiKey: '${OPENAI_API_KEY}',
                            models: [
                              'deepseek-ai/DeepSeek-V4-Pro-0813',
                              'zai-org/GLM-5.2',
                              'Qwen/Qwen3-Coder-30B-A3B-Instruct',
                            ],
                          },
                        },
                        defaultProvider: 'modelscope',
                      },
                      null,
                      2
                    ),
                  },
                },
                {
                  title: 'Step 3: Launch OpenCode Session',
                  description: 'Start an agent session specifying DeepSeek-V4 Pro:',
                  command: 'opencode --model deepseek-ai/DeepSeek-V4-Pro-0813',
                },
              ],
            },
            {
              id: 'opencode-windows',
              label: 'Windows',
              steps: [
                {
                  title: 'Step 1: Set Persistent Environment Variables',
                  description: 'Execute in PowerShell as user:',
                  command: `[System.Environment]::SetEnvironmentVariable('OPENAI_BASE_URL', 'https://api-inference.modelscope.ai/v1', 'User')
[System.Environment]::SetEnvironmentVariable('OPENAI_API_KEY', 'ms-YOUR_MODELSCOPE_TOKEN', 'User')`,
                },
                {
                  title: 'Step 2: Configure OpenCode Settings File',
                  description: 'Open `%USERPROFILE%\\.config\\opencode\\config.json` and paste:',
                  code: {
                    filename: '%USERPROFILE%\\.config\\opencode\\config.json',
                    language: 'json',
                    content: JSON.stringify(
                      {
                        model: 'deepseek-ai/DeepSeek-V4-Pro-0813',
                        providers: {
                          modelscope: {
                            baseURL: 'https://api-inference.modelscope.ai/v1',
                            apiKey: '${OPENAI_API_KEY}',
                            models: [
                              'deepseek-ai/DeepSeek-V4-Pro-0813',
                              'zai-org/GLM-5.2',
                              'Qwen/Qwen3-Coder-30B-A3B-Instruct',
                            ],
                          },
                        },
                        defaultProvider: 'modelscope',
                      },
                      null,
                      2
                    ),
                  },
                },
                {
                  title: 'Step 3: Launch OpenCode Session',
                  description: 'Open a fresh PowerShell window and start OpenCode:',
                  command: 'opencode --model deepseek-ai/DeepSeek-V4-Pro-0813',
                },
              ],
            },
          ],
        },
        {
          id: 'codex',
          title: 'OpenAI Codex CLI',
          lead: 'Route the official @openai/codex CLI tool through ModelScope endpoints.',
          collapsiblePrerequisites: {
            title: 'Prerequisites: Node.js 18+',
            content: 'Verify Node.js runtime availability:',
            code: 'node --version',
            list: [
              'Install Codex globally: `npm install -g @openai/codex`',
            ],
          },
          platforms: [
            {
              id: 'codex-mac-linux',
              label: 'macOS / Linux',
              steps: [
                {
                  title: 'Step 1: Configure ~/.codex/auth.json',
                  description: 'Create the configuration directory and register your credentials:',
                  command: 'mkdir -p ~/.codex',
                  code: {
                    filename: '~/.codex/auth.json',
                    language: 'json',
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
                  title: 'Step 2: Configure Base URL and Model',
                  description: 'Create `~/.codex/config.json` routing requests to ModelScope:',
                  code: {
                    filename: '~/.codex/config.json',
                    language: 'json',
                    content: JSON.stringify(
                      {
                        baseURL: 'https://api-inference.modelscope.ai/v1',
                        model: 'deepseek-ai/DeepSeek-V4-Pro-0813',
                        temperature: 0.2,
                      },
                      null,
                      2
                    ),
                  },
                },
                {
                  title: 'Step 3: Run Codex Command',
                  description: 'Run Codex against your local workspace:',
                  command: 'codex "Implement a token bucket rate limiter in Go"',
                },
              ],
            },
            {
              id: 'codex-windows',
              label: 'Windows',
              steps: [
                {
                  title: 'Step 1: Create Config Folder',
                  description: 'In PowerShell, initialize the `.codex` folder in your home directory:',
                  command: 'New-Item -ItemType Directory -Force -Path "$HOME\\.codex"',
                },
                {
                  title: 'Step 2: Configure Settings File',
                  description: 'Create `$HOME\\.codex\\config.json` with the ModelScope gateway settings:',
                  code: {
                    filename: '$HOME\\.codex\\config.json',
                    language: 'json',
                    content: JSON.stringify(
                      {
                        baseURL: 'https://api-inference.modelscope.ai/v1',
                        model: 'deepseek-ai/DeepSeek-V4-Pro-0813',
                        temperature: 0.2,
                      },
                      null,
                      2
                    ),
                  },
                },
                {
                  title: 'Step 3: Run Codex Query',
                  description: 'Execute your query in PowerShell:',
                  command: 'codex "Create a PowerShell script to audit directory disk usage"',
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
            title: 'Prerequisites: Claude Code CLI Installation',
            content: 'Verify Claude Code is installed globally on your system:',
            code: 'claude --version',
            list: [
              'Install globally via npm: `npm install -g @anthropic-ai/claude-code`',
              'Node.js 18+ runtime is required',
            ],
          },
          platforms: [
            {
              id: 'claude-code-mac-linux',
              label: 'macOS / Linux',
              steps: [
                {
                  title: 'Step 1: Configure Environment Variables',
                  description:
                    'Direct Claude Code to the ModelScope native Anthropic gateway by adding these exports to your `~/.zshrc` or `~/.bashrc`:',
                  command: `echo 'export ANTHROPIC_BASE_URL="https://api-inference.modelscope.ai"' >> ~/.zshrc
echo 'export ANTHROPIC_API_KEY="ms-YOUR_MODELSCOPE_TOKEN"' >> ~/.zshrc
echo 'export ANTHROPIC_MODEL="deepseek-ai/DeepSeek-V4-Pro-0813"' >> ~/.zshrc
source ~/.zshrc`,
                },
                {
                  title: 'Step 2: Launch Claude Code',
                  description:
                    'Run Claude Code directly in your project repository. It communicates straight with ModelScope via the native Anthropic Messages API:',
                  command: 'claude',
                },
              ],
            },
            {
              id: 'claude-code-windows',
              label: 'Windows',
              steps: [
                {
                  title: 'Step 1: Set Persistent Environment Variables',
                  description: 'Execute in PowerShell as user to configure your Anthropic gateway variables:',
                  command: `[System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', 'https://api-inference.modelscope.ai', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_API_KEY', 'ms-YOUR_MODELSCOPE_TOKEN', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_MODEL', 'deepseek-ai/DeepSeek-V4-Pro-0813', 'User')`,
                },
                {
                  title: 'Step 2: Launch Claude Code',
                  description: 'Open a fresh PowerShell window and start Claude Code:',
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
