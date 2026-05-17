# -*- coding: utf-8 -*-
"""Patch index.html: Hephaestus apply URL, drop duplicate internships + modal, a11y."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
INDEX = ROOT / "index.html"
U = "https://hephaestus.international/internships"

MARK_START = "<!-- ═══════════════════════════ INTERNSHIPS ═══════════════════════════ -->"
MODAL_COMMENT = "<!-- ══ APPLICATION MODAL ══ -->"
TOAST_COMMENT = "<!-- TOAST -->"


def main():
    s = INDEX.read_text(encoding="utf-8")

    i0 = s.find(MARK_START)
    i1 = s.find(MODAL_COMMENT, i0) if i0 != -1 else -1
    if i0 != -1 and i1 != -1:
        s = s[:i0].rstrip() + "\n\n" + s[i1:]

    i_m = s.find(MODAL_COMMENT)
    i_t = s.find(TOAST_COMMENT, i_m) if i_m != -1 else -1
    if i_m != -1 and i_t != -1:
        s = s[:i_m].rstrip() + "\n\n" + s[i_t:]

    s = s.replace(
        '<button class="nav-apply" onclick="openApplyModal(\'Space Ventures Institute\')">Apply Now</button>',
        f'<a class="nav-apply" href="{U}">Apply on Hephaestus</a>',
    )

    s = s.replace(
        '<li><a onclick="showPage(\'internships\')">Internships</a></li>',
        f'<li><a href="{U}">Internships</a></li>',
    )

    s = re.sub(
        r'<a\s+onclick="showPage\(\'internships\'\)">([^<]+)</a>',
        rf'<a href="{U}">\1</a>',
        s,
    )

    s = re.sub(
        r"<button\s+onclick=\"openApplyModal\('([^']*)'\)\"([^>]*)>([\s\S]*?)</button>",
        lambda m: f'<a href="{U}" class="btn-apply-external"{m.group(2)}>{m.group(3)}</a>',
        s,
    )

    s = re.sub(
        r"<button\s+onclick=\"showPage\('internships'\)\"([^>]*)>([\s\S]*?)</button>",
        lambda m: f'<a href="{U}" class="btn-apply-external"{m.group(1)}>{m.group(2)}</a>',
        s,
    )

    s = re.sub(
        r'(<a href="' + re.escape(U) + r'" class="btn-apply-external"[^>]*>Apply Now)\s*<img[^>]*>(\s*</a>)',
        r'\1 <span class="apply-arrow" aria-hidden="true">' + "\u2197" + r"</span>\2",
        s,
        count=1,
    )

    for pat in [
        r"function openApplyModal\(role\)\{[\s\S]*?\}\n",
        r"function closeModal\(\)\{[\s\S]*?\}\n",
        r"function closeModalOutside\(e\)\{[\s\S]*?\}\n",
        r"function submitApp\(\)\{[\s\S]*?\}\n",
    ]:
        s = re.sub(pat, "", s, count=1)

    s = s.replace(
        "window.scrollTo({top:0,behavior:'smooth'});",
        "window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});",
    )

    s = s.replace(
        '<div id="toast" style="display:none;',
        '<div id="toast" role="status" aria-live="polite" aria-atomic="true" style="display:none;',
    )

    if 'name="description"' not in s:
        s = s.replace(
            "<title>Space Ventures Institute</title>\n",
            "<title>Space Ventures Institute | FloLabs × Hephaestus Labs</title>\n"
            '<meta name="description" content="Space Ventures Institute — AI, robotics, and space innovation. Apply for internships on Hephaestus.International."/>\n',
        )

    if '<a class="skip-link"' not in s:
        s = s.replace(
            "<body>",
            "<body>\n<a class=\"skip-link\" href=\"#main-content\">Skip to main content</a>",
        )

    if '<main id="main-content"' not in s:
        s = s.replace(
            "</nav>\n\n<div id=\"page-home\"",
            "</nav>\n\n<main id=\"main-content\" tabindex=\"-1\">\n<div id=\"page-home\"",
            1,
        )

    if "</main>\n\n<!-- TOAST -->" not in s:
        s = s.replace(
            "\n\n<!-- TOAST -->",
            "\n\n</main>\n\n<!-- TOAST -->",
            1,
        )

    a11y_css = """
/* ── A11y & apply links ── */
.skip-link{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}
.skip-link:focus{position:fixed;left:1rem;top:1rem;width:auto;height:auto;z-index:9999;padding:0.75rem 1.25rem;background:var(--white);color:#0b1220;font-weight:600;border-radius:8px;box-shadow:0 8px 30px rgba(0,0,0,0.45);text-decoration:none;outline:2px solid #678EAC;outline-offset:2px}
a.nav-apply{display:inline-flex;align-items:center;justify-content:center;text-decoration:none}
a.nav-apply:hover{background:#7aa0bc}
.btn-apply-external{box-sizing:border-box;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:0.35rem}
.apply-arrow{font-size:1.1em;line-height:1}
a:focus-visible,button:focus-visible,.nav-logo:focus-visible{outline:2px solid #93c5fd;outline-offset:3px}
@media (prefers-reduced-motion: reduce){
  html{scroll-behavior:auto}
  .dot-pulse{animation:none !important}
}
"""

    if "/* ── A11y & apply links ── */" not in s:
        s = s.replace(
            "html{scroll-behavior:smooth}",
            "html{scroll-behavior:smooth}" + a11y_css,
            1,
        )

    s = s.replace("earth-img:var(--bg3)", "background:var(--bg3)")

    INDEX.write_text(s, encoding="utf-8")
    print("OK, chars:", len(s))


if __name__ == "__main__":
    main()
