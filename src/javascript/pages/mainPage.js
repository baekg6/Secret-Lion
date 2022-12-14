import Component from '../core/Component.js';
import { Header, MainContainer } from '../common/index.js';
import { auth, collection, db, getDocs, orderBy, query } from '../firebase.js';
import { MainPost } from '../components/mainPost/index.js';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.post = [];
    }
    async getPostData() {
        const posts = [];
        const postRef = collection(db, 'posts');
        const q = query(postRef, orderBy('date', 'desc'));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            posts.push(doc.data());
        });
        return posts;
    }

    render() {
        const docFrag = new DocumentFragment();

        const header = new Header();
        docFrag.appendChild(header.render());

        const main = new MainContainer();
        const mainEl = main.render();

        this.getPostData().then((posts) => {
            this.post = posts;
            const mainPost = new MainPost({ posts: this.post });
            mainEl.appendChild(mainPost.initialize());
        });

        docFrag.appendChild(mainEl);

        return docFrag;
    }
}

export default MainPage;
