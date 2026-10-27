# Bio-score — private setup notes

**Do not put this file in the public repository.** Keep it in Google Drive, or in a
private repo. It describes how the system is wired together.

---

## Pieces

| Piece | Where |
|---|---|
| `Code.gs` | Apps Script project on the department Google account |
| Database | Spreadsheet "Bio-score Database", created by `setup()` |
| Student page | `index.html` on GitHub Pages |
| Staff page | `staff.html` on GitHub Pages |
| Web app URL | pasted once into `config.js` |

## Database tabs

`Config`, `Students`, `Subjects`, `Activities`, `Grades`, `Teachers`, `Sessions`,
`AuditLog`, `EmailLog`, `Snapshots` — all created automatically.

Never rename a tab or edit row 1; the headers are how the script finds its columns.
Keep the spreadsheet private: it holds every mark in the department.

## Useful functions (run from the script editor)

| Function | What it does |
|---|---|
| `setup()` | Creates/repairs the database and its tabs. Safe to re-run. |
| `whereIsMyDatabase()` | Prints which spreadsheet is in use |
| `emailMyAdminCode()` | Emails you a fresh admin code |
| `useExistingSpreadsheet(id)` | Moves the database to another spreadsheet |

## After changing Code.gs

**Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy.**
Without a new version the live app keeps running the old code.

## Roles

- **teacher** — only their own subjects
- **head** — every subject, read-only, plus department reports
- **admin** — everything, including accounts and settings

Roles are checked on the server for every single request. The separate links are for
convenience; the access code and the role check are the real protection.

## Settings worth knowing

| Key | Meaning |
|---|---|
| `rate_limit_per_hour` | How many reports one student may request per hour (set to 1) |
| `auto_notify` | `YES` emails students automatically when an activity is released |
| `app_url` | Put the **staff** link here — it becomes the button in code emails |
| `pass_percent` | Default pass line as a % of the teacher's total |

## Email quota

A normal Gmail account sends 100 emails a day; a Workspace account (`@uor.edu.krd`)
sends 1500. Sending a whole stage at once consumes that allowance.

## Recovery

- Teacher lost their code → Admin → Accounts → *Email a new code*. The old one dies.
- Marks changed by mistake → `AuditLog` shows who and when; `Snapshots` holds a copy
  of the subject's marks from every save.
- Something broken after an edit → re-run `setup()`; it repairs missing tabs and
  headers without touching existing rows.
