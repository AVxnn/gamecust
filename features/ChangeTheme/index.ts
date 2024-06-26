export default function changeTheme(value: any) {
  if (value == "white") {
    localStorage.setItem("Theme", "dark");
    document.body.setAttribute("dark", "");
    document.body.removeAttribute("white");
  } else {
    localStorage.setItem("Theme", "white");
    document.body.setAttribute("white", "");
    document.body.removeAttribute("dark");
  }
  return localStorage.getItem("Theme");
}
