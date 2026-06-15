# CLAUDE.md — paps-jp.github.io (ぱっぷすラボ / PAPS-Lab)

特定非営利活動法人ぱっぷす (PAPS) のオープンソース・ラボ「ぱっぷすラボ (PAPS-Lab)」のトップページ。
GitHub Pages で `https://paps-jp.github.io/` として配信される。

このリポジトリの目的は、ラボから公開している各プロジェクト（Paprika / PAssist / netscan）への入り口を提供すること。

## 構成

```
.
├── index.html      LP 本体（ナビ / ヒーロー / プロジェクト / 運営団体 / 方針 / フッター）
├── i18n.js         多言語化（ja / en）の辞書とランタイム
├── img/
│   ├── papslab.svg     ぱっぷすラボのロゴ（ヒーローの正方形チップ内に表示）
│   ├── paps-logo.png   PAPS（運営団体）の鳥ロゴ。ナビ・運営団体カード・favicon に使用
│   ├── paprika.svg     Paprika プロジェクトのアイコン
│   └── passist.svg     PAssist プロジェクトのアイコン
├── README.md
└── CLAUDE.md       このファイル
```

ビルドツール・ランタイムは無し。`index.html` を GitHub Pages がそのまま配信する。

## デプロイ

`main` ブランチのルートを GitHub Pages が配信する設定。`git push origin main` で反映。
Pages のビルドは数十秒〜数分でほぼ毎回 `built` になる。失敗したら `gh api repos/paps-jp/paps-jp.github.io/pages/builds/latest` で原因を確認。

## i18n（多言語化）

ユーザー向け表示文言は **`ja` / `en` の 2 言語**で提供する。

### 切り替えの仕組み

- 辞書は `i18n.js` の `dict` オブジェクトに集約（`ja` と `en` のフラットな key/value）
- HTML 側は属性で参照する:
  | 属性 | 効果 |
  |---|---|
  | `data-i18n="key"` | 要素の `textContent` を辞書値で置換 |
  | `data-i18n-html="key"` | `innerHTML` を辞書値で置換（`<strong>` や `<span class="accent">` を含むケース） |
  | `data-i18n-attr="attr:key"` | 指定属性を辞書値で置換（`aria-label` 等）。`;` 区切りで複数指定可 |
- 自動検出: 初回は `localStorage.paps-lab-lang` を見て、無ければ `navigator.language` の先頭 2 文字で `ja` か `en` を決める（`ja*` → ja、それ以外 → en）
- ナビ右端の **`#lang-toggle` ボタン** で手動切替。クリックで `localStorage` に保存し、以後は同じ言語で開く
- `<html lang>`, `<title>`, `<meta name="description">`, `<meta property="og:locale">` も同時に更新する

### 文言を追加・変更するとき

1. **`i18n.js` の `dict.ja` と `dict.en` の両方に同じ key を必ず追加する**。片方だけだと、その言語ではフォールバックで JA が表示されるので「英語版に切り替えたら一部だけ日本語のまま」になる
2. HTML 側に `data-i18n="key"`（テキスト）または `data-i18n-html="key"`（HTML を含む）を付ける
3. 初期表示用の JA テキストを HTML 内にも書いておく（JS 無効時のフォールバック・SEO 対策）
4. `<strong>` や `<span class="accent">` を含む文は `data-i18n-html` を使う。素の文字列なら `data-i18n` のほうが安全（XSS リスクが小さい）

### 翻訳の方針

- 英語は **簡潔・明瞭**に。日本語の冗長な接続詞は捨てる
- 専門用語（DNS / WHOIS / Nmap など）と固有名詞（Paprika / PAssist / netscan / PAPS / ProtectionAI）はそのまま
- PAPS の正式説明: **`PAPS is a non-profit organization whose mission is to "End to sexual exploitation."`** — 頭字語を勝手に展開しない
- `paps.card.mission` 行（英語の mission 文）は ja/en どちらでも英語のまま表示する仕様（HTML 側に直接書いていて i18n キーは持たない）
- スマートクオート: 日本語側は `“…”`、英語側は HTML エンティティ `&rsquo;` を使う（JS 上のシングルクオート文字列でエスケープを増やさないため）

### 既存セクションの key 一覧（参照）

```
doc.*          ページの <title> と <meta description>
nav.*          ナビ（ブランド / リンク / 言語切替）
hero.*         ヒーロー
about.*        「ぱっぷすラボとは」 とそのピル 3 つ
projects.*     プロジェクト一覧の見出し・リード
paprika.*, passist.*, netscan.*   各カードの sub / tag / desc / feat1-3
common.cta.site                   3 カード共通の「サイトを開く」
paps.*         運営団体カード
values.*       「ラボの方針」 とその 4 項目
footer.copy    コピーライト表記
```

## デザイン

- ロゴ: ヒーロー中央の `144×144` の白い正方形チップ内に `img/papslab.svg`（横幅は logo の縦横比に合わせて自動）
- カラー: PAPS の鳥ロゴ由来のティール `#2bafa8` を基調に、アクセントとしてコーラル `#ff8fa0` / 黄 `#f5b800`。本文は `#1f2733`
- 角丸 + やわらかい影でカード型。フォントは system-ui 系（外部フォントは読まない）
- アイコンは Lucide を SVG スプライトでインライン化（外部 CDN 不要）

## バージョン管理のルール

- **コミットに Claude / Anthropic を共同作成者として含めない**。`Co-Authored-By: Claude ...` 等を付けない
- コミットメッセージは作業内容のみを簡潔に記述する
