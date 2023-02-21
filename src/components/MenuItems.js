import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import FeaturedRender from './FeaturedSubmenu';
export const menuItems = [
    {
        title: 'Store',
        url: '/store',
        submenu: [
            {
                title: 'Featured',
                url: 'featured',
                submenu: [
                    {
                        title: FeaturedRender(),
                        url: 'featured',
                    },
                ],
            },
            {
                title: 'Action',
                url: 'action-games',
            },
            {
                title: 'Adventure',
                url: 'adventure-games',
            },
            {
                title: 'First-Person Shooter',
                url: 'fps-games',
            },
            {
                title: 'Role-Playing Games',
                url: 'rpg-games',
            },
            {
                title: 'Survival',
                url: 'survival',
            },
            {
                title: 'Horror',
                url: 'horror',
            },
            {
                title: 'Open World',
                url: 'open-world',
            },
            {
                title: 'Roguelike',
                url: 'roguelike',
            },
            {
                title: 'Hack and Slash',
                url: 'hack-and-slash',
            },
        ],
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Support',
        url: '/support',
    },
    {
        title: 'Sign-In',
        url: '/sign-in',
    },
];

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (
                dropdown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    const closeDropdown = () => {
        dropdown && setDropdown(false);
    };

    return (
        <li
            className="menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeDropdown}
        >
            {items.submenu && items.url ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        <Link to={items.url}>{items.title}</Link>
                        {depthLevel > 0 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className="arrow" />
                        )}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    <FeaturedRender>
                        {depthLevel > 0 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className="arrow" />
                        )}
                    </FeaturedRender>

                    {/* <button>
                        {items.title}{' '}
                        {depthLevel > 0 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className="arrow" />
                        )}
                    </button> */}
                </>
            ) : (
                <Link to={items.url}>{items.title}</Link>
            )}
        </li>
    );
};

export default MenuItems;
