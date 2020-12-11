
# Projeto


## Descrição do projeto


## Docker run node

- Passos 1:

```
docker run --rm -it  -v $(pwd)/:/usr/src/app -p 3001:3001 node:15 bash
```

- Passo 2: Acessar o diretório de trabalho

```
cd usr/src/app/
```

- Passo 3: Iniciando o projeto

```
npm init
```

- Passo 4: Instalação das bibliotecas

```
npm install --save express
npm install -g -D nodemon
```

- Passo 5: Executando o projeto

```
nodemon index.js
```

## Dockerização do App

- Dockerfile:

```
FROM node:15-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "linode.js"]
```

- Build:

```
docker build -t valerionet/db-metrics-api:v1 .
```

- Docker hub:

```
docker login
```

- Push:

```
docker push valerionet/db-metrics-api:v1
```

- Run:

```
 docker run -d --name metrics -p 3002:3001 valerionet/db-metrics-api:v1
```

- docker ps

```
CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                    NAMES
b1e1f5f0ade4        valerionet/db-metrics-api:v1   "docker-entrypoint.s…"   8 minutes ago       Up 8 minutes        0.0.0.0:3002->3001/tcp   metrics
```

> Docker hub
> https://hub.docker.com/repository/docker/valerionet/db-metrics-api