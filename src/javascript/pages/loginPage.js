import { LoginForm, LoginLink } from '../components/Login/index.js';
import { auth } from '../firebase.js';

class LoginPage {
    constructor() {}
    render() {
        const frag = document.createDocumentFragment();

        const bodybgc = document.createElement('div');
        bodybgc.setAttribute('class', 'loginPage_bodyWrapper');

        const logo = document.createElement('h1');

        const logoImg = document.createElement('img');
        logoImg.setAttribute('src', './src/assets/logo300.svg');
        logoImg.setAttribute('alt', '비밀멋사 로고이미지');
        logoImg.setAttribute('class', 'loginPage_img_headerLogo');

        const title = document.createElement('p');
        title.setAttribute('class', 'loginPage_h1_title');
        title.textContent = '멋쟁이사자처럼 프론트엔드 스쿨의 비밀이야기';

        const loginMain = document.createElement('main');
        loginMain.setAttribute('class', 'loginPage_main_wrapper');

        const subTit = document.createElement('p');
        subTit.setAttribute('class', 'loginPage_p_subTit');
        subTit.innerHTML = '지금 <strong class="loginPage_strong">비밀멋사</strong>를 시작하세요!';

        logo.appendChild(logoImg);

        const loginForm = new LoginForm();
        const loginLink = new LoginLink();
        loginMain.appendChild(subTit);
        loginMain.appendChild(loginForm.render());
        loginMain.appendChild(loginLink.render());

        bodybgc.appendChild(logo);
        bodybgc.appendChild(title);
        bodybgc.appendChild(loginMain);
        frag.appendChild(bodybgc);

        return frag;
    }
}

export default LoginPage;
