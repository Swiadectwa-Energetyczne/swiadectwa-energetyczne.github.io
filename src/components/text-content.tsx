interface TextContentProps {
  htmlText: any[];
  additionalClass?: string;
}

export const TextContent = ({htmlText, additionalClass}: TextContentProps) => {
  return (
    <div className={(additionalClass ? `${additionalClass} ` : '') + "my-4 text-start"}>{htmlText}</div>
  );
}

export default TextContent;