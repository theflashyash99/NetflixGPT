# 🎬 Netflix GPT

A fully functional Netflix-inspired web application built using **React** and **Tailwind CSS**, featuring Firebase authentication and AI-powered movie suggestions.

---

## 🚀 Features

- 🔐 **Login Page**
- 📝 **Signup Page**
- 🧭 **Routing of Application**
- ✅ **Form Validation**
- 🔁 **Redirects to Browse Page after Login**
- 🧠 **useRef Hook**
- 🔥 **Firebase Setup**
  - Create user account with **SignUp**
  - Implement **SignIn** API
  - **Sign Out** functionality
  - **Update Profile**
- 📦 **Redux Store**

  - `userSlice` for managing user state

  - ## Others
  - BugFix : Sign up user displayName and profile update
  - BugFix : if the user is not logged in redirect to login else logged in then make user to be on browse
  - unsubscribe to the onAuthStateChanged callback
  - added hardcoded value to constants file/utils.
  - Register TMDB API & Create an app & get access to token
  - Get data from TMDB now playing movies list API.
  - Added movies data to the store (movieslice)
  - update store with movies data
  - Planning for main container and secondary container
  - fetch data for trailer video
  - update the store with video data.
  - embedded the YouTube Video and make it autoplay and mute it.
  - tailwind classes to make Main Container looks awesome.
  - Build Secondary components
  - Build Movie List
  - Build Movies Card
  - TMDB Image CDN URL
  - Made the Browse page amazing with tailwind CSS.
  - UsepopularMovies, UseTopRatedMovies , UseUpcomingMovies custom hook
  - GPT Search Feature.
  - (BONUS) Multi-Language Feature in our app
  - ChartGPT integration Day 1 - knowing the basics
  - woking with OpenAPI


---

## 📺 Browse Page

- 🎬 **Header**
- 🍿 **Main Movie Section**
  - 🎞️ Trailer playing in the background
  - 📝 Title and Description overlay
- 🎯 **Movie Suggestions**
  - Multiple reusable `MovieList` components
  - Dynamically categorized sections (e.g., Trending, Top Rated)

---

## 🤖 AI Integration – NetflixGPT

- 🔍 **Smart SearchBar**
  - AI-powered movie recommendations
  - Search by **genre**, **mood**, **keywords**, etc.

---

## 🛠️ Tech Stack

- ⚛️ React (Create React App)
- 🎨 Tailwind CSS
- 🔥 Firebase Authentication & Hosting
- 🗃️ Redux Toolkit
- 🤖 AI integration for searching about movies

---


