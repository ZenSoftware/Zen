FROM node:14-alpine

WORKDIR /usr/src/api

COPY dist/apps/api ./
COPY package*.json ./
COPY prisma/schema.prisma prisma/schema.prisma

RUN npm ci --production --loglevel warn

# ENV DATABASE_URL=postgresql://user:pass@localhost:5432/database

ENV PORT=7080
EXPOSE ${PORT}

CMD [ "node", "main.js" ]