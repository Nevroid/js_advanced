'use strict'

const joinButton = document.querySelector('.registration__form__button')
if (joinButton) {
    joinButton.addEventListener('click', function () {
        const firstNameInput = document.getElementById('firstNameInput')
        const lastNameInput = document.getElementById('lastNameInput')
        const phoneInput = document.getElementById('phoneInput')
        const emailInput = document.getElementById('emailInput')
        const nameTest = /^[A-zА-яЁё]+$/i;
        if (nameTest.test(firstNameInput.value)) {
            console.log(`В поле "Имя" Вы ввели: ${firstNameInput.value}`)
        } else {
            console.log('Поле "Имя" должно содержать только буквы')
            firstNameInput.placeholder = 'Поле "Имя" должно содержать только буквы'
        }

        const lastNameTest = /^[A-zА-яЁё]+$/i;
        if (lastNameTest.test(lastNameInput.value)) {
            console.log(`В поле "Фамилия" Вы ввели: ${lastNameInput.value}`)
        } else {
            console.log('Поле "Фамилия" должно содержать только буквы')
            lastNameInput.placeholder = 'Поле "Фамилия" должно содержать только буквы'

        }

        const phoneTest = /^\+7\(\d{3}\)\d{3}\-\d{4}$/;
        if (phoneTest.test(phoneInput.value)) {
            console.log(`В поле "Телефон" Вы ввели: ${phoneInput.value}`)
        } else {
            console.log(`Поле "Телефон" должно быть вида: +7(000)000-0000`)
            phoneInput.placeholder = `Поле "Телефон" должно быть вида: +7(000)000-0000`
        }

        const emailTest = /^([A-z0-9_\-]+\.)*[A-z0-9_\-]+@[A-z0-9_\-]+\.[A-z]{2,3}$/i;
        if (emailTest.test(emailInput.value)) {
            console.log(`В поле "e-mail" Вы ввели: ${emailInput.value}`)
        } else {
            console.log('Введите корректный e-mail')
            emailInput.placeholder = 'Введите корректный e-mail'
        }


    })
}