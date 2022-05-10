export type ToolHeaderProps = { headerText: string };

export const ToolHeader = (props: ToolHeaderProps) => {

  return (
    <header>
      <h3>{props.headerText}</h3>
    </header>
  );

};

ToolHeader.defaultProps = {
  headerText: 'The Tool',
};
