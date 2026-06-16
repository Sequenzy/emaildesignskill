import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "public/about/index.html",
  "public/privacy-policy/index.html",
  "public/terms-of-use/index.html",
  "skills/emaildesignskill/SKILL.md",
  "skills/emaildesignskill/agents/openai.yaml",
  "skills/emaildesignskill/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/emaildesignskill/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: emaildesignskill\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add emaildesignskill")) throw new Error("Missing install shortcut");
console.log("emaildesignskill.com ok");
