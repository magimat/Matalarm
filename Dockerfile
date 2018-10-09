FROM arm32v7/node
 
RUN mkdir -p src 
ADD ./*.json /src/
WORKDIR /src
 
RUN npm install
 
EXPOSE 80

ADD ./*.js /src/
 
CMD ["node", "matalarm.js"]

