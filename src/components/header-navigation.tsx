interface HeaderNavigationProps {
  href: string;
  text: string
}

export const HeaderNavigation = ({href, text}: HeaderNavigationProps) => {
  return (
    <a className="py-2 px-5 rounded-full hover:bg-button-hover" href={href}>{text}</a>
  )
};

export default HeaderNavigation;
