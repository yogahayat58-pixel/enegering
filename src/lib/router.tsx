import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  pathname: string;
  slug?: string;
  query: Record<string, string>;
  push: (href: string) => void;
  replace: (href: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  pathname: '/',
  query: {},
  push: () => {},
  replace: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    // Support either clean pathname or hash fallback for subfolder deploys
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      return hash.slice(1);
    }
    return window.location.pathname || '/';
  });

  const [query, setQuery] = useState<Record<string, string>>({});

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      const path = hash && hash.startsWith('#/') ? hash.slice(1) : window.location.pathname || '/';
      setCurrentPath(path);
      updateQuery();
    };

    const updateQuery = () => {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const q: Record<string, string> = {};
      params.forEach((v, k) => {
        q[k] = v;
      });
      setQuery(q);
    };

    updateQuery();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const push = (href: string) => {
    if (typeof window === 'undefined') return;

    // Separate path and query if any
    const [pathPart, queryPart] = href.split('?');
    const path = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;

    if (queryPart) {
      const params = new URLSearchParams(queryPart);
      const q: Record<string, string> = {};
      params.forEach((v, k) => {
        q[k] = v;
      });
      setQuery(q);
    } else {
      setQuery({});
    }

    // Try pushState; also set hash for static hosting resilience
    try {
      window.history.pushState({}, '', href);
    } catch {
      window.location.hash = path;
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const replace = (href: string) => {
    if (typeof window === 'undefined') return;
    const [pathPart] = href.split('?');
    const path = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
    try {
      window.history.replaceState({}, '', href);
    } catch {
      window.location.hash = path;
    }
    setCurrentPath(path);
  };

  // Extract dynamic slug if present (e.g. /layanan/cnc-machining -> slug: "cnc-machining")
  const pathSegments = currentPath.split('/').filter(Boolean);
  let slug: string | undefined = undefined;
  let baseRoute = currentPath;

  if (pathSegments.length >= 2) {
    baseRoute = `/${pathSegments[0]}`;
    slug = pathSegments[1];
  } else if (pathSegments.length === 1) {
    baseRoute = `/${pathSegments[0]}`;
  } else {
    baseRoute = '/';
  }

  return (
    <RouterContext.Provider value={{ pathname: baseRoute, slug, query, push, replace }}>
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = '',
  onClick,
  ...rest
}) => {
  const router = useRouter();
  const isActive = router.pathname === href || (href !== '/' && router.pathname.startsWith(href));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's external link or modifier key pressed, let default browser behavior happen
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || e.metaKey || e.ctrlKey) {
      if (onClick) onClick(e);
      return;
    }

    e.preventDefault();
    router.push(href);
    if (onClick) onClick(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`}
      {...rest}
    >
      {children}
    </a>
  );
};
