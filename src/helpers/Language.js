const client_URL = import.meta.env.VITE_APP_CLIENT_URL;

export const languageOptions = [
  {
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
    label: "JavaScript (Node.js 12.14.0)",
    value: "javascript",
    image: `${client_URL}/js.png`,
  },
  {
    id: 74,
    name: "TypeScript (3.7.4)",
    label: "TypeScript (3.7.4)",
    value: "typescript",
    image: `${client_URL}/typescript.png`
  },
  {
    id: 72,
    name: "Ruby (2.7.0)",
    label: "Ruby (2.7.0)",
    value: "ruby",
    image: `${client_URL}/ruby (1).png`
  },
  {
    id: 68,
    name: "PHP (7.4.1)",
    label: "PHP (7.4.1)",
    value: "php",
    image: `${client_URL}/php.png`,
    // extension: php
  },
  {
    id: 50,
    name: "C (GCC 9.2.0)",
    label: "C (GCC 9.2.0)",
    value: "c",
    image: `${client_URL}/letter-c.png`,
    // extension: Clang
  },
  {
    id: 54,
    name: "C++ (GCC 9.2.0)",
    label: "C++ (GCC 9.2.0)",
    value: "cpp",
    image: `${client_URL}/c-.png`
  },
  {
    id: 71,
    name: "Python (3.8.1)",
    label: "Python (3.8.1)",
    value: "python",
    image: `${client_URL}/python.png`,
    // extension: python
  }
]