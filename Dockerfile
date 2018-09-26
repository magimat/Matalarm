FROM arm32v7/node
 
ADD src/ /src
WORKDIR /src
 
RUN npm install
 
EXPOSE 4000 
 
CMD ["node", "matalarm.js"]
