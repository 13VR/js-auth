document.addEventListener('DOMContentLoaded', () => {
  if (window.session) {
    const { user } = window.session
    console.log(user)
    //Якщо користувач зареєстрований відкриє домашню сторінку
    if (user.isConfirm) {
      location.assign('/home')
    } else {
      location.assign('/signup-confirm')
    }
  } else {
    //Якщо сессії не має, перейде на сторінку
    location.assign('/signup')
  }
})
