export default function changeTheme(value: any) {
  const Theme = localStorage.getItem("Theme");
  if (value == "white") {
    localStorage.setItem("Theme", "white");
    document.body.setAttribute("white", "");
    document.body.removeAttribute("dark");
  } else {
    localStorage.setItem("Theme", "dark");
    document.body.setAttribute("dark", "");
    document.body.removeAttribute("white");
  }
  return Theme;
}
