const btn = document.querySelector('.btn')

btn.addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert('Заполните все поля формы.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Пароль и подтверждение пароля не совпадают.');
        return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (existingUsers.some(user => user.username === username)) {
        alert('Пользователь с таким именем уже существует.');
        return;
    }

    const newUser = {
        username: username,
        email: email,
        password: password
    };

    existingUsers.push(newUser);

    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('ХОрош');

    document.getElementById('registrationForm').reset();
});