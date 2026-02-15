# Product Manager Application

Aplikacja do zarządzania produktami zbudowana z wykorzystaniem technologii .NET i JavaScript. Projekt zawiera backend API oraz frontend.

## 📋 Opis projektu

**Product Manager** to aplikacja klient-serwer, która umożliwia:
- Zarządzanie listą produktów
- Dodawanie nowych produktów
- Aktualizację informacji o produktach
- Usuwanie produktów
- Przeglądanie listy produktów

### Architektura

- **Backend**: ASP.NET Core 8.0 Web API
- **Frontend**: Aplikacja JavaScript z interfejsem HTML
- **Testy**: C# testy jednostkowe (xUnit) i testy JavaScript (Jest)

## 🚀 Instrukcja uruchomienia

### Wymagania wstępne

Przed uruchomieniem aplikacji upewnij się, że masz zainstalowane:
- **.NET SDK 8.0** lub nowsze ([pobierz](https://dotnet.microsoft.com/download))
- **Node.js 18.0** lub nowsze ([pobierz](https://nodejs.org/))
- **npm** (przychodzi z Node.js)
- **Git**

### Krok 1: Klonowanie repozytorium

```bash
git clone <repository-url>
cd DevOps-zaliczenie
```

### Krok 2: Uruchomienie Backend API

```bash
cd backend/ProductApi

# Przywrócenie zależności
dotnet restore

# Budowanie projektu
dotnet build

# Uruchomienie aplikacji
dotnet run
```

API będzie dostępne pod adresem: **http://localhost:5000**

Swagger UI dostępny jest pod adresem: **http://localhost:5000/swagger**

### Krok 3: Uruchomienie Frontend

W nowym terminalu:

```bash
cd frontend

# Instalacja zależności
npm install

# Budowanie projektu
npm run build

# Uruchomienie testów (opcjonalnie)
npm test

# Sprawdzenie kodu (opcjonalnie)
npm run lint
```

Frontend jest dostępny poprzez plik `index.html` w folderze `dist/`.

### Krok 4: Uruchomienie testów Backend

```bash
cd backend/ProductApi.Tests

# Przywrócenie zależności
dotnet restore

# Uruchomienie testów
dotnet test
```

## 📁 Struktura projektu

```
DevOps-zaliczenie/
├── backend/
│   ├── ProductApi/              # Główna aplikacja API
│   │   ├── ProductApi.csproj
│   │   ├── Program.cs
│   │   └── ...
│   └── ProductApi.Tests/        # Testy do API
│       ├── ProductApi.Tests.csproj
│       ├── ProductTests.cs
│       └── ...
├── frontend/                     # Aplikacja frontendowa
│   ├── index.html
│   ├── app.js
│   ├── app.test.js
│   ├── package.json
│   └── ...
└── README.md
```

## 🔧 Dostępne komendy

### Backend
- `dotnet restore` - Przywrócenie pakietów NuGet
- `dotnet build` - Budowanie projektu
- `dotnet run` - Uruchomienie aplikacji
- `dotnet test` - Uruchomienie testów
- `dotnet clean` - Czyszczenie artefaktów budowania

### Frontend
- `npm install` - Instalacja zależności
- `npm run build` - Budowanie projektu
- `npm test` - Uruchomienie testów
- `npm run lint` - Analiza kodu

## 🧪 Testowanie

### Testy Backend

```bash
cd backend/ProductApi.Tests
dotnet test
```

### Testy Frontend

```bash
cd frontend
npm test
```

## 📝 Notatki

- Backend API domyślnie działa na porcie 5000
- Frontend jest statyczną aplikacją JavaScript
- Upewnij się, że porty 5000 (backend) są wolne przed uruchomieniem aplikacji
