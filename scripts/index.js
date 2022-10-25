const URL = 'http://127.0.0.1:3000'
const getCardTemplate = (name, tel, email) => {
  return `<div class="card__container" data-name="${name}">
      <div class="card">
        <div class="card__name">
          <p>${name}</p>
        </div>
        <div class="card__contact">
          <div class="card__tel">
            <span class="card__tel-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 490 490"
                style="enable-background: new 0 0 490 490"
                xml:space="preserve"
              >
                <path
                  d="M270.811 75c0 8.284-6.716 15-15 15h-21.622c-8.284 0-15-6.716-15-15s6.716-15 15-15h21.622c8.284 0 15 6.716 15 15zM460 388.846v12.308c0 48.99-36.635 88.846-81.667 88.846H111.667C66.635 490 30 450.144 30 401.154v-12.308c0-48.383 35.737-87.857 80-88.828V45c0-24.813 20.187-45 45-45h180c24.813 0 45 20.187 45 45v255.018c44.263.971 80 40.445 80 88.828zM140 190h210V45c0-8.271-6.729-15-15-15H155c-8.271 0-15 6.729-15 15v145zm210 140v-40h-50v40h50zm-50 30v40h35c8.271 0 15-6.729 15-15v-25h-50zm50-100v-40h-50v40h50zm-80 70v-40h-50v40h50zm-50 30v40h50v-40h-50zm50-100v-40h-50v40h50zm-130 0h50v-40h-50v40zm0 70h50v-40h-50v40zm0 55c0 8.271 6.729 15 15 15h35v-40h-50v25zm290 3.846c0-31.812-22.28-57.81-50-58.816V385c0 24.813-20.187 45-45 45H155c-24.813 0-45-20.187-45-45v-54.97c-27.72 1.006-50 27.004-50 58.816v12.308C60 433.602 83.178 460 111.667 460h266.667C406.822 460 430 433.602 430 401.154v-12.308z"
                  fill="#be62d5"
                />
              </svg>
            </span>
            <p>${tel}</p>
          </div>
          <div class="card__email">
            <span class="card__email-icon item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                xml:space="preserve"
              >
                <path
                  d="M58.003 8H5.997a6 6 0 0 0-6 6v36a6 6 0 0 0 6 6h52.006a6 6 0 0 0 6-6V14a6 6 0 0 0-6-6zm4 41.11L43.085 30.193l18.918-12.056v30.975zM5.997 10h52.006c2.206 0 4 1.794 4 4v1.766L34.468 33.313c-1.49.95-3.394.92-4.85-.07L1.997 14.47V14c0-2.206 1.794-4 4-4zm-4 6.885 19.185 13.04L1.997 49.111V16.885zM58.003 54H5.997a4.005 4.005 0 0 1-3.677-2.428l20.52-20.52 5.655 3.844a6.41 6.41 0 0 0 7.046.104l5.842-3.724L61.68 51.572A4.005 4.005 0 0 1 58.003 54z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <p>${email}</p>
          </div>
        </div>
      </div>
    </div>`
}
const getPopupTemplate = (user) => {
  return `
    <div class="popup__container-card">
    <div class="popup__data-close">
      <span class="close__btn">&#10006</span>
    </div>
    <div class="card__popup">
      <div class="card__popup-popup__data">
        <div class="popup__data">
          <div class="popup__data-popup__name">
            <p class="popup__name">${user.name}</p>
          </div>
          <div class="popup__data-fields">
            <div class="fields-field">
              <div class="field__tel">
                <span class="tel tag">Телефон:</span>
                <span class="tel__value value">${user.phone}</span>
              </div>
              <div class="field__mail">
                <span class="mail tag">Почта:</span>
                <span class="mail__value value">${user.email}</span>
              </div>
              <div class="field__date">
                <span class="date tag">Дата приема:</span>
                <span class="date__value value">${user.hire_date}</span>
              </div>
              <div class="field__position">
                <span class="position tag">Должность:</span>
                <span class="position__value value">${user.position_name}</span>
              </div>
              <div class="field__departure">
                <span class="departure tag">Подразделение:</span>
                <span class="departure__value value">${user.department}</span>
              </div>
            </div>
          </div>
          <div class="popup__data-other__info">
            <div class="other__info">
              <div class="other__info-header">
                <div class="header">
                  <p>Дополнительная информация:</p>
                </div>
              </div>
              <div class="other__info-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum dolorum ullam hic repellendus aperiam, atque quia
                    voluptate veritatis, aspernatur in adipisci eum facilis
                    quidem beatae ipsam necessitatibus dolorem reiciendis
                    ipsa?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      `
}
const wrapper = document.querySelector('.wrapper')
const cardsContainer = document.querySelector('.main-content__card')
const searchContainer = document.querySelector('.main-content__search')
const searchInput = document.querySelector('.search')
const searchButton = document.querySelector('.search__button')
const searchForm = document.querySelector('form')

const getData = async () => {
  const data = fetch(URL).then((res) => res.json())
  return data
}
const getSpecifiedData = async (value) => {
  const data = fetch(`${URL}?term=${value}`).then((res) => res.json())
  return await data
}

window.addEventListener('load', () => renderCards())

const renderCards = async () => {
  const usersList = await getData()
  if (usersList.length) {
    usersList.forEach((item) => {
      cardsContainer.insertAdjacentHTML(
        'afterbegin',
        getCardTemplate(item.name, item.phone, item.email)
      )
    })
    return
  }
  cardsContainer.insertAdjacentHTML('afterbegin', '<h1>No data!</h1>')
}

cardsContainer.addEventListener('click', (e) => {
  e.preventDefault()
  const card = e.target.closest('.card__container')
  if (card) showPopup(card.dataset.name)
})

searchContainer.addEventListener('click', (e) => {
  e.preventDefault()
  const card = e.target.closest('.card__container')
  if (card) showPopup(card.dataset.name)
})

const showPopup = async (name) => {
  const usersList = await getData()
  usersList.forEach((item) => {
    if (item.name === name) {
      wrapper.insertAdjacentHTML('afterbegin', getPopupTemplate(item))
    }
  })
}

wrapper.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('popup__data-close') ||
    e.target.classList.contains('close__btn') ||
    e.target.classList.contains('popup__container-card')
  ) {
    const popupWrapper = wrapper.querySelector('.popup__container-card')
    wrapper.removeChild(popupWrapper)
  }
})

searchButton.addEventListener('click', async (e) => {
  e.preventDefault()
  if (searchInput.value.length > 1) {
    cardsContainer.classList.add('hide')
    searchContainer.classList.remove('hide')
    const specifiqueUser = await getSpecifiedData(searchInput.value)
    if (!specifiqueUser.length) {
      searchContainer.innerHTML = ''
      searchContainer.insertAdjacentHTML('afterbegin', '<h1>Not found!</h1>')
      return
    }
    specifiqueUser.forEach((item) => {
      searchContainer.innerHTML = ''
      searchContainer.insertAdjacentHTML(
        'afterbegin',
        getCardTemplate(item.name, item.phone, item.email)
      )
    })
  } else {
    alert('Please type more than 1 symbol')
  }
})

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  if (searchInput.value.length > 1) {
    cardsContainer.classList.add('hide')
    searchContainer.classList.remove('hide')
    const specifiqueUser = await getSpecifiedData(searchInput.value)
    if (!specifiqueUser.length) {
      searchContainer.innerHTML = ''
      searchContainer.insertAdjacentHTML('afterbegin', '<h1>Not found!</h1>')
      return
    }
    specifiqueUser.forEach((item) => {
      searchContainer.innerHTML = ''
      searchContainer.insertAdjacentHTML(
        'afterbegin',
        getCardTemplate(item.name, item.phone, item.email)
      )
    })
  } else {
    alert('Please type more than 1 symbol')
  }
})

searchInput.addEventListener('blur', () => {
  if (searchInput.value.length) return
  searchContainer.innerHTML = ''
  searchContainer.classList.add('hide')
  cardsContainer.classList.remove('hide')
})
