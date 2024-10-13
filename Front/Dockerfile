FROM node:18
ADD . /frontend
WORKDIR /frontend
RUN npm install --save --legacy-peer-deps
CMD ["npm", "run", "start"]