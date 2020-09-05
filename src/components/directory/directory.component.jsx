import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl:
                        'https://i.imgur.com/kWcC60T.jpg',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl:
                        'https://i.imgur.com/WKhkhzL.jpg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl:
                        'https://i.imgur.com/iSlQyGc.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl:
                        'https://i.imgur.com/ItDOun0.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl:
                        'https://i.imgur.com/Zn2mjP9.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                    />
                ))}
            </div>
        );
    }
}

export default Directory;
