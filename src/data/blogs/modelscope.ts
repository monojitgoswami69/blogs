import { BlogPost } from '../../types/blog';

export const modelscopeBlog: BlogPost = {
  slug: 'modelscope',
  title: 'ModelScope AI Inference Setup Guide',
  subtitle: 'DeepSeek-V4 Pro, GLM-5.2 & Qwen Integration with Free Daily Quota & Magicubes Rewards',
  description:
    'Complete step-by-step technical guide to ModelScope AI inference on modelscope.ai, generating access tokens, the Magicubes referral rewards system, and integrating GLM-5.2, DeepSeek-V4 Pro, and Qwen with OpenCode, Claude Code, Cursor, and Python.',
  publishedAt: '2026-09-04',
  updatedAt: '2026-09-04',
  readingTime: '7 min read',
  tags: ['AI', 'ModelScope', 'DeepSeek', 'GLM-5.2', 'OpenCode', 'Claude Code', 'Cursor', 'Guide'],
  author: {
    name: 'Monojit Goswami',
    url: 'https://mgbuilds.in',
  },
  notice: {
    type: 'info',
    title: 'ModelScope Free Tier & Magicubes Architecture',
    content:
      'ModelScope operates an international portal at [https://modelscope.ai](https://modelscope.ai). The platform provides two independent reward and quota systems: a free developer tier for the OpenAI-compatible inference endpoint (`https://api-inference.modelscope.cn/v1`) with 2,000 requests per day, alongside the Magicubes reward system where developers can easily guarantee 300 Magicubes daily (funding 10 to 15 million tokens of compute) through quick check-ins, likes, and comments.',
  },
  sections: [
    {
      id: 'account-token-setup',
      title: '1. Account Registration & International Portal Access',
      lead: 'ModelScope hosts its global developer platform at modelscope.ai, featuring direct English documentation, international authentication methods, and API key management.',
      orderedList: [
        '**Access the International Portal**: Go to [https://modelscope.ai](https://modelscope.ai). Use the international portal rather than the domestic `.cn` domain to access global sign-in methods (such as GitHub, Google, or international phone numbers).',
        '**Sign Up & Apply Invitation Code**: During registration on [modelscope.ai](https://modelscope.ai), enter an invitation or referral code if available. Signing up via an invitation code awards an immediate welcome bonus of **50 Magicubes** directly to your account wallet.',
        '**Open Access Token Dashboard**: After logging in, navigate to [https://modelscope.ai/my/myaccesstoken](https://modelscope.ai/my/myaccesstoken) or click on your profile avatar in the header and select "Access Token".',
        '**Generate New Token**: Click "Create New Token". Assign an identifier (e.g., `developer-cli-agent`) and confirm. ModelScope will display your private API token.',
        '**Secure Key Storage**: Copy and store your token in an environment variable (`MODELSCOPE_API_TOKEN`) or your password manager. Never commit it to public version control.',
      ],
      actionButton: {
        text: 'Open ModelScope.ai Portal →',
        url: 'https://modelscope.ai',
      },
      notice: {
        type: 'warning',
        title: 'Portal Domain Notice',
        content:
          'Always use [https://modelscope.ai](https://modelscope.ai) for international account management and token generation. The backend OpenAI-compatible inference API endpoint is unified at `https://api-inference.modelscope.cn/v1`.',
      },
    },
    {
      id: 'cubes-rewards-system',
      title: '2. The Magicubes Rewards & Referral System',
      lead: 'ModelScope operates a unified community points and compute currency called Magicubes (accessible at [modelscope.ai/magicube/usage?tab=earn](https://modelscope.ai/magicube/usage?tab=earn)). In addition to free OpenAI-compatible API calls, developers can guarantee 300 Magicubes every single day in under two minutes—delivering massive compute runway that easily powers 10 to 15 million tokens.',
      actionButton: {
        text: 'View Magicubes Rewards Dashboard →',
        url: 'https://modelscope.ai/magicube/usage?tab=earn',
      },
      notice: {
        type: 'tip',
        title: 'The 300 Daily Magicubes Formula (10–15 Million Tokens Runway)',
        content:
          'You can guarantee exactly 300 Magicubes every day in under 2 minutes: Login (+200), Alibaba Cloud account binding (+50), like 20 items (+40), and post 2 comments (+10). A single day\'s 300 Magicubes lasts an exceptionally long time—easily covering 10 to 15 million tokens depending on your chosen model and prompt caching style.',
      },
      subsections: [
        {
          id: 'guaranteed-daily-routine',
          title: 'The Guaranteed 300 Magicubes/Day Routine (10–15 Million Tokens)',
          description:
            'By pairing your daily check-in with a few clicks across community assets, you can guarantee 300 Magicubes every day with minimal effort:',
          orderedList: [
            '**Daily Login (+200 Magicubes)**: Issued daily upon logging into [modelscope.ai](https://modelscope.ai) and completing any usage action on the platform.',
            '**Alibaba Cloud Account Binding (+50 Magicubes)**: Issued daily upon login after binding your Alibaba Cloud account under [Account Settings](https://modelscope.ai/my/settings/account).',
            '**Like 20 Community Assets (+40 Magicubes)**: Favorite or like any 20 items across ModelScope (models, technical docs, research papers, datasets, or studios) at +2 Magicubes per like (20 x 2 = +40 daily).',
            '**Post 2 Comments (+10 Magicubes)**: Leave 2 constructive comments on any community posts, models, or articles at +5 Magicubes per comment (2 x 5 = +10 daily).',
            '**Daily Guaranteed Total: 300 Magicubes**: Exactly 300 Magicubes credited each day (200 + 50 + 40 + 10), amounting to 9,000 Magicubes every 30 days.',
            '**Enormous Compute Runway (10–15 Million Tokens)**: 300 Magicubes lasts for a very long time. Due to competitive token pricing and lightweight platform jobs, 300 daily cubes easily translates into **10 to 15 million tokens** of generative AI workload depending on your model selection and prompt optimization.',
          ],
        },
        {
          id: 'referral-and-invitation-program',
          title: 'Referrals & Invitation Code Program',
          description:
            'Developers can expand their token and compute pool by inviting teammates and contributors via [Invite Friends](https://modelscope.ai/magicube/usage?tab=earn&inviteModal=true):',
          unorderedList: [
            '**Sign up via Invitation (+50 Magicubes)**: Any new developer who registers on ModelScope with an invitation code immediately receives a **+50 Magicubes** welcome credit (Long-term milestone).',
            '**Invite Friends (+20 Magicubes / user)**: Receive **+20 Magicubes** whenever a colleague signs up with your personal referral link or code.',
            '**Monthly Referral Limit**: Capped at **up to 50 users per month**, allowing you to earn up to **+1,000 Magicubes monthly** exclusively through referrals.',
            '**Dual-Tier Quota Independence**: Magicubes do not diminish your API inference quota. Standard OpenAI-compatible LLM completions (DeepSeek-V4 Pro, GLM-5.2, Qwen) run through your 2,000 free daily API gateway requests, while Magicubes fund heavy GPU generation and LoRA training.',
          ],
        },
        {
          id: 'profile-and-community',
          title: 'Profile Setup & Quick Milestones (+150 Total)',
          description:
            'New accounts can quickly build an initial reserve through one-time profile verification tasks totaling +150 Magicubes:',
          unorderedList: [
            '**Verify Email (+50 Magicubes)**: Add and verify your developer email address in [Account Settings](https://modelscope.ai/my/settings/account) (Long-term).',
            '**Complete Profile - Edit Experience (+50 Magicubes)**: Fill in your bio and developer background under [Profile Settings](https://modelscope.ai/my/settings/profile) and save (Long-term).',
            '**Complete Profile - Pin Highlights (+50 Magicubes)**: Pin featured models, datasets, or studios to your public profile page and save (Long-term).',
          ],
        },
        {
          id: 'civision-aigc',
          title: 'Civision AIGC Creation & Training Milestones',
          description:
            'ModelScope\'s [Civision Generative Suite](https://modelscope.ai/aigc) offers both daily generation rewards and long-term reach milestones:',
          unorderedList: [
            '**Publish a Civision creation (+10 Magicubes each)**: Share an image or video creation output in Civision that achieves >= 1 view (capped at 10 times daily = up to **+100 Magicubes/day**).',
            '**Publish a Civision model (+10 Magicubes each)**: Publish a public LoRA model trained directly in Civision (capped at 5 times daily = up to **+50 Magicubes/day**).',
            '**Civision creation views milestone (+20 Magicubes)**: Awarded when your Civision creation reaches >= 100 views and >= 3 likes (Long-term).',
            '**Civision creation feedback milestone (+20 Magicubes)**: Awarded when your Civision creation receives >= 10 interactions including remixes, comments, or likes (Long-term).',
            '**Civision model impact (+50 Magicubes each)**: Awarded when your trained Civision model reaches >= 10 inference runs and >= 5 likes (capped at 5 times daily, Long-term).',
          ],
        },
        {
          id: 'open-source-contribution',
          title: 'Open Source Contribution & Platform Impact',
          description:
            'Publishing reusable technical assets, models, datasets, and agents across ModelScope unlocks substantial milestone rewards (+50 Magicubes each unless noted):',
          unorderedList: [
            '**Model impact (non-Civision) (+50 Magicubes)**: Awarded when a hosted model reaches >= 100 downloads and >= 5 likes (Long-term).',
            '**Dataset impact (+50 Magicubes)**: Awarded when a public dataset reaches >= 100 downloads and >= 5 likes (Long-term).',
            '**Studio Impact - View (+50 Magicubes)**: Awarded when an interactive Studio reaches >= 100 views and >= 5 likes (Long-term).',
            '**Studio Impact - Fork (+10 Magicubes)**: Awarded whenever another developer duplicates or forks your Studio (Long-term).',
            '**Gallery Impact - View (+50 Magicubes)**: Awarded when a showcase gallery reaches >= 100 views and >= 5 likes (Long-term).',
            '**Gallery Impact - Fork (+10 Magicubes)**: Awarded whenever another user forks your gallery (Long-term).',
            '**Course / Article impact (+50 Magicubes)**: Awarded when a published tutorial, course, or technical article reaches >= 100 views and >= 5 likes (Long-term).',
            '**Skill Impact (+50 Magicubes)**: Awarded when a published Skill reaches >= 100 downloads and >= 5 likes (Long-term).',
            '**MCP Influence (+50 Magicubes)**: Awarded when a published MCP (Model Context Protocol) server reaches >= 1,000 calls and >= 10 likes (Long-term).',
          ],
        },
      ],
      collapsible: {
        title: 'Maximizing Magicubes and Free Inference Efficiency',
        content:
          'Follow these tips to keep your compute balance topped up:',
        list: [
          'Execute the 2-minute daily routine: Login (+200), Alibaba Cloud Binding (+50), like 20 models/papers/docs (+40), and post 2 comments (+10) to secure your guaranteed 300 Magicubes (10-15M tokens capacity) every day.',
          'Complete the three one-time profile steps (email verification, bio, pinned items) for an immediate +150 Magicube boost.',
          'Share your invitation link at [modelscope.ai/magicube/usage?tab=earn&inviteModal=true](https://modelscope.ai/magicube/usage?tab=earn&inviteModal=true) to earn +20 Magicubes per developer signup (up to 50 per month).',
          'Run your day-to-day coding agents (OpenCode, Claude Code, Cursor) using the free 2,000 daily API inference quota, saving your Magicubes for heavy GPU notebook and LoRA training jobs.',
        ],
      },
    },
    {
      id: 'supported-models',
      title: '3. Supported Foundation Models & Model IDs',
      lead: 'The inference gateway exposes premier open-weight models through OpenAI-compatible interfaces. Use these exact model identifiers in your API requests:',
      unorderedList: [
        '**DeepSeek-V4-Pro** (`deepseek-ai/DeepSeek-V4-Pro`): DeepSeek 1.6T parameter MoE architecture with 49B activated parameters per token and a 1-million-token context window. Ideal for complex system architecture and high-precision code synthesis.',
        '**DeepSeek-V4-Flash** (`deepseek-ai/DeepSeek-V4-Flash`): 284B parameter MoE (13B activated) designed for sub-second responses and agentic tool-use with 1M context.',
        '**DeepSeek-R1** (`deepseek-ai/DeepSeek-R1`): Reasoning model providing detailed chain-of-thought traces via `reasoning_content` delta blocks.',
        '**DeepSeek-V3** (`deepseek-ai/DeepSeek-V3`): General conversational and multi-turn technical foundation model.',
        '**GLM-5.2** (`zai-org/GLM-5.2`): Flagship long-horizon model by Z.ai featuring 1M tokens context, IndexShare architecture, and dynamic thinking effort modes.',
        '**GLM-5** (`zai-org/GLM-5`): High-efficiency system engineering model (744B total, 40B active) utilizing DeepSeek Sparse Attention.',
        '**Qwen 2.5 Coder 32B** (`Qwen/Qwen2.5-Coder-32B-Instruct`): SOTA open coding model specialized in multi-language programming and repository-scale refactoring.',
        '**Qwen 2.5 72B** (`Qwen/Qwen2.5-72B-Instruct`): High-capacity reasoning engine for technical documentation and complex instructions.',
      ],
      collapsible: {
        title: 'Rate Limits & Quota Breakdown',
        content:
          'The free API inference tier features the following boundaries:',
        list: [
          'Aggregate Quota: ~2,000 total requests per 24-hour cycle across all models.',
          'Per-Model Limit: ~500 requests per individual model daily. Hitting 429 on DeepSeek-V4 Pro does not block calls to GLM-5.2 or Qwen 2.5 Coder.',
          'Reset Time: Quotas reset at 00:00 UTC+8 daily.',
          'Production Scaling: For dedicated high-concurrency enterprise workloads, ModelScope provides an API-Provider bridge.',
        ],
      },
    },
    {
      id: 'quick-verification',
      title: '4. Connectivity Verification via cURL & Python',
      lead: 'Test your ModelScope token and gateway connectivity with a simple REST request before configuring IDE extensions.',
      platformTabs: [
        {
          id: 'curl-bash',
          label: 'cURL (macOS / Linux)',
          steps: [
            {
              title: 'Step 1: Export Environment Variable',
              description: 'Export your ModelScope access token in your terminal:',
              command: 'export MODELSCOPE_API_TOKEN="YOUR_MODELSCOPE_TOKEN"',
            },
            {
              title: 'Step 2: Send Chat Completion Request',
              description: 'Call the OpenAI-compatible endpoint requesting DeepSeek-V4 Pro:',
              command: `curl -X POST "https://api-inference.modelscope.cn/v1/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $MODELSCOPE_API_TOKEN" \\
  -d '{
    "model": "deepseek-ai/DeepSeek-V4-Pro",
    "messages": [
      {"role": "system", "content": "You are a concise software engineering assistant."},
      {"role": "user", "content": "Write a TypeScript function to debounce an async callback."}
    ],
    "stream": false
  }'`,
            },
          ],
        },
        {
          id: 'curl-powershell',
          label: 'PowerShell (Windows)',
          steps: [
            {
              title: 'Step 1: Set Session Environment Variable',
              description: 'Assign your token in PowerShell:',
              command: '$env:MODELSCOPE_API_TOKEN = "YOUR_MODELSCOPE_TOKEN"',
            },
            {
              title: 'Step 2: Send REST Request',
              description: 'Invoke the inference endpoint with Invoke-RestMethod:',
              command: `$headers = @{
  "Authorization" = "Bearer $env:MODELSCOPE_API_TOKEN"
  "Content-Type"  = "application/json"
}

$body = @{
  model = "zai-org/GLM-5.2"
  messages = @(
    @{ role = "user"; content = "Explain the IndexShare architecture in GLM-5.2 in two sentences." }
  )
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://api-inference.modelscope.cn/v1/chat/completions" -Method Post -Headers $headers -Body $body`,
            },
          ],
        },
      ],
      collapsible: {
        title: 'Python OpenAI SDK Verification Example',
        content:
          'Because ModelScope implements standard OpenAI wire compatibility, the official openai Python library works out of the box:',
        code: `from openai import OpenAI
import os

client = OpenAI(
    base_url="https://api-inference.modelscope.cn/v1/",
    api_key=os.environ.get("MODELSCOPE_API_TOKEN", "YOUR_TOKEN_HERE"),
)

response = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-V4-Pro",
    messages=[
        {"role": "system", "content": "You are a senior system architect."},
        {"role": "user", "content": "Summarize the key advantages of MoE architectures for code generation."},
    ],
    stream=True,
)

for chunk in response:
    delta = chunk.choices[0].delta
    if hasattr(delta, "reasoning_content") and delta.reasoning_content:
        print(delta.reasoning_content, end="", flush=True)
    elif delta.content:
        print(delta.content, end="", flush=True)
print()`,
      },
    },
    {
      id: 'client-configuration',
      title: '5. AI Coding Client Integration',
      lead: 'Connect ModelScope directly to your terminal coding agents and editor plugins. Select your preferred client below:',
      clientGuides: [
        {
          id: 'opencode',
          title: 'OpenCode CLI',
          lead: 'Route OpenCode automated refactoring sessions through ModelScope models.',
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
                  command: `echo 'export OPENAI_BASE_URL="https://api-inference.modelscope.cn/v1"' >> ~/.zshrc
echo 'export OPENAI_API_KEY="YOUR_MODELSCOPE_TOKEN"' >> ~/.zshrc
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
                        model: 'deepseek-ai/DeepSeek-V4-Pro',
                        providers: {
                          modelscope: {
                            baseURL: 'https://api-inference.modelscope.cn/v1',
                            apiKey: '${OPENAI_API_KEY}',
                            models: [
                              'deepseek-ai/DeepSeek-V4-Pro',
                              'zai-org/GLM-5.2',
                              'Qwen/Qwen2.5-Coder-32B-Instruct',
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
                  command: 'opencode --model deepseek-ai/DeepSeek-V4-Pro',
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
                  command: `[System.Environment]::SetEnvironmentVariable('OPENAI_BASE_URL', 'https://api-inference.modelscope.cn/v1', 'User')
[System.Environment]::SetEnvironmentVariable('OPENAI_API_KEY', 'YOUR_MODELSCOPE_TOKEN', 'User')`,
                },
                {
                  title: 'Step 2: Configure OpenCode Settings File',
                  description: 'Open `%USERPROFILE%\\.config\\opencode\\config.json` and paste:',
                  code: {
                    filename: '%USERPROFILE%\\.config\\opencode\\config.json',
                    language: 'json',
                    content: JSON.stringify(
                      {
                        model: 'zai-org/GLM-5.2',
                        providers: {
                          modelscope: {
                            baseURL: 'https://api-inference.modelscope.cn/v1',
                            apiKey: '${OPENAI_API_KEY}',
                            models: [
                              'deepseek-ai/DeepSeek-V4-Pro',
                              'zai-org/GLM-5.2',
                              'Qwen/Qwen2.5-Coder-32B-Instruct',
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
                  command: 'opencode --model zai-org/GLM-5.2',
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
                        OPENAI_API_KEY: 'YOUR_MODELSCOPE_TOKEN',
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
                        baseURL: 'https://api-inference.modelscope.cn/v1',
                        model: 'deepseek-ai/DeepSeek-V4-Pro',
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
                        baseURL: 'https://api-inference.modelscope.cn/v1',
                        model: 'Qwen/Qwen2.5-Coder-32B-Instruct',
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
          id: 'cursor-cline',
          title: 'Cursor & VS Code (Cline / Roo Code)',
          lead: 'Configure editor extensions like Cursor AI, Cline, or Roo Code to leverage ModelScope models for inline code generation and repository-wide refactoring.',
          platforms: [
            {
              id: 'cursor-ide',
              label: 'Cursor IDE',
              steps: [
                {
                  title: 'Step 1: Open Models Settings',
                  description:
                    'In Cursor, open Settings (`Cmd + ,` or `Ctrl + ,`), navigate to **Features > Models**.',
                },
                {
                  title: 'Step 2: Configure OpenAI API Key & Base URL',
                  description:
                    'Under the OpenAI API Key section, enter your ModelScope Access Token. Click **Override OpenAI Base URL** and enter: `https://api-inference.modelscope.cn/v1`.',
                },
                {
                  title: 'Step 3: Add Custom Model Identifiers',
                  description:
                    'Turn off default OpenAI models and click **+ Add model**. Add the following ModelScope identifiers:',
                  command: 'deepseek-ai/DeepSeek-V4-Pro',
                  note: 'Also add `zai-org/GLM-5.2` and `Qwen/Qwen2.5-Coder-32B-Instruct` as selectable models.',
                },
              ],
            },
            {
              id: 'cline-vscode',
              label: 'Cline / Roo Code (VS Code)',
              steps: [
                {
                  title: 'Step 1: Open Provider Selection',
                  description:
                    'In VS Code, open the Cline or Roo Code sidebar panel and click the gear icon to open settings.',
                },
                {
                  title: 'Step 2: Select OpenAI-Compatible Provider',
                  description:
                    'Change API Provider to **OpenAI Compatible**.',
                },
                {
                  title: 'Step 3: Populate Connection Details',
                  description: 'Fill in the connection parameters:',
                  code: {
                    filename: 'Cline Provider Settings',
                    language: 'text',
                    content: `Base URL: https://api-inference.modelscope.cn/v1
API Key:  <Your ModelScope Access Token>
Model ID: deepseek-ai/DeepSeek-V4-Pro`,
                  },
                },
                {
                  title: 'Step 4: Verify and Save',
                  description:
                    'Click Done / Save. Test with a quick prompt like "Audit this codebase for missing error handlers".',
                },
              ],
            },
          ],
        },
        {
          id: 'claude-code',
          title: 'Claude Code (Proxy Gateway)',
          lead: 'Run @anthropic-ai/claude-code using a lightweight OpenAI-to-Anthropic proxy gateway directing requests to ModelScope.',
          collapsiblePrerequisites: {
            title: 'Proxy Translation Requirement',
            content:
              'Claude Code uses the Anthropic Messages API format (`/v1/messages`). To connect ModelScope to Claude Code, run a lightweight proxy (such as LiteLLM) that receives Anthropic requests and translates them to OpenAI-compatible `/chat/completions`.',
            list: [
              'Install litellm: `pip install litellm`',
              'Proxy command: `litellm --model openai/deepseek-ai/DeepSeek-V4-Pro --api_base https://api-inference.modelscope.cn/v1`',
            ],
          },
          platforms: [
            {
              id: 'claude-code-mac-linux',
              label: 'macOS / Linux',
              steps: [
                {
                  title: 'Step 1: Start LiteLLM Gateway',
                  description: 'Launch the translation proxy in a background terminal session:',
                  command: 'litellm --model openai/deepseek-ai/DeepSeek-V4-Pro --api_base https://api-inference.modelscope.cn/v1 --api_key YOUR_MODELSCOPE_TOKEN --port 4000',
                },
                {
                  title: 'Step 2: Direct Claude Code to Local Gateway',
                  description: 'Configure environment variables pointing Claude Code to the local proxy:',
                  command: `export ANTHROPIC_BASE_URL="http://localhost:4000"
export ANTHROPIC_API_KEY="dummy-key"`,
                },
                {
                  title: 'Step 3: Launch Claude Code',
                  description: 'Run Claude Code in your project directory:',
                  command: 'claude',
                },
              ],
            },
            {
              id: 'claude-code-windows',
              label: 'Windows',
              steps: [
                {
                  title: 'Step 1: Start LiteLLM Proxy',
                  description: 'In PowerShell, start LiteLLM:',
                  command: 'litellm --model openai/deepseek-ai/DeepSeek-V4-Pro --api_base https://api-inference.modelscope.cn/v1 --api_key YOUR_MODELSCOPE_TOKEN --port 4000',
                },
                {
                  title: 'Step 2: Set Session Variables',
                  description: 'Point Claude Code to the local proxy listener:',
                  command: `$env:ANTHROPIC_BASE_URL = "http://localhost:4000"
$env:ANTHROPIC_API_KEY = "dummy-key"`,
                },
                {
                  title: 'Step 3: Launch Claude Code',
                  description: 'Launch Claude Code:',
                  command: 'claude',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'advanced-reasoning',
      title: '6. Handling Reasoning Models & 1M-Token Contexts',
      lead: 'DeepSeek-R1 and GLM-5.2 introduce reasoning tokens and ultra-long context windows that require proper client parameterization.',
      orderedList: [
        '**Reasoning Content Parsing**: Reasoning models output thinking tokens in `chunk.choices[0].delta.reasoning_content` before standard `delta.content`. In agents that stream responses, ensure thinking streams are handled cleanly without collision.',
        '**1-Million-Token Contexts**: DeepSeek-V4 Pro and GLM-5.2 both support 1,000,000 tokens of context. For multi-file analysis or repository-scale prompts, increase your client timeout to 90–120 seconds to accommodate initial prompt evaluation.',
        '**Sampling Parameters**: Use temperature `0.0` to `0.2` for precise code refactoring and tool calls. Increase to `0.6` for open-ended brainstorming or high thinking depth.',
      ],
      notice: {
        type: 'tip',
        title: 'Multi-Model Fallback Hierarchy',
        content:
          'Because ModelScope imposes per-model daily limits (~500 calls/day per model), set up your agent with a multi-model fallback chain: start with `deepseek-ai/DeepSeek-V4-Pro`, fall back to `zai-org/GLM-5.2` upon encountering HTTP 429, and use `Qwen/Qwen2.5-Coder-32B-Instruct` for routine syntax refactoring.',
      },
    },
    {
      id: 'troubleshooting',
      title: '7. Troubleshooting & Status Codes',
      lead: 'Quick reference for resolving common gateway responses and network behaviors:',
      unorderedList: [
        '**HTTP 404 (Browser Visit)**: Expected behavior. `https://api-inference.modelscope.cn/v1` is an API gateway that responds only to authenticated POST requests, not GET browser requests.',
        '**HTTP 401 Unauthorized**: The `Authorization: Bearer <TOKEN>` header is missing, malformed, or invalid. Verify and regenerate your token on [https://modelscope.ai/my/myaccesstoken](https://modelscope.ai/my/myaccesstoken).',
        '**HTTP 429 Too Many Requests**: You reached the daily limit (~500 calls for that specific model or ~2,000 daily overall). Switch to another model ID or wait for the 00:00 UTC+8 daily reset.',
        '**Magicubes vs API Quota Exhaustion**: Running out of Magicubes only restricts GPU-heavy tasks (like fine-tuning and media generation). Your 2,000 free API inference calls continue to function normally.',
        '**Connection Timeouts**: When accessing the inference gateway internationally, ensure client HTTP timeouts are set to at least 90 seconds to prevent premature disconnections during cold starts.',
      ],
    },
  ],
};
