import React from 'react';
import './styles.css';
import { PageHeader } from 'antd';

const HeaderSystem = () => {
    return (
        <PageHeader
            className="site-page-header"
            title="Title"
            subTitle="This is a subtitle"
        />
    );
}

export default HeaderSystem;