interface HeaderNavigationProps {
  href: string;
  text: string
  blank?: boolean;
}

export const HeaderNavigation = ({href, text, blank}: HeaderNavigationProps) => {
  return (
    <a className="py-2 px-5 rounded-full lg:hover:bg-button-hover" href={href} target={blank ? "_blank" : ""}>{text}</a>

  )
};

export default HeaderNavigation;
