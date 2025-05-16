<div align="center">

## Be sure to check out the new ✨[Context Portal MCP](https://github.com/GreatScottyMac/context-portal)✨

<br>

# 🧠 Roo Code Memory Bank

**Persistent Project Context for AI-Assisted Development**

[![VS Code Extension](https://img.shields.io/badge/VS%20Code-Extension-blue.svg)](https://github.com/RooVetGit/Roo-Code)
[![GitHub](https://img.shields.io/badge/View%20on-GitHub-lightgrey.svg)](https://github.com/GreatScottyMac/roo-code-memory-bank)

</div>

## 🎯 Overview

Roo Code Memory Bank solves a critical challenge in AI-assisted development: **maintaining context across sessions**. By providing a structured memory system integrated with VS Code, it ensures your AI assistant maintains a deep understanding of your project across sessions.

### Key Components

```mermaid
graph LR
    A[Memory Bank] --> B[Core Files]
    A --> C[Mode Rules]
    A --> D[VS Code UI]
    B --> E[Project Context]
    B --> F[Decisions]
    B --> G[Progress]
    C --> H[Architect]
    C --> I[Code]
    C --> J[Ask]
    C --> K1[Debug]
    K[Real-time Updates] --> B
    K --> L[Continuous Sync]
    L --> M[Auto-save]
    L --> N[Event Tracking]
```

- 🧠 **Memory Bank**: Persistent storage for project knowledge
- 📋 **Mode Rules**: YAML-based behavior configuration
- 🔧 **VS Code Integration**: Seamless development experience
- ⚡ **Real-time Updates**: Continuous context synchronization

## 🚀 Quick Start

### 1. Mode-specific Custom Instructions

1. Open the Roo Code Prompts settings.
2. Select the mode to modify.
3. Copy/Paste the contents of the corresponding [memory_bank_strategy_"mode".yml](https://github.com/GreatScottyMac/roo-code-memory-bank/tree/main/modules) file.
4. Save the changes. 

<img src="https://raw.githubusercontent.com/GreatScottyMac/roo-code-memory-bank/main/images/prompt_settings.png" alt="prompt_settings.png" width="300"/>

### 2. Initialize Memory Bank

1. Switch to **Architect** or **Code** mode in Roo Code chat
2. Send a message (e.g., "hello")
3. Roo will automatically:
   - 🔍 Scan for `memory-bank/` directory
   - 📁 Create it if missing (with your approval)
   - 📝 Initialize core files
   - 🚦 Provide next steps

<details>
<summary>💡 Pro Tip: Project Brief</summary>

Create a `projectBrief.md` in your project root **before** initialization to give Roo immediate project context.
</details>

### File Organization

```
project-root/
├── memory-bank/
│   ├── activeContext.md
│   ├── productContext.md
│   ├── progress.md
│   └── decisionLog.md  
└── projectBrief.md
```

## 📚 Memory Bank Structure

```mermaid
graph TD
    MB[memory-bank/] --> AC[activeContext.md]
    MB --> DL[decisionLog.md]
    MB --> PC[productContext.md]
    MB --> PR[progress.md]
    MB --> PB[projectBrief.md]
    MB --> SP[systemPatterns.md]
    
    subgraph Core Files
        AC[Current Session State]
        DL[Technical Decisions]
        PC[Project Overview]
        PR[Progress Tracking]
    end
    
    subgraph Optional
        PB[Project Brief]
        SP[System Patterns]
    end
```

<details>
<summary>📖 View File Descriptions</summary>

| File | Purpose |
|------|----------|
| `activeContext.md` | Tracks current goals, decisions, and session state |
| `decisionLog.md` | Records architectural choices and their rationale |
| `productContext.md` | Maintains high-level project context and knowledge |
| `progress.md` | Documents completed work and upcoming tasks |
| `projectBrief.md` | Contains initial project requirements (optional) |
| `systemPatterns.md` | Documents recurring patterns and standards |

</details>

## ✨ Features

### 🧠 Persistent Context
- Remembers project details across sessions
- Maintains consistent understanding of your codebase
- Tracks decisions and their rationale

### 📊 Knowledge Management
- Structured documentation with clear purposes
- Technical decision tracking with rationale
- Automated progress monitoring
- Cross-referenced project knowledge

## 💡 Pro Tips

### Architect Mode
Roo Code Memory Bank's Architect mode is designed for high-level system design and project organization. This mode focuses on architectural decisions, system structure, and maintaining project-wide consistency.

#### Key Capabilities
- 🏗️ **System Design**: Create and maintain architecture
- 📐 **Pattern Definition**: Establish coding patterns and standards
- 🔄 **Project Structure**: Organize code and resources
- 📋 **Documentation**: Maintain technical documentation
- 🤝 **Team Collaboration**: Guide implementation standards

#### Real-time Update Triggers
Architect mode actively monitors and updates Memory Bank files based on:
- 🎯 Architectural decisions and changes
- 📊 System pattern definitions
- 🔄 Project structure updates
- 📝 Documentation requirements
- ⚡ Implementation guidance needs

#### Memory Bank Integration
```mermaid
graph TD
    A[Architect Mode] --> B[Design Decisions]
    A --> C[Pattern Definition]
    B --> D[Memory Bank Updates]
    C --> D
    D --> E[activeContext.md]
    D --> F[progress.md]
    D --> G[decisionLog.md]
    E --> H[Design Status]
    F --> I[Architecture Progress]
    G --> J[Design Decisions]
```

Switch to Architect mode when you need to:
- Design system architecture
- Define coding patterns
- Structure new projects
- Guide implementations
- Make architectural decisions

### Code Mode
Roo Code Memory Bank's Code mode is your primary interface for implementation and development. This mode specializes in writing, modifying, and maintaining code while following established patterns.

#### Key Capabilities
- 💻 **Code Creation**: Write new code and features
- 🔧 **Code Modification**: Update existing implementations
- 📚 **Documentation**: Add code comments and docs
- ✨ **Quality Control**: Maintain code standards
- 🔄 **Refactoring**: Improve code structure

#### Real-time Update Triggers
Code mode actively monitors and updates Memory Bank files based on:
- 📝 Code implementations
- 🔄 Feature updates
- 🎯 Pattern applications
- ⚡ Performance improvements
- 📚 Documentation updates

#### Memory Bank Integration
```mermaid
graph TD
    A[Code Mode] --> B[Implementation]
    A --> C[Documentation]
    B --> D[Memory Bank Updates]
    C --> D
    D --> E[activeContext.md]
    D --> F[progress.md]
    D --> G[decisionLog.md]
    E --> H[Current Tasks]
    F --> I[Code Progress]
    G --> J[Implementation Decisions]
```

Switch to Code mode when you need to:
- Implement new features
- Modify existing code
- Add documentation
- Apply coding patterns
- Refactor code

### Ask Mode
Roo Code Memory Bank's Ask mode serves as your knowledge base interface and documentation assistant. This mode excels at providing information, explaining concepts, and maintaining project knowledge.

#### Key Capabilities
- 💡 **Knowledge Sharing**: Access project insights
- 📚 **Documentation**: Create and update docs
- 🔍 **Code Explanation**: Clarify implementations
- 🤝 **Collaboration**: Share understanding
- 📖 **Pattern Education**: Explain system patterns

#### Real-time Update Triggers
Ask mode actively monitors and updates Memory Bank files based on:
- ❓ Knowledge requests
- 📝 Documentation needs
- 🔄 Pattern explanations
- 💡 Implementation insights
- 📚 Learning outcomes

#### Memory Bank Integration
```mermaid
graph TD
    A[Ask Mode] --> B[Knowledge Sharing]
    A --> C[Documentation]
    B --> D[Memory Bank Updates]
    C --> D
    D --> E[activeContext.md]
    D --> F[progress.md]
    D --> G[decisionLog.md]
    E --> H[Current Topics]
    F --> I[Documentation Progress]
    G --> J[Knowledge Decisions]
```

Switch to Ask mode when you need to:
- Understand code patterns
- Get implementation guidance
- Create documentation
- Share knowledge
- Learn system concepts

### Debug Mode
Roo Code Memory Bank's Debug mode specializes in systematic problem-solving and troubleshooting. This mode employs strategic analysis and verification to identify and resolve issues.

#### Key Capabilities
- 🔍 **Issue Investigation**: Analyze problems systematically
- 📊 **Error Analysis**: Track error patterns
- 🎯 **Root Cause Finding**: Identify core issues
- ✅ **Solution Verification**: Validate fixes
- 📝 **Problem Documentation**: Record findings

#### Real-time Update Triggers
Debug mode actively monitors and updates Memory Bank files based on:
- 🐛 Bug discoveries
- 📈 Performance issues
- 🔄 Error patterns
- ⚡ System bottlenecks
- 📝 Fix verifications

#### Memory Bank Integration
```mermaid
graph TD
    A[Debug Mode] --> B[Investigation]
    A --> C[Analysis]
    B --> D[Memory Bank Updates]
    C --> D
    D --> E[activeContext.md]
    D --> F[progress.md]
    D --> G[decisionLog.md]
    E --> H[Current Issues]
    F --> I[Debug Progress]
    G --> J[Solution Decisions]
```

Switch to Debug mode when you need to:
- Investigate issues
- Analyze errors
- Find root causes
- Verify fixes
- Document problems

### Session Management
- ⚡ **Real-time Updates**: Memory Bank automatically stays synchronized with your work
- 💾 **Manual Updates**: Use "UMB" or "update memory bank" as a fallback when:
  - Ending a session unexpectedly
  - Halting mid-task
  - Recovering from connection issues
  - Forcing a full synchronization

## 📖 Documentation

- [Developer Deep Dive](https://github.com/GreatScottyMac/roo-code-memory-bank/blob/main/developer-primer.md)
- [Update Log](https://github.com/GreatScottyMac/roo-code-memory-bank/blob/main/updates.md)

## 🛠️ System Prompts and Utilities

### System Prompt Files

The `.roo` directory contains system prompt files that define the behavior of Roo's different modes:

```
.roo/
├── example-system-prompt
├── system-prompt-architech
├── system-prompt-ask
├── system-prompt-code
└── system-prompt-debug
```

These files contain system variables that are used by Roo to understand your environment:

| Variable | Description |
|----------|-------------|
| `CURRENT_WORKING_DIRECTORY` | The current working directory of your project |
| `HOME_DIRECTORY` | Your home directory path |
| `GLOBAL_CUSTOM_MODES_PATH` | Path to global custom modes configuration |
| `OPERATING_SYSTEM` | Your operating system |
| `DEFAULT_SHELL` | Your default shell |

### Utility Scripts

The `scripts` directory contains utilities for managing system prompt files:

```
scripts/
├── populate-system-vars.js
└── wipe-system-vars.js
```

#### Populate System Variables

The `populate-system-vars.js` script automatically populates system variables in all system prompt files:

```bash
node scripts/populate-system-vars.js
```

This script:
- Detects your current system environment
- Updates all system-prompt files in the .roo directory
- Provides a summary of updated files

#### Wipe System Variables

The `wipe-system-vars.js` script removes values from system variables in all system prompt files:

```bash
node scripts/wipe-system-vars.js
```

This script:
- Clears all system variable values in system-prompt files
- Useful for preparing files for version control
- Preserves the structure of the files

---

<div align="center">

**[View on GitHub](https://github.com/GreatScottyMac/roo-code-memory-bank) • [Report Issues](https://github.com/GreatScottyMac/roo-code-memory-bank/issues) • [Get Roo Code](https://github.com/RooVetGit/Roo-Code)**

</div>

## License

Apache 2.0 © 2025 [GreatScottyMac](LICENSE)
