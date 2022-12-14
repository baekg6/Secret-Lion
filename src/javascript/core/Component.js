class Component {
    // 컴포넌트 오버라이딩때 사용
    constructor(props) {
        this.props = props;
    }

    setState(newState) {
        this.state = newState;
        this.updater();
    }

    updater() {
        const rendered = this.render();
        this.lastRendered.replaceWith(rendered);
        this.lastRendered = rendered;
    }

    render() {}

    initialize() {
        const rendered = this.render();
        this.lastRendered = rendered;
        return this.lastRendered;
    }
}

export default Component;
