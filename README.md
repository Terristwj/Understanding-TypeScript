# Understanding TypeScript
 Paid Udemy Course

---
## **Prerequisites**:
1. In VSCode
    - Change settings.json
    <pre><code>"terminal.integrated.profiles.windows": {
        "PowerShell": {
            "source": "PowerShell",
            "icon": "terminal-powershell",
            "args": ["-ExecutionPolicy", "Bypass"]
        }
    },
    "terminal.integrated.defaultProfile.windows": "PowerShell",</code></pre>
    - Termainal: Use Git Bash or PowerShell
2. Install Node.js from website
    - Check if Node.js is installed
    - node -v
3. Install TypeScript using bash command
    - Install using any command prompt/terminal
    - npm install -g typescript
    - tsc -v
4. (Optional) Iniitialize TypeScript config 
    - tsc --init

## **How to use**:
 1. Running with HTML
     - Call the compiler to convert typescript files into javascript files
     - tsc \<filename>.ts
     - Open HTML in browser
 2. Running TypeScript directly
     - ts-node \<filename>.ts