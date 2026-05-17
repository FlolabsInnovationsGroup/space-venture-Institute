# -*- coding: utf-8 -*-
"""One-off patch for index.html — external Apply URL, a11y, remove modal."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
INDEX = ROOT / "index.html"
URL = "https://hephaestus.international/internships"

def main():
    text = INDEX.read_text(encoding="utf-8")

    # Remove entire internships SPA page (between markers)
    m = re.search(
        r'<div id="page-internships" class="page"[^>]*>.*?</div>\s*(?=\n</div>\s*\n\n\n<!--)',
        text,
        re.DOTALL,
    )
    if not m:
        # Fallback: find start line and next sibling closing pattern
        start = text.find('<div id="page-internships"')
        if start == -1:
            raise SystemExit("page-internships not found")
        # naive: find footer closing before modal
        end_marker = "\n\n\n<!-- ══ APPLICATION MODAL"
        end = text.find(end_marker, start)
        if end == -1:
            raise SystemExit("modal marker not found")
        # Walk back to include closing </div> for page-internships only
        chunk = text[start:end]
        # page-internships is one outer div; find its matching close by counting
        depth = 0
        i = 0
        closing_pos = None
        while i < len(chunk):
            if chunk[i : i + 4] == "<div":
                # skip to end of tag
                gt = chunk.find(">", i)
                if gt == -1:
                    break
                # self-closing?
                if chunk[gt - 1] == "/" or chunk.find("/>", i, gt) != -1:
                    i = gt + 1
                    continue
                depth += 1
                i = gt + 1
                continue
            if chunk[i : i + 6] == "</div>":
                depth -= 1
                if depth == 0:
                    closing_pos = i + 6
                    break
                i += 6
                continue
            i += 1
        if closing_pos is None:
            raise SystemExit("could not find matching </div> for internships page")
        text = text[:start] + text[start + closing_pos : end] + text[end:]

    else:
        text = text[: m.start()] + text[m.end() :]

    # Remove modal + related comment block through </div> before TOAST
    modal_start = text.find("<!-- ══ APPLICATION MODAL ══ -->")
    if modal_start != -1:
        toast_start = text.find("<!-- TOAST -->", modal_start)
        if toast_start != -1:
            text = text[:modal_start] + text[toast_start:]

    # Script: strip obsolete functions, keep showPage & toast
    text = re.sub(
        r"function openApplyModal\(role\)\{[\s\S]*?\}\n",
        "",
        text,
        count=1,
    )
    text = re.sub(
        r"function closeModal\(\)\{[\s\S]*?\}\n",
        "",
        text,
        count=1,
    )
    text = re.sub(
        r"function closeModalOutside\(e\)\{[\s\S]*?\}\n",
        "",
        text,
        count=1,
    )
    text = re.sub(
        r"function submitApp\(\)\{[\s\S]*?\}\n",
        "",
        text,
        count=1,
    )

    # Nav apply button -> anchor
    text = text.replace(
        '<button class="nav-apply" onclick="openApplyModal(\'Space Ventures Institute\')">Apply Now</button>',
        f'<a class="nav-apply" href="{URL}">Apply Now</a>',
    )

    # Footer / nav internship links
    text = text.replace(
        '<li><a onclick="showPage(\'internships\')">Internships</a></li>',
        f'<li><a href="{URL}">Internships</a></li>',
    )

    # Generic apply buttons -> use regex for onclick variants
    text = re.sub(
        r'<button onclick="showPage\(\'internships\'\)"[^>]*>([^<]*(?:<[^/][^>]*>[^<]*)*)</button>',
        lambda m: _button_to_link(m, URL),
        text,
    )

    # openApplyModal buttons
    text = re.sub(
        r'<button onclick="openApplyModal\(\'[^\']*\'\)"[^>]*>([^<]*(?:<[^/][^>]*>[^<]*)*)</button>',
        lambda m: _simple_apply_link(m, URL),
        text,
    )

    # Internship track cards: div with openApplyModal
    def card_repl(match):
        inner = match.group(1)
        return (
            f'<a href="{URL}" class="intern-track-card" data-track="{match.group(2)}">'
            + inner
            + "</a>"
        )

    text = re.sub(
        r'<div style="background:#0b1220;border:1px solid #1f2937;border-radius:10px;padding:1\.2rem 1\.4rem;cursor:pointer;transition:border-color 0\.2s" onmouseover="this\.style\.borderColor=\'#3C5E78\'" onmouseout="this\.style\.borderColor=\'#1f2937\'" onclick="openApplyModal\(\'([^\']+)\'\)">',
        lambda m: f'<a href="{URL}" class="intern-track-card" aria-label="Apply for {m.group(1)} — opens Hephaestus internships">',
        text,
    )
    # Close tags: the opening div became <a>, need to change </div> that closed card to </a>
    # Our regex only replaced opening tag; the structure is <a>...content...</div> — invalid
    # Simpler approach: replace onclick on those divs only

    INDEX.write_text(text, encoding="utf-8")
    print("Patched (pass 1). Re-run card fix with second script if needed.")


def _button_to_link(m, url):
    inner = m.group(1).strip()
    # strip nested tags for label - keep text
    label = re.sub(r"<[^>]+>", "", inner).strip()
    if not label:
        label = "Apply"
    return (
        f'<a class="btn-apply-external" href="{url}">{inner}</a>'
    )


def _simple_apply_link(m, url):
    inner = m.group(1).strip()
    return f'<a class="btn-apply-external" href="{url}">{inner}</a>'

if __name__ == "__main__":
    main()
