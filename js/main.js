(function () {
  const data = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const CATEGORY_LABEL = Object.assign(
    { all: "전체", web: "웹", app: "앱", game: "게임" },
    data.categories || {}
  );
  const LINK_LABEL = { github: "GitHub", demo: "플레이하기", store: "Store", doc: "기획서" };

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  const tags = (list = []) => `<ul class="tags">${list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

  // ── Hero / About ─────────────────────────────
  const p = data.profile;
  document.title = `${p.name} | ${p.role} Portfolio`;
  $("logo").textContent = p.name;
  $("heroRole").textContent = p.role;
  // greeting 은 직접 작성하는 신뢰된 값이라 <br /> 등 HTML 허용
  $("heroTitle").innerHTML = p.greeting || `안녕하세요,<br />${esc(p.name)}입니다.`;
  if (p.intro) $("heroIntro").textContent = p.intro;
  else $("heroIntro").remove();

  const photo = p.photo
    ? `<img class="about-photo" src="${esc(p.photo)}" alt="${esc(p.name)} 프로필 사진" />`
    : "";
  const history = (p.history || []).length
    ? `<div class="history"><h3>주요 이력</h3><ul>${p.history
        .map((h) => `<li><span class="mono">${esc(h.year)}</span><span>${esc(h.text)}</span></li>`)
        .join("")}</ul></div>`
    : "";
  $("aboutBody").innerHTML = `
    ${photo}
    <div class="about-text">
      ${p.about.map((t) => `<p>${esc(t)}</p>`).join("")}
      ${history}
    </div>`;
  if (!photo) $("aboutBody").classList.add("no-photo");
  $("footerText").textContent = `© ${new Date().getFullYear()} ${p.name}`;

  // ── Skills ───────────────────────────────────
  $("skillsBody").innerHTML = data.skills
    .map((s) => `<div class="skill-group"><h3>${esc(s.group)}</h3>${tags(s.items)}</div>`)
    .join("");

  // ── Projects ─────────────────────────────────
  const used = [...new Set(data.projects.map((pr) => pr.category))];
  let current = "all";

  if (used.length < 2) {
    $("filters").hidden = true;
  } else {
    $("filters").innerHTML = ["all", ...used]
      .map(
        (c) =>
          `<button role="tab" class="filter${c === current ? " active" : ""}" data-cat="${esc(c)}" aria-selected="${c === current}">${esc(CATEGORY_LABEL[c] || c)}</button>`
      )
      .join("");
    $("filters").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-cat]");
      if (!btn) return;
      current = btn.dataset.cat;
      document.querySelectorAll(".filter").forEach((b) => {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on);
      });
      renderProjects();
    });
  }

  // 상세 창(dialog) 안 스크롤 영역에서는 일부 브라우저가 lazy 이미지를 불러오지 않아 즉시 로드
  const img = (src, alt, cls = "") =>
    `<img ${cls ? `class="${cls}" ` : ""}src="${esc(src)}" alt="${esc(alt)}" decoding="async" />`;
  const thumb = (pr) =>
    pr.image
      ? img(pr.image, `${pr.title} 스크린샷`)
      : `<div class="thumb-placeholder mono">${esc(CATEGORY_LABEL[pr.category] || "")}</div>`;
  const meta = (pr) =>
    [pr.genre || CATEGORY_LABEL[pr.category], pr.team, pr.period].filter(Boolean).map(esc).join(" · ");

  const linksHtml = (links = {}) =>
    Object.entries(links)
      .filter(([, url]) => url)
      .map(
        ([k, url], i) =>
          `<a href="${esc(url)}" target="_blank" rel="noopener" class="btn btn-small${i === 0 ? " btn-primary" : ""}">${esc(LINK_LABEL[k] || k)} ↗</a>`
      )
      .join("");

  function renderProjects() {
    $("projectGrid").innerHTML = data.projects
      .map((pr, i) => ({ pr, i }))
      .filter(({ pr }) => current === "all" || pr.category === current)
      .map(
        ({ pr, i }) => `
        <article class="card" tabindex="0" role="button" data-index="${i}" aria-label="${esc(pr.title)} 자세히 보기">
          <div class="card-thumb">${thumb(pr)}${pr.award ? `<span class="badge">🏆 ${esc(pr.award)}</span>` : ""}</div>
          <div class="card-body">
            <p class="card-meta mono">${meta(pr)}</p>
            <h3>${esc(pr.title)}</h3>
            <p>${esc(pr.summary)}</p>
            ${tags(pr.roles || pr.tech)}
          </div>
        </article>`
      )
      .join("");
  }
  renderProjects();

  // ── Modal ────────────────────────────────────
  const modal = $("projectModal");
  function openProject(i) {
    const pr = data.projects[i];
    const sections = (pr.sections || [])
      .map(
        (s) => `
        <section class="detail-section">
          <h4>${esc(s.title)}</h4>
          <ul class="points">${(s.points || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          ${
            (s.images || []).length
              ? `<div class="shots shots-${Math.min(s.images.length, 3)}">${s.images
                  .map((src) => `<a href="${esc(src)}" target="_blank" rel="noopener">${img(src, `${pr.title} – ${s.title}`)}</a>`)
                  .join("")}</div>`
              : ""
          }
        </section>`
      )
      .join("");

    $("modalBody").innerHTML = `
      <div class="modal-thumb">${thumb(pr)}</div>
      <p class="card-meta mono">${meta(pr)}</p>
      <h3>${esc(pr.title)}</h3>
      ${pr.award ? `<p class="award">🏆 ${esc(pr.award)}</p>` : ""}
      <p class="modal-desc">${esc(pr.description || pr.summary)}</p>
      <dl class="facts">
        ${pr.roles ? `<div><dt>담당</dt><dd>${tags(pr.roles)}</dd></div>` : ""}
        ${pr.tech ? `<div><dt>사용 도구</dt><dd>${tags(pr.tech)}</dd></div>` : ""}
      </dl>
      <div class="modal-links">${linksHtml(pr.links)}</div>
      ${sections}`;
    modal.showModal();
    modal.scrollTop = 0;
  }
  $("projectGrid").addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openProject(card.dataset.index);
  });
  $("projectGrid").addEventListener("keydown", (e) => {
    const card = e.target.closest(".card");
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openProject(card.dataset.index);
    }
  });
  $("modalClose").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close(); // 바깥 클릭 시 닫기
  });

  // ── Contact ──────────────────────────────────
  $("contactList").innerHTML = data.contact
    .map(
      (c) => `
      <li><span class="mono">${esc(c.label)}</span>
        <a href="${esc(c.href)}" target="_blank" rel="noopener">${esc(c.value)}</a></li>`
    )
    .join("");
})();
