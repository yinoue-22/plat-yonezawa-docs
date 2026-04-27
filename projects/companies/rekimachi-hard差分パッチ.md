# rekimachi-hard.html 修正差分パッチ

レキマチハード本体ページ（`projects/rekimachi-hard.html`）の事業者一覧表に「個社進捗ページへのリンク」を追加するための差分パッチ。

## 1. 配置

8ファイルを GitHub リポジトリ `yinoue-22/plat-yonezawa-docs` の以下の場所に配置：

```
projects/
├── rekimachi-hard.html              # 既存（本体）
├── rekimachi-soft.html              # 既存
└── companies/                       # ← 新規ディレクトリ
    ├── tokokura-tracker.html
    ├── koetsu-tracker.html
    ├── watanabe-mikio-tracker.html
    ├── uesugi-corp-tracker.html
    ├── ajiro-tracker.html
    ├── niku-no-sugai-tracker.html
    ├── fukushimaya-tracker.html
    └── uesugi-jinja-tracker.html
```

---

## 2. リンク先マッピング表

`rekimachi-hard.html` の事業者案件一覧表（10行）を、以下のリンク先に紐付ける。

| No. | 事業者 | 案件名 | リンク先（companies/配下） |
|---|---|---|---|
| 1 | （株）東光の酒蔵 | 酒造資料館 東光の酒蔵 | `companies/tokokura-tracker.html` |
| 2 | （合）光悦 | 小島伝承の館 | `companies/koetsu-tracker.html` |
| 3 | 渡邉 幹雄 | 旧遠万織物 | `companies/watanabe-mikio-tracker.html` |
| 4 | （株）上杉コーポレーション | 上杉城史苑 | `companies/uesugi-corp-tracker.html` |
| 5 | （株）アジリノ | 旧白根澤邸 | `companies/ajiro-tracker.html` |
| 6 | （株）アジリノ | 東町ポケットパーク | `companies/ajiro-tracker.html` |
| 7 | （株）アジリノ | マチスタヂオ | `companies/ajiro-tracker.html` |
| 8 | （有）肉のすがい | 肉のすがい | `companies/niku-no-sugai-tracker.html` |
| 9 | 合資会社福島屋 | 福島屋社員寮 | `companies/fukushimaya-tracker.html` |
| 10 | 宗教法人上杉神社 | 上杉神社（授与所） | `companies/uesugi-jinja-tracker.html` |

> アジリノは3案件すべて同じファイル（`ajiro-tracker.html`）にリンク。

---

## 3. 修正パターン（推奨：Pattern A）

### Pattern A：案件名の末尾に「📊 進捗ページ」リンクを追加

各 `<tr>` 行の **案件名セル** の末尾にアイコンリンクを足す。シンプルで見た目を崩さない。

#### CSS追加（`<style>` タグ内に1回だけ追記）

```css
.tracker-link {
  display: inline-block;
  margin-left: .4rem;
  padding: .12rem .5rem;
  background: #1a2744;
  color: #fff !important;
  text-decoration: none;
  border-radius: 12px;
  font-size: .68rem;
  font-weight: 700;
  vertical-align: middle;
  transition: background .15s;
}
.tracker-link:hover { background: #8b1a1a; }
```

#### 表の各行を以下のように書き換え

```html
<!-- 1. 東光の酒蔵 -->
<tr>
  <td>1</td>
  <td>（株）東光の酒蔵</td>
  <td>酒造資料館 東光の酒蔵<a href="companies/tokokura-tracker.html" class="tracker-link">📊 進捗</a></td>
  <td>提出済</td>
  <td>198.5</td>
  <td>397.0</td>
  ...
</tr>

<!-- 2. 光悦 -->
<tr>
  <td>2</td>
  <td>（合）光悦</td>
  <td>小島伝承の館<a href="companies/koetsu-tracker.html" class="tracker-link">📊 進捗</a></td>
  ...
</tr>

<!-- 3. 渡邉幹雄 -->
<tr>
  <td>3</td>
  <td>渡邉 幹雄</td>
  <td>旧遠万織物<a href="companies/watanabe-mikio-tracker.html" class="tracker-link">📊 進捗</a></td>
  ...
</tr>

<!-- 4. 上杉コーポレーション -->
<tr>
  <td>4</td>
  <td>（株）上杉コーポレーション</td>
  <td>上杉城史苑<a href="companies/uesugi-corp-tracker.html" class="tracker-link">📊 進捗</a></td>
  ...
</tr>

<!-- 5. アジリノ：旧白根澤邸 -->
<tr>
  <td>5</td>
  <td>（株）アジリノ</td>
  <td>旧白根澤邸<a href="companies/ajiro-tracker.html" class="tracker-link">📊 進捗</a></td>
  ...
</tr>

<!-- 6. アジリノ：東町ポケットパーク -->
<tr>
  <td>6</td>
  <td>（株）アジリノ</td>
  <td>東町ポケットパーク<a href="companies/ajiro-tracker.html" class="tracker-link">📊 進捗</a></td>
  ...
</tr>

<!-- 7. アジリノ：マチスタヂオ -->
<tr>
  <td>7</td>
  <td>（株）アジリノ</td>
  <td>マチスタヂオ<a href="companies/ajiro-tracker.html" class="tracker-link">📊 進捗</a></td>
  ...
</tr>

<!-- 8. 肉のすがい -->
<tr>
  <td>8</td>
  <td>（有）肉のすがい</td>
  <td>肉のすがい<a href="companies/niku-no-sugai-tracker.html" class="tracker-link">📊 進捗</a></td>
  ...
</tr>

<!-- 9. 福島屋 -->
<tr>
  <td>9</td>
  <td>合資会社福島屋</td>
  <td>福島屋社員寮<a href="companies/fukushimaya-tracker.html" class="tracker-link">📊 進捗</a></td>
  ...
</tr>

<!-- 10. 上杉神社 -->
<tr>
  <td>10</td>
  <td>宗教法人上杉神社</td>
  <td>上杉神社（授与所）<a href="companies/uesugi-jinja-tracker.html" class="tracker-link">📊 進捗</a></td>
  ...
</tr>
```

---

## 4. 修正パターン（代替：Pattern B）

### Pattern B：No.列の数字をリンク化

シンプルさを最優先する場合。No.列の数字をクリッカブルに。

#### CSS追加

```css
.no-link {
  color: #1a2744;
  font-weight: 900;
  text-decoration: none;
  border-bottom: 2px solid #1a2744;
}
.no-link:hover { color: #8b1a1a; border-bottom-color: #8b1a1a; }
```

#### 表の各行（No.列のみ修正）

```html
<tr>
  <td><a href="companies/tokokura-tracker.html" class="no-link">1</a></td>
  <td>（株）東光の酒蔵</td>
  ...
</tr>
<tr>
  <td><a href="companies/koetsu-tracker.html" class="no-link">2</a></td>
  ...
</tr>
<!-- 以下、3〜10 を同様に -->
```

---

## 5. 動作確認チェックリスト

修正反映後、以下を確認：

- [ ] `rekimachi-hard.html` の表でリンクをクリック → 個社ページが開く
- [ ] 個社ページのパンくずがテキストのみ（クリックで遷移しない）
- [ ] 個社ページに `rekimachi-hard.html` への戻りリンクが**ない**
- [ ] アジリノの3行（5,6,7）はすべて同じ `ajiro-tracker.html` を開く
- [ ] スマホ表示で `tracker-link` バッジが折り返しても表が崩れない

---

## 6. 一括反映用のsed相当（参考）

GitHub リポジトリをローカルにクローンしている場合、以下の置換でほぼ自動反映可能（事前バックアップ推奨）：

```bash
# Pattern A を使う場合
cd projects
sed -i '' 's|<td>酒造資料館 東光の酒蔵</td>|<td>酒造資料館 東光の酒蔵<a href="companies/tokokura-tracker.html" class="tracker-link">📊 進捗</a></td>|' rekimachi-hard.html
sed -i '' 's|<td>小島伝承の館</td>|<td>小島伝承の館<a href="companies/koetsu-tracker.html" class="tracker-link">📊 進捗</a></td>|' rekimachi-hard.html
sed -i '' 's|<td>旧遠万織物</td>|<td>旧遠万織物<a href="companies/watanabe-mikio-tracker.html" class="tracker-link">📊 進捗</a></td>|' rekimachi-hard.html
sed -i '' 's|<td>上杉城史苑</td>|<td>上杉城史苑<a href="companies/uesugi-corp-tracker.html" class="tracker-link">📊 進捗</a></td>|' rekimachi-hard.html
sed -i '' 's|<td>旧白根澤邸</td>|<td>旧白根澤邸<a href="companies/ajiro-tracker.html" class="tracker-link">📊 進捗</a></td>|' rekimachi-hard.html
sed -i '' 's|<td>東町ポケットパーク</td>|<td>東町ポケットパーク<a href="companies/ajiro-tracker.html" class="tracker-link">📊 進捗</a></td>|' rekimachi-hard.html
sed -i '' 's|<td>マチスタヂオ</td>|<td>マチスタヂオ<a href="companies/ajiro-tracker.html" class="tracker-link">📊 進捗</a></td>|' rekimachi-hard.html
sed -i '' 's|<td>肉のすがい</td>|<td>肉のすがい<a href="companies/niku-no-sugai-tracker.html" class="tracker-link">📊 進捗</a></td>|' rekimachi-hard.html
sed -i '' 's|<td>福島屋社員寮</td>|<td>福島屋社員寮<a href="companies/fukushimaya-tracker.html" class="tracker-link">📊 進捗</a></td>|' rekimachi-hard.html
sed -i '' 's|<td>上杉神社（授与所）</td>|<td>上杉神社（授与所）<a href="companies/uesugi-jinja-tracker.html" class="tracker-link">📊 進捗</a></td>|' rekimachi-hard.html
```

> macOS の sed を想定。Linux の場合は `-i ''` ではなく `-i` のみ。

---

## 7. 構造のまとめ

```
レキマチハード本体（rekimachi-hard.html）
  ├─ 全10案件の表に「📊 進捗」リンク追加
  └─ 各リンクから companies/{slug}-tracker.html へ遷移可

companies/{slug}-tracker.html（個社別8ファイル）
  ├─ パンくず：テキスト表示のみ（リンクなし）
  ├─ 外部・他ページへのリンク：なし
  └─ 戻るには ブラウザの「戻る」ボタンのみ
```

これで「全体 → 個社」の一方向遷移が成立し、個社ページから外部・本体ページへ離脱されない構造になる。

---

最終更新：2026-04-27
