# Bio-score

Student marks portal for the **Biotechnology Department, University of Raparin**.

Students never see marks on a screen — they request a report and it is emailed to them,
so only the owner of the inbox can read it. Teachers enter marks with a private code,
the head of department sees every subject, and everything downloads to Word and Excel.

**Two separate links, one backend:**

| Who | Link | Page |
|---|---|---|
| Students | `https://<user>.github.io/<repo>/` | `index.html` |
| Teachers, head of department, admin | `https://<user>.github.io/<repo>/staff.html` | `staff.html` |

The student link contains no teacher or admin code at all — not even hidden. The staff
portal is a darker shade so you always know which one you are looking at, and each
installs to the phone as its own app with its own icon.

---

## Files

| File | Where it goes |
|---|---|
| `Code.gs` | Google Apps Script project (department account) |
| `config.js` | GitHub repo — **the only place you paste the web app URL** |
| `index.html` | student portal |
| `staff.html` | teacher / head / admin portal |
| `common.js`, `style.css` | shared by both pages |
| `manifest.json`, `manifest-staff.json`, `sw.js` | PWA files |
| `icon-*.png` | app icons (teal = students, dark = staff) |

---

## 1. Backend (10 minutes)

1. Sign in to the **department Google account**.
2. Go to `script.google.com` → **New project** → name it `Bio-score`.
3. Delete the sample code, paste all of `Code.gs`, save.
4. In the menu choose the function **`setup`** and press **Run**.
   - Approve the permissions when asked.
   - Open **Execution log** — it prints the database URL and your admin login code. **Copy that code.**
   - A spreadsheet called **Bio-score Database** is now in the account's Drive with every sheet ready.
5. **Deploy → New deployment → Web app**
   - Execute as: **Me (the department account)**
   - Who has access: **Anyone**
   - Deploy, then copy the URL ending in `/exec`.

> Every time you change `Code.gs`, use **Deploy → Manage deployments → edit → New version**,
> otherwise the live app keeps the old code.

## 2. Front-end

1. Create a GitHub repo (for example `nawzad9/bio-score`).
2. Upload every file in the table above except `Code.gs`.
3. Open `config.js` and paste your `/exec` URL between the quotes. **That is the only edit** —
   both pages read it from there.
4. **Settings → Pages → Branch: main / root.** Both links are live in about a minute.
5. Open each link on your phone → **Add to Home Screen**. Students install the student app,
   teachers install the staff app; they sit side by side with different icons.

> Want the staff link less guessable? Rename `staff.html` to anything you like
> (`office.html`, `t-panel.html`…) and update `start_url` in `manifest-staff.json` plus the
> `staff.html` entry in `sw.js`. This only hides the door — the real protection is the code
> and the role check on the server, which never trusts the page it is talking to.

## 3. First login

Open the **staff link** → your email + the admin code from the execution log.
You stay signed in on that device until you press the power button in the header.

Then, in the **Admin panel**:
- **Settings** — department name, academic year, brand colour, pass percentage, and `app_url`
  (paste your **staff** link so teachers get a working button in their code email).
- **Accounts** — add each teacher and the head of department. The access code is generated
  and emailed automatically.
- **Subjects** — one row per module. `teacher_total` is the part of the mark the teacher
  holds: **50** for most subjects, **100** for Academic Debate. Pass line defaults to half.
- **Students** — paste the list, one per line: `id, name, email, stage, group`.
  A student sees the subjects of their own stage.

## 4. Daily use

**Teacher** → staff link → pick a subject → *Activities* → add Quiz 1, Lab report, Seminar…
with a max mark each (the page warns until they add up to the teacher total) → *Marks* →
type the marks → **Save** → **Send marks to students**.

An activity marked **Draft** is never shown to students. Mark it **Published** when it is final.

**Head of department** → *Department report* → every subject with average, highest, lowest and
pass count, a list of modules where nothing has been entered yet, and one-click Word / Excel
exports including an all-subjects mark file.

**Student** → student link → email → their name and stage appear → tick the subjects (or All)
→ the report arrives in their inbox with a Word copy attached.

---

## Things worth knowing

- **Email quota.** A normal Gmail account sends **100 emails a day**; a Google Workspace account
  (`@uor.edu.krd`) sends **1500**. Sending a whole stage at once eats into that, so for large
  classes use a Workspace account or send subject by subject.
- **The final exam is not in the system.** Only the marks the teacher holds. The report says so
  in all three languages.
- **Roles are enforced on the server.** A teacher sees only their own subjects, the head sees all
  of them read-only, and only an admin reaches the admin panel. Splitting the links is for
  convenience and tidiness; the code and the role check are what actually protect the data.
- **Every change is recorded.** `AuditLog` keeps who changed which mark and when, `EmailLog`
  keeps what was sent to whom, and `Snapshots` stores a copy of the subject's marks every time
  they are saved — nothing can be lost.
- **Rate limit.** A student can request a report 3 times an hour (change it in Settings), so no
  one can spam a classmate's inbox.
- **Codes are stored hashed.** Nobody — not even you in the spreadsheet — can read a teacher's
  code. If one is lost, press *Email a new code*; the old one stops working.
- **Keep the spreadsheet private.** It holds all the marks. Share it with no one.

## Languages

Kurdish (default), English and Arabic — the button in the header switches all three, including
the direction of the page and the emails.
