# Currency Converter 🌍💰

A **React.js** currency converter that allows users to convert values between different currencies in real time using an external API. This project is built with **custom hooks, advanced optimizations, and efficient form handling.**

---

## 🚀 Features

✅ **Real-time Currency Conversion** – Fetches up-to-date exchange rates.  
✅ **Custom Hook (`useCurrencyInfo`)** – Manages API calls for cleaner code.  
✅ **Swap Functionality** – Easily switch between two selected currencies.  
✅ **Optimized Input Handling** – Uses `useId()` to manage multiple instances of the same component.
✅ **Form Handling & Preventing Unwanted Submissions** – Proper usage of `preventDefault()` and button types.
✅ **Styled with Tailwind CSS** – Ensures a responsive and clean UI.

---

## 🛠️ Technologies Used

- **React.js** ⚛️
- **Custom Hooks**
- **useId() for Optimization**
- **Fetch API** (for currency exchange rates)
- **Tailwind CSS** (for styling)

---

## 🔧 Installation & Setup

1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
```

2️⃣ **Install Dependencies**
```sh
npm install
```

3️⃣ **Start the Project**
```sh
npm start
```

Your app should now be running at `http://localhost:3000/` 🚀

---

## 📌 Learnings from This Project

### 1️⃣ Creating Custom Hooks
- Extracted API logic into a reusable `useCurrencyInfo()` hook.
- Helps maintain clean and modular code.

### 2️⃣ Understanding the `key` Attribute in Lists
- Used `key` properly to optimize rendering when mapping through JSX elements.

### 3️⃣ Optimizing with `useId()`
- Used `useId()` to manage input field IDs efficiently when reusing the **same component multiple times**.

### 4️⃣ Handling Forms Properly
- Implemented `preventDefault()` to avoid page reloads when submitting the form.
- Ensured the **swap button had `type="button"`** to prevent unintended form submissions.

### 5️⃣ Debugging a Button Type Issue
- **Mistake:** Forgot to set `type="button"` for the Swap button, causing unexpected form submissions.
- **Fix:** Specified button types properly (`type="button"` for non-submit actions, `type="submit"` for form submission).

---

## 🐞 Troubleshooting & Common Issues

### Issue: Form refreshes on clicking "Swap"
🔹 **Cause:** Missing `type="button"` in the Swap button.  
🔹 **Fix:** Ensure `<button type="button">Swap</button>` to prevent unintended form submission.

---

## 💡 Future Improvements

🚀 Add dark mode support.  
🚀 Improve error handling for API failures.  
🚀 Enhance UI with more intuitive animations.

---

## Repository

📂 **GitHub Repository:** [https://github.com/Naru32/Currency-Converter.git](#)  

If you like this project, **don't forget to ⭐ the repo!** 🚀

---

## 📬 Contact & Connect

👤 **Narendra Mahalle**  
💼 [LinkedIn](https://linkedin.com/in/yourprofile)  
📧 [Email](mailto:narendramahalle1434@gmail.com)  

Let's build something amazing together! 😃🚀

