# リポジトリ概要
typescript の練習用環境とスクリプト

# 使用技術
- 言語
    - TypeScript
- 実行環境
    - docker
    - node.js

## 環境構築想像
deployment内部にnginxイメージからコンテナを作成（deployment.yaml）
ローカル環境でクラスタ内部からアクセスを可能にするserviceも作成（service.yaml）
上記2つで共通する変数は単一ファイルで管理（Chart.yaml）
環境ごとの変数も、環境に由来する単一ファイルで管理 **※ 今回は不要**（values.yaml）
app/api配下のスクリプトファイルはでdeployment内部のコンテナにコピー（Dockerfile）
