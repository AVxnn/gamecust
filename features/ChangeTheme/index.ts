export default function changeTheme() {
    const Theme = localStorage.getItem('Theme')
    if (Theme == 'white') {
      localStorage.setItem('Theme', 'dark');
    } else {
      localStorage.setItem('Theme', 'white');
    }
    return Theme;
  }