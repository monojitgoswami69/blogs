import { BlogPost } from '../../types/blog';

export const modelscopeBlog: BlogPost = {
  slug: 'modelscope',
  title: 'ModelScope AI Inference Setup Guide',
  subtitle: 'DeepSeek-V4 Pro, GLM-5.2 & Qwen Integration via OpenAI-Compatible API with Free Daily Quota',
  description:
    'Complete step-by-step technical guide to using ModelScope MaaS inference API, generating access tokens, and integrating GLM-5.2, DeepSeek-V4 Pro, and Qwen with OpenCode, Claude Code, Cursor, and Python.',
  publishedAt: '2026-09-04',
  updatedAt: '2026-09-04',
  readingTime: '6 min read',
  tags: ['AI', 'ModelScope', 'DeepSeek', 'GLM-5.2', 'OpenCode', 'Claude Code', 'Cursor', 'Guide'],
  author: {
    name: 'Monojit Goswami',
    url: 'https://mgbuilds.in',
  },
  notice: {
    type: 'info',
    title: 'ModelScope Free Inference Quota',
    content:
      'ModelScope provides a free developer tier for its OpenAI-compatible inference endpoint (`https://api-inference.modelscope.cn/v1`). Registered users receive a dynamic daily allocation of approximately 2,000 requests per day in aggregate, with a per-model limit of roughly 500 requests per day. No credit card is required to access the free tier.',
  },
  sections: [
    {
      id: 'account-token-setup',
      title: '1. Account Registration & Access Token Generation',
      lead: 'To begin calling models through the inference endpoint, create a ModelScope account and generate an API access token.',
      orderedList: [
        '**Create ModelScope Account**: Navigate to [https://modelscope.cn](https://modelscope.cn) and click the login button in the top-right header. You can authenticate using GitHub, email, or mobile phone verification.',
        '**Open Access Token Dashboard**: After logging in, navigate directly to your Access Tokens page at [https://modelscope.cn/my/myaccesstoken](https://modelscope.cn/my/myaccesstoken) or open the user dropdown and select "Access Token".',
        '**Generate New Token**: Click "Create New Token" (新建 Access Token). Provide a descriptive label (such as `coding-assistant-cli`) and confirm token creation.',
        '**Copy Token Securely**: Copy the generated token string. It typically starts with alphanumeric characters or an `ms-` prefix. Store this key in your local password manager or environment file.',
        '**Account Verification Note**: Standard free-tier accounts receive immediate inference access. Certain specialized or high-parameter models may require bound phone verification on your profile.',
      ],
      actionButton: {
        text: 'Open ModelScope Token Portal →',
        url: 'https://modelscope.cn/my/myaccesstoken',
      },
      notice: {
        type: 'warning',
        title: 'Token Security',
        content:
          'Never commit your ModelScope access token to public repositories or hardcode it in client-side bundles. Use environment variables like `MODELSCOPE_API_TOKEN` or your shell configuration (`~/.zshrc`, `~/.bashrc`).',
      },
    },
    {
      id: 'supported-models',
      title: '2. Supported Foundation Models & Model IDs',
      lead: 'ModelScope hosts high-performance open-weight models available through its OpenAI-compatible inference gateway. Use the exact model IDs below in your API requests:',
      unorderedList: [
        '**DeepSeek-V4-Pro** (`deepseek-ai/DeepSeek-V4-Pro`): DeepSeek 1.6T parameter MoE architecture with 49B activated parameters per token and a 1-million-token context window. Excels in complex code generation and mathematical reasoning.',
        '**DeepSeek-V4-Flash** (`deepseek-ai/DeepSeek-V4-Flash`): 284B parameter MoE (13B activated) optimized for low latency and fast tool-use execution with 1M context.',
        '**DeepSeek-R1** (`deepseek-ai/DeepSeek-R1`): Reasoning model outputting explicit chain-of-thought tokens via `reasoning_content` delta blocks.',
        '**DeepSeek-V3** (`deepseek-ai/DeepSeek-V3`): General conversational and technical reasoning foundation model.',
        '**GLM-5.2** (`zai-org/GLM-5.2`): Flagship long-horizon agentic model by Z.ai featuring a 1-million-token context window, IndexShare architecture, and adjustable thinking effort modes.',
        '**GLM-5** (`zai-org/GLM-5`): High-efficiency system engineering and coding model (744B total, 40B active) utilizing DeepSeek Sparse Attention.',
        '**Qwen 2.5 Coder 32B** (`Qwen/Qwen2.5-Coder-32B-Instruct`): Specialized coding model with state-of-the-art Python, TypeScript, and system architecture benchmark performance.',
        '**Qwen 2.5 72B** (`Qwen/Qwen2.5-72B-Instruct`): Versatile instruction-tuned flagship model for complex multi-turn workflows.',
      ],
      collapsible: {
        title: 'Quota Allocation & Rate Limits Details',
        content:
          'ModelScope allocates daily quotas dynamically based on platform capacity. Key limitations include:',
        list: [
          'Aggregate Quota: ~2,000 total requests every 24 hours across all models on free tier.',
          'Per-Model Limit: ~500 requests per model daily. If you hit 429 on `deepseek-ai/DeepSeek-V4-Pro`, you can switch to `zai-org/GLM-5.2` or `Qwen/Qwen2.5-Coder-32B-Instruct` without waiting for the next reset.',
          'Daily Reset: Quotas reset at 00:00 UTC+8 daily.',
          'Production SLA: For dedicated production concurrency without rate-limiting, ModelScope offers an API-Provider tier.',
        ],
      },
    },
    {
      id: 'quick-verification',
      title: '3. Connectivity Verification via cURL & Python',
      lead: 'Before configuring IDE clients, verify that your ModelScope token is valid and your network can reach the inference gateway.',
      platformTabs: [
        {
          id: 'curl-bash',
          label: 'cURL (macOS / Linux)',
          steps: [
            {
              title: 'Step 1: Export Environment Variable',
              description: 'Set your ModelScope access token in your terminal session:',
              command: 'export MODELSCOPE_API_TOKEN="YOUR_MODELSCOPE_TOKEN"',
            },
            {
              title: 'Step 2: Send Chat Completion Request',
              description: 'Call the OpenAI-compatible `/chat/completions` endpoint requesting DeepSeek-V4 Pro:',
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
          'Because ModelScope implements standard OpenAI wire compatibility, the official openai Python library works without extra wrappers:',
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
    # Print reasoning process if present (e.g. DeepSeek-R1)
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
      title: '4. AI Coding Client Integration',
      lead: 'Integrate ModelScope models directly into your terminal workflows and editor environments. Select your client below:',
      clientGuides: [
        {
          id: 'opencode',
          title: 'OpenCode CLI',
          lead: 'Configure the OpenCode agent to route system edits and refactoring tasks through ModelScope.',
          collapsiblePrerequisites: {
            title: 'Prerequisites: OpenCode CLI Installation',
            content: 'Ensure OpenCode is installed on your machine:',
            code: 'opencode --version',
            list: [
              'Install via npm: `npm install -g opencode`',
              'Or install via Homebrew (macOS): `brew install opencode`',
            ],
          },
          platforms: [
            {
              id: 'opencode-mac-linux',
              label: 'macOS / Linux',
              steps: [
                {
                  title: 'Step 1: Configure Environment Variables',
                  description:
                    'Add the ModelScope endpoint and token to your shell profile (`~/.zshrc` or `~/.bashrc`):',
                  command: `echo 'export OPENAI_BASE_URL="https://api-inference.modelscope.cn/v1"' >> ~/.zshrc
echo 'export OPENAI_API_KEY="YOUR_MODELSCOPE_TOKEN"' >> ~/.zshrc
source ~/.zshrc`,
                },
                {
                  title: 'Step 2: Create OpenCode Configuration File',
                  description:
                    'Create or edit `~/.config/opencode/config.json` to define ModelScope as your active provider:',
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
                  description: 'Start an agent session specifying your preferred model:',
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
                  description: 'Run in PowerShell as Administrator or current user:',
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
          lead: 'Route the @openai/codex CLI through ModelScope OpenAI-compatible endpoints.',
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
                  description: 'Create the configuration directory and add your ModelScope credentials:',
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
                  title: 'Step 2: Configure Base URL and Model in Settings',
                  description: 'Create `~/.codex/config.json` to route requests to ModelScope:',
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
                  title: 'Step 3: Run Codex Query',
                  description: 'Execute Codex against your local workspace:',
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
                  title: 'Step 2: Configure auth.json and config.json',
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
          lead: 'Configure editor extensions like Cursor AI, Cline, or Roo Code to leverage ModelScope models for inline completions and agentic edits.',
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
                  title: 'Step 3: Add Custom Model Names',
                  description:
                    'Turn off default OpenAI models and click **+ Add model**. Add the following ModelScope identifiers:',
                  command: 'deepseek-ai/DeepSeek-V4-Pro',
                  note: 'Also add `zai-org/GLM-5.2` and `Qwen/Qwen2.5-Coder-32B-Instruct` as additional selectable models.',
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
                  description: 'Fill in the following connection parameters:',
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
                    'Click Done / Save. Test with a quick query like "Explain the current workspace package.json".',
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
            title: 'Proxy Requirement Notice',
            content:
              'Claude Code natively communicates using Anthropic Messages API format (`/v1/messages`). To use ModelScope models with Claude Code, run a local translation proxy (such as liteLLM or open-router proxy) that accepts Anthropic format and translates to OpenAI-compatible `/chat/completions`.',
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
                  description: 'Set the Anthropic base URL environment variable to point to the local proxy:',
                  command: `export ANTHROPIC_BASE_URL="http://localhost:4000"
export ANTHROPIC_API_KEY="dummy-key"`,
                },
                {
                  title: 'Step 3: Run Claude Code',
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
                  title: 'Step 2: Set Environment Variables in Client Session',
                  description: 'Point Claude Code to the local proxy listener:',
                  command: `$env:ANTHROPIC_BASE_URL = "http://localhost:4000"
$env:ANTHROPIC_API_KEY = "dummy-key"`,
                },
                {
                  title: 'Step 3: Run Claude Code',
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
      title: '5. Handling Reasoning Models & Context Windows',
      lead: 'Advanced architectures such as DeepSeek-R1 and GLM-5.2 introduce specific behaviors that clients must handle correctly.',
      orderedList: [
        '**Reasoning Content Parsing**: Reasoning models generate internal reasoning traces before producing final answers. When consuming streaming responses via the `/chat/completions` protocol, check for `chunk.choices[0].delta.reasoning_content`. Clients that do not support reasoning fields may only display the final content block once thinking concludes.',
        '**1-Million-Token Contexts**: Both DeepSeek-V4 Pro and GLM-5.2 support context windows up to 1,000,000 tokens. When submitting large repositories or extensive log traces, ensure your client HTTP timeout is configured to at least 120 seconds to prevent network disconnects during prompt processing.',
        '**Sampling Parameters**: For structured code generation and agentic editing tasks, maintain temperature between `0.0` and `0.3`. For open-ended creative tasks or high reasoning depth, use `0.6` to `0.7`.',
      ],
      notice: {
        type: 'tip',
        title: 'Model Fallback Strategy',
        content:
          'Because ModelScope imposes per-model daily limits (~500 calls/day per model), configure your multi-agent tooling with a fallback chain: start with `deepseek-ai/DeepSeek-V4-Pro`, fall back to `zai-org/GLM-5.2` upon HTTP 429, and fall back to `Qwen/Qwen2.5-Coder-32B-Instruct` for routine refactoring.',
      },
    },
    {
      id: 'troubleshooting',
      title: '6. Troubleshooting & Common Status Codes',
      lead: 'Refer to this table and checklist when diagnosing connection issues with the ModelScope gateway:',
      unorderedList: [
        '**HTTP 404 (Page Not Found when visited in browser)**: Normal behavior. `https://api-inference.modelscope.cn/v1` is an API gateway that responds to POST requests with authentication, not a browsable web interface.',
        '**HTTP 401 Unauthorized**: The `Authorization: Bearer <TOKEN>` header is missing, malformed, or has expired. Verify your token in the ModelScope token dashboard.',
        '**HTTP 429 Too Many Requests**: You have exceeded the daily request limit (~500 requests for the specific model or ~2,000 total daily). Switch your client model ID to an alternative model or wait until the 00:00 UTC+8 daily reset.',
        '**Network Latency & Timeouts**: If calling the API from outside East Asia, ensure HTTP connection timeouts in your client configuration are increased to 90–120 seconds, especially for cold-start requests or 1M context evaluation.',
        '**Phone Verification Prompts**: Certain cutting-edge models require verified real-name or mobile verification on `modelscope.cn`. If your request returns an account verification requirement, log in to ModelScope and complete profile binding.',
      ],
    },
  ],
};
