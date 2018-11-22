FROM node:8
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8000
HEALTHCHECK --interval=1m --timeout=3s CMD curl -f http://localhost:8000/health || exit 1
CMD [ "npm", "start" ]
