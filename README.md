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
   - Now able to run 'tsc' to compile every typescript file
   - Add exclude '\<filename>'
   <pre><code>"exclude": {
      "filename"
   }
   </code></pre>
   - Add include '\<filename>'
     - Only files inside include will be compiled
     <pre><code>"include": {
        "filename"
     }
     </code></pre>
   - Allows for watch mode
     - tsc -w
     - Auto compiles typescript files

## **How to use**:

1.  After cloning
    - npm install --save-dev lite-server
2.  Running
    1. npm start
       - From package.json
    2. Running with HTML
       - Call the compiler to convert typescript files into javascript files
       - tsc \<filename>.ts
       - Open HTML in browser
    3. Running TypeScript directly
       - ts-node \<filename>.ts
