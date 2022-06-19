import React, {Component, createRef} from 'react';
import classNames from 'classnames';

import Menu from './Menu';

export class MenuContainer extends Component {

    backdropRef = createRef();

    componentDidMount() {
        window.addEventListener('click', this.handleWindowClick);
        window.addEventListener('keydown', this.handleEscClick);
    }

    componentWillReceiveProps(nextProps) {
        const {isMenuOpen} = nextProps;
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    closeMenu = () => {
        const {onCloseMenu, isMenuOpen} = this.props;
        if (isMenuOpen) {
            onCloseMenu();
        }
    };

    handleWindowClick = ({target}) => {
        if (this.backdropRef.current === target || target.className === 'menu__link') {
            this.closeMenu();
        }
    };

    handleEscClick = e => {
        if (e.code !== 'Escape') {
            return;
        }
        this.closeMenu();
    };

    render() {
        const {items, isMenuOpen} = this.props;
        const backdropClass = classNames('backdrop', {'is-active': isMenuOpen});
        return (
            <>
                <div className={backdropClass} ref={this.backdropRef}></div>
                <Menu
                    isMenuOpen={isMenuOpen}
                    items={items}
                />
            </>
        );
    }
};
