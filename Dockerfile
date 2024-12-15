# Wybierz bazowy obraz Node.js
FROM node:18

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj pliki zależności
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj kod aplikacji
COPY . .

# Zbuduj aplikację React
RUN npm run build

# Ustaw serwer statyczny
RUN npm install -g serve

# Otwórz port dla frontend
EXPOSE 3000

# Uruchom aplikację
CMD ["npm", "start"]
