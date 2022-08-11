import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";

const NavLink = ({title, href}) => {
    return (
        <Link href={href}>
            <a>{title}</a>
        </Link>
    );
};

NavLink.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default NavLink;
