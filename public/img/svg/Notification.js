import React from 'react';

const Notification = ({type}) => {
  return type ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M22.1667 15.85V11.6663C22.1667 7.91317 19.6175 4.75151 16.1642 3.80067C15.8223 2.93967 14.987 2.33301 14 2.33301C13.013 2.33301 12.1777 2.93967 11.8358 3.80067C8.3825 4.75267 5.83333 7.91317 5.83333 11.6663V15.85L3.84183 17.8415C3.73328 17.9497 3.6472 18.0782 3.58853 18.2198C3.52987 18.3613 3.49978 18.5131 3.5 18.6663V20.9997C3.5 21.3091 3.62292 21.6058 3.84171 21.8246C4.0605 22.0434 4.35725 22.1663 4.66667 22.1663H23.3333C23.6428 22.1663 23.9395 22.0434 24.1583 21.8246C24.3771 21.6058 24.5 21.3091 24.5 20.9997V18.6663C24.5002 18.5131 24.4701 18.3613 24.4115 18.2198C24.3528 18.0782 24.2667 17.9497 24.1582 17.8415L22.1667 15.85ZM22.1667 19.833H5.83333V19.1493L7.82483 17.1578C7.93338 17.0497 8.01947 16.9211 8.07814 16.7796C8.1368 16.638 8.16689 16.4862 8.16667 16.333V11.6663C8.16667 8.44984 10.7835 5.83301 14 5.83301C17.2165 5.83301 19.8333 8.44984 19.8333 11.6663V16.333C19.8333 16.6433 19.9558 16.9397 20.1752 17.1578L22.1667 19.1493V19.833ZM14 25.6663C14.7225 25.6672 15.4274 25.443 16.0166 25.0249C16.6058 24.6067 17.0501 24.0153 17.2877 23.333H10.7123C10.9499 24.0153 11.3942 24.6067 11.9834 25.0249C12.5726 25.443 13.2775 25.6672 14 25.6663Z" fill="black"/>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 22C12.6193 22.0008 13.2235 21.8086 13.7285 21.4502C14.2335 21.0917 14.6143 20.5849 14.818 20H9.182C9.38566 20.5849 9.76648 21.0917 10.2715 21.4502C10.7765 21.8086 11.3807 22.0008 12 22ZM19 14.586V10C19 6.783 16.815 4.073 13.855 3.258C13.562 2.52 12.846 2 12 2C11.154 2 10.438 2.52 10.145 3.258C7.185 4.074 5 6.783 5 10V14.586L3.293 16.293C3.19996 16.3857 3.12617 16.4959 3.07589 16.6172C3.0256 16.7386 2.99981 16.8687 3 17V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18V17C21.0002 16.8687 20.9744 16.7386 20.9241 16.6172C20.8738 16.4959 20.8 16.3857 20.707 16.293L19 14.586Z" fill="black"/>
    </svg>
  )
};

export default Notification;
