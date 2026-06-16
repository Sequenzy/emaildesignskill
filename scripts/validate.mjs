import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/email-design/SKILL.md",
  "skills/email-design/agents/openai.yaml",
  "skills/email-design/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/email-design/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: email-design\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add email-design")) throw new Error("Missing install shortcut");
console.log("emaildesignskill.com ok");
