# JayS 🚀

<div align="center">
  <img src="JayS.png" alt="JayS Logo" width="200" height="200">
  
  **A lightning-fast, real-time JavaScript/TypeScript playground built with Tauri + React**
  
  [![Tauri](https://img.shields.io/badge/Tauri-2.0-FFC131?style=for-the-badge&logo=tauri&logoColor=black)](https://tauri.app/)
  [![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Monaco Editor](https://img.shields.io/badge/Monaco%20Editor-4.7-007ACC?style=for-the-badge&logo=microsoft&logoColor=white)](https://microsoft.github.io/monaco-editor/)
</div>

---

## ✨ Features

### 🎯 **Real-time Code Execution**

- **Instant feedback** - See your code results as you type
- **Live TypeScript transpilation** using esbuild-wasm
- **Safe code evaluation** with proper error handling
- **Console.log capture** and display

### 🎨 **Beautiful Development Experience**

- **Monaco Editor** with Dracula theme for professional coding
- **Split-screen layout** - Code editor on the left, output on the right
- **Synchronized scrolling** between editor and output panels
- **Syntax highlighting** for JavaScript and TypeScript

### ⚡ **Developer Productivity**

- **Auto-formatting** with Prettier (⌘+Shift+F / Ctrl+Shift+F)
- **Debounced execution** for smooth performance
- **Error handling** with clear error messages
- **Object serialization** for complex data structures

### 🖥️ **Cross-platform Desktop App**

- **Native performance** with Tauri framework
- **Small bundle size** compared to Electron
- **Cross-platform** - Windows, macOS, and Linux
- **Offline-first** - No internet required

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Rust](https://rustup.rs/) (for Tauri)
- [pnpm](https://pnpm.io/) (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/jays.git
cd jays

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Building for Production

```bash
# Build the desktop application
pnpm tauri build

# The executable will be in src-tauri/target/release/
```

---

## 🛠️ Architecture

JayS is built with a clean, modular architecture:

```
src/
├── components/          # Reusable UI components
├── services/           # Core business logic
│   ├── exec.ts        # Safe code evaluation
│   ├── transpile.ts   # TypeScript compilation
│   └── formatter.ts   # Code formatting
├── utils/             # Utility functions
│   └── debounce.ts    # Performance optimization
├── viewmodels/        # State management
│   └── useCodeEditorViewModel.ts
└── views/             # Page components
    └── EditorPage.tsx
```

### Key Technologies

- **Frontend**: React 18 + TypeScript + Vite
- **Desktop**: Tauri 2.0 (Rust + WebView)
- **Editor**: Monaco Editor (same as VS Code)
- **Transpilation**: esbuild-wasm
- **Formatting**: Prettier
- **Styling**: CSS-in-JS with Dracula theme

---

## 💡 Usage Examples

### Basic JavaScript

```javascript
const message = "Hello, JayS!";
console.log(message);

// Returns: "Hello, JayS!"
```

### TypeScript with Interfaces

```typescript
interface User {
  name: string;
  age: number;
}

const greetUser = (user: User): string => {
  return `Hello ${user.name}, you are ${user.age} years old!`;
};

console.log(greetUser({ name: "Alice", age: 25 }));
```

### Complex Data Structures

```javascript
const data = {
  users: [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
  ],
  metadata: {
    total: 2,
    timestamp: new Date(),
  },
};

console.log(data);
```

---

## 🎨 Customization

### Themes

JayS uses the Dracula theme by default. You can customize the theme by modifying the Monaco Editor configuration in `EditorPage.tsx`.

### Keybindings

- **Format Code**: `⌘+Shift+F` (macOS) / `Ctrl+Shift+F` (Windows/Linux)
- **Auto-execution**: Code runs automatically after 300ms of inactivity

### Configuration

Edit `src-tauri/tauri.conf.json` to customize:

- Window size and properties
- App metadata
- Build settings

---

## 🔧 Development

### Project Structure

```
jays/
├── src/               # Frontend source code
├── src-tauri/         # Tauri backend (Rust)
├── public/           # Static assets
└── dist/             # Build output
```

### Available Scripts

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm tauri dev        # Start Tauri development
pnpm tauri build      # Build desktop app
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🐛 Troubleshooting

### Common Issues

**Code not executing:**

- Check for syntax errors in the console
- Ensure TypeScript code is valid
- Verify all dependencies are installed

**Performance issues:**

- The app uses debounced execution (300ms delay)
- Large objects are automatically serialized
- Consider breaking down complex operations

**Build errors:**

- Ensure Rust toolchain is up to date
- Check Tauri dependencies
- Verify Node.js version compatibility

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Tauri](https://tauri.app/) for the amazing desktop framework
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the code editor
- [esbuild](https://esbuild.github.io/) for fast TypeScript compilation
- [Prettier](https://prettier.io/) for code formatting
- [Dracula Theme](https://draculatheme.com/) for the beautiful color scheme

---

<div align="center">
  <p>Made with ❤️ by the JayS team</p>
  <p>Star this repo if you found it useful! ⭐</p>
</div>
