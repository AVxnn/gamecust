import React from 'react';
import Link from 'next/link';

interface IAppLinkProps {
  children?: any,
  url: string | null,
  className?: string,
  isExternal: boolean,
  text?: string,
  popup?: boolean,
  onMouseDown?: any,
  onClick?: any,
}

const GameLink = ({ children, url, className, isExternal, text, popup, onMouseDown, onClick }: IAppLinkProps) => {

    return (
        <>
            {isExternal ?
                <a
                    href={url || "#"}
                    className={className}
                    target={popup ? "_blank" : "_self"}
                    rel="noreferrer"
                    onMouseDown={onMouseDown}
                    onClick={onClick}
                >{children ? children : text}</a>
                :
                <Link
                className={className}
                target={popup ? "_blank" : "_self"}
                rel="noreferrer"
                onMouseDown={onMouseDown}
                onClick={onClick}
                href={url || "#"}
                >
                {children ? children : text}
                </Link>
            }
        </>
    )
};

export default GameLink;
