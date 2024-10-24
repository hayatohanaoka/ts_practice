FROM nginx:latest
# Node.jsをインストールするために必要な依存関係をインストールしつつ、Node.jsをインストール
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    && curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*


WORKDIR /usr/share/nginx/html
# skaffold.yamlの context で設定したディレクトリをコピー
COPY . ./
RUN npm install
RUN ./node_modules/.bin/ts-node ./api/hello.ts

# ポート80を公開
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
