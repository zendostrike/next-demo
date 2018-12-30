import TabsContainer from "./styles";

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        index,
        isActive: index === this.state.activeIndex,
        onClick: () => this.setState({ activeIndex: index })
      });
    });

    return <TabsContainer>{children}</TabsContainer>;
  }
}
