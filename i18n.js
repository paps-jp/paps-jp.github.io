(function () {
  const STORAGE_KEY = 'paps-lab-lang';
  const DEFAULT_LANG = 'ja';

  const dict = {
    ja: {
      'doc.title': 'ぱっぷすラボ — PAPS-Lab',
      'doc.description': 'ぱっぷすラボ (PAPS-Lab) は、特定非営利活動法人ぱっぷす (PAPS) の支援活動から生まれたツール・Web サービスを公開する場です。Paprika・PAssist・netscan を公開中。',

      'nav.brand': 'ぱっぷすラボ',
      'nav.projects': 'プロジェクト',
      'nav.about': 'ラボについて',
      'nav.lang.next': 'English',
      'nav.lang.aria': '言語を English に切り替える',

      'hero.tagline': '支援の現場から、オープンソースへ。',
      'hero.sub': 'ぱっぷすラボは、特定非営利活動法人 <strong>ぱっぷす (PAPS)</strong> の支援活動の中から生まれた、ツール・Web サービスを公開する場です。',
      'hero.cta.projects': 'プロジェクトを見る',

      'about.title': 'ぱっぷすラボ<span class="accent">とは</span>',
      'about.lead': 'デジタル性暴力の相談支援、削除請求、アウトリーチ、調査研究――。ぱっぷすの活動現場には、市販のツールでは満たせないニーズがいくつもあります。そこで自分たちで作ったツールのうち、他の団体・支援現場・教育・研究などでも役立ちそうなものを、誰でも使える形で公開しています。',
      'about.pill1.title': '支援現場から生まれた',
      'about.pill1.desc': '相談・削除請求・アウトリーチの現場で、実際に必要だった機能だけを実装しています。',
      'about.pill2.title': 'セキュリティを大切に',
      'about.pill2.desc': '被害当事者の安全と尊厳を守るために、設計段階からプライバシーとセキュリティを考えています。',
      'about.pill3.title': 'オープンに公開',
      'about.pill3.desc': 'ソースコードや Web ツールを公開し、同じ課題に向き合う団体や個人と知見を共有しています。',

      'projects.title': '公開中の<span class="accent">プロジェクト</span>',
      'projects.lead': 'いま、ぱっぷすラボから公開しているプロジェクトです。',

      'paprika.sub': 'パプリカ',
      'paprika.tag': 'ブラウザ自動化 / 証拠保全',
      'paprika.desc': '分散ワーカー上の Chrome を <strong>Playwright スタイルの Python・PHP SDK</strong> で操作し、AI を併用して、ページの<strong>画像・動画・リンク</strong>をまとめて収集するブラウザ自動化プラットフォーム。削除請求の証拠保全と、ProtectionAI 基盤として開発されました。',
      'paprika.feat1': 'Python / PHP SDK（Playwright 互換のAPI）',
      'paprika.feat2': '分散ワーカー + 管理画面のライブパネル',
      'paprika.feat3': 'AI を組み合わせた収集ジョブ',

      'passist.sub': 'パシスト',
      'passist.tag': '遠隔操作 / 1ウィンドウ共有',
      'passist.desc': 'ブラウザだけで、Windows 上の <strong>1つのウィンドウだけ</strong>を共有・遠隔操作できる Windows ツール。相手は <strong>URL を開くだけ</strong>（アカウント・インストール不要）で操作を開始できます。デスクトップ全体は構造的に映りません。',
      'passist.feat1': '1ウィンドウだけを共有（デスクトップは映らない）',
      'passist.feat2': 'ゲストはブラウザのみ・アカウント不要',
      'passist.feat3': 'WebRTC で映像と操作を暗号化',

      'netscan.sub': 'ネットスキャン',
      'netscan.tag': 'ネットワーク総合診断 / Web ツール',
      'netscan.desc': 'ドメイン名や IP アドレスを入力するだけで、<strong>DNS・WHOIS・IP Location・Ping・経路・ポート・SSL・サブドメイン</strong>などをまとめて確認できる、ブラウザだけで動くネットワーク総合診断ツール。削除請求やセキュリティ調査の現場で実際に使われている機能を、誰でも試せる形で公開しています。',
      'netscan.feat1': 'DNS / WHOIS / IP Location をワンクリックで',
      'netscan.feat2': 'Ping・経路・ポートスキャン・Nmap・HTTP',
      'netscan.feat3': 'SSL 証明書・サブドメイン列挙',

      'common.cta.site': 'サイトを開く',

      'paps.title': '運営団体 — <span class="accent">特定非営利活動法人ぱっぷす</span>',
      'paps.lead': 'ぱっぷすラボは、ぱっぷす (PAPS) のプロジェクトとして運営されています。',
      'paps.card.title': 'ぱっぷす (PAPS)',
      'paps.card.body1': 'ぱっぷすは、ポルノ被害と性暴力被害（とくに性的な画像や動画の拡散、リベンジポルノ、セクストーション、AI 生成によるなりすまし画像など、デジタル性暴力）への<strong>相談支援・削除請求・アウトリーチ・調査研究・政策提言</strong>を行う特定非営利活動法人です。',
      'paps.card.body2': 'ぱっぷすラボの各プロジェクトは、実際の支援現場での課題から発想され、検証され、改善されてきました。支援活動と並行して、技術的な知見もオープンに共有していくことを目指しています。',
      'paps.card.more': 'ぱっぷす公式サイト (paps.jp)',

      'values.title': 'ラボの<span class="accent">方針</span>',
      'values.lead': 'ぱっぷすラボがツールを公開するときに大切にしている考え方です。',
      'values.v1.title': '現場の声を起点に',
      'values.v1.desc': '相談員・削除請求担当・アウトリーチワーカーなど、実際に使う人の困りごとから設計を始めます。',
      'values.v2.title': '当事者の安全を最優先に',
      'values.v2.desc': '収集する情報・残るログ・通信経路を最小限にとどめ、被害当事者を二次被害にさらしません。',
      'values.v3.title': '誰もが使える形で',
      'values.v3.desc': 'アカウントや有料サービスへの依存を避け、ブラウザや手元の PC で動くシンプルな構成を選びます。',
      'values.v4.title': '長く使えるように',
      'values.v4.desc': '依存ライブラリを絞り、ドキュメントを揃え、運用しながら一緒に育てていけるコードを心がけます。',

      'footer.copy': '© 特定非営利活動法人ぱっぷす (PAPS)'
    },

    en: {
      'doc.title': 'PAPS-Lab — Tools from the front line of survivor support',
      'doc.description': 'PAPS-Lab open-sources tools and web services born out of the support work of PAPS, a Japanese non-profit. Currently publishing Paprika, PAssist, and netscan.',

      'nav.brand': 'PAPS-Lab',
      'nav.projects': 'Projects',
      'nav.about': 'About',
      'nav.lang.next': '日本語',
      'nav.lang.aria': 'Switch language to Japanese',

      'hero.tagline': 'From the front line of support, into open source.',
      'hero.sub': 'PAPS-Lab is where we open-source tools and web services born out of the work of <strong>PAPS</strong>, a Japanese non-profit.',
      'hero.cta.projects': 'See projects',

      'about.title': 'About <span class="accent">PAPS-Lab</span>',
      'about.lead': 'Survivor consultation, takedown requests, outreach, research — the front lines of PAPS&rsquo;s work are full of needs that off-the-shelf tools don&rsquo;t meet. We build our own, and publish the ones that other organizations, support workers, educators, and researchers can use too.',
      'about.pill1.title': 'Born from the field',
      'about.pill1.desc': 'We build only what we actually needed in our consultation, takedown, and outreach work.',
      'about.pill2.title': 'Safety and dignity first',
      'about.pill2.desc': 'We design with the safety and dignity of survivors in mind, from the first sketch onward.',
      'about.pill3.title': 'Open by default',
      'about.pill3.desc': 'We publish source code and web tools to share what we&rsquo;ve learned with others working on the same problems.',

      'projects.title': 'Our <span class="accent">projects</span>',
      'projects.lead': 'Tools and services we publish from PAPS-Lab today.',

      'paprika.sub': 'Browser automation platform',
      'paprika.tag': 'Browser automation / Evidence preservation',
      'paprika.desc': 'A browser-automation platform that drives Chrome on distributed workers via a <strong>Playwright-style Python / PHP SDK</strong>, with AI in the loop, to collect <strong>images, videos, and links</strong> from a page in one pass. Built for evidence preservation in takedown work and as the foundation for ProtectionAI.',
      'paprika.feat1': 'Python / PHP SDK (Playwright-compatible API)',
      'paprika.feat2': 'Distributed workers + a live admin panel',
      'paprika.feat3': 'AI-augmented collection jobs',

      'passist.sub': 'Single-window screen share',
      'passist.tag': 'Remote control / Single-window share',
      'passist.desc': 'A Windows tool that lets the other side view and remotely operate <strong>just one window</strong> on your PC — through a browser. The guest only needs to <strong>open a URL</strong> (no account, no install). Your full desktop is structurally never exposed.',
      'passist.feat1': 'Shares only one window — the rest of your desktop never appears',
      'passist.feat2': 'Guests use just a browser — no account, no install',
      'passist.feat3': 'Video and input are encrypted over WebRTC',

      'netscan.sub': 'Network diagnostics',
      'netscan.tag': 'Network diagnostics / Web tool',
      'netscan.desc': 'Enter a domain name or IP address, and check <strong>DNS, WHOIS, IP Location, Ping, route, ports, SSL, and subdomains</strong> in one place — all from your browser. Features used daily in takedown work and security research, made available to anyone to try.',
      'netscan.feat1': 'DNS / WHOIS / IP Location at a click',
      'netscan.feat2': 'Ping, route, port scan, Nmap, HTTP probes',
      'netscan.feat3': 'SSL certificate inspection and subdomain enumeration',

      'common.cta.site': 'Visit site',

      'paps.title': 'Operated by <span class="accent">PAPS</span>',
      'paps.lead': 'PAPS-Lab is operated as a project of PAPS.',
      'paps.card.title': 'PAPS',
      'paps.card.body1': 'PAPS supports survivors of pornography- and sexual-violence harm — particularly digital sexual violence such as nonconsensual image distribution, revenge porn, sextortion, and AI-generated impersonation — through <strong>consultation, takedown requests, outreach, research, and policy advocacy</strong>.',
      'paps.card.body2': 'Every PAPS-Lab project starts from a problem on the support front line, is tested against it, and is improved by it. Alongside the support work itself, we want to share what we learn technically — out in the open.',
      'paps.card.more': 'Visit paps.jp',

      'values.title': 'Our <span class="accent">principles</span>',
      'values.lead': 'How we think when we release a tool from PAPS-Lab.',
      'values.v1.title': 'Start from the field',
      'values.v1.desc': 'We design from the actual pain points of consultation staff, takedown handlers, and outreach workers.',
      'values.v2.title': 'Survivor safety first',
      'values.v2.desc': 'We minimize what is collected, what is logged, and what is sent over the network — so survivors are never re-exposed.',
      'values.v3.title': 'Usable by anyone',
      'values.v3.desc': 'We avoid lock-in to accounts or paid services, and prefer simple setups that run in a browser or on the user&rsquo;s own PC.',
      'values.v4.title': 'Built to last',
      'values.v4.desc': 'We keep dependencies small, write proper docs, and ship code we can grow with over the long run.',

      'footer.copy': '© PAPS, a Japanese non-profit'
    }
  };

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ja' || saved === 'en') return saved;
    } catch (_) {}
    const nav = (navigator.language || navigator.userLanguage || DEFAULT_LANG).toLowerCase();
    return nav.indexOf('ja') === 0 ? 'ja' : 'en';
  }

  function tr(lang, key) {
    return (dict[lang] && dict[lang][key]) != null
      ? dict[lang][key]
      : (dict[DEFAULT_LANG][key] || '');
  }

  function applyLang(lang) {
    if (!dict[lang]) lang = DEFAULT_LANG;
    document.documentElement.lang = lang;
    document.title = tr(lang, 'doc.title');

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', tr(lang, 'doc.description'));
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'ja' ? 'ja_JP' : 'en_US');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const k = el.getAttribute('data-i18n');
      const v = tr(lang, k);
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const k = el.getAttribute('data-i18n-html');
      const v = tr(lang, k);
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(';').forEach(function (pair) {
        const idx = pair.indexOf(':');
        if (idx < 0) return;
        const attr = pair.slice(0, idx).trim();
        const k = pair.slice(idx + 1).trim();
        const v = tr(lang, k);
        if (v) el.setAttribute(attr, v);
      });
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  function setupToggle() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const cur = document.documentElement.lang || detectLang();
      applyLang(cur === 'ja' ? 'en' : 'ja');
    });
  }

  function init() {
    applyLang(detectLang());
    setupToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
