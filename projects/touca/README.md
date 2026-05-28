# TOUCA合宿 in 米沢 2026｜公開Web版（GitHub Pages 用）

`touca.jp` の編集トーン＆マナーに寄せた、**階層構造＋カードナビゲーション**型の合宿レポートサイトです。

## ファイル構成

```
site/
├── index.html              # トップ（雑誌表紙風カード）
├── sessions/
│   ├── s1.html             # 里山ビジョンハウス（オープニング）
│   ├── s2.html             # 山形座 瀧波（ローカルガストロノミー）
│   ├── s3.html             # 本気の二次会 ★HIGHLIGHT
│   ├── s4.html             # 朝ツアー＋新田 米沢織
│   ├── s5.html             # 東光の酒蔵
│   ├── s6.html             # 河鹿荘＋義経焼
│   └── s7.html             # 山形大学＋パターンランゲージ ★HIGHLIGHT
├── assets/
│   ├── style.css           # 共通デザイントークン・コンポーネント
│   └── script.js           # フェードイン制御
└── README.md
```

合計 8ページ ＋ 共通CSS ／ JS。1枚のLPではなく、トップから各セッションへ深掘りする階層構造です。

## デザインの要点

- **配色**：白基調 / 墨黒文字 / 朱色アクセント（鷹山公の赤）
- **タイポ**：Noto Sans JP 500/700 のみ、letter-spacing 0.05〜0.1em で日本語の呼吸を確保
- **レイアウト**：本文最大 600px、写真最大 880px、トップカードは最大 1100px
- **カード設計**：
  - 大カード3枚（S2瀧波 / S3二次会★ / S7山形大★）── 雑誌表紙風、3:4縦長、写真背景に題字オーバーレイ
  - 小カード4枚（S1 / S4 / S5 / S6）── 写真上、テキスト下のシンプルカード
- **インタラクション（控えめ）**：
  - カードホバーで写真がスケール1.04拡大
  - クリックで通常遷移、サブセッションページへ
  - 各ディテール下部に `back ↩ ／ ← prev ／ next →` の3ボタン
- **動き**：IntersectionObserver でフェードイン、`★HIGHLIGHT` バッジに脈動アニメ、ヒーロー背景にゆっくりズーム
- **モバイル**：375px 幅まで対応、ナビは横スクロール対応、カードはレスポンシブ

## 画像の取り扱い

このサイトは Google Drive の写真を `https://drive.google.com/thumbnail?id={FILE_ID}&sz=w1600` 形式で参照しています（Driveが自動でHEIC→JPEG変換）。

**前提条件**：元のGoogle Driveフォルダが「リンクを知っている全員が閲覧可」になっている必要がある。

```
Drive 写真フォルダ：
  https://drive.google.com/drive/folders/1xSPTO1MTMl4p-3IpMUiQ5PjzZeMRDtNV
```

**フォルダの公開設定確認手順**：
```
1. Drive で対象フォルダを右クリック → 共有
2. 「一般的なアクセス」を「リンクを知っている全員」に変更
3. 「閲覧者」権限であることを確認
```

### 写真をローカル保存したい場合（オフライン対応）

完全に self-contained にしたい場合は、`site/photos/` 配下に画像を保存して各 `<img src>` を書き換える。HEIC は Pillow + pillow-heif で変換：

```bash
pip install pillow pillow-heif --break-system-packages
python3 - <<'PY'
from PIL import Image
import pillow_heif
pillow_heif.register_heif_opener()
import os, glob
for src in glob.glob('photos_raw/**/*.HEIC', recursive=True):
    dst = src.replace('photos_raw', 'photos').replace('.HEIC', '.jpg')
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    Image.open(src).convert('RGB').thumbnail((1600, 1600))
    img.save(dst, 'JPEG', quality=85, optimize=True)
PY
```

## デプロイ手順

### A. 新規リポジトリで公開する場合

```bash
gh repo create plat-yonezawa/touca-yonezawa-2026 --public
cd touca-yonezawa-2026
cp -r /path/to/site/* .
git add . && git commit -m "Initial publish: TOUCA合宿 in 米沢 2026"
git push origin main

# GitHub Pages を有効化
gh repo edit --enable-pages --pages-branch main --pages-path /
```

公開URL：`https://plat-yonezawa.github.io/touca-yonezawa-2026/`

### B. 既存リポジトリにサブディレクトリで追加する場合

```bash
cd /path/to/existing-repo
mkdir -p touca-yonezawa-2026
cp -r /path/to/site/* touca-yonezawa-2026/
git add touca-yonezawa-2026 && git commit -m "Add: TOUCA合宿 in 米沢 2026"
git push
```

Settings → Pages で `Source: Deploy from a branch` を有効にする。
公開URL：`https://<org>.github.io/<repo>/touca-yonezawa-2026/`

## 動画の追加方法

現状、S2（蕎麦打ち）、S4（朝ツアー）、S7（ワークショップ発表）に動画プレースホルダ（黒い▶️カード）が配置されています。動画ファイルが揃ったら、該当箇所の `.video-placeholder` を以下に置換してください。

### YouTube埋め込み

```html
<div class="video-frame">
  <iframe src="https://www.youtube.com/embed/{VIDEO_ID}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>
```

### Google Drive 動画埋め込み

```html
<div class="video-frame">
  <iframe src="https://drive.google.com/file/d/{FILE_ID}/preview"
          loading="lazy"
          allow="autoplay"></iframe>
</div>
```

## カスタマイズポイント

`assets/style.css` 冒頭の CSS 変数で配色変更可能：

```css
:root {
  --accent-touca: #B85E5C;  /* 朱色ドット */
  --y-dustyrose: #B85565;   /* 米沢ローカル拡張 */
  --bg-paper: #FFFFFF;       /* 紙の白 */
  --content-max: 600px;      /* 本文の最大幅 */
  --media-max: 880px;        /* 写真の最大幅 */
  --grid-max: 1100px;        /* カードグリッドの最大幅 */
}
```

## 完了基準セルフレビュー

- [x] touca.jp と並べて比較したとき、同じ「家系」に見える（白基調・狭幅レイアウト・編集型）
- [x] 写真が主役になっている（テキスト密度に対して写真量が多い）
- [x] 8ファイル構成（home + 7 sessions）、明確な階層
- [x] トップは雑誌表紙風大カード3枚＋小カード4枚で構成
- [x] 各セッションページ間を prev/next で行き来できる
- [x] back ↩ ボタンでトップのセッション一覧に戻れる
- [x] スマホ375px幅で破綻なく読める
- [x] 機微情報（個別投資金額・内部議論）が公開版基準で削られている
- [x] S3 二次会、S7 ワークショップが ★HIGHLIGHT で差別化
- [x] 動画プレースホルダが3箇所（S2/S4/S7）
- [x] 外部CSS/JSは自前のみ（CDNはNoto Sans JPフォントのみ）
- [x] OGP対応（og:title/description/image/type/url + twitter:card）
- [x] すべての `<img>` に `loading="lazy"` を付与
- [x] IntersectionObserver でフェードイン

## 残作業（user-confirmed）

1. Google Drive 写真フォルダの共有設定確認（リンクを知っている全員が閲覧可）
2. GitHub Pages リポジトリURL確定後、デプロイ実施
3. 動画素材が揃い次第、プレースホルダを置換
4. SNSハンドル（X・LINE）の最終確認
5. フッターの問い合わせ先・代表者名の最終確認
