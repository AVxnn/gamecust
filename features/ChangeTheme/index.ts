export default function changeTheme() {
    const Theme = localStorage.getItem('Theme')
    if (Theme == 'white') {
      localStorage.setItem('Theme', 'dark');
      document.body.setAttribute("dark", "");
    } else {
      localStorage.setItem('Theme', 'white');
      document.body.removeAttribute("dark");
    }
    return Theme;
  }